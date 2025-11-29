// src/components/sections/Solutions.tsx
import React from "react";
import { motion } from "framer-motion";

export const Solutions: React.FC = () => {
  const points = [
    "Easy and simple integration",
    "Smooth migration from existing OCPP 1.6 to future OCPP 2.0.1 protocol",
    "Proactive Issue Monitoring",
    "Custom built dashboards for monitoring and control",
    "Smart Customer Analytics",
    "Smart Load Management",
    "Transparent and multi-modal payment architecture",
    "Firmware and software updates",
    "Extra customized features on request",
  ];

  return (
    <section id="solutions" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 className="text-2xl md:text-3xl font-bold" initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            Charging Management System (CMS)
          </motion.h2>
          <motion.p className="mt-4 text-slate-600">
            One stop solution for charging through any standard AC or DC charger, allowing clients to focus on business growth
            without worrying about the backend infrastructure.
          </motion.p>
        </div>

        <motion.div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {points.map((p) => (
            <div key={p} className="flex gap-4 items-start p-4 border rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-semibold">✓</div>
              </div>
              <p className="text-slate-700">{p}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <a href="#contact" className="inline-block rounded-md bg-emerald-500 px-6 py-3 text-white font-medium">
            Talk to our expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
