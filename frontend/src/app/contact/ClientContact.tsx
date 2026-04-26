"use client";

import SectionTitle from "@/components/site/SectionTitle";
import Reveal from "@/components/site/Reveal";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export default function ClientContact() {
 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  toast.success("Message sent successfully! We'll reply within 24 hours.");
 };

 return (
  <>
   <section className="bg-hero py-20 md:py-28">
    <div className="container-px mx-auto max-w-4xl text-center">
     <Reveal>
      <SectionTitle
       title="Let's build something together"
       subtitle="Contact Us"
       centered
      />
     </Reveal>
     <Reveal delay={0.1}>
      <p className="mx-auto mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
       Have a project in mind or just need some honest advice? Drop us a message. We usually reply within 24 hours.
      </p>
     </Reveal>
    </div>
   </section>

   <section className="container-px mx-auto max-w-7xl py-12 md:py-20">
    <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
     {/* Contact Form */}
     <div className="lg:col-span-3">
      <Reveal>
       <div className="rounded-2xl border border-border bg-card p-8 shadow-card-soft md:p-12">
        <form onSubmit={handleSubmit} className="space-y-6">
         <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
           <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full Name
           </label>
           <input
            id="name"
            required
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
            placeholder="John Doe"
           />
          </div>
          <div className="space-y-2">
           <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email Address
           </label>
           <input
            id="email"
            type="email"
            required
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
            placeholder="john@company.com"
           />
          </div>
         </div>

         <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-foreground">
           What do you need help with?
          </label>
          <select
           id="subject"
           required
           className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          >
           <option value="">Select a service...</option>
           <option value="website">New Website</option>
           <option value="app">Mobile App</option>
           <option value="software">Custom Software / Dashboard</option>
           <option value="other">Other Inquiry</option>
          </select>
         </div>

         <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
           Tell us about your project
          </label>
          <textarea
           id="message"
           required
           rows={5}
           className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
           placeholder="I'm looking to build..."
          />
         </div>

         <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white shadow-soft transition hover:bg-primary/90"
         >
          Send Message <Send className="h-4 w-4" />
         </button>
         <p className="text-[10px] text-center text-muted-foreground mt-4">
          By submitting this form, you agree to our <a href="/privacy-policy" className="underline">Privacy Policy</a> and <a href="/terms" className="underline">Terms of Service</a>. We protect your data with 256-bit SSL encryption.
         </p>
        </form>
       </div>
      </Reveal>
     </div>

     {/* Contact Info Sidebar */}
     <div className="lg:col-span-2">
      <Reveal delay={0.1}>
       <div className="flex h-full flex-col gap-8 rounded-2xl bg-[#111214] p-8 text-white shadow-lg md:p-10">
        <div>
         <h2 className="font-display text-2xl font-bold">Contact Information</h2>
         <p className="mt-2 text-gray-400">Prefer to talk right now? Give us a call.</p>
        </div>

        <div className="flex flex-col gap-6">
         <a href="tel:+919284470352" className="group flex items-start gap-4 rounded-xl border border-gray-800 bg-gray-900 p-5 transition hover:border-primary/50">
          <div className="rounded-lg bg-primary/10 p-3 text-primary">
           <Phone className="h-6 w-6" />
          </div>
          <div>
           <p className="text-sm font-medium text-gray-400">Phone</p>
           <p className="mt-1 font-display text-lg font-semibold transition group-hover:text-primary">+91 92844 70352</p>
          </div>
         </a>

         <a href="mailto:hello@buildnest.world" className="group flex items-start gap-4 rounded-xl border border-gray-800 bg-gray-900 p-5 transition hover:border-primary/50">
          <div className="rounded-lg bg-primary/10 p-3 text-primary">
           <Mail className="h-6 w-6" />
          </div>
          <div>
           <p className="text-sm font-medium text-gray-400">Email</p>
           <p className="mt-1 font-display text-lg font-semibold transition group-hover:text-primary">hello@buildnest.world</p>
          </div>
         </a>

         <address className="not-italic flex items-start gap-4 rounded-xl border border-gray-800 bg-gray-900 p-5">
          <div className="rounded-lg bg-primary/10 p-3 text-primary">
           <MapPin className="h-6 w-6" />
          </div>
          <div>
           <p className="text-sm font-medium text-gray-400">Main Office</p>
           <p className="mt-1 font-display text-lg font-semibold leading-tight">
            Near Shagun Chowk, <br/>
            Bhiwandi, Maharashtra 421302
           </p>
          </div>
         </address>
        </div>

       </div>
      </Reveal>
     </div>
    </div>
   </section>
  </>
 );
}
