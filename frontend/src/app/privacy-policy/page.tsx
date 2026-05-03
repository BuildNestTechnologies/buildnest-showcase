import type { Metadata } from "next";
import Reveal from "@/components/site/Reveal";
import { Shield, Lock, Eye, FileText, UserCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
 title: "Privacy Policy | BuildNest Technologies",
 description: "Our privacy policy outlines how we handle your data and protect your privacy at BuildNest Technologies.",
 robots: "index, follow",
};

export default function PrivacyPolicy() {
 const sections = [
  {
   title: "1. Introduction",
   icon: <Shield className="h-6 w-6 text-primary" />,
   content: "Welcome to BuildNest Technologies. We are committed to protecting your personal information and your right to privacy. This policy applies to all information collected through our website (https://buildnest.world) and any related services."
  },
  {
   title: "2. Information We Collect",
   icon: <Eye className="h-6 w-6 text-primary" />,
   content: "We collect personal information that you voluntarily provide to us when expressing an interest in our services. This includes names, email addresses, phone numbers, and business details provided in our contact forms."
  },
  {
   title: "3. How We Use Data",
   icon: <UserCheck className="h-6 w-6 text-primary" />,
   content: "We use your data to provide our services, communicate with you regarding projects, and comply with legal obligations. We use high-performance engineering to ensure your data is processed securely."
  },
  {
   title: "4. Data Security",
   icon: <Lock className="h-6 w-6 text-primary" />,
   content: "We implement robust technical and organizational security measures, including 256-bit SSL encryption, to safeguard your data against unauthorized access or disclosure."
  },
  {
   title: "5. Your Rights",
   icon: <FileText className="h-6 w-6 text-primary" />,
   content: "You have the right to request access to, correction of, or deletion of your personal data. Contact us at buildnest.co.team@gmail.com to exercise these rights."
  }
 ];

 return (
  <main className="pt-32 pb-20 md:pt-40">
   <div className="container-px mx-auto max-w-4xl">
    <Reveal>
     <div className="text-center mb-16">
      <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl mb-6">
       Privacy Policy
      </h1>
      <p className="text-muted-foreground text-lg italic">
       Your trust is our foundation. Last Updated: April 26, 2026.
      </p>
     </div>
    </Reveal>

    <div className="grid gap-8">
     {sections.map((s, i) => (
      <Reveal key={i} delay={i * 0.1} direction="up">
       <div className="rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-4">
         <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          {s.icon}
         </div>
         <h2 className="text-2xl font-bold text-foreground">{s.title}</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
         {s.content}
        </p>
       </div>
      </Reveal>
     ))}
    </div>

    <Reveal delay={0.6}>
     <div className="mt-16 rounded-3xl bg-secondary p-10 text-center border border-border">
      <Mail className="h-10 w-10 text-primary mx-auto mb-6" />
      <h3 className="text-xl font-bold text-foreground mb-4">Have Questions?</h3>
      <p className="text-muted-foreground mb-8">
       If you have any concerns about how we handle your data, our team is here to help.
      </p>
      <a 
       href="mailto:buildnest.co.team@gmail.com" 
       className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 font-bold text-white transition hover:scale-105"
      >
       Contact Privacy Team
      </a>
     </div>
    </Reveal>
   </div>
  </main>
 );
}
