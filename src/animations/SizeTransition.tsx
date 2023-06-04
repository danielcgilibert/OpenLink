'use client'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef
} from '@react-spring/web'
import { useEffect } from 'react'

export const SizeTransition = (props: any) => {
  const springApi = useSpringRef()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '0' },
    to: {
      size: props.open ? '100%' : '0%'
    }
  })
  const transApi = useSpringRef()
  useTransition(props.open, {
    ref: transApi,
    trail: 400,
    from: { scale: 1 },
    enter: { opacity: 0.5, scale: 0.5 },
    leave: { opacity: 0, scale: 0 },
    delay: 500
  })

  useChain(props.open ? [springApi, transApi] : [transApi, springApi], [
    0,
    props.open ? 0.1 : 0.6
  ])
  return (
    <animated.div style={{ ...rest, width: size, maxHeight: size }} {...props}>
      {props.children}
    </animated.div>
  )
}
