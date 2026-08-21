import { MapPin, Phone, ExternalLink } from 'lucide-react';
import * as motion from 'motion/react-client';
import BlurImage from './ui/BlurImage';


export default function Contact() {
  return (
    <section className="py-20 lg:py-28 bg-zinc-50 border-t border-zinc-200" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-zinc-950 mb-8 tracking-tight">
              Contact GC Roofing
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-gold-500/20 p-4 rounded-full mr-6 text-gold-400 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-950 mb-2">Location</h3>
                  <address className="text-zinc-600 not-italic mb-4 leading-relaxed">
                    GC Roofing<br />
                    21 Colinbrook Dr<br />
                    Dunmurry, Belfast<br />
                    BT17 0PG<br />
                    United Kingdom
                  </address>
                  <a 
                    href="https://maps.google.com/?q=21+Colinbrook+Dr,+Dunmurry,+Belfast+BT17+0PG" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gold-500 font-semibold hover:text-gold-600 transition-colors"
                  >
                    Get Directions <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold-500/20 p-4 rounded-full mr-6 text-gold-400 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-950 mb-2">Phone</h3>
                  <a href="tel:+447927282276" className="text-2xl font-bold text-zinc-700 hover:text-gold-500 transition-colors block mb-4">
                    07927 282276
                  </a>
                  <a 
                    href="tel:+447927282276"
                    className="inline-flex items-center text-gold-500 font-semibold hover:text-gold-600 transition-colors"
                  >
                    Call GC Roofing
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full h-[400px] lg:h-[500px] bg-zinc-100 rounded-sm overflow-hidden border border-zinc-300 shadow-md relative"
          >
            {/* Visual representation of map, actual google maps embed would go here */}
            <div className="absolute inset-0 bg-zinc-50">
               <BlurImage src="https://tile.openstreetmap.org/13/3960/2625.png" alt="Map view of Belfast" className="absolute inset-0 w-full h-full opacity-50 grayscale" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white p-4 rounded-sm shadow-xl flex items-center space-x-3">
                   <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-zinc-950 shadow-md">
                     <MapPin className="w-5 h-5" />
                   </div>
                   <div>
                     <p className="font-bold text-zinc-950">GC Roofing</p>
                     <p className="text-sm text-zinc-500">Dunmurry, Belfast</p>
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
