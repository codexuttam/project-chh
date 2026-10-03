import React, { useEffect } from "react";
import { X } from "lucide-react";
import QuoteForm from "./QuoteForm";

interface GetQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetQuoteModal({ isOpen, onClose }: GetQuoteModalProps) {
  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Dark Overlay Background */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Positioning Container */}
      <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative w-full max-w-4xl transform rounded-xl bg-white shadow-2xl transition-all border border-gray-100 flex flex-col max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="bg-[#0B2A6F] text-white px-6 py-4 flex items-center justify-between border-b border-[#1455C0]/20 flex-shrink-0">
            <div>
              <h2 className="text-base font-extrabold uppercase tracking-widest text-white">
                Request A Cargo Quote
              </h2>
              <p className="text-[10px] text-gray-300 mt-0.5">
                Vayu India Roadways Pvt. Ltd. • Pai Head Office Desk
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close quote modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Scrollable Area */}
          <div className="overflow-y-auto p-6 sm:p-8 bg-gray-50 flex-grow">
            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 text-xs text-[#0B2A6F] leading-relaxed">
                <span className="font-bold uppercase tracking-wider block mb-0.5">Note:</span>
                We construct accurate road carrier quotes. Please complete origin and destination parameters clearly.
              </div>
              
              <QuoteForm compact={false} onSuccessCallback={onClose} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
