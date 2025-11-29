import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Our Offerings",
      children: [
        { name: "Solutions", path: "/solutions" },
        { name: "Products", path: "/products" },
        { name: "Services", path: "/services" },
      ],
    },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Zap className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-glow-pulse" />
            </div>
            <span className="text-2xl font-bold text-gradient">
              SIRI Electromotive
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setIsOfferingsOpen(true)}
                  onMouseLeave={() => setIsOfferingsOpen(false)}
                >
                  <button
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary flex items-center space-x-1",
                      location.pathname.startsWith("/solutions") ||
                        location.pathname.startsWith("/products") ||
                        location.pathname.startsWith("/services")
                        ? "text-primary"
                        : "text-foreground/80"
                    )}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {/* Dropdown */}
                  {isOfferingsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-40 bg-background border border-border rounded-lg shadow-lg p-2 flex flex-col space-y-1 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="text-sm text-foreground/80 hover:text-primary px-3 py-2 rounded-md transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative group",
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground/80"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                      location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" size="lg" className="glow">
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <div className="container-custom py-6 space-y-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} className="space-y-1">
                  <div className="text-lg font-medium">{link.name}</div>
                  <div className="pl-4 flex flex-col space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="text-foreground/80 hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block py-2 text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
            <Button variant="default" size="lg" className="w-full glow">
              Request Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
