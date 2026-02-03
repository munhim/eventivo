import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";

export function ConsultationCard() {
  return (
    <section className="pt-24 pb-4 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/20 rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">
                  Book Your First Consultation
                </h3>
                <p className="text-muted-foreground mt-1">
                  Get a free consultation and let us bring your dream event to life!
                </p>
              </div>
            </div>
            <Button variant="gold" size="lg" asChild className="flex items-center gap-2">
              <Link to="/contact">
                <Calendar className="w-5 h-5" />
                Book Now - It's Free!
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
