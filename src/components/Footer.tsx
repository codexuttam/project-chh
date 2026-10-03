import React from "react";
import Logo from "./Logo";
import { Link } from "./Router";
import { company, services } from "../data/company";
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, Instagram } from "lucide-react";
import { usePhoneModal } from "../context/PhoneModalContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openPhoneModal, openEmailModal } = usePhoneModal();

  return (
    <footer className="bg-[#172033] text-gray-300 border-t-4 border-[#F47B20]">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Branding & Description */}
          <div className="space-y-6">
            <div className="bg-white p-3 rounded-lg inline-block shadow-md">
              <Logo variant="horizontal" size={48} />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Vayu India Roadways Pvt. Ltd. provides dependable road transportation and fleet movement solutions across key Indian industrial routes. We are driven by trust, safety, and punctual coordination.
            </p>
            <div className="flex items-center gap-2 text-xs bg-[#0B2A6F]/40 border border-[#1455C0]/30 p-3 rounded text-[#1455C0] font-semibold text-white">
              <ShieldCheck className="w-4 h-4 text-[#169447] flex-shrink-0" />
              <span>Govt. Approved Road Carrier</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-b-2 border-[#1455C0] pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#F47B20] hover:translate-x-1 inline-block transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F47B20] hover:translate-x-1 inline-block transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F47B20] hover:translate-x-1 inline-block transition-all">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/network" className="hover:text-[#F47B20] hover:translate-x-1 inline-block transition-all">
                  Branch Network
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#F47B20] hover:translate-x-1 inline-block transition-all">
                  Industries We Support
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#F47B20] hover:translate-x-1 inline-block transition-all">
                  Fleet Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F47B20] hover:translate-x-1 inline-block transition-all">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Logistics Services */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-b-2 border-[#1455C0] pb-2 inline-block">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={s.path} className="hover:text-[#F47B20] hover:translate-x-1 inline-block transition-all text-xs uppercase font-semibold">
                    {s.title.split("&")[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Coordinates */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-b-2 border-[#1455C0] pb-2 inline-block">
              Pai Head Office
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F47B20] mt-0.5 flex-shrink-0" />
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs leading-relaxed text-gray-400 hover:text-white transition-colors"
                  title="Open location in Google Maps"
                >
                  Building No. 1882,<br />
                  Near Library, Pai,<br />
                  District Kaithal,<br />
                  Haryana - 136043, India ↗
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F47B20] flex-shrink-0" />
                <button onClick={openPhoneModal} className="hover:text-white transition-colors cursor-pointer text-left">
                  {company.phone}
                </button>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F47B20] flex-shrink-0" />
                <a href={company.emailUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors lowercase text-xs">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-[#F47B20] flex-shrink-0" />
                <a href={company.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-xs font-medium">
                  {company.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & License */}
      <div className="bg-[#0B1222] text-xs text-gray-500 py-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p>© {currentYear} {company.name}. All Rights Reserved.</p>
            <p className="mt-1 text-[10px] text-gray-600">
              Registered Office: Pai, District Kaithal, Haryana. Operational across major routes in India.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-gray-300">Terms of Transportation</Link>
            <a href="https://www.spmlogistics.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 inline-flex items-center gap-1">
              Ref Website <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
