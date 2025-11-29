import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SIRI Electromotive</span>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              Manufacturer of Electric Vehicle Charging Stations, Battery Chargers, 
              and Customized Power Electronics Solutions since 2017.
            </p>

            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/siri-electromotive/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Products", "Solutions", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2">
              {[
                "EV AC Chargers",
                "EV DC Fast Chargers",
                "Battery Chargers",
                "Charge Controllers",
                "Customized Power Electronics",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  #365, 1st Floor, 7th Main, 1st Cross, MICO Layout,
                  Hongasandra, Bengaluru – 560068, Karnataka, India.
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>+91 97410 33668</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>info@siriem.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/10 mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} SIRI Electromotive Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
