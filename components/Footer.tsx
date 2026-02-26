import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Coach Al. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/imprint" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition">
              Imprint
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
