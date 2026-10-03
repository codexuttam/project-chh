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
  ShieldAlert,
  Calendar,
  Layers,
  PhoneCall
} from "lucide-react";

export default function Services() {
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
          SERVICES HERO
          -------------------------------------------------------- */}
      <section className="relative bg-[#0B2A6F] text-white py-24 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src={getImageUrl(fleetImages[2])}
            alt="Vayu India Roadways service fleet trucks"
            className="w-full h-full object-cover opacity-15 select-none"
          />
          <div className="absolute inset-0 bg-[#0B2A6F]/85" />
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
            Discover our tailored road movement categories, designed to deliver safety, compliance, and structured cargo staging across India.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------
          SERVICES DIRECTORY LIST
          -------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-[#1455C0]/40 transition-all flex flex-col justify-between"
              >
                {/* Visual marker */}
                <div className="bg-gradient-to-r from-[#0B2A6F] to-[#1455C0] h-1.5 w-full" />
                
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Index & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-[#1455C0]/5 rounded-lg">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <span className="text-2xl font-black text-gray-100 select-none">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-extrabold text-[#0B2A6F] tracking-wide uppercase leading-snug">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Included details preview */}
                    <div className="pt-4 border-t border-gray-50">
                      <h4 className="text-[10px] font-bold uppercase text-[#F47B20] tracking-wider mb-2">Suitable Cargo Types</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.suitableCargo.slice(0, 2).map((item, key) => (
                          <span key={key} className="text-[10px] bg-[#F5F7FA] text-gray-600 px-2 py-1 rounded border border-gray-100">
                            {item}
                          </span>
                        ))}
                        <span className="text-[10px] text-gray-400 self-center">+{service.suitableCargo.length - 2} more</span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation CTA */}
                  <div className="pt-6 mt-6 border-t border-gray-50 flex items-center justify-between">
                    <Link
                      href={service.path}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#1455C0] hover:text-[#0B2A6F] uppercase tracking-wider group"
                    >
                      View Operational Specs
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          OPERATIONAL DISCLAIMER / NOTICE (No Fabrication)
          -------------------------------------------------------- */}
      <section className="py-16 bg-[#F5F7FA] border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-amber-50 rounded-full border border-amber-200 text-[#F47B20]">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-[#172033] uppercase tracking-wider">Transportation Capability Alignment</h3>
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
            These descriptions reflect our standard road carrier categories and operational designs. Vayu India Roadways Pvt. Ltd. evaluates vehicle assignments, dimension parameters, and highway permits on a case-by-case basis. We do not claim universal regulatory exemptions or guaranteed lead-times without direct technical review of cargo configurations.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-extrabold text-[#0B2A6F] hover:text-[#1455C0] uppercase tracking-widest border-b-2 border-[#0B2A6F] pb-1"
            >
              Consult an Operations Manager <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
