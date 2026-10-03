import React, { useState, useEffect } from "react";
import { Phone, Copy, Check, MessageSquare, Clock, X, ShieldCheck, FileText } from "lucide-react";
import { company } from "../data/company";

interface PhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal?: () => void;
}

export default function PhoneModal({ isOpen, onClose, onOpenQuoteModal }: PhoneModalProps) {
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
    navigator.clipboard.writeText(company.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/${company.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hello Vayu India Roadways, I would like to inquire about road transportation services."
  )}`;

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
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Dispatch Desk Online
            </span>
          </div>

          <h3 className="text-xl font-extrabold text-[#172033] tracking-tight">
            Contact Direct Dispatch Desk
          </h3>
          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
            Vayu India Roadways Pvt. Ltd. • Pai Head Office, Kaithal, HR
          </p>

          {/* Main Phone Card */}
          <div className="mt-5 p-5 rounded-xl bg-gradient-to-br from-[#0B2A6F] to-[#1455C0] text-white shadow-lg relative overflow-hidden">
            {/* Pattern Overlay */}
            <div className="pointer-events-none absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 blur-xl" />
            
            <div className="text-[11px] font-bold text-blue-200 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#F47B20]" />
              Official Hotline
            </div>
            
            <div className="text-2xl sm:text-3xl font-black tracking-wider text-white my-1 font-mono">
              {company.phone}
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-blue-100 mt-2">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
            </div>
          </div>

          {/* Actions List */}
          <div className="mt-5 space-y-3">
            {/* Call Now via App */}
            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              className="w-full py-3 px-4 rounded-xl bg-[#0B2A6F] hover:bg-[#1455C0] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-[#F47B20]" />
              <span>Call Direct Line Now</span>
            </a>

            {/* WhatsApp Chat */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#169447] hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Copy Number Button */}
            <button
              onClick={handleCopy}
              className="w-full py-3 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gray-500" />
                  <span>Copy Phone Number</span>
                </>
              )}
            </button>

            {onOpenQuoteModal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal();
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-dashed border-[#1455C0]/40 text-[#0B2A6F] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-blue-50 transition-all mt-2"
              >
                <FileText className="w-4 h-4 text-[#F47B20]" />
                <span>Fill Formal Inquiry Form</span>
              </button>
            )}
          </div>

          {/* Footer note */}
          <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Verified Company Contact
            </span>
            <span>Ref: VAYU-DESK</span>
          </div>
        </div>
      </div>
    </div>
  );
}
