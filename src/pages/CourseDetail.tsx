import { useParams, useNavigate } from 'react-router'
import { COURSES } from '../data/courses'

const LEVEL_COLOR: Record<string, { text: string; bg: string; border: string }> = {
  Iniciante: { text: '#34d399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.25)' },
  Intermediário: { text: '#60a5fa', bg: 'rgba(96,165,250,0.08)', border: 'rgba(96,165,250,0.25)' },
  Avançado: { text: '#fbbf24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.25)' },
}

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const course = COURSES.find(c => c.slug === slug)

  if (!course) {
    return (
      <div style={{ backgroundColor: '#060b18', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: '2rem', color: '#f5f0e8' }}>Treinamento não encontrado.</p>
          <button onClick={() => navigate('/')} style={{ marginTop: '1.5rem', fontFamily: 'Instrument Sans, sans-serif', color: '#00e676', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>← Voltar à Academy</button>
        </div>
      </div>
    )
  }

  const lvl = LEVEL_COLOR[course.level]

  return (
    <div style={{ backgroundColor: '#060b18', minHeight: '100vh', color: '#f5f0e8' }}>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(6,11,24,0.9)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(0,230,118,0.1)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.875rem', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#f5f0e8')}
          onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Voltar à Academy
        </button>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: '0.95rem', color: '#f5f0e8' }}>Genesis</span>
          <span style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.55rem', letterSpacing: '0.22em', color: '#00e676', textTransform: 'uppercase' }}>Academy</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', padding: '4rem 2rem 3rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,230,118,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,230,118,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 320, background: 'linear-gradient(to bottom, rgba(0,230,118,0.06), transparent)' }} />

        <div style={{ position: 'relative', maxWidth: '1100px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#475569', letterSpacing: '0.08em' }}>Academy</span>
            <span style={{ color: '#334155', fontSize: '0.75rem' }}>/</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#475569', letterSpacing: '0.08em' }}>{course.category}</span>
            <span style={{ color: '#334155', fontSize: '0.75rem' }}>/</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#00e676', letterSpacing: '0.08em' }}>{course.certCode}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'start' }}>
            <div>
              {/* Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.12em', color: '#00e676', padding: '0.25rem 0.7rem', backgroundColor: 'rgba(0,230,118,0.08)', border: '1px solid rgba(0,230,118,0.2)', textTransform: 'uppercase' }}>
                  SAFe® {course.certCode}
                </span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.08em', color: lvl.text, padding: '0.25rem 0.7rem', backgroundColor: lvl.bg, border: `1px solid ${lvl.border}` }}>
                  {course.level}
                </span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.08em', color: '#64748b', padding: '0.25rem 0.7rem', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {course.category}
                </span>
              </div>

              <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
                {course.title}
              </h1>
              <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.75, maxWidth: '60ch', marginBottom: '2rem' }}>
                {course.fullDescription}
              </p>

              {/* Meta row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                {[
                  { icon: '⏱', label: 'Carga horária', value: course.duration },
                  { icon: '📅', label: 'Formato', value: course.sessions },
                  { icon: '🖥', label: 'Modalidade', value: 'Live Virtual' },
                  { icon: '🌐', label: 'Idioma', value: 'Português' },
                ].map(m => (
                  <div key={m.label}>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.63rem', color: '#475569', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{m.label}</p>
                    <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 600 }}>{m.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course image */}
            <div style={{ width: 220, height: 160, flexShrink: 0, overflow: 'hidden', border: '1px solid rgba(0,230,118,0.15)', display: 'none' }} className="hidden lg:block">
              <img src={`https://images.unsplash.com/${course.image}?w=440&h=320&fit=crop&auto=format`} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem 6rem', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2.5rem', alignItems: 'start' }}>

        {/* LEFT — Ementa, Público, Benefícios */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          {/* Ementa */}
          <div style={{ border: '1px solid rgba(255,255,255,0.07)', backgroundColor: 'rgba(17,24,39,0.6)', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 3, height: 24, backgroundColor: '#00e676' }} />
              <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.35rem' }}>Ementa do Curso</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {course.syllabus.map((item, idx) => (
                <div key={item} style={{ display: 'flex', gap: '1rem', padding: '0.85rem 0', borderBottom: idx < course.syllabus.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#00e676', flexShrink: 0, marginTop: '0.1rem', minWidth: '1.5rem' }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Público-alvo */}
          <div style={{ border: '1px solid rgba(255,255,255,0.07)', backgroundColor: 'rgba(17,24,39,0.6)', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 3, height: 24, backgroundColor: '#3b82f6' }} />
              <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.35rem' }}>Indicado para</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {course.audience.map(a => (
                <div key={a} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '0.2rem' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.55 }}>{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefícios */}
          <div style={{ border: '1px solid rgba(255,255,255,0.07)', backgroundColor: 'rgba(17,24,39,0.6)', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 3, height: 24, backgroundColor: '#a855f7' }} />
              <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.35rem' }}>Benefícios</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {course.benefits.map(b => (
                <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', padding: '0.85rem', backgroundColor: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.12)' }}>
                  <span style={{ color: '#a855f7', fontSize: '0.8rem', flexShrink: 0, marginTop: '0.15rem' }}>✦</span>
                  <span style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.825rem', color: '#94a3b8', lineHeight: 1.55 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Como é aplicado */}
          <div style={{ border: '1px solid rgba(255,255,255,0.07)', backgroundColor: 'rgba(17,24,39,0.6)', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 3, height: 24, backgroundColor: '#f59e0b' }} />
              <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.35rem' }}>Como o treinamento é aplicado</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '🎥', title: 'Live Virtual', desc: 'Sessões ao vivo com instrutor certificado SAFe®, em português. Totalmente interativas e com dinâmicas de grupo.' },
                { icon: '📚', title: 'Materiais Oficiais', desc: 'Todo o conteúdo segue os padrões oficiais do Scaled Agile®. Materiais digitais disponíveis durante e após o curso.' },
                { icon: '🤝', title: 'Altamente Interativo', desc: 'Exercícios práticos, simulações e estudos de caso reais promovem aprendizado imediato e aplicação no dia a dia.' },
                { icon: '🏅', title: 'Certificação Incluída', desc: 'O exame de certificação oficial SAFe® está incluído. Deve ser realizado em até 30 dias após o curso.' },
                { icon: '💳', title: 'Pagamento Facilitado', desc: 'Aceito via cartão de crédito em até 12x ou PayPal. Nota fiscal eletrônica emitida após a conclusão.' },
                { icon: '🔒', title: 'Aulas Não Gravadas', desc: 'Por respeito à LGPD e à confidencialidade dos participantes, as sessões não são gravadas.' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.1)' }}>
                  <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 600, fontSize: '0.875rem', color: '#e2e8f0', marginBottom: '0.2rem' }}>{item.title}</p>
                    <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.825rem', color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'sticky', top: '5rem' }}>

          {/* CTA Card */}
          <div style={{ border: '1px solid rgba(0,230,118,0.25)', backgroundColor: 'rgba(10,16,32,0.9)', padding: '1.75rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, background: 'radial-gradient(circle at top right, rgba(0,230,118,0.1), transparent 70%)' }} />
            <div style={{ position: 'relative' }}>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#00e676', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Inscreva-se agora
              </p>
              <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1.5rem', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                Garanta sua vaga neste treinamento
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.82rem', color: '#64748b' }}>Carga horária</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: '#e2e8f0' }}>{course.duration}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.82rem', color: '#64748b' }}>Sessões</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: '#e2e8f0' }}>{course.sessions}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.82rem', color: '#64748b' }}>Modalidade</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: '#e2e8f0' }}>Live Virtual</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0' }}>
                  <span style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.82rem', color: '#64748b' }}>Idioma</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: '#e2e8f0' }}>Português</span>
                </div>
              </div>
              <a href="https://br.genesisconsulting.com/treinamentos/" target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center', fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', backgroundColor: '#00e676', color: '#060b18', padding: '0.9rem', textDecoration: 'none', marginBottom: '0.75rem', transition: 'background-color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#4dffaa')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#00e676')}>
                Inscrever-se →
              </a>
              <a href="https://br.genesisconsulting.com/treinamentos/" target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center', fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.82rem', color: '#94a3b8', padding: '0.65rem', border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.25)')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)')}>
                Solicitar turma privada
              </a>
            </div>
          </div>

          {/* Certification Card */}
          <div style={{ border: '1px solid rgba(255,255,255,0.07)', backgroundColor: 'rgba(17,24,39,0.6)', padding: '1.5rem' }}>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.63rem', color: '#64748b', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Certificação
            </p>
            <p style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1rem', color: '#00e676', marginBottom: '1rem', lineHeight: 1.4 }}>{course.certification.name}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'Questões', value: String(course.certification.questions) },
                { label: 'Duração', value: course.certification.duration },
                { label: 'Aprovação', value: course.certification.passing },
                { label: 'Formato', value: course.certification.format },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', padding: '0.45rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.78rem', color: '#475569', flexShrink: 0 }}>{row.label}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#94a3b8', textAlign: 'right' }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Includes Card */}
          <div style={{ border: '1px solid rgba(255,255,255,0.07)', backgroundColor: 'rgba(17,24,39,0.6)', padding: '1.5rem' }}>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.63rem', color: '#64748b', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              O que está incluído
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {course.includes.map(inc => (
                <div key={inc} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00e676" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '0.15rem' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.5 }}>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PDUs */}
          <div style={{ border: '1px solid rgba(255,255,255,0.07)', backgroundColor: 'rgba(17,24,39,0.6)', padding: '1.25rem' }}>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.63rem', color: '#64748b', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Créditos Profissionais
            </p>
            <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>{course.pdus}</p>
          </div>

          {/* Partner badge */}
          <div style={{ padding: '1rem', backgroundColor: 'rgba(0,230,118,0.05)', border: '1px solid rgba(0,230,118,0.15)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e676" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5 }}>
              <span style={{ color: '#00e676', fontWeight: 600 }}>Scaled Agile® Silver Partner.</span> Conteúdo oficial e certificações internacionalmente reconhecidas.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
