import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { ReflexElement } from 'react-reflex';

type Orientation = 'horizontal' | 'vertical';

type LockSizePayload = {
  locked: boolean;
  paneId: string;
  size: number;
};

type ControlledElementProps = {
  id: string;
  name: string;
  orientation: Orientation;
  sizeLocked: boolean;
  onLockSize: (payload: LockSizePayload) => void;
};

export const ControlledElement = forwardRef<HTMLDivElement, ControlledElementProps>(
  ({ id, name, orientation, sizeLocked, onLockSize, ...rest }, ref) => {
    const [size, setSize] = useState(-1);
    const elementRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => elementRef.current!);

    const getSize = useCallback(() => {
      const el = elementRef.current;
      if (!el) return 0;

      switch (orientation) {
        case 'horizontal':
          return el.offsetHeight;
        case 'vertical':
          return el.offsetWidth;
        default:
          return 0;
      }
    }, [orientation]);

    const animate = useCallback(
      async (
        start: number,
        end: number,
        step: number,
        done: (from: number, to: number) => boolean,
        fn: (size: number) => Promise<void>
      ) => {
        const stepFn = async () => {
          if (!done(start, end)) {
            start += step;
            await fn(start);
            requestAnimationFrame(stepFn);
          }
        };
        stepFn();
      },
      []
    );

    const onLockSizeClicked = () => {
      onLockSize({
        locked: sizeLocked,
        paneId: id,
        size: getSize()
      });
    };

    const onMinimizeClicked = () => {
      const currentSize = getSize();
      const update = (size: number) =>
        new Promise<void>((resolve) => {
          setSize(size < 25 ? 25 : size);
          resolve();
        });

      const done = (from: number, to: number) => from < to;

      animate(currentSize, 25, -8, done, update);
    };

    const onMaximizeClicked = () => {
      const currentSize = getSize();
      const update = (size: number) =>
        new Promise<void>((resolve) => {
          setSize(size);
          resolve();
        });

      const done = (from: number, to: number) => from > to;

      animate(currentSize, 400, 8, done, update);
    };

    const lockStyle = sizeLocked ? { color: '#FF0000' } : {};

    return (
      <ReflexElement size={size} {...rest}>
        <div ref={elementRef} className="pane-content">
          <div className="pane-control">
            <label>{name} Controls</label>
            <button onClick={onMaximizeClicked}>
              <label> + </label>
            </button>
            <button onClick={onMinimizeClicked}>
              <label> - </label>
            </button>
            <button onClick={onLockSizeClicked}>
              <label style={lockStyle}> = </label>
            </button>
          </div>
          <div className="ctrl-pane-content">
            <label>{name}</label>
          </div>
        </div>
      </ReflexElement>
    );
  }
);

ControlledElement.displayName = 'ControlledElement';
