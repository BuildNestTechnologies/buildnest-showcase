import type { Metadata } from "next";
import BlogExperience from "@/components/site/BlogExperience";

export const metadata: Metadata = {
 title: "Resources & Insights | BuildNest Technologies",
 description: "Expert guides on website development, SEO, e-commerce, React, app development, and digital growth for businesses in Bhiwandi and Mumbai.",
};

export default function BlogIndex() {
 return <BlogExperience />;
}
