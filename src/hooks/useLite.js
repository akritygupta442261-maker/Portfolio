import { useState, useEffect } from 'react'
// compact: phones get a smaller 3D scene. lite: low-power/data-saver devices get a CSS visual instead.
export default function useLite() {
  const [s, setS] = useState({ lite: false, compact: false })
  useEffect(() => { const c = navigator.connection
    setS({ compact: window.matchMedia('(max-width: 767px)').matches, lite: (navigator.hardwareConcurrency || 8) <= 2 || !!c?.saveData }) }, [])
  return s
}
