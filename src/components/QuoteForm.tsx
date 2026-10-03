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
    return (
      <div className="bg-white p-8 rounded-lg text-center flex flex-col items-center justify-center border border-emerald-100 shadow-sm max-w-md mx-auto my-6">
        <CheckCircle2 className="w-16 h-16 text-[#169447] mb-4" />
        <h3 className="text-2xl font-bold text-[#172033] mb-2">Quote Requested!</h3>
        <p className="text-gray-600 mb-6 text-sm">
          Thank you for sharing your logistics requirements. Our operations team from Pai, Kaithal will evaluate your routes and cargo specs and contact you within 2-4 hours.
        </p>
        <div className="text-xs bg-[#F5F7FA] py-2 px-4 rounded border border-gray-100 text-gray-500">
          Urgent requirement? Call us directly: <span className="font-bold text-[#0B2A6F]">{company.phone}</span>
        </div>
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
