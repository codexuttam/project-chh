import React from "react";
import { Phone, Mail, Clock, MapPin, Instagram } from "lucide-react";
import { company } from "../data/company";

export default function TopBar() {
  return (
    <div className="bg-[#0B2A6F] text-white text-xs border-b border-white/10 py-2.5 px-4 sm:px-6 lg:px-8 hidden sm:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Info: Phone, Email, Instagram */}
        <div className="flex items-center space-x-6">
          <a
            href={`tel:${company.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 hover:text-[#F47B20] transition-colors focus:outline-none focus:ring-1 focus:ring-[#F47B20] rounded px-1"
            aria-label={`Call us at ${company.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#F47B20]" />
            <span className="font-semibold tracking-wider">{company.phone}</span>
          </a>
          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-2 hover:text-[#F47B20] transition-colors focus:outline-none focus:ring-1 focus:ring-[#F47B20] rounded px-1"
            aria-label={`Email us at ${company.email}`}
          >
            <Mail className="w-3.5 h-3.5 text-[#F47B20]" />
            <span className="font-semibold lowercase tracking-wider">{company.email}</span>
          </a>
          <a
            href={company.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#F47B20] transition-colors focus:outline-none focus:ring-1 focus:ring-[#F47B20] rounded px-1"
            aria-label={`Instagram ${company.instagram}`}
          >
            <Instagram className="w-3.5 h-3.5 text-[#F47B20]" />
            <span className="font-semibold tracking-wider">{company.instagram}</span>
          </a>
        </div>

        {/* Right Info: Working hours, Location */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-1.5 text-white/80">
            <Clock className="w-3.5 h-3.5 text-white/50" />
            <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/80">
            <MapPin className="w-3.5 h-3.5 text-[#169447]" />
            <span>Pai, Kaithal, HR, IN</span>
          </div>
        </div>
      </div>
    </div>
  );
}
