'use client'
import { animated, useSpring } from '@react-spring/web'

export const FadeIn = (props: any) => {
  const styles = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })
  return (
    <animated.div style={styles} {...props}>
      {props.children}
    </animated.div>
  )
}
