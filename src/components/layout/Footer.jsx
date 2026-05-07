import React from "react";
import { Link } from "react-router-dom";

const socialLinks = [
  { label: "Facebook", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  )},
  { label: "X", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  )},
  { label: "Instagram", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
  )},
  { label: "YouTube", icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/><path fill="hsl(220,40%,2%)" d="M9.545 15.568V8.432L15.818 12z"/></svg>
  )},
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      {/* Ghost line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent ghost-line" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm font-mono">KT</span>
              </div>
              <span className="text-foreground font-bold text-lg tracking-tight">Khan Tech</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Engineering the future through innovative software solutions. Building products that transform industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/products" className="block text-muted-foreground text-sm hover:text-primary transition-colors">Products</Link>
              <Link to="/services" className="block text-muted-foreground text-sm hover:text-primary transition-colors">Services</Link>
              <Link to="/about" className="block text-muted-foreground text-sm hover:text-primary transition-colors">About Us</Link>
              <Link to="/contact" className="block text-muted-foreground text-sm hover:text-primary transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">Legal</h4>
            <div className="space-y-3">
              <Link to="/privacy" className="block text-muted-foreground text-sm hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="block text-muted-foreground text-sm hover:text-primary transition-colors">Terms of Use</Link>
              <Link to="/contact" className="block text-muted-foreground text-sm hover:text-primary transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Social Icons - Center */}
        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href="#"
              aria-label={social.label}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 pt-8">
          <p className="text-center text-muted-foreground text-xs font-mono tracking-wider">
            Khan Tech Services powered by Ikram Niazi © 2026 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}