import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import birthdayImage from "@/assets/service-birthday.jpg";
import weddingImage from "@/assets/service-wedding.jpg";
import privateImage from "@/assets/service-private.jpg";

const services = [
  {
    title: "Birthdays",
    description:
      "Make every birthday unforgettable with our creative themes, stunning decorations, and meticulous planning that brings joy to celebrations of all ages.",
    image: birthdayImage,
    link: "/services",
  },
  {
    title: "Weddings",
    description:
      "Transform your dream wedding into reality with our expert planning, exquisite floral arrangements, and elegant décor that creates the perfect romantic atmosphere.",
    image: weddingImage,
    link: "/services",
  },
  {
    title: "Private Events",
    description:
      "From engagements to anniversaries, baby showers to intimate gatherings, we craft personalized celebrations that reflect your unique style and vision.",
    image: privateImage,
    link: "/services",
  },
];

export function Services() {
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
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We specialize in creating magical moments for life's most cherished celebrations, turning your vision into stunning reality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <Link to={service.link} className="block">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-gold font-medium">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
