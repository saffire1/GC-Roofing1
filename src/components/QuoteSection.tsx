import React, { useState } from 'react';
import * as motion from 'motion/react-client';

export default function QuoteSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <section className="py-20 lg:py-28 bg-zinc-50 border-t border-zinc-200" id="quote">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 tracking-tight">
              Need a Roofer?
            </h2>
            <p className="text-lg text-zinc-600 mb-10 max-w-xl">
              Tell us what you need help with and get in touch with GC Roofing about your roofing project. We aim to respond to all enquiries promptly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+447927282276" className="inline-flex items-center justify-center bg-black text-white border border-black hover:bg-gold-500 hover:border-gold-500 hover:text-black px-8 py-4 rounded-sm font-semibold text-lg transition-all duration-300 shadow-md">
                Call 07927 282276
              </a>
              <a href="#contact" className="inline-flex items-center justify-center bg-white text-black border border-zinc-300 px-8 py-4 rounded-sm font-semibold text-lg hover:bg-white transition-colors shadow-sm">
                View Contact Details
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 sm:p-10 rounded-sm shadow-xl border border-zinc-200 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gold-500" />
            <h3 className="text-2xl font-bold text-black mb-6">Request a Roofing Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">Name</label>
                  <input type="text" id="name" required className="w-full px-4 py-2.5 border border-zinc-300 rounded-sm focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 outline-none transition-colors" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1">Phone</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-2.5 border border-zinc-300 rounded-sm focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 outline-none transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
                  <input type="email" id="email" required className="w-full px-4 py-2.5 border border-zinc-300 rounded-sm focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 outline-none transition-colors" />
                </div>
                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium text-zinc-700 mb-1">Postcode</label>
                  <input type="text" id="postcode" required className="w-full px-4 py-2.5 border border-zinc-300 rounded-sm focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 outline-none transition-colors" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-zinc-700 mb-1">What do you need help with?</label>
                <select id="service" required className="w-full px-4 py-2.5 border border-zinc-300 rounded-sm focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 outline-none transition-colors bg-white">
                  <option value="">Select a service</option>
                  <option value="Roof Repair">Roof Repair</option>
                  <option value="Roof Replacement">Roof Replacement</option>
                  <option value="Roof Tiling">Roof Tiling</option>
                  <option value="Slate Roofing">Slate Roofing</option>
                  <option value="Leadwork">Leadwork</option>
                  <option value="Chimney Work">Chimney Work</option>
                  <option value="Flat Roofing">Flat Roofing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">Message</label>
                <textarea id="message" rows={4} required className="w-full px-4 py-2.5 border border-zinc-300 rounded-sm focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 outline-none transition-colors resize-none"></textarea>
              </div>

              <div>
                <label htmlFor="photos" className="block text-sm font-medium text-zinc-700 mb-1">Upload Photos (Optional)</label>
                <input type="file" id="photos" multiple accept="image/*" className="w-full text-sm text-zinc-500 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-zinc-50 file:text-zinc-700 hover:file:bg-zinc-100 transition-colors" />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-black text-white border border-black hover:bg-gold-500 hover:border-gold-500 hover:text-black font-semibold py-3.5 rounded-sm transition-all duration-300 disabled:opacity-70 flex justify-center items-center"
              >
                {isSubmitting ? "Sending..." : "Request a Quote"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
