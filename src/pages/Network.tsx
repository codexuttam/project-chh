import React from "react";
import { company } from "../data/company";
import { fleetImages, getImageUrl } from "../data/images";
import { MapPin, Phone, Mail, HelpCircle, AlertCircle, ShieldCheck } from "lucide-react";

export default function Network() {
  return (
    <div className="bg-white min-h-screen">
      {/* --------------------------------------------------------
          NETWORK HERO
          -------------------------------------------------------- */}
      <section className="relative bg-[#0B2A6F] text-white py-24 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src={getImageUrl(fleetImages[1])}
            alt="Vayu India Roadways dispatch coordinates"
            className="w-full h-full object-cover opacity-15 select-none"
          />
          <div className="absolute inset-0 bg-[#0B2A6F]/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#F47B20] bg-white/10 px-3 py-1 rounded-full">
            Logistical Coordinates
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4">
            Vayu India Roadways Network
          </h1>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed font-medium">
            Explore our physical operations base and routes. We believe in presenting verified branch structures without fabrication.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------
          NETWORK BASE MAP & DETAIL CO-LOCATIONS
          -------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Physical location detail & head office */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#1455C0]/5 text-[#1455C0] border border-[#1455C0]/20 px-3 py-1 rounded text-xs font-bold uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4 text-[#169447]" /> Head Office Base
                </div>
                <h2 className="text-2xl font-extrabold text-[#172033] tracking-tight">
                  Pai Head Office (Kaithal, Haryana)
                </h2>
                <div className="w-12 h-1 bg-[#F47B20]" />
              </div>

              {/* Verified Address box */}
              <div className="bg-[#F5F7FA] p-6 sm:p-8 rounded-lg border border-gray-200 shadow-sm space-y-4">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-[#F47B20] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xs font-black uppercase text-gray-500 tracking-widest mb-1">Physical Address</h3>
                    <p className="text-sm font-bold text-[#172033] leading-relaxed uppercase">
                      VAYU INDIA ROADWAYS PVT. LTD.<br />
                      BUILDING NO. 1882,<br />
                      NEAR LIBRARY,<br />
                      PAI, DISTRICT KAITHAL,<br />
                      HARYANA - 136043, INDIA
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-gray-200 pt-4">
                  <Phone className="w-5 h-5 text-[#1455C0] flex-shrink-0" />
                  <div>
                    <h3 className="text-xs font-black uppercase text-gray-500 tracking-widest mb-1">Immediate Desk</h3>
                    <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="text-sm font-bold text-[#0B2A6F] hover:text-[#1455C0] transition-colors">
                      {company.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-gray-200 pt-4">
                  <Mail className="w-5 h-5 text-[#1455C0] flex-shrink-0" />
                  <div>
                    <h3 className="text-xs font-black uppercase text-gray-500 tracking-widest mb-1">Corporate Mail</h3>
                    <a href={`mailto:${company.email}`} className="text-sm font-bold text-[#0B2A6F] hover:text-[#1455C0] transition-colors lowercase">
                      {company.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Expansion Notice */}
              <div className="p-4 bg-blue-50 rounded border border-blue-100 text-[#0B2A6F] text-xs flex gap-3">
                <AlertCircle className="w-5 h-5 text-[#1455C0] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold uppercase tracking-wider block mb-1">Network Expansion Protocol:</span>
                  <p className="text-gray-600 leading-relaxed">
                    Vayu India Roadways Pvt. Ltd. coordinates loading points nationwide through aligned strategic hub partnerships. Additional physical regional office coordinates can be appended directly to this dashboard as Vayu's direct network expands.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: High-fidelity Vector Map of India / Haryana operational hub */}
            <div className="bg-[#F5F7FA] p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center items-center relative min-h-[400px]">
              {/* SVG Map of India placeholder representation */}
              <svg viewBox="0 0 400 450" className="w-full max-h-[380px] text-gray-300 drop-shadow-sm select-none">
                {/* Simplified outline of Indian subcontinent with a highlighted node on Kaithal, Haryana */}
                <path
                  d="M 120,60 C 140,20 180,10 200,20 C 210,40 180,60 170,80 C 190,100 220,90 230,110 C 250,120 230,150 240,170 C 270,180 290,160 300,180 C 310,210 290,230 270,240 C 260,250 270,270 250,290 C 240,310 210,340 190,360 L 180,410 L 170,410 L 160,370 L 140,340 L 130,300 L 130,270 L 100,250 C 90,210 70,190 70,160 C 70,120 90,110 100,95 C 100,75 110,70 120,60 Z"
                  fill="#E5EAF0"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />

                {/* Haryana highlight */}
                <path
                  d="M 140,110 C 145,105 152,108 155,115 C 150,120 142,118 140,110 Z"
                  fill="#F47B20"
                  fillOpacity="0.2"
                  stroke="#F47B20"
                  strokeWidth="1.5"
                />

                {/* Pulsing Marker for Pai Head Office in Haryana */}
                <g transform="translate(148, 112)">
                  <circle r="12" fill="#F47B20" fillOpacity="0.3" className="animate-ping" />
                  <circle r="6" fill="#F47B20" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="12" y="4" fontFamily="'Poppins', sans-serif" fontSize="11" fontWeight="bold" fill="#0B2A6F" textAnchor="start">
                    PAI (Kaithal)
                  </text>
                </g>

                {/* Major Transit Corridor Arrows (subtle) */}
                <path d="M 148,112 L 110,180" fill="none" stroke="#1455C0" strokeWidth="1.5" strokeDasharray="4,4" />
                <path d="M 148,112 L 195,150" fill="none" stroke="#1455C0" strokeWidth="1.5" strokeDasharray="4,4" />
                <path d="M 148,112 L 160,250" fill="none" stroke="#1455C0" strokeWidth="1.5" strokeDasharray="4,4" />

                {/* Major routes badge */}
                <g transform="translate(10, 390)">
                  <rect width="145" height="40" fill="#FFFFFF" rx="4" stroke="#E5EAF0" strokeWidth="1" />
                  <circle cx="15" cy="20" r="5" fill="#1455C0" />
                  <text x="28" y="24" fontFamily="'Poppins', sans-serif" fontSize="9" fontWeight="bold" fill="#172033">
                    Active Transport corridors
                  </text>
                </g>
              </svg>

              <div className="absolute bottom-4 right-4 text-center bg-white p-3 rounded shadow-sm border border-gray-150">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Operational Hub</span>
                <span className="text-xs text-[#0B2A6F] font-bold">Haryana Corridor Node</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
