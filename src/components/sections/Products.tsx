// src/components/sections/Products.tsx
import React from "react";
import { motion } from "framer-motion";

type Product = {
  id: string;
  title: string;
  subtitle?: string;
  specs?: string;
  image?: string;
};

const products: Product[] = [
  { id: "ac", title: "AC Chargers", subtitle: "Onboard & Stationary AC Charging", specs: "3.3 kW · 7.4 kW · 11 kW · 22 kW" },
  { id: "dc", title: "DC Chargers", subtitle: "Fast & Ultra-Fast DC Chargers", specs: "11 kW – 360 kW" },
  { id: "onboard", title: "Onboard Chargers", subtitle: "Custom vehicle-specific solutions", specs: "Tailored to OEM battery chemistries" },
];

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-center" initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          Products
        </motion.h2>
        <p className="text-center text-slate-600 mt-2 max-w-2xl mx-auto">
          A range of AC and DC chargers from small form factor station chargers to high-power chargers for buses and trucks.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.06 * i }}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg"
            >
              <div className="text-xl font-semibold">{p.title}</div>
              <div className="mt-2 text-slate-600">{p.subtitle}</div>
              <div className="mt-4 text-slate-700">{p.specs}</div>
              <div className="mt-6">
                <a href={`/products/${p.id}`} className="text-emerald-600 font-medium hover:underline">
                  Learn more →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
