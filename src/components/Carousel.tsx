/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CarouselProps {
  images: string[];
  projectTitle: string;
}

export default function Carousel({ images, projectTitle }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent accordion toggling
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent accordion toggling
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const selectThumbnail = (index: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent accordion toggling
    setActiveIndex(index);
  };

  const cleanTitleId = projectTitle.replace(/\s+/g, "-").toLowerCase();

  return (
    <div id={`carousel-${cleanTitleId}`} className="w-full flex flex-col gap-3">
      {/* Main Viewport */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-primary-navy/5 rounded-2xl overflow-hidden border border-secondary-sky/20 shadow-soft group max-h-[360px] md:max-h-[420px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt={`${projectTitle} - Image ${activeIndex + 1}`}
            className="w-full h-full object-contain p-1"
            referrerPolicy="no-referrer"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              id={`prev-btn-${cleanTitleId}`}
              onClick={handlePrev}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/95 border border-secondary-sky/40 text-primary-navy shadow-soft flex items-center justify-center hover:bg-secondary-sky/30 hover:scale-105 active:scale-95 transition-all z-10 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              id={`next-btn-${cleanTitleId}`}
              onClick={handleNext}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/95 border border-secondary-sky/40 text-primary-navy shadow-soft flex items-center justify-center hover:bg-secondary-sky/30 hover:scale-105 active:scale-95 transition-all z-10 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Counter Overlay */}
        <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-primary-navy/90 backdrop-blur-xs text-white border border-white/10 text-[9px] md:text-[10px] font-mono font-bold">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails list */}
      {images.length > 1 && (
        <div className="flex gap-2 items-center justify-center overflow-x-auto py-1 scrollbar-none">
          {images.map((image, idx) => (
            <button
              id={`thumb-${cleanTitleId}-${idx}`}
              key={idx}
              onClick={(e) => selectThumbnail(idx, e)}
              className={`relative flex-shrink-0 w-12 h-9 md:w-16 md:h-11 rounded-lg md:rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer ${
                activeIndex === idx
                  ? "border-primary-navy ring-2 ring-secondary-sky scale-105 shadow-soft-sm opacity-100"
                  : "border-secondary-sky/30 opacity-60 hover:opacity-100 hover:scale-102"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {activeIndex === idx && (
                <div className="absolute inset-0 bg-secondary-sky/15" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
