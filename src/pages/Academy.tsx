import { useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import { COURSES as ALL_COURSES, CATEGORIES } from '../data/courses'

const COURSES = ALL_COURSES

const PATHS = [
  {
    id: 1,
    title: 'Formação de Líder Ágil',
    objective: 'Desenvolver líderes capazes de conduzir transformações ágeis em escala.',
    courses: ['Leading SAFe® (SA)', 'SAFe® Lean Portfolio Management (LPM)', 'SAFe® Release Train Engineer (RTE)'],
    audience: 'Agile Managers, Coordenadores, Gerentes, Heads, Diretores, PMOs e Executivos.',
    outcome: 'Capacidade de liderar iniciativas estratégicas, conectar execução à estratégia e conduzir transformações organizacionais.',
    accent: '#00e676',
    accentRgb: '0,230,118',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Carreira de Scrum Master em Ambientes SAFe',
    objective: 'Evoluir de Scrum Master para facilitador de programas ágeis em escala.',
    courses: ['SAFe® Scrum Master (SSM)', 'SAFe® Advanced Scrum Master (SASM)', 'Leading SAFe® (SA)'],
    audience: 'Scrum Masters, Agile Coaches e Agilistas.',
    outcome: 'Atuação mais estratégica, ampliação da empregabilidade e preparação para posições de liderança ágil.',
    accent: '#3b82f6',
    accentRgb: '59,130,246',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Product Management e Gestão de Produtos',
    objective: 'Formar profissionais capazes de criar, gerenciar e escalar produtos digitais.',
    courses: ['SAFe® Product Owner / Product Manager (POPM)', 'SAFe® Agile Product Management (APM)', 'Leading SAFe® (SA)'],
    audience: 'Product Owners, Product Managers, Analistas de Produto e Gestores de Produto.',
    outcome: 'Maior capacidade de definir estratégia de produto, gerar valor para o cliente e alinhar produtos aos objetivos de negócio.',
    accent: '#a855f7',
    accentRgb: '168,85,247',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Evolução para Cargos de Liderança',
    objective: 'Preparar profissionais para promoções e cargos de gestão.',
    courses: ['Leading SAFe® (SA)', 'SAFe® Lean Portfolio Management (LPM)', 'SAFe® Agile Product Management (APM)'],
    audience: 'Profissionais que desejam se tornar Coordenadores, Gerentes, Heads ou Diretores.',
    outcome: 'Desenvolvimento de visão estratégica, gestão de portfólio e liderança organizacional.',
    accent: '#f59e0b',
    accentRgb: '245,158,11',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Arquitetura e Transformação Tecnológica',
    objective: 'Capacitar profissionais técnicos para atuar em ambientes ágeis de grande porte.',
    courses: ['SAFe® for Architects (ARCH)', 'SAFe® DevOps (SDP)', 'Leading SAFe® (SA)'],
    audience: 'Arquitetos de Solução, Arquitetos Corporativos, Tech Leads e Especialistas Técnicos.',
    outcome: 'Alinhamento entre arquitetura, desenvolvimento e estratégia empresarial.',
    accent: '#f97316',
    accentRgb: '249,115,22',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Implementação SAFe na Organização',
    objective: 'Formar agentes de transformação capazes de implantar e sustentar o SAFe.',
    courses: ['Leading SAFe® (SA)', 'SAFe® Scrum Master (SSM)', 'SAFe® Release Train Engineer (RTE)', 'SAFe® Lean Portfolio Management (LPM)'],
    audience: 'Empresas em processo de adoção ou expansão do SAFe.',
    outcome: 'Estruturação completa da jornada de Agilidade em Escala.',
    accent: '#06b6d4',
    accentRgb: '6,182,212',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Formação Completa para Agile Manager',
    objective: 'Tornar-se uma referência em Agilidade Escalada.',
    courses: ['SAFe® Scrum Master (SSM)', 'SAFe® Advanced Scrum Master (SASM)', 'Leading SAFe® (SA)', 'SAFe® Release Train Engineer (RTE)', 'SAFe® Lean Portfolio Management (LPM)'],
    audience: 'Agile Managers, Agile Coaches e Consultores de Transformação.',
    outcome: 'Capacidade de atuar desde a operação até a estratégia organizacional.',
    accent: '#ec4899',
    accentRgb: '236,72,153',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Formação Executiva SAFe',
    objective: 'Desenvolver líderes responsáveis pela estratégia e crescimento do negócio.',
    courses: ['Leading SAFe® (SA)', 'SAFe® Lean Portfolio Management (LPM)', 'SAFe® Agile Product Management (APM)'],
    audience: 'CEOs, CTOs, CIOs, Diretores e Executivos.',
    outcome: 'Conectar estratégia, inovação e execução em escala para acelerar resultados empresariais.',
    accent: '#00e676',
    accentRgb: '0,230,118',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]

const STATS = [
  { value: '300+', label: 'Treinamentos Aplicados' },
  { value: '10', label: 'Certificações SAFe' },
  { value: '38', label: 'Países Atendidos' },
  { value: '96%', label: 'Taxa de Satisfação' },
]

const LEVEL_STYLE: Record<string, string> = {
  Iniciante: 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/40',
  Intermediário: 'bg-blue-900/60 text-blue-300 border border-blue-700/40',
  Avançado: 'bg-amber-900/60 text-amber-300 border border-amber-700/40',
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Academy() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)
  const [activePath, setActivePath] = useState(1)
  const pathsRef = useRef<HTMLElement>(null)

  const filtered = activeCategory === 'Todos'
    ? COURSES
    : COURSES.filter(c => c.category === activeCategory)

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#060b18', color: '#f5f0e8' }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
        style={{ backgroundColor: 'rgba(6,11,24,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(0,230,118,0.12)' }}>
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.1rem', letterSpacing: '0.02em', color: '#f5f0e8' }}>
              Genesis Consulting
            </span>
            <span style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.6rem', letterSpacing: '0.22em', color: '#00e676', textTransform: 'uppercase' }}>
              Academy
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Cursos', id: 'cursos' },
            { label: 'Trilhas', id: 'trilhas' },
            { label: 'Instrutores', id: 'instrutores' },
            { label: 'Certificações', id: 'cursos' },
          ].map(item => (
            <button key={item.label} onClick={() => scrollTo(item.id)}
              style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.85rem', color: '#94a3b8', letterSpacing: '0.04em', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              className="hover:text-white transition-colors">{item.label}</button>
          ))}
        </div>
        <button
          style={{
            fontFamily: 'Instrument Sans, sans-serif',
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            backgroundColor: '#00e676',
            color: '#060b18',
            padding: '0.5rem 1.4rem',
            fontWeight: 600,
          }}
          className="hover:bg-green-400 transition-colors"
          onClick={() => scrollTo('cursos')}>
          Começar agora
        </button>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-8 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,230,118,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,230,118,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(ellipse at center, rgba(0,230,118,0.08) 0%, transparent 70%)' }} />

        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5"
            style={{ border: '1px solid rgba(0,230,118,0.3)', backgroundColor: 'rgba(0,230,118,0.06)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#00e676', display: 'inline-block' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.14em', color: '#00e676', textTransform: 'uppercase' }}>
              Capacitação Corporativa
            </span>
          </div>

          <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 1.05, maxWidth: '18ch', marginBottom: '1.5rem' }}>
            Eleve o potencial do{' '}
            <span style={{ fontStyle: 'italic', color: '#00e676' }}>seu time</span>
          </h1>

          <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '1.1rem', lineHeight: 1.7, color: '#94a3b8', maxWidth: '52ch', marginBottom: '2.5rem' }}>
            Cursos e trilhas de aprendizado desenvolvidos pelos consultores da Genesis para transformar profissionais em especialistas de alta performance em tecnologia e gestão.
          </p>

          <div className="flex flex-wrap gap-4">
            <button style={{
              fontFamily: 'Instrument Sans, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              backgroundColor: '#00e676',
              color: '#060b18',
              padding: '0.875rem 2rem',
            }} className="hover:bg-green-400 transition-colors" onClick={() => scrollTo('cursos')}>
              Explorar Cursos
            </button>
            <button style={{
              fontFamily: 'Instrument Sans, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#f5f0e8',
              padding: '0.875rem 2rem',
              border: '1px solid rgba(245,240,232,0.2)',
            }} className="hover:border-white/40 transition-colors" onClick={() => scrollTo('trilhas')}>
              Ver Trilhas →
            </button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20" style={{ border: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'rgba(255,255,255,0.06)' }}>
            {STATS.map(stat => (
              <div key={stat.label} className="flex flex-col gap-1 px-8 py-6" style={{ backgroundColor: '#060b18' }}>
                <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: '2rem', color: '#00e676' }}>{stat.value}</span>
                <span style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.8rem', color: '#94a3b8', letterSpacing: '0.04em' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING PATHS */}
      <section id="trilhas" ref={pathsRef} className="py-24 px-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.18em', color: '#00e676', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
              Itinerários SAFe
            </span>
            <div className="flex items-end justify-between flex-wrap gap-6">
              <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.1, maxWidth: '20ch' }}>
                Trilhas de aprendizado estruturadas
              </h2>
              <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.95rem', color: '#64748b', lineHeight: 1.7, maxWidth: '44ch' }}>
                Cada trilha combina cursos SAFe em uma sequência lógica para acelerar sua evolução profissional.
              </p>
            </div>
          </div>

          {/* Path selector tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {PATHS.map(path => (
              <button
                key={path.id}
                onClick={() => setActivePath(path.id)}
                style={{
                  fontFamily: 'Instrument Sans, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: activePath === path.id ? 600 : 400,
                  letterSpacing: '0.03em',
                  padding: '0.45rem 1rem',
                  transition: 'all 0.2s',
                  backgroundColor: activePath === path.id ? path.accent : 'transparent',
                  color: activePath === path.id ? '#060b18' : '#64748b',
                  border: activePath === path.id ? `1px solid ${path.accent}` : '1px solid rgba(255,255,255,0.1)',
                }}
                className="hover:text-white hover:border-white/30">
                {path.id}. {path.title.split(' ').slice(0, 3).join(' ')}…
              </button>
            ))}
          </div>

          {/* Active path detail */}
          {PATHS.filter(p => p.id === activePath).map(path => (
            <div key={path.id} className="grid lg:grid-cols-5 gap-0" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>

              {/* Left panel — identity */}
              <div className="lg:col-span-2 p-8 flex flex-col gap-6 relative overflow-hidden"
                style={{ backgroundColor: 'rgba(17,24,39,0.8)', borderRight: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full"
                  style={{ background: `radial-gradient(circle at top right, rgba(${path.accentRgb},0.1), transparent 70%)` }} />

                <div className="flex items-center gap-3">
                  <div style={{
                    width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: `rgba(${path.accentRgb},0.12)`,
                    border: `1px solid rgba(${path.accentRgb},0.25)`,
                    color: path.accent,
                  }}>
                    {path.icon}
                  </div>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: path.accent, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    Trilha {path.id < 10 ? `0${path.id}` : path.id}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.55rem', lineHeight: 1.2 }}>
                  {path.title}
                </h3>

                <div>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: path.accent, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Objetivo
                  </p>
                  <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.65 }}>
                    {path.objective}
                  </p>
                </div>

                <div>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#64748b', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Indicado para
                  </p>
                  <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6 }}>
                    {path.audience}
                  </p>
                </div>

                <div className="mt-auto pt-4" style={{ borderTop: `1px solid rgba(${path.accentRgb},0.15)` }}>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#64748b', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Resultado esperado
                  </p>
                  <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6, fontStyle: 'italic' }}>
                    "{path.outcome}"
                  </p>
                </div>
              </div>

              {/* Right panel — course sequence */}
              <div className="lg:col-span-3 p-8 flex flex-col gap-4" style={{ backgroundColor: 'rgba(10,16,32,0.7)' }}>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#64748b', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Sequência de cursos
                </p>

                {path.courses.map((course, idx) => (
                  <div key={course} className="flex items-start gap-4 group/step"
                    style={{ padding: '1rem 1.25rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', transition: 'all 0.2s', cursor: 'default' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.backgroundColor = `rgba(${path.accentRgb},0.06)`; (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(${path.accentRgb},0.2)` }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)' }}>

                    {/* Step number */}
                    <div style={{
                      flexShrink: 0,
                      width: 32, height: 32,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: `1px solid rgba(${path.accentRgb},0.3)`,
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.75rem',
                      color: path.accent,
                      fontWeight: 600,
                    }}>
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    {/* Connector line */}
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.95rem', fontWeight: 500, color: '#e2e8f0', lineHeight: 1.4 }}>
                        {course}
                      </p>
                    </div>

                    {/* Arrow */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={path.accent} strokeWidth="2" style={{ flexShrink: 0, opacity: 0.5, marginTop: 2 }}>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="flex gap-2">
                    {PATHS.map(p => (
                      <button
                        key={p.id}
                        onClick={() => setActivePath(p.id)}
                        style={{
                          width: 8, height: 8,
                          borderRadius: '50%',
                          backgroundColor: activePath === p.id ? path.accent : 'rgba(255,255,255,0.15)',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s',
                          padding: 0,
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActivePath(Math.max(1, activePath - 1))}
                      disabled={activePath === 1}
                      style={{
                        padding: '0.5rem 1rem',
                        fontFamily: 'Instrument Sans, sans-serif',
                        fontSize: '0.8rem',
                        color: activePath === 1 ? '#334155' : '#94a3b8',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backgroundColor: 'transparent',
                        cursor: activePath === 1 ? 'not-allowed' : 'pointer',
                        transition: 'all 0.2s',
                      }}>
                      ← Anterior
                    </button>
                    <button
                      onClick={() => setActivePath(Math.min(PATHS.length, activePath + 1))}
                      disabled={activePath === PATHS.length}
                      style={{
                        padding: '0.5rem 1rem',
                        fontFamily: 'Instrument Sans, sans-serif',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: activePath === PATHS.length ? '#334155' : '#060b18',
                        border: 'none',
                        backgroundColor: activePath === PATHS.length ? 'rgba(255,255,255,0.08)' : path.accent,
                        cursor: activePath === PATHS.length ? 'not-allowed' : 'pointer',
                        transition: 'all 0.2s',
                      }}>
                      Próxima →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* All paths overview grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            {PATHS.map(path => (
              <button
                key={path.id}
                onClick={() => setActivePath(path.id)}
                className="text-left p-4 transition-all duration-200"
                style={{
                  border: activePath === path.id ? `1px solid ${path.accent}` : '1px solid rgba(255,255,255,0.07)',
                  backgroundColor: activePath === path.id ? `rgba(${path.accentRgb},0.08)` : 'rgba(17,24,39,0.4)',
                }}>
                <div style={{ color: path.accent, marginBottom: '0.5rem' }}>{path.icon}</div>
                <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: '#e2e8f0', lineHeight: 1.35 }}>
                  {path.title}
                </p>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#475569', marginTop: '0.4rem' }}>
                  {path.courses.length} cursos
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE CATALOG */}
      <section id="cursos" className="py-20 px-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.18em', color: '#00e676', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              Catálogo
            </span>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
              Todos os cursos
            </h2>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontFamily: 'Instrument Sans, sans-serif',
                    fontSize: '0.8rem',
                    letterSpacing: '0.05em',
                    padding: '0.4rem 1rem',
                    transition: 'all 0.2s',
                    backgroundColor: activeCategory === cat ? '#00e676' : 'transparent',
                    color: activeCategory === cat ? '#060b18' : '#94a3b8',
                    border: activeCategory === cat ? '1px solid #00e676' : '1px solid rgba(255,255,255,0.12)',
                    fontWeight: activeCategory === cat ? 600 : 400,
                  }}
                  className="hover:border-white/30 hover:text-white">
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(course => (
              <div
                key={course.id}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
                className="group flex flex-col cursor-pointer"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  backgroundColor: hoveredCourse === course.id ? 'rgba(17,24,39,0.9)' : 'rgba(10,16,32,0.8)',
                  transition: 'all 0.25s',
                  transform: hoveredCourse === course.id ? 'translateY(-3px)' : 'none',
                }}>
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 180, backgroundColor: '#111827' }}>
                  <img
                    src={`https://images.unsplash.com/${course.image}?w=600&h=360&fit=crop&auto=format`}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ opacity: 0.75 }}
                  />
                  {course.featured && (
                    <div className="absolute top-3 left-3 px-2 py-0.5"
                      style={{ backgroundColor: '#00e676', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#060b18', fontWeight: 600 }}>
                      DESTAQUE
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-0.5 text-xs ${LEVEL_STYLE[course.level]}`}
                      style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.08em' }}>
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 p-5 flex-1">
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#00e676', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {course.category}
                  </span>
                  <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.1rem', lineHeight: 1.25 }}>{course.title}</h3>
                  <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.825rem', color: '#94a3b8', lineHeight: 1.6 }}>
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                    <div className="flex gap-4">
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#64748b' }}>
                        ⏱ {course.duration}
                      </span>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#64748b' }}>
                        {course.modules} módulos
                      </span>
                    </div>
                    <span style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.75rem', color: '#94a3b8' }}>
                      {course.instructor}
                    </span>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <button
                    onClick={() => navigate(`/treinamento/${course.slug}`)}
                    style={{
                      width: '100%',
                      fontFamily: 'Instrument Sans, sans-serif',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '0.65rem',
                      color: '#00e676',
                      border: '1px solid rgba(0,230,118,0.35)',
                      backgroundColor: 'transparent',
                      transition: 'all 0.2s',
                      cursor: 'pointer',
                    }}
                    className="hover:bg-green-500/10 hover:border-green-400/60">
                    Ver curso →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section id="instrutores" className="py-24 px-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.18em', color: '#00e676', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
              Quem ensina
            </span>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.1 }}>
              Instrutores
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">

            {/* Cleber Santos — destaque (col-span-3) */}
            <div className="lg:col-span-3 relative overflow-hidden"
              style={{ border: '1px solid rgba(0,230,118,0.25)', backgroundColor: 'rgba(10,16,32,0.8)' }}>
              {/* Green glow top-right */}
              <div className="absolute top-0 right-0 w-72 h-72"
                style={{ background: 'radial-gradient(circle at top right, rgba(0,230,118,0.1), transparent 65%)' }} />

              <div className="relative p-8 flex flex-col gap-6 h-full">
                {/* Badge CEO */}
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 flex items-center gap-2"
                    style={{ backgroundColor: 'rgba(0,230,118,0.1)', border: '1px solid rgba(0,230,118,0.3)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#00e676', display: 'inline-block' }} />
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#00e676', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                      Instrutor Principal
                    </span>
                  </div>
                </div>

                {/* Photo placeholder + name */}
                <div className="flex items-center gap-5">
                  <div style={{
                    width: 88, height: 88, flexShrink: 0,
                    border: '2px solid rgba(0,230,118,0.4)',
                    background: 'linear-gradient(135deg, #0d2818 0%, #0a3320 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.8rem',
                    fontFamily: 'DM Serif Display, serif',
                    color: '#00e676',
                  }}>
                    CS
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.6rem', lineHeight: 1.1, marginBottom: '0.3rem' }}>
                      Cleber Santos
                    </h3>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#00e676', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>
                      CEO · Genesis Consulting Brasil
                    </p>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#64748b', letterSpacing: '0.08em' }}>
                      Diretor · Genesis Consulting Global
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.75 }}>
                  Executivo com sólida trajetória em transformações ágeis de larga escala, Cleber lidera a Genesis Consulting no Brasil e integra a liderança global da firma. Com profunda expertise em SAFe, Lean e Business Agility, já conduziu projetos de transformação organizacional em empresas do Brasil, EUA, Europa e Ásia — impactando times de dezenas a milhares de pessoas.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {['SAFe Practice Consultant', 'Leading SAFe', 'Lean Portfolio Management', 'Business Agility', 'Transformação Organizacional'].map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
                      letterSpacing: '0.06em',
                      color: '#00e676',
                      padding: '0.25rem 0.6rem',
                      backgroundColor: 'rgba(0,230,118,0.07)',
                      border: '1px solid rgba(0,230,118,0.2)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LinkedIn */}
                <div className="mt-auto">
                  <a href="https://www.linkedin.com/in/cleberrsantos/" target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      fontFamily: 'Instrument Sans, sans-serif',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#060b18',
                      backgroundColor: '#00e676',
                      padding: '0.55rem 1.2rem',
                      textDecoration: 'none',
                      transition: 'background-color 0.2s',
                    }}
                    className="hover:bg-green-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Ver perfil no LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Juliano Souza — secundário (col-span-2) */}
            <div className="lg:col-span-2 relative overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.08)', backgroundColor: 'rgba(17,24,39,0.6)' }}>
              <div className="absolute top-0 right-0 w-48 h-48"
                style={{ background: 'radial-gradient(circle at top right, rgba(59,130,246,0.07), transparent 70%)' }} />

              <div className="relative p-7 flex flex-col gap-5 h-full">
                <div className="px-3 py-1 self-start flex items-center gap-2"
                  style={{ backgroundColor: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.63rem', color: '#3b82f6', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    Instrutor
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div style={{
                    width: 72, height: 72, flexShrink: 0,
                    border: '2px solid rgba(59,130,246,0.3)',
                    background: 'linear-gradient(135deg, #0d1528 0%, #111d3a 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem',
                    fontFamily: 'DM Serif Display, serif',
                    color: '#3b82f6',
                  }}>
                    JS
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.25rem', lineHeight: 1.15, marginBottom: '0.25rem' }}>
                      Juliano Souza
                    </h3>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.67rem', color: '#3b82f6', letterSpacing: '0.08em' }}>
                      Consultor Sênior · Genesis Consulting
                    </p>
                  </div>
                </div>

                <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.7 }}>
                  Especialista em agilidade escalada e transformação digital, Juliano atua como consultor e instrutor SAFe na Genesis Consulting, conduzindo treinamentos e implementações em organizações de médio e grande porte no Brasil e no exterior.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['SAFe Agilist', 'Scrum Master', 'Agile Coach', 'DevOps'].map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.63rem',
                      color: '#3b82f6',
                      padding: '0.2rem 0.55rem',
                      backgroundColor: 'rgba(59,130,246,0.06)',
                      border: '1px solid rgba(59,130,246,0.18)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <a href="https://www.linkedin.com/in/julianofsouza/" target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      fontFamily: 'Instrument Sans, sans-serif',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      color: '#3b82f6',
                      border: '1px solid rgba(59,130,246,0.35)',
                      padding: '0.5rem 1rem',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      backgroundColor: 'transparent',
                    }}
                    className="hover:bg-blue-500/10">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Ver perfil no LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="py-24 px-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'rgba(10,16,32,0.6)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(1.5rem, 4vw, 2.4rem)',
            lineHeight: 1.3,
            fontStyle: 'italic',
            color: '#f5f0e8',
            marginBottom: '2rem',
          }}>
            "Capacitar pessoas é a forma mais duradoura de gerar valor. A Academy nasce do compromisso da Genesis com a excelência que transforma organizações."
          </p>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#00e676', letterSpacing: '0.12em' }}>
            GENESIS CONSULTING — ENVISION, ENABLE, ELEVATE
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 60% 50%, rgba(0,230,118,0.07) 0%, transparent 70%)',
        }} />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.18em', color: '#00e676', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
              Para empresas
            </span>
            <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Capacite seu time com o conhecimento da Genesis
            </h2>
            <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: '#94a3b8', marginBottom: '2rem' }}>
              Trilhas customizadas, instrutores especializados e certificações reconhecidas internacionalmente. Leve a expertise que transforma empresas Fortune 500 para dentro da sua organização.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button style={{
                fontFamily: 'Instrument Sans, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                backgroundColor: '#00e676',
                color: '#060b18',
                padding: '0.9rem 2rem',
              }} className="hover:bg-green-400 transition-colors">
                Falar com especialista
              </button>
              <button style={{
                fontFamily: 'Instrument Sans, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#f5f0e8',
                padding: '0.9rem 2rem',
                border: '1px solid rgba(245,240,232,0.2)',
              }} className="hover:border-white/40 transition-colors">
                Ver proposta corporativa
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { icon: '✦', title: 'Conteúdo customizado', desc: 'Trilhas desenvolvidas com base na realidade e maturidade da sua empresa.' },
              { icon: '✦', title: 'Instrutores experientes', desc: 'Consultores com histórico comprovado em projetos reais de transformação.' },
              { icon: '✦', title: 'Certificação reconhecida', desc: 'Certificados alinhados a frameworks internacionais e valorizado pelo mercado.' },
            ].map(item => (
              <div key={item.title} className="flex gap-4 p-5" style={{ border: '1px solid rgba(255,255,255,0.07)', backgroundColor: 'rgba(17,24,39,0.5)' }}>
                <span style={{ color: '#00e676', fontSize: '0.8rem', marginTop: 3, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem' }}>{item.title}</p>
                  <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.825rem', color: '#94a3b8', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-10" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start">
            <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1rem', color: '#f5f0e8' }}>Genesis</span>
            <span style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.6rem', letterSpacing: '0.22em', color: '#00e676', textTransform: 'uppercase' }}>Academy</span>
          </div>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#475569', letterSpacing: '0.06em' }}>
            © 2025 Genesis Consulting. Todos os direitos reservados.
          </span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#00e676', letterSpacing: '0.1em' }}>
            ENVISION · ENABLE · ELEVATE
          </span>
        </div>
      </footer>

    </div>
  )
}
