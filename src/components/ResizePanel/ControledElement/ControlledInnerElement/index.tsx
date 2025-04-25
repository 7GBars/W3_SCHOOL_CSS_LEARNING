import {forwardRef, useImperativeHandle, useRef, useState} from "react";
import {ReflexElement} from "react-reflex";
import type {PaneConfig} from "../../types";

const MIN_SIZE = 25;
const MAX_SIZE = 400;
const STEP = 8;

export const ControlledInnerElement = forwardRef((props: PaneConfig, ref) => {
  const containerRef = useRef<HTMLDivElement>(null)
  useImperativeHandle(ref, () => containerRef.current!);

  const getSize = () => {
    const domElement = containerRef.current

    console.log('props.orientation', props)
    switch (props.orientation) {

      case 'horizontal':
        return domElement?.offsetHeight

      case 'vertical':
        return domElement?.offsetWidth

      default:
        return 0
    }
  }

  const [size, setSize] = useState(-1);
  const animate = (
    start: number,
    end: number,
    step: number,
    done: (from: number, to: number) => boolean,
    update: (size: number) => void
  ) => {
    const stepFn = () => {
      if (!done(start, end)) {
        start += step;
        update(start < MIN_SIZE ? MIN_SIZE : start);
        requestAnimationFrame(stepFn);
      }
    };

    stepFn();
  };

  const onMaximizeClicked = () => {
    const currentSize = getSize() ?? 0;
    animate(currentSize, MAX_SIZE, STEP, (from, to) => from >= to, setSize);

    console.log('click maximize', props.name)
    console.log('currentSize', currentSize)
  }
  const onMinimizeClicked = () => {
    const currentSize = getSize() ?? 0;
    animate(currentSize, MIN_SIZE, -STEP, (from, to) => from <= to, setSize);
    console.log('click minimize', props.name)
    console.log('currentSize', currentSize)
  }

  return (
    <ReflexElement size={size} {...props}>
      <div className="pane-content" ref={containerRef}>
        <div className="pane-control">
          <label>
            {props.name}  Controls
          </label>
          <button onClick={onMaximizeClicked}>
            <label> + </label>
          </button>
          <button onClick={onMinimizeClicked}>
            <label> - </label>
          </button>

        </div>
        <div className="ctrl-pane-content">
          <label>
            {props.name}
          </label>
        </div>
      </div>
    </ReflexElement>
  )
})