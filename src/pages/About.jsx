import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import './About.css'
import './Pages.css'

const processSteps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We start by understanding your organization — your workflows, your compliance requirements, your existing tools, and where AI can create the most impact. No two deployments are the same.',
  },
  {
    num: '02',
    title: 'Architecture',
    desc: 'We design your Omega configuration and select the MCP servers, integrations, and models that match your specific use cases. Everything is mapped before a single cable is plugged in.',
  },
  {
    num: '03',
    title: 'Deployment',
    desc: 'Our team handles complete on-site installation — hardware racking, network configuration, security hardening, and software provisioning. Your infrastructure is production-ready when we leave.',
  },
  {
    num: '04',
    title: 'Integration',
    desc: 'We connect the Omega to your existing data sources, internal tools, and business systems. Custom MCP servers are built and tested against your actual data.',
  },
  {
    num: '05',
    title: 'Support',
    desc: 'Once live, we provide ongoing managed operations — model updates, performance monitoring, new integrations, and direct engineering support whenever you need it.',
  },
]

const industries = [
  {
    name: 'Healthcare',
    desc: 'Process patient records, clinical notes, and medical research with full HIPAA compliance. No PHI ever leaves your facility.',
  },
  {
    name: 'Financial Services',
    desc: 'Analyze portfolios, automate reporting, and handle sensitive financial data under SOX-compliant infrastructure.',
  },
  {
    name: 'Legal',
    desc: 'Review contracts, research case law, and process privileged communications without exposing client data to third parties.',
  },
  {
    name: 'Government',
    desc: 'Deploy AI capabilities within FedRAMP-ready infrastructure. Classified and sensitive data stays on-premises at all times.',
  },
  {
    name: 'Education',
    desc: 'Protect student records and research intellectual property while giving faculty and staff powerful AI tools.',
  },
  {
    name: 'Technology',
    desc: 'Safeguard proprietary source code, product roadmaps, and trade secrets with AI that runs entirely on your own network.',
  },
]

const stats = [
  { value: '384+', label: 'GB of VRAM per Omega deployment' },
  { value: '350+', label: 'Data integrations available' },
  { value: '0', label: 'Bytes of data sent to the cloud' },
  { value: '24/7', label: 'Managed operations and support' },
]

