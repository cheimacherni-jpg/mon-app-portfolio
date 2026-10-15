import { TabIndex } from "../App";
import cheimaWelcome from "../assets/images/regenerated_image_1784755350754.png";

interface AccueilProps {
  onTabChange?: (tabIndex: TabIndex) => void;
}

export default function Accueil({ onTabChange }: AccueilProps) {
  return (
    <div id="accueil-container" className="flex flex-col gap-6 md:gap-8 py-1 select-text font-sans">
      
      {/* 1. Lined Notebook Card with Ring Binder Spiral */}
      <div 
        id="accueil-notebook-card" 
        className="bg-[#FFFDFB] border border-[#D2BCA6]/50 shadow-soft rounded-2xl md:rounded-3xl p-5 sm:p-7 md:p-8 lg:p-10 pt-9 md:pt-11 pl-7 md:pl-10 relative flex flex-col items-start justify-center min-h-[175px] md:min-h-[220px] w-full max-w-full mx-auto"
        style={{ paddingBottom: "22px" }}
      >
        {/* Ring binder spiral simulation at the top of the card */}
        <div className="absolute top-2.5 md:top-3 left-4 right-4 md:left-8 md:right-8 flex justify-between px-1 pointer-events-none z-20">
          {Array.from({ length: 19 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Metal ring loop */}
              <div className="w-[5px] md:w-[6px] h-[15px] md:h-[18px] rounded-full bg-linear-to-b from-gray-400 via-gray-100 to-gray-500 border border-gray-300 shadow-xs" />
              {/* Binder punch hole shadow */}
              <div className="w-[6px] md:w-[7px] h-[4px] md:h-[5px] rounded-full bg-gray-900/10 -mt-1" />
            </div>
          ))}
        </div>

        {/* Subtle horizontal lined paper lines */}
        <div className="absolute inset-x-0 top-12 bottom-4 flex flex-col justify-around pointer-events-none opacity-40 px-6 md:px-10">
          <div className="w-full h-[1px] bg-secondary-sky/40" />
          <div className="w-full h-[1px] bg-secondary-sky/40" />
          <div className="w-full h-[1px] bg-secondary-sky/40" />
          <div className="w-full h-[1px] bg-secondary-sky/40" />
        </div>

        {/* Notebook Content */}
        <div className="relative z-10 text-left flex flex-col items-start mt-3 pb-3 max-w-[65%] sm:max-w-[70%]">
          <span className="text-[17px] md:text-xl font-sans font-medium text-[#3E3025]/70 tracking-wider not-italic">
            Hello, je suis
          </span>
          <h1 className="text-[2.1rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[3.6rem] font-serif font-extrabold text-[#3E3025] leading-tight tracking-tight mt-1 not-italic">
            Cheïma <br className="sm:hidden" /> Cherni
          </h1>
          <span className="mt-2 text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-primary-navy/70 bg-secondary-sky/30 px-2.5 py-1 rounded-md">
            Creative Tech · Web Design · Événementiel
          </span>
        </div>

        {/* Overlapping Avatar with responsive scaling */}
        <div 
          className="absolute -bottom-4 md:-bottom-6 right-2 sm:right-4 md:right-8 lg:right-12 rounded-full border-4 md:border-[6px] border-white shadow-soft-lg overflow-hidden z-20 bg-white rotate-3 w-[118px] h-[112px] md:w-36 md:h-36 lg:w-44 lg:h-44 transition-all"
        >
          <img 
            src={cheimaWelcome} 
            alt="Cheïma Cherni" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* 2. Intro Description paragraph */}
      <div id="accueil-intro-box" className="px-1 w-full max-w-full mx-auto">
        <p className="text-xs sm:text-sm md:text-base text-[#3E3025]/90 leading-relaxed font-sans font-medium text-left max-w-3xl">
          Bienvenue sur mon portfolio numérique !<br />
          Laissez-vous guider et découvrez mon univers et mes trois axes de compétences à travers mes projets réalisés, notamment au cours de mon cursus universitaire et de ma formation professionnelle.
        </p>
      </div>

      {/* 3. Découvrir mon profil CTA Button */}
      <div className="w-full flex justify-start">
        <button
          id="accueil-discover-profile-btn"
          onClick={() => onTabChange?.(TabIndex.Presentation)}
          className="w-full sm:w-auto sm:min-w-[260px] md:min-w-[280px] bg-[#3E3025] hover:bg-[#2C2118] text-white font-mono text-xs md:text-sm font-bold py-3.5 md:py-4 px-6 rounded-xl md:rounded-2xl shadow-soft transition-all duration-200 flex items-center justify-center gap-2 hover:translate-y-[-1px] active:scale-[0.98] cursor-pointer"
        >
          <span>Découvrir mon profil</span>
          <span className="text-secondary-sky font-bold text-base">→</span>
        </button>
      </div>

      {/* 4. Explorer les intercalaires section - Responsive 3-column Grid on Desktop */}
      <div id="accueil-shortcuts-section" className="flex flex-col gap-3 mt-2 w-full max-w-full mx-auto">
        <h3 className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-[#3E3025]/60 uppercase mb-1">
          Explorer les intercalaires
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5 pb-6">
          {/* Button 1: UX/UI & Brand Design */}
          <button
            id="accueil-shortcut-uxui"
            onClick={() => onTabChange?.(TabIndex.UxUi)}
            className="w-full flex flex-col justify-between bg-[#CBE4F9] hover:bg-[#B7D7F3] border border-secondary-sky/30 rounded-2xl p-4 md:p-5 text-left transition-all duration-200 shadow-soft-sm hover:-translate-y-1 hover:shadow-soft-lg active:scale-[0.99] cursor-pointer group min-h-[90px] md:min-h-[130px]"
          >
            <div>
              <span className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-wider text-primary-navy/60 block mb-1">
                Section 02
              </span>
              <span className="font-display font-bold text-xs sm:text-sm md:text-base text-primary-navy tracking-tight block">
                UX/UI & Brand Design
              </span>
            </div>
            <div className="flex items-center justify-between mt-3 pt-2 border-t border-primary-navy/10">
              <span className="text-[9px] md:text-[10px] font-mono text-primary-navy/70 font-semibold">
                6 Projets
              </span>
              <span className="flex items-center gap-1 font-mono text-[9px] sm:text-2xs font-bold text-primary-navy uppercase group-hover:translate-x-1 transition-transform">
                Explorer <span className="text-[12px] leading-none font-sans">›</span>
              </span>
            </div>
          </button>

          {/* Button 2: Développement Web */}
          <button
            id="accueil-shortcut-webdev"
            onClick={() => onTabChange?.(TabIndex.WebDev)}
            className="w-full flex flex-col justify-between bg-[#cdb49e] hover:bg-[#bfa28b] border border-[#b89f89] rounded-2xl p-4 md:p-5 text-left transition-all duration-200 shadow-soft-sm hover:-translate-y-1 hover:shadow-soft-lg active:scale-[0.99] cursor-pointer group min-h-[90px] md:min-h-[130px]"
          >
            <div>
              <span className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-wider text-[#3E3025]/60 block mb-1">
                Section 03
              </span>
              <span className="font-display font-bold text-xs sm:text-sm md:text-base text-[#3E3025] tracking-tight block">
                Développement Web
              </span>
            </div>
            <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#3E3025]/10">
              <span className="text-[9px] md:text-[10px] font-mono text-[#3E3025]/70 font-semibold">
                5 Projets Web & Livrio
              </span>
              <span className="flex items-center gap-1 font-mono text-[9px] sm:text-2xs font-bold text-[#3E3025] uppercase group-hover:translate-x-1 transition-transform">
                Explorer <span className="text-[12px] leading-none font-sans">›</span>
              </span>
            </div>
          </button>

          {/* Button 3: Evènementiel */}
          <button
            id="accueil-shortcut-event"
            onClick={() => onTabChange?.(TabIndex.Event)}
            className="w-full flex flex-col justify-between bg-[#EADECE] hover:bg-[#E2CEBC] border border-[#D2BCA6]/50 rounded-2xl p-4 md:p-5 text-left transition-all duration-200 shadow-soft-sm hover:-translate-y-1 hover:shadow-soft-lg active:scale-[0.99] cursor-pointer group min-h-[90px] md:min-h-[130px]"
          >
            <div>
              <span className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-wider text-[#3E3025]/60 block mb-1">
                Section 04
              </span>
              <span className="font-display font-bold text-xs sm:text-sm md:text-base text-[#3E3025] tracking-tight block">
                Événementiel
              </span>
            </div>
            <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#3E3025]/10">
              <span className="text-[9px] md:text-[10px] font-mono text-[#3E3025]/70 font-semibold">
                3 Réalisations
              </span>
              <span className="flex items-center gap-1 font-mono text-[9px] sm:text-2xs font-bold text-[#3E3025] uppercase group-hover:translate-x-1 transition-transform">
                Explorer <span className="text-[12px] leading-none font-sans">›</span>
              </span>
            </div>
          </button>
        </div>
      </div>

    </div>
  );
}
