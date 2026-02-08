import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import './FAQ.css'

const faqs = [
  {
    question: 'What AI models can Omega run?',
    answer:
      'Omega supports all major open-source models including Llama 3, Mistral, Mixtral, CodeLlama, Gemma, and more. You can also fine-tune models on your own data or deploy custom models. We regularly update available models as new ones are released.',
  },
  {
    question: 'Can Omega work without internet connection?',
    answer:
      'Yes, Omega operates completely offline once configured. This air-gap capability is perfect for high-security environments like defense, healthcare, and financial institutions. Updates can be applied manually when needed.',
  },
  {
    question: 'Can Omega integrate with our existing systems?',
    answer:
      'Yes, Omega provides REST APIs, Python SDKs, and native integrations with popular business tools. It works seamlessly with your existing tech stack including CRMs, ERPs, and data warehouses. Our automation suite supports 350+ app integrations.',
  },
  {
    question: 'Can I try Omega before purchasing?',
    answer:
      'We offer proof-of-concept demos virtually for qualified enterprises. This includes a full demonstration with your actual data and use cases. Contact us to schedule your custom demo.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [ref, visible] = useScrollReveal()

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="section faq-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about Omega
          </p>
        </div>

        <div className={`faq-list ${visible ? 'faq-visible' : ''}`}>
          {faqs.map((faq, i) => (
            <div
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
              key={i}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{faq.question}</span>
                <div className="faq-toggle">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
