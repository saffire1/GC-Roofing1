import { ArrowRight, Hammer, Home, CheckSquare, Maximize, Layers, Zap, Hexagon, Wrench } from 'lucide-react';
import * as motion from 'motion/react-client';

export default function Services() {
  const services = [
    {
      title: "Roof Repairs",
      description: "Fast, reliable solutions for damaged, leaking or worn roofing to protect your property.",
      icon: <Hammer className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
    },
    {
      title: "Roof Replacement",
      description: "Complete, high-quality roof replacement solutions built for longevity and weather resistance.",
      icon: <Home className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
    },
    {
      title: "Roof Tiling",
      description: "Expert roof tile installation, careful replacement, and precision repair services.",
      icon: <CheckSquare className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
    },
    {
      title: "Slate Roofing",
      description: "Premium slate roofing work combining traditional craftsmanship with modern durability.",
      icon: <Layers className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
    },
    {
      title: "Leadwork",
      description: "Specialist roof leadwork and meticulous weatherproofing solutions.",
      icon: <Maximize className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
    },
    {
      title: "Chimney Work",
      description: "Comprehensive roofing-related chimney restoration, pointing, and structural repairs.",
      icon: <Zap className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
    },
    {
      title: "Flat Roofing",
      description: "Advanced solutions for flat roof repair, installation, and seamless replacement.",
      icon: <Hexagon className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
    },
    {
      title: "General Roofing",
      description: "Bespoke roofing services meticulously tailored to your property's unique requirements.",
      icon: <Wrench className="w-6 h-6 text-gold-500" strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-zinc-50 border-t border-zinc-200 relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-950 mb-4 tracking-tight"
          >
            Premium Roofing Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto"
          >
            From urgent interventions to architectural roof replacements, we deliver premium roofing services crafted for the demanding Belfast climate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
              className="group relative bg-white border border-zinc-200 p-6 lg:p-8 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 bg-zinc-950 rounded-sm shadow-md group-hover:bg-gold-500 transition-colors duration-300">
                <div className="group-hover:brightness-0 group-hover:invert transition-all duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-lg lg:text-xl font-bold text-zinc-950 mb-3">
                {service.title}
              </h3>
              
              <p className="text-zinc-600 leading-relaxed mb-6 flex-grow text-sm sm:text-base">
                {service.description}
              </p>
              
              <a href="#quote" className="inline-flex items-center text-sm font-bold tracking-wide text-zinc-950 group-hover:text-gold-600 transition-colors mt-auto uppercase">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
