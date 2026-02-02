import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTAForm } from "@/components/home/CTAForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MapPin, Users, Calendar, Sparkles } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import birthdayImage from "@/assets/service-birthday.jpg";
import weddingImage from "@/assets/service-wedding.jpg";
import privateImage from "@/assets/service-private.jpg";
import heroImage from "@/assets/hero-wedding.jpg";

const categories = ["All", "Weddings", "Birthdays", "Showers", "Private Events"];

interface PortfolioItem {
  src: string;
  category: string;
  title: string;
  description: string;
  venue: string;
  location: string;
  guests: number;
  date: string;
  decorations: string[];
  services: string[];
  highlights: string;
}

const portfolioItems: PortfolioItem[] = [
  { 
    src: heroImage, 
    category: "Weddings", 
    title: "Elegant Garden Wedding",
    description: "A stunning outdoor ceremony at Serena Hotel, Islamabad with 350 guests and floral arch arrangements.",
    venue: "Serena Hotel",
    location: "Islamabad",
    guests: 350,
    date: "March 2024",
    decorations: ["Floral arch entrance", "Crystal chandeliers", "Rose petal walkway", "Fairy light canopy", "Custom stage backdrop"],
    services: ["Full event planning", "Floral arrangements", "Lighting design", "Stage decoration", "Table settings"],
    highlights: "The bride's vision was a romantic garden paradise. We transformed the Serena lawn into an enchanting floral wonderland with over 5,000 fresh roses and a stunning crystal-draped mandap that left guests speechless."
  },
  { 
    src: birthdayImage, 
    category: "Birthdays", 
    title: "Pink & Gold Birthday",
    description: "A magical first birthday celebration in Lahore featuring custom balloon installations and dessert tables.",
    venue: "Private Residence",
    location: "DHA Lahore",
    guests: 120,
    date: "January 2024",
    decorations: ["Balloon garland arch", "Custom dessert table", "Photo booth backdrop", "Themed centerpieces", "LED name sign"],
    services: ["Theme design", "Balloon installations", "Dessert styling", "Party favors", "Photography coordination"],
    highlights: "This princess-themed first birthday featured a 12-foot balloon installation in blush pink and gold, a custom three-tier cake, and an Instagram-worthy dessert spread that was the talk of Lahore."
  },
  { 
    src: weddingImage, 
    category: "Weddings", 
    title: "Royal Baraat Ceremony",
    description: "Traditional wedding decor at Pearl Continental, Karachi with elegant lighting and stage design.",
    venue: "Pearl Continental Hotel",
    location: "Karachi",
    guests: 500,
    date: "December 2023",
    decorations: ["Grand stage with mogul arches", "Traditional marigold installations", "Crystal curtain backdrop", "Floating candles", "Imported flower arrangements"],
    services: ["Complete wedding management", "Traditional decor", "Lighting & sound", "Vendor coordination", "Guest management"],
    highlights: "A royal Pakistani wedding featuring traditional mogul-inspired architecture combined with modern elegance. The 20-foot stage with hand-carved arches and 10,000 marigolds created a regal atmosphere."
  },
  { 
    src: privateImage, 
    category: "Private Events", 
    title: "Silver Anniversary Dinner",
    description: "An intimate 25th anniversary celebration at Monal Restaurant, Islamabad for 80 guests.",
    venue: "Monal Restaurant",
    location: "Margalla Hills, Islamabad",
    guests: 80,
    date: "February 2024",
    decorations: ["Silver & white theme", "Candlelit tables", "Memory photo wall", "Floral centerpieces", "Custom backdrop"],
    services: ["Event coordination", "Menu planning", "Decor setup", "Entertainment booking", "Memory video production"],
    highlights: "Celebrating 25 years of love with breathtaking views of Islamabad. We created an intimate silver wonderland with a surprise memory wall featuring photos from the couple's journey together."
  },
  { 
    src: portfolio1, 
    category: "Showers", 
    title: "Luxury Bridal Shower",
    description: "A glamorous bridal shower in DHA Lahore with rose gold theme and personalized favors.",
    venue: "The Nishat Hotel",
    location: "Gulberg, Lahore",
    guests: 45,
    date: "November 2023",
    decorations: ["Rose gold balloon wall", "Flower crown station", "Mimosa bar setup", "Ring photo props", "Personalized seating"],
    services: ["Theme conceptualization", "Vendor management", "Game coordination", "Favor preparation", "Photography"],
    highlights: "An elegant bridal affair with rose gold accents throughout. The bride was surprised with a custom flower crown bar and personalized champagne glasses for all guests."
  },
  { 
    src: portfolio2, 
    category: "Showers", 
    title: "Sweet Baby Shower",
    description: "A pastel-themed baby shower celebration in F-7 Islamabad with custom cake and photo booth.",
    venue: "Private Garden",
    location: "F-7, Islamabad",
    guests: 60,
    date: "October 2023",
    decorations: ["Pastel balloon installation", "Teddy bear centerpieces", "Diaper cake display", "Gender reveal setup", "Wishing tree"],
    services: ["Complete event styling", "Catering coordination", "Games & activities", "Gift table setup", "Event hosting"],
    highlights: "A dreamy pastel garden party celebrating new life. The highlight was a stunning gender reveal moment with 500 butterflies released into the garden."
  },
  { 
    src: portfolio3, 
    category: "Private Events", 
    title: "Romantic Engagement",
    description: "A dreamy engagement setup at Margalla Hills with fairy lights and floral canopy.",
    venue: "Trail 5 Viewpoint",
    location: "Margalla Hills, Islamabad",
    guests: 2,
    date: "September 2023",
    decorations: ["500 fairy lights", "Rose petal heart", "Floral canopy", "Lantern pathway", "Personalized signage"],
    services: ["Surprise coordination", "Setup & cleanup", "Photography arrangement", "Music setup", "Catering"],
    highlights: "A private hilltop proposal at sunset. We secretly transformed the viewpoint into a magical fairy-lit paradise while the couple 'went for a hike.' She said yes!"
  },
  { 
    src: portfolio4, 
    category: "Private Events", 
    title: "Golden Anniversary",
    description: "A 50th anniversary gala at Marriott Islamabad with gold decor and live classical music.",
    venue: "Marriott Hotel",
    location: "Islamabad",
    guests: 200,
    date: "August 2023",
    decorations: ["Gold & ivory theme", "Vintage photo displays", "Floral chandelier", "Custom dance floor", "Memory timeline wall"],
    services: ["Gala planning", "Live music booking", "Catering management", "Guest coordination", "AV setup"],
    highlights: "Fifty years of togetherness celebrated in golden splendor. A live orchestra, a recreated version of their original wedding cake, and a surprise video message from family abroad made this night unforgettable."
  },
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

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
                Our Work
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-6">
                Portfolio
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Browse through our collection of beautifully decorated events and see how we transform spaces into magical celebrations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-gold text-ivory"
                      : "bg-secondary text-muted-foreground hover:bg-gold/10 hover:text-gold"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/80 transition-colors duration-300 flex flex-col items-center justify-center p-4">
                    <span className="text-ivory font-serif text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      {item.title}
                    </span>
                    <span className="text-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                      {item.category}
                    </span>
                    <p className="text-ivory/80 text-xs text-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                      {item.description}
                    </p>
                    <span className="text-gold text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 underline">
                      Click to view details
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTAForm />
      </main>
      <Footer />

      {/* Event Detail Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif">
                  {selectedItem.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Image */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className="text-muted-foreground">{selectedItem.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-gold" />
                    <span className="text-muted-foreground">{selectedItem.guests} Guests</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span className="text-muted-foreground">{selectedItem.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Sparkles className="w-4 h-4 text-gold" />
                    <span className="text-muted-foreground">{selectedItem.category}</span>
                  </div>
                </div>

                {/* Venue */}
                <div>
                  <h4 className="font-semibold mb-2">Venue</h4>
                  <p className="text-muted-foreground">{selectedItem.venue}, {selectedItem.location}</p>
                </div>

                {/* Story */}
                <div>
                  <h4 className="font-semibold mb-2">Event Highlights</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedItem.highlights}</p>
                </div>

                {/* Decorations */}
                <div>
                  <h4 className="font-semibold mb-3">Decorations</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.decorations.map((decor, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm"
                      >
                        {decor}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-semibold mb-3">Services Provided</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.services.map((service, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortfolioPage;
