import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Phone, Shield, Clock, Award, Building2, Paintbrush, Trees, HardHat, Fence, Thermometer } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import commercialRemodel from "@/assets/commercial-remodel.jpg";
import landscaping from "@/assets/landscaping.jpg";
import painting from "@/assets/painting.jpg";
import newConstruction from "@/assets/new-construction.jpg";
import fencing from "@/assets/fencing.jpg";
import insulation from "@/assets/insulation.jpg";

const services = [
  {
    title: "Commercial Remodels",
    description: "Office remodeling, tenant improvements, design builds, bathroom remodeling, flooring, plumbing and electrical.",
    image: commercialRemodel,
    path: "/commercial-remodel",
    icon: Building2,
  },
  {
    title: "Landscape Design",
    description: "Commercial and residential landscaping, concrete block and retaining walls, and complete exterior transformations.",
    image: landscaping,
    path: "/commercial-and-residential-landscaping",
    icon: Trees,
  },
  {
    title: "Commercial Painting",
    description: "Interior and exterior painting, drywall repair, and professional finishing for commercial properties.",
    image: painting,
    path: "/painting",
    icon: Paintbrush,
  },
  {
    title: "New Construction",
    description: "Ground-up commercial construction, office buildings, strip malls, restaurants, and custom builds.",
    image: newConstruction,
    path: "/new-construction",
    icon: HardHat,
  },
  {
    title: "Commercial Fencing",
    description: "Custom iron, steel and aluminum work. Chain link, block walls, lifetime vinyl fencing and more.",
    image: fencing,
    path: "/commercial-fencing",
    icon: Fence,
  },
  {
    title: "Spray Foam Insulation",
    description: "Energy efficient foam insulation with highest possible ratings and fire resistance. Quick installation.",
    image: insulation,
    path: "/insulation",
    icon: Thermometer,
  },
];

const trustSignals = [
  { icon: Clock, label: "40+ Years Experience" },
  { icon: Shield, label: "Fully Bonded, Licensed & Insured" },
  { icon: Award, label: "KB2 Licensed — Up to $6M Projects" },
  { icon: Building2, label: "Locally Owned & Operated" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroHome} alt="Phoenix commercial construction site" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-wide px-5 md:px-8">
          <ScrollReveal>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-4 font-semibold">
              Commercial Construction Contractors
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-primary-foreground max-w-3xl text-balance mb-6">
              Commercial Remodeling Contractors of Arizona
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-primary-foreground/80 text-lg max-w-xl mb-10 font-body">
              Over 40 years of construction and remodeling experience. Fully bonded, licensed and insured for commercial building and construction.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="hero" size="xl">Get a Free Consultation</Button>
              </Link>
              <a href="tel:6029752870">
                <Button variant="heroOutline" size="xl">
                  <Phone className="w-5 h-5" /> (602) 975-2870
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-surface-dark py-6">
        <div className="container-wide px-5 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex items-center gap-3">
                  <signal.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-body font-semibold text-surface-dark-foreground">{signal.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="section-padding-lg">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="font-body text-sm uppercase tracking-widest text-primary mb-3 font-semibold">Design Build Contractors</p>
              <h2 className="mb-6 text-balance">Commercial and Residential Contractors in Phoenix AZ</h2>
              <p className="text-muted-foreground mb-6 max-w-none">
                Phoenix Remodeling Commercial Contractors has been completing construction jobs in Phoenix and the surrounding Metro Region with over 40 years construction and remodeling experience. We are a leading Arizona Construction Company that is fully bonded, licensed and insured for commercial building and construction; with KB2 licensing for up to 6 million dollar build outs and remodeling projects.
              </p>
              <p className="text-muted-foreground mb-8 max-w-none">
                As a General Contractor we offer a full range of Custom Construction Services that include Design Build, Hotel Renovation, Restaurant Remodeling, Tenant Improvements, Strip Malls, Office Buildings along with Custom Homes, and Home Remodeling.
              </p>
              <Link to="/about-us" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="default" size="lg">Learn More About Us</Button>
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={commercialRemodel}
                  alt="Modern commercial office renovation"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary p-6">
                  <p className="text-primary-foreground font-body font-bold text-lg">We're proud to be locally owned & operated</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-surface-warm">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-body text-sm uppercase tracking-widest text-primary mb-3 font-semibold">Our Services</p>
              <h2 className="text-balance">For All Your Commercial Construction Needs</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.path} delay={i * 0.08}>
                <Link
                  to={service.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className="group block bg-background rounded-lg overflow-hidden shadow-md service-card-hover"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <service.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-heading">{service.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                    <span className="inline-block mt-4 text-sm font-body font-semibold text-primary">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <ScrollReveal>
            <p className="font-body text-sm uppercase tracking-widest text-primary mb-3 font-semibold">Service Area</p>
            <h2 className="mb-6 text-balance">Serving the Greater Phoenix Metro Area</h2>
            <p className="text-muted-foreground mx-auto mb-10 max-w-2xl">
              We service Phoenix, Anthem, Scottsdale, Cave Creek, Tempe, Glendale, Peoria, Avondale, Surprise, Paradise Valley, Fountain Hills, Gilbert, Mesa and Chandler areas.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground mx-auto max-w-3xl">
              We provide a fast friendly detailed estimate for any project and can do just about any size remodel, renovation or build out no matter how big or small — we will be your contractor of choice.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary section-padding">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2 className="text-primary-foreground mb-4 text-balance">See What We Can Do For You</h2>
            <p className="text-primary-foreground/80 mb-8 mx-auto max-w-xl">
              We're happy to provide you with a no obligation free quote. Call one of our construction experts to get it done right, on time and within budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="heroOutline" size="xl">Get a Free Consultation</Button>
              </Link>
              <a href="tel:6029752870">
                <Button variant="heroOutline" size="xl">
                  <Phone className="w-5 h-5" /> Call (602) 975-2870
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;
