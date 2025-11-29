import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, Network, DollarSign } from "lucide-react";

const Differentiators = () => {
  const differentiators = [
    {
      icon: Lightbulb,
      title: "Pioneering Innovation",
      description:
        "We are at the forefront of smart charging technology, constantly pushing the boundaries with proprietary AI algorithms and industry-leading advancements. We are not keeping up; we are leading the way.",
    },
    {
      icon: TrendingUp,
      title: "Simplifying the Transition",
      description:
        "We understand that entering the business of charging can be daunting. That is why we offer expert guidance and implement custom built solutions, making the journey towards electrification smooth and efficient.",
    },
    {
      icon: Network,
      title: "Intelligent Deployment and Scaling",
      description:
        "We not only install chargers; we design and implement the entire strategic charging infrastructure that can adapt and grow as your needs evolve. We help you deploy rapidly and scale intelligently, ensuring your investment keeps pace with the electric future.",
    },
    {
      icon: DollarSign,
      title: "Maximizing Value",
      description:
        "We are partners in maximizing the value of your energy assets. Our solutions extend the life of your batteries, optimize energy usage, and minimize downtime, ensuring you get the most out of every watt.",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We Make the <span className="text-gradient">Difference</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand that every company's journey towards electrification is unique. 
            Therefore, we tailor our solutions to meet the specific needs of each industry vertical.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl p-8 hover-lift border border-border"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
