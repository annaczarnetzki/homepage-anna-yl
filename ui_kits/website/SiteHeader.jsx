/* eslint-disable */
function SiteHeader({ page, setPage, onBook }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const nav = (key, label) => (
    <a href="#" onClick={(e)=>{e.preventDefault(); setPage(key); window.scrollTo({top:0});}} style={{
      fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500,
      color: page===key ? 'var(--purple-600)' : 'var(--ink-700)',
      textDecoration: 'none', position: 'relative', paddingBottom: 4,
      borderBottom: page===key ? '1.5px solid var(--gold-400)' : '1.5px solid transparent',
    }}>{label}</a>
  );
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      backdropFilter: 'blur(12px) saturate(1.2)',
      WebkitBackdropFilter: 'blur(12px) saturate(1.2)',
      background: scrolled ? 'rgba(250, 246, 239, 0.85)' : 'rgba(250, 246, 239, 0)',
      borderBottom: scrolled ? '1px solid var(--mist-300)' : '1px solid transparent',
      transition: 'all 250ms var(--ease-standard)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', height: 76,
        padding: '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#" onClick={(e)=>{e.preventDefault(); setPage('about'); window.scrollTo({top:0});}}
           style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{
            width: 40, height: 40, borderRadius: 999, background: 'var(--purple-500)',
            display:'flex',alignItems:'center',justifyContent:'center',
            color:'var(--gold-300)', fontFamily:'var(--font-display)', fontSize:18, fontWeight:600,
          }}>AC</div>
          <div style={{display:'flex', flexDirection:'column', lineHeight:1.1}}>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20,
              color: 'var(--ink-900)', letterSpacing: '-0.005em',
            }}>Anna-Lena Czarnetzki</span>
            <span style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 10,
              color: 'var(--gold-600)', letterSpacing: '0.18em', textTransform:'uppercase',
              marginTop: 3,
            }}>Aromaberatung</span>
          </div>
        </a>
        <nav style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {nav('about', 'Über mich')}
          {nav('beratung', 'Individuelle Beratung')}
          <button onClick={onBook} style={{
            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14,
            color: 'var(--cream-50)', background: 'var(--purple-500)',
            border: 'none', padding: '10px 22px', borderRadius: 999, cursor: 'pointer',
          }}>Termin</button>
        </nav>
      </div>
    </header>
  );
}
window.SiteHeader = SiteHeader;
