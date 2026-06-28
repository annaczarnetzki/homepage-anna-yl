/* eslint-disable */
function SiteFooter({ setPage, onBook }) {
  return (
    <footer style={{
      background: 'var(--purple-700)',
      color: 'var(--cream-100)',
      padding: '64px 32px 32px',
      marginTop: 0,
    }}>
      <div style={{maxWidth:1200, margin:'0 auto'}}>
        <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap:48, marginBottom:48}}>
          <div>
            <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:18}}>
              <img src="assets/seal-gold.png" alt="Anna-Lena Czarnetzki Siegel"
                   style={{
                     width: 64, height: 64, borderRadius: 999,
                     background: 'var(--cream-50)',
                     padding: 4,
                     boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
                     flexShrink: 0,
                   }}/>
              <div style={{display:'flex', flexDirection:'column', lineHeight:1.1}}>
                <span style={{fontFamily:'var(--font-display)', fontWeight:500, fontSize:20, color:'var(--cream-50)'}}>Anna-Lena Czarnetzki</span>
                <span style={{fontFamily:'var(--font-body)', fontWeight:600, fontSize:10, color:'var(--gold-300)', letterSpacing:'0.18em', textTransform:'uppercase', marginTop:3}}>Aromaberatung</span>
              </div>
            </div>
            <p style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:18, color:'var(--gold-200)', margin:0, maxWidth:320, lineHeight:1.45}}>
              Natürlich. Ganzheitlich. Für dich.
            </p>
          </div>

          <FCol title="Seiten">
            <FLink onClick={()=>{setPage('home'); window.scrollTo({top:0});}}>Willkommen</FLink>
            <FLink onClick={()=>{setPage('allgemein'); window.scrollTo({top:0});}}>Ätherische Öle</FLink>
            <FLink onClick={()=>{setPage('familie'); window.scrollTo({top:0});}}>Familie</FLink>
            <FLink onClick={()=>{setPage('hund'); window.scrollTo({top:0});}}>Hund</FLink>
            <FLink onClick={()=>{setPage('pferde'); window.scrollTo({top:0});}}>Pferd</FLink>
            <FLink onClick={()=>{setPage('about'); window.scrollTo({top:0});}}>Über mich</FLink>
            <FLink onClick={()=>{setPage('weg'); window.scrollTo({top:0});}}>Der Weg zu den Ölen</FLink>
          </FCol>

          <FCol title="Kontakt">
            <FLink onClick={onBook}>Termin vereinbaren</FLink>
            <a href="tel:+491637882018" style={{...fStatic, textDecoration:'none'}}>0163 / 788 2018</a>
            <a href="mailto:valor.mut@gmx.de" style={{...fStatic, textDecoration:'none'}}>valor.mut@gmx.de</a>
            <span style={fStatic}>Magdeburg &middot; und online</span>
          </FCol>

          <FCol title="Folge mir">
            <a href="https://instagram.com/mehr.lebensfreude.ac" target="_blank" rel="noopener noreferrer" style={{...fStatic, textDecoration:'none'}}>@mehr.lebensfreude.ac</a>
            <a href="https://instagram.com/mehr.lebensfreude.ac" target="_blank" rel="noopener noreferrer" style={{...fStatic, textDecoration:'none'}}>Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{...fStatic, textDecoration:'none'}}>10-Tage-E-Mail-Kurs</a>
          </FCol>
        </div>

        <div style={{
          paddingTop: 24, borderTop: '1px solid rgba(252, 237, 193, 0.18)',
          display:'flex', flexDirection:'column', gap:18,
        }}>
          <p style={{
            fontFamily:'var(--font-body)', fontSize:13, lineHeight:1.65,
            color:'var(--gold-200)', margin:0, maxWidth:880, opacity:0.92,
          }}>
            Anna-Lena Czarnetzki ist unabhängige Brand Partnerin von Young Living. Die Inhalte
            dieser Seite stellen keine Heilversprechen dar und ersetzen keine ärztliche oder
            tierärztliche Beratung, Diagnose oder Behandlung. Einige Bilder auf dieser Website
            wurden mit Unterstützung von KI erstellt und dienen der Veranschaulichung.
          </p>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            fontFamily:'var(--font-body)', fontSize: 13, color: 'var(--gold-200)',
            flexWrap:'wrap', gap:16,
          }}>
            <div>© 2026 Anna-Lena Czarnetzki · Dipl. Aromaberaterin</div>
            <div style={{display:'flex', gap:24}}>
              <a href="#impressum" onClick={(e)=>{e.preventDefault(); setPage('impressum'); window.scrollTo({top:0});}}
                 style={{...fStatic, textDecoration:'none', cursor:'pointer'}}>Impressum</a>
              <a href="#datenschutz" onClick={(e)=>{e.preventDefault(); setPage('datenschutz'); window.scrollTo({top:0});}}
                 style={{...fStatic, textDecoration:'none', cursor:'pointer'}}>Datenschutz</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
function FCol({ title, children }) {
  return (
    <div>
      <div style={{
        fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
        letterSpacing:'0.18em', textTransform:'uppercase',
        color:'var(--gold-300)', marginBottom:18,
      }}>{title}</div>
      <div style={{display:'flex', flexDirection:'column', gap:10}}>{children}</div>
    </div>
  );
}
const fStatic = {fontFamily:'var(--font-body)', fontSize:14, color:'var(--cream-100)', opacity:0.85};
function FLink({ children, onClick }) {
  return (
    <a href="#" onClick={(e)=>{e.preventDefault(); onClick && onClick();}}
       style={{...fStatic, textDecoration:'none', cursor:'pointer'}}>{children}</a>
  );
}
window.SiteFooter = SiteFooter;
