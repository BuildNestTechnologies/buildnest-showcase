import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingScrollTracker from "./FloatingScrollTracker";

const SiteLayout = ({ children }: { children: ReactNode }) => (
 <div className="relative min-h-screen bg-background bg-noise overflow-x-hidden w-full" suppressHydrationWarning>
  <Navbar />
  <FloatingScrollTracker />
  <div className="relative pt-16 md:pt-20 w-full overflow-x-hidden">{children}</div>
  <Footer />
 </div>
);

export default SiteLayout;
