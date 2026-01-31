import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    content:
      "Élégance Events made our wedding day absolutely magical! Every detail was perfect, from the stunning floral arrangements to the elegant table settings. They truly understood our vision and brought it to life beyond our wildest dreams.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Birthday Celebration",
    content:
      "My daughter's 5th birthday party was a fairy tale come true! The team created an enchanting princess theme that left all the kids and parents in awe. Professional, creative, and so attentive to every detail.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Anniversary Party",
    content:
      "Our 25th anniversary celebration was absolutely stunning. The gold and white decor was sophisticated and romantic. Élégance Events handled everything with such grace and professionalism. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Jennifer Williams",
    role: "Bridal Shower",
    content:
      "The bridal shower they planned for my best friend was Pinterest-perfect! Beautiful balloon installations, elegant table settings, and the most gorgeous flower wall. Everyone was asking for their contact information!",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3 mb-4">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-secondary rounded-2xl p-8 md:p-12 text-center"
            >
              <Quote className="w-12 h-12 text-gold mx-auto mb-6 opacity-50" />
              
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              <div>
                <p className="font-serif font-semibold text-xl">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-gold hover:border-gold hover:text-ivory transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-gold" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-gold hover:border-gold hover:text-ivory transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
