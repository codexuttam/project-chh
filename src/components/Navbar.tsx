import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, PhoneCall } from "lucide-react";
import Logo from "./Logo";
import { Link, useRouter } from "./Router";
import { company, services } from "../data/company";

interface NavbarProps {
  onQuoteClick: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const { path } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [path]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services", dropdown: true },
    { name: "Network", href: "/network" },
    { name: "Industries", href: "/industries" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" }
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return path === "/";
    }
    return path.startsWith(href);
  };

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2.5" : "bg-white border-b border-gray-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on the Left */}
          <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#1455C0] rounded-lg p-1">
            <Logo variant="horizontal" size={54} />
          </Link>

          {/* Desktop Navigation Link Block */}
          <div className="hidden lg:flex items-center space-x-1 font-semibold text-sm">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-4 py-2 flex items-center gap-1 hover:text-[#1455C0] transition-colors rounded ${
                        isActive(link.href) ? "text-[#0B2A6F] font-bold" : "text-gray-600"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#1455C0]" />
                    </Link>

                    {/* Services Submenu Dropdown */}
                    <div className="absolute top-full left-0 mt-0 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {services.map((s) => (
                        <Link
                          key={s.id}
                          href={s.path}
                          className="block px-5 py-3 text-xs text-gray-700 hover:bg-[#F5F7FA] hover:text-[#1455C0] border-l-2 border-transparent hover:border-[#F47B20] transition-all"
                        >
                          <div className="font-bold uppercase text-[#0B2A6F]">{s.title.split("&")[0]}</div>
                          <div className="text-[10px] text-gray-400 font-normal line-clamp-1 mt-0.5">{s.shortDesc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 hover:text-[#1455C0] transition-colors rounded ${
                    isActive(link.href) ? "text-[#0B2A6F] font-bold border-b-2 border-[#F47B20] rounded-none" : "text-gray-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Area CTA button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-xs font-bold text-[#0B2A6F] border border-gray-200 py-2 px-3 rounded hover:bg-gray-50 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F47B20]" />
              <span>Call Team</span>
            </a>
            <button
              onClick={onQuoteClick}
              className="bg-[#1455C0] hover:bg-[#0B2A6F] text-white text-xs font-bold tracking-wider uppercase py-2.5 px-5 rounded-md shadow transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1455C0]"
            >
              Get A Quote
            </button>
          </div>

          {/* Mobile Hamburguer Menu Button */}
          <div className="flex items-center lg:hidden space-x-2">
            <button
              onClick={onQuoteClick}
              className="bg-[#1455C0] text-white text-[11px] font-bold uppercase py-2 px-3 rounded hover:bg-[#0B2A6F]"
            >
              Quote
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-[#0B2A6F] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0B2A6F]"
              aria-expanded={isOpen}
              aria-label="Toggle main menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-inner animate-fadeIn">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 text-sm font-semibold">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="space-y-1">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-left text-gray-600 hover:bg-gray-50 hover:text-[#1455C0] rounded"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {dropdownOpen && (
                      <div className="pl-6 bg-gray-50 py-1.5 rounded-lg space-y-1 border-l-2 border-[#1455C0]/20 ml-3">
                        <Link
                          href="/services"
                          className="block px-3 py-2 text-xs font-bold text-[#0B2A6F] hover:text-[#1455C0]"
                        >
                          All Services Overview
                        </Link>
                        {services.map((s) => (
                          <Link
                            key={s.id}
                            href={s.path}
                            className={`block px-3 py-2 text-xs rounded ${
                              isActive(s.path) ? "text-[#1455C0] font-bold" : "text-gray-500 hover:text-[#1455C0]"
                            }`}
                          >
                            • {s.title.split("&")[0]}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2.5 rounded hover:bg-gray-50 hover:text-[#1455C0] ${
                    isActive(link.href) ? "bg-[#0B2A6F]/5 text-[#0B2A6F] font-bold border-l-4 border-[#F47B20]" : "text-gray-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
