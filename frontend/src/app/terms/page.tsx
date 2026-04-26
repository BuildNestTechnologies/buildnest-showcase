import type { Metadata } from "next";
import Reveal from "@/components/site/Reveal";

export const metadata: Metadata = {
 title: "Terms of Service | BuildNest Technologies",
 description: "Read our terms of service to understand the agreement between you and BuildNest Technologies.",
 robots: "noindex, follow",
};

export default function TermsOfService() {
 return (
  <main className="pt-32 pb-20 md:pt-40">
   <article className="container-px mx-auto max-w-4xl prose prose-lg dark:prose-invert">
    <Reveal>
     <h1 className="font-display text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
     <p className="text-muted-foreground">Last Updated: April 26, 2026</p>
    </Reveal>

    <div className="mt-12 space-y-12 text-muted-foreground leading-relaxed">
     <section>
      <h2 className="text-2xl font-bold text-foreground">1. Agreement to Terms</h2>
      <p>
       By accessing our website at <strong>buildnest.world</strong>, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
      </p>
     </section>

     <section>
      <h2 className="text-2xl font-bold text-foreground">2. Service Model</h2>
      <p>
       <strong>BuildNest Technologies</strong> provides website development, software engineering, and mobile app services. Our unique "Zero Upfront" model means we start work before initial payment. However, ownership of the code and assets is only transferred to the client upon full payment of the agreed project fee.
      </p>
     </section>

     <section>
      <h2 className="text-2xl font-bold text-foreground">3. Intellectual Property</h2>
      <p>
       Unless otherwise stated, all materials on this website and all work produced during a project remain the intellectual property of BuildNest Technologies until final delivery and payment.
      </p>
     </section>

     <section>
      <h2 className="text-2xl font-bold text-foreground">4. User Obligations</h2>
      <p>
       Users agree not to use our services for any illegal purposes or to attempt to gain unauthorized access to our systems. We reserve the right to terminate service for any user who violates these terms.
      </p>
     </section>

     <section>
      <h2 className="text-2xl font-bold text-foreground">5. Limitation of Liability</h2>
      <p>
       In no event shall BuildNest Technologies be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on our website.
      </p>
     </section>

     <section>
      <h2 className="text-2xl font-bold text-foreground">6. Governing Law</h2>
      <p>
       These terms and conditions are governed by and construed in accordance with the laws of <strong>India</strong> and you irrevocably submit to the exclusive jurisdiction of the courts in the State of <strong>Maharashtra</strong>.
      </p>
     </section>
    </div>
   </article>
  </main>
 );
}
