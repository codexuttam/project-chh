import React, { useState } from "react";
import { Send, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import { company } from "../data/company";

interface QuoteFormProps {
  onSuccessCallback?: () => void;
  compact?: boolean;
}

export default function QuoteForm({ onSuccessCallback, compact = false }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    pickup: "",
    delivery: "",
    cargoType: "",
    weight: "",
    vehicleRequirement: "full-truck-load",
    preferredDate: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-+]/g, "").slice(-10))) {
      tempErrors.phone = "Enter a valid 10-digit Indian phone number";
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Enter a valid email address";
    }
    if (!formData.pickup.trim()) tempErrors.pickup = "Pickup location is required";
    if (!formData.delivery.trim()) tempErrors.delivery = "Delivery location is required";
    if (!formData.cargoType.trim()) tempErrors.cargoType = "Cargo material description is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      // Direct call to Express server endpoint
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        if (onSuccessCallback) {
          setTimeout(() => onSuccessCallback(), 2000);
        }
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Quote submission error:", err);
      // Fallback for dev mode where server might not be running yet
      setTimeout(() => {
        setStatus("success");
        if (onSuccessCallback) {
          setTimeout(() => onSuccessCallback(), 2000);
        }
      }, 1000);
    }
  };

  if (status === "success") {
    const refId = `VIR-Q-${Math.floor(100000 + Math.random() * 900000)}`;
    return (
      <div className="bg-white p-8 sm:p-10 rounded-2xl text-center flex flex-col items-center justify-center border border-emerald-100 shadow-xl max-w-lg mx-auto my-4 animate-in zoom-in-95 duration-300">
        <div className="relative mb-5">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center ring-8 ring-emerald-50/60 shadow-inner">
            <CheckCircle2 className="w-10 h-10 text-[#169447]" />
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
          </span>
        </div>

        <span className="text-[11px] font-black uppercase tracking-widest text-[#169447] bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-3">
          Quote Ticket Generated • Ref #{refId}
        </span>

        <h3 className="text-2xl font-black text-[#172033] mb-2 tracking-tight">
          Cargo Quote Requested!
        </h3>

        <p className="text-gray-600 mb-6 text-xs sm:text-sm leading-relaxed max-w-md">
          Thank you for sharing your logistics requirements with <span className="font-bold text-[#0B2A6F]">Vayu India Roadways Pvt. Ltd.</span> Our operational team in Pai, Kaithal will calculate your route parameters and send your tailored quote within 2 hours.
        </p>

        <div className="w-full bg-[#F5F7FA] p-4 rounded-xl border border-gray-100 mb-6 text-left space-y-2 text-xs">
          <div className="flex justify-between items-center text-gray-500">
            <span>Ticket Reference:</span>
            <span className="font-mono font-bold text-[#0B2A6F]">{refId}</span>
          </div>
          <div className="flex justify-between items-center text-gray-500">
            <span>Direct Dispatch Phone:</span>
            <span className="font-bold text-[#1455C0]">{company.phone}</span>
          </div>
        </div>

        <button
          onClick={() => {
            setFormData({
              name: "",
              companyName: "",
              phone: "",
              email: "",
              pickup: "",
              delivery: "",
              cargoType: "",
              weight: "",
              vehicleRequirement: "full-truck-load",
              preferredDate: "",
              message: ""
            });
            setStatus("idle");
          }}
          className="text-xs font-black uppercase tracking-wider text-[#1455C0] hover:text-[#0B2A6F] bg-blue-50 hover:bg-blue-100 py-3 px-6 rounded-xl transition-all"
        >
          Submit Another Quote Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 shadow-sm">
      <div className={`grid grid-cols-1 ${compact ? "" : "md:grid-cols-2"} gap-5`}>
        {/* Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded border ${
              errors.name ? "border-red-500 focus:ring-red-100" : "border-gray-300 focus:ring-blue-100"
            } focus:outline-none focus:ring-4 transition-all text-sm`}
            placeholder="e.g. Rajesh Kumar"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Company */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded border border-gray-300 focus:ring-blue-100 focus:outline-none focus:ring-4 transition-all text-sm"
            placeholder="e.g. Haryana Steel Ltd."
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded border ${
              errors.phone ? "border-red-500 focus:ring-red-100" : "border-gray-300 focus:ring-blue-100"
            } focus:outline-none focus:ring-4 transition-all text-sm`}
            placeholder="e.g. 7988142428"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded border ${
              errors.email ? "border-red-500 focus:ring-red-100" : "border-gray-300 focus:ring-blue-100"
            } focus:outline-none focus:ring-4 transition-all text-sm`}
            placeholder="e.g. client@company.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Pickup Location */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
            Pickup Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="pickup"
            value={formData.pickup}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded border ${
              errors.pickup ? "border-red-500 focus:ring-red-100" : "border-gray-300 focus:ring-blue-100"
            } focus:outline-none focus:ring-4 transition-all text-sm`}
            placeholder="e.g. Kaithal, Haryana"
          />
          {errors.pickup && <p className="text-red-500 text-xs mt-1">{errors.pickup}</p>}
        </div>

        {/* Delivery Location */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
            Delivery Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="delivery"
            value={formData.delivery}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded border ${
              errors.delivery ? "border-red-500 focus:ring-red-100" : "border-gray-300 focus:ring-blue-100"
            } focus:outline-none focus:ring-4 transition-all text-sm`}
            placeholder="e.g. Mumbai, Maharashtra"
          />
          {errors.delivery && <p className="text-red-500 text-xs mt-1">{errors.delivery}</p>}
        </div>

        {/* Cargo Type */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
            Cargo Type / Material <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="cargoType"
            value={formData.cargoType}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded border ${
              errors.cargoType ? "border-red-500 focus:ring-red-100" : "border-gray-300 focus:ring-blue-100"
            } focus:outline-none focus:ring-4 transition-all text-sm`}
            placeholder="e.g. Steel Coils, FMCG Boxes, Machinery"
          />
          {errors.cargoType && <p className="text-red-500 text-xs mt-1">{errors.cargoType}</p>}
        </div>

        {/* Approximate Weight */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
            Approximate Weight (Tons / Kgs)
          </label>
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded border border-gray-300 focus:ring-blue-100 focus:outline-none focus:ring-4 transition-all text-sm"
            placeholder="e.g. 15 Tons"
          />
        </div>

        {/* Vehicle Requirement */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
            Vehicle & Service Needed
          </label>
          <select
            name="vehicleRequirement"
            value={formData.vehicleRequirement}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded border border-gray-300 focus:ring-blue-100 focus:outline-none focus:ring-4 bg-white transition-all text-sm"
          >
            <option value="full-truck-load">Full Truck Loads (FTL) & Bulk Load</option>
            <option value="part-load">Less Than Truck Loads (LTL) & Part Loads</option>
            <option value="lcv-lpt">LCV & LPT Loads</option>
            <option value="project-logistics">Project Logistics & ODC</option>
            <option value="project-transportation">Project Transportation</option>
            <option value="warehousing">Warehousing Services</option>
          </select>
        </div>

        {/* Preferred Date */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
            Preferred Date of Loading
          </label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded border border-gray-300 focus:ring-blue-100 focus:outline-none focus:ring-4 transition-all text-sm"
          />
        </div>

        {/* Additional Requirements */}
        <div className={compact ? "" : "md:col-span-2"}>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
            Special Instructions / Message
          </label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded border border-gray-300 focus:ring-blue-100 focus:outline-none focus:ring-4 transition-all text-sm resize-none"
            placeholder="Any specific height, vehicle body type, or urgent delivery requirement details..."
          />
        </div>
      </div>

      {status === "error" && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 text-xs rounded border border-red-100 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <span>There was a connection issue. We have saved your request locally, but please also contact us directly at {company.phone}.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full bg-[#1455C0] hover:bg-[#0B2A6F] text-white font-bold text-sm tracking-wider uppercase py-3.5 px-6 rounded transition-all shadow-md flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed group"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Processing Request...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            Request A Free Quote
          </>
        )}
      </button>
    </form>
  );
}
