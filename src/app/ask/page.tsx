"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rat,
  Send,
  Loader2,
  Sparkles,
  User,
  Copy,
  Check,
  RefreshCw,
  Trash2,
  Settings,
  Info,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  "What are the side effects of Metformin?",
  "Explain the interaction between Aspirin and Warfarin",
  "What is the mechanism of action of ACE inhibitors?",
  "How does Omeprazole affect drug absorption?",
  "What are the contraindications for Ibuprofen?",
  "Explain the difference between generic and brand medications",
];

export default function AskPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e?: React.FormEvent, customQuestion?: string) => {
    e?.preventDefault();
    const question = customQuestion || input.trim();
    if (!question || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: question,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response || "I apologize, but I encountered an error. Please try again.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "I apologize, but I'm having trouble connecting right now. Please check your API configuration and try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-[var(--surface)] border-b border-[var(--border)] py-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center">
                  <Rat className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[var(--surface)]" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white flex items-center gap-2">
                  Natasha AI
                  <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                </h1>
                <p className="text-sm text-green-400">
                  Online - GPT-5.2 Powered
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                className="p-2 rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-white/5 transition-colors"
                title="Clear chat"
              >
                <Trash2 className="w-5 h-5" />
              </button>
              <a
                href="/method-system"
                className="p-2 rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-white/5 transition-colors"
                title="Configure Natasha"
              >
                <Settings className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto py-6">
        <div className="max-w-4xl mx-auto px-4">
          {messages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] mx-auto mb-6 flex items-center justify-center glow-border">
                <Rat className="w-12 h-12 text-white rat-bounce" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Hello! I&apos;m Natasha
              </h2>
              <p className="text-[var(--text-muted)] mb-8 max-w-md mx-auto">
                Your AI-powered medical assistant. Ask me anything about
                allopathy medications, drug interactions, or treatment options.
              </p>

              {/* Suggested Questions */}
              <div className="space-y-3">
                <p className="text-sm text-[var(--text-muted)] mb-4">
                  Try asking:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
                  {suggestedQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleSubmit(undefined, question)}
                      className="p-4 text-left text-sm bg-[var(--surface)] rounded-xl border border-[var(--border)] text-[var(--text-muted)] hover:text-white hover:border-[var(--primary-light)] transition-all card-hover"
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-12 p-4 bg-[var(--surface)]/50 rounded-xl border border-[var(--border)] max-w-2xl mx-auto">
                <div className="flex items-start gap-3 text-left">
                  <Info className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--text-muted)]">
                    <strong className="text-[var(--accent)]">Disclaimer:</strong>{" "}
                    Natasha AI provides general information about medications
                    and should not replace professional medical advice. Always
                    consult with a qualified healthcare provider for medical
                    decisions.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-6">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`flex items-start gap-4 ${
                      message.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === "user"
                          ? "bg-[var(--accent)]"
                          : "bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)]"
                      }`}
                    >
                      {message.role === "user" ? (
                        <User className="w-5 h-5 text-white" />
                      ) : (
                        <Rat className="w-5 h-5 text-white" />
                      )}
                    </div>

                    {/* Message */}
                    <div
                      className={`flex-1 max-w-[80%] ${
                        message.role === "user" ? "text-right" : ""
                      }`}
                    >
                      <div
                        className={`inline-block p-4 rounded-2xl ${
                          message.role === "user"
                            ? "bg-[var(--primary)] text-white rounded-tr-md"
                            : "bg-[var(--surface)] text-white border border-[var(--border)] rounded-tl-md"
                        }`}
                      >
                        {message.role === "assistant" && (
                          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[var(--border)]">
                            <Rat className="w-4 h-4 text-[var(--accent)]" />
                            <span className="text-xs text-[var(--text-muted)]">
                              Natasha
                            </span>
                          </div>
                        )}
                        <p className="whitespace-pre-wrap text-sm leading-relaxed">
                          {message.content}
                        </p>
                      </div>

                      {/* Actions */}
                      <div
                        className={`mt-2 flex items-center gap-2 ${
                          message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <span className="text-xs text-[var(--text-muted)]">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                        {message.role === "assistant" && (
                          <button
                            onClick={() =>
                              copyToClipboard(message.content, message.id)
                            }
                            className="p-1 rounded text-[var(--text-muted)] hover:text-white transition-colors"
                          >
                            {copiedId === message.id ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loading */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center">
                    <Rat className="w-5 h-5 text-white rat-wiggle" />
                  </div>
                  <div className="bg-[var(--surface)] rounded-2xl rounded-tl-md p-4 border border-[var(--border)]">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 text-[var(--primary-light)] animate-spin" />
                      <span className="text-sm text-[var(--text-muted)]">
                        Natasha is thinking
                      </span>
                      <span className="loading-dots">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-[var(--surface)] border-t border-[var(--border)] py-4">
        <div className="max-w-4xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              placeholder="Ask Natasha about allopathy medications..."
              rows={1}
              className="w-full input-field pr-24 resize-none min-h-[52px] max-h-32"
              style={{ paddingRight: "6rem" }}
            />
            <div className="absolute right-2 bottom-2 flex items-center gap-2">
              {input.trim() && (
                <button
                  type="button"
                  onClick={() => setInput("")}
                  className="p-2 rounded-lg text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              )}
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2 rounded-lg bg-[var(--primary)] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--primary-light)] transition-colors"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </form>
          <p className="text-xs text-center text-[var(--text-muted)] mt-3">
            <Rat className="w-3 h-3 inline mr-1" />
            Natasha may occasionally provide inaccurate information. Verify
            important medical information.
          </p>
        </div>
      </div>
    </div>
  );
}
