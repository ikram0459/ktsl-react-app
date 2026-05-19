import React from "react";
import { motion } from "framer-motion";
import { Monitor, Smartphone, Globe, Database, Code2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/shared/SectionHeading";
import GhostLine from "../components/shared/GhostLine";

const technologies = [
  { name: ".NET Core", category: "Backend" },
  { name: "C#", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "HTML5/CSS3", category: "Frontend" },
  { name: "SQL Server", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "CouchDB", category: "NoSQL" },
  { name: "MySQL", category: "Database" },
  { name: "DeepSeek", category: "AI" },
  { name: "Gemini", category: "AI" },
  { name: "SAP Fiori", category: "SAP" },
  { name: "SAP ABAP", category: "SAP" },
  { name: "SAP Hana", category: "SAP" },
];

const services = [
  {
    icon: Monitor,
    title: "Web Application Development",
    description: "Full-stack web applications built with modern frameworks and best practices. From complex enterprise systems to elegant SaaS platforms.",
    techs: [".NET Core", "C#", "Java", "PHP", "React", "Angular", "Node.js"],
  },
  {
    icon: Globe,
    title: "Static Website Development",
    description: "High-performance, SEO-optimized static websites that load instantly. Perfect for landing pages, portfolios, and business websites.",
    techs: ["React", "HTML/CSS", "Angular", "EzPublish", "WordPress"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform and native mobile applications for iOS and Android. Delivering seamless experiences on every device.",
    techs: ["React Native", "Flutter", ".NET MAUI"],
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Scalable database design and optimization using the latest relational and NoSQL databases for maximum performance.",
    techs: ["SQL Server", "PostgreSQL", "CouchDB", "MySQL"],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69f355cbad1c8de4c179d0b2/c9ca564e5_generated_f9f3af8e.png"
            alt="Technology services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="The Stack Engine"
            description="We deliver end-to-end software development services using cutting-edge technologies and proven methodologies."
          />
        </div>
      </section>

      <GhostLine />

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card border border-border/50 rounded-xl p-8 hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GhostLine />

      {/* Tech Grid - Periodic Table Style */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs font-mono uppercase tracking-[0.2em] mb-4 block">
              Technology Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Our Technical Arsenal
            </h2>
            <div className="mt-6 mx-auto w-16 h-0.5 bg-gradient-to-r from-primary to-accent" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group relative bg-card border border-border/50 rounded-xl p-6 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                <span className="text-xs font-mono text-muted-foreground/50 absolute top-3 right-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="text-center">
                  <Code2 className="w-6 h-6 text-primary mx-auto mb-3 group-hover:text-accent transition-colors" />
                  <h4 className="text-foreground font-semibold text-sm mb-1">{tech.name}</h4>
                  <span className="text-xs text-muted-foreground">{tech.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GhostLine />

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
              Let's discuss how we can bring your vision to life with the right technology stack.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium text-sm hover:bg-primary/90 transition-all"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}