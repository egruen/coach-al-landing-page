import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Imprint | Coach Al",
  description: "Legal notice and contact information for Coach Al.",
};

export default function Imprint() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-8"
        >
          ← Back to home
        </Link>
        
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h1>Legal Notice (Impressum)</h1>
          
          <p><strong>According to § 5 DDG (German Digital Services Act)</strong></p>
          
          <p>
            Eduard Grün<br />
            greenux<br />
            Im Gässle 10<br />
            71093 Weil im Schönbuch<br />
            Germany
          </p>

          <h2>Contact</h2>
          <p>
            Phone: <a href="tel:+4916294628091">+49 162 946 2809</a><br />
            Email: <a href="mailto:eduard.gruen@greenux.de">eduard.gruen@greenux.de</a>
          </p>

          <h2>Responsible for content according to § 18 Abs. 2 MStV</h2>
          <p>Eduard Grün (address as above)</p>

          <h2>EU Dispute Resolution</h2>
          <p>
            The European Commission provides a platform for online dispute resolution (OS):{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>
            We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
