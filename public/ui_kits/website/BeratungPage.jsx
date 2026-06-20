/* eslint-disable */
function BeratungPage({ onBook }) {
  const { primaryBtn, ghostBtn } = window.btnStyles;
  return (
    <div data-screen-label="02 Individuelle Beratung">
      {/* Hero */}
      <section style={{
        background:'linear-gradient(180deg, #F6EDFB 0%, #FAF6EF 80%)',
        paddingTop: 80, paddingBottom: 64,
      }}>
        <div style={{maxWidth:1100, margin:'0 auto', padding:'0 32px', textAlign:'center'}}>
          <div style={{
            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--purple-500)', marginBottom: 18,
          }}>Individuelle Aromaberatung</div>
          <h1 style={{
            fontFamily:'var(--font-display)', fontWeight:500,
            fontSize:'clamp(44px, 5.5vw, 68px)', lineHeight:1.05,
            letterSpacing:'-0.018em', color:'var(--ink-900)',
            margin:'0 auto', maxWidth:780, textWrap:'balance',
          }}>Eine Beratung, so einzigartig wie du.</h1>
          <p style={{
            fontFamily:'var(--font-display)', fontStyle:'italic',
            fontSize:24, color:'var(--purple-500)', marginTop:18, marginBottom:0,
          }}>Natürlich. Ganzheitlich. Für dich.</p>
          <p style={{
            fontFamily:'var(--font-body)', fontSize:18, lineHeight:1.6,
            color:'var(--ink-700)', maxWidth:640, margin:'24px auto 0', textWrap:'pretty',
          }}>
            In Ruhe besprechen wir dein Anliegen — sei es Schlaf, Anspannung,
            Hautpflege, Hormonbalance oder einfach mehr Wohlbefinden im Alltag.
            Du bekommst eine persönliche Empfehlung, welche öle und Anwendungen zu dir passen.
          </p>
          <div style={{display:'flex', gap:14, justifyContent:'center', marginTop:32, flexWrap:'wrap'}}>
            <button onClick={onBook} style={primaryBtn}>Termin vereinbaren</button>
            <a href="#themen" style={ghostBtn}>Themen ansehen</a>
          </div>
        </div>
      </section>

      {/* How it works — 4 steps */}
      <section style={{padding:'80px 32px', background:'var(--cream-50)'}}>
        <div style={{maxWidth:1100, margin:'0 auto'}}>
          <div style={{textAlign:'center', marginBottom:48}}>
            <div style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--purple-500)', marginBottom: 14,
            }}>So läuft eine Beratung ab</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500, fontSize:40,
              lineHeight:1.15, color:'var(--ink-900)', margin:0,
              letterSpacing:'-0.015em',
            }}>Vier Schritte. In deinem Tempo.</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:24}}>
            {[
              ['01', 'Kennenlernen', 'Ein kostenloses Vorgespräch — telefonisch oder per Video. Wir schauen, ob es passt.'],
              ['02', 'Anamnese', 'Im Termin nehmen wir uns Zeit für deine Themen, deinen Alltag, deine Vorlieben.'],
              ['03', 'Empfehlung', 'Du bekommst eine persönliche Empfehlung mit klarer Anwendungs­anleitung — welche Öle, welche Form, welcher Rhythmus.'],
              ['04', 'Begleitung', 'Nach 2–4 Wochen besprechen wir, wie es dir damit geht — und passen an.'],
            ].map(([n, t, d]) => (
              <div key={n} style={{
                background:'var(--white)', borderRadius:20, padding:'28px 24px',
                boxShadow:'var(--shadow-sm)', position:'relative',
              }}>
                <div style={{
                  fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:36,
                  color:'var(--gold-500)', lineHeight:1, marginBottom:14,
                }}>{n}</div>
                <h3 style={{fontFamily:'var(--font-display)', fontWeight:500, fontSize:22, margin:'0 0 10px', color:'var(--ink-900)'}}>{t}</h3>
                <p style={{fontFamily:'var(--font-body)', fontSize:14.5, lineHeight:1.55, color:'var(--ink-700)', margin:0}}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes */}
      <section id="themen" style={{padding:'80px 32px', background:'var(--bg-tinted)'}}>
        <div style={{maxWidth:1100, margin:'0 auto'}}>
          <div style={{textAlign:'center', marginBottom:48}}>
            <div style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--purple-600)', marginBottom: 14,
            }}>Themen für die Beratung</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500, fontSize:40,
              lineHeight:1.15, color:'var(--ink-900)', margin:0,
            }}>Wofür ätherische Öle ein guter Begleiter sind.</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:20}}>
            {[
              ['Schlaf & Ruhe', 'Einschlafen, Durchschlafen, abends abschalten — sanft mit Lavendel, Vetiver oder Bergamotte.'],
              ['Stress & Anspannung', 'Wenn der Kopf nicht zur Ruhe kommt: Roll-On für unterwegs, Diffuser-Mischung für zuhause.'],
              ['Hautpflege', 'Trockene Haut, Reife Haut, Akne — pflanzliche Pflege mit fetten Ölen und passenden Essenzen.'],
              ['Frauenthemen', 'Zyklus, Wechseljahre, hormonelle Balance — sanfte Begleitung für jede Lebensphase.'],
              ['Kinderthemen', 'Was darf in welchem Alter? Sicher und kindgerecht: vom Schnupfen bis zum Lerntag.'],
              ['Mehr Lebensfreude', 'Düfte, die den Alltag heller machen — Zitrus, Rose, Weihrauch.'],
            ].map(([t, d]) => (
              <div key={t} style={{
                background:'var(--white)', borderRadius:18, padding:'24px 22px',
                boxShadow:'var(--shadow-sm)',
                borderTop:'3px solid var(--gold-300)',
              }}>
                <h3 style={{fontFamily:'var(--font-display)', fontWeight:500, fontSize:22, margin:'0 0 8px', color:'var(--purple-600)'}}>{t}</h3>
                <p style={{fontFamily:'var(--font-body)', fontSize:15, lineHeight:1.55, color:'var(--ink-700)', margin:0}}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats & pricing */}
      <section style={{padding:'80px 32px', background:'var(--cream-50)'}}>
        <div style={{maxWidth:1000, margin:'0 auto'}}>
          <div style={{textAlign:'center', marginBottom:48}}>
            <div style={{
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--purple-500)', marginBottom: 14,
            }}>Formate</div>
            <h2 style={{
              fontFamily:'var(--font-display)', fontWeight:500, fontSize:40,
              lineHeight:1.15, color:'var(--ink-900)', margin:0,
            }}>Wie wir uns begegnen können.</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:20}}>
            {[
              {t:'Kennenlerngespräch', p:'kostenlos', d:'20 Minuten · Telefon oder Video', f:['Anliegen besprechen','Vorgehen klären','Unverbindlich']},
              {t:'Einzelberatung', p:'auf Anfrage', d:'60–75 Minuten · vor Ort oder online', f:['Anamnese','Persönliche Empfehlung','Anwendungs­plan'], featured:true},
              {t:'Begleitung', p:'auf Anfrage', d:'3 Termine über 2–3 Monate', f:['Tiefere Arbeit','Anpassungen','Persönlicher Austausch']},
            ].map((c, i) => (
              <div key={c.t} style={{
                background: c.featured ? 'var(--purple-500)' : 'var(--white)',
                color: c.featured ? 'var(--cream-50)' : 'var(--ink-900)',
                borderRadius:20, padding:'32px 28px',
                boxShadow: c.featured ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                transform: c.featured ? 'translateY(-12px)' : 'none',
                border: c.featured ? 'none' : '1px solid var(--mist-300)',
              }}>
                <div style={{
                  fontFamily:'var(--font-body)', fontWeight:600, fontSize:11,
                  letterSpacing:'0.16em', textTransform:'uppercase',
                  color: c.featured ? 'var(--gold-300)' : 'var(--purple-500)',
                  marginBottom:12,
                }}>{c.featured ? 'Empfohlen' : '\u00A0'}</div>
                <h3 style={{fontFamily:'var(--font-display)', fontWeight:500, fontSize:26, margin:'0 0 6px'}}>{c.t}</h3>
                <div style={{
                  fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:24,
                  color: c.featured ? 'var(--gold-300)' : 'var(--gold-600)',
                  marginBottom:6,
                }}>{c.p}</div>
                <div style={{fontFamily:'var(--font-body)', fontSize:14, color: c.featured ? 'rgba(250,246,239,0.8)' : 'var(--ink-500)', marginBottom:20}}>{c.d}</div>
                <ul style={{listStyle:'none', padding:0, margin:'0 0 24px', display:'flex', flexDirection:'column', gap:10}}>
                  {c.f.map(item => (
                    <li key={item} style={{display:'flex', gap:10, alignItems:'flex-start', fontFamily:'var(--font-body)', fontSize:15}}>
                      <span style={{color: c.featured ? 'var(--gold-300)' : 'var(--purple-500)', marginTop:2}}>✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={onBook} style={{
                  width:'100%',
                  fontFamily:'var(--font-body)', fontWeight:600, fontSize:14,
                  background: c.featured ? 'var(--gold-300)' : 'var(--purple-500)',
                  color: c.featured ? 'var(--purple-700)' : 'var(--cream-50)',
                  border:'none', padding:'12px 20px', borderRadius:999, cursor:'pointer',
                }}>Anfragen</button>
              </div>
            ))}
          </div>
          <p style={{
            textAlign:'center', marginTop:32,
            fontFamily:'var(--font-body)', fontSize:13, color:'var(--ink-500)',
          }}>
            Hinweis: Aromaberatung ersetzt keine ärztliche oder therapeutische Behandlung.
          </p>
        </div>
      </section>
    </div>
  );
}
window.BeratungPage = BeratungPage;
