import React from "react";
import { useRouter, Link } from "../components/Router";
import { company, services } from "../data/company";
import { fleetImages, getImageUrl } from "../data/images";
import {
  ArrowLeft,
  Phone,
  CheckCircle,
  Truck,
  Boxes,
  Container,
  Compass,
  Shuffle,
  Warehouse,
  ShieldCheck,
  AlertCircle
} from "lucide-react";

import { usePhoneModal } from "../context/PhoneModalContext";

interface ServiceDetailProps {
  onQuoteClick: () => void;
}

export default function ServiceDetail({ onQuoteClick }: ServiceDetailProps) {
  const { path } = useRouter();
  const { openPhoneModal } = usePhoneModal();

  // Find the service matching the pathname
  const service = services.find((s) => s.path === path);

  if (!service) {
    return (
      <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center p-8 text-center border-t border-b border-gray-100">
        <AlertCircle className="w-16 h-16 text-amber-500 mb-4" />
        <h2 className="text-2xl font-bold text-[#172033] mb-2">Service Route Not Found</h2>
        <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
          We couldn't locate the specific service page details you requested. Please check the services directory.
        </p>
        <Link
          href="/services"
          className="bg-[#0B2A6F] hover:bg-[#1455C0] text-white text-xs font-bold uppercase tracking-widest py-3 px-6 rounded shadow"
        >
          Back To All Services
        </Link>
      </div>
    );
  }

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Truck":
        return <Truck className="w-8 h-8 text-[#1455C0]" />;
      case "Boxes":
        return <Boxes className="w-8 h-8 text-[#1455C0]" />;
      case "Container":
        return <Container className="w-8 h-8 text-[#1455C0]" />;
      case "Compass":
        return <Compass className="w-8 h-8 text-[#1455C0]" />;
      case "Shuffle":
        return <Shuffle className="w-8 h-8 text-[#1455C0]" />;
      case "Warehouse":
        return <Warehouse className="w-8 h-8 text-[#1455C0]" />;
      default:
        return <Truck className="w-8 h-8 text-[#1455C0]" />;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --------------------------------------------------------
          SERVICE HERO
          -------------------------------------------------------- */}
      <section className="relative bg-[#0B2A6F] text-white py-20">
        <div className="absolute inset-0 z-0">
          <img
            src={getImageUrl(fleetImages[3])}
            alt={`${service.title} logistics operations`}
            className="w-full h-full object-cover opacity-10 select-none"
          />
          <div className="absolute inset-0 bg-[#0B2A6F]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold text-white/70 hover:text-white uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-[#F47B20] bg-white/10 px-3 py-1 rounded">
            Specialized Road Carrier Division
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-3 uppercase">
            {service.title}
          </h1>
          <div className="w-16 h-1 bg-[#F47B20] mt-4" />
        </div>
      </section>

      {/* --------------------------------------------------------
          MAIN CONTENT & DETAILS
          -------------------------------------------------------- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left/Middle Column (Content Details) */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#1455C0]/5 rounded-lg">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <h2 className="text-xl font-bold text-[#0B2A6F] uppercase tracking-wide">
                    Service Overview
                  </h2>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {service.longDesc}
                </p>
              </div>

              {/* Suitable Cargo */}
              <div className="bg-[#F5F7FA] p-6 sm:p-8 rounded-lg border border-gray-200">
                <h3 className="text-sm font-extrabold uppercase text-[#172033] tracking-wider mb-4 border-l-4 border-[#1455C0] pl-3">
                  Suitable Cargo Categories
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-gray-600">
                  {service.suitableCargo.map((item, key) => (
                    <li key={key} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4.5 h-4.5 text-[#169447] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specific Timeline / Dispatch Process */}
              <div className="space-y-6">
                <h3 className="text-sm font-extrabold uppercase text-[#172033] tracking-wider border-l-4 border-[#F47B20] pl-3">
                  Operational Movement Steps
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.process.map((step) => (
                    <div key={step.step} className="bg-white p-5 rounded-lg border border-gray-150 shadow-sm flex items-start gap-4">
                      <span className="text-2xl font-black text-[#1455C0]/20 select-none">
                        {step.step}
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-[#172033] uppercase tracking-wider mb-1">
                          {step.name}
                        </h4>
                        <p className="text-[11px] text-gray-500 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Considerations Banner */}
              <div className="p-4 bg-amber-50 rounded border border-amber-200 text-amber-900 text-xs flex gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold uppercase tracking-wider block mb-1">Operational Consideration:</span>
                  <p className="text-gray-700 leading-relaxed">{service.considerations}</p>
                </div>
              </div>
            </div>

            {/* Right Column (Sidebar CTA & Help) */}
            <div className="space-y-6 lg:col-span-1">
              {/* Contact / Action Card */}
              <div className="bg-[#0B2A6F] text-white p-8 rounded-xl shadow-md space-y-6 text-center">
                <h3 className="text-lg font-bold uppercase tracking-wider">
                  Request Service Pricing
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Provide your pickup origin, cargo weight, and destination routes. Our logistics desk in Haryana will structure an operational cost estimate.
                </p>
                <div className="space-y-3 pt-2">
                  <button
                    onClick={onQuoteClick}
                    className="w-full bg-[#F47B20] hover:bg-[#E25C00] text-white font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded transition-all shadow"
                  >
                    Get A Quote
                  </button>
                  <button
                    onClick={openPhoneModal}
                    className="w-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-widest py-3 px-6 rounded transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#F47B20]" />
                    <span>Call operations</span>
                  </button>
                </div>
                <div className="text-[10px] text-white/50 border-t border-white/10 pt-4">
                  For immediate vehicle placement inquiries, please dial directly.
                </div>
              </div>

              {/* Service Benefits List */}
              <div className="border border-gray-200 rounded-xl p-6 sm:p-8 space-y-4">
                <h3 className="text-xs font-extrabold uppercase text-[#172033] tracking-widest">
                  Key Service Benefits
                </h3>
                <ul className="space-y-3 text-xs text-gray-500">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#169447] font-bold">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
