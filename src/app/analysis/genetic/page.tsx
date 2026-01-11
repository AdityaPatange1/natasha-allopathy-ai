"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Rat,
  Dna,
  Upload,
  Loader2,
  CheckCircle,
  AlertTriangle,
  Info,
  FileText,
  Activity,
  Pill,
  Shield,
} from "lucide-react";

const geneticMarkers = [
  {
    gene: "CYP2D6",
    status: "Normal Metabolizer",
    description: "Standard drug metabolism for most medications",
    drugs: ["Codeine", "Tramadol", "Tamoxifen", "Antidepressants"],
    recommendation: "Standard dosing typically appropriate",
  },
  {
    gene: "CYP2C19",
    status: "Intermediate Metabolizer",
    description: "Reduced enzyme activity affecting certain medications",
    drugs: ["Clopidogrel", "Omeprazole", "Some antidepressants"],
    recommendation: "Consider alternative medications or dose adjustments",
  },
  {
    gene: "VKORC1",
    status: "Sensitive",
    description: "Increased sensitivity to warfarin",
    drugs: ["Warfarin", "Other vitamin K antagonists"],
    recommendation: "Lower warfarin doses typically required",
  },
  {
    gene: "SLCO1B1",
    status: "Decreased Function",
    description: "Higher risk of statin-related muscle effects",
    drugs: ["Simvastatin", "Atorvastatin", "Other statins"],
    recommendation: "Lower statin doses or alternative medications",
  },
];

const pharmacogenomicInsights = [
  {
    category: "Pain Management",
    icon: Activity,
    insights: [
      "Standard response to most analgesics",
      "Normal codeine metabolism - effective for pain relief",
      "No dosage adjustments needed for NSAIDs",
    ],
  },
  {
    category: "Cardiovascular",
    icon: Pill,
    insights: [
      "Reduced clopidogrel activation - consider alternatives",
      "Warfarin sensitivity - start with lower doses",
      "Statin myopathy risk - monitor closely",
    ],
  },
  {
    category: "Mental Health",
    icon: Dna,
    insights: [
      "Normal SSRI metabolism expected",
      "Standard response to benzodiazepines",
      "No genetic contraindications for common antidepressants",
    ],
  },
];

export default function GeneticAnalysisPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const startAnalysis = async () => {
    setIsAnalyzing(true);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    setIsAnalyzing(false);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center glow-border">
                <Dna className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Genetic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Analysis
              </span>
            </h1>

            <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
              Discover how your genetic makeup affects drug metabolism and
              treatment effectiveness with AI-powered pharmacogenomic analysis.
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
              {/* Upload Section */}
              <div className="bg-[var(--surface)] rounded-2xl p-8 border border-[var(--border)] text-center">
                <Dna className="w-20 h-20 text-green-400 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">
                  Upload Genetic Data
                </h2>
                <p className="text-[var(--text-muted)] mb-8">
                  Upload your genetic testing results (23andMe, Ancestry, or
                  clinical reports) for comprehensive pharmacogenomic analysis.
                </p>

                <div className="border-2 border-dashed border-[var(--border)] rounded-xl p-8 mb-6 hover:border-green-400/50 transition-colors">
                  <Upload className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <p className="text-sm text-[var(--text-muted)] mb-4">
                    Drag and drop your genetic data file or click to browse
                  </p>
                  <label className="btn-secondary inline-flex items-center gap-2 cursor-pointer">
                    <FileText className="w-5 h-5" />
                    Choose File
                    <input type="file" className="hidden" accept=".txt,.csv,.json" />
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
                      Analyzing Genetic Markers...
                    </>
                  ) : (
                    <>
                      <Rat className="w-5 h-5" />
                      Start Demo Analysis
                    </>
                  )}
                </button>

                <p className="text-xs text-[var(--text-muted)] mt-4">
                  Your data is encrypted and never stored permanently
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--border)]">
                  <Shield className="w-8 h-8 text-green-400 mb-3" />
                  <h3 className="text-white font-semibold mb-1">HIPAA Compliant</h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    Enterprise-grade security for genetic data
                  </p>
                </div>
                <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--border)]">
                  <Dna className="w-8 h-8 text-emerald-400 mb-3" />
                  <h3 className="text-white font-semibold mb-1">200+ Genes</h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    Comprehensive pharmacogenomic panel
                  </p>
                </div>
                <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--border)]">
                  <Activity className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-white font-semibold mb-1">500+ Drugs</h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    Medication-gene interaction database
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
              {/* Results Header */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Rat className="w-10 h-10 text-green-400" />
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        Genetic Analysis Complete
                      </h2>
                      <p className="text-sm text-[var(--text-muted)]">
                        4 key pharmacogenomic markers analyzed
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-green-400/20 text-green-400 text-sm font-medium">
                    Analysis Complete
                  </div>
                </div>
              </div>

              {/* Genetic Markers */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Dna className="w-5 h-5 text-green-400" />
                  Key Genetic Markers
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {geneticMarkers.map((marker, index) => (
                    <div
                      key={index}
                      className="bg-[var(--background)] rounded-xl p-4 border border-[var(--border)]"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white font-semibold font-mono">
                          {marker.gene}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            marker.status.includes("Normal")
                              ? "bg-green-400/20 text-green-400"
                              : marker.status.includes("Sensitive")
                              ? "bg-yellow-400/20 text-yellow-400"
                              : "bg-orange-400/20 text-orange-400"
                          }`}
                        >
                          {marker.status}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] mb-3">
                        {marker.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {marker.drugs.map((drug, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-0.5 rounded bg-[var(--surface)] text-[var(--text-muted)]"
                          >
                            {drug}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-start gap-2 text-xs text-green-400">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        {marker.recommendation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pharmacogenomic Insights */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[var(--accent)]" />
                  Pharmacogenomic Insights
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                  {pharmacogenomicInsights.map((insight, index) => (
                    <div key={index}>
                      <div className="flex items-center gap-2 mb-4">
                        <insight.icon className="w-5 h-5 text-[var(--primary-light)]" />
                        <h4 className="text-white font-medium">{insight.category}</h4>
                      </div>
                      <ul className="space-y-2">
                        {insight.insights.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-400/10 rounded-xl p-4 border border-yellow-400/30">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-yellow-400 font-medium mb-1">
                      Important Disclaimer
                    </h4>
                    <p className="text-sm text-[var(--text-muted)]">
                      This genetic analysis is for informational purposes only and
                      should not replace professional medical advice. Always consult
                      with a healthcare provider or genetic counselor before making
                      any changes to your medication regimen based on genetic
                      information.
                    </p>
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
