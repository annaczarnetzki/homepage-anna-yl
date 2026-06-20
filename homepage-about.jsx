/* eslint-disable */
// "Über mich" — bio + Werdegang + dezentes Diplom-Siegel.
function HomepageAbout({ onBook, showImage, showDiplom }) {
  const cv = [
    ['2026', 'Diplom Aromaberaterin · m. Auszeichnung', 'SITYA · Institut für neues Energiebewusstsein, St. Pölten'],
    ['seit 2012', 'Sozialarbeiterin im Krankenhaus', 'Begleitung in den schwersten Stunden — onkologisch, palliativ, geriatrisch'],
    ['ab 2007', 'Examinierte Krankenschwester', 'Pflege, Patient*innennähe, medizinisches Verständnis'],
    ['privat', 'Mutter zweier Töchter', '10 und 15 Jahre alt — mein Anker und Antrieb'],
  ];

  return (
    <section id="ueber-mich" style={{
      padding:'112px 32px', background:'var(--bg)',
      borderBottom:'1px solid var(--mist-200)',
    }}>
      <div style={{maxWidth: 880, margin:'0 auto'}}>
        <div>
          <div>
            <div style={{
              fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
              letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--brand)', marginBottom:18,
            }}>Über mich</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500,
              fontSize:'clamp(40px, 4.4vw, 60px)', lineHeight:1.04,
              letterSpacing:'-0.018em', color:'var(--ink-900)', margin:'0 0 32px',
              textWrap:'balance',
            }}>Drei Berufe, eine Haltung — Begleitung mit echter Zeit.</h2>

            <div style={{display:'flex', flexDirection:'column', gap:20, maxWidth: 620}}>
              <p style={proseStyle}>
                Ich bin <strong>Anna-Lena</strong>. Krankenschwester, Sozialarbeiterin im Krankenhaus, und seit 2026 <strong>Diplomierte Aromaberaterin</strong>. Drei Berufe, die in mir keine Konkurrenz sind — sondern derselbe Wunsch, in unterschiedlichen Sprachen.
              </p>
              <p style={proseStyle}>
                <strong>2018</strong> ist mein Mann mit 33 Jahren an Lungenkrebs gestorben. Anderthalb Jahre haben wir gekämpft — mit allem, was Schulmedizin und alternative Wege geben können. In dieser Zeit habe ich gelernt, was ätherische Öle <em>tragen</em> können, wenn sonst kaum etwas trägt. Diese Erfahrung trage ich heute weiter.
              </p>
              <p style={proseStyle}>
                In meiner Arbeit verbinde ich medizinisches Verständnis mit dem leisen Wissen der Kräuter und Öle. Ich verspreche dir keine Wunder. Ich verspreche dir Zeit, ein offenes Ohr und eine Mischung, die wirklich zu dir gehört.
              </p>
            </div>

            {/* CV table */}
            <div style={{marginTop: 56, maxWidth: 720}}>
              <div style={{
                fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
                letterSpacing:'0.22em', textTransform:'uppercase',
                color:'var(--ink-500)', marginBottom:16,
                paddingBottom: 12, borderBottom:'1px solid var(--mist-300)',
              }}>Werdegang</div>
              <dl style={{margin:0, padding:0, display:'flex', flexDirection:'column'}}>
                {cv.map(([year, title, sub]) => (
                  <div key={title} style={{
                    display:'grid', gridTemplateColumns:'140px 1fr', gap: 32,
                    padding: '18px 0', borderBottom:'1px solid var(--mist-200)',
                    alignItems:'baseline',
                  }}>
                    <dt style={{
                      fontFamily:'var(--font-display)', fontStyle:'italic',
                      fontSize: 18, color:'var(--brand)', margin:0,
                    }}>{year}</dt>
                    <dd style={{margin:0}}>
                      <div style={{
                        fontFamily:'var(--font-display)', fontWeight:500,
                        fontSize: 20, color:'var(--ink-900)', marginBottom: 2,
                      }}>{title}</div>
                      <div style={{
                        fontFamily:'var(--font-body)', fontSize: 14, lineHeight:1.5,
                        color:'var(--ink-600)',
                      }}>{sub}</div>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {showDiplom && (
              <div style={{
                marginTop: 48, padding:'24px 28px',
                background:'var(--bg-warm)',
                borderRadius:'var(--radius-md)',
                display:'grid', gridTemplateColumns:'72px 1fr', gap: 24,
                alignItems:'center', maxWidth: 620,
              }}>
                <img src="assets/seal-gold.png" alt="Diplom-Siegel" style={{width:72, height:'auto'}}/>
                <div>
                  <div style={{
                    fontFamily:'var(--font-display)', fontWeight:500, fontSize:18,
                    color:'var(--ink-900)', marginBottom: 4,
                  }}>Dipl. Aromaberater/in &middot; mit Auszeichnung</div>
                  <div style={{
                    fontFamily:'var(--font-body)', fontSize:13, lineHeight:1.5,
                    color:'var(--ink-600)',
                  }}>SITYA &mdash; Institut für neues Energiebewusstsein, St. Pölten · 03.01.2026</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
const proseStyle = {
  fontFamily:'var(--font-body)', fontSize: 17, lineHeight: 1.7,
  color:'var(--ink-800)', margin:0, textWrap:'pretty',
};
window.HomepageAbout = HomepageAbout;
