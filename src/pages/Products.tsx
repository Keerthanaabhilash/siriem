import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Zap, Gauge, Building2, Home, Factory, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const productCategories = [
    {
      icon: Zap,
      title: "AC Chargers",
      subtitle: "7-22 kW",
      description: "Ideal for residential, workplace, and destination charging",
      models: [
        { name: "Home Wall Box", power: "7.4 kW", price: "From $799" },
        { name: "Smart AC Charger", power: "11 kW", price: "From $1,299" },
        { name: "Commercial AC", power: "22 kW", price: "From $2,499" },
      ],
    },
    {
      icon: Gauge,
      title: "DC Fast Chargers",
      subtitle: "50-350 kW",
      description: "High-power charging for commercial and highway applications",
      models: [
        { name: "DC Fast 50", power: "50 kW", price: "From $15,000" },
        { name: "DC Ultra 150", power: "150 kW", price: "From $45,000" },
        { name: "DC Hyper 350", power: "350 kW", price: "From $95,000" },
      ],
    },
    {
      icon: Building2,
      title: "Fleet Solutions",
      subtitle: "Scalable",
      description: "Complete charging infrastructure for commercial fleets",
      models: [
        { name: "Fleet Starter", power: "Up to 10 vehicles", price: "Custom" },
        { name: "Fleet Pro", power: "Up to 50 vehicles", price: "Custom" },
        { name: "Fleet Enterprise", power: "Unlimited", price: "Custom" },
      ],
    },
  ];

  const applications = [
    { icon: Home, title: "Residential", description: "Home charging solutions" },
    { icon: Building2, title: "Commercial", description: "Office & retail charging" },
    { icon: Factory, title: "Industrial", description: "Manufacturing & warehouses" },
    { icon: Truck, title: "Fleet", description: "Commercial vehicle fleets" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4">Complete Product Range</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              EV Charging <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From residential wall boxes to ultra-fast DC chargers, we offer comprehensive 
              charging solutions for every application
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding">
        <div className="container-custom space-y-24">
          {productCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{category.title}</h2>
                  <p className="text-lg text-primary font-semibold mb-2">{category.subtitle}</p>
                  <p className="text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {category.models.map((model, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-card rounded-2xl p-8 hover-lift border border-border"
                    >
                      <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                      <p className="text-3xl font-bold text-primary mb-4">{model.power}</p>
                      <p className="text-muted-foreground mb-6">{model.price}</p>
                      <Button className="w-full" variant="outline">View Details</Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Applications</h2>
            <p className="text-xl text-muted-foreground">Solutions for every charging scenario</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 text-center hover-lift border border-border"
                >
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{app.title}</h3>
                  <p className="text-sm text-muted-foreground">{app.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
