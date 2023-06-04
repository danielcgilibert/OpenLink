import { useSpring, animated } from '@react-spring/web'

export const OpenEffect = (props: any) => {
  const { ...rest } = useSpring({
    from: { height: '170px' },
    to: {
      height: props.open ? '170px' : '0px'
    }
  })

  return <animated.div style={{ ...rest }}>{props.children}</animated.div>
}
