import type { Metadata } from "next";
import PricingPageContent from "@/components/sections/PricingPageContent";

export const metadata: Metadata = {
  title: "Pricing — Julia Busigina Interior Design",
  description: "Transparent pricing for interior design, furnishing, styling and project management services in Dubai & Abu Dhabi.",
};

export default function PricePage() {
  return <PricingPageContent />;
}
