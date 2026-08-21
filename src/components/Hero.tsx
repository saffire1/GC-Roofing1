import { Star, ShieldCheck } from 'lucide-react';
import * as motion from 'motion/react-client';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2800&auto=format&fit=crop" alt="Professional roofing project" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 sm:pt-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-2 text-gold-400 mb-6 font-medium text-xs sm:text-sm md:text-base tracking-wide"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              ))}
            </div>
            <span>4.9 Google Rating · 100+ Reviews · 15+ Years' Experience</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Trusted Roofing Specialists in Belfast
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-zinc-300 mb-8 sm:mb-10 max-w-2xl leading-relaxed"
          >
            Professional roof repairs, replacements and roofing services for homes and properties across Belfast and surrounding areas.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a href="#quote" className="bg-black text-white border border-zinc-800 hover:bg-gold-500 hover:border-gold-500 hover:text-black px-6 py-3.5 sm:px-8 sm:py-4 rounded-sm font-semibold text-base sm:text-lg text-center transition-all duration-300 shadow-lg flex items-center justify-center">
              Get a Free Quote
            </a>
            <a href="tel:+447927282276" className="bg-black text-white border border-zinc-700 hover:bg-gold-500 hover:border-gold-500 hover:text-black px-6 py-3.5 sm:px-8 sm:py-4 rounded-sm font-semibold text-base sm:text-lg text-center transition-all duration-300 shadow-lg flex items-center justify-center">
              Call 07927 282276
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-start sm:items-center text-zinc-400 text-xs sm:text-sm font-medium"
          >
            <ShieldCheck className="w-5 h-5 mr-2 text-gold-400 shrink-0" />
            <span>Local Roofing Specialists · Belfast & Surrounding Areas</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
