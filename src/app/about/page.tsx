"use client";

import { motion } from "framer-motion";
import {
  Rat,
  Shield,
  Zap,
  Globe,
  Award,
  Users,
  Target,
  Heart,
  Code,
  Brain,
  Dna,
  Activity,
} from "lucide-react";

const team = [
  {
    name: "Dr. Arun Sharma",
    role: "Chief Medical Officer",
    description:
      "20+ years in clinical pharmacology and drug interaction research.",
  },
  {
    name: "Priya Patel",
    role: "Lead AI Engineer",
    description:
      "PhD in Machine Learning, specializing in medical AI systems.",
  },
  {
    name: "Vikram Singh",
    role: "Head of Research",
    description:
      "Former DRDO scientist, expert in genetic analysis algorithms.",
  },
  {
    name: "Dr. Meera Krishnan",
    role: "Neuroscience Director",
    description:
      "Specialist in brain wave analysis and cognitive health assessment.",
  },
];

const milestones = [
  { year: "2020", event: "AINK Tech founded in South Mumbai" },
  { year: "2021", event: "Natasha AI v1.0 launched" },
  { year: "2022", event: "Partnered with Para SF India" },
  { year: "2023", event: "10M+ analyses milestone" },
  { year: "2024", event: "GPT-5.2 integration completed" },
  { year: "2025", event: "Global expansion initiated" },
];

const values = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "Military-grade encryption and HIPAA compliance for all medical data.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "99.9% accuracy in drug interaction detection and medical analysis.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "Multi-ethnic support for diverse genetic populations worldwide.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Cutting-edge AI technology pushing boundaries of medical intelligence.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center glow-border">
                <Rat className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-[var(--accent)]">
                AINK Tech
              </span>
            </h1>

            <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
              Pioneering AI-powered healthcare intelligence for India and
              beyond. Our mission is to democratize access to advanced medical
              analysis through cutting-edge artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[var(--surface)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-[var(--text-muted)]">
                <p>
                  AINK Tech was born from a vision to revolutionize healthcare
                  accessibility in India. Founded in 2020 by a team of medical
                  professionals, AI engineers, and defense researchers, we set
                  out to create a platform that could provide military-grade
                  precision in medical analysis to everyone.
                </p>
                <p>
                  Our flagship product, Natasha AI, named after the concept of
                  intelligent adaptability, combines the latest in large
                  language models with specialized medical knowledge bases to
                  deliver accurate, reliable healthcare intelligence.
                </p>
                <p>
                  Today, we proudly serve healthcare professionals, research
                  institutions, and individuals across India, with a special
                  focus on supporting Para SF India and defense medical services
                  with our enterprise solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[var(--surface)] rounded-2xl p-8 border border-[var(--border)]">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Key Milestones
                </h3>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className="flex items-start gap-4">
                      <div className="w-16 flex-shrink-0">
                        <span className="text-[var(--primary-light)] font-mono font-bold">
                          {milestone.year}
                        </span>
                      </div>
                      <div className="flex-1 pb-4 border-b border-[var(--border)] last:border-0">
                        <p className="text-[var(--text-muted)]">
                          {milestone.event}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
              The principles that guide everything we do at AINK Tech.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[var(--surface)] rounded-xl border border-[var(--border)] card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[var(--primary-light)]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[var(--surface)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
              Meet the experts driving innovation at AINK Tech.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[var(--surface)] rounded-xl border border-[var(--border)] card-hover text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-[var(--primary-light)] mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Technology Stack
            </h2>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
              Built with cutting-edge technologies for maximum performance and
              reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Brain, label: "GPT-5.2", desc: "Latest AI Model" },
              { icon: Dna, label: "GenomicsDB", desc: "Genetic Analysis" },
              { icon: Activity, label: "RealTime ML", desc: "Live Processing" },
              { icon: Shield, label: "AES-256", desc: "Encryption" },
              { icon: Globe, label: "Edge CDN", desc: "Global Network" },
              { icon: Code, label: "TypeScript", desc: "Type Safety" },
              { icon: Zap, label: "Next.js 15", desc: "Framework" },
              { icon: Heart, label: "Para SF", desc: "Defense Grade" },
            ].map((tech, index) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-4 bg-[var(--surface)] rounded-xl border border-[var(--border)] text-center card-hover"
              >
                <tech.icon className="w-8 h-8 text-[var(--primary-light)] mx-auto mb-2" />
                <div className="text-white font-semibold">{tech.label}</div>
                <div className="text-xs text-[var(--text-muted)]">
                  {tech.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--surface)]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Rat className="w-16 h-16 text-[var(--accent)] mx-auto mb-6 rat-bounce" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience Natasha?
            </h2>
            <p className="text-[var(--text-muted)] mb-8">
              Join the healthcare revolution powered by advanced AI technology.
            </p>
            <a
              href="/ask"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Rat className="w-5 h-5" />
              Start Using Natasha AI
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
