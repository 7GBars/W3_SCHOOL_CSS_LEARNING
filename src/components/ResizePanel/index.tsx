import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle
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
      setSize(prev => {
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



export const AnimatedPanels: React.FC = () => {
  const [size, animateTo] = useAnimatedSize(200)
  const [expanded, setExpanded] = useState(true)

  const toggle = () => {
    animateTo(expanded ? MIN_SIZE : MAX_SIZE)
    setExpanded(!expanded)
  }


  return (
    <ReflexContainer
      orientation="horizontal"
      style={{ height: '100vh', width: '100vw' }}
    >
      <ReflexElement size={size} minSize={MIN_SIZE}>
        <div style={{ padding: 10 }}>
          <button onClick={toggle}>
            {expanded ? 'Сжать' : 'Расширить'}
          </button>
          <div style={{ marginTop: 10 }}>фыфы</div>
        </div>
      </ReflexElement>
      <ReflexSplitter />
      <ReflexElement size={size} minSize={MIN_SIZE}>
        <div style={{ padding: 10 }}>
          <button onClick={toggle}>
            {expanded ? 'Сжать' : 'Расширить'}
          </button>
          <div style={{ marginTop: 10 }}>ыф</div>
        </div>
      </ReflexElement>
    </ReflexContainer>
  )
}
