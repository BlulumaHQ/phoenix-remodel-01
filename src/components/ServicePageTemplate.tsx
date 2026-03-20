import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Phone, CheckCircle2 } from "lucide-react";

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string[];
  features?: string[];
  ctaText?: string;
}

export const ServicePageTemplate = ({
  title,
  subtitle,
  heroImage,
  description,
  features = [],
  ctaText = "Get a Free Estimate",
}: ServicePageProps) => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-wide px-5 md:px-8">
          <ScrollReveal>
            <p className="font-body text-sm uppercase tracking-widest text-primary mb-3 font-semibold">{subtitle}</p>
            <h1 className="text-primary-foreground max-w-2xl text-balance">{title}</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding-lg">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-16">
            <div>
              {description.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <p className="text-muted-foreground mb-6 max-w-none">{p}</p>
                </ScrollReveal>
              ))}

              {features.length > 0 && (
                <ScrollReveal delay={0.2}>
                  <div className="mt-10">
                    <h3 className="mb-6">What We Offer</h3>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-body">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Sidebar CTA */}
            <div>
              <ScrollReveal direction="right">
                <div className="bg-surface-warm rounded-lg p-8 sticky top-28">
                  <h4 className="mb-4">Ready to Start Your Project?</h4>
                  <p className="text-sm text-muted-foreground mb-6">
                    Call one of our construction experts to get it done right, on time and within budget.
                  </p>
                  <a href="tel:6029752870" className="flex items-center gap-2 text-lg font-bold font-body text-primary mb-6">
                    <Phone className="w-5 h-5" /> (602) 975-2870
                  </a>
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                    <Button variant="default" size="lg" className="w-full">{ctaText}</Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary section-padding">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2 className="text-primary-foreground mb-4 text-balance">See What We Can Do For You</h2>
            <p className="text-primary-foreground/80 mb-8 mx-auto">
              We're happy to provide you with a no obligation free quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="heroOutline" size="lg">Get a Free Consultation</Button>
              </Link>
              <a href="tel:6029752870">
                <Button variant="heroOutline" size="lg">
                  <Phone className="w-4 h-4" /> Call (602) 975-2870
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};
