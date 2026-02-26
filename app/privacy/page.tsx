import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Coach Al",
  description: "Privacy policy and data protection information for Coach Al.",
};

export default function Privacy() {
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
          <h1>Privacy Policy</h1>
          
          <p><strong>Last updated:</strong> February 25, 2026</p>

          <h2>1. Controller</h2>
          <p>
            Eduard Grün / greenux<br />
            Im Gässle 10, 71093 Weil im Schönbuch, Germany<br />
            Email: <a href="mailto:eduard.gruen@greenux.de">eduard.gruen@greenux.de</a><br />
            Phone: <a href="tel:+4916294628091">+49 162 946 2809</a>
          </p>

          <h2>2. What We Collect</h2>
          <p>When you join our waitlist, we collect:</p>
          
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Purpose</th>
                <th>Legal Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Email address</td>
                <td>Waitlist registration, launch updates</td>
                <td>Art. 6(1)(a) GDPR — your consent</td>
              </tr>
            </tbody>
          </table>

          <p>
            We do not collect names, IP addresses for profiling, or any other personal data through the waitlist form.
          </p>

          <h2>3. How We Use Your Data</h2>
          <p>Your email address is used exclusively to:</p>
          <ul>
            <li>Confirm your waitlist registration</li>
            <li>Send you updates about Coach Al's launch and early access availability</li>
          </ul>
          <p>
            We will not send marketing emails beyond Coach Al launch communications. We will never sell, rent, or share your email with third parties for their marketing purposes.
          </p>

          <h2>4. Third-Party Processors</h2>
          <p>We use the following service providers to operate this website:</p>
          
          <table>
            <thead>
              <tr>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Location</th>
                <th>Safeguards</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vercel Inc.</td>
                <td>Website hosting</td>
                <td>USA</td>
                <td>EU Standard Contractual Clauses (DPA)</td>
              </tr>
              <tr>
                <td>Supabase Inc.</td>
                <td>Waitlist database</td>
                <td>USA</td>
                <td>EU Standard Contractual Clauses (DPA)</td>
              </tr>
            </tbody>
          </table>

          <p>
            Both providers process data on our behalf under data processing agreements (Art. 28 GDPR). No other third parties receive your data.
          </p>

          <h2>5. Cookies & Analytics</h2>
          <p>
            This website uses <strong>Vercel Web Analytics</strong>, which is cookie-free and does not collect personal data. No consent banner is required.
          </p>
          <p>
            We do not use Google Analytics, Facebook Pixel, or any other tracking technology that uses cookies or identifies individual users.
          </p>

          <h2>6. Data Retention</h2>
          <p>Your email address is stored until:</p>
          <ul>
            <li>You withdraw your consent (unsubscribe), or</li>
            <li>Coach Al launches and you either convert to a user account or are removed from the waitlist, or</li>
            <li>12 months after signup without a product launch</li>
          </ul>
          <p>After removal, your data is permanently deleted within 30 days.</p>

          <h2>7. Your Rights (GDPR Art. 15–21)</h2>
          <p>You have the right to:</p>
          <ul>
            <li><strong>Access</strong> your stored data (Art. 15)</li>
            <li><strong>Rectification</strong> of inaccurate data (Art. 16)</li>
            <li><strong>Erasure</strong> ("right to be forgotten") (Art. 17)</li>
            <li><strong>Restrict processing</strong> (Art. 18)</li>
            <li><strong>Data portability</strong> (Art. 20)</li>
            <li><strong>Object</strong> to processing (Art. 21)</li>
            <li><strong>Withdraw consent</strong> at any time without affecting prior processing (Art. 7(3))</li>
          </ul>
          <p>
            To exercise any of these rights, email: <a href="mailto:eduard.gruen@greenux.de">eduard.gruen@greenux.de</a>
          </p>
          <p>We will respond within 30 days.</p>

          <h2>8. Right to Complain</h2>
          <p>You have the right to lodge a complaint with a supervisory authority. The competent authority is:</p>
          <p>
            <strong>Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg</strong><br />
            Lautenschlagerstraße 20, 70173 Stuttgart<br />
            <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer">
              https://www.baden-wuerttemberg.datenschutz.de
            </a>
          </p>

          <h2>9. Data Security</h2>
          <p>
            We use TLS/SSL encryption for all data transmission. Access to stored data is restricted to authorized personnel only.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this policy to reflect changes in our practices or legal requirements. The "last updated" date at the top will be revised accordingly. Continued use of the waitlist after changes constitutes acceptance.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
