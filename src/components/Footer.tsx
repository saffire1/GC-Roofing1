export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-zinc-400 py-16 border-t border-navy-900 pb-32 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          <div className="md:col-span-4 lg:col-span-5">
            <div className="inline-block mb-6">
              <a href="#" className="flex items-center bg-white p-2 rounded-sm">
                <img 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_Bt2t1hRSNSqqSEhfXwrc_eorMgKOGPXbP24zs6NRzDJMPJ6AimEL7AbuwsmzMBS_lY501O9A4knF7Wmh5wHQ05gobQrjafL8B-8ycSNy5ca2dkdQW3qGqgTjp6TVGjUxAfHnnJxjlM3rj5Q0Rx0D7ef14szW5snFqW0NEAD5Ne7cLBytrpFE1St8uosz/s980/1000074370.jpg" 
                  alt="GC Roofing Logo" 
                  className="h-10 w-auto object-contain" 
                />
              </a>
            </div>
            <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
              Professional Roofing Services in Belfast & Surrounding Areas. From urgent repairs to complete new roofs, delivered with workmanship you can trust.
            </p>
            <div className="flex space-x-4">
               {/* Social placeholders if needed, omitted for now */}
            </div>
          </div>
          
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-bold mb-6 text-lg tracking-tight">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-white font-bold mb-6 text-lg tracking-tight">Contact Us</h4>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="tel:+447927282276" className="text-2xl font-bold text-white hover:text-gold-400 transition-colors">
                  07927 282276
                </a>
              </li>
              <li className="leading-relaxed">
                21 Colinbrook Dr<br />
                Dunmurry, Belfast<br />
                BT17 0PG
              </li>
              <li>
                <a href="https://gcroofing.uk" className="hover:text-white transition-colors border-b border-stone-700 hover:border-white pb-1">
                  gcroofing.uk
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <p>&copy; {currentYear} GC Roofing. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
