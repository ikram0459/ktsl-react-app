import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import SectionHeading from "../components/shared/SectionHeading";
import GhostLine from "../components/shared/GhostLine";
import SEO from "../components/SEO";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@khantechservices.online" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+353892444612" },
  { icon: MapPin, label: "Location", value: "Dublin, Ireland" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    toast.success("Message sent successfully! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
    setSending(false);
  };

  return (
    <div>
      <SEO
        title="Contact | Khan Tech"
        description="Get in touch with Khan Tech Services to discuss custom software, AI products, and digital transformation for your business."
        keywords="contact Khan Tech, software inquiry, request demo, business inquiry, digital services"
        url="https://www.khantechservices.online/#/contact"
        image="https://media.base44.com/images/public/69f355cbad1c8de4c179d0b2/41e80803d_generated_f75401f5.png"
      />
      {/* Hero */}
      <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69f355cbad1c8de4c179d0b2/41e80803d_generated_f75401f5.png"
            alt="Technology services"
            className="w-full h-full object-cover opacity-10"
          />
      </div>
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Contact Us"
            title="Get In Touch"
            description="Have a project in mind? Let's talk about how we can help bring your vision to life."
          />
        </div>
      </section>

      <GhostLine />

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3 id="lets-start-conversation" className="text-2xl font-bold text-foreground mb-6">
                Let's start a conversation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Whether you need a custom web application, mobile app, or a complete business management solution, our team is ready to help.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{info.label}</p>
                      <p className="text-foreground font-medium text-sm">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSenvsfGoXdYlA4OlSAw5QLYGe5x4vdlDEVp0evDFNvV0OUXkg/viewform" 
width="100%" height="1130" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}