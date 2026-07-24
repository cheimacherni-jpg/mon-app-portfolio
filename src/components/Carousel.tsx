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
      <div className="relative w-full aspect-[4/3] bg-primary-navy/5 rounded-2xl overflow-hidden border border-secondary-sky/20 shadow-soft group">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt={`${projectTitle} - Image ${activeIndex + 1}`}
            className="w-full h-full object-contain"
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
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-secondary-sky/30 text-primary-navy shadow-soft flex items-center justify-center hover:bg-secondary-sky/20 transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              id={`next-btn-${cleanTitleId}`}
              onClick={handleNext}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-secondary-sky/30 text-primary-navy shadow-soft flex items-center justify-center hover:bg-secondary-sky/20 transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Counter Overlay */}
        <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-lg bg-primary-navy/90 backdrop-blur-xs text-white border border-white/10 text-[9px] font-mono font-bold">
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
              className={`relative flex-shrink-0 w-12 h-9 rounded-lg overflow-hidden border transition-all duration-200 ${
                activeIndex === idx
                  ? "border-primary-navy ring-2 ring-secondary-sky/60 scale-105 shadow-soft-sm"
                  : "border-secondary-sky/20 opacity-60 hover:opacity-100"
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
