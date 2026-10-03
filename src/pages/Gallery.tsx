import React, { useState } from "react";
import { fleetImages, getImageUrl } from "../data/images";
import { X, ChevronLeft, ChevronRight, ZoomIn, Eye } from "lucide-react";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % fleetImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + fleetImages.length) % fleetImages.length);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --------------------------------------------------------
          GALLERY HERO
          -------------------------------------------------------- */}
      <section className="relative bg-[#0B2A6F] text-white py-24 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src={getImageUrl(fleetImages[0])}
            alt="Vayu India Roadways fleet container truck"
            className="w-full h-full object-cover opacity-15 select-none"
          />
          <div className="absolute inset-0 bg-[#0B2A6F]/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#F47B20] bg-white/10 px-3 py-1 rounded-full">
            Visual Registry
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4">
            Our Fleet Gallery
          </h1>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed font-medium">
            View authentic company cargo vehicles operating across interstate routes. Honest documentation of active physical assets.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------
          GALLERY GRID (Masonry-like layout support)
          -------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-extrabold text-[#172033] tracking-tight">
              Active Road Logistics Fleet
            </h2>
            <div className="w-12 h-1 bg-[#F47B20] mx-auto mt-3" />
            <p className="text-xs text-gray-400 mt-2">
              Click on any photograph to launch the interactive high-resolution lightbox viewer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetImages.map((img, idx) => (
              <div
                key={img.id}
                onClick={() => openLightbox(idx)}
                className="group relative overflow-hidden rounded-lg bg-[#F5F7FA] border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                {/* Image Container with Hover Effects */}
                <div className="overflow-hidden h-64 relative">
                  <img
                    src={getImageUrl(img)}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Hover Overlay Icon */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full text-[#0B2A6F] shadow-lg scale-90 group-hover:scale-100 transition-transform">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Details info */}
                <div className="p-5 bg-white">
                  <span className="text-[10px] font-bold text-[#F47B20] uppercase tracking-wider block mb-1">
                    Haryana Carrier Node
                  </span>
                  <h3 className="text-xs font-black uppercase text-[#172033] tracking-wider line-clamp-1">
                    {img.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {img.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          LIGHTBOX MODAL
          -------------------------------------------------------- */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Lightbox Content Area */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full flex flex-col items-center space-y-4"
          >
            <div className="relative overflow-hidden rounded-lg bg-black/40 border border-white/10 max-h-[70vh] flex items-center justify-center shadow-2xl">
              <img
                src={getImageUrl(fleetImages[lightboxIndex])}
                alt={fleetImages[lightboxIndex].title}
                className="object-contain max-h-[70vh] max-w-full"
              />
            </div>

            {/* Lightbox Meta Card */}
            <div className="bg-white/10 text-white p-5 rounded-lg border border-white/10 text-center max-w-2xl">
              <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#F47B20] mb-1">
                {fleetImages[lightboxIndex].title}
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed font-medium">
                {fleetImages[lightboxIndex].description}
              </p>
              <div className="text-[10px] text-white/40 mt-3 font-semibold">
                Image {lightboxIndex + 1} of {fleetImages.length} • Authentic Vayu Fleet Asset
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
