'use client'
import { animated, useSpring } from '@react-spring/web'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
}
export const FadeIn = (props: FadeInProps) => {
  const styles = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: props.delay || 25
  })
  return (
    <animated.div style={styles} {...props}>
      {props.children}
    </animated.div>
  )
}
