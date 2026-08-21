import { ShieldCheck, Star, MapPin, Wrench, FileText } from 'lucide-react';
import * as motion from 'motion/react-client';
import BlurImage from './ui/BlurImage';


export default function WhyUs() {
  const points = [
    {
      title: "15+ Years of Experience",
      description: "Established roofing experience serving Belfast and surrounding areas.",
      icon: <ShieldCheck className="w-10 h-10 text-zinc-950" />
    },
    {
      title: "4.9★ Google Rating",
      description: "A strong reputation reflected in more than 100 Google reviews.",
      icon: <Star className="w-10 h-10 text-zinc-950" />
    },
    {
      title: "Local Roofing Specialists",
      description: "Serving homeowners and properties in Belfast and surrounding areas.",
      icon: <MapPin className="w-10 h-10 text-zinc-950" />
    },
    {
      title: "Professional Workmanship",
      description: "Focus on quality roofing work and practical solutions.",
      icon: <Wrench className="w-10 h-10 text-zinc-950" />
    },
    {
      title: "Clear Quote Process",
      description: "Make it easy for customers to enquire about their roofing project.",
      icon: <FileText className="w-10 h-10 text-zinc-950" />
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white text-zinc-950" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
            >
              Why Choose GC Roofing?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-zinc-700 text-lg mb-10"
            >
              We know that choosing a roofing contractor is a big decision. Here is why homeowners across Belfast trust GC Roofing with their properties.
            </motion.p>

            <div className="space-y-8">
              {points.map((point, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex"
                >
                  <div className="flex-shrink-0 mt-1 mr-6 bg-gold-500/20 p-3 rounded-sm border border-gold-500/30">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                    <p className="text-zinc-600">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block relative h-full min-h-[600px]"
          >
            <BlurImage src="https://live.staticflickr.com/65535/54963666770_676c8909cc_b.jpg" alt="Detailed slate roof workmanship" className="absolute inset-0 w-full h-full rounded-sm border border-zinc-200" />
            <div className="absolute inset-0 bg-white/20 mix-blend-multiply rounded-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
