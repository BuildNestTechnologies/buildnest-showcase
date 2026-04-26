import type { Metadata } from "next";
import Reveal from "@/components/site/Reveal";

export const metadata: Metadata = {
 title: "Privacy Policy | BuildNest Technologies",
 description: "Our privacy policy outlines how we handle your data and protect your privacy at BuildNest Technologies.",
 robots: "noindex, follow",
};

export default function PrivacyPolicy() {
 return (
  <main className="pt-32 pb-20 md:pt-40">
   <article className="container-px mx-auto max-w-4xl prose prose-lg dark:prose-invert">
    <Reveal>
     <h1 className="font-display text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
     <p className="text-muted-foreground">Last Updated: April 26, 2026</p>
    </Reveal>

    <div className="mt-12 space-y-12 text-muted-foreground leading-relaxed">
     <section>
      <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
      <p>
       Welcome to <strong>BuildNest Technologies</strong> ("Company", "we", "our", "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at <strong>hello@buildnest.world</strong>.
      </p>
     </section>

     <section>
      <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
      <p>
       We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, such as:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4">
       <li>Name and Contact Data (Email address, phone number, etc.)</li>
       <li>Business Information (Company name, industry)</li>
       <li>Project Requirements</li>
      </ul>
     </section>

     <section>
      <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
      <p>
       We use personal information collected via our website for a variety of business purposes, including:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4">
       <li>To provide the services you request.</li>
       <li>To communicate with you regarding project updates.</li>
       <li>To send you marketing and promotional communications (only with your consent).</li>
       <li>To comply with legal obligations.</li>
      </ul>
     </section>

     <section>
      <h2 className="text-2xl font-bold text-foreground">4. Will Your Information Be Shared?</h2>
      <p>
       We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do <strong>not</strong> sell your data to third parties.
      </p>
     </section>

     <section>
      <h2 className="text-2xl font-bold text-foreground">5. Data Security</h2>
      <p>
       We use appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
      </p>
     </section>

     <section>
      <h2 className="text-2xl font-bold text-foreground">6. Contact Us</h2>
      <p>
       If you have questions or comments about this policy, you may email us at <strong>hello@buildnest.world</strong> or visit us at our office in <strong>Bhiwandi, Maharashtra, India</strong>.
      </p>
     </section>
    </div>
   </article>
  </main>
 );
}
