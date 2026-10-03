import React from "react";
import { company, stats, services, industries } from "../data/company";
import { fleetImages, getImageUrl } from "../data/images";
import { Link } from "../components/Router";
import {
  Shield,
  Clock,
  Settings,
  Headphones,
  ArrowRight,
  CheckCircle,
  Truck,
  Boxes,
  Container,
  Compass,
  Shuffle,
  Warehouse,
  ChevronRight,
  Phone,
  FileText
} from "lucide-react";

interface HomeProps {
  onQuoteClick: () => void;
}

export default function Home({ onQuoteClick }: HomeProps) {
  // Map icons to services
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
    <div className="bg-white overflow-hidden">
      {/* --------------------------------------------------------
          SECTION 1 — HERO
          -------------------------------------------------------- */}
      <section className="relative h-[85vh] sm:h-[80vh] flex items-center justify-center bg-gray-900 text-white">
        {/* Hero Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={getImageUrl(fleetImages[0])}
            alt="Vayu India Roadways fleet truck on interstate highway at night"
            className="w-full h-full object-cover opacity-40 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A6F]/90 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Tagline / Eyebrow */}
            <span className="inline-flex items-center gap-2 bg-[#F47B20] text-white text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Road Transportation & Logistics
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Moving India Forward, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47B20] to-[#E25C00]">
                One Delivery
              </span>{" "}
              at a Time.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed font-medium">
              Vayu India Roadways Pvt. Ltd. provides dependable road transportation solutions with a focus on safe movement, timely delivery, and professional logistics operations. Based in Pai, Kaithal, Haryana.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onQuoteClick}
                className="bg-[#1455C0] hover:bg-[#0B2A6F] text-white text-sm font-bold tracking-wider uppercase py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Get A Quote
              </button>
              <Link
                href="/services"
                className="border-2 border-white/60 hover:border-white text-white hover:bg-white/10 text-sm font-bold tracking-wider uppercase py-3.5 px-8 rounded-lg transition-all text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Banner with Key Features */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0B2A6F]/85 backdrop-blur-md border-t border-white/10 py-4 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-6 text-center text-xs font-bold uppercase tracking-widest">
            <div className="text-white border-r border-white/15 py-1">★ Safe & Insured Transit</div>
            <div className="text-[#F47B20] border-r border-white/15 py-1">★ Punctual Placement Schedule</div>
            <div className="text-white py-1">★ Experienced Fleet Drivers</div>
          </div>
        </div>
      </section>


      {/* --------------------------------------------------------
          SECTION 2 — COMPANY INTRODUCTION
          -------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Truck Photo */}
            <div className="relative group">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#0B2A6F] to-[#F47B20] opacity-10 blur-xl group-hover:opacity-20 transition duration-500" />
              <div className="relative overflow-hidden rounded-xl border-4 border-white shadow-xl bg-gray-100">
                <img
                  src={getImageUrl(fleetImages[1])}
                  alt="Vayu India Roadways logistics vehicle parked on Haryana highway road"
                  className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 bg-[#0B2A6F] text-white py-2 px-4 rounded text-xs font-bold shadow-md">
                  Vayu Operational Fleet
                </div>
              </div>
            </div>

            {/* Right Column: Original Content */}
            <div className="space-y-6">
              <div className="inline-block bg-[#0B2A6F]/5 border-l-4 border-[#F47B20] py-1.5 px-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B2A6F]">
                  About Our Enterprise
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight leading-none">
                Your Trusted Road Transportation Partner
              </h2>
              <div className="w-16 h-1 bg-[#F47B20]" />
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Vayu India Roadways Pvt. Ltd. is a road transportation company based in Pai, Kaithal, Haryana, focused on dependable movement of goods across routes where safety, coordination, and timely delivery matter.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our approach is built around responsible transportation, clear communication, and practical logistics solutions tailored to the movement requirements of our customers. Whether coordinating Full Truck Loads or helping small businesses schedule part-load distributions, we emphasize safe handling above all else.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#0B2A6F] hover:bg-[#1455C0] text-white font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded shadow transition-all hover:translate-x-1"
                >
                  Know More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* --------------------------------------------------------
          SECTION 3 — LOGISTICS VALUE PROPOSITION
          -------------------------------------------------------- */}
      <section className="py-20 bg-[#F5F7FA] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1455C0]">
              Operational Pillars
            </span>
            <h2 className="text-3xl font-extrabold text-[#172033] mt-2 tracking-tight">
              One Stop Solution For Your Logistics Needs
            </h2>
            <div className="w-12 h-1 bg-[#F47B20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Safe Transportation */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#0B2A6F]/5 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                <Shield className="w-6 h-6 text-[#0B2A6F]" />
              </div>
              <h3 className="text-base font-bold text-[#172033] mb-2 uppercase tracking-wide">
                Safe Transportation
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Focused on careful handling and secure movement. We utilize reliable fasteners and inspect cargo placement prior to highway departure.
              </p>
            </div>

            {/* Card 2: Timely Delivery */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#0B2A6F]/5 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                <Clock className="w-6 h-6 text-[#1455C0]" />
              </div>
              <h3 className="text-base font-bold text-[#172033] mb-2 uppercase tracking-wide">
                Timely Delivery
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Planned transportation with serious attention to delivery schedules, helping minimize downtime in raw material supply chains.
              </p>
            </div>

            {/* Card 3: Reliable Operations */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#0B2A6F]/5 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                <Settings className="w-6 h-6 text-[#F47B20]" />
              </div>
              <h3 className="text-base font-bold text-[#172033] mb-2 uppercase tracking-wide">
                Reliable Operations
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Professional coordination throughout the transportation process. We verify route requirements and regulatory compliance parameters.
              </p>
            </div>

            {/* Card 4: Customer Support */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#0B2A6F]/5 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                <Headphones className="w-6 h-6 text-[#169447]" />
              </div>
              <h3 className="text-base font-bold text-[#172033] mb-2 uppercase tracking-wide">
                Customer Support
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Clear and straightforward communication from initial booking enquiry to unloading signatures at the drop location.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* --------------------------------------------------------
          SECTION 4 — BUSINESS STATISTICS (No fabricated data)
          -------------------------------------------------------- */}
      <section className="bg-[#0B2A6F] text-white py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#1455C0_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2 border-r last:border-0 border-white/10 px-4">
                <span className="block text-4xl sm:text-5xl font-black text-white tracking-tight">
                  {stat.value}
                </span>
                <div className="w-8 h-1 bg-[#F47B20] mx-auto" />
                <span className="block text-xs font-extrabold uppercase tracking-widest text-[#F47B20]">
                  {stat.label}
                </span>
                <p className="text-[10px] text-white/60 leading-relaxed hidden sm:block">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --------------------------------------------------------
          SECTION 5 — END-TO-END PROCESS
          -------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1455C0]">
              Operational Workflow
            </span>
            <h2 className="text-3xl font-extrabold text-[#172033] mt-2 tracking-tight">
              End-to-End Transportation Process
            </h2>
            <div className="w-12 h-1 bg-[#F47B20] mx-auto mt-4" />
          </div>

          {/* Timeline Wrapper */}
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#E5EAF0] -translate-y-1/2 hidden lg:block z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative z-10">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center lg:text-left">
                <div className="w-12 h-12 bg-[#0B2A6F] text-white rounded-full flex items-center justify-center font-black text-lg mx-auto lg:mx-0 mb-4 shadow-md border-4 border-white ring-4 ring-[#0B2A6F]/10">
                  01
                </div>
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#172033] mb-2">
                  INQUIRE
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Share your cargo, weight, pickup location, and target route details with our dispatch desk.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center lg:text-left">
                <div className="w-12 h-12 bg-[#1455C0] text-white rounded-full flex items-center justify-center font-black text-lg mx-auto lg:mx-0 mb-4 shadow-md border-4 border-white ring-4 ring-[#1455C0]/10">
                  02
                </div>
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#172033] mb-2">
                  DISCUSS
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Our team reviews the cargo type, timing restrictions, and matches your load to the appropriate vehicle type.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center lg:text-left">
                <div className="w-12 h-12 bg-[#F47B20] text-white rounded-full flex items-center justify-center font-black text-lg mx-auto lg:mx-0 mb-4 shadow-md border-4 border-white ring-4 ring-[#F47B20]/10">
                  03
                </div>
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#172033] mb-2">
                  LOADING
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Vehicles are placed securely at the pickup point, loaded with due care, and secured before leaving the yard.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center lg:text-left">
                <div className="w-12 h-12 bg-[#169447] text-white rounded-full flex items-center justify-center font-black text-lg mx-auto lg:mx-0 mb-4 shadow-md border-4 border-white ring-4 ring-[#169447]/10">
                  04
                </div>
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#172033] mb-2">
                  DELIVERY
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  The shipment reaches its destination safely through organized roads, backed by regular transit communications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* --------------------------------------------------------
          SECTION 6 — SERVICES
          -------------------------------------------------------- */}
      <section className="py-20 bg-[#F5F7FA] border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1455C0]">
              What We Offer
            </span>
            <h2 className="text-3xl font-extrabold text-[#172033] mt-2 tracking-tight">
              Transportation Services We Provide
            </h2>
            <div className="w-12 h-1 bg-[#F47B20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-[#1455C0]/40 transition-all flex flex-col group"
              >
                {/* Header Highlight Line */}
                <div className="h-1 w-full bg-[#1455C0] group-hover:bg-[#F47B20] transition-colors" />

                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="p-3 bg-[#1455C0]/5 rounded-lg inline-block">
                      {getServiceIcon(service.iconName)}
                    </div>
                    {/* Title */}
                    <h3 className="text-base font-bold text-[#0B2A6F] tracking-wide uppercase leading-tight min-h-[40px]">
                      {service.title}
                    </h3>
                    {/* Short Description */}
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Know More link */}
                  <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between">
                    <Link
                      href={service.path}
                      className="text-xs font-extrabold text-[#1455C0] hover:text-[#0B2A6F] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      Know More <ChevronRight className="w-4 h-4" />
                    </Link>
                    <span className="text-xs font-bold text-gray-200 uppercase">
                      Vayu Service
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --------------------------------------------------------
          SECTION 7 — WHY VAYU
          -------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Info Column */}
            <div className="space-y-6">
              <div className="inline-block bg-[#0B2A6F]/5 border-l-4 border-[#F47B20] py-1.5 px-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B2A6F]">
                  Our Commitment
                </span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#172033] tracking-tight leading-none">
                Why Choose Vayu India Roadways?
              </h2>
              <div className="w-16 h-1 bg-[#F47B20]" />
              <p className="text-gray-600 leading-relaxed text-sm">
                We believe in providing honest, straightforward road transport services without hyperbole. Our clients choose Vayu India Roadways Pvt. Ltd. because we focus on the fundamental details of reliable freight logistics.
              </p>

              <div className="space-y-4 pt-2">
                {/* Check blocks */}
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#169447] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#172033]">Reliable Transportation</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Direct coordination to dispatch goods along secure corridors.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#169447] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#172033]">Professional Coordination</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">We double-check cargo bindings and permit compliances meticulously.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#169447] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#172033]">Safety-Focused Operations</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Your cargo's physical integrity is our primary responsibility.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#169447] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#172033]">Timely Communication</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Direct telephone communication from our managers during transit.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="relative group">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#1455C0] to-[#169447] opacity-10 blur-xl group-hover:opacity-20 transition duration-500" />
              <div className="relative overflow-hidden rounded-xl border-4 border-white shadow-xl bg-gray-100">
                <img
                  src={getImageUrl(fleetImages[2])}
                  alt="Front view of Tata truck HR39 G6198"
                  className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* --------------------------------------------------------
          SECTION 8 — FLEET / VEHICLES
          -------------------------------------------------------- */}
      <section className="py-20 bg-[#F5F7FA] border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Short text & CTA */}
            <div className="space-y-6 lg:col-span-1">
              <div className="inline-block bg-[#0B2A6F]/5 border-l-4 border-[#F47B20] py-1.5 px-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B2A6F]">
                  Physical Assets
                </span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#172033] tracking-tight leading-none">
                Our Road Fleet
              </h2>
              <div className="w-16 h-1 bg-[#F47B20]" />
              <p className="text-gray-600 leading-relaxed text-sm">
                Our transportation operations are supported by road vehicles suited to different cargo movement requirements. We specialize in TATA commercial carriers designed for structural sturdiness on highway networks.
              </p>
              <div className="pt-2">
                <button
                  onClick={onQuoteClick}
                  className="inline-flex items-center gap-2 bg-[#1455C0] hover:bg-[#0B2A6F] text-white font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded shadow transition-all"
                >
                  Discuss Your Requirement
                </button>
              </div>
            </div>

            {/* Premium Fleet Collage (Right) */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {fleetImages.slice(2, 4).map((img, idx) => (
                <div key={img.id} className="relative overflow-hidden rounded-lg border border-gray-200 bg-white group shadow-sm">
                  <div className="overflow-hidden h-56">
                    <img
                      src={getImageUrl(img)}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-bold text-[#F47B20] uppercase tracking-wider block mb-1">
                      Carrier Profile 0{idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-[#172033] line-clamp-1">
                      {img.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                      {img.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* --------------------------------------------------------
          SECTION 9 — INDUSTRIES
          -------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1455C0]">
              Who We Assist
            </span>
            <h2 className="text-3xl font-extrabold text-[#172033] mt-2 tracking-tight">
              Industries We Can Support
            </h2>
            <div className="w-12 h-1 bg-[#F47B20] mx-auto mt-4" />
            <p className="text-xs text-gray-400 mt-3">
              We provide road carrier services to businesses in multiple commercial sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-[#F5F7FA] p-5 rounded-lg border border-gray-200 text-center hover:bg-[#0B2A6F]/5 hover:border-[#0B2A6F]/20 transition-all group"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm text-sm font-black text-[#0B2A6F] group-hover:bg-[#0B2A6F] group-hover:text-white transition-colors">
                  {idx + 1}
                </div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#172033] line-clamp-1 mb-1">
                  {ind.name}
                </h4>
                <p className="text-[10px] text-gray-400 leading-normal line-clamp-2">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --------------------------------------------------------
          SECTION 10 — GALLERY
          -------------------------------------------------------- */}
      <section className="py-20 bg-[#F5F7FA] border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#1455C0]">
                Visual Proof
              </span>
              <h2 className="text-3xl font-extrabold text-[#172033] mt-2 tracking-tight">
                Authentic Fleet Gallery
              </h2>
              <div className="w-12 h-1 bg-[#F47B20] mt-3" />
            </div>
            <Link
              href="/gallery"
              className="text-xs font-bold text-[#1455C0] hover:text-[#0B2A6F] uppercase tracking-wider flex items-center gap-1 mt-4 md:mt-0"
            >
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleetImages.slice(0, 3).map((img) => (
              <div
                key={img.id}
                className="group relative overflow-hidden rounded-lg bg-white border border-gray-200 shadow-sm"
              >
                <div className="overflow-hidden h-64 relative">
                  <img
                    src={getImageUrl(img)}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="text-white">
                      <h4 className="text-xs font-bold uppercase tracking-wider mb-1">{img.title}</h4>
                      <p className="text-[10px] text-gray-300 line-clamp-2 leading-relaxed">{img.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --------------------------------------------------------
          SECTION 11 — CALL TO ACTION
          -------------------------------------------------------- */}
      <section className="relative py-20 bg-[#0B2A6F] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(#1455C0_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="inline-block bg-[#F47B20] text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full">
            Connect With Our Pai Office
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none">
            Have a Transportation Requirement?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Tell us about your route, cargo specifications, and timeline. Our logistics management team from Haryana will formulate an appropriate movement schedule and get in touch with you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button
              onClick={onQuoteClick}
              className="w-full sm:w-auto bg-[#F47B20] hover:bg-[#E25C00] text-white font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-lg shadow-md transition-all hover:scale-105"
            >
              Get A Quote
            </button>
            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              className="w-full sm:w-auto bg-transparent border-2 border-white/40 hover:border-white text-white font-bold text-xs uppercase tracking-widest py-3.5 px-8 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#F47B20]" />
              <span>Call Now: {company.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
