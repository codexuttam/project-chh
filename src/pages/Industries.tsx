import React from "react";
import { company, industries } from "../data/company";
import { fleetImages, getImageUrl } from "../data/images";
import { ShieldAlert, CheckCircle, Package, Settings, HardHat } from "lucide-react";

export default function Industries() {
  return (
    <div className="bg-white min-h-screen">
      {/* --------------------------------------------------------
          INDUSTRIES HERO
          -------------------------------------------------------- */}
      <section className="relative bg-[#0B2A6F] text-white py-24 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src={getImageUrl(fleetImages[4])}
            alt="Vayu India Roadways industrial logistics"
            className="w-full h-full object-cover opacity-15 select-none"
          />
          <div className="absolute inset-0 bg-[#0B2A6F]/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#F47B20] bg-white/10 px-3 py-1 rounded-full">
            Sector Competency
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4">
            Industries We Support
          </h1>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed font-medium">
            Vayu India Roadways Pvt. Ltd. structures reliable road movements for commercial enterprises in key industrial sectors.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------
          INDUSTRIES PRESENTATION GRID
          -------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-[#F5F7FA] p-8 rounded-lg border border-gray-200 hover:border-[#1455C0]/30 hover:bg-white hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Title & Index */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#1455C0] uppercase tracking-widest bg-[#1455C0]/5 py-1 px-3 rounded">
                      Industrial Sector 0{idx + 1}
                    </span>
                    <Package className="w-5 h-5 text-gray-400 group-hover:text-[#F47B20] transition-colors" />
                  </div>

                  <h3 className="text-lg font-extrabold text-[#0B2A6F] uppercase tracking-wide">
                    {ind.name} Logistics Support
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {ind.desc} Vayu India Roadways Pvt. Ltd. provides reliable vehicle alignments to ensure materials are loaded, lashed, and routed with professional care. We align dispatch loops to meet the high volume flow of this sector.
                  </p>

                  <div className="pt-4 border-t border-gray-150">
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Transit Objectives:</h4>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-500 font-medium">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#169447]" />
                        <span>Secure bindings</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#169447]" />
                        <span>Route mapping</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          CLIENTS POLICY BLOCK
          -------------------------------------------------------- */}
      <section className="py-16 bg-[#F5F7FA] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-amber-50 rounded-full border border-amber-200 text-[#F47B20]">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-bold text-[#172033] uppercase tracking-widest">Enterprise Customer Confidentiality</h3>
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Vayu India Roadways Pvt. Ltd. respects the cargo and supply chain privacy of our commercial accounts. To remain compliant with logistics contracts and corporate agreements, we do not publicly display specific customer corporate logos or proprietary brand registries.
          </p>
          <p className="text-xs text-gray-400 italic font-medium">
            Verified institutional buyers requesting credentials or safety record summaries may consult our Pai desk privately.
          </p>
        </div>
      </section>
    </div>
  );
}
