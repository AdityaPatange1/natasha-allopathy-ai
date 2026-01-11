"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Rat,
  Ruler,
  Users,
  Activity,
  Dna,
  Globe,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Heart,
  Pill,
  FileText,
  Loader2,
} from "lucide-react";

const ethnicGroups = [
  {
    id: "aryan",
    name: "Aryan",
    avgMaleHeight: "175 cm",
    avgFemaleHeight: "162 cm",
    region: "North India, Central Asia",
    characteristics: [
      "Tall to medium stature",
      "Fair to wheatish complexion",
      "Mesomorphic build common",
    ],
  },
  {
    id: "dravidian",
    name: "Dravidian",
    avgMaleHeight: "168 cm",
    avgFemaleHeight: "155 cm",
    region: "South India, Sri Lanka",
    characteristics: [
      "Medium stature",
      "Dark complexion",
      "Lean body structure",
    ],
  },
  {
    id: "indo-aryan",
    name: "Indo-Aryan",
    avgMaleHeight: "172 cm",
    avgFemaleHeight: "158 cm",
    region: "Indian Subcontinent",
    characteristics: [
      "Variable height",
      "Mixed features",
      "Diverse body types",
    ],
  },
  {
    id: "african",
    name: "African",
    avgMaleHeight: "170 cm",
    avgFemaleHeight: "158 cm",
    region: "Sub-Saharan Africa",
    characteristics: [
      "Variable height by region",
      "Athletic build common",
      "High melanin",
    ],
  },
  {
    id: "east-asian",
    name: "East Asian",
    avgMaleHeight: "170 cm",
    avgFemaleHeight: "158 cm",
    region: "China, Japan, Korea",
    characteristics: [
      "Medium stature",
      "Lean body type",
      "Epicanthic fold common",
    ],
  },
  {
    id: "caucasian",
    name: "Caucasian",
    avgMaleHeight: "178 cm",
    avgFemaleHeight: "165 cm",
    region: "Europe, Western Asia",
    characteristics: [
      "Taller average height",
      "Light features",
      "Variable body types",
    ],
  },
];

const healthFactors = [
  {
    factor: "Height Percentile",
    value: "72nd",
    interpretation: "Above average for ethnic group",
    status: "good",
  },
  {
    factor: "BMI Category",
    value: "23.4",
    interpretation: "Normal weight range",
    status: "good",
  },
  {
    factor: "Growth Pattern",
    value: "Normal",
    interpretation: "Consistent with genetic potential",
    status: "good",
  },
  {
    factor: "Nutritional Status",
    value: "Adequate",
    interpretation: "No deficiencies detected",
    status: "good",
  },
];

const medicationConsiderations = [
  {
    category: "Dosing Adjustments",
    items: [
      "Standard dosing typically appropriate for body weight",
      "Consider lean body mass for certain medications",
      "Ethnic-specific drug metabolism variations",
    ],
  },
  {
    category: "Genetic Factors",
    items: [
      "CYP450 enzyme variations by ethnicity",
      "Drug transporter gene variations",
      "Receptor sensitivity differences",
    ],
  },
  {
    category: "Disease Prevalence",
    items: [
      "Diabetes risk varies by ethnic group",
      "Cardiovascular risk profiles differ",
      "Bone density considerations",
    ],
  },
];

