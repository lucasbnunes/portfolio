import React from "react"

interface Options extends IntersectionObserverInit {
  endWhenVisible: boolean
}
const DEFAULT_OPTIONS: Options = {
  endWhenVisible: false,
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
}

export function useIntersectionObserver(options: Options = DEFAULT_OPTIONS) {
  const elementRef = React.useRef<any | null>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  function handleIntersectionObserver(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {


    setIsVisible(entries[0].isIntersecting)
    if (entries[0].isIntersecting && options.endWhenVisible) {
      observer.unobserve(elementRef.current)
    }
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersectionObserver, options)
    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  return { elementRef, isVisible }
}