import { useState, useEffect } from 'react'
import './Wiki.css'

interface Section {
  title: string
  lines: string[]
}

function parseWiki(raw: string): Section[] {
  const sections: Section[] = []
  let current: Section | null = null

  for (const line of raw.split('\n')) {
    if (line.startsWith('=== ') && line.endsWith(' ===')) {
      if (current) sections.push(current)
      current = { title: line.slice(4, -4), lines: [] }
    } else if (current) {
      current.lines.push(line)
    }
  }
  if (current) sections.push(current)
  return sections
}

function Wiki() {
  const [sections, setSections] = useState<Section[]>([])
  const [openId, setOpenId] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/bcma/wiki/content.txt')
      .then(r => r.text())
      .then(raw => {
        setSections(parseWiki(raw))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return <div className="wiki-loading">加载中...</div>
  }

  return (
    <div className="wiki">
      <div className="wiki-header">
        <h2 className="wiki-title">BCMA 技术档案库</h2>
        <div className="wiki-meta">{sections.length} 份档案 · 仅限授权人员访问</div>
      </div>

      <div className="wiki-toc">
        <div className="wiki-toc-title">档案目录</div>
        {sections.map((s, i) => (
          <div
            key={i}
            className={`wiki-toc-item ${openId === i ? 'active' : ''}`}
            onClick={() => setOpenId(openId === i ? null : i)}
          >
            {s.title}
          </div>
        ))}
      </div>

      {openId !== null && sections[openId] && (
        <div className="wiki-content">
          <div className="wiki-content-header">
            <h3 className="wiki-content-title">{sections[openId].title}</h3>
          </div>
          <div className="wiki-content-body">
            {sections[openId].lines.map((line, i) => (
              <p key={i} className="wiki-line">{line || '\u00A0'}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Wiki
