import { motion } from "framer-motion";
import { Zap, Monitor, Settings, Users } from "lucide-react";

const Offerings = () => {
  const offerings = [
    {
      icon: Zap,
      title: "AC & DC Fast Chargers",
      description:
        "We provide a range of chargers both AC and DC Fast Chargers suitable for all kinds of electric vehicles.",
    },
    {
      icon: Monitor,
      title: "Charging Management System (CMS)",
      description:
        "Our Charging Management System (CMS) provides seamless integration with ours as well as chargers from other manufacturers.",
    },
    {
      icon: Settings,
      title: "Turnkey Services",
      description:
        "We provide turnkey services to examine feasibility, install, commission and maintain the charging solutions that we create for you.",
    },
    {
      icon: Users,
      title: "Consulting Services",
      description:
        "Our consulting services encompass OEM consulting on Onboard Chargers, Battery System design, etc. and Strategic Charging Advisory.",
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
            Our <span className="text-gradient">Offerings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for your electric vehicle charging needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-6 hover-lift border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="text-lg font-bold mb-3">{offering.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {offering.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
