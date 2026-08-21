with open('src/components/Header.tsx', 'w') as f:
    f.write("""import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import * as motion from 'motion/react-client';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gold-500 rounded-sm flex items-center justify-center text-white font-bold text-xl">
                GC
              </div>
              <span className="font-serif font-bold text-2xl text-zinc-950 tracking-tight">Roofing</span>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8 text-sm font-medium text-zinc-600">
              <a href="#services" className="hover:text-gold-500 transition-colors">Services</a>
              <a href="#why-us" className="hover:text-gold-500 transition-colors">About Us</a>
              <a href="#reviews" className="hover:text-gold-500 transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-gold-500 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="tel:+447927282276" className="flex items-center text-zinc-950 font-semibold hover:text-gold-500 transition-colors">
                <Phone className="w-5 h-5 mr-2 text-gold-500" />
                07927 282276
              </a>
              <a href="#quote" className="bg-black text-white border border-black hover:bg-gold-500 hover:border-gold-500 hover:text-black px-6 py-2.5 rounded-sm font-medium transition-all duration-300 shadow-sm">
                Get a Quote
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-950 p-2" aria-label="Menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-zinc-200 bg-white"
        >
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            <a onClick={() => setIsOpen(false)} href="#services" className="block px-3 py-3 text-base font-medium text-zinc-950 hover:bg-zinc-50 rounded-sm">Services</a>
            <a onClick={() => setIsOpen(false)} href="#why-us" className="block px-3 py-3 text-base font-medium text-zinc-950 hover:bg-zinc-50 rounded-sm">About Us</a>
            <a onClick={() => setIsOpen(false)} href="#reviews" className="block px-3 py-3 text-base font-medium text-zinc-950 hover:bg-zinc-50 rounded-sm">Reviews</a>
            <a onClick={() => setIsOpen(false)} href="#contact" className="block px-3 py-3 text-base font-medium text-zinc-950 hover:bg-zinc-50 rounded-sm">Contact</a>
            <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col space-y-3">
              <a href="tel:+447927282276" className="flex items-center justify-center text-zinc-950 font-semibold py-3 bg-zinc-50 rounded-sm">
                <Phone className="w-5 h-5 mr-2 text-gold-500" />
                07927 282276
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
""")
