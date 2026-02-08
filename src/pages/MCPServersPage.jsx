import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import './MCPServersPage.css'
import '../pages/Pages.css'

const serverTypes = [
  {
    title: 'Data Integration Servers',
    description:
      'Each of our 230+ data connectors is packaged as an independent MCP server. Postgres, Salesforce, Snowflake, MongoDB — every source gets its own isolated runtime with schema-aware tooling that your AI model can call directly.',
    capabilities: [
      'Schema introspection and type-safe queries',
      'Read and write operations with access controls',
      'Connection pooling and credential isolation',
      'Live data previews without leaving the AI interface',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    title: 'Privacy-Respecting Search',
    description:
      'Our search pipeline runs as a dedicated MCP server. When your model needs live internet data, the server scrubs every query through Microsoft Presidio and a lightweight AI filter before anything leaves your network.',
    capabilities: [
      'PII detection and redaction via Microsoft Presidio',
      'Lightweight AI model for semantic sanitization',
      'Real-time web results returned to the model',
      'Full audit trail of every outbound query',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    title: 'Custom Business Logic',
    description:
      'Need your AI to call an internal pricing engine, run compliance checks, or interface with a proprietary workflow? We build bespoke MCP servers that expose your internal systems as tools your AI can call on demand.',
    capabilities: [
      'Custom API wrappers for internal services',
      'Domain-specific tools and function calls',
      'Business rule enforcement at the tool layer',
      'Versioned deployments with rollback support',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    title: 'Document & Knowledge Servers',
    description:
      'Give your AI instant access to internal documentation, policy manuals, and knowledge bases. These MCP servers handle retrieval-augmented generation with your private data — fully on-premises, fully under your control.',
    capabilities: [
      'Embeddings-based semantic search over documents',
      'Support for PDF, DOCX, HTML, and Markdown',
      'Automatic chunking and index management',
      'Fine-grained access control per document set',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
]

const deploySteps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We audit your existing tools, data sources, and workflows to identify exactly which MCP servers you need and how they should interact.',
  },
  {
    num: '02',
    title: 'Build',
    desc: 'Our engineering team develops each MCP server against the open Model Context Protocol specification, with full test coverage and security review.',
  },
  {
    num: '03',
    title: 'Deploy',
    desc: 'Servers are deployed directly onto your infrastructure — bare metal, VM, or containerized. Nothing touches the public cloud unless you want it to.',
  },
  {
    num: '04',
    title: 'Manage',
    desc: 'Enable, disable, or update any server from a single dashboard. Your team stays in control of every capability your AI model has access to.',
  },
]

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="5" width="22" height="14" rx="2" />
        <circle cx="16" cy="12" r="3" />
        <path d="M8 12h.01" />
      </svg>
    ),
    title: 'Toggle On, Toggle Off',
    desc: 'Every MCP server is an independent unit. Enable the ones you need, disable the ones you don\'t. No monoliths, no bloat — just the capabilities your team actually uses.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Private by Default',
    desc: 'MCP servers run entirely on your premises. Your data, your credentials, and your business logic never leave your network boundary.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Rapid Deployment',
    desc: 'Standard integration servers deploy in hours. Custom servers with bespoke logic are typically production-ready within one to two weeks.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Compliance Built In',
    desc: 'Every server includes audit logging, role-based access control, and credential isolation. Meet HIPAA, SOX, and FedRAMP requirements out of the box.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: 'Fully Configurable',
    desc: 'Adjust connection parameters, rate limits, caching policies, and access permissions per server. Your infrastructure, your rules.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Open Protocol',
    desc: 'Built on the open Model Context Protocol specification. No vendor lock-in — your MCP servers are portable, extensible, and future-proof.',
  },
]

