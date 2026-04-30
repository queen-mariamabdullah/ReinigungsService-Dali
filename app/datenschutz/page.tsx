import type { Metadata } from "next";
import { Section } from "../../components/atoms/Section";
import { Typography } from "../../components/atoms/Typography";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklaerung von Reinigungsservice Dali gemaess DSGVO mit Informationen zur Verarbeitung personenbezogener Daten.",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#F7F9F8] text-[#1A1A1A]">
      <Section className="bg-[#F7F9F8]">
        <div className="mx-auto max-w-4xl">
          <Typography as="h1" variant="h1" className="mb-6">
            Datenschutzerklaerung
          </Typography>
          <Typography variant="bodyMuted" className="mb-10">
            Stand: 21. April 2026
          </Typography>

          <div className="space-y-10">
            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                1. Verantwortlicher
              </Typography>
              <Typography variant="bodyMuted">
                Reinigungsservice Dali
                <br />
                Theodor-Heuss-Str.11, 37075 Göttingen
                <br />
                E-Mail: hello@reinigung-dali.de
                <br />
                Telefon: +49 30 1234567
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                2. Allgemeine Hinweise zur Datenverarbeitung
              </Typography>
              <Typography variant="bodyMuted">
                Wir verarbeiten personenbezogene Daten nur im Rahmen der
                gesetzlichen Bestimmungen (insbesondere DSGVO und BDSG). Diese
                Datenschutzerklaerung informiert ueber Art, Umfang und Zweck der
                Verarbeitung personenbezogener Daten auf dieser Website.
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                3. Hosting und Server-Logfiles
              </Typography>
              <Typography variant="bodyMuted">
                Beim Aufruf unserer Website werden durch den Hosting-Provider
                automatisch Informationen in sogenannten Server-Logfiles
                erhoben (z. B. IP-Adresse, Datum/Uhrzeit, Browsertyp,
                Betriebssystem, Referrer-URL). Die Verarbeitung erfolgt zur
                Gewaehrleistung von Stabilitaet und Sicherheit auf Grundlage
                von Art. 6 Abs. 1 lit. f DSGVO.
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                4. Kontaktformular
              </Typography>
              <Typography variant="bodyMuted">
                Wenn Sie uns ueber das Kontaktformular Anfragen senden,
                verarbeiten wir Ihre Angaben (Name, E-Mail-Adresse, Nachricht)
                zur Bearbeitung der Anfrage und fuer den Fall von
                Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
                (vorvertragliche Kommunikation). Sofern Sie uns eine
                Einwilligung ueber das Formular erteilen, erfolgt die
                Verarbeitung zusaetzlich auf Grundlage von Art. 6 Abs. 1 lit. a
                DSGVO.
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                5. Technische Schutzmassnahmen beim Formular
              </Typography>
              <Typography variant="bodyMuted">
                Zur Abwehr automatisierter Spam-Anfragen verwenden wir technische
                Schutzmechanismen (z. B. ein verstecktes Formularfeld und eine
                Begrenzung der Anfragehaeufigkeit anhand der IP-Adresse). Die
                Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an der Sicherheit und Funktionsfaehigkeit
                unserer Website).
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                6. Versand der Kontaktanfrage per E-Mail
              </Typography>
              <Typography variant="bodyMuted">
                Die ueber das Kontaktformular uebermittelten Inhalte werden zur
                Bearbeitung Ihrer Anfrage ueber unseren E-Mail-Dienstleister
                (SMTP-Provider) an unsere interne Kontaktadresse zugestellt.
                Sofern eine Auftragsverarbeitung erforderlich ist, erfolgt diese
                auf Grundlage von Art. 28 DSGVO.
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                7. Google Maps
              </Typography>
              <Typography variant="bodyMuted">
                Auf unserer Website ist eine Karte von Google Maps eingebunden.
                Anbieter ist Google Ireland Limited, Gordon House, Barrow
                Street, Dublin 4, Irland. Beim Laden der Karte koennen Daten an
                Google uebermittelt werden (z. B. IP-Adresse). Die Karte wird
                erst nach Ihrer aktiven Einwilligung geladen. Rechtsgrundlage
                ist Art. 6 Abs. 1 lit. a DSGVO.
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                8. Speicherdauer
              </Typography>
              <Typography variant="bodyMuted">
                Wir speichern personenbezogene Daten nur so lange, wie dies fuer
                die jeweiligen Zwecke erforderlich ist oder gesetzliche
                Aufbewahrungsfristen bestehen.
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                9. Ihre Rechte
              </Typography>
              <Typography variant="bodyMuted">
                Sie haben nach den gesetzlichen Voraussetzungen das Recht auf
                Auskunft, Berichtigung, Loeschung, Einschraenkung der
                Verarbeitung, Datenuebertragbarkeit sowie Widerspruch gegen die
                Verarbeitung Ihrer Daten. Zusaetzlich haben Sie das Recht auf
                Beschwerde bei einer Datenschutzaufsichtsbehoerde.
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                10. Kontakt zum Datenschutz
              </Typography>
              <Typography variant="bodyMuted">
                Bei Fragen zum Datenschutz koennen Sie uns jederzeit unter
                hello@reinigung-dali.de kontaktieren.
              </Typography>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
