import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-dark overflow-hidden"
        >
          {/* Background Glow Effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl" />

          <div className="relative z-10 px-8 py-20 md:px-16 md:py-28 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6"
            >
              <Sparkles className="h-4 w-4 text-primary-glow" />
              <span className="text-sm font-medium text-primary-glow">Start Your EV Journey</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto"
            >
              Join us on the journey
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              At SIRI Electromotive, we believe in a world powered by clean energy, where the hum of 
              electric engines replaces the roar of combustion. We are passionate about the power of 
              sustainable energy and are committed to helping every company, every individual, play a 
              part in the transition.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="text-2xl font-semibold text-white mb-10"
            >
              Ready to turbo-charge your electric future?
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 glow group" asChild>
                <a href="/contact">
                  Talk to our expert
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16 pt-8 border-t border-white/10"
            >
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                {[
                  { value: "24/7", label: "Support" },
                  { value: "5 Year", label: "Warranty" },
                  { value: "ISO", label: "Certified" },
                ].map((item, i) => (
                  <div key={i} className="text-white">
                    <div className="text-2xl font-bold mb-1">{item.value}</div>
                    <div className="text-sm text-white/60">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
