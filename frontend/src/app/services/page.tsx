import type { Metadata } from "next";
import ServicesExperience from "@/components/site/ServicesExperience";

export const metadata: Metadata = {
 title: "Web Development Services in Bhiwandi & Mumbai | BuildNest Technologies",
 description: "Web development, mobile app, custom software, e-commerce, UI/UX, SEO, and maintenance services for businesses in Bhiwandi and Mumbai.",
};

export default function Services() {
 return <ServicesExperience />;
}
