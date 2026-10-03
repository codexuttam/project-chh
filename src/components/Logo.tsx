import React from "react";
import { siteImages } from "../data/images";

interface LogoProps {
  className?: string;
  variant?: "full" | "horizontal" | "mark-only";
  size?: number;
}

export default function Logo({ className = "", variant = "horizontal", size = 48 }: LogoProps) {
  // Official Vayu India Roadways logo badge
  const LogoImage = ({ svgSize }: { svgSize: number }) => (
    <img
      src={siteImages.logo}
      alt="Vayu India Roadways Pvt Ltd logo"
      width={svgSize}
      height={svgSize}
      style={{ width: svgSize, height: svgSize }}
      className="inline-block align-middle rounded-full object-contain bg-white select-none"
      draggable={false}
    />
  );

  // Legacy SVG vector approximation of the logo (kept for reference / offline use)
  const LogoSVG = ({ svgSize }: { svgSize: number }) => (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox="0 0 500 500"
      className="inline-block align-middle"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Blue Circle Ring */}
      <circle cx="250" cy="250" r="235" fill="#FFFFFF" stroke="#0B2A6F" strokeWidth="12" />
      <circle cx="250" cy="250" r="222" fill="none" stroke="#1455C0" strokeWidth="2" />

      {/* Tricolor Curves on Outer Edge (Indian flag style) */}
      {/* Left side Orange and Green arcs */}
      <path
        d="M 60,180 A 210,210 0 0,0 60,320"
        fill="none"
        stroke="#F47B20"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M 45,190 A 220,220 0 0,0 45,310"
        fill="none"
        stroke="#169447"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Right side Orange and Green arcs */}
      <path
        d="M 440,180 A 210,210 0 0,1 440,320"
        fill="none"
        stroke="#169447"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M 455,190 A 220,220 0 0,1 455,310"
        fill="none"
        stroke="#F47B20"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Text Path for Top Text: VAYU INDIA */}
      <defs>
        <path id="topTextPath" d="M 75,250 A 175,175 0 0,1 425,250" fill="none" />
        <path id="bottomTextPath" d="M 425,250 A 175,175 0 0,1 75,250" fill="none" />
      </defs>

      <text fontFamily="'Poppins', sans-serif" fontSize="42" fontWeight="900" fill="#0B2A6F" letterSpacing="6">
        <textPath href="#topTextPath" startOffset="50%" textAnchor="middle">
          ★ VAYU INDIA ★
        </textPath>
      </text>

      {/* Text Path for Bottom Text: ROADWAYS PVT LTD */}
      <text fontFamily="'Poppins', sans-serif" fontSize="35" fontWeight="900" fill="#0B2A6F" letterSpacing="4">
        <textPath href="#bottomTextPath" startOffset="50%" textAnchor="middle">
          ROADWAYS PVT LTD
        </textPath>
      </text>

      {/* Inner Circle Border */}
      <circle cx="250" cy="250" r="150" fill="#FFFFFF" stroke="#0B2A6F" strokeWidth="5" />

      {/* Map of India - Subtle Background Contour */}
      <g opacity="0.1" transform="translate(145, 125) scale(0.42)">
        <path
          d="M102,15 C95,5 82,12 80,25 C75,40 60,35 55,45 C45,50 35,40 25,50 C20,60 10,70 15,85 C22,95 28,90 35,100 C40,110 32,120 30,130 C30,140 42,145 40,160 C38,170 28,175 25,185 C25,195 38,190 45,198 C50,210 40,220 40,230 C45,245 60,255 65,270 C70,285 62,300 70,315 C75,325 88,318 95,325 C102,335 98,348 105,360 C110,370 120,380 122,395 C125,410 115,420 120,435 C122,445 132,450 135,465 C138,480 148,490 155,500 L160,505 L165,500 C175,485 180,470 190,455 C200,440 215,430 220,410 C225,390 215,380 222,365 C228,350 240,340 245,320 C250,300 240,285 245,265 C248,250 258,242 262,225 C265,210 255,195 260,180 C265,160 280,150 288,130 C295,110 285,95 290,75 C295,55 310,45 315,25 C310,15 295,20 288,10 C275,12 265,2 255,8 C242,15 235,5 220,10 C210,15 202,5 190,12 C180,18 175,8 165,15 C155,22 148,15 138,20 C125,25 115,12 102,15 Z"
          fill="#0B2A6F"
        />
      </g>

      {/* Decorative Tricolor Flag Lines under center V */}
      <rect x="200" y="380" width="100" height="4" fill="#0B2A6F" />
      <circle cx="250" cy="382" r="6" fill="#0B2A6F" />
      <circle cx="230" cy="382" r="4" fill="#F47B20" />
      <circle cx="270" cy="382" r="4" fill="#169447" />

      {/* Highway / Road Curve through V */}
      <path
        d="M 140,310 Q 230,290 380,265"
        fill="none"
        stroke="#0B2A6F"
        strokeWidth="38"
        strokeLinecap="round"
      />
      <path
        d="M 142,310 Q 230,290 378,265"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeDasharray="12,12"
      />

      {/* Modern Stylized 'V' Symbol in Center */}
      <g transform="translate(185, 175)">
        {/* Left thick blue wing of 'V' */}
        <path
          d="M 12,10 C 35,40 50,70 65,110 C 50,115 35,110 22,102 C 12,80 5,45 0,22 Z"
          fill="#1455C0"
        />
        <path
          d="M 10,0 C 40,40 58,80 72,130 C 58,135 38,128 20,115 C 8,90 2,50 0,10 Z"
          fill="#0B2A6F"
        />
        {/* Swirling Orange/Green Accent lines on V */}
        <path
          d="M -15,80 Q 25,65 75,100"
          fill="none"
          stroke="#F47B20"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M -5,95 Q 30,80 70,115"
          fill="none"
          stroke="#169447"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>

      {/* Truck Driving on Road (on right side) */}
      <g transform="translate(280, 205) scale(0.68)">
        {/* Truck Trailer - Blue container */}
        <rect x="50" y="35" width="110" height="50" fill="#1455C0" rx="4" />
        {/* Trailer details */}
        <line x1="55" y1="35" x2="55" y2="85" stroke="#FFFFFF" strokeWidth="2" opacity="0.3" />
        <line x1="85" y1="35" x2="85" y2="85" stroke="#FFFFFF" strokeWidth="2" opacity="0.3" />
        <line x1="115" y1="35" x2="115" y2="85" stroke="#FFFFFF" strokeWidth="2" opacity="0.3" />
        <line x1="145" y1="35" x2="145" y2="85" stroke="#FFFFFF" strokeWidth="2" opacity="0.3" />

        {/* Truck Cabin (Tata/Modern style) */}
        <path d="M 160,40 L 190,40 C 196,40 200,44 200,50 L 200,75 C 200,80 196,85 190,85 L 160,85 Z" fill="#E5EAF0" />
        {/* Windshield */}
        <path d="M 175,44 L 193,44 C 196,44 197,46 197,49 L 195,60 L 175,60 Z" fill="#172033" />
        {/* Front bumper and grille */}
        <rect x="188" y="70" width="13" height="12" fill="#172033" rx="2" />
        {/* Wheels */}
        <circle cx="70" cy="85" r="10" fill="#172033" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="70" cy="85" r="4" fill="#E5EAF0" />
        <circle cx="92" cy="85" r="10" fill="#172033" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="92" cy="85" r="4" fill="#E5EAF0" />
        <circle cx="114" cy="85" r="10" fill="#172033" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="114" cy="85" r="4" fill="#E5EAF0" />
        
        <circle cx="175" cy="85" r="10" fill="#172033" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="175" cy="85" r="4" fill="#E5EAF0" />
      </g>

      {/* Safety & Service Icons row near the bottom */}
      <g transform="translate(145, 345) scale(0.85)">
        {/* Safe Delivery */}
        <g transform="translate(5, 0)">
          {/* Shield check */}
          <path d="M 12,0 C 22,0 24,5 24,12 C 24,18 16,24 12,26 C 8,24 0,18 0,12 C 0,5 2,0 12,0" fill="#0B2A6F" />
          <path d="M 7,12 L 10,15 L 17,9" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <text x="32" y="10" fontFamily="'Poppins', sans-serif" fontSize="10" fontWeight="800" fill="#0B2A6F">SAFE</text>
          <text x="32" y="20" fontFamily="'Poppins', sans-serif" fontSize="10" fontWeight="800" fill="#0B2A6F">DELIVERY</text>
        </g>

        {/* Divider */}
        <line x1="102" y1="0" x2="102" y2="25" stroke="#E5EAF0" strokeWidth="2" />

        {/* On Time */}
        <g transform="translate(115, 0)">
          {/* Clock icon */}
          <circle cx="12" cy="12" r="12" fill="#0B2A6F" />
          <path d="M 12,4 L 12,12 L 18,12" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <text x="32" y="16" fontFamily="'Poppins', sans-serif" fontSize="10" fontWeight="800" fill="#0B2A6F">ON TIME</text>
        </g>

        {/* Divider */}
        <line x1="185" y1="0" x2="185" y2="25" stroke="#E5EAF0" strokeWidth="2" />

        {/* Every Time */}
        <g transform="translate(198, 0)">
          {/* Fast lines / truck */}
          <circle cx="12" cy="12" r="12" fill="#0B2A6F" />
          <line x1="4" y1="8" x2="14" y2="8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="6" y1="12" x2="18" y2="12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="16" x2="12" y2="16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <text x="32" y="10" fontFamily="'Poppins', sans-serif" fontSize="10" fontWeight="800" fill="#0B2A6F">EVERY</text>
          <text x="32" y="20" fontFamily="'Poppins', sans-serif" fontSize="10" fontWeight="800" fill="#0B2A6F">TIME</text>
        </g>
      </g>

      {/* Bottom Ribbon / Banner: DRIVEN BY TRUST */}
      <g transform="translate(130, 425)">
        {/* Ribbon Shape */}
        <path
          d="M 10,0 L 230,0 L 220,32 L 20,32 Z"
          fill="#172033"
        />
        <path
          d="M 10,0 L 20,32 L 0,16 Z"
          fill="#0B2A6F"
        />
        <path
          d="M 230,0 L 220,32 L 240,16 Z"
          fill="#0B2A6F"
        />
        
        {/* Ribbon Tricolor accents */}
        <rect x="25" y="26" width="60" height="3" fill="#F47B20" />
        <rect x="155" y="26" width="60" height="3" fill="#169447" />

        <text
          x="120"
          y="20"
          fontFamily="'Poppins', sans-serif"
          fontSize="14"
          fontWeight="bold"
          fill="#FFFFFF"
          textAnchor="middle"
          letterSpacing="2"
        >
          DRIVEN BY TRUST
        </text>
      </g>
    </svg>
  );

  if (variant === "mark-only") {
    return <LogoImage svgSize={size} />;
  }

  if (variant === "horizontal") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <LogoImage svgSize={size} />
        <div className="flex flex-col select-none">
          <span className="text-sm font-extrabold tracking-[0.2em] text-[#0B2A6F] uppercase leading-none">
            Vayu India
          </span>
          <span className="text-lg font-black tracking-wider text-[#1455C0] uppercase leading-tight">
            Roadways
          </span>
          <span className="text-[10px] font-semibold text-[#169447] tracking-widest uppercase leading-none mt-0.5">
            Pvt. Ltd. <span className="text-[#F47B20]">•</span> Driven By Trust
          </span>
        </div>
      </div>
    );
  }

  // Full variant is just the massive logo badge
  return (
    <div className={`text-center ${className}`}>
      <LogoImage svgSize={size} />
    </div>
  );
}
