import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Coach Al
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/#how-it-works" className="text-gray-600 hover:text-gray-900 transition">
              How It Works
            </Link>
            <Link href="/#faq" className="text-gray-600 hover:text-gray-900 transition">
              FAQ
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
