import { motion } from "framer-motion";
import { Zap, Shield, Cpu, BarChart3, Users, CloudCog } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast Charging",
      description: "Ultra-fast DC charging up to 350kW for minimal wait times and maximum convenience.",
    },
    {
      icon: Shield,
      title: "Smart Safety",
      description: "Advanced protection systems with real-time monitoring and automated safety protocols.",
    },
    {
      icon: Cpu,
      title: "IoT Enabled",
      description: "Cloud-connected infrastructure with remote diagnostics and OTA firmware updates.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into usage patterns, revenue, and station performance.",
    },
    {
      icon: Users,
      title: "Fleet Management",
      description: "Dedicated solutions for commercial fleets with centralized billing and scheduling.",
    },
    {
      icon: CloudCog,
      title: "Grid Integration",
      description: "Smart grid compatibility with load balancing and renewable energy optimization.",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Advanced <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology designed for reliability, efficiency, and scalability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl p-8 hover-lift border border-border hover:border-primary/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
