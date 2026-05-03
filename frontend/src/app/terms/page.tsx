import type { Metadata } from "next";
import Reveal from "@/components/site/Reveal";
import { FileText, Scale, Gavel, Award, AlertCircle, Mail } from "lucide-react";

export const metadata: Metadata = {
 title: "Terms of Service | BuildNest Technologies",
 description: "Read our terms of service to understand the agreement between you and BuildNest Technologies.",
 robots: "index, follow",
};

export default function TermsOfService() {
 const terms = [
  {
   title: "1. Agreement",
   icon: <Scale className="h-6 w-6 text-primary" />,
   content: "By using buildnest.world, you agree to these Terms of Service. If you do not agree, please do not use our services."
  },
  {
   title: "2. Service Model",
   icon: <Award className="h-6 w-6 text-primary" />,
   content: "BuildNest Technologies operates on a performance-first model. Our 'Result-Oriented' offering is a show of good faith to our clients. Project ownership transfers only upon final settlement."
  },
  {
   title: "3. Usage Policy",
   icon: <AlertCircle className="h-6 w-6 text-primary" />,
   content: "You agree not to use our code, designs, or services for illegal activities. We reserve the right to suspend services for violations."
  },
  {
   title: "4. IP Rights",
   icon: <FileText className="h-6 w-6 text-primary" />,
   content: "All source code, design assets, and content created during the project are protected under Indian Intellectual Property laws until full project payout."
  },
  {
   title: "5. Governing Law",
   icon: <Gavel className="h-6 w-6 text-primary" />,
   content: "These terms are governed by the laws of Maharashtra, India. Any disputes shall be handled within the jurisdiction of Mumbai/Bhiwandi courts."
  }
 ];

 return (
  <main className="pt-32 pb-20 md:pt-40">
   <div className="container-px mx-auto max-w-4xl">
    <Reveal>
     <div className="text-center mb-16">
      <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl mb-6">
       Terms of Service
      </h1>
      <p className="text-muted-foreground text-lg italic">
       Transparent agreements for high-performance results. Last Updated: April 26, 2026.
      </p>
     </div>
    </Reveal>

    <div className="grid gap-6">
     {terms.map((t, i) => (
      <Reveal key={i} delay={i * 0.1} direction="up">
       <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
         <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          {t.icon}
         </div>
         <h2 className="text-2xl font-bold text-foreground">{t.title}</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
         {t.content}
        </p>
       </div>
      </Reveal>
     ))}
    </div>

    <Reveal delay={0.6}>
     <div className="mt-16 text-center">
      <p className="text-muted-foreground mb-6">
       Need a custom contract for your enterprise project?
      </p>
      <a 
       href="mailto:buildnest.co.team@gmail.com" 
       className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
      >
       <Mail className="h-4 w-4" /> Reach out to our legal team
      </a>
     </div>
    </Reveal>
   </div>
  </main>
 );
}
