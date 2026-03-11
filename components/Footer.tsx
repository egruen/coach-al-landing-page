import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} coach-al · Built by{" "}
            <a
              href="https://greenux.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition underline"
            >
              greenux
            </a>
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/imprint" className="text-gray-600 hover:text-gray-900 transition">
              Imprint
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
