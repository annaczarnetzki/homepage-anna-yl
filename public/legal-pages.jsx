/* eslint-disable */
// Rechtliche Seiten (Impressum). Schlichtes, gut lesbares Layout im Markenstil.
//
// ⚠️ BITTE AUSFÜLLEN / PRÜFEN:
//   - [STRASSE UND HAUSNUMMER] und [PLZ ORT] durch die echte ladungsfähige
//     Anschrift ersetzen (Pflichtangabe!).
//   - Umsatzsteuer-Abschnitt: zutreffende Variante wählen (Kleinunternehmer
//     ODER USt-IdNr eintragen).
//   Dies ist eine Vorlage, keine Rechtsberatung. Im Zweifel mit einem
//   Impressums-Generator (z. B. e-recht24.de) oder Anwalt gegenprüfen.

function LegalPage({ label, title, children }) {
  return (
    <div data-screen-label={label}>
      <section style={{ padding:'96px 20px 80px', background:'var(--bg)' }}>
        <div style={{ maxWidth: 760, margin:'0 auto' }}>
          <div style={{
            fontFamily:'var(--font-body)', fontSize:11, fontWeight:600,
            letterSpacing:'0.22em', textTransform:'uppercase',
            color:'var(--brand)', marginBottom:18,
          }}>Rechtliches</div>
          <h1 style={{
            fontFamily:'var(--font-display)', fontWeight:500,
            fontSize:'clamp(36px, 4.6vw, 60px)', lineHeight:1.05,
            letterSpacing:'-0.02em', color:'var(--ink-900)', margin:'0 0 40px',
          }}>{title}</h1>
          <div style={{
            fontFamily:'var(--font-body)', fontSize:16, lineHeight:1.7,
            color:'var(--ink-800)',
          }}>{children}</div>
        </div>
      </section>
    </div>
  );
}

function LegalH2({ children }) {
  return (
    <h2 style={{
      fontFamily:'var(--font-display)', fontWeight:500, fontSize:24,
      color:'var(--ink-900)', letterSpacing:'-0.01em',
      margin:'36px 0 10px',
    }}>{children}</h2>
  );
}

function ImpressumPage() {
  const link = { color:'var(--link, var(--brand))', textDecoration:'underline' };
  return (
    <LegalPage label="Impressum" title="Impressum">
      <LegalH2>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</LegalH2>
      <p style={{margin:'0 0 4px'}}>Anna-Lena Czarnetzki</p>
      <p style={{margin:'0 0 4px'}}>Aromaberatung</p>
      <p style={{margin:'0 0 4px'}}>Farsleber Str. 54</p>
      <p style={{margin:'0 0 4px'}}>39128 Magdeburg</p>
      <p style={{margin:'0'}}>Deutschland</p>

      <LegalH2>Kontakt</LegalH2>
      <p style={{margin:'0 0 4px'}}>Telefon: <a href="tel:+491637882018" style={link}>0163 / 788 2018</a></p>
      <p style={{margin:'0'}}>E-Mail: <a href="mailto:valor.mut@gmx.de" style={link}>valor.mut@gmx.de</a></p>

      <LegalH2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</LegalH2>
      <p style={{margin:'0'}}>Anna-Lena Czarnetzki (Anschrift wie oben)</p>

      <LegalH2>Verbraucherstreitbeilegung</LegalH2>
      <p style={{margin:'0'}}>
        Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <LegalH2>Haftung für Inhalte</LegalH2>
      <p style={{margin:'0 0 12px'}}>
        Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine
        Gewähr übernommen werden. Die Angaben dienen der allgemeinen Information
        und ersetzen keine ärztliche oder tierärztliche Beratung, Diagnose oder
        Behandlung.
      </p>

      <LegalH2>Haftung für Links</LegalH2>
      <p style={{margin:'0 0 12px'}}>
        Diese Website enthält ggf. Links zu externen Websites Dritter, auf deren
        Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten
        ist stets der jeweilige Anbieter verantwortlich.
      </p>

      <LegalH2>Urheberrecht</LegalH2>
      <p style={{margin:'0'}}>
        Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem
        deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
        Eine Vervielfältigung oder Verwendung bedarf der vorherigen schriftlichen
        Zustimmung.
      </p>
    </LegalPage>
  );
}

window.ImpressumPage = ImpressumPage;
