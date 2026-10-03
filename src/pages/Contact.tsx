import React from "react";
import { company } from "../data/company";
import ContactForm from "../components/ContactForm";
import { MapPin, Phone, Mail, Clock, ShieldCheck, CornerDownRight, Instagram } from "lucide-react";
import { fleetImages, getImageUrl } from "../data/images";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* --------------------------------------------------------
          CONTACT HERO
          -------------------------------------------------------- */}
      <section className="relative bg-[#0B2A6F] text-white py-24 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src={getImageUrl(fleetImages[0])}
            alt="Vayu India Roadways fleet truck lights"
            className="w-full h-full object-cover opacity-15 select-none"
          />
          <div className="absolute inset-0 bg-[#0B2A6F]/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#F47B20] bg-white/10 px-3 py-1 rounded-full">
            Inquiry Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4">
            Contact Vayu India Roadways
          </h1>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed font-medium">
            Reach out to our registered office in Haryana. Our operations team coordinates nationwide fleet activities with integrity.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------
          CONTACT ARCHITECTURE: TWO COLUMN SECTION
          -------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Column 1: Contact details (Span 5) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-block bg-[#0B2A6F]/5 border-l-4 border-[#F47B20] py-1 px-3">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B2A6F]">
                    Office Coordinates
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold text-[#172033] tracking-tight">
                  Get in Touch Directly
                </h2>
                <p className="text-xs text-gray-400">
                  Contact our managers directly or send us a digital query using the inquiry form.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-6">
                {/* Registered Address */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#0B2A6F]/5 text-[#0B2A6F] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold uppercase text-gray-400 tracking-wider mb-1">
                      Registered Office Address
                    </h3>
                    <p className="text-sm font-bold text-[#172033] leading-relaxed uppercase">
                      VAYU INDIA ROADWAYS PVT. LTD.<br />
                      BUILDING NO. 1882,<br />
                      NEAR LIBRARY, PAI,<br />
                      DISTRICT KAITHAL, HARYANA - 136043
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#1455C0]/5 text-[#1455C0] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold uppercase text-gray-400 tracking-wider mb-1">
                      Direct Dial Line
                    </h3>
                    <a
                      href={`tel:${company.phone.replace(/\s+/g, "")}`}
                      className="text-base font-black text-[#0B2A6F] hover:text-[#1455C0] transition-colors tracking-wide"
                    >
                      {company.phone}
                    </a>
                    <p className="text-[10px] text-gray-400 mt-0.5">Available Mon-Sat: 9 AM - 7 PM</p>
                  </div>
                </div>

                {/* Corporate Email */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#169447]/5 text-[#169447] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold uppercase text-gray-400 tracking-wider mb-1">
                      Corporate Communications
                    </h3>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-sm font-bold text-[#0B2A6F] hover:text-[#1455C0] transition-colors lowercase"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>

                {/* Instagram Channel */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#F47B20]/10 text-[#F47B20] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold uppercase text-gray-400 tracking-wider mb-1">
                      Official Instagram
                    </h3>
                    <a
                      href={company.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#0B2A6F] hover:text-[#F47B20] transition-colors"
                    >
                      {company.instagram}
                    </a>
                  </div>
                </div>
              </div>

              {/* Safety notice card */}
              <div className="p-6 bg-[#F5F7FA] rounded-lg border border-gray-200 space-y-4">
                <div className="flex items-center gap-2 font-bold text-[#0B2A6F] text-xs uppercase tracking-wide">
                  <ShieldCheck className="w-5 h-5 text-[#169447]" />
                  <span>Verified Credentials Only</span>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  Our operational office complies fully with national cargo laws and carries government road transit approvals. We verify consignee billing details prior to loading operations.
                </p>
              </div>
            </div>

            {/* Column 2: Digital Inquiry Form (Span 7) */}
            <div className="lg:col-span-7 bg-[#F5F7FA] p-8 sm:p-10 rounded-xl border border-gray-200 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#172033] tracking-tight">
                  Drop Us a Line
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Have a transportation requirement or want to discuss your logistics needs? Send us your details and our team will get in touch with you.
                </p>
              </div>

              {/* Form container */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
