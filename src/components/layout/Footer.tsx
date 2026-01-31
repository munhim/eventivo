import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              Élégance<span className="text-gold">Events</span>
            </h3>
            <p className="text-ivory/70 mb-6">
              Creating unforgettable moments with elegance and style. We plan, we decorate, you celebrate.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Portfolio", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-ivory/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {["Wedding Planning", "Birthday Parties", "Engagement Events", "Bridal Showers", "Anniversary Celebrations"].map(
                (service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-ivory/70 hover:text-gold transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-ivory/70">
                  123 Elegance Street, Suite 456<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-ivory/70 hover:text-gold transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:hello@elegance-events.com"
                  className="text-ivory/70 hover:text-gold transition-colors"
                >
                  hello@elegance-events.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/10 mt-12 pt-8 text-center text-ivory/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Élégance Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
