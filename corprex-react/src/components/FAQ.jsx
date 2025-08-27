import React from 'react'

export default function FAQ() {
  return (
    <section className="section faq-section">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about Omega</p>
        </div>
        <div className="faq-container">
          <details className="faq-item">
            <summary>What AI models can Omega run?</summary>
            <p>Omega supports all major open-source models including Llama 3, Mistral, Mixtral, CodeLlama, Gemma, and more. You can also fine-tune models on your own data or deploy custom models. We regularly update available models as new ones are released.</p>
          </details>
          <details className="faq-item">
            <summary>Can Omega work without internet connection?</summary>
            <p>Yes, Omega operates completely offline once configured. This air-gap capability is perfect for high-security environments like defense, healthcare, and financial institutions. Updates can be applied manually when needed.</p>
          </details>
          <details className="faq-item">
            <summary>Can Omega integrate with our existing systems?</summary>
            <p>Yes, Omega provides REST APIs, Python SDKs, and native integrations with popular business tools. It works seamlessly with your existing tech stack including CRMs, ERPs, and data warehouses. Our automation suite supports 1000+ app integrations.</p>
          </details>
          <details className="faq-item">
            <summary>Can I try Omega before purchasing?</summary>
            <p>We offer proof-of-concept demos virtually for qualified enterprises. This includes a full demonstration with your actual data and use cases. Contact us to schedule your custom demo.</p>
          </details>
        </div>
      </div>
    </section>
  )
}


