import React from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import './news.css'

export default function News() {
  function open(url) {
    window.open(url, '_blank')
  }

  function subscribe(event) {
    event.preventDefault()
    alert("Thank you for subscribing! You'll receive our latest updates.")
    event.target.reset()
  }

  return (
    <>
      <Nav logoWeight={600} />
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">The Latest in <span className="highlight">Private AI</span></h1>
          <p className="hero-subtitle">Stay informed about the cutting edge of AI sovereignty, infrastructure innovations, and industry insights from the Corprex team.</p>
        </div>
      </section>

      <section className="news-section">
        <div className="container">
          <article className="featured-article" onClick={() => open('https://economictimes.indiatimes.com/tech/artificial-intelligence/no-legal-confidentiality-when-using-chatgpt-as-a-therapist-or-lawyer-openai-ceo-sam-altman/articleshow/122932223.cms?from=mdr')}>
            <div className="featured-image">
              <img src="https://img.etimg.com/thumb/width-650,height-488,imgsize-1132008,resizemode-75,msid-122932217/tech/artificial-intelligence/no-legal-confidentiality-when-using-chatgpt-as-a-therapist-or-lawyer-openai-ceo-sam-altman.jpg" alt="No Legal Confidentiality with ChatGPT" />
            </div>
            <div className="featured-content">
              <span className="featured-badge">Industry Report</span>
              <h2 className="featured-title">No Legal Confidentiality When Using ChatGPT as a Therapist or Lawyer: OpenAI CEO Sam Altman</h2>
              <p className="featured-excerpt">OpenAI CEO Sam Altman warns users that ChatGPT does not offer legal confidentiality protections when used for therapy or legal advice. The disclosure highlights critical privacy concerns as AI adoption grows in sensitive professional fields where confidentiality is paramount.</p>
              <div className="featured-meta">
                <span>Economic Times</span>
                <span>January 2025</span>
              </div>
            </div>
          </article>

          <div className="news-grid">
            <ArticleCard
              url="https://www.businesswire.com/news/home/20250630070161/en/Thales-2025-Global-Cloud-Security-Study-Reveals-Organizations-Struggle-to-Secure-Expanding-AI-Driven-Cloud-Environments"
              img="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
              title="Thales 2025 Global Cloud Security Study Reveals Organizations Struggle to Secure Expanding, AI-Driven Cloud Environments"
              excerpt="52% report AI security spending is displacing traditional security budgets. 55% report cloud environments are more complex to secure than on-premises infrastructure. Four of the top five most targeted assets in reported attacks are cloud-based."
              meta1="Thales"
              meta2="June 30, 2025"
            />

            <ArticleCard
              url="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/superagency-in-the-workplace-empowering-people-to-unlock-ais-full-potential-at-work"
              img="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              title="Superagency in the Workplace: Empowering People to Unlock AI's Full Potential"
              excerpt="Almost all companies invest in AI, but just 1% believe they are at maturity. McKinsey's research finds the biggest barrier to scaling is not employees—who are ready—but leaders, who are not steering fast enough."
              meta1="McKinsey"
              meta2="January 28, 2025"
            />

            <ArticleCard
              url="https://www.bankinfosecurity.com/copilot-ai-bug-could-leak-sensitive-data-via-email-prompts-a-28713"
              img="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
              title="Copilot AI Bug Could Leak Sensitive Data via Email Prompts"
              excerpt="The vulnerability in Microsoft 365 Copilot allowed attackers to extract sensitive data through a zero-click prompt injection attack. Dubbed 'EchoLeak' and tracked as CVE-2025-32711, the vulnerability received a CVSS severity score of 9.3."
              meta1="Aim Security"
              meta2="June 11, 2025"
            />

            <ArticleCard
              url="https://therecord.media/deepseek-security-czech-cyber-agency-warning"
              img="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
              title="The Czech Republic Bans DeepSeek in State Administration Over Cyber Security Concerns"
              excerpt="Czech Republic announced it was banning the company's software on official devices due to security risks. NÚKIB warned it was 'highly likely' that Beijing would attempt to utilize domestic legislation in China to exploit DeepSeek's products for intelligence purposes."
              meta1="The Record"
              meta2="July 10, 2025"
            />

            <ArticleCard
              url="https://www.corprex.com/news"
              img="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
              title="Enterprise AI Adoption Stalls as Security Concerns Mount"
              excerpt="New research shows that while 92% of companies plan to increase AI spending in the next three years, only 1% report reaching AI maturity. Security and privacy concerns remain the primary barriers to widespread adoption."
              meta1="Industry Analysis"
              meta2="July 15, 2025"
              disableLink
            />

            <ArticleCard
              url="https://www.corprex.com/news"
              img="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
              title="The Rise of AI Sovereignty: Why Nations Are Building Local Infrastructure"
              excerpt="As geopolitical tensions rise and data regulations tighten, countries worldwide are investing in sovereign AI infrastructure. Learn why local AI is becoming a national security imperative."
              meta1="Strategic Insights"
              meta2="July 8, 2025"
              disableLink
            />
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Ahead of the Curve</h2>
            <p className="newsletter-subtitle">Get the latest insights on private AI infrastructure delivered to your inbox</p>
            <form className="newsletter-form" onSubmit={subscribe}>
              <input type="email" className="newsletter-input" placeholder="Enter your email" required />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

function ArticleCard({ url, img, title, excerpt, meta1, meta2, disableLink }) {
  const onClick = () => { if (!disableLink) window.open(url, '_blank') }
  const onReadMore = (e) => { e.stopPropagation(); window.open(url, '_blank') }
  return (
    <article className="article-card" onClick={onClick}>
      <div className="article-image"><img src={img} alt={title} /></div>
      <div className="article-content">
        <h3 className="article-title">{title}</h3>
        <p className="article-excerpt">{excerpt}</p>
        <div className="article-footer">
          <div className="article-meta"><span>{meta1}</span><span>{meta2}</span></div>
          <a href="#" className="read-more" onClick={onReadMore}>
            Read more
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </article>
  )
}


