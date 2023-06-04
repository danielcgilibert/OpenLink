'use client'
import { useTrail, a } from '@react-spring/web'
import React from 'react'

export const AnimateText = (props: any) => {
  const items = React.Children.toArray(props.children)
  const trail = useTrail(items.length, {
    opacity: 1,
    from: { opacity: 0, transform: 'translate(-320px,-100px)', scale: 0.4 },
    to: { opacity: 1, transform: 'translate(0px, 0px)', scale: 1 }
  })

  return (
    <>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} style={style}>
          {items[index]}
        </a.div>
      ))}
    </>
  )
}
