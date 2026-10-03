import React, { useState, useEffect } from "react";
import { Phone, Copy, Check, MessageSquare, Clock, X, ShieldCheck, FileText, ArrowRight, ExternalLink } from "lucide-react";
import { company } from "../data/company";

interface PhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal?: () => void;
}

export default function PhoneModal({ isOpen, onClose, onOpenQuoteModal }: PhoneModalProps) {
  const [copied, setCopied] = useState(false);
  const [callInitiated, setCallInitiated] = useState(false);

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
    setTimeout(() => setCopied(false), 3000);
  };

  const handleCallNow = () => {
    handleCopy();
    setCallInitiated(true);
    // Attempt standard tel link safely
    window.location.href = `tel:${company.phone.replace(/\s+/g, "")}`;
    setTimeout(() => setCallInitiated(false), 4000);
  };

  const whatsappUrl = `https://wa.me/${company.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hello Vayu India Roadways, I have a road transportation requirement and would like to inquire about vehicle availability."
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Dark Blurred Glassmorphism Overlay */}
      <div
        className="fixed inset-0 bg-[#07132B]/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />

      {/* Positioning Container */}
      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-6">
        <div className="relative w-full max-w-lg transform overflow-hidden rounded-3xl bg-white p-6 sm:p-8 text-left align-middle shadow-2xl transition-all border border-gray-100 animate-in zoom-in-95 duration-200">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Live Status Indicator */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Pai Dispatch Desk Active
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="text-2xl font-black text-[#172033] tracking-tight">
            Direct Dispatch Operations
          </h3>
          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
            Vayu India Roadways Pvt. Ltd. •{" "}
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1455C0] hover:underline font-medium"
              title="Open location in Google Maps"
            >
              Registered Office Pai, Kaithal, HR ↗
            </a>
          </p>

          {/* Featured Phone Card */}
          <div className="mt-5 p-6 rounded-2xl bg-gradient-to-br from-[#0B2A6F] via-[#0E358A] to-[#1455C0] text-white shadow-xl relative overflow-hidden border border-white/10">
            {/* Soft Ambient Glow */}
            <div className="pointer-events-none absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-[#F47B20]/20 blur-2xl" />

            <div className="flex justify-between items-start mb-2">
              <span className="text-[11px] font-bold text-blue-200 uppercase tracking-widest flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#F47B20]" />
                Direct Dial Hotline
              </span>
              <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded font-mono">
                Verified
              </span>
            </div>

            <div className="text-3xl sm:text-4xl font-black tracking-wider text-white font-mono my-2 select-all">
              {company.phone}
            </div>

            <div className="flex items-center gap-2 text-xs text-blue-100 mt-3 pt-3 border-t border-white/10">
              <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Available Mon - Sat: 9:00 AM - 7:00 PM</span>
            </div>
          </div>

          {/* Copied Alert Toast */}
          {copied && (
            <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-bold flex items-center justify-between animate-in fade-in slide-in-from-top-2">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                Phone number copied to clipboard! ({company.phone})
              </span>
            </div>
          )}

          {/* Primary Action Buttons */}
          <div className="mt-6 space-y-3">
            {/* Direct WhatsApp Option */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-xl bg-[#169447] hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-between shadow-md transition-all active:scale-[0.99] group"
            >
              <span className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Chat Instantly on WhatsApp</span>
              </span>
              <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Copy Number Button */}
            <button
              onClick={handleCopy}
              className="w-full py-3.5 px-5 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#172033] font-bold text-xs uppercase tracking-wider flex items-center justify-between transition-all cursor-pointer"
            >
              <span className="flex items-center gap-2.5">
                <Copy className="w-4 h-4 text-gray-500" />
                <span>Copy Phone Number</span>
              </span>
              <span className="text-[10px] text-gray-400 font-mono">One-Click</span>
            </button>

            {/* Dial Button */}
            <button
              onClick={handleCallNow}
              className="w-full py-3.5 px-5 rounded-xl bg-[#0B2A6F] hover:bg-[#1455C0] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-between shadow-md transition-all active:scale-[0.99] cursor-pointer"
            >
              <span className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F47B20]" />
                <span>{callInitiated ? "Opening Phone App..." : "Call Direct Hotline"}</span>
              </span>
              <ArrowRight className="w-4 h-4 text-[#F47B20]" />
            </button>

            {/* Request Quote Button */}
            {onOpenQuoteModal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal();
                }}
                className="w-full py-3.5 px-5 rounded-xl border-2 border-dashed border-[#1455C0]/30 text-[#0B2A6F] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-blue-50/60 transition-all cursor-pointer mt-2"
              >
                <FileText className="w-4 h-4 text-[#F47B20]" />
                <span>Request Detailed Freight Quote</span>
              </button>
            )}
          </div>

          {/* Footer credentials note */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Verified Fleet Dispatcher
            </span>
            <span className="font-mono text-[10px]">Pai Head Office</span>
          </div>

        </div>
      </div>
    </div>
  );
}
