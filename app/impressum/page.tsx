import type { Metadata } from "next";
import { Section } from "../../components/atoms/Section";
import { Typography } from "../../components/atoms/Typography";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von Reinigungsservice Dali gemaess den gesetzlichen Pflichtangaben nach deutschem Recht.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#F7F9F8] text-[#1A1A1A]">
      <Section className="bg-[#F7F9F8]">
        <div className="mx-auto max-w-4xl">
          <Typography as="h1" variant="h1" className="mb-6">
            Impressum
          </Typography>
          <Typography variant="bodyMuted" className="mb-10">
            Angaben gemaess § 5 TMG
          </Typography>

          <div className="space-y-10">
            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                Diensteanbieter
              </Typography>
              <Typography variant="bodyMuted">
                Reinigungsservice Dali
                <br />
                Theodor-Heuss-Str.11
                <br />
                37075 Göttingen
                <br />
                Deutschland
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                Kontakt
              </Typography>
              <Typography variant="bodyMuted">
                Telefon: +49 30 1234567
                <br />
                E-Mail: hello@reinigung-dali.de
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                Vertreten durch
              </Typography>
              <Typography variant="bodyMuted">
                Inhaber: Dali
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                Haftung fuer Inhalte
              </Typography>
              <Typography variant="bodyMuted">
                Als Diensteanbieter sind wir gemaess den allgemeinen Gesetzen
                fuer eigene Inhalte auf diesen Seiten verantwortlich. Wir sind
                jedoch nicht verpflichtet, uebermittelte oder gespeicherte
                fremde Informationen zu ueberwachen oder nach Umstaenden zu
                forschen, die auf eine rechtswidrige Taetigkeit hinweisen.
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                Haftung fuer Links
              </Typography>
              <Typography variant="bodyMuted">
                Unser Angebot kann Links zu externen Websites Dritter enthalten,
                auf deren Inhalte wir keinen Einfluss haben. Deshalb koennen wir
                fuer diese fremden Inhalte auch keine Gewaehr uebernehmen.
              </Typography>
            </section>

            <section>
              <Typography as="h2" variant="h2" className="mb-3">
                Urheberrecht
              </Typography>
              <Typography variant="bodyMuted">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfaeltigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung ausserhalb der Grenzen des Urheberrechts beduerfen
                der schriftlichen Zustimmung des jeweiligen Autors bzw.
                Erstellers.
              </Typography>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
