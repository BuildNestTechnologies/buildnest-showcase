import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import ReadingProgress from "@/components/site/ReadingProgress";

export default function BlogLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <div className="min-h-screen bg-background text-foreground">
   <ReadingProgress />
   <header className="sticky top-0 z-50 border-b border-border bg-background/78 backdrop-blur-2xl">
    <div className="container-px mx-auto flex max-w-5xl items-center justify-between py-4">
     <Link href="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5">
       <Image src="/buildnest-logo.png" alt="BuildNest Technologies" width={28} height={28} className="h-7 w-7 object-contain" />
      </div>
      <div>
       <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Journal</p>
       <p className="text-sm font-semibold">BuildNest</p>
      </div>
     </Link>
     <Link href="/contact" className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background dark:bg-primary dark:text-white md:inline-flex">
      Start a project <ArrowRight className="h-4 w-4" />
     </Link>
    </div>
   </header>

   <main>{children}</main>

   <footer className="border-t border-border py-12">
    <div className="container-px mx-auto max-w-4xl">
     <div className="rounded-[2.2rem] bg-[#111111] p-8 text-center text-[#f5f1ea] md:p-10">
      <h2 className="text-2xl font-semibold">Need a premium website or software system instead of more generic digital work?</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65">
       BuildNest partners with businesses across Bhiwandi and Mumbai to create high-trust websites, motion-led interfaces, and custom software that feel intentionally made.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
       <Link href="/contact" className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#111111]">
        Contact BuildNest
       </Link>
       <a href="tel:+919284470352" className="inline-flex items-center gap-2 text-sm font-semibold text-white/72">
        <Phone className="h-4 w-4" /> Speak with an expert
      </a>
      </div>
     </div>
    </div>
   </footer>
  </div>
 );
}
