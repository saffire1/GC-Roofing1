/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Introduction from './components/Introduction';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import QuoteSection from './components/QuoteSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-gold-200 selection:text-gold-900">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Introduction />
        <Services />
        <WhyUs />
        <Reviews />
        <Gallery />
        <FAQ />
        <QuoteSection />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
