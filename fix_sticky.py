with open("src/components/StickyMobileCTA.tsx", "w") as f:
    f.write('''import { Phone, FileText } from 'lucide-react';

export default function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 z-50 px-2 py-2 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
      <div className="flex space-x-2">
        <a 
          href="tel:+447927282276" 
          className="flex-1 flex items-center justify-center bg-white border border-zinc-300 text-zinc-950 font-semibold py-3 rounded-sm shadow-sm active:bg-zinc-50 transition-colors"
        >
          <Phone className="w-5 h-5 mr-2 text-gold-500" />
          Call
        </a>
        <a 
          href="#quote" 
          className="flex-1 flex items-center justify-center bg-black text-white border border-black hover:bg-gold-500 hover:border-gold-500 hover:text-black font-semibold py-3 rounded-sm shadow-sm transition-all duration-300"
        >
          <FileText className="w-5 h-5 mr-2" />
          Get a Quote
        </a>
      </div>
    </div>
  );
}''')
