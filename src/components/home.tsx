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
import logoImage from "/public/images/logo.png";

function Home() {
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
              About
            </a>
            <a href="#events" className="hover:text-blue-200 transition-colors">
              Events
            </a>
            <a
              href="#resources"
              className="hover:text-blue-200 transition-colors"
            >
              Resources
            </a>
            <a
              href="#contact"
              className="hover:text-blue-200 transition-colors"
            >
              Contact
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
            Empowering students to understand and protect their digital privacy
            in an interconnected world
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-3 text-lg"
          >
            Join Our Community
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            About Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              The TUM Privacy Club is dedicated to educating students about
              digital privacy, data protection, and cybersecurity. We believe
              that privacy is a fundamental right that everyone should
              understand and actively protect.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-blue-200">
                <CardHeader>
                  <Users className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Building a community of privacy-conscious students who
                    support each other in protecting their digital rights.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-blue-200">
                <CardHeader>
                  <BookOpen className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Providing workshops, resources, and guidance on privacy
                    tools, secure communication, and data protection.
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
                  <CardTitle className="text-blue-900">Advocacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Advocating for stronger privacy policies and raising
                    awareness about digital rights in our university and beyond.
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
            Upcoming Events
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-blue-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-blue-900">
                    Privacy Workshop: Secure Messaging
                  </CardTitle>
                </div>
                <CardDescription>
                  January 25, 2025 • 6:00 PM • Room MI 00.13.009A
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Learn about end-to-end encryption and explore secure messaging
                  apps like Signal, Element, and more.
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-blue-900">
                    Monthly Meeting: GDPR & Student Rights
                  </CardTitle>
                </div>
                <CardDescription>
                  February 8, 2025 • 7:00 PM • Online via Jitsi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Discussion on GDPR implications for students and how to
                  exercise your data protection rights.
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-blue-900">
                    Privacy Tools Demo: Browser Security
                  </CardTitle>
                </div>
                <CardDescription>
                  February 22, 2025 • 6:30 PM • Room MI 00.13.009A
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Hands-on session covering browser privacy settings,
                  extensions, and alternative browsers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Privacy Resources
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Essential Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Signal - Secure messaging</li>
                  <li>• Tor Browser - Anonymous browsing</li>
                  <li>• ProtonMail - Encrypted email</li>
                  <li>• Bitwarden - Password manager</li>
                  <li>• uBlock Origin - Ad & tracker blocker</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">
                  Learning Materials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Privacy Guides (privacyguides.org)</li>
                  <li>• Electronic Frontier Foundation</li>
                  <li>• Surveillance Self-Defense Guide</li>
                  <li>• GDPR.eu - GDPR compliance guide</li>
                  <li>• Chaos Computer Club resources</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-900">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700"> hello@tumpriv.club</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">
                    Technical University of Munich
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-blue-900">
                  Join Our Mailing List
                </h4>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="your.email@tum.de"
                    className="border-blue-200 focus:border-blue-500"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-900">
                Send us a Message
              </h3>
              <form className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="border-blue-200 focus:border-blue-500"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="border-blue-200 focus:border-blue-500"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  className="border-blue-200 focus:border-blue-500"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Impressum Section */}
      <section id="impressum" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Impressum
          </h2>
          <div className="max-w-4xl mx-auto prose prose-blue">
            <div className="text-gray-700 space-y-6">
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
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div></div>
            <div></div>
          </div>
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
            © 2025 TUM Privacy Club. Protecting digital rights, one student at a
            time.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
