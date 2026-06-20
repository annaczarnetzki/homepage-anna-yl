/* eslint-disable */
// Platzhalter-Seiten für die noch nicht ausgearbeiteten Themen.
// Schöner Coming-Soon-Auftritt im Editorial-Stil — wird ersetzt, sobald die Inhalte da sind.
function StubPage({ label, eyebrow, title, blurb, iconName, onBook }) {
  return (
    <div data-screen-label={label}>
      <section style={{
        padding:'120px 32px 80px',
        background:'var(--bg)',
        borderBottom:'1px solid var(--mist-200)',
      }}>
        <div style={{maxWidth:880, margin:'0 auto', textAlign:'center'}}>
          <DSIcon name={iconName || 'leaf'} size={72} variant="gold-on-cream"
                  style={{margin:'0 auto 24px'}}/>
          <div style={{
            fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
            letterSpacing:'0.22em', textTransform:'uppercase',
            color:'var(--brand)', marginBottom:18,
          }}>{eyebrow}</div>
          <h1 style={{
            fontFamily:'var(--font-display)', fontWeight:500,
            fontSize:'clamp(44px, 5.5vw, 76px)', lineHeight:1.04,
            letterSpacing:'-0.02em', color:'var(--ink-900)',
            margin:'0 0 24px', textWrap:'balance',
          }}>{title}</h1>
          <p style={{
            fontFamily:'var(--font-body)', fontSize:19, lineHeight:1.6,
            color:'var(--ink-700)', margin:'0 auto 40px',
            maxWidth:600, textWrap:'pretty',
          }}>{blurb}</p>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:10,
            padding:'10px 18px', borderRadius:999,
            background:'var(--bg-warm)',
            fontFamily:'var(--font-body)', fontSize:13, fontWeight:600,
            letterSpacing:'0.14em', textTransform:'uppercase',
            color:'var(--accent-strong)',
          }}>
            <span style={{width:8, height:8, borderRadius:999, background:'var(--accent-strong)'}}></span>
            In Vorbereitung
          </div>
          <p style={{
            fontFamily:'var(--font-body)', fontSize:15, lineHeight:1.6,
            color:'var(--ink-600)', margin:'40px auto 0', maxWidth:520,
          }}>
            Diese Seite entsteht gerade. Bis dahin: schreib mir gern, wenn du Fragen zu diesem Thema hast —
            in einem kurzen Kennenlerngespräch beantworte ich sie dir persönlich.
          </p>
          <button onClick={onBook} style={{
            marginTop:24,
            fontFamily:'var(--font-body)', fontWeight:600, fontSize:15,
            color:'var(--cream-50)', background:'var(--brand)',
            border:'none', padding:'14px 32px', borderRadius:999, cursor:'pointer',
          }}>Kennenlerngespräch vereinbaren</button>
        </div>
      </section>
    </div>
  );
}

function AllgemeinPage_stub({ onBook }) {
  return <StubPage label="02 Ätherische Öle – allgemein"
    eyebrow="Ätherische Öle – allgemein" iconName="droplet"
    title="Was Öle wirklich können."
    blurb="Eine ruhige Einführung in die Welt der ätherischen Öle: was sie sind, wie sie wirken, und wie du klug damit startest — ohne dich zu verlieren."
    onBook={onBook}/>;
}
function FamiliePage_stub({ onBook }) {
  return <StubPage label="03 Familie & Kinder"
    eyebrow="Familie & Kinder" iconName="heart"
    title="Sanft. Sicher. Familientauglich."
    blurb="Ätherische Öle für die Kleinsten und die ganze Familie — was darf in welchem Alter, was tut wirklich gut und wo wir lieber zurückhaltend bleiben."
    onBook={onBook}/>;
}
function PferdePage_stub({ onBook }) {
  return <StubPage label="05 Pferdearomatologie"
    eyebrow="Pferdearomatologie" iconName="leaf"
    title="Ehrlich, ruhig — und auf das Tier bezogen."
    blurb="Pferde sprechen über Geruch. Mit Ruhe und Achtsamkeit begleite ich dich und dein Pferd im Alltag mit ätherischen Ölen."
    onBook={onBook}/>;
}
window.AllgemeinPage_stub = AllgemeinPage_stub;
window.FamiliePage_stub = FamiliePage_stub;
window.PferdePage_stub = PferdePage_stub;