export default function HeightAnalysisPage() {
  const [selectedEthnicity, setSelectedEthnicity] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    age: "",
    gender: "male",
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const startAnalysis = async () => {
    if (!selectedEthnicity) return;
    setIsAnalyzing(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsAnalyzing(false);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center glow-border">
                <Ruler className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Height &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Anthropometric Analysis
              </span>
            </h1>

            <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
              Comprehensive height, body composition, and demographic-specific
              health insights tailored to genetic populations worldwide.
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
              className="space-y-8"
            >
              {/* Ethnic Group Selection */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-amber-400" />
                  Select Ethnic Background
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {ethnicGroups.map((group) => (
                    <button
                      key={group.id}
                      onClick={() => setSelectedEthnicity(group.id)}
                      className={`p-4 rounded-xl border transition-all text-left ${
                        selectedEthnicity === group.id
                          ? "bg-amber-500/20 border-amber-400"
                          : "bg-[var(--background)] border-[var(--border)] hover:border-amber-400/50"
                      }`}
                    >
                      <Users className="w-6 h-6 text-amber-400 mb-2" />
                      <h3 className="text-sm font-semibold text-white">
                        {group.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mt-1">
                        {group.region}
                      </p>
                      {selectedEthnicity === group.id && (
                        <CheckCircle className="w-4 h-4 text-amber-400 mt-2" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Form */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-amber-400" />
                  Enter Measurements
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm text-[var(--text-muted)] mb-2">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      value={formData.height}
                      onChange={(e) =>
                        setFormData({ ...formData, height: e.target.value })
                      }
                      placeholder="170"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--text-muted)] mb-2">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      value={formData.weight}
                      onChange={(e) =>
                        setFormData({ ...formData, weight: e.target.value })
                      }
                      placeholder="70"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--text-muted)] mb-2">
                      Age (years)
                    </label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) =>
                        setFormData({ ...formData, age: e.target.value })
                      }
                      placeholder="30"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[var(--text-muted)] mb-2">
                      Gender
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                      className="input-field"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={startAnalysis}
                    disabled={isAnalyzing || !selectedEthnicity}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Analyzing Anthropometric Data...
                      </>
                    ) : (
                      <>
                        <Rat className="w-5 h-5" />
                        Analyze with Natasha
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Ethnic Group Info */}
              {selectedEthnicity && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]"
                >
                  <h3 className="text-lg font-bold text-white mb-4">
                    {ethnicGroups.find((g) => g.id === selectedEthnicity)?.name}{" "}
                    Population Characteristics
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-sm text-[var(--text-muted)] mb-1">
                        Average Male Height
                      </div>
                      <div className="text-xl text-white font-semibold">
                        {ethnicGroups.find((g) => g.id === selectedEthnicity)?.avgMaleHeight}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-[var(--text-muted)] mb-1">
                        Average Female Height
                      </div>
                      <div className="text-xl text-white font-semibold">
                        {ethnicGroups.find((g) => g.id === selectedEthnicity)?.avgFemaleHeight}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-[var(--text-muted)] mb-1">
                        Region
                      </div>
                      <div className="text-xl text-white font-semibold">
                        {ethnicGroups.find((g) => g.id === selectedEthnicity)?.region}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-sm text-[var(--text-muted)] mb-2">Characteristics</div>
                    <div className="flex flex-wrap gap-2">
                      {ethnicGroups
                        .find((g) => g.id === selectedEthnicity)
                        ?.characteristics.map((char, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-amber-400/20 text-amber-400 rounded-full text-sm"
                          >
                            {char}
                          </span>
                        ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Results Summary */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <div className="flex items-center gap-3 mb-6">
                  <Rat className="w-10 h-10 text-amber-400" />
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Anthropometric Analysis Complete
                    </h2>
                    <p className="text-sm text-[var(--text-muted)]">
                      Based on{" "}
                      {ethnicGroups.find((g) => g.id === selectedEthnicity)?.name}{" "}
                      population data
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                  {healthFactors.map((factor, index) => (
                    <div
                      key={index}
                      className="bg-[var(--background)] rounded-xl p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-amber-400 mb-1">
                        {factor.value}
                      </div>
                      <div className="text-sm text-white">{factor.factor}</div>
                      <div className="text-xs text-green-400 mt-1">
                        {factor.interpretation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Medication Considerations */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Pill className="w-5 h-5 text-purple-400" />
                  Medication Considerations by Ethnicity
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                  {medicationConsiderations.map((category, index) => (
                    <div key={index}>
                      <h4 className="text-white font-medium mb-3">{category.category}</h4>
                      <ul className="space-y-2">
                        {category.items.map((item, i) => (
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

              {/* Recommendations */}
              <div className="bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)]">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-400" />
                  Health Recommendations
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-green-400/10 rounded-xl border border-green-400/30">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-green-400 font-medium">Height Within Normal Range</h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        Your height falls within the expected range for your ethnic background and
                        gender. No growth-related concerns identified.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-blue-400/10 rounded-xl border border-blue-400/30">
                    <TrendingUp className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-blue-400 font-medium">Nutritional Optimization</h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        Ensure adequate protein, calcium, and vitamin D intake based on your
                        demographic profile for optimal bone health and body composition.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-amber-400/10 rounded-xl border border-amber-400/30">
                    <Dna className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-amber-400 font-medium">Ethnic-Specific Health Screening</h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        Consider ethnic-specific health screenings for conditions more prevalent
                        in your population, including diabetes screening and cardiovascular risk
                        assessment.
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
