import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import fencing from "@/assets/fencing.jpg";

const Fencing = () => (
  <ServicePageTemplate
    title="Top Quality Commercial Fencing"
    subtitle="Fencing Services"
    heroImage={fencing}
    description={[
      "Replace your old fencing with commercial fencing from Phoenix Remodel. To Spec custom iron, steel and aluminum work available. Chain link, block walls, lifetime vinyl fencing and more are all available from our fencing division.",
      "Our fencing team delivers professional installation with attention to detail and code compliance. Whether you need perimeter security for a commercial property, decorative fencing for a retail space, or durable chain link for an industrial site, we have the expertise and materials to get the job done right.",
      "Give us a call and schedule a FREE Estimate today.",
    ]}
    features={[
      "Custom Iron Work",
      "Steel Fencing",
      "Aluminum Fencing",
      "Chain Link Fencing",
      "Block Walls",
      "Lifetime Vinyl Fencing",
    ]}
  />
);

export default Fencing;
