export const NAV_LINKS = [
 { to: "/", label: "Home" },
 { to: "/services", label: "Services" },
 { to: "/software", label: "Software" },
 { to: "/pricing", label: "Pricing" },
 { to: "/portfolio", label: "Portfolio" },
 { to: "/about", label: "About" },
 { to: "/contact", label: "Contact" },
];

export const SERVICES = [
 {
  title: "Website that works",
  icon: "Globe",
  desc: "Get a professional website that your customers can easily find and use.",
 },
 {
  title: "Mobile app for your business",
  icon: "Smartphone",
  desc: "Reach more people with an app that works on iPhones and Android.",
 },
 {
  title: "Custom software made simple",
  icon: "Settings",
  desc: "We build software that automates your daily tasks – no coding knowledge needed.",
 },
 {
  title: "We take care of everything",
  icon: "LifeBuoy",
  desc: "Hosting, updates, support – you focus on your business.",
 },
];

export const HOW_IT_WORKS = [
 {
  step: "01",
  title: "Tell us your idea",
  desc: "We start with a simple phone or email conversation to understand your business.",
 },
 {
  step: "02",
  title: "We design & build",
  desc: "We get to work. You see previews regularly so you know exactly what you're getting.",
 },
 {
  step: "03",
  title: "Launch & grow",
  desc: "We launch your project, train your team, and stay available for support.",
 },
];

export const PRICING = [
 {
  name: "Starter",
  price: "₹7,999",
  tagline: "Good for small businesses / just getting online.",
  features: [
   "Up to 5 pages (Home, About, Services, Contact, Blog)",
   "We make changes for you (no confusing dashboard)",
   "Mobile friendly",
   "No online store",
   "1 year free hosting & support",
  ],
  popular: false,
 },
 {
  name: "Business",
  price: "₹15,999",
  tagline: "Best for service businesses wanting more control.",
  features: [
   "Unlimited pages",
   "Easy admin panel (you can edit text/images yourself)",
   "Contact forms & Google Maps",
   "No payment system",
   "1 year free hosting & support",
  ],
  popular: true,
 },
 {
  name: "E-Commerce",
  price: "₹23,999",
  tagline: "For selling products online.",
  features: [
   "Full online store",
   "Easy product upload",
   "Payment gateway (Razorpay / PhonePe)",
   "Order & inventory management",
   "1 year free hosting & support",
  ],
  popular: false,
 },
 {
  name: "Enterprise",
  price: "Custom",
  tagline: "For large or unique needs.",
  features: [
   "Custom software & internal tools",
   "AI integration (chatbots, automations)",
   "Dedicated development team",
   "High-scale server architecture",
   "24/7 priority support",
  ],
  popular: false,
 },
];

export const TESTIMONIALS = [
 {
  quote: "They made my restaurant website – now I get 50+ orders online daily! Everything is smooth and my customers love it.",
  name: "Rajesh Sharma",
  role: "Restaurant Owner",
  image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=150&h=150",
 },
 {
  quote: "We needed a custom inventory system but had zero tech knowledge. BuildNest made it so simple to use. Waste is down 40%.",
  name: "Anita Desai",
  role: "Grocery Store Manager",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150",
 },
 {
  quote: "Professional, transparent, and they actually answer the phone. The mobile app they built transformed our delivery business.",
  name: "Vikram Singh",
  role: "Logistics Director",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
 },
];

