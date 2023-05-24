'use client'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'

//! bug with transition on height
export const Transition = (props: any) => {
  const springApi = useSpringRef()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '1%' },
    to: {
      size: props.open ? '100%' : '1%',
    },
  })
  const transApi = useSpringRef()
  useTransition(props.open, {
    ref: transApi,
    trail: 400,
    from: { scale: 1 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  useChain(props.open ? [springApi, transApi] : [transApi, springApi], [
    0,
    props.open ? 0.1 : 0.6,
  ])
  return (
    <animated.div style={{ ...rest, width: size, height: size }} {...props}>
      {props.children}
    </animated.div>
  )
}
