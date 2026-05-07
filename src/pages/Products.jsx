import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Users, BookOpen, BarChart3, FileText, Globe, MessageSquare } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import GhostLine from "../components/shared/GhostLine";

const products = [
  {
    title: "Xenon Study",
    tagline: "Illuminate Your Learning Path",
    description: "Xenon Study is a next-generation digital learning platform designed to transform how students and professionals acquire knowledge. With interactive study tools, AI-powered content recommendations, and collaborative learning spaces, it provides a comprehensive educational ecosystem.",
    image: "https://media.base44.com/images/public/69f355cbad1c8de4c179d0b2/f560d3ac8_generated_b747dd20.png",
    url: "https://xenonstudy.com",
    features: [
      { icon: Globe, label: "Interactive Learning Modules" },
      { icon: Users, label: "Collaborative Study Spaces" },
      { icon: BarChart3, label: "Progress Analytics" },
    ],
    tech: [".NET Core", "React", "SQL Server"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "The Book App",
    tagline: "Classical Wisdom, Modern Interface",
    description: "The Book App is a revolutionary platform for Arabic book translation by renowned scholars. It offers word-by-word translation with detailed linguistic breakdowns, enabling students and enthusiasts to deeply understand classical Arabic texts. With built-in social features, users can discuss, share insights, and learn collaboratively.",
    image: "https://media.base44.com/images/public/69f355cbad1c8de4c179d0b2/b52a4250c_generated_330bb039.png",
    url: null,
    features: [
      { icon: BookOpen, label: "Word-by-Word Translation" },
      { icon: MessageSquare, label: "Social Discussion Forums" },
      { icon: Users, label: "Scholar-Verified Content" },
    ],
    tech: ["React", "Node.js", "MongoDB"],
    gradient: "from-accent/20 to-accent/5",
  },
  {
    title: "BizManager",
    tagline: "Your Business, Fully Managed",
    description: "BizManager is a complete business management solution that streamlines your operations from end to end. Manage customers, vendors, jobs, invoices, reports, and ledger — all from a single, powerful dashboard. Built for businesses that need clarity, control, and efficiency in every transaction.",
    image: "https://media.base44.com/images/public/69f355cbad1c8de4c179d0b2/a263305b8_generated_43f2a86b.png",
    url: null,
    features: [
      { icon: FileText, label: "Invoice & Ledger Management" },
      { icon: BarChart3, label: "Reports & Analytics" },
      { icon: Users, label: "Customer & Vendor CRM" },
    ],
    tech: [".NET Core", "C#", "Angular", "SQL Server"],
    gradient: "from-primary/20 to-accent/5",
  },
];

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Products"
            title="The Product Trilogy"
            description="Three powerful platforms engineered to transform education, linguistics, and enterprise management."
          />
        </div>
      </section>

      <GhostLine />

      {/* Products */}
      {products.map((product, i) => (
        <React.Fragment key={product.title}>
          <section className="py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={i % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${product.gradient}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={i % 2 === 1 ? "lg:order-1" : ""}
                >
                  <span className="text-primary text-xs font-mono uppercase tracking-[0.2em] mb-3 block">
                    Product {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2">
                    {product.title}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-4">{product.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <div key={feature.label} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <feature.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground text-sm">{feature.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border/50">
                        {t}
                      </span>
                    ))}
                  </div>

                  {product.url && (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-primary/90 transition-all"
                    >
                      Visit Website <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
          {i < products.length - 1 && <GhostLine />}
        </React.Fragment>
      ))}
    </div>
  );
}