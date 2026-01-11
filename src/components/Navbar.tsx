"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Rat,
  Home,
  Info,
  Mail,
  Settings,
  MessageSquare,
  FileText,
  Dna,
  Droplets,
  Brain,
  Activity,
  Ruler,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/ask", label: "Ask Natasha", icon: MessageSquare },
  {
    label: "Analysis",
    icon: Activity,
    submenu: [
      { href: "/analysis/prescription", label: "Prescription", icon: FileText },
      { href: "/analysis/genetic", label: "Genetic", icon: Dna },
      { href: "/analysis/blood", label: "Blood", icon: Droplets },
      { href: "/analysis/neuroscience", label: "Neuroscience", icon: Brain },
      { href: "/analysis/brain-waves", label: "Brain Waves", icon: Activity },
      { href: "/analysis/height", label: "Height Analysis", icon: Ruler },
    ],
  },
  { href: "/method-system", label: "Method System", icon: Settings },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--surface)]/95 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center glow-border">
                <Rat className="w-6 h-6 text-white group-hover:rat-wiggle" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--accent)] rounded-full pulse-glow" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white glow-text">
                AINK Tech
              </span>
              <span className="text-[10px] text-[var(--text-muted)] tracking-widest uppercase">
                Natasha AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.submenu ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenSubmenu(link.label)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      openSubmenu === link.label
                        ? "bg-[var(--primary)]/20 text-[var(--primary-light)]"
                        : "text-[var(--text-muted)] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${
                        openSubmenu === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSubmenu === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-[var(--surface)] border border-[var(--border)] rounded-lg shadow-xl overflow-hidden fade-in">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className={`flex items-center gap-3 px-4 py-3 text-sm transition-all duration-300 ${
                            isActive(sublink.href)
                              ? "bg-[var(--primary)]/20 text-[var(--primary-light)] border-l-2 border-[var(--primary-light)]"
                              : "text-[var(--text-muted)] hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <sublink.icon className="w-4 h-4" />
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(link.href!)
                      ? "bg-[var(--primary)]/20 text-[var(--primary-light)] glow-border"
                      : "text-[var(--text-muted)] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/ask"
              className="btn-primary inline-flex items-center gap-2 text-sm"
            >
              <Rat className="w-4 h-4" />
              Ask Natasha
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[var(--surface)] border-t border-[var(--border)] fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.label}>
                  <button
                    onClick={() =>
                      setOpenSubmenu(
                        openSubmenu === link.label ? null : link.label
                      )
                    }
                    className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-white hover:bg-white/5 transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <link.icon className="w-5 h-5" />
                      {link.label}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openSubmenu === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSubmenu === link.label && (
                    <div className="ml-4 mt-1 space-y-1 border-l border-[var(--border)] pl-4">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all ${
                            isActive(sublink.href)
                              ? "bg-[var(--primary)]/20 text-[var(--primary-light)]"
                              : "text-[var(--text-muted)] hover:text-white"
                          }`}
                        >
                          <sublink.icon className="w-4 h-4" />
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive(link.href!)
                      ? "bg-[var(--primary)]/20 text-[var(--primary-light)]"
                      : "text-[var(--text-muted)] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4">
              <Link
                href="/ask"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full inline-flex items-center justify-center gap-2 text-sm"
              >
                <Rat className="w-4 h-4" />
                Ask Natasha
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
