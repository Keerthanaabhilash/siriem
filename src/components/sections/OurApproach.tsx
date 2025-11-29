import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

const OurApproach = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Wrench className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Approach</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            We craft tailor-made charging solutions for all sizes and complexities of EV charging 
            and battery storage systems. We become your trusted partner, providing ongoing maintenance 
            and support to ensure your charging infrastructure thrives.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurApproach;
