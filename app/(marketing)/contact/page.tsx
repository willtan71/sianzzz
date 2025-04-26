import { Background } from "@/components/background";
import { Metadata } from "next";
import { ContactForm } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us - Web, AI & Automation Solutions",
  description:
    "Everything AI is a platform that provides a wide range of AI tools and services to help you stay on top of your business. Generate images, text and everything else that you need to get your business off the ground.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0 px-4 md:px-20 bg-gray-50 dark:bg-black">
      <div className="w-full min-h-screen relative overflow-hidden">
        <Background />
        <ContactForm />
      </div>
    </div>
  );
}
