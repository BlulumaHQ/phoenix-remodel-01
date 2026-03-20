import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import newConstruction from "@/assets/new-construction.jpg";

const NewConstruction = () => (
  <ServicePageTemplate
    title="New Construction"
    subtitle="Ground-Up Building"
    heroImage={newConstruction}
    description={[
      "Phoenix Remodel handles new commercial construction projects from the ground up. With KB2 licensing for up to 6 million dollar build outs, we have the capacity and expertise to manage projects of significant scale and complexity.",
      "Our new construction services encompass every phase of the building process — from initial design and permitting through final completion. We work with businesses, developers, and property owners to bring their commercial construction visions to life.",
      "As a fully bonded, licensed and insured general contractor, our clients can turn to our company with total peace of mind, knowing they're working with one of the region's premier commercial construction contractors.",
    ]}
    features={[
      "Office Buildings",
      "Strip Malls",
      "Restaurants",
      "Hotel Construction",
      "Retail Spaces",
      "Commercial Excavation",
      "Roofing",
      "HVAC Installation",
    ]}
  />
);

export default NewConstruction;