export const PORTFOLIO = [
  {
    title: "Renaissance Preschool Website",
    category: "Modern Website",
    desc: "A modern, child-friendly website designed to showcase school programs, admissions, and activities with engaging visuals and smooth navigation. Built to create trust with parents while maintaining a playful yet professional feel.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    demoLink: "https://www.renaissanceschools.in/",
    image: "/projects/renaissance_logo.png",
  },
  {
    title: "ChainCred",
    category: "Blockchain Credentials",
    desc: "A decentralized platform for issuing and verifying tamper-proof academic credentials using blockchain technology. Ensures transparency, security, and easy verification for institutions and employers.",
    tech: ["Solidity", "opBNB", "React", "MongoDB"],
    demoLink: "https://chaincred-frontend.onrender.com/",
    videoLink: "https://youtu.be/yDQA6xOlVpQ",
    image: "/projects/chaincred.jpg",
  },
  {
    title: "LMS.PRO",
    category: "Learning Management",
    desc: "A comprehensive role-based Learning Management System that enables course creation, student tracking, and seamless content delivery for educators and institutions.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    videoLink: "https://drive.google.com/file/d/1qvPDDLiiIyelbemzLILsv4_5IpctHzu8/view",
    image: "/projects/lms.jpg",
  },
  {
    title: "DevNex UI",
    category: "Theme Playground",
    desc: "An interactive UI playground that allows users to experiment with themes, colors, fonts, and layouts in real time, helping designers and developers rapidly prototype UI ideas.",
    tech: ["DaisyUI", "React", "Theme Controller"],
    demoLink: "https://daizy-ui-team.vercel.app/",
    image: "/projects/devnex_ui.jpg",
  },
  {
    title: "Heart Disease Risk Classifier",
    category: "Machine Learning",
    desc: "A machine learning-powered medical application that predicts the likelihood of heart disease using clinical data, delivering high accuracy and assisting early diagnosis.",
    tech: ["Python", "XGBoost", "Scikit-learn", "Streamlit"],
    demoLink: "https://yashpatil045-heart-disease-classifier.streamlit.app/",
    image: "/projects/heart_disease.jpg",
  },
  {
    title: "CliniScan",
    category: "Medical Image AI",
    desc: "A deep learning system that analyzes chest X-rays to detect lung abnormalities using advanced models like EfficientNet and YOLOv8, assisting in faster and more accurate medical diagnosis.",
    tech: ["PyTorch", "EfficientNet", "YOLOv8", "Streamlit"],
    demoLink: "https://yashpatil045-cliniscan.streamlit.app/",
    githubLink: "https://lnkd.in/d9-SUmST",
    image: "/projects/cliniscan.jpg",
  },
  {
    title: "GateSmart",
    category: "GATE CS Learning",
    desc: "A full-stack AI-powered learning platform for GATE CS preparation, featuring an AI tutor, adaptive revision planning, and secure authentication for personalized learning experiences.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "LLaMA-3.3", "Random Forest"],
    demoLink: "https://gate-smart-five.vercel.app/",
    image: "/projects/gatesmart.jpg",
  },
  {
    title: "StudyGenie",
    category: "AI Study Coach",
    desc: "An intelligent study assistant that helps students plan schedules, resolve doubts using AI, generate quizzes automatically, and integrate with calendars for efficient learning.",
    tech: ["React", "Gemini API", "Firebase", "Node.js"],
    videoLink: "https://drive.google.com/file/d/1_uqKrzMfySO8i8ScGuIPSrG1CIl2XJJP/view",
    image: "/projects/studygenie.jpg",
  },
  {
    title: "LingualSense",
    category: "Multilingual Detection",
    desc: "A deep learning NLP system designed for real-time multilingual text detection, enabling accurate language identification across diverse inputs using GRU-based models.",
    tech: ["Python", "GRU", "NLP", "Flask", "Streamlit"],
    demoLink: "https://lingualsense7.streamlit.app/",
    image: "/projects/lingualsense.jpg",
  },
  {
    title: "Monday",
    category: "Personality Finder",
    desc: "An AI-powered conversational assistant that analyzes user responses to uncover personality traits, providing engaging and insightful results through natural interactions.",
    tech: ["AI", "NLP", "React"],
    demoLink: "https://monday-nxgz.onrender.com/",
    image: "/projects/monday.jpg",
  },
];

export const TEAM = [
 {
  name: "Arjun Mehta",
  role: "Founder & Lead Developer",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400",
 },
 {
  name: "Priya Sharma",
  role: "Head of Design",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400",
 },
 {
  name: "Rohan Patel",
  role: "Project Manager",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400",
 },
 {
  name: "Kavya Iyer",
  role: "Customer Success",
  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400",
 },
];
