import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received",
      description: "Thank you for your inquiry. We'll get back to you shortly!",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-dark section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <p className="font-body text-sm uppercase tracking-widest text-primary mb-3 font-semibold">Contact Us</p>
            <h1 className="text-surface-dark-foreground max-w-2xl text-balance">Get in Touch With Our Team</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding-lg">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16">
            {/* Form */}
            <ScrollReveal direction="left">
              <div>
                <h2 className="mb-4">Request a Free Estimate</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and one of our construction experts will get back to you promptly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-body font-semibold mb-2">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-body font-semibold mb-2">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                        placeholder="(602) 000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-body font-semibold mb-2">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-body font-semibold mb-2">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                    >
                      <option value="">Select a service</option>
                      <option value="commercial-remodel">Commercial Remodels</option>
                      <option value="landscaping">Commercial Landscape Design</option>
                      <option value="painting">Painting</option>
                      <option value="new-construction">New Construction</option>
                      <option value="fencing">Fencing</option>
                      <option value="insulation">Insulation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-body font-semibold mb-2">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-y"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" variant="default" size="lg">Get a Free Consultation</Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="right">
              <div className="space-y-8">
                <div className="bg-surface-warm rounded-lg p-8">
                  <h3 className="mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <a href="tel:6029752870" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-body font-semibold">Phone</p>
                        <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">(602) 975-2870</p>
                      </div>
                    </a>
                    <a href="mailto:sales@phoenixremodel.net" className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-body font-semibold">Email</p>
                        <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">sales@phoenixremodel.net</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-body font-semibold">Address</p>
                        <p className="text-sm text-muted-foreground">11811 N Tatum Blvd Suite 3031<br />Phoenix, AZ 85028</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-lg overflow-hidden shadow-md">
                  <iframe
                    title="Phoenix Remodel Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.8!2d-111.975!3d33.577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzM3LjIiTiAxMTHCsDU4JzMwLjAiVw!5e0!3m2!1sen!2sus!4v1000000000000"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
