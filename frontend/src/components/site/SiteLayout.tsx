import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import FloatingScrollTracker from "./FloatingScrollTracker";

const SiteLayout = ({ children }: { children: ReactNode }) => (
 <div className="relative min-h-screen bg-background" suppressHydrationWarning>
  <Navigation />
  <FloatingScrollTracker />
  <div className="relative w-full">{children}</div>
  <Footer />
 </div>
);

export default SiteLayout;
