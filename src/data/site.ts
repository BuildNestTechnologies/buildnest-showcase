export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/software", label: "Software" },
  { to: "/pricing", label: "Pricing" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export const PRICING = [
  {
    name: "Starter",
    price: "₹7,999",
    tagline: "Perfect for a clean, fast launch.",
    features: [
      "Fixed pages (up to 5)",
      "No admin panel",
      "Developer edits only",
      "No e-commerce",
      "Mobile responsive",
      "Basic SEO setup",
    ],
    highlight: false,
  },
  {
    name: "Business",
    price: "₹15,999",
    tagline: "For growing brands that need control.",
    features: [
      "Dynamic pages",
      "Full admin panel",
      "Owner editable content",
      "Blog / CMS included",
      "No cart / payments",
      "Advanced SEO + analytics",
    ],
    highlight: true,
  },
  {
    name: "E-Commerce",
    price: "₹23,999",
    tagline: "Sell online with a proper store.",
    features: [
      "Full online store",
      "Payments + cart + inventory",
      "Advanced admin",
      "Order & customer management",
      "Coupons + shipping rules",
      "Marketing integrations",
    ],
    highlight: false,
  },
  {
    name: "Enterprise / Software",
    price: "Custom",
    tagline: "ERP, CRM, AI tools — built end to end.",
    features: [
      "Unlimited pages & modules",
      "AI & automation",
      "Dedicated team",
      "24/7 support & SLA",
      "Custom integrations",
      "Cloud architecture",
    ],
    highlight: false,
  },
];

export const SERVICES = [
  {
    title: "Web Development",
    desc: "Marketing sites, dashboards & SaaS UIs in Next.js and React — fast, accessible, conversion-focused.",
    icon: "globe",
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform apps in Flutter that ship to iOS and Android from one elegant codebase.",
    icon: "phone",
    stack: ["Flutter", "Dart", "Firebase", "REST"],
  },
  {
    title: "Custom Software",
    desc: "ERP, CRM, inventory and SaaS platforms engineered with Node.js, Python and modern cloud.",
    icon: "code",
    stack: ["Node.js", "Python", "Postgres", "AWS"],
  },
  {
    title: "Automation & Bots",
    desc: "WhatsApp bots, GPT-powered assistants, scraping pipelines, internal tools that reclaim hours.",
    icon: "bot",
    stack: ["GPT-4", "n8n", "Python", "Webhooks"],
  },
];

export const PORTFOLIO = [
  {
    title: "Fintech Dashboard",
    tag: "Next.js + Python",
    metric: "$12M assets tracked",
    desc: "A unified treasury dashboard for an Indian fintech — real-time positions, alerts, RBI-ready reports.",
    accent: "from-rose-500/30 to-orange-500/10",
    image: "/src/assets/work-fintech.jpg",
  },
  {
    title: "EcoCommerce",
    tag: "Full-stack store",
    metric: "300% revenue lift",
    desc: "Headless commerce for a sustainable D2C brand — Shopify-grade speed at a fraction of the cost.",
    accent: "from-emerald-500/30 to-cyan-500/10",
    image: "/src/assets/work-ecom.jpg",
  },
  {
    title: "HireIntel AI",
    tag: "GPT-4 Integration",
    metric: "70% faster screening",
    desc: "Recruitment AI that reads JDs, ranks candidates and writes outreach — built for a Bengaluru staffing firm.",
    accent: "from-indigo-500/30 to-fuchsia-500/10",
    image: "/src/assets/work-ai.jpg",
  },
  {
    title: "ClinicOS",
    tag: "Healthcare SaaS",
    metric: "42 clinics live",
    desc: "Appointments, billing, prescriptions and WhatsApp reminders — one calm interface for busy clinics.",
    accent: "from-sky-500/30 to-blue-500/10",
    image: "/src/assets/work-fintech.jpg",
  },
  {
    title: "ShopEase",
    tag: "Shopify + Custom",
    metric: "₹2.4Cr GMV in 6mo",
    desc: "Custom theme, checkout optimisation and a private CRM that turned cold buyers into repeat fans.",
    accent: "from-amber-500/30 to-rose-500/10",
    image: "/src/assets/work-ecom.jpg",
  },
  {
    title: "FleetPilot",
    tag: "IoT + React",
    metric: "1,200 vehicles tracked",
    desc: "Live GPS, fuel analytics and driver scoring for a logistics player covering five Indian states.",
    accent: "from-lime-500/30 to-emerald-500/10",
    image: "/src/assets/work-ai.jpg",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ankit Sharma",
    role: "CTO, ShopEase",
    quote:
      "BuildNest helped us scale our online store by 300% in 6 months. They felt like an in-house team — sharp, calm, and ridiculously fast.",
    photo: "/src/assets/person-1.jpg",
  },
  {
    name: "Riya Mehta",
    role: "Founder, EcoCart",
    quote:
      "We came with a messy Figma and walked away with a product. Zero upfront, zero drama, and a team that actually answers WhatsApp on Sundays.",
    photo: "/src/assets/person-2.jpg",
  },
  {
    name: "Vikram Iyer",
    role: "COO, FleetPilot",
    quote:
      "The recruitment AI alone paid for the project in two months. They genuinely care about ROI, not just shipping a pretty dashboard.",
    photo: "/src/assets/person-3.jpg",
  },
];

export const TRUSTED_LOGOS = ["Figma", "Google", "Amazon", "Razorpay", "Stripe", "Notion"];

export const TECH_STACK = [
  "React", "Next.js", "Flutter", "Node.js", "Python", "Go", "PostgreSQL", "AWS", "Docker", "Kubernetes", "GPT-4", "TypeScript",
];
