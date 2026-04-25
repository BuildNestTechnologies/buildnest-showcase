import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen bg-background">
    <Navbar />
    <div className="pt-16 md:pt-20">{children}</div>
    <Footer />
  </div>
);

export default SiteLayout;
