import re

content = """import { ArrowRight, Hammer, Home, CheckSquare, Maximize, Layers, Zap, Hexagon, Wrench } from 'lucide-react';
import * as motion from 'motion/react-client';

export default function Services() {
  const services = [
    {
      title: "Roof Repairs",
      description: "Fast, reliable solutions for damaged, leaking or worn roofing to protect your property.",
      icon: <Hammer className="w-7 h-7 text-gold-500" strokeWidth={1.5} />
    },
    {
      title: "Roof Replacement",
      description: "Complete, high-quality roof replacement solutions built for longevity and weather resistance.",
      icon: <Home className="w-7 h-7 text-gold-500" strokeWidth={1.5} />
    },
    {
      title: "Roof Tiling",
      description: "Expert roof tile installation, careful replacement, and precision repair services.",
      icon: <CheckSquare className="w-7 h-7 text-gold-500" strokeWidth={1.5} />
    },
    {
      title: "Slate Roofing",
      description: "Premium slate roofing work combining traditional craftsmanship with modern durability.",
      icon: <Layers className="w-7 h-7 text-gold-500" strokeWidth={1.5} />
    },
    {
      title: "Leadwork",
      description: "Specialist roof leadwork and meticulous weatherproofing solutions.",
      icon: <Maximize className="w-7 h-7 text-gold-500" strokeWidth={1.5} />
    },
    {
      title: "Chimney Work",
      description: "Comprehensive roofing-related chimney restoration, pointing, and structural repairs.",
      icon: <Zap className="w-7 h-7 text-gold-500" strokeWidth={1.5} />
    },
    {
      title: "Flat Roofing",
      description: "Advanced solutions for flat roof repair, installation, and seamless replacement.",
      icon: <Hexagon className="w-7 h-7 text-gold-500" strokeWidth={1.5} />
    },
    {
      title: "General Roofing",
      description: "Bespoke roofing services meticulously tailored to your property's unique requirements.",
      icon: <Wrench className="w-7 h-7 text-gold-500" strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="services">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-zinc-50 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-zinc-100 text-zinc-900 text-xs font-semibold tracking-widest uppercase mb-6 border border-zinc-200"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-950 mb-6 tracking-tight"
          >
            Uncompromising <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-400">Quality</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto"
          >
            From urgent interventions to architectural roof replacements, we deliver premium roofing services crafted for the demanding Belfast climate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-y-16">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col h-full"
            >
              {/* Premium Icon Container */}
              <div className="mb-6 relative w-16 h-16 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gold-100/50 rotate-3 rounded-sm scale-105 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
                <div className="absolute inset-0 bg-zinc-950 rounded-sm flex items-center justify-center shadow-lg border border-zinc-800">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-zinc-600 leading-relaxed mb-6 flex-grow text-sm sm:text-base">
                {service.description}
              </p>
              
              <a href="#quote" className="inline-flex items-center text-sm font-bold tracking-wide text-zinc-950 group-hover:text-gold-500 transition-colors mt-auto uppercase">
                Explore Service 
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
              </a>
              
              {/* Subtle separator line for aesthetics */}
              <div className="h-px w-12 bg-zinc-200 mt-6 transition-all duration-500 group-hover:w-full group-hover:bg-gold-200" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"""
with open('src/components/Services.tsx', 'w') as f:
    f.write(content)
