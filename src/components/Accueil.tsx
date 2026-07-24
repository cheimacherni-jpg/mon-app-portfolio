import { TabIndex } from "../App";
import cheimaWelcome from "../assets/images/regenerated_image_1784755350754.png";

interface AccueilProps {
  onTabChange?: (tabIndex: TabIndex) => void;
}

export default function Accueil({ onTabChange }: AccueilProps) {
  return (
    <div id="accueil-container" className="flex flex-col gap-6 py-1 select-text font-sans">
      
      {/* 1. Lined Notebook Card with Ring Binder Spiral */}
      <div 
        id="accueil-notebook-card" 
        className="bg-[#FFFDFB] border border-[#D2BCA6]/50 shadow-soft rounded-2xl p-6 pt-9 pl-7 relative flex flex-col items-start justify-center min-h-[175px] w-full max-w-[296px] mx-auto"
        style={{ paddingBottom: "19px" }}
      >
        {/* Ring binder spiral simulation at the top of the card */}
        <div className="absolute top-2.5 left-4 right-4 flex justify-between px-1 pointer-events-none z-20">
          {Array.from({ length: 11 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Metal ring loop */}
              <div className="w-[5px] h-[15px] rounded-full bg-linear-to-b from-gray-400 via-gray-100 to-gray-500 border border-gray-300 shadow-xs" />
              {/* Binder punch hole shadow */}
              <div className="w-[6px] h-[4px] rounded-full bg-gray-900/10 -mt-1" />
            </div>
          ))}
        </div>

        {/* Subtle horizontal lined paper lines */}
        <div className="absolute inset-x-0 top-12 bottom-4 flex flex-col justify-around pointer-events-none opacity-40 px-6">
          <div className="w-full h-[1px] bg-secondary-sky/40" />
          <div className="w-full h-[1px] bg-secondary-sky/40" />
          <div className="w-full h-[1px] bg-secondary-sky/40" />
          <div className="w-full h-[1px] bg-secondary-sky/40" />
        </div>

        {/* Notebook Content */}
        <div className="relative z-10 text-left flex flex-col items-start mt-3 pb-3">
          <span className="text-[17px] font-sans font-medium text-[#3E3025]/70 tracking-wider not-italic">
            Hello, je suis
          </span>
          <h1 className="text-[2.1rem] sm:text-[2.5rem] font-serif font-extrabold text-[#3E3025] leading-tight tracking-tight mt-1 not-italic">
            Cheïma <br /> Cherni
          </h1>
        </div>

        {/* Overlapping Avatar replacing the stamp badge */}
        <div 
          className="absolute -bottom-4 right-1 rounded-full border-4 border-white shadow-soft overflow-hidden z-20 bg-white rotate-3"
          style={{ width: "118.326px", height: "112.326px" }}
        >
          <img 
            src={cheimaWelcome} 
            alt="Cheïma Cherni" 
            className="object-cover scale-105"
            style={{ width: "118.326px", height: "112.326px" }}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* 2. Intro Description paragraph */}
      <div id="accueil-intro-box" className="px-1 w-full max-w-[296px] mx-auto">
        <p className="text-xs sm:text-sm text-[#3E3025]/90 leading-relaxed font-sans font-medium text-left">
          Bienvenue sur mon portfolio numérique !<br />
          Laissez-vous guider et découvrez mon univers et mes trois axes de compétences à travers mes projets réalisés, notamment au cours de mon cursus universitaire et de ma formation professionnelle.
        </p>
      </div>

      {/* 3. Découvrir mon profil CTA Button */}
      <button
        id="accueil-discover-profile-btn"
        onClick={() => onTabChange?.(TabIndex.Presentation)}
        className="w-full max-w-[296px] mx-auto bg-[#3E3025] hover:bg-[#2C2118] text-white font-mono text-xs font-bold py-3.5 px-4 rounded-xl shadow-soft transition-all duration-200 flex items-center justify-center gap-2 hover:translate-y-[-1px] active:scale-[0.98] cursor-pointer"
      >
        Découvrir mon profil →
      </button>

      {/* 4. Explorer les intercalaires section */}
      <div id="accueil-shortcuts-section" className="flex flex-col gap-3 mt-2 w-full max-w-[296px] mx-auto">
        <h3 className="text-[10px] font-mono font-bold tracking-widest text-[#3E3025]/60 uppercase mb-1">
          Explorer les intercalaires
        </h3>

        {/* Button 1: UX/UI & Brand Design */}
        <button
          id="accueil-shortcut-uxui"
          onClick={() => onTabChange?.(TabIndex.UxUi)}
          className="w-full flex items-center justify-between bg-[#CBE4F9] hover:bg-[#B7D7F3] border border-secondary-sky/25 rounded-2xl p-4 text-left transition-all duration-200 shadow-soft-sm hover:translate-x-1 hover:shadow-soft active:scale-[0.99] cursor-pointer"
        >
          <span className="font-display font-bold text-xs sm:text-sm text-primary-navy tracking-tight">
            UX/UI & Brand Design
          </span>
          <span className="flex items-center gap-1 font-mono text-[9px] sm:text-2xs font-bold text-primary-navy/80 uppercase">
            Voir <span className="text-[11px] leading-none font-sans">›</span>
          </span>
        </button>

        {/* Button 2: Développement Web */}
        <button
          id="accueil-shortcut-webdev"
          onClick={() => onTabChange?.(TabIndex.WebDev)}
          className="w-full flex items-center justify-between bg-[#cdb49e] hover:bg-[#bfa28b] border border-[#cdb49e] rounded-2xl p-4 text-left transition-all duration-200 shadow-soft-sm hover:translate-x-1 hover:shadow-soft active:scale-[0.99] cursor-pointer"
        >
          <span className="font-display font-bold text-xs sm:text-sm text-[#3E3025] tracking-tight">
            Développement Web
          </span>
          <span className="flex items-center gap-1 font-mono text-[9px] sm:text-2xs font-bold text-[#3E3025]/80 uppercase">
            Voir <span className="text-[11px] leading-none font-sans">›</span>
          </span>
        </button>

        {/* Button 3: Evènementiel */}
        <button
          id="accueil-shortcut-event"
          onClick={() => onTabChange?.(TabIndex.Event)}
          className="w-full flex items-center justify-between bg-[#EADECE] hover:bg-[#E2CEBC] border border-[#D2BCA6]/40 rounded-2xl p-4 text-left transition-all duration-200 shadow-soft-sm hover:translate-x-1 hover:shadow-soft active:scale-[0.99] cursor-pointer mb-6"
        >
          <span className="font-display font-bold text-xs sm:text-sm text-[#3E3025] tracking-tight">
            Evènementiel
          </span>
          <span className="flex items-center gap-1 font-mono text-[9px] sm:text-2xs font-bold text-[#3E3025]/80 uppercase">
            Voir <span className="text-[11px] leading-none font-sans">›</span>
          </span>
        </button>
      </div>

    </div>
  );
}
