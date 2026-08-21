import { CheckCircle2 } from 'lucide-react';
import * as motion from 'motion/react-client';
import BlurImage from './ui/BlurImage';


export default function Introduction() {
  const features = [
    "Local roofing expertise",
    "Professional workmanship",
    "Reliable service",
    "Residential roofing",
    "Roofing repairs and replacement"
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-950 mb-6 tracking-tight">
              Roofing Expertise You Can Rely On
            </h2>
            <div className="prose prose-lg text-zinc-600 mb-8">
              <p>
                When it comes to your property, a secure and well-maintained roof is essential. GC Roofing brings over 15 years of dedicated experience to homes across Belfast and the surrounding areas.
              </p>
              <p>
                From finding and fixing persistent leaks to full-scale roof replacements, we pride ourselves on delivering lasting results, practical solutions, and a straightforward service you can trust.
              </p>
            </div>
            
            <ul className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-zinc-900 font-medium text-lg">
                  <CheckCircle2 className="w-6 h-6 text-gold-500 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <a href="#quote" className="inline-flex items-center justify-center bg-black text-white border border-black hover:bg-gold-500 hover:border-gold-500 hover:text-black px-8 py-3.5 rounded-sm font-semibold transition-all duration-300">
              Speak to Our Team
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] relative rounded-sm overflow-hidden shadow-2xl">
              <BlurImage src="https://live.staticflickr.com/65535/55456907042_4b34a3b324_b.jpg" alt="Professional roofer working on a residential roof" className="w-full h-full absolute inset-0" />
              <div className="absolute inset-0 bg-white/10 mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-zinc-950 p-6 rounded-sm shadow-xl hidden sm:block border-l-4 border-gold-500">
              <p className="text-3xl font-bold text-white mb-1">15+</p>
              <p className="text-zinc-400 font-medium">Years Serving Belfast</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
