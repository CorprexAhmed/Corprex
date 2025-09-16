import React, { useState, useEffect } from 'react'

export default function WorkflowVisualization() {
  const [activeNode, setActiveNode] = useState(null)
  const [animationStep, setAnimationStep] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Extended sequence so upstream segments wait for downstream nodes
      setAnimationStep(prev => (prev + 1) % 13)
    }, 1400)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="workflow-viz">
      <div className="workflow-title">Corprex Omega AI Support Automation Workflow</div>
      <svg className="workflow-svg" viewBox="0 40 1450 800" preserveAspectRatio="xMidYMid meet">
        {/* Background grid pattern */}
        <defs>
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a1a1a" strokeWidth="1"/>
          </pattern>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="#0a0a0a"/>
        <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5"/>
        
        {/* Main flow connections - each one waits for downstream branches */}
        <path d="M 180 100 L 320 100" stroke="#4ade80" strokeWidth="2" opacity={animationStep >= 1 ? 1 : 0.3}/>
        <path d="M 420 100 L 560 100" stroke="#4ade80" strokeWidth="2" opacity={animationStep >= 2 ? 1 : 0.3}/>
        {/* Wait until Knowledge + Vector complete (steps 3-4) */}
        <path d="M 660 100 L 800 100" stroke="#4ade80" strokeWidth="2" opacity={animationStep >= 5 ? 1 : 0.3}/>
        {/* Wait until LLM + Context + Cache complete (steps 6-8) */}
        <path d="M 900 100 L 1040 100" stroke="#4ade80" strokeWidth="2" opacity={animationStep >= 9 ? 1 : 0.3}/>
        {/* Wait until Slack + Analytics complete (steps 10-11) */}
        <path d="M 1140 100 L 1280 100" stroke="#4ade80" strokeWidth="2" opacity={animationStep >= 12 ? 1 : 0.3}/>
        
        {/* Branch to data processing */}
        <path d="M 610 150 L 610 250" stroke="#fbbf24" strokeWidth="2" opacity={animationStep >= 3 ? 1 : 0.3}/>
        <path d="M 610 350 L 610 450" stroke="#fbbf24" strokeWidth="2" opacity={animationStep >= 4 ? 1 : 0.3}/>
        
        {/* AI Model connections - shift later to gate upstream */}
        <path d="M 850 150 L 850 250" stroke="#8b5cf6" strokeWidth="2" opacity={animationStep >= 6 ? 1 : 0.3}/>
        <path d="M 850 350 L 850 450" stroke="#8b5cf6" strokeWidth="2" opacity={animationStep >= 7 ? 1 : 0.3}/>
        <path d="M 850 550 L 850 650" stroke="#8b5cf6" strokeWidth="2" opacity={animationStep >= 8 ? 1 : 0.3}/>
        
        {/* Response flow - also later */}
        <path d="M 1090 150 L 1090 250" stroke="#06b6d4" strokeWidth="2" opacity={animationStep >= 10 ? 1 : 0.3}/>
        <path d="M 1090 350 L 1090 450" stroke="#06b6d4" strokeWidth="2" opacity={animationStep >= 11 ? 1 : 0.3}/>
        
        {/* Node 1: Email Trigger */}
        <g className={`workflow-node ${animationStep >= 0 ? 'active' : ''}`} onMouseEnter={() => setActiveNode('email')} onMouseLeave={() => setActiveNode(null)}>
          <rect x="80" y="50" width="100" height="100" rx="12" fill="url(#nodeGradient)" stroke={animationStep >= 0 ? '#4ade80' : '#333'} strokeWidth="2"/>
          <text x="130" y="85" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">Email</text>
          <text x="130" y="100" textAnchor="middle" fill="#888" fontSize="11">Trigger</text>
          <rect x="105" y="110" width="50" height="25" rx="4" fill="#4ade80" opacity="0.2"/>
          <text x="130" y="127" textAnchor="middle" fill="#4ade80" fontSize="16">@</text>
          <rect x="75" y="155" width="110" height="28" fill="#0a0a0a" />
          <text x="130" y="165" textAnchor="middle" fill="#666" fontSize="15">Receives customer</text>
          <text x="130" y="182" textAnchor="middle" fill="#666" fontSize="15">support requests</text>
        </g>
        
        {/* Node 2: Parse Request */}
        <g className={`workflow-node ${animationStep >= 1 ? 'active' : ''}`} onMouseEnter={() => setActiveNode('parse')} onMouseLeave={() => setActiveNode(null)}>
          <rect x="320" y="50" width="100" height="100" rx="12" fill="url(#nodeGradient)" stroke={animationStep >= 1 ? '#4ade80' : '#333'} strokeWidth="2"/>
          <text x="370" y="85" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">Parse</text>
          <text x="370" y="100" textAnchor="middle" fill="#888" fontSize="11">Request</text>
          <circle cx="370" cy="120" r="15" fill="#fbbf24" opacity="0.2"/>
          <text x="370" y="125" textAnchor="middle" fill="#fbbf24" fontSize="14">{`{ }`}</text>
          <rect x="315" y="155" width="110" height="28" fill="#0a0a0a" />
          <text x="370" y="165" textAnchor="middle" fill="#666" fontSize="15">Extract key info</text>
          <text x="370" y="182" textAnchor="middle" fill="#666" fontSize="15">& priority level</text>
        </g>
        
        {/* Node 3: Customer DB */}
        <g className={`workflow-node ${animationStep >= 2 ? 'active' : ''}`} onMouseEnter={() => setActiveNode('database')} onMouseLeave={() => setActiveNode(null)}>
          <rect x="560" y="50" width="100" height="100" rx="12" fill="url(#nodeGradient)" stroke={animationStep >= 2 ? '#4ade80' : '#333'} strokeWidth="2"/>
          <text x="610" y="85" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">Customer</text>
          <text x="610" y="100" textAnchor="middle" fill="#888" fontSize="11">Database</text>
          <rect x="585" y="110" width="50" height="25" rx="4" fill="#06b6d4" opacity="0.2"/>
          <text x="610" y="127" textAnchor="middle" fill="#06b6d4" fontSize="14">⬢</text>
          <rect x="555" y="155" width="110" height="28" fill="#0a0a0a" />
          <text x="610" y="165" textAnchor="middle" fill="#666" fontSize="15">Fetch history</text>
          <text x="610" y="182" textAnchor="middle" fill="#666" fontSize="15">& preferences</text>
        </g>
        
        {/* Node 4: Omega AI (after data processing branch) */}
        <g className={`workflow-node ${animationStep >= 5 ? 'active' : ''}`} onMouseEnter={() => setActiveNode('omega')} onMouseLeave={() => setActiveNode(null)}>
          <rect x="800" y="50" width="100" height="100" rx="12" fill="url(#nodeGradient)" stroke={animationStep >= 3 ? '#4ade80' : '#333'} strokeWidth="2"/>
          <text x="850" y="85" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">Omega AI</text>
          <text x="850" y="100" textAnchor="middle" fill="#888" fontSize="11">Process</text>
          <circle cx="850" cy="120" r="15" fill="#8b5cf6" opacity="0.2"/>
          <circle cx="850" cy="120" r="8" fill="none" stroke="#8b5cf6" strokeWidth="2"/>
          <circle cx="850" cy="120" r="3" fill="#8b5cf6"/>
          <rect x="795" y="155" width="110" height="28" fill="#0a0a0a" />
          <text x="850" y="165" textAnchor="middle" fill="#666" fontSize="15">Local AI analyzes</text>
          <text x="850" y="182" textAnchor="middle" fill="#666" fontSize="15">& understands</text>
        </g>
        
        {/* Node 5: Generate Response (after AI branch) */}
        <g className={`workflow-node ${animationStep >= 9 ? 'active' : ''}`} onMouseEnter={() => setActiveNode('generate')} onMouseLeave={() => setActiveNode(null)}>
          <rect x="1040" y="50" width="100" height="100" rx="12" fill="url(#nodeGradient)" stroke={animationStep >= 4 ? '#4ade80' : '#333'} strokeWidth="2"/>
          <text x="1090" y="85" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">Generate</text>
          <text x="1090" y="100" textAnchor="middle" fill="#888" fontSize="11">Response</text>
          <rect x="1065" y="110" width="50" height="25" rx="4" fill="#10b981" opacity="0.2"/>
          <text x="1090" y="127" textAnchor="middle" fill="#10b981" fontSize="14">✓</text>
          <rect x="1035" y="155" width="110" height="28" fill="#0a0a0a" />
          <text x="1090" y="165" textAnchor="middle" fill="#666" fontSize="15">Create custom</text>
          <text x="1090" y="182" textAnchor="middle" fill="#666" fontSize="15">solution</text>
        </g>
        
        {/* Node 6: Send Email (after response branch and analytics) */}
        <g className={`workflow-node ${animationStep >= 12 ? 'active' : ''}`} onMouseEnter={() => setActiveNode('send')} onMouseLeave={() => setActiveNode(null)}>
          <rect x="1280" y="50" width="100" height="100" rx="12" fill="url(#nodeGradient)" stroke={animationStep >= 5 ? '#4ade80' : '#333'} strokeWidth="2"/>
          <text x="1330" y="85" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">Send</text>
          <text x="1330" y="100" textAnchor="middle" fill="#888" fontSize="11">Email</text>
          <circle cx="1330" cy="120" r="15" fill="#ef4444" opacity="0.2"/>
          <text x="1330" y="127" textAnchor="middle" fill="#ef4444" fontSize="16">→</text>
          <rect x="1275" y="155" width="110" height="28" fill="#0a0a0a" />
          <text x="1330" y="165" textAnchor="middle" fill="#666" fontSize="15">Deliver response</text>
          <text x="1330" y="182" textAnchor="middle" fill="#666" fontSize="15">to customer</text>
        </g>
        
        {/* Node 7: Knowledge Base */}
        <g className={`workflow-node ${animationStep >= 3 ? 'active' : ''}`} onMouseEnter={() => setActiveNode('knowledge')} onMouseLeave={() => setActiveNode(null)}>
          <rect x="560" y="250" width="100" height="100" rx="12" fill="url(#nodeGradient)" stroke={animationStep >= 3 ? '#fbbf24' : '#333'} strokeWidth="2"/>
          <text x="610" y="285" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">Knowledge</text>
          <text x="610" y="300" textAnchor="middle" fill="#888" fontSize="11">Base</text>
          <rect x="585" y="310" width="50" height="25" rx="4" fill="#fbbf24" opacity="0.2"/>
          <text x="610" y="327" textAnchor="middle" fill="#fbbf24" fontSize="14">📚</text>
          <rect x="555" y="355" width="110" height="28" fill="#0a0a0a" />
          <text x="610" y="365" textAnchor="middle" fill="#666" fontSize="15">Search docs</text>
          <text x="610" y="382" textAnchor="middle" fill="#666" fontSize="15">& articles</text>
        </g>
        
        {/* Node 8: Vector Search */}
        <g className={`workflow-node ${animationStep >= 4 ? 'active' : ''}`} onMouseEnter={() => setActiveNode('vector')} onMouseLeave={() => setActiveNode(null)}>
          <rect x="560" y="450" width="100" height="100" rx="12" fill="url(#nodeGradient)" stroke={animationStep >= 4 ? '#fbbf24' : '#333'} strokeWidth="2"/>
          <text x="610" y="485" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">Vector</text>
          <text x="610" y="500" textAnchor="middle" fill="#888" fontSize="11">Search</text>
          <circle cx="610" cy="520" r="15" fill="#f59e0b" opacity="0.2"/>
          <text x="610" y="527" textAnchor="middle" fill="#f59e0b" fontSize="14">⊙</text>
          <rect x="555" y="555" width="110" height="28" fill="#0a0a0a" />
          <text x="610" y="565" textAnchor="middle" fill="#666" fontSize="15">Find similar</text>
          <text x="610" y="582" textAnchor="middle" fill="#666" fontSize="15">content</text>
        </g>
        
        {/* Node 9: LLM Model */}
        <g className={`workflow-node ${animationStep >= 5 ? 'active' : ''}`} onMouseEnter={() => setActiveNode('llm')} onMouseLeave={() => setActiveNode(null)}>
          <rect x="800" y="250" width="100" height="100" rx="12" fill="url(#nodeGradient)" stroke={animationStep >= 5 ? '#8b5cf6' : '#333'} strokeWidth="2"/>
          <text x="850" y="285" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">LLM</text>
          <text x="850" y="300" textAnchor="middle" fill="#888" fontSize="11">Model</text>
          <rect x="825" y="310" width="50" height="25" rx="4" fill="#8b5cf6" opacity="0.2"/>
          <text x="850" y="327" textAnchor="middle" fill="#8b5cf6" fontSize="14">AI</text>
          <rect x="795" y="355" width="110" height="28" fill="#0a0a0a" />
          <text x="850" y="365" textAnchor="middle" fill="#666" fontSize="15">Generate smart</text>
          <text x="850" y="382" textAnchor="middle" fill="#666" fontSize="15">responses</text>
        </g>
        
        {/* Node 10: Context Analysis */}
        <g className={`workflow-node ${animationStep >= 6 ? 'active' : ''}`} onMouseEnter={() => setActiveNode('context')} onMouseLeave={() => setActiveNode(null)}>
          <rect x="800" y="450" width="100" height="100" rx="12" fill="url(#nodeGradient)" stroke={animationStep >= 6 ? '#8b5cf6' : '#333'} strokeWidth="2"/>
          <text x="850" y="485" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">Context</text>
          <text x="850" y="500" textAnchor="middle" fill="#888" fontSize="11">Analysis</text>
          <circle cx="850" cy="520" r="15" fill="#a78bfa" opacity="0.2"/>
          <text x="850" y="527" textAnchor="middle" fill="#a78bfa" fontSize="14">◈</text>
          <rect x="795" y="555" width="110" height="28" fill="#0a0a0a" />
          <text x="850" y="565" textAnchor="middle" fill="#666" fontSize="15">Understand</text>
          <text x="850" y="582" textAnchor="middle" fill="#666" fontSize="15">sentiment</text>
        </g>
        
        {/* Node 11: Cache */}
        <g className={`workflow-node ${animationStep >= 7 ? 'active' : ''}`} onMouseEnter={() => setActiveNode('cache')} onMouseLeave={() => setActiveNode(null)}>
          <rect x="800" y="650" width="100" height="100" rx="12" fill="url(#nodeGradient)" stroke={animationStep >= 7 ? '#8b5cf6' : '#333'} strokeWidth="2"/>
          <text x="850" y="685" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">Cache</text>
          <text x="850" y="700" textAnchor="middle" fill="#888" fontSize="11">Memory</text>
          <rect x="825" y="710" width="50" height="25" rx="4" fill="#7c3aed" opacity="0.2"/>
          <text x="850" y="727" textAnchor="middle" fill="#7c3aed" fontSize="14">⚡</text>
          <rect x="795" y="755" width="110" height="28" fill="#0a0a0a" />
          <text x="850" y="765" textAnchor="middle" fill="#666" fontSize="15">Store frequent</text>
          <text x="850" y="782" textAnchor="middle" fill="#666" fontSize="15">responses</text>
        </g>
        
        {/* Node 12: Slack */}
        <g className={`workflow-node ${animationStep >= 10 ? 'active' : ''}`} onMouseEnter={() => setActiveNode('slack')} onMouseLeave={() => setActiveNode(null)}>
          <rect x="1040" y="250" width="100" height="100" rx="12" fill="url(#nodeGradient)" stroke={animationStep >= 8 ? '#06b6d4' : '#333'} strokeWidth="2"/>
          <text x="1090" y="285" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">Slack</text>
          <text x="1090" y="300" textAnchor="middle" fill="#888" fontSize="11">Notify</text>
          <rect x="1065" y="310" width="50" height="25" rx="4" fill="#06b6d4" opacity="0.2"/>
          <text x="1090" y="327" textAnchor="middle" fill="#06b6d4" fontSize="14">#</text>
          <rect x="1035" y="355" width="110" height="28" fill="#0a0a0a" />
          <text x="1090" y="365" textAnchor="middle" fill="#666" fontSize="15">Alert support</text>
          <text x="1090" y="382" textAnchor="middle" fill="#666" fontSize="15">team</text>
        </g>
        
        {/* Node 13: Analytics */}
        <g className={`workflow-node ${animationStep >= 11 ? 'active' : ''}`} onMouseEnter={() => setActiveNode('analytics')} onMouseLeave={() => setActiveNode(null)}>
          <rect x="1040" y="450" width="100" height="100" rx="12" fill="url(#nodeGradient)" stroke={animationStep >= 9 ? '#06b6d4' : '#333'} strokeWidth="2"/>
          <text x="1090" y="485" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="500">Analytics</text>
          <text x="1090" y="500" textAnchor="middle" fill="#888" fontSize="11">Track</text>
          <circle cx="1090" cy="520" r="15" fill="#0891b2" opacity="0.2"/>
          <text x="1090" y="527" textAnchor="middle" fill="#0891b2" fontSize="14">📊</text>
          <rect x="1035" y="555" width="110" height="28" fill="#0a0a0a" />
          <text x="1090" y="565" textAnchor="middle" fill="#666" fontSize="15">Measure</text>
          <text x="1090" y="582" textAnchor="middle" fill="#666" fontSize="15">performance</text>
        </g>
        
        {/* Flow indicator dot */}
        <circle cx="130" cy="100" r="5" fill="#4ade80" opacity={animationStep === 0 ? 1 : 0}>
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
        </circle>
      </svg>
      
      {/* Legend removed per request */}
      
      {/* Tooltip removed per request */}
    </div>
  )
}
