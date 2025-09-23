import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, BookOpen, Mail, Phone, MapPin } from "lucide-react";
import logoImage from "/public/logo.svg";
import React, { useEffect, useState } from "react";

function Home() {
  // API Basis (Environment-Override möglich: VITE_API_BASE)
  const API_BASE =
    (import.meta as any)?.env?.VITE_API_BASE || "http://localhost:5000";
  // Backend Anbindung: Events (Liste) + Newsletter
  const [events, setEvents] = useState<any[]>([]);
  const [eventLoading, setEventLoading] = useState(true);
  const [eventError, setEventError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<
    "idle" | "loading" | "ok" | "exists" | "error"
  >("idle");
  const [subMessage, setSubMessage] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/api/events`)
      .then((r) => r.json())
      .then((d) => {
        const list = Array.isArray(d.events)
          ? d.events
          : d.event
          ? [d.event]
          : [];
        setEvents(list);
      })
      .catch(() => setEventError("Events konnten nicht geladen werden."))
      .finally(() => setEventLoading(false));
  }, [API_BASE]);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubStatus("loading");
    setSubMessage("");
    try {
      const res = await fetch(`${API_BASE}/api/email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.status === 201) {
        setSubStatus("ok");
        setSubMessage("Erfolgreich eingetragen.");
        setEmail("");
      } else if (data.message === "Bereits vorhanden") {
        setSubStatus("exists");
        setSubMessage("E-Mail bereits vorhanden.");
      } else if (data.error) {
        setSubStatus("error");
        setSubMessage(data.error);
      } else {
        setSubStatus("error");
        setSubMessage("Unbekannte Antwort.");
      }
    } catch {
      setSubStatus("error");
      setSubMessage("Netzwerkfehler.");
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src={logoImage}
              alt="TUM Privacy Club Logo"
              className="w-16 h-16"
            />
            <span className="text-xl font-bold">TUM Privacy Club</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-blue-200 transition-colors">
              Über uns
            </a>
            <a href="#events" className="hover:text-blue-200 transition-colors">
              Veranstaltungen
            </a>
            <a
              href="#resources"
              className="hover:text-blue-200 transition-colors"
            >
              Ressourcen
            </a>
            <a
              href="#contact"
              className="hover:text-blue-200 transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2a2e64] via-[#36407c] to-[#3b3f91] text-white py-20">
        <div className="container mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <img
              src={logoImage}
              alt="TUM Privacy Club Logo"
              className="w-24 h-24"
            />
          </div>
          <h1 className="text-5xl font-bold mb-6">TUM Privacy Club</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Wir stärken Studierende darin, ihre digitale Privatsphäre zu
            verstehen, souverän mit Daten umzugehen und sich in einer vernetzten
            Welt sicher zu bewegen.
          </p>
          {/* Join Button */}
          {/*<Button
            size="lg"
            className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-3 text-lg"
          >
            Jetzt beitreten
          </Button>*/}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Über Uns
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Der TUM Privacy Club ist eine studentische Initiative, die
              Bewusstsein für digitale Selbstbestimmung schafft. Wir zeigen
              praxisnah, wie Datenschutz, sichere Kommunikation und
              informationelle Selbstverteidigung funktionieren – verständlich,
              unabhängig und alltagsnah.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-blue-200">
                <CardHeader>
                  <Users className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Gemeinschaft</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Wir verbinden Studierende aus verschiedenen Fachrichtungen,
                    die Datenschutz und digitale Rechte wichtig finden – für
                    Austausch, Projekte und gegenseitige Unterstützung.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-blue-200">
                <CardHeader>
                  <BookOpen className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Bildung</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Hands-on Workshops, kurze Guides und Tool-Empfehlungen zu
                    Verschlüsselung, Tracking-Schutz, Passwort-Hygiene,
                    Metadaten & mehr.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-blue-200">
                <CardHeader>
                  <img
                    src={logoImage}
                    alt="Privacy Icon"
                    className="w-8 h-8 mb-2"
                  />
                  <CardTitle className="text-blue-900">Fürsprache</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Wir sensibilisieren für digitale Grundrechte, fördern
                    verantwortungsvolle Technologien und vertreten studentische
                    Perspektiven in datenschutzrelevanten Diskussionen.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Bevorstehende Veranstaltungen
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {eventLoading && (
              <p className="text-center text-gray-500">Lade Events...</p>
            )}
            {eventError && !eventLoading && (
              <p className="text-center text-red-600">{eventError}</p>
            )}
            {!eventLoading && !eventError && events.length === 0 && (
              <p className="text-center text-gray-500">
                Aktuell kein Event veröffentlicht.
              </p>
            )}
            {events.map((e) => (
              <Card key={e.id || e._id || e.title} className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-blue-900">{e.title}</CardTitle>
                  </div>
                  <CardDescription>
                    {e.date} {e.time ? `• ${e.time}` : ""}
                    {e.location ? ` • ${e.location}` : ""}
                  </CardDescription>
                </CardHeader>
                {e.description && (
                  <CardContent>
                    <p className="text-gray-700">{e.description}</p>
                  </CardContent>
                )}
              </Card>
            ))}
            {events.length > 0 && events.length < 3 && (
              <p className="text-center text-gray-500 mt-4">
                Weitere Veranstaltungen sind bereits in Planung – bleib dran.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Datenschutz-Ressourcen
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">
                  Wichtige Werkzeuge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <a
                      href="https://matrix.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 underline decoration-blue-300 hover:decoration-blue-500 underline-offset-2"
                    >
                      Matrix
                    </a>{" "}
                    - Dezentrale Kommunikationsplattform
                  </li>
                  <li>
                    <a
                      href="https://www.torproject.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 underline decoration-blue-300 hover:decoration-blue-500 underline-offset-2"
                    >
                      Tor Browser
                    </a>{" "}
                    – Anonymere Recherche & Zensurumgehung
                  </li>
                  <li>
                    <a
                      href="https://proton.me/mail"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 underline decoration-blue-300 hover:decoration-blue-500 underline-offset-2"
                    >
                      Proton Mail
                    </a>{" "}
                    – Verschlüsselte E-Mail-Infrastruktur
                  </li>
                  <li>
                    <a
                      href="https://nordvpn.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 underline decoration-blue-300 hover:decoration-blue-500 underline-offset-2"
                    >
                      NordVPN
                    </a>{" "}
                    – Sichere VPN-Verbindung
                  </li>
                  <li>
                    <a
                      href="https://ublockorigin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 underline decoration-blue-300 hover:decoration-blue-500 underline-offset-2"
                    >
                      uBlock Origin
                    </a>{" "}
                    – Tracker- & Werbeblocker
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Lernmaterialien</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=hbkB_jNG-zE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="italic font-semibold text-blue-700 hover:text-blue-900 underline decoration-blue-300 hover:decoration-blue-500 underline-offset-2"
                    >
                      Andy Yen: Think your email's private? Think again
                    </a>{" "}
                    – TED Talk vom Gründer von Proton
                  </li>
                  <li>
                    <a
                      href="https://gdpr.eu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 underline decoration-blue-300 hover:decoration-blue-500 underline-offset-2"
                    >
                      GDPR.eu
                    </a>{" "}
                    – Übersicht zu Rechten & Pflichten
                  </li>
                  <li>
                    <a
                      href="https://www.ccc.de/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 underline decoration-blue-300 hover:decoration-blue-500 underline-offset-2"
                    >
                      Chaos Computer Club
                    </a>{" "}
                    – Analysen & Veröffentlichungen
                  </li>
                  <li>
                    <a
                      href="https://www.tagesschau.de/thema/dsgvo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 underline decoration-blue-300 hover:decoration-blue-500 underline-offset-2"
                    >
                      DSGVO
                    </a>{" "}
                    – Nachrichten & Entwicklungen
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">
            Kontakt aufnehmen
          </h2>
          <h3 className="text-xl font-semibold mb-8 text-blue-900 text-center">
            So erreichst du uns
          </h3>
          <div className="flex flex-col items-center w-full mx-auto max-w-2xl">
            <div className="space-y-4 w-full">
              <div className="flex items-center space-x-3 justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700"> hello@tumpriv.club</span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  Technische Universität München
                </span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <span className="text-gray-700">
                  https://matrix.to/#/#tumprivacyclub:tum.de
                </span>
              </div>
              {/* Newsletter Formular */}
              <form
                onSubmit={handleSubscribe}
                className="pt-6 mt-6 border-t border-gray-200"
              >
                <h4 className="text-center font-semibold text-blue-900 mb-3">
                  Datenschutz-News & Events abonnieren
                </h4>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <input
                    type="email"
                    required
                    placeholder="deine.email@tum.de"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full sm:w-72 rounded-md border border-blue-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                  />
                  <Button
                    type="submit"
                    disabled={subStatus === "loading"}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                  >
                    {subStatus === "loading" ? "Sende…" : "Eintragen"}
                  </Button>
                </div>
                {subMessage && (
                  <p
                    className={`mt-2 text-center text-sm ${
                      subStatus === "ok"
                        ? "text-green-600"
                        : subStatus === "exists"
                        ? "text-blue-600"
                        : subStatus === "error"
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    {subMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Impressum Section */}
      <section id="impressum" className="py-16">
        <div className="container mx-auto px-4">
          <details className="max-w-4xl mx-auto" open={false}>
            <summary className="text-3xl font-bold text-center mb-12 text-blue-900 cursor-pointer select-none py-4 focus:outline-none">
              Impressum
            </summary>
            <div className="prose prose-blue text-gray-700 space-y-6">
              <p>
                <strong>Angaben gemäß § 5 TMG:</strong>
              </p>

              <p>
                <strong>
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV /
                  Ansprechpartner:
                </strong>
              </p>
              <div className="pl-4">
                <p>Tobias Maringgele</p>
                <p>E-Mail: tmaringgele@outlook.at</p>
                <p>Telefon: +43 677 62926015</p>
                <p>Elektrastraße 11</p>
                <p>81925 München</p>
                <p>Deutschland</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Haftung für Inhalte
                </h3>
                <p className="mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen,
                  die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                  Informationen nach den allgemeinen Gesetzen bleiben hiervon
                  unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                  Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                  möglich. Bei Bekanntwerden von entsprechenden
                  Rechtsverletzungen werden wir diese Inhalte umgehend
                  entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Haftung für Links
                </h3>
                <p className="mb-4">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                  die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich.
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                  erkennbar.
                </p>
                <p>
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten
                  ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
                  nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                  werden wir derartige Links umgehend entfernen.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <img
              src={logoImage}
              alt="TUM Privacy Club Logo"
              className="w-6 h-6"
            />
            <span className="text-lg font-semibold">TUM Privacy Club</span>
          </div>
          <p className="text-blue-200">
            © 2025 TUM Privacy Club. Digitale Rechte schützen – Schritt für
            Schritt.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
