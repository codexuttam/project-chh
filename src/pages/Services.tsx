import React from "react";
import { company, services } from "../data/company";
import { Link } from "../components/Router";
import { fleetImages, getImageUrl } from "../data/images";
import {
  Truck,
  Boxes,
  Container,
  Compass,
  Shuffle,
  Warehouse,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  ArrowRight
} from "lucide-react";

interface ServicesProps {
  onQuoteClick?: () => void;
}

export default function Services({ onQuoteClick }: ServicesProps) {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Truck":
        return <Truck className="w-6 h-6 text-[#1455C0]" />;
      case "Boxes":
        return <Boxes className="w-6 h-6 text-[#1455C0]" />;
      case "Container":
        return <Container className="w-6 h-6 text-[#1455C0]" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-[#1455C0]" />;
      case "Shuffle":
        return <Shuffle className="w-6 h-6 text-[#1455C0]" />;
      case "Warehouse":
        return <Warehouse className="w-6 h-6 text-[#1455C0]" />;
      default:
        return <Truck className="w-6 h-6 text-[#1455C0]" />;
    }
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      {/* --------------------------------------------------------
          SERVICES HERO
          -------------------------------------------------------- */}
      <section className="relative bg-[#0B2A6F] text-white py-24 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src={getImageUrl(fleetImages[2])}
            alt="Vayu India Roadways service fleet trucks"
            className="w-full h-full object-cover opacity-15 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2A6F]/90 to-[#0B2A6F]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#F47B20] bg-white/10 px-3 py-1 rounded-full">
            Our Logistics Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4">
            Transportation Services We Provide
          </h1>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed font-medium">
            Explore our comprehensive road transportation and freight verticals designed for safety, punctual placement, and nationwide cargo mobility.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------
          HORIZONTAL SERVICES ROWS (Matching reference layout)
          -------------------------------------------------------- */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/70 hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Image Column */}
              <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] bg-gray-100 overflow-hidden group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#0B2A6F]/90 backdrop-blur-md text-white px-3 py-1 rounded-md text-[11px] font-black uppercase tracking-wider shadow">
                  Service Vertical 0{idx + 1}
                </div>
              </div>

              {/* Text & Content Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#1455C0]/5 rounded-lg border border-[#1455C0]/10">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-bold text-[#F47B20] uppercase tracking-widest">
                      Vayu India Logistics
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#171F38] tracking-tight leading-snug">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                    {service.longDesc}
                  </p>

                  {/* Suitable Cargo Bullet Badges */}
                  <div className="pt-3 border-t border-gray-100">
                    <span className="text-[11px] font-bold uppercase text-gray-400 tracking-wider block mb-2">
                      Key Suitable Categories:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.suitableCargo.map((item, key) => (
                        <span
                          key={key}
                          className="inline-flex items-center gap-1.5 text-xs bg-[#F5F7FA] text-[#171F38] font-semibold px-3 py-1.5 rounded-md border border-gray-200/60"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#169447]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Row */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href={service.path}
                    className="inline-flex items-center gap-2 bg-[#0B2A6F] hover:bg-[#1455C0] text-white text-xs font-extrabold uppercase tracking-widest px-6 py-3 rounded-lg shadow-sm transition-all hover:translate-x-1"
                  >
                    View Specifications
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  {onQuoteClick && (
                    <button
                      onClick={onQuoteClick}
                      className="inline-flex items-center gap-2 border-2 border-[#1455C0] text-[#1455C0] hover:bg-[#1455C0] hover:text-white text-xs font-extrabold uppercase tracking-widest px-5 py-2.5 rounded-lg transition-all"
                    >
                      Inquire Load Rate
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------
          BOTTOM CALLOUT
          -------------------------------------------------------- */}
      <section className="py-16 bg-[#0B2A6F] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
            Need a Customized Transportation Route?
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Our dispatch managers analyze weight, load dimensions, loading docks, and permit requirements to deliver safe and cost-effective road transport solutions across India.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 bg-[#F47B20] hover:bg-[#E25C00] text-white font-black text-xs uppercase tracking-widest py-3.5 px-8 rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <PhoneCall className="w-4 h-4" />
              Call Dispatch Desk: {company.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
