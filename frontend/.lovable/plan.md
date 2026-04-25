**BUILD A WEBSITE FOR "BUILDNEST TECHNOLOGIES" – 11/10 PROFESSIONAL & ANIMATED**

 **BRAND & COLORS**

- Company: BuildNest Technologies (India – websites, apps, custom software)

- Primary red: #FB3640

- Dark background: #111214

- Card background: #1A1C22

- Borders: #22252B

- Text: #E5E7EB, headings white.

- No playful gradients – only subtle red→black washes.

**TYPOGRAPHY** (professional, not cheesy)

- Headings: DM Sans (600–800)

- Body: Inter (400)

- Sizes: desktop H1 56px, mobile 40px.

 **PAGES & ROUTING**

- Home (very long, covers all main points of other pages)

- Services

- Software (dedicated page for custom software/ERP/AI tools)

- Pricing

- Portfolio

- Contact

- Sticky navbar, mobile hamburger, active link with red underline.

 **PRICING (exact – show as cards)**

- Starter: ₹7,999 | fixed pages up to 5, no admin panel, developer edits, no e‑commerce

- Business: ₹15,999 | dynamic pages, full admin panel, owner editable, no cart/payments

- E‑Commerce: ₹23,999 | full online store, payments+cart+inventory, advanced admin

- Enterprise / Software: Custom | unlimited pages, AI & automation, dedicated team, 24/7 support

- On Home hero: ribbon "100% OFF development cost – zero upfront"

 **DESIGN – NO AI LOOK (human, WordPress‑premium)**

- Subtle SVG noise/grain overlay over whole site.

- Cards: rounded (16px), hover = red border glow + lift (translateY -6px).

- Buttons: rounded‑full, bold, scale on hover + ripple effect.

- Asymmetric grids where possible (e.g., 2 cards left + 1 large right on Home).

- Trust bar: "500+ founders trust us" + 3 avatars + grayscale logos (Figma, Google, Amazon).

- Handwritten‑style badge in footer: "handcrafted in India" rotated 2deg.

 **ADVANCED ANIMATIONS (11/10 – for millennials & Gen Z)**

**Loading screen (crazy & classy)**  
- Full‑screen black (#0B0D0F), red spinner + BuildNest text that pulses, rotates slightly, and morphs scale.  
- Optional: particle background (tiny red dots floating).  
- Fades out after 1.8s.

**Page transitions**

- Framer Motion AnimatePresence: new page slides in from right + opacity fade (duration 0.5s, ease "anticipate").

**Scroll‑triggered animations**  
- Every section title: fade up + scale (0.95 → 1).  
- Cards: stagger fade‑in (delay based on index).  
- Parallax effect on background elements (slow scroll).

**Micro‑interactions (client attractive)**  
- Nav link: red underline grows on hover.  
- Buttons: tap scale (0.97) + ripple (using framer‑motion whileTap).  
- Cards: on hover → 3D tilt effect (rotateX/Y 2deg) + red border.  
- Desktop cursor follower: a tiny red dot that trails mouse with 0.2s delay (disabled on touch).  
- Tech stack marquee: horizontal infinite scroll of logos (React, Flutter, Node, Python, Go, AWS, Docker).

**Text animation**  
- Hero H1: split text – each word staggers in (fade + up).  
- CTA buttons: gentle border glow pulse.

 **SOFTWARE PAGE (dedicated)**  
- Show custom software services: ERP, CRM, AI chatbots, inventory, SaaS.  
- Tech badges: Node.js, Python, Go, AWS, Docker, Kubernetes.  
- Mock dashboard illustration (SVG placeholder).  
- Case example card: "Recruitment AI – reduced screening time by 70%".  
- CTA: "Get a free consultation" → /contact.

## HOME PAGE – VERY BIG (covers all)  
- Hero with H1 + subtext + dual CTAs + ribbon.  
- Trust bar (avatars + logos).  
- 4 service cards (web, app, software, automation).  
- Mini pricing row (3 visible packages) + link to full Pricing.  
- Featured software teaser.  
- Portfolio highlights (asymmetric grid).  
- Tech marquee.  
- Testimonials (Unsplash faces, real names, slight rotation on quote icon).  
- Final CTA: mini contact form teaser.

**PORTFOLIO PAGE**  
- 6 case study cards (Fintech Dashboard, EcoCommerce, HireIntel AI, etc.) with stats, tags, red hover effect.

## CONTACT PAGE  
- Form: Name, Email, Project dropdown (Website/App/Software/Other), Message, Send.  
- Side panel with email, location, testimonial snippet.  
- Toast notification on submit.

**RESPONSIVENESS – ALL DEVICES**  
- Mobile: single column, hamburger, font sizes reduced.  
- Tablet: two columns.  
- Desktop: full grid (4 cols for pricing, asymmetric for portfolio).

 **TECHNICAL (for Lovable)**  
- Use React + Tailwind CSS + Framer Motion (GSAP optional only for scroll parallax).  
- React Router for routes.  
- Loading screen component on initial mount.  
- No lorem ipsum – realistic dummy text.  
- All links functional.

**FINAL CHECK – 11/10**  
- Ensure every hover has a micro‑delight (scale, glow, tilt).  
- Page transitions must feel buttery smooth.  
- Loading screen should be memorable.  
- The site must not look like an AI template – use noise texture, asymmetric layouts, and a tiny "handcrafted" badge.  
- Client attraction: trust badges, clear pricing, zero‑upfront offer, and smooth performance.  
OUTPUT: Provide full runnable React code with components, pages, styles, and all animations exactly as above.