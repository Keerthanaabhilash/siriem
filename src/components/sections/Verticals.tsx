import { motion } from "framer-motion";
import { Car, Truck, Building2, Battery } from "lucide-react";

const Verticals = () => {
  const verticals = [
    {
      icon: Car,
      title: "EV Manufacturers",
      description: "Pushing the boundaries of performance",
    },
    {
      icon: Truck,
      title: "Fleet Operators",
      description: "Seeking operational excellence",
    },
    {
      icon: Building2,
      title: "Properties",
      description: "Aiming for energy independence",
    },
    {
      icon: Battery,
      title: "Energy Storage Providers",
      description: "Maximizing battery value",
    },
  ];

  return (
    <section className="section-padding bg-gradient-hero">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industry <span className="text-gradient">Verticals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Whether you are an EV manufacturer pushing the boundaries of performance, a forward-thinking 
            fleet operator seeking operational excellence, a sustainability-focused property aiming for 
            energy independence, or an energy storage provider maximizing the value of your batteries, 
            we have the expertise and technology to help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((vertical, index) => {
            const Icon = vertical.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 hover-lift border border-border text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-lg font-bold mb-2">{vertical.title}</h3>
                <p className="text-sm text-muted-foreground">{vertical.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
