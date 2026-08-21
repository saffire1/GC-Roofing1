import { Star, MessageSquare, Clock, MapPin } from 'lucide-react';

export default function TrustBar() {
  const items = [
    {
      icon: <Star className="w-8 h-8 text-gold-500 mb-3" />,
      title: "4.9★",
      subtitle: "Google Rating"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-gold-500 mb-3" />,
      title: "100+",
      subtitle: "Google Reviews"
    },
    {
      icon: <Clock className="w-8 h-8 text-gold-500 mb-3" />,
      title: "15+",
      subtitle: "Years' Experience"
    },
    {
      icon: <MapPin className="w-8 h-8 text-gold-500 mb-3" />,
      title: "Belfast",
      subtitle: "Local Roofing Specialists"
    }
  ];

  return (
    <section className="bg-white border-b border-zinc-200 py-12 relative z-20 -mt-8 shadow-xl mx-4 sm:mx-6 lg:mx-8 rounded-sm max-w-7xl xl:mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {item.icon}
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 mb-1">{item.title}</h3>
            <p className="text-sm sm:text-base text-zinc-600 font-medium">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
