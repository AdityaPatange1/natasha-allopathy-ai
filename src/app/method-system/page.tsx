"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Rat,
  Settings,
  Sliders,
  Brain,
  Heart,
  Shield,
  Zap,
  AlertTriangle,
  CheckCircle,
  Save,
  RotateCcw,
  Stethoscope,
  Pill,
  Activity,
  Thermometer,
  Baby,
  Bone,
  Eye,
  Ear,
} from "lucide-react";

const methodModes = [
  {
    id: "general",
    name: "General Medicine",
    icon: Stethoscope,
    description: "Broad medical inquiries and general health questions",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "cardiology",
    name: "Cardiology",
    icon: Heart,
    description: "Heart conditions, cardiovascular medications, and cardiac care",
    color: "from-red-500 to-pink-500",
  },
  {
    id: "neurology",
    name: "Neurology",
    icon: Brain,
    description: "Neurological conditions, brain health, and psychiatric medications",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: "pediatric",
    name: "Pediatric",
    icon: Baby,
    description: "Child-specific dosing, pediatric conditions, and child health",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "orthopedic",
    name: "Orthopedic",
    icon: Bone,
    description: "Bone health, musculoskeletal conditions, and pain management",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    icon: Eye,
    description: "Eye conditions, ophthalmic medications, and vision care",
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: "ent",
    name: "ENT",
    icon: Ear,
    description: "Ear, nose, throat conditions and related medications",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: "emergency",
    name: "Emergency",
    icon: AlertTriangle,
    description: "Critical care, emergency protocols, and urgent conditions",
    color: "from-red-600 to-red-400",
  },
];

const responseStyles = [
  { id: "concise", name: "Concise", description: "Brief, to-the-point answers" },
  { id: "detailed", name: "Detailed", description: "Comprehensive explanations with context" },
  { id: "technical", name: "Technical", description: "Medical terminology and clinical details" },
  { id: "simplified", name: "Simplified", description: "Easy-to-understand language for patients" },
];

const safetyLevels = [
  { id: "standard", name: "Standard", description: "Regular safety warnings" },
  { id: "enhanced", name: "Enhanced", description: "Additional caution notices" },
  { id: "clinical", name: "Clinical", description: "Healthcare professional mode" },
];

export default function MethodSystemPage() {
  const [selectedMode, setSelectedMode] = useState("general");
  const [responseStyle, setResponseStyle] = useState("detailed");
  const [safetyLevel, setSafetyLevel] = useState("standard");
  const [includeReferences, setIncludeReferences] = useState(true);
  const [includeInteractions, setIncludeInteractions] = useState(true);
  const [includeDosing, setIncludeDosing] = useState(true);
  const [includeWarnings, setIncludeWarnings] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // Simulate saving to localStorage or API
    localStorage.setItem(
      "natasha-config",
      JSON.stringify({
        mode: selectedMode,
        responseStyle,
        safetyLevel,
        includeReferences,
        includeInteractions,
        includeDosing,
        includeWarnings,
      })
    );
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setSelectedMode("general");
    setResponseStyle("detailed");
    setSafetyLevel("standard");
    setIncludeReferences(true);
    setIncludeInteractions(true);
    setIncludeDosing(true);
    setIncludeWarnings(true);
  };

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
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
                <Settings className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Method System{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-[var(--accent)]">
                (MS)
              </span>
            </h1>

            <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
              Configure Natasha to respond according to different medical
              specializations and prescription requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Configuration Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mode Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-[var(--primary-light)]" />
                  Medical Specialization Mode
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {methodModes.map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setSelectedMode(mode.id)}
                      className={`p-4 rounded-xl border transition-all text-left ${
                        selectedMode === mode.id
                          ? "bg-[var(--primary)]/20 border-[var(--primary-light)]"
                          : "bg-[var(--background)] border-[var(--border)] hover:border-[var(--primary)]/50"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${mode.color} flex items-center justify-center mb-3`}
                      >
                        <mode.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-sm font-semibold text-white mb-1">
                        {mode.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] line-clamp-2">
                        {mode.description}
                      </p>
                      {selectedMode === mode.id && (
                        <CheckCircle className="w-4 h-4 text-[var(--primary-light)] mt-2" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Response Style */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)] mt-6">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[var(--accent)]" />
                  Response Style
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {responseStyles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setResponseStyle(style.id)}
                      className={`p-4 rounded-xl border transition-all ${
                        responseStyle === style.id
                          ? "bg-[var(--accent)]/20 border-[var(--accent)]"
                          : "bg-[var(--background)] border-[var(--border)] hover:border-[var(--accent)]/50"
                      }`}
                    >
                      <h3 className="text-sm font-semibold text-white mb-1">
                        {style.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">
                        {style.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Safety Level */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)] mt-6">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  Safety Level
                </h2>

                <div className="grid grid-cols-3 gap-4">
                  {safetyLevels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setSafetyLevel(level.id)}
                      className={`p-4 rounded-xl border transition-all ${
                        safetyLevel === level.id
                          ? "bg-green-500/20 border-green-500"
                          : "bg-[var(--background)] border-[var(--border)] hover:border-green-500/50"
                      }`}
                    >
                      <h3 className="text-sm font-semibold text-white mb-1">
                        {level.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">
                        {level.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Preview Card */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)] mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center">
                    <Rat className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Natasha</h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      Configured Mode
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--text-muted)]">Mode</span>
                    <span className="text-sm text-white font-medium">
                      {methodModes.find((m) => m.id === selectedMode)?.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--text-muted)]">Style</span>
                    <span className="text-sm text-white font-medium capitalize">
                      {responseStyle}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--text-muted)]">Safety</span>
                    <span className="text-sm text-white font-medium capitalize">
                      {safetyLevel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Additional Options */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)] mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Include in Responses
                </h3>

                <div className="space-y-4">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Pill className="w-5 h-5 text-[var(--primary-light)]" />
                      <span className="text-sm text-[var(--text-muted)]">
                        Drug References
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={includeReferences}
                      onChange={(e) => setIncludeReferences(e.target.checked)}
                      className="w-5 h-5 rounded border-[var(--border)] bg-[var(--background)] checked:bg-[var(--primary-light)]"
                    />
                  </label>

                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-[var(--accent)]" />
                      <span className="text-sm text-[var(--text-muted)]">
                        Drug Interactions
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={includeInteractions}
                      onChange={(e) => setIncludeInteractions(e.target.checked)}
                      className="w-5 h-5 rounded border-[var(--border)] bg-[var(--background)] checked:bg-[var(--primary-light)]"
                    />
                  </label>

                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Thermometer className="w-5 h-5 text-orange-400" />
                      <span className="text-sm text-[var(--text-muted)]">
                        Dosing Information
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={includeDosing}
                      onChange={(e) => setIncludeDosing(e.target.checked)}
                      className="w-5 h-5 rounded border-[var(--border)] bg-[var(--background)] checked:bg-[var(--primary-light)]"
                    />
                  </label>

                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                      <span className="text-sm text-[var(--text-muted)]">
                        Safety Warnings
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={includeWarnings}
                      onChange={(e) => setIncludeWarnings(e.target.checked)}
                      className="w-5 h-5 rounded border-[var(--border)] bg-[var(--background)] checked:bg-[var(--primary-light)]"
                    />
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleSave}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {saved ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Saved!
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      Save Configuration
                    </>
                  )}
                </button>
                <button
                  onClick={handleReset}
                  className="btn-secondary w-full flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Reset to Default
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
