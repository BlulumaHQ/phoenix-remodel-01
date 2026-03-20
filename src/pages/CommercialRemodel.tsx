import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import commercialRemodel from "@/assets/commercial-remodel.jpg";

const CommercialRemodel = () => (
  <ServicePageTemplate
    title="Commercial Remodels"
    subtitle="Full-Service Remodeling"
    heroImage={commercialRemodel}
    description={[
      "Phoenix Remodel is a highly reputable Arizona General Contractor and a leader in delivering an array of Design Build and Remodeling Services. We work closely with our customers through the Design Build Process to ensure a high level of success & satisfaction with the final outcome.",
      "With over 40 years construction and remodeling experience, Phoenix Remodeling Contractors is by far a leader in Arizona and has been completing building, renovation and remodeling projects for satisfied customers in the Phoenix Metro Area on time and on budget.",
      "Our company believes in developing a long lasting relationship with our clients by gaining their trust through exceeding their expectations by delivering high quality work at an affordable price. Phoenix Remodel offers its clients Peace of Mind by providing creative quality designs, plans and permits, and material selections all under one roof.",
    ]}
    features={[
      "Office Remodeling",
      "Commercial Remodeling",
      "Tenant Improvements",
      "Design Builds",
      "Commercial Bathroom Remodeling",
      "Turn-Key Operations",
      "Painting and Drywall",
      "Commercial Flooring",
      "Plumbing and Electrical",
      "Storefront Windows",
      "Commercial Doors",
      "Building Access Control",
    ]}
  />
);

export default CommercialRemodel;
