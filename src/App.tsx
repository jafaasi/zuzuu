import { motion } from "motion/react";
import { 
  ArrowRight, 
  ShoppingBag, 
  CheckCircle2, 
  Star, 
  MessageCircle,
  Upload,
  Calendar,
  Info,
  Clock,
  ChevronRight,
  Heart,
  Instagram
} from "lucide-react";
import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    type: "birthday-cake",
    weight: "",
    message: ""
  });

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate WhatsApp redirect
    const text = `Hi Zuzuu Cakes! I'd like to order a ${formData.type} for ${formData.date}.`;
    window.open(`https://wa.me/916385603026?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-stone-200">
      
      {/* Sticky WhatsApp Button */}
      <a 
        href="https://wa.me/916385603026"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 bg-[#25D366] text-white p-4 sm:px-5 sm:py-3 rounded-[2rem] shadow-xl shadow-green-500/20 hover:scale-105 transition-transform font-medium tracking-wide"
      >
        <MessageCircle className="w-6 h-6 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>

      {/* Navigation (Minimal) */}
      <nav className="absolute top-0 w-full z-40 p-6 md:p-10 flex justify-between items-center">
        <div className="font-serif text-2xl font-semibold tracking-tight z-50 transition-colors duration-300 text-stone-900">
          Zuzuu Cakes.
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase text-stone-600">
          <a href="#designs" className="hover:text-stone-900 transition-colors">Designs</a>
          <a href="#pricing" className="hover:text-stone-900 transition-colors">Pricing</a>
          <a href="#order" className="hover:text-stone-900 transition-colors">Order</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 md:pt-48 md:pb-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 rounded-full text-xs font-semibold uppercase tracking-widest text-stone-500 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Taking orders in Chennai
          </div>
          
          <h1 className="font-serif text-[2.75rem] leading-[1.05] sm:text-5xl md:text-7xl mb-6 tracking-tight text-stone-900">
            Custom Cakes <span className="italic text-stone-500">&</span><br/> Cupcake Bouquets
          </h1>
          
          <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-md leading-relaxed font-light">
            Handcrafted designs for birthdays, celebrations & those special moments you want to remember.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a 
              href="#order"
              className="w-full sm:w-auto bg-stone-900 text-white px-8 py-4 rounded-full font-medium tracking-wide flex justify-center items-center gap-2 hover:bg-stone-800 transition-all hover:gap-3"
            >
              Order Now <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#designs"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-medium tracking-wide flex justify-center items-center gap-2 border border-stone-200 hover:border-stone-400 text-stone-700 transition-all"
            >
              View Designs
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative aspect-[4/5] md:aspect-[3/4] w-full max-w-md mx-auto"
        >
          {/* Main Hero Image */}
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1089&q=80" 
              alt="Premium Chocolate Cake" 
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-stone-200 border-2 border-white flex items-center justify-center font-serif text-xs">✨</div>
              <div className="w-10 h-10 rounded-full bg-[#4A3B32] border-2 border-white flex items-center justify-center font-serif text-white text-xs">🍫</div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-stone-500">Premium</div>
              <div className="font-serif font-medium text-stone-900">Ingredients</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Designs */}
      <section id="designs" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-4 text-stone-900 tracking-tight">Our Signature Designs</h2>
              <p className="text-stone-500 max-w-md">Browse our most loved creations. See something you like? We can customize it for your occasion.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Birthday Cakes", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1065&q=80" },
              { title: "Cupcake Bouquets", img: "https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80" },
              { title: "Fudgy Brownies", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 bg-stone-100">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-stone-800">{item.title}</h3>
                  <button className="text-sm font-semibold tracking-wide uppercase text-stone-500 group-hover:text-stone-900 transition-colors flex items-center gap-1">
                    Order Similar <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Guide & How it Works (Split Section) */}
      <section id="pricing" className="py-24 bg-stone-50 px-6 border-y border-stone-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="font-serif text-4xl mb-8 tracking-tight">Simple Pricing</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-baseline border-b border-stone-200 pb-6">
                <div>
                  <h3 className="text-xl font-medium text-stone-900">Custom Cakes</h3>
                  <p className="text-stone-500 text-sm mt-1">Buttercream & fondants</p>
                </div>
                <div className="text-right pl-4">
                  <div className="font-serif text-xl sm:text-2xl text-stone-900">₹1,200<span className="text-xs sm:text-sm font-sans text-stone-500 font-normal"> /kg+</span></div>
                </div>
              </div>
              
              <div className="flex justify-between items-baseline border-b border-stone-200 pb-6">
                <div>
                  <h3 className="text-xl font-medium text-stone-900">Cupcake Bouquets</h3>
                  <p className="text-stone-500 text-sm mt-1">Box of 6 signature floral designs</p>
                </div>
                <div className="text-right pl-4">
                  <div className="font-serif text-xl sm:text-2xl text-stone-900">₹850<span className="text-xs sm:text-sm font-sans text-stone-500 font-normal"> /box+</span></div>
                </div>
              </div>

              <div className="flex justify-between items-baseline border-b border-stone-200 pb-6">
                <div>
                  <h3 className="text-xl font-medium text-stone-900">Premium Brownies</h3>
                  <p className="text-stone-500 text-sm mt-1">Box of 6 double chocolate</p>
                </div>
                <div className="text-right pl-4">
                  <div className="font-serif text-xl sm:text-2xl text-stone-900">₹600<span className="text-xs sm:text-sm font-sans text-stone-500 font-normal"> /box+</span></div>
                </div>
              </div>
              
              <div className="flex items-start sm:items-center gap-3 p-4 bg-stone-100/80 rounded-xl mt-6 text-stone-600 text-sm">
                <Info className="w-5 h-5 flex-shrink-0 text-stone-400 mt-0.5 sm:mt-0" />
                <p>Final price depends on the exact customization and detailing required. We'll confirm before you pay.</p>
              </div>
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="font-serif text-4xl mb-8 tracking-tight">How to Order</h2>
            <div className="relative">
              {/* Vertical line connector */}
              <div className="absolute left-[20px] top-4 bottom-4 w-px bg-stone-200"></div>
              
              <div className="space-y-10">
                <div className="relative flex gap-6">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold shadow-md shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-medium text-stone-900 mb-2">Submit Order Form</h3>
                    <p className="text-stone-600">Fill in your details, date, and share any reference images below.</p>
                  </div>
                </div>
                
                <div className="relative flex gap-6">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-stone-200 text-stone-600 border border-stone-300 flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-medium text-stone-900 mb-2">Confirm on WhatsApp</h3>
                    <p className="text-stone-600">We'll message you within 2 hours to confirm the design, price, and finalize the order.</p>
                  </div>
                </div>
                
                <div className="relative flex gap-6">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-stone-200 text-stone-600 border border-stone-300 flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-medium text-stone-900 mb-2">Pickup / Delivery</h3>
                    <p className="text-stone-600">Pick up your fresh, handcrafted order from our studio in Chennai, or arrange a drop-off.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* Order Form (The Money Section) */}
      <section id="order" className="py-24 bg-white px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-4 tracking-tight">Place Your Request</h2>
            <p className="text-stone-500">Fast, easy, and no endless DMs. We'll review your request and message you on WhatsApp to confirm.</p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            onSubmit={handleOrderSubmit} 
            className="bg-white border border-stone-200 rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-stone-500">Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 transition-all text-stone-800"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-stone-500">WhatsApp Number</label>
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 transition-all text-stone-800"
                  placeholder="+91"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-semibold uppercase tracking-wider text-stone-500">Date Needed</label>
                  <span className="text-xs text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Dates available this week</span>
                </div>
                <div className="relative">
                  <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-stone-400" />
                  <input 
                    required
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 transition-all text-stone-800"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-stone-500">Order Type</label>
                <select 
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 transition-all text-stone-800 appearance-none"
                >
                  <option value="birthday-cake">Birthday Cake</option>
                  <option value="cupcake-bouquet">Cupcake Bouquet</option>
                  <option value="brownies">Brownies</option>
                  <option value="other">Other Celebration Cake</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-stone-500">Weight / Quantity</label>
                <input 
                  type="text" 
                  value={formData.weight}
                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 transition-all text-stone-800"
                  placeholder="e.g. 1.5kg or 6 pieces"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-stone-500">Reference Image (Optional)</label>
                <div className="relative">
                  <input 
                    type="file" 
                    id="file-upload"
                    className="hidden"
                  />
                  <label htmlFor="file-upload" className="w-full bg-stone-50 border border-stone-200 border-dashed hover:bg-stone-100 rounded-xl px-4 py-3 text-stone-500 transition-all cursor-pointer flex items-center justify-center gap-2">
                    <Upload className="w-4 h-4" /> Upload Design Idea
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-10">
              <label className="text-sm font-semibold uppercase tracking-wider text-stone-500">Message on Cake</label>
              <input 
                type="text" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 transition-all text-stone-800"
                placeholder="e.g. Happy Birthday Ayan"
              />
            </div>

            <button type="submit" className="w-full bg-stone-900 text-white rounded-xl py-4 font-medium tracking-wide hover:bg-stone-800 transition-all flex justify-center items-center gap-2">
              Submit Order Request
            </button>
            <p className="text-center text-stone-500 text-sm mt-4 flex items-center justify-center gap-1">
              <Clock className="w-4 h-4"/> We'll review and confirm on WhatsApp within a few hours.
            </p>

          </motion.form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-900 text-stone-100 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Heart className="w-8 h-8 mx-auto mb-8 text-stone-400" />
            <h2 className="font-serif text-4xl mb-12">Loved by our customers</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-stone-800/50 p-6 sm:p-8 rounded-[2rem] border border-stone-700"
            >
              <div className="flex gap-1 mb-4 text-emerald-400">
                <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
              </div>
              <p className="text-lg text-stone-300 font-light italic mb-6">"Absolutely loved the design 😍 It exceeded my expectations and tasted incredible. Will definitely order again!"</p>
              <div className="font-medium text-white text-sm uppercase tracking-wider">— Recent Customer</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-stone-800/50 p-6 sm:p-8 rounded-[2rem] border border-stone-700"
            >
              <div className="flex gap-1 mb-4 text-emerald-400">
                <Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/>
              </div>
              <p className="text-lg text-stone-300 font-light italic mb-6">"The cupcake bouquet was a huge hit at my sister's birthday. They looked too pretty to eat, but we managed!"</p>
              <div className="font-medium text-white text-sm uppercase tracking-wider">— Instagram Review</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / About */}
      <footer className="py-16 bg-stone-100 border-t border-stone-200 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl font-semibold mb-4 text-stone-900">Zuzuu Cakes.</h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Zuzuu Cakes creates handcrafted custom cakes and premium brownies in Chennai. 
            We focus on beautiful design without compromising on incredible taste.
          </p>

          <div className="flex justify-center mb-10">
            <a 
              href="https://www.instagram.com/zuzuu_cakes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-stone-200 rounded-full text-stone-600 hover:bg-pink-600 hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="text-xs font-semibold tracking-widest uppercase text-stone-400">
            © {new Date().getFullYear()} Zuzuu Cakes Chennai
          </div>
        </div>
      </footer>

    </div>
  );
}
