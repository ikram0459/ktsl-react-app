import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Code2, BookOpen, Briefcase } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import GhostLine from "../components/shared/GhostLine";

const team = [
  { name: "Ikram Niazi", role: "Founder & Director", initials: "IN", url: "https://linktr.ee/ikram0459" },
  { name: "Ifraz Khan", role: "AI Expert", initials: "IK", url: "https://linktr.ee/ifrazkhan" },
  { name: "Sikander Hayat", role: "SAP Engineer", initials: "SH", url: "https://linktr.ee/sikanderhayat" },
  { name: "Dr. Farah", role: "User Experience Designer", initials: "FK", url: "https://linktr.ee/farahkhan" },
];

const productHighlights = [
  {
    icon: Code2,
    title: "Xenon Study",
    description: "A comprehensive digital learning platform that transforms education through interactive tools, AI-powered content delivery, and collaborative study environments.",
  },
  {
    icon: BookOpen,
    title: "The Book App",
    description: "Bridging centuries of Arabic scholarship with modern technology — word-by-word translations by scholars with built-in social learning features.",
  },
  {
    icon: Briefcase,
    title: "BizManager",
    description: "The all-in-one business management platform handling customers, vendors, jobs, invoices, ledger, reports, and service tracking.",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69f355cbad1c8de4c179d0b2/41e80803d_generated_f75401f5.png"
            alt="Vision and innovation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="About Us"
            title="The Architects"
            description="Meet the team behind Khan Tech — engineers, visionaries, and builders shaping the future of software."
          />
        </div>
      </section>

      <GhostLine />

      {/* Vision */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <span className="text-primary text-xs font-mono uppercase tracking-[0.2em]">Our Vision</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6 leading-tight">
                To engineer software that doesn't just solve problems —{" "}
                <span className="text-primary">it redefines possibilities.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Khan Tech, we believe technology should empower, educate, and elevate. Our mission is to build products and deliver services that transform how people learn, communicate, and conduct business.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded by Ikram Niazi, Khan Tech brings together a passionate team of developers, designers, and strategists committed to delivering excellence in every line of code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative bg-card border border-border/50 rounded-2xl p-10">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-5 h-5 text-accent" />
                  <span className="text-accent text-xs font-mono uppercase tracking-[0.2em]">Our Mission</span>
                </div>
                <ul className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Build transformative products across education, linguistics, and enterprise domains
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Deliver world-class development services using cutting-edge technologies
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Empower businesses with intelligent tools for growth and efficiency
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    Bridge classical knowledge with modern technology for global access
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <GhostLine />

      {/* Products Overview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs font-mono uppercase tracking-[0.2em] mb-4 block">
              What We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Our Product Ecosystem
            </h2>
            <div className="mt-6 mx-auto w-16 h-0.5 bg-gradient-to-r from-primary to-accent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productHighlights.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border/50 rounded-xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{product.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GhostLine />

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xs font-mono uppercase tracking-[0.2em] mb-4 block">
              The People
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Meet Our Team
            </h2>
            <div className="mt-6 mx-auto w-16 h-0.5 bg-gradient-to-r from-primary to-accent" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-border/50 group-hover:border-primary/30 transition-all duration-500">
                    <span className="text-3xl font-bold text-foreground font-mono">{member.initials}</span>
                  </div>
                  {/* Ghost line connector */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-primary/40 to-transparent ghost-line" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {member.url ? (
                    <a
                      href={member.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {member.name}
                    </a>
                  ) : (
                    member.name
                  )}
                </h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}