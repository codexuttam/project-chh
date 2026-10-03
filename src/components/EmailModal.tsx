import React, { useState, useEffect } from "react";
import { Mail, Copy, Check, ExternalLink, X, ShieldCheck, Send } from "lucide-react";
import { company } from "../data/company";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(company.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(company.email)}&su=${encodeURIComponent("Transportation Inquiry - Vayu India Roadways")}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Glassmorphic backdrop */}
      <div
        className="fixed inset-0 bg-[#07132B]/75 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Positioning Container */}
      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-6">
        <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 sm:p-8 text-left align-middle shadow-2xl transition-all border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Badge & Title */}
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
              <Mail className="w-3.5 h-3.5 text-[#1455C0]" />
              Official Email
            </span>
          </div>

          <h3 className="text-xl font-extrabold text-[#172033] tracking-tight">
            Corporate Email Communications
          </h3>
          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
            Vayu India Roadways Pvt. Ltd. • Corporate Desk
          </p>

          {/* Email Address Display Card */}
          <div className="mt-5 p-5 rounded-xl bg-gradient-to-br from-[#0B2A6F] to-[#1455C0] text-white shadow-lg relative overflow-hidden">
            <div className="pointer-events-none absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 blur-xl" />
            
            <div className="text-[11px] font-bold text-blue-200 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#F47B20]" />
              Direct Corporate Email
            </div>
            
            <div className="text-lg sm:text-xl font-black tracking-wide text-white my-1 font-mono break-all lowercase select-all">
              {company.email}
            </div>

            <p className="text-[10px] text-blue-200 mt-2">
              Fastest response for corporate rate contracts and formal logistics queries.
            </p>
          </div>

          {/* Actions List */}
          <div className="mt-5 space-y-3">
            {/* Open in Gmail Web Browser */}
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#1455C0] hover:bg-[#0B2A6F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
            >
              <ExternalLink className="w-4 h-4 text-[#F47B20]" />
              <span>Open in Gmail (Web Browser)</span>
            </a>

            {/* Copy Email Address */}
            <button
              onClick={handleCopy}
              className="w-full py-3 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gray-500" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>

            {/* Open Default Mail Client */}
            <a
              href={`mailto:${company.email}`}
              className="w-full py-2.5 px-4 rounded-xl border border-gray-200 text-gray-600 hover:text-gray-900 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
            >
              <Send className="w-3.5 h-3.5 text-gray-400" />
              <span>Open Default Mail App</span>
            </a>
          </div>

          {/* Footer note */}
          <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Official Verified Communication
            </span>
            <span>Ref: VAYU-MAIL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
