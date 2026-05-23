import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Users, BookOpen, BarChart3, FileText, Globe, MessageSquare, Github } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import GhostLine from "../components/shared/GhostLine";
import SEO from "../components/SEO";

const portfolioItems = [
  {
    title: "BookWise Accountants",
    tagline: "Modern Accountancy Experience",
    description: "A react based modern looking accountancy website listing services, financial calculators and AI based assistance.",
    image: new URL("../media/bookwise1.jpg", import.meta.url).href,
    demoUrl: "https://www.bookwiseaccountants.ie",
    features: [
      { icon: Globe, label: "Responsive Design" },
      { icon: Users, label: "AI Assistance" },
      { icon: FileText, label: "Financial Calculators" },
    ],
    tech: ["React", "DeepSeek", "Tailwind CSS"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Xenon Study",
    tagline: "Illuminate Your Learning Path",
    description: "Xenon Study is a next-generation digital learning platform designed to transform how students and professionals acquire knowledge. With interactive study tools, AI-powered content recommendations, and collaborative learning spaces, it provides a comprehensive educational ecosystem.",
    image: new URL("../media/xenon1.jpg", import.meta.url).href,
    url: "https://xenonstudy.com",
    demoUrl: "https://xenonstudy.com",
    features: [
      { icon: Globe, label: "Interactive Learning Modules" },
      { icon: Users, label: "Collaborative Study Spaces" },
      { icon: BarChart3, label: "Progress Analytics" },
    ],
    tech: ["NodeJS", "React", "PostGreSQL"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "The Book App",
    tagline: "Classical Wisdom, Modern Interface",
    description: "The Book (Al-Kitab) App is a revolutionary platform for Al-Kitab (Quran) & Other Arabic book translation by renowned scholars. It offers word-by-word translation with detailed linguistic breakdowns, enabling students and enthusiasts to deeply understand classical Arabic texts. With built-in social features, users can discuss, share insights, and learn collaboratively.",
    image: new URL("../media/thebook1.png", import.meta.url).href,
    url: null,
    features: [
      { icon: BookOpen, label: "AI Search & Word-by-Word Translation" },
      { icon: MessageSquare, label: "Social Discussion Forums" },
      { icon: Users, label: "Scholar-Verified Content" },
    ],
    tech: ["Angular", "NodeJS", "SQLite"],
    gradient: "from-accent/20 to-accent/5",
  },
  {
    title: "BizManager",
    tagline: "Your Business, Fully Managed",
    description: "BizManager is a complete business management solution that streamlines your operations from end to end. Manage customers, vendors, jobs, invoices, reports, and ledger — all from a single, powerful dashboard. Built for businesses that need clarity, control, and efficiency in every transaction.",
    image: new URL("../media/bizmanager2.png", import.meta.url).href,
    url: null,
    features: [
      { icon: FileText, label: "Invoice & Ledger Management" },
      { icon: BarChart3, label: "AI Assistance, Reports & Analytics" },
      { icon: Users, label: "Customer & Vendor CRM" },
    ],
    tech: ["NodeJS", "React", "PostGreSQL"],
    gradient: "from-primary/20 to-accent/5",
  },
  {
    title: "CricketScorer",
    tagline: "Your Live Match, Fully Managed",
    description: "CricketScorer is a complete cricket scoring scolution that provides stats, analytics and live streaming along with scoring to viewers. All from a single, powerful dashboard. Built for cricket enthusiasts. Forget about scoring in mind or paper, go Digital.",
    image: new URL("../media/cricketscorer1.png", import.meta.url).href,
    url: null,
    features: [
      { icon: FileText, label: "Live Cricket Scoring" },
      { icon: BarChart3, label: "AI, Reports & Analytics" },
      { icon: Users, label: "Live Streaming Integration" },
    ],
    tech: ["NodeJS", "React", "PostGreSQL"],
    gradient: "from-primary/20 to-accent/5",
  },
];

export default function Portfolio() {
  const navigate = useNavigate();

  return (
    <div>
      <SEO
        title="Portfolio | Khan Tech"
        description="View Khan Tech Services portfolio showcasing modern accountancy websites, digital learning platforms, business management solutions, and live cricket scoring apps."
        keywords="portfolio, case studies, web applications, digital products, Khan Tech"
        url="https://www.khantechservices.online/#/portfolio"
        image="https://media.base44.com/images/public/69f355cbad1c8de4c179d0b2/c9ca564e5_generated_f9f3af8e.png"
      />
      {/* Hero */}
      <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69f355cbad1c8de4c179d0b2/c9ca564e5_generated_f9f3af8e.png"
            alt="Technology services"
            className="w-full h-full object-cover opacity-20"
          />
      </div>
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="My Portfolio"
            title="Featured Apps"
            description="A showcase of my recent work, demonstrating expertise in full-stack development, UI/UX design, and innovative solutions."
          />
        </div>
      </section>

      <GhostLine />

      {/* Portfolio Items */}
      {portfolioItems.map((item, i) => (
        <React.Fragment key={item.title}>
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
                  <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient}`}>
                    <img
                      src={item.image}
                      alt={item.title}
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
                    Project {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-4">{item.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {item.features.map((feature) => (
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
                    {item.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border/50">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {item.demoUrl && (
                      <a
                        href={item.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-primary/90 transition-all"
                      >
                        View App <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {!item.demoUrl && (
                      <button
                        onClick={() => {
                          navigate("/contact");
                          setTimeout(() => {
                            const element = document.getElementById("lets-start-conversation");
                            element?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }, 100);
                        }}
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-primary/90 transition-all"
                      >
                        Request demo / more info <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          {i < portfolioItems.length - 1 && <GhostLine />}
        </React.Fragment>
      ))}
    </div>
  );
}