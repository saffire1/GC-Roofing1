import { Star } from 'lucide-react';
import * as motion from 'motion/react-client';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      text: "Real Google review displayed here",
      author: "Placeholder Name",
      date: "1 month ago"
    },
    {
      id: 2,
      text: "Real Google review displayed here",
      author: "Placeholder Name",
      date: "3 months ago"
    },
    {
      id: 3,
      text: "Real Google review displayed here",
      author: "Placeholder Name",
      date: "4 months ago"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-zinc-200" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-950 mb-6 tracking-tight">
            Trusted by Homeowners Across Belfast
          </h2>
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-bold text-zinc-950">4.9</div>
            <div className="flex flex-col items-start">
              <div className="flex text-gold-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-zinc-600 font-medium">102 Google Reviews</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-sm shadow-md border border-zinc-200"
            >
              <div className="flex text-gold-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-zinc-700 mb-6 leading-relaxed italic border-l-4 border-zinc-200 pl-4 py-2">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-zinc-950">{review.author}</p>
                  <p className="text-sm text-zinc-500">{review.date}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center font-bold text-sm">
                  G
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
