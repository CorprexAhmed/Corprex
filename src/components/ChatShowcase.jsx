import useScrollReveal from '../hooks/useScrollReveal'
import './ChatShowcase.css'

export default function ChatShowcase() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section section-alt chat-section" ref={ref}>
      <div className="container">
        <div className={`chat-layout ${visible ? 'chat-visible' : ''}`}>
          <div className="chat-content">
            <h2 className="chat-heading">
              Your AI. Your Network. No One Else Gets In.
            </h2>
            <p className="chat-desc">
              Corprex Chat is a full-featured AI assistant accessible only from
              your internal network. There is no public URL, no cloud relay, and
              no external access point. Your team opens a browser, connects over
              your LAN or VPN, and gets a ChatGPT-class experience that never
              touches the outside world.
            </p>

            <ul className="chat-features">
              <li>
                <div className="chat-feature-check">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <strong>Network-only access</strong>
                  <span>The interface is served directly from the Omega on your LAN. No internet path exists to reach it from outside your building.</span>
                </div>
              </li>
              <li>
                <div className="chat-feature-check">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <strong>Multi-model support</strong>
                  <span>Switch between Llama, Mistral, Qwen, and more from the same interface — all running locally on your hardware.</span>
                </div>
              </li>
              <li>
                <div className="chat-feature-check">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <strong>Built-in integrations</strong>
                  <span>Toggle MCP servers directly from the chat bar to pull live data from 230+ sources into any conversation.</span>
                </div>
              </li>
              <li>
                <div className="chat-feature-check">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <strong>Voice input</strong>
                  <span>Speak naturally and get AI-powered responses processed entirely on-site — nothing recorded externally.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="chat-image-col">
            <div className="chat-image-wrapper">
              <img
                src="/Corprex_Chat_Front.png"
                alt="Corprex Chat — Private AI Assistant Interface, accessible only on your network"
                className="chat-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
