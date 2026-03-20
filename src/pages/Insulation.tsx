import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import insulation from "@/assets/insulation.jpg";

const Insulation = () => (
  <ServicePageTemplate
    title="Energy Efficient Foam Insulation"
    subtitle="Insulation Services"
    heroImage={insulation}
    description={[
      "Update your building with the latest and greatest the insulation industry has to offer. Highest possible energy efficiency ratings and fire resistance. Very quick installation time will keep your business up and running.",
      "Spray Foam insulation typically pays for itself in energy savings! Our insulation division provides professional commercial insulation services using the most advanced materials and techniques available.",
      "Whether you're constructing a new building or upgrading an existing one, our spray foam insulation solutions deliver superior thermal performance, air sealing, and moisture control for your commercial property.",
    ]}
    features={[
      "Spray Foam Insulation",
      "Highest Energy Efficiency Ratings",
      "Fire Resistant Materials",
      "Quick Installation",
      "New Construction Insulation",
      "Retrofit Insulation",
    ]}
  />
);

export default Insulation;
