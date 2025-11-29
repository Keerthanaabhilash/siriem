import { motion } from "framer-motion";
import { Cpu, Zap, Brain } from "lucide-react";

const TechnologyIntegration = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Perfect <span className="text-gradient">Harmony</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our hardware, firmware, and AI-powered software work together in perfect harmony, 
              delivering unmatched performance, optimized efficiency, and unparalleled reliability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyIntegration;
