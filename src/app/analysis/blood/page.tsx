"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Rat,
  Droplets,
  Upload,
  Loader2,
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  CheckCircle,
  FileText,
  Activity,
  Heart,
  Shield,
} from "lucide-react";

interface BloodParameter {
  name: string;
  value: number;
  unit: string;
  normalRange: string;
  status: "normal" | "high" | "low" | "critical";
  description: string;
}

const demoBloodResults: BloodParameter[] = [
  {
    name: "Hemoglobin (Hb)",
    value: 14.2,
    unit: "g/dL",
    normalRange: "13.5 - 17.5",
    status: "normal",
    description: "Oxygen-carrying protein in red blood cells",
  },
  {
    name: "White Blood Cells",
    value: 11200,
    unit: "/μL",
    normalRange: "4,500 - 11,000",
    status: "high",
    description: "Immune system cells - elevated count may indicate infection",
  },
  {
    name: "Platelets",
    value: 245000,
    unit: "/μL",
    normalRange: "150,000 - 400,000",
    status: "normal",
    description: "Blood clotting cells",
  },
  {
    name: "Fasting Glucose",
    value: 118,
    unit: "mg/dL",
    normalRange: "70 - 100",
    status: "high",
    description: "Blood sugar level - elevated indicates prediabetes risk",
  },
  {
    name: "HbA1c",
    value: 5.8,
    unit: "%",
    normalRange: "< 5.7",
    status: "high",
    description: "3-month average blood sugar",
  },
  {
    name: "Total Cholesterol",
    value: 195,
    unit: "mg/dL",
    normalRange: "< 200",
    status: "normal",
    description: "Total blood cholesterol",
  },
  {
    name: "LDL Cholesterol",
    value: 125,
    unit: "mg/dL",
    normalRange: "< 100",
    status: "high",
    description: "Bad cholesterol - elevated increases heart disease risk",
  },
  {
    name: "HDL Cholesterol",
    value: 52,
    unit: "mg/dL",
    normalRange: "> 40",
    status: "normal",
    description: "Good cholesterol - protects against heart disease",
  },
  {
    name: "Creatinine",
    value: 0.9,
    unit: "mg/dL",
    normalRange: "0.7 - 1.3",
    status: "normal",
    description: "Kidney function marker",
  },
  {
    name: "TSH",
    value: 2.1,
    unit: "mIU/L",
    normalRange: "0.4 - 4.0",
    status: "normal",
    description: "Thyroid function marker",
  },
];

