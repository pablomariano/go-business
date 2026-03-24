"use client"

import { useEffect, useRef } from "react"

export function useScrollReveal<T extends HTMLElement>(threshold = 0.1, delay = 0) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed")
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, delay])

  return ref
}

export function useScrollRevealMultiple(count: number, threshold = 0.1, stagger = 100) {
  const refs = useRef<(HTMLElement | null)[]>(Array(count).fill(null))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    refs.current.forEach((el, i) => {
      if (el) {
        el.style.transitionDelay = `${i * stagger}ms`
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [count, threshold, stagger])

  return refs
}
