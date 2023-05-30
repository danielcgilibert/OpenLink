'use client'
import LinkCard from './LinkCard'
import { useTransition, animated } from '@react-spring/web'

export default function ListLinks({ links }: any) {
  const transitions = useTransition(links, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 150,
  })
  return (
    <div className="flex flex-col gap-5">
      {transitions((style, link) => (
        <animated.div style={style} className="min-w-full">
          <LinkCard key={link.id} link={link} />
        </animated.div>
      ))}
    </div>
  )
}
