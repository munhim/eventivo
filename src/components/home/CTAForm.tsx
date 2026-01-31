import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export function CTAForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", eventType: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="section-padding bg-charcoal text-ivory">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Let's Work Together
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-3 mb-6">
              Start Planning Your
              <br />
              <span className="text-gold">Dream Event</span>
            </h2>
            <p className="text-ivory/80 text-lg mb-8">
              Ready to create unforgettable memories? Fill out the form and let's discuss how we can make your special day absolutely magical.
            </p>
            <ul className="space-y-4">
              {[
                "Free initial consultation",
                "Custom design proposals",
                "Dedicated event coordinator",
                "Premium decoration services",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-ivory/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-ivory/5 backdrop-blur-sm rounded-2xl p-8 space-y-6"
            >
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-ivory/10 border-ivory/20 text-ivory placeholder:text-ivory/50 h-12"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-ivory/10 border-ivory/20 text-ivory placeholder:text-ivory/50 h-12"
                />
              </div>

              <div>
                <Select
                  value={formData.eventType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, eventType: value })
                  }
                >
                  <SelectTrigger className="bg-ivory/10 border-ivory/20 text-ivory h-12 [&>span]:text-ivory/50 data-[state=open]:text-ivory">
                    <SelectValue placeholder="Event Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="birthday">Birthday Party</SelectItem>
                    <SelectItem value="engagement">Engagement</SelectItem>
                    <SelectItem value="bridal-shower">Bridal Shower</SelectItem>
                    <SelectItem value="baby-shower">Baby Shower</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Textarea
                  placeholder="Tell us about your event..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="bg-ivory/10 border-ivory/20 text-ivory placeholder:text-ivory/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Get Free Consultation"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
