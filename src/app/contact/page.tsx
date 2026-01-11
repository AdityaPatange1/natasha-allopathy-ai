"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Rat,
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  Building,
  Globe,
  CheckCircle,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@ainktech.com",
      href: "mailto:contact@ainktech.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 800 123 4567",
      href: "tel:+918001234567",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Tech Park, Sector 62, New Delhi, India",
      href: "#",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "24/7 AI Support | Office: 9AM - 6PM IST",
      href: "#",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "enterprise", label: "Enterprise Solutions" },
    { value: "partnership", label: "Partnership" },
    { value: "support", label: "Technical Support" },
    { value: "research", label: "Research Collaboration" },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Message Sent Successfully!
          </h2>
          <p className="text-[var(--text-muted)] mb-6">
            Thank you for contacting AINK Tech. Our team will get back to you
            within 24 hours.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-[var(--primary-light)]">
            <Rat className="w-5 h-5" />
            <span>Natasha will review your message</span>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormState({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                type: "general",
              });
            }}
            className="btn-secondary mt-8"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-[var(--accent)]">
                AINK Tech
              </span>
            </h1>
            <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
              Have questions about Natasha AI or our services? We&apos;re here to
              help. Reach out to our team for any inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="bg-[var(--surface)] rounded-2xl p-8 border border-[var(--border)] mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center">
                    <Rat className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      AINK Tech
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      Para SF India Partner
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)]/30 transition-colors">
                        <item.icon className="w-5 h-5 text-[var(--primary-light)]" />
                      </div>
                      <div>
                        <div className="text-sm text-[var(--text-muted)]">
                          {item.label}
                        </div>
                        <div className="text-white group-hover:text-[var(--primary-light)] transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-[var(--surface)] rounded-2xl p-8 border border-[var(--border)]">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[var(--primary-light)]" />
                  Our Offices
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-[var(--accent)] mt-0.5" />
                    <div>
                      <div className="text-white font-medium">Headquarters</div>
                      <div className="text-sm text-[var(--text-muted)]">
                        New Delhi, India
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-[var(--accent)] mt-0.5" />
                    <div>
                      <div className="text-white font-medium">
                        Research Center
                      </div>
                      <div className="text-sm text-[var(--text-muted)]">
                        Bangalore, India
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-[var(--accent)] mt-0.5" />
                    <div>
                      <div className="text-white font-medium">
                        Defense Division
                      </div>
                      <div className="text-sm text-[var(--text-muted)]">
                        Chandigarh, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-[var(--surface)] rounded-2xl p-8 border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="w-6 h-6 text-[var(--primary-light)]" />
                  <h2 className="text-2xl font-bold text-white">
                    Send us a Message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                      Inquiry Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() =>
                            setFormState({ ...formState, type: type.value })
                          }
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            formState.type === type.value
                              ? "bg-[var(--primary)] text-white"
                              : "bg-[var(--background)] text-[var(--text-muted)] hover:bg-[var(--primary)]/20"
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Your name"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="your@email.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        placeholder="+91 XXX XXX XXXX"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.subject}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            subject: e.target.value,
                          })
                        }
                        placeholder="How can we help?"
                        className="input-field"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell us more about your inquiry..."
                      className="input-field resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
