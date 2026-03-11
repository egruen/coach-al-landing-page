import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-blue-600 text-white text-center py-2 px-4 text-sm font-medium">
        Early adopter pricing: €9/month locked forever (€29 at launch){" "}
        <a href="#hero" className="underline font-semibold ml-1 hover:text-blue-100 transition">
          Claim Your Spot →
        </a>
      </div>
      <header className="border-b border-gray-200 bg-white">
        <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              coach-al
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
    </div>
  );
}
