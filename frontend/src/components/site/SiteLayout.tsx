import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingScrollTracker from "./FloatingScrollTracker";
import CursorDot from "./CursorDot";
import { SmoothScroll } from "./PremiumMotion";

const SiteLayout = ({ children }: { children: ReactNode }) => (
 <div className="premium-shell relative min-h-screen bg-background text-foreground" suppressHydrationWarning>
  <SmoothScroll />
  <Navbar />
  <CursorDot />
  <FloatingScrollTracker />
  <div className="relative pt-20 md:pt-24">{children}</div>
  <Footer />
 </div>
);

export default SiteLayout;
