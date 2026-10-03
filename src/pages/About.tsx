import React from "react";
import { Shield, Users, Clock, Compass, Eye, Target } from "lucide-react";
import { company } from "../data/company";
import { fleetImages, getImageUrl } from "../data/images";

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* --------------------------------------------------------
          ABOUT HERO BANNER
          -------------------------------------------------------- */}
      <section className="relative bg-[#0B2A6F] text-white py-24 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src={getImageUrl(fleetImages[4])}
            alt="Vayu India Roadways carrier truck on highway roadside"
            className="w-full h-full object-cover opacity-20 select-none"
          />
          <div className="absolute inset-0 bg-[#0B2A6F]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#F47B20] bg-white/10 px-3 py-1 rounded-full">
            Corporate Identity
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4">
            About Vayu India Roadways
          </h1>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed font-medium">
            Providing reliable road transportation solutions from Pai, Kaithal, Haryana. Guided by trust, direct communication, and strict safety.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------
          COMPANY OVERVIEW & APPROACH
          -------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side: Images */}
            <div className="relative group">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#0B2A6F] to-[#1455C0] opacity-10 blur-xl" />
              <div className="relative rounded-xl border border-gray-100 overflow-hidden shadow-lg bg-gray-50">
                <img
                  src={getImageUrl(fleetImages[3])}
                  alt="Vayu India decorated transport vehicle angled highway profile"
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-white/95 text-[#172033] p-4 rounded shadow-md border-l-4 border-[#F47B20] max-w-xs">
                  <div className="font-extrabold text-xs uppercase tracking-wider text-[#0B2A6F]">Haryana Carrier</div>
                  <div className="text-[10px] text-gray-500 mt-1">Sturdy construction vehicle built for long-haul national transport routes.</div>
                </div>
              </div>
            </div>

            {/* Right side: Detailed overview */}
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-[#172033] tracking-tight leading-tight">
                Our Corporate Overview
              </h2>
              <div className="w-12 h-1 bg-[#F47B20]" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Vayu India Roadways Pvt. Ltd. is a road transportation firm registered and headquartered in Building No. 1882, Near Library, Pai, Kaithal District, Haryana. We operate specialized logistics and road dispatch operations serving industrial hubs across multiple Indian transport corridors.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our enterprise is built upon the fundamental principle that every cargo placement requires detailed coordination. We do not make sweeping claims about absolute coverage or size; rather, we deliver dedicated attention to every single load assignment we accept. Our business model represents a reliable bridge between commercial manufacturing plants and regional retail hubs.
              </p>

              {/* Pillars list */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-2.5">
                  <Shield className="w-5 h-5 text-[#169447] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#172033] uppercase tracking-wide">Approved Carrier</h4>
                    <p className="text-[10px] text-gray-500 mt-0.5">Complies fully with state transit rules.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Users className="w-5 h-5 text-[#1455C0] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#172033] uppercase tracking-wide">Committed Crew</h4>
                    <p className="text-[10px] text-gray-500 mt-0.5">Experienced vehicle drivers and loaders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          TRANSPORTATION PHILOSOPHY (Safety, Communication, Reliability)
          -------------------------------------------------------- */}
      <section className="py-20 bg-[#F5F7FA] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1455C0]">Our Core Focus</span>
            <h2 className="text-3xl font-extrabold text-[#172033] mt-2 tracking-tight">Our Transportation Philosophy</h2>
            <div className="w-12 h-1 bg-[#F47B20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Safety */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
              <div className="w-12 h-12 bg-[#169447]/10 text-[#169447] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#172033] mb-3">Safety Controls</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We believe that speed must never compromise material safety. Vayu vehicles undergo mechanical inspections, and cargo bindings are cross-checked prior to interstate gate exits to prevent shift damage.
              </p>
            </div>

            {/* Customer Communication */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
              <div className="w-12 h-12 bg-[#1455C0]/10 text-[#1455C0] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#172033] mb-3">Customer Communication</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                No automated chatbot runaround. Our customers get direct telephone access to the operational supervisor coordinating their route, providing true, unedited transit updates whenever needed.
              </p>
            </div>

            {/* Operational Reliability */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
              <div className="w-12 h-12 bg-[#0B2A6F]/10 text-[#0B2A6F] rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#172033] mb-3">Operational Reliability</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                By maintaining standard vehicle configurations and coordinating closely with local driver networks, we keep commitments realistic. We prefer to under-promise and consistently over-perform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          VISION & MISSION (With strict placeholders)
          -------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-[#0B2A6F] text-white p-8 sm:p-12 rounded-xl relative overflow-hidden shadow-md">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Eye className="w-32 h-32" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="bg-white/10 p-3 rounded-lg inline-block text-[#F47B20]">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider">Our Corporate Vision</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  To establish Vayu India Roadways Pvt. Ltd. as a benchmark of corporate trust and logistical dependability in Northern India, serving as the first-choice road carrier for industrial manufacturing plants that demand precision, structural cargo protection, and clear supervisor-led communication.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-[#F5F7FA] text-[#172033] p-8 sm:p-12 rounded-xl border border-gray-200 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Target className="w-32 h-32 text-[#0B2A6F]" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="bg-[#0B2A6F]/5 p-3 rounded-lg inline-block text-[#1455C0]">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-[#0B2A6F]">Our Corporate Mission</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Our mission is to dispatch road carrier fleets with absolute attention to detail, maintaining robust transit protocols across routes. We strive to offer transparent pricing, reliable vehicle placements, and safe handling of all industrial goods while supporting our drivers and keeping roads secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
