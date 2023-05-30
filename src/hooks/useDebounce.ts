import { useState, useEffect, useRef } from 'react'

const useDebounce = (value: any, delay: number) => {
  const debounceRef = useRef<NodeJS.Timeout>()
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(debounceRef.current)
    }
  }, [value])

  return debouncedValue
}

export default useDebounce
