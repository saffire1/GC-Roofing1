import * as motion from 'motion/react-client';
import BlurImage from './ui/BlurImage';


export default function Gallery() {
  const images = [
    {
      url: "https://live.staticflickr.com/65535/55456500226_96163a4f7e_b.jpg",
      alt: "Slate roofing project"
    },
    {
      url: "https://live.staticflickr.com/65535/54714976827_30ba464114_b.jpg",
      alt: "Tiled roof installation"
    },
    {
      url: "https://live.staticflickr.com/65535/55308418653_8c4b86b0e5_b.jpg",
      alt: "Roof repair work"
    },
    {
      url: "https://live.staticflickr.com/65535/54718016171_b5f74eee14_b.jpg",
      alt: "Roof detail"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-zinc-50 border-t border-zinc-200" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-950 mb-6 tracking-tight"
          >
            Recent Roofing Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-lg text-zinc-600"
          >
            A selection of recent roofing projects and repairs carried out across Belfast.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="relative aspect-square overflow-hidden bg-zinc-50 group"
            >
              <BlurImage src={image.url} alt={image.alt} className="absolute inset-0 w-full h-full" imgClassName="group-hover:scale-110" />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-zinc-950 mb-4">Roofing Services in Belfast & Surrounding Areas</h3>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            We regularly carry out roofing work in Dunmurry, Belfast, and the surrounding areas. Whether you have a missing tile or need a complete roof replacement, our team is ready to help.
          </p>
        </div>
      </div>
    </section>
  );
}
