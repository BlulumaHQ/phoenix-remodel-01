import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import landscaping from "@/assets/landscaping.jpg";

const Landscaping = () => (
  <ServicePageTemplate
    title="Commercial Landscape Design"
    subtitle="Landscaping Services"
    heroImage={landscaping}
    description={[
      "Phoenix Remodel provides comprehensive commercial and residential landscaping services throughout the Phoenix metro area. Our experienced team creates beautiful, functional outdoor spaces that enhance your property's curb appeal and value.",
      "From concrete block and retaining walls to complete exterior transformations, we handle every aspect of your landscaping project. We understand the unique Arizona desert climate and design landscapes that thrive in our environment while maintaining a polished, professional appearance.",
      "Whether you need a complete landscape redesign or targeted improvements, our team delivers high-quality results on time and within budget.",
    ]}
    features={[
      "Commercial Landscaping",
      "Residential Landscaping",
      "Concrete Block Walls",
      "Retaining Walls",
      "Exterior Transformations",
      "Desert-Adapted Design",
    ]}
  />
);

export default Landscaping;
