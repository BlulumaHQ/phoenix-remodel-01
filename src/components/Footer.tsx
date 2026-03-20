import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Contact", path: "/contact" },
];

const serviceLinks = [
  { label: "Commercial Remodels", path: "/commercial-remodel" },
  { label: "Landscape Design", path: "/commercial-and-residential-landscaping" },
  { label: "Painting", path: "/painting" },
  { label: "New Construction", path: "/new-construction" },
  { label: "Fencing", path: "/commercial-fencing" },
  { label: "Insulation", path: "/insulation" },
];

const areasServed = [
  "Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler", "Gilbert",
  "Glendale", "Peoria", "Surprise", "Avondale", "Goodyear", "Buckeye",
  "Anthem", "Cave Creek", "Paradise Valley", "Fountain Hills",
  "Tucson", "Flagstaff", "Prescott", "Lake Havasu City",
];

export const Footer = () => {
  const handleClick = () => window.scrollTo(0, 0);

  return (
    <footer className="bg-surface-dark text-surface-dark-foreground">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_0.5fr_1fr_1fr_1.2fr] gap-10 lg:gap-6">
          {/* Column 1: Logo & Description */}
          <div>
            <Link to="/" onClick={handleClick} className="inline-block mb-5">
              <span className="font-heading text-xl font-bold text-primary-foreground">Phoenix Remodel</span>
            </Link>
            <p className="text-sm leading-relaxed opacity-70 max-w-xs">
              Arizona's leading commercial construction company. Fully bonded, licensed and insured with over 40 years of experience.
            </p>
          </div>

          {/* Column 2: Spacer — intentionally empty */}
          <div className="hidden lg:block" />

          {/* Column 3: Navigation */}
          <div>
            <h4 className="font-body text-sm font-bold uppercase tracking-wider mb-5 text-primary">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={handleClick}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="font-body text-sm font-bold uppercase tracking-wider mb-5 text-primary">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={handleClick}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="font-body text-sm font-bold uppercase tracking-wider mb-5 text-primary">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:6029752870" className="flex items-start gap-3 text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" /> (602) 975-2870
                </a>
              </li>
              <li>
                <a href="mailto:sales@phoenixremodel.net" className="flex items-start gap-3 text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" /> sales@phoenixremodel.net
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm opacity-70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                11811 N Tatum Blvd Suite 3031<br />Phoenix, AZ 85028
              </li>
            </ul>
          </div>
        </div>

        {/* Areas Served */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <h4 className="font-body text-sm font-bold uppercase tracking-wider mb-4 text-primary">Areas We Serve</h4>
          <p className="text-xs opacity-50 leading-relaxed max-w-none">
            {areasServed.join(" · ")}
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide px-5 md:px-8 py-5">
          <p className="text-xs opacity-50 text-center">
            © {new Date().getFullYear()} Phoenix Remodel. All rights reserved. | Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Bluluma
            </a>{" "}
            | Powered by{" "}
            <a href="https://swiftlift.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              SwiftLift
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