export default function About() {
  return (
    <div className="page about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <h1 className="page-hero-title">
              We Build the AI Infrastructure That Stays in Your Building
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="page-hero-subtitle">
              Corprex is the infrastructure company for the private AI era.
              We design, deploy, and manage on-premise AI systems so your
              organization gets the full power of modern AI without a single
              byte of data leaving your network.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="about-mission-layout">
            <Reveal>
              <div className="about-mission-col">
                <h2 className="about-mission-heading">
                  AI is transforming every industry. But the way most companies
                  access it is fundamentally broken.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="about-mission-col">
                <p className="about-mission-text">
                  When your team uses cloud AI, every prompt, every document, and
                  every piece of proprietary data is transmitted to someone else's
                  servers. You lose visibility into how it's stored, who can access
                  it, and whether it's being used to train models that benefit your
                  competitors.
                </p>
                <p className="about-mission-text">
                  Corprex exists to solve that problem. We deliver complete AI
                  infrastructure — hardware, software, integrations, and ongoing
                  management — that runs entirely on your premises, under your
                  complete control. Your data never leaves. Your AI never goes
                  down because someone else's service did. And your costs never
                  scale against you.
                </p>
                <p className="about-mission-text">
                  We believe the future of enterprise AI is private, on-premise,
                  and fully owned by the organizations that depend on it. That's
                  what we build.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <h2 className="section-title">What We Deliver</h2>
              <p className="section-subtitle">
                Corprex is not a software vendor. We are your full-stack AI
                infrastructure partner — from the metal in your server room to
                the interface your team uses every day.
              </p>
            </div>
          </Reveal>

          <div className="about-deliver-grid">
            {[
              {
                title: 'The Omega Hardware',
                desc: 'A rack-mounted AI server starting at 384 GB of VRAM, purpose-built for production AI workloads. It sits in your server room, plugs into your network, and processes everything locally.',
              },
              {
                title: 'Corprex Chat',
                desc: 'A clean, intuitive chat interface — like ChatGPT, but accessible only from your internal network. Your team asks questions, queries databases, searches the web safely, and gets instant answers.',
              },
              {
                title: 'MCP Server Architecture',
                desc: 'Every capability runs as an independent, modular MCP server. Data connectors, web search, document access, custom tools — each one can be enabled, disabled, or customized independently.',
              },
              {
                title: 'Privacy-Respecting Search',
                desc: 'When your AI needs live internet data, our search pipeline uses Microsoft Presidio and a lightweight AI model to strip all identifying information before any query leaves your building.',
              },
              {
                title: '350+ Data Integrations',
                desc: 'Connect to databases, CRMs, ERPs, marketing platforms, accounting software, and more. Every integration runs as a private MCP server on your premises.',
              },
              {
                title: 'Compliance and Auditing',
                desc: 'Built-in audit logging and compliance reporting for HIPAA, SOX, and FedRAMP. Every query, access event, and model interaction is tracked and exportable.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="about-deliver-card">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <h2 className="section-title">How We Work</h2>
              <p className="section-subtitle">
                Every engagement follows a proven process designed to get your
                AI infrastructure running with zero disruption to your operations.
              </p>
            </div>
          </Reveal>

          <div className="about-process-timeline">
            {processSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="about-process-step">
                  <div className="about-process-num">{step.num}</div>
                  <div className="about-process-body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="about-stats-grid">
              {stats.map((stat, i) => (
                <div className="about-stat" key={stat.label} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <span className="about-stat-value">{stat.value}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <h2 className="section-title">Built for Regulated Industries</h2>
              <p className="section-subtitle">
                Organizations that handle sensitive data need AI infrastructure
                they can trust. Corprex is designed from the ground up for
                environments where privacy and compliance are non-negotiable.
              </p>
            </div>
          </Reveal>

          <div className="about-industries-grid">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.08}>
                <div className="about-industry-card">
                  <h3>{ind.name}</h3>
                  <p>{ind.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Contact */}
      <section className="section section-alt">
        <div className="container">
          <div className="about-contact-layout">
            <Reveal>
              <div className="about-contact-col">
                <h2 className="about-contact-heading">Based in Washington, DC</h2>
                <p className="about-contact-text">
                  Corprex is headquartered at 1775 Eye Street NW in Washington, DC.
                  We deploy and support Omega systems across the United States, with
                  on-site engineering available for every installation.
                </p>
                <p className="about-contact-text">
                  Whether you're a 50-person law firm or a federal agency with
                  thousands of users, we scale the infrastructure to match your needs.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="about-contact-col">
                <div className="about-contact-details">
                  <div className="about-contact-item">
                    <h4>Email</h4>
                    <a href="mailto:sales@corprex.com">sales@corprex.com</a>
                  </div>
                  <div className="about-contact-item">
                    <h4>Phone</h4>
                    <a href="tel:+12027965245">(202) 796-5245</a>
                  </div>
                  <div className="about-contact-item">
                    <h4>Address</h4>
                    <p>1775 Eye Street NW<br />Washington, DC 20006</p>
                  </div>
                  <div className="about-contact-item">
                    <h4>Client Portal</h4>
                    <a href="https://ai.corprex.com" target="_blank" rel="noopener noreferrer">ai.corprex.com</a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section page-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="section-title">Ready to Own Your AI?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Tell us about your organization and we'll show you exactly how
              the Omega fits into your infrastructure.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Request a Demo
              </Link>
              <Link to="/why-local-ai" className="btn btn-secondary">
                Why On-Premise AI?
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
