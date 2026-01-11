"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Rat,
  Brain,
  Upload,
  Loader2,
  Activity,
  Zap,
  Shield,
  AlertTriangle,
  CheckCircle,
  FileText,
  Pill,
  Heart,
  Eye,
} from "lucide-react";

const neuroscienceCategories = [
  {
    name: "Cognitive Function",
    icon: Brain,
    score: 85,
    status: "good",
    insights: [
      "Memory recall within normal range",
      "Processing speed optimal",
      "Attention span assessment: Good",
    ],
  },
  {
    name: "Mood & Emotion",
    icon: Heart,
    score: 72,
    status: "moderate",
    insights: [
      "Mild stress indicators detected",
      "Emotional regulation: Moderate",
      "Sleep quality may be affecting mood",
    ],
  },
  {
    name: "Motor Function",
    icon: Activity,
    score: 92,
    status: "excellent",
    insights: [
      "Coordination: Excellent",
      "Reaction time: Above average",
      "Fine motor skills: Normal",
    ],
  },
  {
    name: "Sensory Processing",
    icon: Eye,
    score: 88,
    status: "good",
    insights: [
      "Visual processing: Normal",
      "Auditory processing: Good",
      "Proprioception: Normal",
    ],
  },
];

const neuroMedications = [
  {
    category: "Antidepressants",
    drugs: ["SSRIs", "SNRIs", "TCAs", "MAOIs"],
    compatibility: "high",
    notes: "Standard response expected based on genetic profile",
  },
  {
    category: "Anxiolytics",
    drugs: ["Benzodiazepines", "Buspirone", "Beta-blockers"],
    compatibility: "high",
    notes: "Normal metabolism predicted",
  },
  {
    category: "Mood Stabilizers",
    drugs: ["Lithium", "Valproate", "Lamotrigine"],
    compatibility: "moderate",
    notes: "Regular monitoring recommended for lithium levels",
  },
  {
    category: "Antipsychotics",
    drugs: ["Typical", "Atypical"],
    compatibility: "moderate",
    notes: "Monitor for metabolic side effects",
  },
];

export default function NeurosciencePage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const startAnalysis = async () => {
    setIsAnalyzing(true);
    await new Promise((resolve) => setTimeout(resolve, 3500));
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-green-400";
    if (score >= 70) return "text-yellow-400";
    return "text-red-400";
  };

  const getCompatibilityColor = (compatibility: string) => {
    switch (compatibility) {
      case "high":
        return "bg-green-400/20 text-green-400";
      case "moderate":
        return "bg-yellow-400/20 text-yellow-400";
      default:
        return "bg-red-400/20 text-red-400";
    }
  };

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center glow-border">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Neuroscience{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Analysis
              </span>
            </h1>

            <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
              Deep analysis of neurological medications, brain chemistry, and
              cognitive health parameters using advanced AI algorithms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {!showResults ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-[var(--surface)] rounded-2xl p-8 border border-[var(--border)] text-center">
                <Brain className="w-20 h-20 text-indigo-400 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">
                  Neurological Assessment
                </h2>
                <p className="text-[var(--text-muted)] mb-8">
                  Upload your neurological assessment data, EEG reports, or
                  cognitive test results for comprehensive analysis.
                </p>

                <div className="border-2 border-dashed border-[var(--border)] rounded-xl p-8 mb-6 hover:border-indigo-400/50 transition-colors">
                  <Upload className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                  <p className="text-sm text-[var(--text-muted)] mb-4">
                    Upload EEG data, cognitive assessments, or medical reports
                  </p>
                  <label className="btn-secondary inline-flex items-center gap-2 cursor-pointer">
                    <FileText className="w-5 h-5" />
                    Choose File
                    <input type="file" className="hidden" />
                  </label>
                </div>

                <button
                  onClick={startAnalysis}
                  disabled={isAnalyzing}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Analyzing Neural Patterns...
                    </>
                  ) : (
                    <>
                      <Rat className="w-5 h-5" />
                      Start Demo Analysis
                    </>
                  )}
                </button>
              </div>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--border)]">
                  <Brain className="w-8 h-8 text-indigo-400 mb-3" />
                  <h3 className="text-white font-semibold mb-1">Cognitive Mapping</h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    Neural pathway analysis
                  </p>
                </div>
                <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--border)]">
                  <Pill className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="text-white font-semibold mb-1">Drug Response</h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    Neuromedication compatibility
                  </p>
                </div>
                <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--border)]">
                  <Zap className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-white font-semibold mb-1">Brain Activity</h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    Real-time pattern analysis
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Summary */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-6">
                  <Rat className="w-10 h-10 text-indigo-400" />
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Neuroscience Analysis Complete
                    </h2>
                    <p className="text-sm text-[var(--text-muted)]">
                      Comprehensive cognitive and neurological assessment
                    </p>
                  </div>
                </div>

                {/* Category Scores */}
                <div className="grid md:grid-cols-4 gap-4">
                  {neuroscienceCategories.map((category, index) => (
                    <div
                      key={index}
                      className="bg-[var(--background)] rounded-xl p-4 border border-[var(--border)]"
                    >
                      <category.icon className="w-8 h-8 text-indigo-400 mb-3" />
                      <h4 className="text-white font-medium mb-2">{category.name}</h4>
                      <div className={`text-3xl font-bold ${getScoreColor(category.score)}`}>
                        {category.score}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] capitalize">
                        {category.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Insights */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-indigo-400" />
                  Cognitive Insights
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {neuroscienceCategories.map((category, index) => (
                    <div
                      key={index}
                      className="bg-[var(--background)] rounded-xl p-4 border border-[var(--border)]"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <category.icon className="w-5 h-5 text-indigo-400" />
                        <h4 className="text-white font-medium">{category.name}</h4>
                      </div>
                      <ul className="space-y-2">
                        {category.insights.map((insight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            {insight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Medication Compatibility */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Pill className="w-5 h-5 text-purple-400" />
                  Neurological Medication Compatibility
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {neuroMedications.map((med, index) => (
                    <div
                      key={index}
                      className="bg-[var(--background)] rounded-xl p-4 border border-[var(--border)]"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-medium">{med.category}</h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${getCompatibilityColor(
                            med.compatibility
                          )}`}
                        >
                          {med.compatibility.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {med.drugs.map((drug, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-0.5 rounded bg-[var(--surface)] text-[var(--text-muted)]"
                          >
                            {drug}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-[var(--text-muted)]">{med.notes}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Natasha&apos;s Recommendations
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-yellow-400/10 rounded-xl border border-yellow-400/30">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-yellow-400 font-medium">Stress Management</h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        Mild stress indicators detected. Consider incorporating stress-reduction
                        techniques such as meditation, regular exercise, or consulting with a
                        mental health professional.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-green-400/10 rounded-xl border border-green-400/30">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-green-400 font-medium">Cognitive Health</h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        Your cognitive function scores are within healthy ranges. Continue with
                        brain-healthy activities like reading, puzzles, and social engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
