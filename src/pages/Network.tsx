import React from "react";
import { company } from "../data/company";
import { fleetImages, getImageUrl, siteImages } from "../data/images";
import { MapPin, Phone, Mail, ShieldCheck, Truck, Clock, Compass, Navigation } from "lucide-react";
import { usePhoneModal } from "../context/PhoneModalContext";

export default function Network() {
  const { openPhoneModal, openEmailModal } = usePhoneModal();
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
            className="w-full h-full object-cover opacity-20 select-none"
          />
          <div className="absolute inset-0 bg-[#0B2A6F]/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#F47B20] bg-white/10 px-3 py-1 rounded-full">
            Logistical Network & Infrastructure
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4">
            Vayu India Roadways Network
          </h1>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed font-medium">
            Explore our physical operations base in Haryana, active highway corridors, and verified transportation infrastructure across India.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------
          NETWORK HUB & FLEET GALLERY SHOWCASE (No map)
          -------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Physical location detail & head office */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#1455C0]/5 text-[#1455C0] border border-[#1455C0]/20 px-3 py-1 rounded text-xs font-bold uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4 text-[#169447]" /> Head Office Operational Node
                </div>
                <h2 className="text-3xl font-black text-[#172033] tracking-tight">
                  Pai Head Office (Kaithal, Haryana)
                </h2>
                <div className="w-12 h-1 bg-[#F47B20]" />
              </div>

              {/* Verified Address box */}
              <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-xl border border-gray-200/80 shadow-sm space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-[#F47B20] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-1">Registered Address</h3>
                    <p className="text-sm font-extrabold text-[#172033] leading-relaxed uppercase">
                      VAYU INDIA ROADWAYS PVT. LTD.<br />
                      BUILDING NO. 1882,<br />
                      NEAR LIBRARY,<br />
                      PAI, DISTRICT KAITHAL,<br />
                      HARYANA - 136043, INDIA
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-gray-200/60 pt-4">
                  <Phone className="w-5 h-5 text-[#1455C0] flex-shrink-0" />
                  <div>
                    <h3 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-1">Direct Dispatch Desk</h3>
                    <button onClick={openPhoneModal} className="text-sm font-extrabold text-[#0B2A6F] hover:text-[#1455C0] transition-colors cursor-pointer text-left">
                      {company.phone}
                    </button>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-gray-200/60 pt-4">
                  <Mail className="w-5 h-5 text-[#1455C0] flex-shrink-0" />
                  <div>
                    <h3 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-1">Corporate Communications</h3>
                    <button onClick={openEmailModal} className="text-sm font-extrabold text-[#0B2A6F] hover:text-[#1455C0] transition-colors lowercase cursor-pointer text-left">
                      {company.email}
                    </button>
                  </div>
                </div>
              </div>

              {/* Verified Status Tag */}
              <div className="p-4 bg-emerald-50/80 rounded-xl border border-emerald-200/80 text-[#0F5132] text-xs flex gap-3">
                <ShieldCheck className="w-5 h-5 text-[#169447] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold uppercase tracking-wider block mb-1">Active Operations Base:</span>
                  <p className="text-gray-600 leading-relaxed">
                    All transportation orders, vehicle dispatch schedules, driver assignments, and billing procedures are executed directly from our registered base in Pai, Kaithal.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: Real Image Grid Showcase (Replaces SVG Map) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Main Image 1: Fleet Staging */}
                <div className="sm:col-span-2 relative h-64 rounded-xl overflow-hidden border border-gray-200 shadow-md group">
                  <img
                    src={getImageUrl(fleetImages[2])}
                    alt="Vayu India Roadways Haryana staging yard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
                    <div>
                      <span className="bg-[#F47B20] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded mb-1 inline-block">
                        Haryana Central Base
                      </span>
                      <h3 className="text-sm font-bold text-white uppercase">
                        Vehicle Fleet Staging Yard — HR39 G6198
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Sub Image 2: Interstate Route */}
                <div className="relative h-48 rounded-xl overflow-hidden border border-gray-200 shadow-sm group">
                  <img
                    src={getImageUrl(fleetImages[1])}
                    alt="Vayu truck countryside route"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-bold text-white uppercase">
                      Rural & Industrial Route Transit
                    </span>
                  </div>
                </div>

                {/* Sub Image 3: Night Transit */}
                <div className="relative h-48 rounded-xl overflow-hidden border border-gray-200 shadow-sm group">
                  <img
                    src={getImageUrl(fleetImages[0])}
                    alt="Vayu truck night highway run"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-bold text-white uppercase">
                      24×7 Night Interstate Express Run
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          CORE TRANSPORTATION CORRIDORS & NETWORK CAPABILITIES
          -------------------------------------------------------- */}
      <section className="py-20 bg-[#F8FAFC] border-t border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#1455C0]">
              State & Interstate Mobility
            </span>
            <h2 className="text-3xl font-black text-[#172033] mt-2 tracking-tight">
              Primary Operational Transport Corridors
            </h2>
            <div className="w-12 h-1 bg-[#F47B20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#0B2A6F]/5 flex items-center justify-center text-[#0B2A6F] mb-4">
                <Navigation className="w-6 h-6 text-[#0B2A6F]" />
              </div>
              <h3 className="text-base font-extrabold text-[#172033] mb-2 uppercase tracking-wide">
                Haryana — Delhi NCR
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Regular daily rotations connecting industrial manufacturing belts across Kaithal, Panipat, Sonipat, Gurgaon, and Delhi NCR hubs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#0B2A6F]/5 flex items-center justify-center text-[#1455C0] mb-4">
                <Truck className="w-6 h-6 text-[#1455C0]" />
              </div>
              <h3 className="text-base font-extrabold text-[#172033] mb-2 uppercase tracking-wide">
                Punjab & North Belt
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Direct cargo movements connecting Punjab, Himachal Pradesh, and Jammu borders for agricultural produce and heavy hardware goods.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#0B2A6F]/5 flex items-center justify-center text-[#F47B20] mb-4">
                <Compass className="w-6 h-6 text-[#F47B20]" />
              </div>
              <h3 className="text-base font-extrabold text-[#172033] mb-2 uppercase tracking-wide">
                Rajasthan & Western Routes
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Reliable long-haul transit linking Haryana to Jaipur, Bhiwadi, Kota, and Gujarat port-connect corridors.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#0B2A6F]/5 flex items-center justify-center text-[#169447] mb-4">
                <Clock className="w-6 h-6 text-[#169447]" />
              </div>
              <h3 className="text-base font-extrabold text-[#172033] mb-2 uppercase tracking-wide">
                Scheduled Transit Tracking
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Telephone dispatch updates and verified loading-to-unloading signatures across all assigned transport contracts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
