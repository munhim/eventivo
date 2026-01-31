import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTAForm } from "@/components/home/CTAForm";
import { Award, Users, Calendar, Heart } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";

const stats = [
  { icon: Calendar, value: "500+", label: "Events Planned" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Heart, value: "100%", label: "Satisfaction Rate" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-gold text-sm font-medium tracking-widest uppercase">
                  About Us
                </span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-6">
                  Crafting Unforgettable
                  <br />
                  <span className="text-gold">Moments</span>
                </h1>
                <p className="text-muted-foreground text-lg mb-6">
                  Élégance Events is a premier event planning and decoration agency dedicated to turning your most cherished moments into extraordinary celebrations. With over a decade of experience, we've helped thousands of clients create memories that last a lifetime.
                </p>
                <p className="text-muted-foreground">
                  Our team of passionate designers and planners combines creativity with meticulous attention to detail, ensuring every event we touch becomes a masterpiece. From intimate gatherings to grand celebrations, we bring your vision to life with elegance and style.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img
                  src={heroImage}
                  alt="Elegant event setup"
                  className="rounded-2xl shadow-medium"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-charcoal text-ivory">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                  <p className="text-3xl md:text-4xl font-serif font-bold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-ivory/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-background">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
                A Passion for Perfection
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Founded in 2014, Élégance Events began as a small dream to help couples create their perfect wedding day. What started as a one-woman operation has grown into a full-service event planning and decoration agency, serving clients across the country.
              </p>
              <p className="text-muted-foreground text-lg">
                Our philosophy is simple: every event should be as unique as the people celebrating it. We don't believe in cookie-cutter designs or one-size-fits-all solutions. Instead, we take the time to understand your vision, your style, and your story, crafting celebrations that truly reflect who you are.
              </p>
            </motion.div>
          </div>
        </section>

        <CTAForm />
      </main>
      <Footer />
    </div>
  );
};

export default About;
