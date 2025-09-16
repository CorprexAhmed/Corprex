import React, { useEffect, useMemo, useState } from 'react'

export default function PackageCard({ title, subtitle, price, cpu, gpu, concurrentUsersLabel, concurrentUsersOptions, capabilities = [], ctaLabel = 'Select', onSelect, showUseCases = true, showConcurrencySelector = true, showCapabilities = true, showCTA = true }) {
  const DEFAULT_USE_CASES = useMemo(() => ([
    { key: 'summarization', label: 'Summarization & document Q&A', weight: 2 },
    { key: 'install_ref', label: 'Referencing installation instructions', weight: 2 },
    { key: 'vision_eng', label: 'Engineering vision models (image/video)', weight: 5 },
    { key: 'code', label: 'Code generation & review', weight: 3 },
    { key: 'voice', label: 'Voice transcription & translation', weight: 3 },
    { key: 'rag', label: 'RAG knowledge base', weight: 3 },
    { key: 'agents', label: 'Agents & workflow automation', weight: 4 },
    { key: 'chatbot', label: 'Customer chatbots', weight: 2 },
    { key: 'analysis', label: 'Data analysis', weight: 2 },
  ]), [])

  const [selectedUseCases, setSelectedUseCases] = useState([])
  const toggleUseCase = (key) => {
    setSelectedUseCases((prev) => prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key])
  }

  const numericOptions = useMemo(() => (concurrentUsersOptions || []).map((opt) => {
    const n = parseInt(String(opt).replace(/[^0-9]/g, ''), 10)
    return Number.isFinite(n) ? n : 0
  }), [concurrentUsersOptions])

  const recommendedUsers = useMemo(() => {
    if (!numericOptions.length) return 1
    const min = Math.min(...numericOptions)
    const max = Math.max(...numericOptions)
    // Start from max users and decrease with more intensive use cases
    const totalWeight = selectedUseCases.reduce((sum, key) => {
      const found = DEFAULT_USE_CASES.find((u) => u.key === key)
      return sum + (found ? found.weight : 0)
    }, 0)
    if (totalWeight === 0) return max
    const intensityCap = max <= 25 ? 12 : 20
    const intensityNormalized = Math.max(0, Math.min(1, totalWeight / intensityCap))
    const recommended = Math.round(min + (1 - intensityNormalized) * (max - min))
    return Math.max(min, Math.min(max, recommended))
  }, [selectedUseCases, DEFAULT_USE_CASES, numericOptions])

  const nearestOptionValue = useMemo(() => {
    if (!numericOptions.length) return recommendedUsers
    return numericOptions.reduce((prev, curr) => {
      const dPrev = Math.abs(prev - recommendedUsers)
      const dCurr = Math.abs(curr - recommendedUsers)
      if (dCurr < dPrev) return curr
      if (dCurr === dPrev) return Math.min(curr, prev)
      return prev
    }, numericOptions[0])
  }, [numericOptions, recommendedUsers])

  const nearestOptionLabel = useMemo(() => {
    if (!concurrentUsersOptions || !concurrentUsersOptions.length) return String(nearestOptionValue)
    const idx = numericOptions.findIndex((n) => n === nearestOptionValue)
    return idx >= 0 ? concurrentUsersOptions[idx] : `${nearestOptionValue} users`
  }, [concurrentUsersOptions, numericOptions, nearestOptionValue])

  const [selectedOptionLabel, setSelectedOptionLabel] = useState(nearestOptionLabel)
  const [isUserOverridden, setIsUserOverridden] = useState(false)

  useEffect(() => {
    if (!isUserOverridden) {
      setSelectedOptionLabel(nearestOptionLabel)
    }
  }, [nearestOptionLabel, isUserOverridden])

  const onSelectChange = (e) => {
    setSelectedOptionLabel(e.target.value)
    setIsUserOverridden(true)
  }

  const resetToRecommended = () => {
    setIsUserOverridden(false)
    setSelectedOptionLabel(nearestOptionLabel)
  }

  return (
    <div className="package-card u-shadow-soft-lg u-border-accent u-lift">
      <div className="package-card__header">
        <div>
          <h3 className="package-card__title">{title}</h3>
          {subtitle && <p className="package-card__subtitle">{subtitle}</p>}
        </div>
        {price && <div className="package-card__price">{price}</div>}
      </div>
      <div className="package-card__specs">
        <div className="spec-row">
          <span className="spec-label">CPU</span>
          <span className="spec-value">{cpu}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">GPU</span>
          <span className="spec-value">{gpu}</span>
        </div>
        {showConcurrencySelector && concurrentUsersOptions && concurrentUsersOptions.length ? (
          <div className="spec-row spec-row--select">
            <label className="spec-label" htmlFor={`${title}-concurrency`}>Concurrent users</label>
            <select id={`${title}-concurrency`} className="spec-select" value={selectedOptionLabel} onChange={onSelectChange}>
              {concurrentUsersOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        ) : (
          <div className="spec-row">
            <span className="spec-label">Concurrent users</span>
            <span className="spec-value">{concurrentUsersLabel}</span>
          </div>
        )}
        {showConcurrencySelector && (
        <div className="recommendation-row">
          {isUserOverridden ? (
            <span className="recommendation-text">Recommended: <strong>{nearestOptionLabel}</strong> • <button className="link-reset" type="button" onClick={resetToRecommended}>Reset</button></span>
          ) : (
            <span className="recommendation-text">Auto-selected based on your use cases: <strong>{nearestOptionLabel}</strong></span>
          )}
        </div>
        )}
      </div>

      {showUseCases && (
      <div className="usecase-section">
        <div className="usecase-title">Select your use cases</div>
        <div className="usecase-grid">
          {DEFAULT_USE_CASES.map((uc) => {
            const id = `${title}-${uc.key}`
            const checked = selectedUseCases.includes(uc.key)
            return (
              <label key={uc.key} htmlFor={id} className={`usecase-item${checked ? ' checked' : ''}`}>
                <input
                  id={id}
                  type="checkbox"
                  className="usecase-checkbox"
                  checked={checked}
                  onChange={() => toggleUseCase(uc.key)}
                />
                <span className="usecase-label">{uc.label}</span>
              </label>
            )
          })}
        </div>
      </div>
      )}

      {showCapabilities && (
        <div className="package-card__capabilities">
          {capabilities.map((cap, idx) => (
            <div className="capability" key={idx}>
              <div className="capability__dot" />
              <div className="capability__text">{cap}</div>
            </div>
          ))}
        </div>
      )}

      {showCTA && (
        <div className="package-card__actions">
          <button className="btn btn--primary btn--lg" onClick={onSelect}>{ctaLabel}</button>
        </div>
      )}
    </div>
  )
}


