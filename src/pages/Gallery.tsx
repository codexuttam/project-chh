import React, { useState, useEffect, useCallback } from "react";
import { fleetImages, getImageUrl, FleetImage } from "../data/images";
import { X, ChevronLeft, ChevronRight, Eye, Download, Filter } from "lucide-react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtered image list based on category tab
  const filteredImages = selectedCategory === "All"
    ? fleetImages
    : fleetImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  const categories = ["All", "Fleet Carriers", "Project & ODC", "Warehousing"];

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
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
          <span className="text-xs font-black uppercase tracking-widest text-[#F47B20] bg-white/10 px-3.5 py-1.5 rounded-full">
            Verified Asset Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4">
            Authentic Fleet & Logistics Gallery
          </h1>
          <div className="w-16 h-1 bg-[#F47B20] mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed font-medium">
            Explore authentic photographic records of our TATA commercial road carriers, heavy ODC transportation equipment, and warehouse staging operations.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------
          CATEGORY TABS & GALLERY GRID
          -------------------------------------------------------- */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-gray-400 mr-2 hidden sm:flex">
              <Filter className="w-4 h-4 text-[#F47B20]" /> Filter Category:
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#0B2A6F] text-white shadow-md scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((img, idx) => (
              <div
                key={img.id}
                onClick={() => openLightbox(idx)}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Frame */}
                <div className="overflow-hidden h-64 sm:h-72 relative bg-gray-100">
                  <img
                    src={getImageUrl(img)}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Category Tag overlay */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider">
                    {img.category}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0B2A6F]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white text-[#0B2A6F] px-4 py-2 rounded-full font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 scale-90 group-hover:scale-100 transition-transform">
                      <Eye className="w-4 h-4 text-[#F47B20]" /> Inspect Photograph
                    </div>
                  </div>
                </div>

                {/* Details Card */}
                <div className="p-6 bg-white flex-grow flex flex-col justify-between space-y-2 border-t border-gray-100">
                  <h3 className="text-base font-black text-[#171F38] tracking-tight line-clamp-1">
                    {img.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed font-normal">
                    {img.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------
          INTERACTIVE LIGHTBOX MODAL WITH FULL CONTROLS
          -------------------------------------------------------- */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 select-none animate-fadeIn"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Lightbox Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full flex flex-col items-center space-y-4 px-4"
          >
            <div className="relative overflow-hidden rounded-2xl bg-black/50 border border-white/10 max-h-[72vh] flex items-center justify-center shadow-2xl w-full">
              <img
                src={getImageUrl(filteredImages[lightboxIndex])}
                alt={filteredImages[lightboxIndex].title}
                className="object-contain max-h-[72vh] max-w-full rounded-lg"
              />
            </div>

            {/* Meta Card */}
            <div className="bg-white/10 backdrop-blur-md text-white p-5 sm:p-6 rounded-xl border border-white/15 text-center max-w-3xl w-full space-y-2">
              <div className="flex items-center justify-center gap-3">
                <span className="bg-[#F47B20] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded">
                  {filteredImages[lightboxIndex].category}
                </span>
                <span className="text-xs text-white/60 font-medium">
                  {lightboxIndex + 1} of {filteredImages.length}
                </span>
              </div>

              <h4 className="text-lg font-black tracking-tight text-white">
                {filteredImages[lightboxIndex].title}
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed max-w-2xl mx-auto font-normal">
                {filteredImages[lightboxIndex].description}
              </p>

              <div className="pt-2 flex items-center justify-center gap-4">
                <a
                  href={getImageUrl(filteredImages[lightboxIndex])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-[#F47B20] hover:text-white uppercase tracking-wider"
                >
                  <Download className="w-3.5 h-3.5" /> View Full Image Source
                </a>
              </div>
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  );
}
