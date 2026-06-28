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

function DatenschutzPage() {
  const link = { color:'var(--link, var(--brand))', textDecoration:'underline' };
  const p = { margin:'0 0 12px' };
  return (
    <LegalPage label="Datenschutz" title="Datenschutzerklärung">
      <LegalH2>1. Verantwortlicher</LegalH2>
      <p style={{margin:'0 0 4px'}}>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
      <p style={{margin:'0 0 4px'}}>Anna-Lena Czarnetzki</p>
      <p style={{margin:'0 0 4px'}}>Farsleber Str. 54, 39128 Magdeburg</p>
      <p style={{margin:'0 0 4px'}}>E-Mail: <a href="mailto:valor.mut@gmx.de" style={link}>valor.mut@gmx.de</a></p>
      <p style={{margin:'0'}}>Telefon: <a href="tel:+491637882018" style={link}>0163 / 788 2018</a></p>

      <LegalH2>2. Allgemeines</LegalH2>
      <p style={p}>
        Der Schutz deiner persönlichen Daten ist mir wichtig. Ich verarbeite
        personenbezogene Daten ausschließlich im Rahmen der gesetzlichen
        Bestimmungen (DSGVO, BDSG). Personenbezogene Daten sind alle Daten, mit
        denen du persönlich identifiziert werden kannst.
      </p>

      <LegalH2>3. Deine Rechte</LegalH2>
      <p style={p}>
        Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
        Einschränkung der Verarbeitung, Datenübertragbarkeit sowie das Recht,
        einer Verarbeitung zu widersprechen. Eine erteilte Einwilligung kannst du
        jederzeit mit Wirkung für die Zukunft widerrufen. Außerdem steht dir ein
        Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu (in Sachsen-Anhalt:
        Landesbeauftragter für den Datenschutz Sachsen-Anhalt). Wende dich dafür
        gern an die oben genannten Kontaktdaten.
      </p>

      <LegalH2>4. Hosting &amp; Server-Logfiles</LegalH2>
      <p style={p}>
        Diese Website wird bei <strong>GitHub Pages</strong> gehostet, einem Dienst
        der GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.
        Beim Aufruf der Seite erhebt der Hosting-Anbieter aus technischen Gründen
        automatisch Informationen (sog. Server-Logfiles), z. B. IP-Adresse, Datum
        und Uhrzeit des Zugriffs, aufgerufene Seite und verwendeter Browser. Diese
        Daten dienen der sicheren und stabilen Bereitstellung der Website.
        Rechtsgrundlage ist das berechtigte Interesse an einem zuverlässigen Betrieb
        (Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen:{' '}
        <a href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement"
           target="_blank" rel="noopener noreferrer" style={link}>GitHub Privacy Statement</a>.
      </p>

      <LegalH2>5. SSL-/TLS-Verschlüsselung</LegalH2>
      <p style={p}>
        Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung
        (erkennbar am „https://" in der Adresszeile). Dadurch sind die Daten, die
        du übermittelst, für Dritte nicht mitlesbar.
      </p>

      <LegalH2>6. Kontaktformular &amp; Kontaktaufnahme</LegalH2>
      <p style={p}>
        Wenn du mir über das Kontaktformular oder per E-Mail eine Anfrage sendest,
        verarbeite ich die von dir angegebenen Daten (Name, E-Mail-Adresse und
        deine Nachricht), um deine Anfrage zu bearbeiten und zu beantworten.
        Rechtsgrundlage ist dein berechtigtes Interesse bzw. die Anbahnung eines
        Vertragsverhältnisses (Art. 6 Abs. 1 lit. b und f DSGVO).
      </p>
      <p style={p}>
        Für den Versand des Formulars wird der Dienst <strong>Web3Forms</strong>
        eingesetzt. Die im Formular eingegebenen Daten werden dabei an Web3Forms
        übermittelt und ausschließlich genutzt, um mir deine Anfrage per E-Mail
        zuzustellen. Deine Daten gebe ich nicht zu Werbezwecken weiter und lösche
        sie, sobald sie für die Bearbeitung nicht mehr erforderlich sind.
      </p>

      <LegalH2>7. Schriften (Google Fonts)</LegalH2>
      <p style={p}>
        Zur einheitlichen Darstellung von Schriftarten werden auf dieser Website
        Schriften von <strong>Google Fonts</strong> (Google Ireland Limited) geladen.
        Beim Aufruf einer Seite lädt dein Browser die benötigten Schriften von einem
        Google-Server, wodurch deine IP-Adresse an Google übermittelt wird.
        Rechtsgrundlage ist das berechtigte Interesse an einer ansprechenden,
        einheitlichen Darstellung (Art. 6 Abs. 1 lit. f DSGVO). Mehr dazu:{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={link}>
          Datenschutzerklärung von Google</a>.
      </p>

      <LegalH2>8. Externe Skripte / CDN</LegalH2>
      <p style={p}>
        Zur Darstellung der Seite werden technische Programmbibliotheken von einem
        Content-Delivery-Netzwerk (unpkg.com) geladen. Auch hierbei wird deine
        IP-Adresse an den jeweiligen Anbieter übermittelt. Rechtsgrundlage ist das
        berechtigte Interesse an einer technisch zuverlässigen Bereitstellung
        (Art. 6 Abs. 1 lit. f DSGVO).
      </p>

      <LegalH2>9. Cookies &amp; Tracking</LegalH2>
      <p style={p}>
        Diese Website setzt keine eigenen Cookies und verwendet keine Analyse- oder
        Tracking-Dienste.
      </p>

      <LegalH2>10. Aktualität</LegalH2>
      <p style={{margin:'0'}}>
        Diese Datenschutzerklärung wird angepasst, sobald sich die Datenverarbeitung
        auf dieser Website ändert.
      </p>
    </LegalPage>
  );
}

window.DatenschutzPage = DatenschutzPage;