export default function BloodAnalysisPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const startAnalysis = async () => {
    setIsAnalyzing(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "high":
        return <TrendingUp className="w-4 h-4 text-orange-400" />;
      case "low":
        return <TrendingDown className="w-4 h-4 text-blue-400" />;
      case "critical":
        return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default:
        return <Minus className="w-4 h-4 text-green-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "high":
        return "bg-orange-400/20 text-orange-400 border-orange-400/30";
      case "low":
        return "bg-blue-400/20 text-blue-400 border-blue-400/30";
      case "critical":
        return "bg-red-400/20 text-red-400 border-red-400/30";
      default:
        return "bg-green-400/20 text-green-400 border-green-400/30";
    }
  };

  const normalCount = demoBloodResults.filter((r) => r.status === "normal").length;
  const abnormalCount = demoBloodResults.length - normalCount;

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center glow-border">
                <Droplets className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Blood{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Analysis
              </span>
            </h1>

            <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
              Upload your blood test results for comprehensive AI-powered
              interpretation with health insights and recommendations.
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
                <Droplets className="w-20 h-20 text-red-400 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">
                  Upload Blood Test Results
                </h2>
                <p className="text-[var(--text-muted)] mb-8">
                  Upload your lab report (PDF or image) for AI-powered analysis
                  of your blood parameters.
                </p>

                <div className="border-2 border-dashed border-[var(--border)] rounded-xl p-8 mb-6 hover:border-red-400/50 transition-colors">
                  <Upload className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <p className="text-sm text-[var(--text-muted)] mb-4">
                    Drag and drop your blood report or click to browse
                  </p>
                  <label className="btn-secondary inline-flex items-center gap-2 cursor-pointer">
                    <FileText className="w-5 h-5" />
                    Choose File
                    <input type="file" className="hidden" accept=".pdf,image/*" />
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
                      Analyzing Blood Parameters...
                    </>
                  ) : (
                    <>
                      <Rat className="w-5 h-5" />
                      Start Demo Analysis
                    </>
                  )}
                </button>
              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--border)]">
                  <Activity className="w-8 h-8 text-red-400 mb-3" />
                  <h3 className="text-white font-semibold mb-1">50+ Parameters</h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    Complete blood count and metabolic panel
                  </p>
                </div>
                <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--border)]">
                  <Heart className="w-8 h-8 text-pink-400 mb-3" />
                  <h3 className="text-white font-semibold mb-1">Cardiac Markers</h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    Heart health indicators analyzed
                  </p>
                </div>
                <div className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--border)]">
                  <Shield className="w-8 h-8 text-green-400 mb-3" />
                  <h3 className="text-white font-semibold mb-1">Risk Assessment</h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    Early disease risk detection
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
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Rat className="w-10 h-10 text-red-400" />
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        Blood Analysis Complete
                      </h2>
                      <p className="text-sm text-[var(--text-muted)]">
                        {demoBloodResults.length} parameters analyzed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[var(--background)] rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-green-400">{normalCount}</div>
                    <div className="text-sm text-[var(--text-muted)]">Normal</div>
                  </div>
                  <div className="bg-[var(--background)] rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-orange-400">{abnormalCount}</div>
                    <div className="text-sm text-[var(--text-muted)]">Requires Attention</div>
                  </div>
                  <div className="bg-[var(--background)] rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-[var(--primary-light)]">0</div>
                    <div className="text-sm text-[var(--text-muted)]">Critical</div>
                  </div>
                </div>
              </div>

              {/* Results Table */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-red-400" />
                  Detailed Results
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[var(--border)]">
                        <th className="text-left py-3 px-4 text-[var(--text-muted)] text-sm">Parameter</th>
                        <th className="text-left py-3 px-4 text-[var(--text-muted)] text-sm">Result</th>
                        <th className="text-left py-3 px-4 text-[var(--text-muted)] text-sm">Normal Range</th>
                        <th className="text-left py-3 px-4 text-[var(--text-muted)] text-sm">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {demoBloodResults.map((result, index) => (
                        <tr key={index} className="border-b border-[var(--border)]/50 hover:bg-white/5">
                          <td className="py-3 px-4">
                            <div className="text-white font-medium">{result.name}</div>
                            <div className="text-xs text-[var(--text-muted)]">{result.description}</div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-white font-mono">
                              {result.value} {result.unit}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-[var(--text-muted)] font-mono text-sm">
                            {result.normalRange}
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(result.status)}`}>
                              {getStatusIcon(result.status)}
                              {result.status.toUpperCase()}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Natasha&apos;s Recommendations
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-orange-400/10 rounded-xl border border-orange-400/30">
                    <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-orange-400 font-medium">Elevated Blood Sugar</h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        Your fasting glucose and HbA1c levels indicate prediabetes. Consider dietary
                        modifications and regular exercise. Schedule a follow-up with your physician.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-yellow-400/10 rounded-xl border border-yellow-400/30">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-yellow-400 font-medium">LDL Cholesterol Elevated</h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        Your LDL cholesterol is above optimal range. Consider heart-healthy diet
                        changes and discuss statin therapy with your doctor if lifestyle changes
                        don&apos;t improve levels.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-green-400/10 rounded-xl border border-green-400/30">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-green-400 font-medium">Kidney Function Normal</h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        Your creatinine levels are within normal range, indicating healthy kidney function.
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
