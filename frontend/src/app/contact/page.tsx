import type { Metadata } from "next";
import ClientContact from "./ClientContact";

export const metadata: Metadata = {
  title: "Contact Us | BuildNest Technologies",
  description: "Get in touch with BuildNest Technologies in Bhiwandi and Mumbai. Call us or send a message for your next software or website project.",
};

export default function Contact() {
  return <ClientContact />;
}
