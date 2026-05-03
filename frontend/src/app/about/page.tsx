import type { Metadata } from "next";
import Reveal from "@/components/site/Reveal";

export const metadata: Metadata = {
 title: "About Us | BuildNest Technologies",
 description: "Learn about BuildNest Technologies, the premier digital agency in Bhiwandi and Mumbai. We build high-performance web and software solutions.",
};

export default function About() {
 return (
  <>
   <section className="bg-hero pt-32 pb-20 border-b border-border">
    <div className="container-px mx-auto max-w-5xl text-center">
     <Reveal>
      <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
       About Build<span className="text-primary">Nest</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
       We are a team of passionate engineers and designers dedicated to bringing enterprise-grade technology to local businesses.
      </p>
     </Reveal>
    </div>
   </section>

   <section className="py-20">
    <div className="container-px mx-auto max-w-5xl">
     <Reveal direction="up">
      <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
      <div className="prose prose-neutral dark:prose-invert text-muted-foreground">
       <p>
        At BuildNest Technologies, our mission is simple: level the playing field. For too long, only large corporations could afford high-end, custom-built software and lightning-fast websites. 
       </p>
       <p className="mt-4">
        We use modern tools like React, Next.js, and Tailwind CSS to deliver that exact same quality to businesses in Bhiwandi, Mumbai, and across Indiawithout the bloated enterprise price tag.
       </p>
       <p className="mt-4">
        Whether you need a simple landing page or a complex ERP system to manage your warehouse logistics, we have the expertise to build it perfectly.
       </p>
      </div>
     </Reveal>
    </div>
   </section>
  </>
 );
}
