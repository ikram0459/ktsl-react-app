import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2, BookOpen, Briefcase } from "lucide-react";
import GhostLine from "../components/shared/GhostLine";

const products = [
  {
    icon: Code2,
    title: "Xenon Study",
    description: "A comprehensive digital learning platform transforming education through interactive study tools and smart content delivery.",
    link: "/products",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: BookOpen,
    title: "The Book App",
    description: "Word-by-word Arabic translation by scholars with social features, bringing classical knowledge to the modern world.",
    link: "/products",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Briefcase,
    title: "BizManager",
    description: "End-to-end business management — customers, vendors, jobs, invoices, reports and ledger — all in one powerful platform.",
    link: "/products",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const stats = [
  { value: "4+", label: "Products" },
  { value: "5+", label: "Portfolio" },
  { value: "10+", label: "Technologies" },
  { value: "5+", label: "Team Members" },
  { value: "100%", label: "Commitment" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69f355cbad1c8de4c179d0b2/07f372733_generated_fb72a2c3.png"
            alt="Abstract crystalline neural network"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(hsl(263 70% 66% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(263 70% 66% / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-primary text-xs font-mono uppercase tracking-[0.3em] mb-6">
              [ Khan Tech ]
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-6">
              Engineering
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                The Future
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              We build transformative software products and deliver world-class development services that push the boundaries of technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-primary/90 transition-all"
              >
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-muted transition-all"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <GhostLine />

      {/* Stats Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-10 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GhostLine />

      {/* Products Preview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs font-mono uppercase tracking-[0.2em] mb-4 block">
              Our Products
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              The Product Trilogy
            </h2>
            <div className="mt-6 mx-auto w-16 h-0.5 bg-gradient-to-r from-primary to-accent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Link
                  to={product.link}
                  className="group block bg-card border border-border/50 rounded-xl p-8 hover:border-primary/30 transition-all duration-500 h-full"
                >
                  <div className={`w-12 h-12 rounded-xl ${product.bgColor} flex items-center justify-center mb-6`}>
                    <product.icon className={`w-6 h-6 ${product.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                    Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GhostLine />

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-card border border-border/50 rounded-2xl p-10 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "radial-gradient(circle at 30% 50%, hsl(263 70% 66%) 0%, transparent 50%), radial-gradient(circle at 70% 50%, hsl(187 92% 41%) 0%, transparent 50%)"
              }}
            />
            <div className="relative">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Build Something Great?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
                Let's discuss your next project and bring your vision to life.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium text-sm hover:bg-primary/90 transition-all"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}