import { useState } from 'react';
import * as motion from 'motion/react-client';
import { AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you offer emergency roof repairs in Belfast, and how quickly can you respond?",
      answer: "Yes, we provide 24/7 emergency roof repairs across Belfast and surrounding areas. For severe leaks or storm damage, we aim to be on-site within a few hours to secure your property and prevent further water ingress before carrying out permanent repairs."
    },
    {
      question: "What type of warranty do you provide on new roof installations?",
      answer: "We stand by the quality of our work. All our new roof installations come with a comprehensive 10 to 15-year workmanship guarantee, alongside the standard manufacturer's warranty on the materials used. We provide full written documentation upon completion."
    },
    {
      question: "Which roofing materials are best suited for the Belfast climate?",
      answer: "The Northern Irish climate requires highly durable materials. Natural natural slate and high-quality concrete tiles are excellent choices for pitched roofs due to their longevity and wind resistance. For flat roofs, we highly recommend EPDM rubber roofing or GRP fibreglass as they offer superior waterproofing compared to traditional felt."
    },
    {
      question: "How long does a typical roof replacement take?",
      answer: "A standard residential roof replacement usually takes between 3 to 5 working days, depending on the size of the roof, the materials used, and current weather conditions. We always strive to minimize disruption and keep your property clean and safe throughout the process."
    },
    {
      question: "Are your roofers fully insured and qualified?",
      answer: "Absolutely. GC Roofing is fully licensed, and all our tradesmen carry comprehensive public liability insurance. We adhere strictly to local building control regulations and health and safety standards."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-zinc-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-zinc-100 text-zinc-900 text-xs font-semibold tracking-widest uppercase mb-6 border border-zinc-200"
          >
            Got Questions?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-950 mb-6 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto"
          >
            Find answers to common questions about our roofing services, warranties, and emergency repair processes in Belfast.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border border-zinc-200 rounded-sm overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-zinc-50 border-gold-200' : 'bg-white hover:border-zinc-300'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-gold-600' : 'text-zinc-950'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-gold-300 bg-gold-50 text-gold-600 rotate-180' : 'border-zinc-200 bg-white text-zinc-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-zinc-600 leading-relaxed border-t border-zinc-100 mt-2 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
