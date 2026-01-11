"use client";

import Link from "next/link";
import {
  Rat,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Shield,
  Heart,
  Zap,
} from "lucide-react";

const footerLinks = {
  product: [
    { href: "/ask", label: "Ask Natasha" },
    { href: "/analysis/prescription", label: "Prescription Analysis" },
    { href: "/analysis/genetic", label: "Genetic Analysis" },
    { href: "/analysis/blood", label: "Blood Analysis" },
    { href: "/method-system", label: "Method System" },
  ],
  analysis: [
    { href: "/analysis/neuroscience", label: "Neuroscience" },
    { href: "/analysis/brain-waves", label: "Brain Waves" },
    { href: "/analysis/height", label: "Height Analysis" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center glow-border">
                  <Rat className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--accent)] rounded-full pulse-glow" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white glow-text">
                  AINK Tech
                </span>
                <span className="text-xs text-[var(--text-muted)] tracking-widest uppercase">
                  Natasha AI Medical Assistant
                </span>
              </div>
            </Link>

            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 max-w-md">
              Advanced AI-powered medical analysis platform. Natasha, our
              intelligent rat assistant, provides comprehensive insights on
              allopathy medications, prescriptions, and health analytics using
              cutting-edge machine learning technology.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <Shield className="w-4 h-4 text-[var(--primary-light)]" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <Zap className="w-4 h-4 text-[var(--accent)]" />
                <span>AI Powered</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Para SF India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--primary-light)] hover:bg-[var(--primary)]/20 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--primary-light)] hover:bg-[var(--primary)]/20 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--primary-light)] hover:bg-[var(--primary)]/20 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-muted)] text-sm hover:text-[var(--primary-light)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Analysis
            </h4>
            <ul className="space-y-3">
              {footerLinks.analysis.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-muted)] text-sm hover:text-[var(--primary-light)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-muted)] text-sm hover:text-[var(--primary-light)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <Mail className="w-4 h-4" />
                <span>contact@ainktech.com</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <Phone className="w-4 h-4" />
                <span>+91 800 123 4567</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <MapPin className="w-4 h-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[var(--text-muted)] text-xs">
              &copy; {new Date().getFullYear()} AINK Tech. All rights reserved.
              Powered by Natasha AI.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-[var(--text-muted)]">
                Built with{" "}
                <Heart className="w-3 h-3 inline text-red-400 mx-1" /> for Para
                SF India
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400">System Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
