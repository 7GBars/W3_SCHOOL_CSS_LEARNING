import React, {
    useState,
    useRef,
    useEffect,
    forwardRef,
    useImperativeHandle,
    PropsWithChildren
} from 'react'
import {
    ReflexContainer,
    ReflexElement,
    ReflexSplitter
} from 'react-reflex'
import 'react-reflex/styles.css'

const MIN_SIZE = 25
const MAX_SIZE = 400
const STEP = 8

const useAnimatedSize = (initial: number) => {
    const [size, setSize] = useState(initial)
    const ref = useRef<number>()

    const animateTo = (target: number) => {
        const animate = () => {
            setSize((prev) => {
                const next = prev + Math.sign(target - prev) * STEP
                if (Math.abs(next - target) <= STEP) {
                    cancelAnimationFrame(ref.current!)
                    return target
                }
                ref.current = requestAnimationFrame(animate)
                return next
            })
        }
        ref.current = requestAnimationFrame(animate)
    }

    useEffect(() => () => cancelAnimationFrame(ref.current!), [])

    return [size, animateTo] as const
}

type Orientation = 'horizontal' | 'vertical'

type ControlledElementProps = PropsWithChildren<{
    name: string
    orientation: Orientation
}>

export const ControlledElement = forwardRef<HTMLDivElement, ControlledElementProps>(
  ({ name, orientation, children, ...rest }, ref) => {
      const elementRef = useRef<HTMLDivElement>(null)

      useImperativeHandle(ref, () => elementRef.current!)
      const [size, animateTo] = useAnimatedSize(100)  // Each panel will have its own size
      const [expanded, setExpanded] = useState(true)

      const toggle = () => {
          animateTo(expanded ? MIN_SIZE : MAX_SIZE)
          setExpanded(!expanded)
      }

      return (
        <ReflexElement size={size} {...rest}>
            <div ref={elementRef} className="pane-content">
                <div className="pane-control">
                    <div style={{ padding: 10 }}>
                        <button onClick={toggle}>
                            {expanded ? 'Сжать' : 'Расширить'}
                        </button>
                        <div style={{ marginTop: 10 }}>{name}</div>
                    </div>
                </div>
                <div className="ctrl-pane-content">
                    <label>{children}</label>
                </div>
            </div>
        </ReflexElement>
      )
  }
)

ControlledElement.displayName = 'ControlledElement'

export const AnimatedPanels: React.FC = () => {
    return (
      <ReflexContainer orientation="vertical" style={{ height: '100vh', width: '100vw' }}>
          {/* Each panel is now independent and manages its own size */}
          <ControlledElement name={'Панель 1'} orientation={'horizontal'} />
          <ReflexSplitter />
          <ControlledElement name={'Панель 2'} orientation={'horizontal'} />
      </ReflexContainer>
    )
}