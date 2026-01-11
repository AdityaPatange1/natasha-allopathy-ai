"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Rat,
  MessageSquare,
  FileText,
  Dna,
  Droplets,
  Brain,
  Activity,
  Ruler,
  Shield,
  Zap,
  Clock,
  ArrowRight,
  Sparkles,
  Target,
  Users,
  Award,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Ask Natasha",
    description:
      "Get instant answers about allopathy medications, drug interactions, and treatment options from our AI-powered rat assistant.",
    href: "/ask",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Prescription Analysis",
    description:
      "Upload your prescriptions and receive detailed analysis, potential interactions, and dosage recommendations.",
    href: "/analysis/prescription",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Dna,
    title: "Genetic Analysis",
    description:
      "Understand how your genetic makeup affects drug metabolism and treatment effectiveness.",
    href: "/analysis/genetic",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Droplets,
    title: "Blood Analysis",
    description:
      "Comprehensive blood work interpretation with AI-driven insights and health recommendations.",
    href: "/analysis/blood",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Brain,
    title: "Neuroscience",
    description:
      "Deep analysis of neurological medications, brain chemistry, and cognitive health parameters.",
    href: "/analysis/neuroscience",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Ruler,
    title: "Anthropometric Analysis",
    description:
      "Height, body composition, and demographic-specific health insights across genetic populations.",
    href: "/analysis/height",
    color: "from-amber-500 to-yellow-500",
  },
];

const stats = [
  { value: "10M+", label: "Analyses Completed" },
  { value: "500K+", label: "Active Users" },
  { value: "99.9%", label: "Accuracy Rate" },
  { value: "24/7", label: "AI Availability" },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-sm text-[var(--text-muted)]">
                Powered by GPT-5.2 Technology
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-white">Meet </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-[var(--accent)] glow-text">
                Natasha
              </span>
              <br />
              <span className="text-white">Your Medical AI </span>
              <span className="inline-flex items-center">
                <Rat className="w-12 h-12 sm:w-16 sm:h-16 text-[var(--accent)] rat-bounce ml-2" />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto mb-10"
            >
              Advanced AI-powered medical analysis platform. Get comprehensive
              insights on allopathy medications, prescriptions, genetic
              analysis, and health analytics with enterprise-grade accuracy.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/ask"
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                <Rat className="w-5 h-5" />
                Ask Natasha Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-12"
            >
              <div className="flex items-center gap-2 text-[var(--text-muted)]">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--text-muted)]">
                <Zap className="w-5 h-5 text-[var(--accent)]" />
                <span className="text-sm">Real-time Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--text-muted)]">
                <Clock className="w-5 h-5 text-[var(--primary-light)]" />
                <span className="text-sm">24/7 Available</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--surface)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-[var(--accent)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Comprehensive Medical Analysis
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto"
            >
              From prescription analysis to genetic insights, Natasha provides
              AI-powered healthcare intelligence for informed medical decisions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={feature.href}>
                  <div className="group h-full p-6 bg-[var(--surface)] rounded-xl border border-[var(--border)] card-hover">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[var(--primary-light)] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[var(--primary-light)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-[var(--surface)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-[var(--accent)]">
                  AINK Tech
                </span>
                ?
              </h2>
              <p className="text-[var(--text-muted)] mb-8">
                Built with precision for Para SF India, our platform combines
                cutting-edge AI technology with medical expertise to deliver
                unparalleled healthcare intelligence.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-[var(--primary-light)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Precision Analysis
                    </h4>
                    <p className="text-sm text-[var(--text-muted)]">
                      Military-grade accuracy in medical data interpretation and
                      drug interaction detection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Multi-ethnic Support
                    </h4>
                    <p className="text-sm text-[var(--text-muted)]">
                      Tailored analysis for Aryan, Dravidian, African, Indo-Aryan, and
                      other genetic populations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Enterprise Grade
                    </h4>
                    <p className="text-sm text-[var(--text-muted)]">
                      Production-ready platform with 99.99% uptime and
                      enterprise security standards.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-[var(--surface)] rounded-2xl p-8 border border-[var(--border)] glow-border">
                {/* Natasha Chat Preview */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center">
                    <Rat className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Natasha AI</div>
                    <div className="text-xs text-green-400 flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      Online
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[var(--background)] rounded-lg p-4 text-sm text-[var(--text-muted)]">
                    What are the interactions between Metformin and Lisinopril?
                  </div>
                  <div className="bg-[var(--primary)]/20 rounded-lg p-4 text-sm text-white border-l-2 border-[var(--primary-light)]">
                    <Rat className="w-4 h-4 text-[var(--accent)] inline mr-2" />
                    Great question! Metformin and Lisinopril are commonly
                    prescribed together and generally have a favorable
                    interaction profile. However, monitoring kidney function is
                    recommended as both medications can affect renal health...
                    <span className="typing-cursor"></span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--accent)]/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--primary)]/10 rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 rounded-2xl p-12 border border-[var(--border)] relative overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 grid-pattern opacity-30" />

            <div className="relative">
              <Rat className="w-16 h-16 text-[var(--accent)] mx-auto mb-6 rat-bounce" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Experience AI-Powered Healthcare?
              </h2>
              <p className="text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
                Join thousands of healthcare professionals and patients who trust
                Natasha for accurate medical insights and analysis.
              </p>
              <Link
                href="/ask"
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                <Rat className="w-5 h-5" />
                Start Asking Natasha
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
