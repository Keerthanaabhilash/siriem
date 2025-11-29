import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Gauge, Building2 } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Zap,
      badge: "Popular",
      title: "AC Charging Station",
      power: "7-22 kW",
      description: "Perfect for residential, workplace, and commercial parking applications with smart connectivity.",
      features: ["RFID Access", "Mobile App", "Load Management", "OCPP 1.6/2.0"],
    },
    {
      icon: Gauge,
      badge: "Fast",
      title: "DC Fast Charger",
      power: "50-350 kW",
      description: "Ultra-fast charging for highways, retail, and high-traffic locations with dual cable configuration.",
      features: ["CCS & CHAdeMO", "Dynamic Power", "Payment Terminal", "4G/WiFi"],
    },
    {
      icon: Building2,
      badge: "Enterprise",
      title: "Fleet Solutions",
      power: "Custom",
      description: "Comprehensive charging infrastructure for commercial fleets with centralized management.",
      features: ["Fleet Dashboard", "Scheduling", "Energy Reports", "API Integration"],
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive range of EV charging solutions for every application
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-card rounded-3xl overflow-hidden hover-lift border border-border"
              >
                {/* Card Header */}
                <div className="relative bg-gradient-primary p-8">
                  <Badge className="absolute top-4 right-4 bg-background/20 backdrop-blur-sm text-white border-0">
                    {product.badge}
                  </Badge>
                  
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                    <div className="text-3xl font-bold opacity-90">{product.power}</div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group/btn">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
