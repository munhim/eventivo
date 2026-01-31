import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTAForm } from "@/components/home/CTAForm";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import birthdayImage from "@/assets/service-birthday.jpg";
import weddingImage from "@/assets/service-wedding.jpg";
import privateImage from "@/assets/service-private.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";

const services = [
  {
    title: "Wedding Planning & Decoration",
    description: "Transform your dream wedding into reality with our comprehensive planning and stunning decorations. From intimate ceremonies to grand celebrations, we handle every detail.",
    image: weddingImage,
    features: [
      "Venue selection & styling",
      "Floral design & arrangements",
      "Custom ceremony backdrops",
      "Reception décor & table settings",
      "Lighting design & ambiance",
      "Day-of coordination",
    ],
  },
  {
    title: "Birthday Celebrations",
    description: "Make every birthday unforgettable with creative themes and magical decorations. We cater to all ages, from enchanting children's parties to elegant milestone celebrations.",
    image: birthdayImage,
    features: [
      "Custom theme development",
      "Balloon installations & garlands",
      "Dessert table styling",
      "Photo booth setups",
      "Party favors & gifts",
      "Entertainment coordination",
    ],
  },
  {
    title: "Private Events",
    description: "Celebrate life's special moments with elegance and style. From engagements to anniversaries, bridal showers to baby showers, we create intimate gatherings that feel extraordinary.",
    image: privateImage,
    features: [
      "Engagement parties",
      "Bridal & baby showers",
      "Anniversary celebrations",
      "Corporate events",
      "Holiday parties",
      "Intimate dinner parties",
    ],
  },
];

const additionalServices = [
  {
    title: "Bridal Showers",
    image: portfolio1,
    description: "Elegant and fun celebrations for the bride-to-be.",
  },
  {
    title: "Baby Showers",
    image: portfolio2,
    description: "Sweet and memorable welcome parties for new arrivals.",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-secondary">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                What We Offer
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-6">
                Our Services
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From concept to completion, we provide full-service event planning and decoration that turns your vision into an unforgettable reality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section className="section-padding bg-background">
          <div className="container-custom space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-medium w-full aspect-square object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="gold" asChild>
                    <Link to="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                More Celebrations We Create
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-soft"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTAForm />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
