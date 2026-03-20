import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { label: "Commercial Remodels", path: "/commercial-remodel" },
  { label: "Landscape Design", path: "/commercial-and-residential-landscaping" },
  { label: "Painting", path: "/painting" },
  { label: "New Construction", path: "/new-construction" },
  { label: "Fencing", path: "/commercial-fencing" },
  { label: "Insulation", path: "/insulation" },
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Contact", path: "/contact" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
      <div className="container-wide flex items-center justify-between h-20 px-5 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => window.scrollTo(0, 0)}>
          <img
            src="https://phoenixremodel.net/images/Asset-2Phx-Remodel-logo.png"
            alt="Phoenix Remodel"
            className="h-[65px] w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={`px-4 py-2 text-sm font-semibold font-body transition-colors rounded-md ${isActive("/") ? "text-primary" : "text-foreground hover:text-primary"}`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="px-4 py-2 text-sm font-semibold font-body transition-colors rounded-md text-foreground hover:text-primary flex items-center gap-1">
              Services <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-background rounded-lg shadow-xl border border-border/50 py-2 min-w-[220px]">
                {services.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className={`block px-4 py-2.5 text-sm font-body transition-colors ${isActive(s.path) ? "text-primary bg-muted" : "text-foreground hover:text-primary hover:bg-muted"}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/about-us"
            className={`px-4 py-2 text-sm font-semibold font-body transition-colors rounded-md ${isActive("/about-us") ? "text-primary" : "text-foreground hover:text-primary"}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`px-4 py-2 text-sm font-semibold font-body transition-colors rounded-md ${isActive("/contact") ? "text-primary" : "text-foreground hover:text-primary"}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:6029752870" className="flex items-center gap-2 text-sm font-semibold font-body text-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" /> (602) 975-2870
          </a>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="default" size="default">Free Estimate</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border/50 shadow-lg">
          <div className="px-5 py-4 space-y-1">
            <Link
              to="/"
              className="block py-3 text-sm font-semibold font-body text-foreground"
              onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
            >
              Home
            </Link>
            <button
              className="flex items-center justify-between w-full py-3 text-sm font-semibold font-body text-foreground"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                {services.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="block py-2.5 text-sm font-body text-muted-foreground hover:text-primary"
                    onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
            <Link
              to="/about-us"
              className="block py-3 text-sm font-semibold font-body text-foreground"
              onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block py-3 text-sm font-semibold font-body text-foreground"
              onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
            >
              Contact
            </Link>
            <div className="pt-4 space-y-3">
              <a href="tel:6029752870" className="flex items-center gap-2 text-sm font-semibold font-body text-primary">
                <Phone className="w-4 h-4" /> (602) 975-2870
              </a>
              <Link to="/contact" onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}>
                <Button variant="default" size="lg" className="w-full">Free Estimate</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
