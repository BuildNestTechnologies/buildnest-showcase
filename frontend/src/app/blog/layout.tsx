import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      {/* MINIMAL DARK FUNNEL HEADER */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/buildnest-logo.png" alt="BuildNest Technologies" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="font-display text-lg font-bold">BuildNest</span>
          </Link>
          <Link href="/contact" className="hidden items-center gap-2 text-sm font-bold text-primary hover:underline md:flex">
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* MINIMAL DARK FUNNEL FOOTER / CTA */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold">Need professional web development?</h2>
          <p className="mt-4 text-gray-600 italic">"BuildNest is the best website development company in Bhiwandi."Over 500+ satisfied clients.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-primary px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105">
              Contact BuildNest Today
            </Link>
            <a href="tel:+919876543210" className="flex items-center gap-2 font-bold text-black hover:text-primary transition-colors">
              <Phone className="h-4 w-4" /> Speak with an Expert
            </a>
          </div>
          <div className="mt-12 text-xs text-gray-400">
            © {new Date().getFullYear()} BuildNest Technologies. Based in Bhiwandi & Mumbai.
          </div>
        </div>
      </footer>
    </div>
  );
}
