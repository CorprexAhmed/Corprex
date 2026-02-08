import useScrollReveal from '../hooks/useScrollReveal'

export default function Reveal({ children, className = '', delay = 0, threshold }) {
  const [ref, visible] = useScrollReveal({ threshold: threshold || 0.15 })
  return (
    <div
      ref={ref}
      className={`animate-in ${visible ? 'visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
