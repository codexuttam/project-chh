import React from "react";
import { clients } from "../data/company";
import { Building2 } from "lucide-react";

const getInitials = (name: string) =>
  name
    .replace(/\b(Pvt|Ltd|Private|Limited)\.?/gi, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

interface ClientsSectionProps {
  className?: string;
}

export default function ClientsSection({ className = "bg-white" }: ClientsSectionProps) {
  return (
    <section id="our-clients" className={`py-20 border-t border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#F47B20] bg-[#F47B20]/10 px-3 py-1 rounded-full">
            Trusted By Industry
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B2A6F] tracking-tight mt-4">
            Our Clients
          </h2>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto mt-4" />
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Vayu India Roadways Pvt. Ltd. is proud to move cargo for leading manufacturing, engineering and industrial enterprises across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {clients.map((client, idx) => (
            <div
              key={client}
              className="group relative overflow-hidden flex items-center gap-4 bg-white p-5 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#1455C0]/40"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#1455C0] to-[#F47B20] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-gradient-to-br from-[#0B2A6F] to-[#1455C0] text-white flex items-center justify-center font-black text-sm tracking-wider shadow-md group-hover:from-[#F47B20] group-hover:to-[#d9620c] transition-colors duration-300">
                {getInitials(client) || <Building2 className="w-5 h-5" />}
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Client {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-extrabold text-[#172033] uppercase tracking-wide leading-snug group-hover:text-[#0B2A6F]">
                  {client}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