export default function MCPServersPage() {
  const [activeServer, setActiveServer] = useState(0)

  return (
    <div className="page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <h1 className="page-hero-title">
              Custom MCP Servers — Modular AI, Your Way
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="page-hero-subtitle">
              Every integration, every tool, and every data source in Omega is
              packaged as an independent MCP server. Enable what you need, disable
              what you don't, and deploy custom servers built specifically for your
              business.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mcp-hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Request Demo
              </Link>
              <Link to="/integrations" className="btn btn-secondary">
                View Integrations
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What is MCP */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <h2 className="section-title">What Is an MCP Server?</h2>
              <p className="section-subtitle">
                Think of MCP servers like apps on your phone. Each one gives your
                AI a new skill — connecting to a database, searching the web,
                reading your company documents, or calling an internal tool. You
                choose which ones to turn on, and you can add or remove them at
                any time.
              </p>
            </div>
          </Reveal>

          {/* Simple explanation cards */}
          <div className="mcp-explain-grid">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                ),
                title: 'Like Apps for Your AI',
                text: 'Your phone can make calls, take photos, and browse the web because it has different apps. MCP servers work the same way — each one gives your AI a specific ability, and you pick which ones to install.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="1" y="5" width="22" height="14" rx="2" />
                    <circle cx="16" cy="12" r="3" />
                    <path d="M8 12h.01" />
                  </svg>
                ),
                title: 'Turn Them On or Off',
                text: 'Need your AI to pull data from Salesforce? Turn on that server. Don\'t need web search right now? Turn it off. You stay in complete control of what your AI can and cannot do.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                ),
                title: 'Everything Stays Private',
                text: 'Every MCP server runs inside your building, on your own equipment. Your company data, passwords, and business processes never leave your network.',
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 0.1}>
                <div className="mcp-explain-card">
                  <div className="mcp-explain-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Server Types - Interactive */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <h2 className="section-title">What We Build and Deploy</h2>
              <p className="section-subtitle">
                From plug-and-play data connectors to fully custom business logic,
                every MCP server is purpose-built and runs entirely on your
                infrastructure.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mcp-types-layout">
              <div className="mcp-types-tabs">
                {serverTypes.map((type, i) => (
                  <button
                    key={type.title}
                    className={`mcp-type-tab ${activeServer === i ? 'active' : ''}`}
                    onClick={() => setActiveServer(i)}
                  >
                    <div className="mcp-type-tab-icon">{type.icon}</div>
                    <span>{type.title}</span>
                    <svg
                      className="mcp-type-tab-arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                ))}
              </div>

              <div className="mcp-type-detail">
                <h3 className="mcp-type-detail-title">
                  {serverTypes[activeServer].title}
                </h3>
                <p className="mcp-type-detail-desc">
                  {serverTypes[activeServer].description}
                </p>
                <ul className="mcp-type-capabilities">
                  {serverTypes[activeServer].capabilities.map((cap) => (
                    <li key={cap}>
                      <div className="mcp-cap-check">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary mcp-type-cta">
                  Discuss This Server Type
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How We Deploy */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <h2 className="section-title">How We Deploy</h2>
              <p className="section-subtitle">
                From initial consultation to production-ready servers running on
                your infrastructure, here is how an MCP engagement works.
              </p>
            </div>
          </Reveal>

          <div className="mcp-deploy-grid">
            {deploySteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="mcp-deploy-card">
                  <div className="mcp-deploy-num">{step.num}</div>
                  <h3 className="mcp-deploy-title">{step.title}</h3>
                  <p className="mcp-deploy-desc">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <h2 className="section-title">Why MCP Architecture</h2>
              <p className="section-subtitle">
                A modular, protocol-driven approach means your AI platform grows
                with you — securely, predictably, and without vendor lock-in.
              </p>
            </div>
          </Reveal>

          <div className="mcp-benefits-grid">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="mcp-benefit-card">
                  <div className="mcp-benefit-icon">{b.icon}</div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview / Toggle Concept */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <h2 className="section-title">Full Control from One Dashboard</h2>
              <p className="section-subtitle">
                Your administrators manage every MCP server from a single
                interface. Enable new capabilities in seconds. Disable them just
                as fast.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mcp-dashboard">
              <div className="mcp-dashboard-header">
                <span className="mcp-dashboard-title">MCP Server Manager</span>
                <span className="mcp-dashboard-status">
                  <span className="mcp-status-dot"></span>
                  All systems operational
                </span>
              </div>
              <div className="mcp-dashboard-rows">
                {[
                  { name: 'PostgreSQL Connector', status: 'active', type: 'Data Integration' },
                  { name: 'Salesforce CRM', status: 'active', type: 'Data Integration' },
                  { name: 'Private Web Search', status: 'active', type: 'Search' },
                  { name: 'Internal Docs RAG', status: 'active', type: 'Knowledge Base' },
                  { name: 'Pricing Engine API', status: 'active', type: 'Custom Logic' },
                  { name: 'Snowflake Analytics', status: 'disabled', type: 'Data Integration' },
                  { name: 'Compliance Checker', status: 'disabled', type: 'Custom Logic' },
                ].map((row) => (
                  <div className={`mcp-dash-row ${row.status === 'disabled' ? 'mcp-dash-row-off' : ''}`} key={row.name}>
                    <div className="mcp-dash-row-info">
                      <span className="mcp-dash-row-name">{row.name}</span>
                      <span className="mcp-dash-row-type">{row.type}</span>
                    </div>
                    <div className={`mcp-toggle ${row.status === 'active' ? 'mcp-toggle-on' : ''}`}>
                      <div className="mcp-toggle-knob"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section page-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="section-title">Ready to Build Your MCP Stack?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Tell us what your team needs. We will design, build, and deploy the
              exact MCP servers that make your AI platform complete.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link to="/contact" className="btn btn-primary">
                Start a Conversation
              </Link>
              <Link to="/private-search" className="btn btn-secondary">
                Private Search
              </Link>
              <Link to="/integrations" className="btn btn-secondary">
                Browse Integrations
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
