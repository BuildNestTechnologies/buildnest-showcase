import type { Metadata } from "next";
import PortfolioExperience from "@/components/site/PortfolioExperience";

export const metadata: Metadata = {
 title: "Our Work & Portfolio | BuildNest Technologies",
 description: "Explore BuildNest Technologies' portfolio of custom software, AI tools, mobile apps, enterprise systems, and high-performance websites for Bhiwandi and Mumbai businesses.",
};

export default function Portfolio() {
 return <PortfolioExperience />;
}
