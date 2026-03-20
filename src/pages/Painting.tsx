import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import painting from "@/assets/painting.jpg";

const Painting = () => (
  <ServicePageTemplate
    title="Commercial Painting"
    subtitle="Painting Services"
    heroImage={painting}
    description={[
      "Phoenix Remodel's painting division delivers professional commercial painting services for businesses across the Phoenix metro area. Our skilled painters provide interior and exterior painting, drywall repair, and professional finishing that transforms your commercial space.",
      "We use high-quality materials and proven techniques to ensure long-lasting, beautiful results. Whether you need a fresh coat on an office building, a complete color change for a retail space, or specialty finishes, our team delivers exceptional craftsmanship.",
      "We work efficiently to minimize disruption to your business operations while maintaining the highest standards of quality and safety.",
    ]}
    features={[
      "Interior Commercial Painting",
      "Exterior Commercial Painting",
      "Drywall Repair",
      "Professional Finishing",
      "Color Consultation",
      "Specialty Coatings",
    ]}
  />
);

export default Painting;
