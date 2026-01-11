"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Rat,
  Activity,
  Upload,
  Loader2,
  Zap,
  Brain,
  Moon,
  Sun,
  Coffee,
  FileText,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

const brainWaveTypes = [
  {
    name: "Delta Waves",
    frequency: "0.5-4 Hz",
    current: 15,
    optimal: "10-20%",
    status: "normal",
    color: "bg-purple-500",
    description: "Deep sleep and healing",
    icon: Moon,
  },
  {
    name: "Theta Waves",
    frequency: "4-8 Hz",
    current: 22,
    optimal: "15-25%",
    status: "normal",
    color: "bg-blue-500",
    description: "Creativity and meditation",
    icon: Brain,
  },
  {
    name: "Alpha Waves",
    frequency: "8-12 Hz",
    current: 28,
    optimal: "25-35%",
    status: "normal",
    color: "bg-green-500",
    description: "Relaxed awareness",
    icon: Sun,
  },
  {
    name: "Beta Waves",
    frequency: "12-30 Hz",
    current: 30,
    optimal: "20-30%",
    status: "elevated",
    color: "bg-yellow-500",
    description: "Active thinking and focus",
    icon: Zap,
  },
  {
    name: "Gamma Waves",
    frequency: "30-100 Hz",
    current: 5,
    optimal: "3-8%",
    status: "normal",
    color: "bg-red-500",
    description: "Higher cognitive functions",
    icon: Activity,
  },
];

const brainStates = [
  { name: "Focus Level", value: 78, status: "good" },
  { name: "Relaxation", value: 65, status: "moderate" },
  { name: "Stress Index", value: 35, status: "good" },
  { name: "Sleep Quality Indicator", value: 72, status: "moderate" },
];

export default function BrainWavesPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const startAnalysis = async () => {
    setIsAnalyzing(true);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "elevated":
      case "moderate":
        return "text-yellow-400";
      case "low":
        return "text-blue-400";
      default:
        return "text-green-400";
    }
  };

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center glow-border">
                <Activity className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Brain Waves{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Analysis
              </span>
            </h1>

            <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
              Advanced EEG pattern analysis to understand your brain activity,
              cognitive states, and neurological health indicators.
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
                <Activity className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">
                  Upload EEG Data
                </h2>
                <p className="text-[var(--text-muted)] mb-8">
                  Upload your EEG recordings or brain activity data for
                  comprehensive wave pattern analysis.
                </p>

                <div className="border-2 border-dashed border-[var(--border)] rounded-xl p-8 mb-6 hover:border-cyan-400/50 transition-colors">
                  <Upload className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <p className="text-sm text-[var(--text-muted)] mb-4">
                    Supported formats: EDF, BDF, CSV, or compatible EEG formats
                  </p>
                  <label className="btn-secondary inline-flex items-center gap-2 cursor-pointer">
                    <FileText className="w-5 h-5" />
                    Choose EEG File
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
                      Analyzing Brain Wave Patterns...
                    </>
                  ) : (
                    <>
                      <Rat className="w-5 h-5" />
                      Start Demo Analysis
                    </>
                  )}
                </button>
              </div>

              {/* Wave Type Info */}
              <div className="grid grid-cols-5 gap-2 mt-8">
                {brainWaveTypes.map((wave, index) => (
                  <div
                    key={index}
                    className="bg-[var(--surface)] rounded-xl p-3 border border-[var(--border)] text-center"
                  >
                    <div className={`w-3 h-3 rounded-full ${wave.color} mx-auto mb-2`} />
                    <div className="text-xs text-white font-medium">{wave.name.split(" ")[0]}</div>
                    <div className="text-[10px] text-[var(--text-muted)]">{wave.frequency}</div>
                  </div>
                ))}
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
                  <Rat className="w-10 h-10 text-cyan-400" />
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Brain Wave Analysis Complete
                    </h2>
                    <p className="text-sm text-[var(--text-muted)]">
                      5 frequency bands analyzed across multiple brain regions
                    </p>
                  </div>
                </div>

                {/* Brain States */}
                <div className="grid grid-cols-4 gap-4">
                  {brainStates.map((state, index) => (
                    <div
                      key={index}
                      className="bg-[var(--background)] rounded-xl p-4 text-center"
                    >
                      <div className="text-3xl font-bold text-[var(--primary-light)] mb-1">
                        {state.value}%
                      </div>
                      <div className="text-sm text-white">{state.name}</div>
                      <div className={`text-xs capitalize ${getStatusColor(state.status)}`}>
                        {state.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wave Breakdown */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  Brain Wave Distribution
                </h3>

                <div className="space-y-6">
                  {brainWaveTypes.map((wave, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <wave.icon className="w-5 h-5 text-[var(--text-muted)]" />
                          <div>
                            <span className="text-white font-medium">{wave.name}</span>
                            <span className="text-[var(--text-muted)] text-sm ml-2">
                              ({wave.frequency})
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`text-sm ${getStatusColor(wave.status)}`}>
                            {wave.current}%
                          </span>
                          <span className="text-xs text-[var(--text-muted)]">
                            Optimal: {wave.optimal}
                          </span>
                        </div>
                      </div>
                      <div className="h-3 bg-[var(--background)] rounded-full overflow-hidden">
                        <div
                          className={`h-full ${wave.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${wave.current}%` }}
                        />
                      </div>
                      <p className="text-xs text-[var(--text-muted)]">{wave.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insights */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-400" />
                  Natasha&apos;s Insights
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-yellow-400/10 rounded-xl border border-yellow-400/30">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-yellow-400 font-medium">Elevated Beta Activity</h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        Your beta wave activity is slightly elevated, which may indicate increased
                        mental activity or stress. Consider incorporating relaxation techniques
                        like meditation or deep breathing exercises.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-green-400/10 rounded-xl border border-green-400/30">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-green-400 font-medium">Healthy Alpha-Theta Balance</h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        Your alpha and theta wave patterns are well-balanced, indicating good
                        creative potential and healthy relaxation-awareness states.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-blue-400/10 rounded-xl border border-blue-400/30">
                    <Coffee className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-blue-400 font-medium">Optimal Focus Periods</h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        Based on your brain wave patterns, your optimal focus time appears to be
                        mid-morning. Consider scheduling important cognitive tasks during this period.
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
