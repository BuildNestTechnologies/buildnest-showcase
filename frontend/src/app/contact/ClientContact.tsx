"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const questions = [
 ["name", "Who should we design this for?", "Your name or team name"],
 ["need", "What needs to change or improve?", "Website, app, software, growth, or a mix"],
 ["contact", "Where should we reply?", "Email or WhatsApp number"],
];

export default function ClientContact() {
 const [step, setStep] = useState(0);
 const [values, setValues] = useState<Record<string, string>>({});
 const done = step >= questions.length;
 const current = questions[step];

 const next = () => {
  if (!done && !values[current[0]]?.trim()) return;
  if (step === questions.length - 1) {
   toast.success("Received. BuildNest will reply within 24 hours.");
  }
  setStep((value) => Math.min(value + 1, questions.length));
 };

 return (
  <main className="crafted-page min-h-[calc(100vh-5rem)]">
   <section className="container-px mx-auto max-w-7xl py-10 md:py-16">
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
     <div>
      <p className="section-label">Contact</p>
      <h1 className="section-title mt-4 max-w-2xl">A short, high-signal conversation is enough to begin the right build.</h1>
     </div>
     <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
      This contact flow stays simple on purpose. We only need enough context to understand the shape of the work and suggest the next sensible step.
     </p>
    </div>
   </section>

   <section className="container-px mx-auto max-w-7xl pb-16">
    <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
     <div className="editorial-panel rounded-[2.5rem] p-7 md:p-9">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
       {questions.map((question, index) => (
        <span key={question[0]} className={`rounded-full px-3 py-1 ${index <= step ? "bg-foreground text-background dark:bg-primary dark:text-white" : "bg-foreground/6 text-muted-foreground"}`}>
         0{index + 1}
        </span>
       ))}
      </div>

      <div className="mt-10 min-h-[14rem]">
       <AnimatePresence mode="wait">
        {!done ? (
         <motion.div key={current[0]} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.28 }}>
          <label htmlFor={current[0]} className="max-w-2xl text-2xl font-semibold leading-tight md:text-3xl">
           {current[1]}
          </label>
          <textarea
           id={current[0]}
           autoFocus
           rows={current[0] === "need" ? 4 : 1}
           value={values[current[0]] ?? ""}
           onChange={(event) => setValues((state) => ({ ...state, [current[0]]: event.target.value }))}
           placeholder={current[2]}
           className="mt-8 w-full resize-none border-0 border-b border-border bg-transparent pb-5 text-lg font-medium outline-none placeholder:text-muted-foreground/55 focus:border-foreground dark:focus:border-primary"
          />
         </motion.div>
        ) : (
         <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] bg-foreground text-background dark:bg-primary dark:text-white p-7">
          <Check className="h-7 w-7" />
          <h2 className="mt-8 text-2xl font-semibold">Your note is in.</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-background/78 dark:text-white/78">
           We’ll reply with the next clear move, not a script. If it helps, add more detail by email or WhatsApp and we’ll fold it into the same thread.
          </p>
         </motion.div>
        )}
       </AnimatePresence>
      </div>

      {!done && (
       <div className="mt-8 flex flex-wrap gap-3">
        {step > 0 && (
         <button type="button" onClick={() => setStep((value) => value - 1)} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold">
          <ArrowLeft className="h-4 w-4" /> Back
         </button>
        )}
        <button type="button" onClick={next} className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background dark:bg-primary dark:text-white">
         Continue <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      )}
     </div>

     <aside className="rounded-[2.5rem] bg-[#111111] p-7 text-[#f6f1ea] md:p-8">
      <p className="section-label text-white/42">Direct line</p>
      <div className="mt-8 space-y-6 text-sm">
       <a href="tel:+919284470352" className="flex gap-4 text-white/72 transition hover:text-white">
        <Phone className="mt-0.5 h-5 w-5 text-[#f5383d]" />
        <span><strong className="block text-white">Phone</strong>+91 92844 70352</span>
       </a>
       <a href="mailto:buildnest.co.team@gmail.com" className="flex gap-4 text-white/72 transition hover:text-white">
        <Mail className="mt-0.5 h-5 w-5 text-[#f5383d]" />
        <span><strong className="block text-white">Email</strong>buildnest.co.team@gmail.com</span>
       </a>
       <address className="flex gap-4 not-italic text-white/72">
        <MapPin className="mt-0.5 h-5 w-5 text-[#f5383d]" />
        <span><strong className="block text-white">Office</strong>Near Shagun Chowk, Bhiwandi, Maharashtra 421302</span>
       </address>
      </div>
     </aside>
    </div>
   </section>
  </main>
 );
}
