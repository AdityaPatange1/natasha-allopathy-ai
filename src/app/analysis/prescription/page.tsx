"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Rat,
  Upload,
  FileText,
  AlertTriangle,
  CheckCircle,
  Loader2,
  Pill,
  Activity,
  Clock,
  Shield,
  X,
  Eye,
  Download,
} from "lucide-react";

interface AnalysisResult {
  medications: {
    name: string;
    dosage: string;
    frequency: string;
    purpose: string;
    warnings: string[];
  }[];
  interactions: {
    drugs: string[];
    severity: "low" | "moderate" | "high";
    description: string;
  }[];
  recommendations: string[];
  overallRisk: "low" | "moderate" | "high";
}

export default function PrescriptionAnalysisPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFile = (selectedFile: File) => {
    setFile(selectedFile);
    setResult(null);

    if (selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target?.result as string);
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const analyzePrescrption = async () => {
    if (!file) return;

    setIsAnalyzing(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Demo result
    setResult({
      medications: [
        {
          name: "Metformin 500mg",
          dosage: "500mg",
          frequency: "Twice daily with meals",
          purpose: "Blood sugar control for Type 2 Diabetes",
          warnings: ["Monitor kidney function", "May cause GI upset initially"],
        },
        {
          name: "Lisinopril 10mg",
          dosage: "10mg",
          frequency: "Once daily",
          purpose: "Blood pressure management",
          warnings: [
            "Monitor potassium levels",
            "May cause dry cough",
            "Avoid in pregnancy",
          ],
        },
        {
          name: "Atorvastatin 20mg",
          dosage: "20mg",
          frequency: "Once daily at bedtime",
          purpose: "Cholesterol management",
          warnings: ["Monitor liver function", "Report muscle pain immediately"],
        },
      ],
      interactions: [
        {
          drugs: ["Metformin", "Lisinopril"],
          severity: "low",
          description:
            "Generally safe combination. Both may affect kidney function, so regular monitoring is recommended.",
        },
        {
          drugs: ["Atorvastatin", "Lisinopril"],
          severity: "low",
          description:
            "No significant interaction. This is a commonly prescribed combination for cardiovascular protection.",
        },
      ],
      recommendations: [
        "Take Metformin with food to reduce stomach upset",
        "Schedule regular kidney function tests (every 6 months)",
        "Monitor blood pressure at home if possible",
        "Report any muscle pain or weakness immediately",
        "Avoid grapefruit juice with Atorvastatin",
        "Stay hydrated and limit alcohol consumption",
      ],
      overallRisk: "low",
    });

    setIsAnalyzing(false);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "text-green-400 bg-green-400/20";
      case "moderate":
        return "text-yellow-400 bg-yellow-400/20";
      case "high":
        return "text-red-400 bg-red-400/20";
      default:
        return "text-gray-400 bg-gray-400/20";
    }
  };

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center glow-border">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Prescription{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Analysis
              </span>
            </h1>

            <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
              Upload your prescription and let Natasha analyze it for
              medications, interactions, and provide personalized
              recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Upload Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all ${
                dragActive
                  ? "border-purple-400 bg-purple-400/10"
                  : "border-[var(--border)] hover:border-purple-400/50"
              }`}
            >
              {file ? (
                <div className="space-y-4">
                  {preview ? (
                    <div className="relative inline-block">
                      <img
                        src={preview}
                        alt="Prescription preview"
                        className="max-h-48 rounded-lg mx-auto"
                      />
                      <button
                        onClick={() => {
                          setFile(null);
                          setPreview(null);
                          setResult(null);
                        }}
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <FileText className="w-12 h-12 text-purple-400" />
                      <div className="text-left">
                        <p className="text-white font-medium">{file.name}</p>
                        <p className="text-sm text-[var(--text-muted)]">
                          {(file.size / 1024).toFixed(2)} KB
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setFile(null);
                          setPreview(null);
                          setResult(null);
                        }}
                        className="p-2 rounded-lg hover:bg-white/10"
                      >
                        <X className="w-5 h-5 text-[var(--text-muted)]" />
                      </button>
                    </div>
                  )}

                  <button
                    onClick={analyzePrescrption}
                    disabled={isAnalyzing}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Analyzing with Natasha...
                      </>
                    ) : (
                      <>
                        <Rat className="w-5 h-5" />
                        Analyze Prescription
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <>
                  <Upload className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Upload Prescription
                  </h3>
                  <p className="text-[var(--text-muted)] mb-6">
                    Drag and drop your prescription image or PDF here
                  </p>
                  <label className="btn-primary inline-flex items-center gap-2 cursor-pointer">
                    <Upload className="w-5 h-5" />
                    Choose File
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      className="hidden"
                      onChange={(e) =>
                        e.target.files?.[0] && handleFile(e.target.files[0])
                      }
                    />
                  </label>
                  <p className="text-xs text-[var(--text-muted)] mt-4">
                    Supported formats: JPG, PNG, PDF (Max 10MB)
                  </p>
                </>
              )}
            </div>
          </motion.div>

          {/* Analysis Result */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 space-y-6"
            >
              {/* Overview Card */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Rat className="w-8 h-8 text-purple-400" />
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Analysis Complete
                      </h3>
                      <p className="text-sm text-[var(--text-muted)]">
                        Powered by Natasha AI
                      </p>
                    </div>
                  </div>
                  <div
                    className={`px-4 py-2 rounded-full text-sm font-medium ${getRiskColor(
                      result.overallRisk
                    )}`}
                  >
                    {result.overallRisk.toUpperCase()} RISK
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[var(--background)] rounded-xl p-4 text-center">
                    <Pill className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">
                      {result.medications.length}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">
                      Medications
                    </div>
                  </div>
                  <div className="bg-[var(--background)] rounded-xl p-4 text-center">
                    <Activity className="w-6 h-6 text-[var(--accent)] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">
                      {result.interactions.length}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">
                      Interactions
                    </div>
                  </div>
                  <div className="bg-[var(--background)] rounded-xl p-4 text-center">
                    <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">
                      {result.recommendations.length}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">
                      Recommendations
                    </div>
                  </div>
                </div>
              </div>

              {/* Medications */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Pill className="w-5 h-5 text-purple-400" />
                  Medications Detected
                </h3>
                <div className="space-y-4">
                  {result.medications.map((med, index) => (
                    <div
                      key={index}
                      className="bg-[var(--background)] rounded-xl p-4 border border-[var(--border)]"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-white font-semibold">
                            {med.name}
                          </h4>
                          <p className="text-sm text-[var(--text-muted)]">
                            {med.purpose}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-[var(--primary-light)]">
                            {med.dosage}
                          </div>
                          <div className="text-xs text-[var(--text-muted)]">
                            {med.frequency}
                          </div>
                        </div>
                      </div>
                      {med.warnings.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {med.warnings.map((warning, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-yellow-400/20 text-yellow-400"
                            >
                              <AlertTriangle className="w-3 h-3" />
                              {warning}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactions */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[var(--accent)]" />
                  Drug Interactions
                </h3>
                <div className="space-y-4">
                  {result.interactions.map((interaction, index) => (
                    <div
                      key={index}
                      className="bg-[var(--background)] rounded-xl p-4 border border-[var(--border)]"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-white font-medium">
                          {interaction.drugs.join(" + ")}
                        </span>
                        <span
                          className={`px-2 py-0.5 text-xs rounded-full ${getRiskColor(
                            interaction.severity
                          )}`}
                        >
                          {interaction.severity}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-muted)]">
                        {interaction.description}
                      </p>
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
                <div className="grid md:grid-cols-2 gap-3">
                  {result.recommendations.map((rec, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-[var(--background)] rounded-xl p-4"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--text-muted)]">
                        {rec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-center gap-4">
                <button className="btn-secondary inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Report
                </button>
                <button className="btn-primary inline-flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Share with Doctor
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
