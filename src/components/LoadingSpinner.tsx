"use client";

import { Rat } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

export default function LoadingSpinner({
  size = "md",
  text = "Loading...",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative">
        {/* Outer Ring */}
        <div
          className={`${sizeClasses[size]} rounded-full border-2 border-[var(--border)] border-t-[var(--primary-light)] spin-slow`}
        />

        {/* Inner Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Rat className={`${iconSizes[size]} text-[var(--primary-light)] rat-bounce`} />
        </div>

        {/* Glow Effect */}
        <div
          className={`absolute inset-0 ${sizeClasses[size]} rounded-full bg-[var(--primary-light)]/10 blur-xl animate-pulse`}
        />
      </div>

      {text && (
        <div className="flex items-center gap-1 text-[var(--text-muted)] text-sm">
          <span>{text}</span>
          <span className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>
      )}
    </div>
  );
}

export function FullPageLoader({ text = "Initializing Natasha AI" }: { text?: string }) {
  return (
    <div className="fixed inset-0 bg-[var(--background)] flex items-center justify-center z-50 crt-effect">
      <div className="scanline" />
      <div className="text-center">
        <LoadingSpinner size="lg" text={text} />
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--primary-light)] animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 rounded-full bg-[var(--primary-light)] animate-pulse" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </div>
  );
}

export function CardLoader() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-[var(--surface-light)] rounded w-3/4 mb-4" />
      <div className="h-4 bg-[var(--surface-light)] rounded w-1/2 mb-4" />
      <div className="h-4 bg-[var(--surface-light)] rounded w-5/6" />
    </div>
  );
}
