import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Phone, Shield, Clock, Award, CheckCircle2 } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img src={aboutTeam} alt="Phoenix Remodel team" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-wide px-5 md:px-8">
          <ScrollReveal>
            <p className="font-body text-sm uppercase tracking-widest text-primary mb-3 font-semibold">About Phoenix Remodel</p>
            <h1 className="text-primary-foreground max-w-2xl text-balance">Design Build Contractors of Arizona</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding-lg">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <ScrollReveal>
                <h2 className="mb-6 text-balance">About Phoenix Remodel</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <p className="text-muted-foreground mb-6 max-w-none">
                  Phoenix Remodel is a highly reputable Arizona General Contractor and a leader in delivering an array of Design Build and Remodeling Services. We work closely with our customers through the Design Build Process to ensure a high level of success & satisfaction with the final outcome.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.12}>
                <p className="text-muted-foreground mb-6 max-w-none">
                  Phoenix Remodeling Commercial Contractors has been completing construction jobs in Phoenix and the surrounding Metro Region with over 40 years construction and remodeling experience. We are a leading Arizona Construction Company that is fully bonded, licensed and insured for commercial building and construction; with KB2 licensing for up to 6 million dollar build outs and remodeling projects. We are also proud to say that we're locally owned & operated.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.16}>
                <p className="text-muted-foreground mb-8 max-w-none">
                  Our company believes in developing a long lasting relationship with our clients by gaining their trust through exceeding their expectations by delivering high quality work at an affordable price. Phoenix Remodel offers its clients Peace of Mind by providing creative quality designs, plans and permits, and material selections all under one roof.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right">
              <div className="bg-surface-warm rounded-lg p-10">
                <h3 className="mb-8">Why Choose Us</h3>
                <div className="space-y-6">
                  {[
                    { icon: Clock, label: "Over 40 Years Experience", desc: "Decades of proven commercial construction expertise in Arizona." },
                    { icon: Shield, label: "Fully Bonded, Licensed & Insured", desc: "Complete peace of mind for every project we undertake." },
                    { icon: Award, label: "KB2 Licensed", desc: "Licensed for up to $6 million build outs and remodeling projects." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-base font-heading mb-1">{item.label}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-surface-warm">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-balance">Full Range of Commercial Services</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-center text-muted-foreground mx-auto mb-10 max-w-3xl">
              We can help with everything, from commercial new builds to painting and remodels. Our Contractors are fully bonded, licensed and insured. The team here at Phoenix Remodel Services has years of experience and it shows in our work!
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                "Design Build",
                "Hotel Renovation",
                "Restaurant Remodeling",
                "Tenant Improvements",
                "Strip Malls",
                "Office Buildings",
                "Custom Homes",
                "Home Remodeling",
                "Commercial Painting",
              ].map((service) => (
                <div key={service} className="flex items-center gap-3 text-sm font-body">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2 className="text-primary-foreground mb-4 text-balance">Ready to Start Your Project?</h2>
            <p className="text-primary-foreground/80 mb-8 mx-auto max-w-xl">
              We invite you to call us today to discuss your project. We're happy to provide you with a no obligation free quote.
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

export default About;
