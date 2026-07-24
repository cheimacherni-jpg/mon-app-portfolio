/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Folder, Smartphone, Award, Briefcase, Calendar, Info, Globe, Sparkles, FolderOpen, Heart, Search, HelpCircle, RefreshCw, Github, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "./data";
import Presentation from "./components/Presentation";
import ProjectAccordion from "./components/ProjectAccordion";
import Accueil from "./components/Accueil";

// Import the anime style generated avatar poses
import cheimaWelcome from "./assets/images/regenerated_image_1784482807805.png";
import cheimaConfused from "./assets/images/cheima_confused_1784480573178.jpg";
import cheimaReflective from "./assets/images/cheima_reflective_1784480548610.jpg";
import cheimaFocused from "./assets/images/regenerated_image_1784734643335.png";
import cheimaInspired from "./assets/images/regenerated_image_1784735470782.png";
import cheimaNotebook from "./assets/images/regenerated_image_1784733483179.png";

export enum TabIndex {
  Accueil = 0,
  Presentation = 1,
  UxUi = 2,
  WebDev = 3,
  Event = 4,
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabIndex>(TabIndex.Accueil);
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showHelpDesk, setShowHelpDesk] = useState(false);

  // Initial mount loading animation
  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let timer: NodeJS.Timeout;

    setIsLoading(true);
    setLoadingProgress(0);

    // Simulate clean progress count
    progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 25;
      });
    }, 80);

    timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  // Filter projects by category and search query
  const getFilteredProjects = () => {
    let list = [];
    switch (activeTab) {
      case TabIndex.UxUi:
        list = projects.filter((p) => p.category === "uxui");
        break;
      case TabIndex.WebDev:
        list = projects.filter((p) => p.category === "web");
        break;
      case TabIndex.Event:
        list = projects.filter((p) => p.category === "event");
        break;
      default:
        return [];
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }
    return list;
  };

  const handleTabChange = (index: TabIndex) => {
    if (index === activeTab) return;
    
    setIsLoading(true);
    setLoadingProgress(0);
    setSearchQuery(""); // Reset search on tab switch

    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 25;
      });
    }, 60);

    setTimeout(() => {
      setActiveTab(index);
      setOpenProjectId(null); // Reset open project accordion on tab change
      setIsLoading(false);
      clearInterval(progressInterval);
    }, 300);
  };

  const currentCategoryLabel = () => {
    switch (activeTab) {
      case TabIndex.Accueil:
        return "ACCUEIL";
      case TabIndex.Presentation:
        return "SECTION 01: PRÉSENTATION";
      case TabIndex.UxUi:
        return "SECTION 02: UX/UI & BRAND DESIGN";
      case TabIndex.WebDev:
        return "SECTION 03: DÉVELOPPEMENT WEB";
      case TabIndex.Event:
        return "SECTION 04: ÉVÈNEMENTIEL";
    }
  };

  const filteredProjects = getFilteredProjects();

  return (
    <div className="w-full min-h-screen bg-[#FFF7F2] bg-anime-dots flex items-center justify-center p-0 md:p-4 font-sans text-primary-navy overflow-hidden select-none">
      
      {/* Viewport Lock Container - Mobile Device Mockup styled with deep navy borders */}
      <div className="w-full max-w-[500px] h-screen md:h-[840px] md:max-h-[92vh] bg-white md:rounded-[40px] shadow-soft-lg relative overflow-hidden flex flex-col border-0 md:border-[10px] md:border-primary-navy ring-0 md:ring-4 md:ring-primary-navy/10">
        
        {/* Status Bar / Notch Simulation */}
        <div className="hidden md:flex absolute top-0 left-0 right-0 h-6 bg-primary-navy items-center justify-between px-8 z-50 text-white/80 text-[10px] font-mono">
          <span>09:41</span>
          <div className="w-24 h-4 bg-primary-navy rounded-b-xl absolute left-1/2 -translate-x-1/2 border-x border-b border-primary-navy" />
          <div className="flex items-center gap-1.5 font-bold">
            <Sparkles size={10} className="text-accent-gold animate-pulse" />
            <span className="font-display">Mon App Portfolio</span>
          </div>
        </div>

        {/* Outer Binder Cover background */}
        <div className="flex-1 flex flex-col bg-[#FFF7F2] bg-card-grid pt-0 md:pt-6 pb-16 relative overflow-hidden">
          
          {/* Notebook Binder Spine Holes on the left */}
          <div className="absolute left-1.5 top-12 bottom-20 flex flex-col justify-around z-30 pointer-events-none">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-3.5 h-3.5 rounded-full bg-[#111E38]/10 border border-[#111E38]/20 shadow-inner" />
            ))}
          </div>

          {/* Elegant binder spine shadow */}
          <div className="absolute left-6 top-0 bottom-16 w-1.5 bg-[#111E38]/5 z-20 pointer-events-none" />

          {/* Active Folder Header with clean minimalist layout */}
          <div className="px-5 pl-12 pt-4 pb-2.5 flex items-center justify-between z-10 relative">
            <div className="flex flex-col">
              <span className="text-[9px] font-mono font-bold tracking-wider text-primary-navy/60">
                {currentCategoryLabel()}
              </span>
              <button
                onClick={() => handleTabChange(TabIndex.Accueil)}
                className="text-sm font-display font-bold text-primary-navy uppercase tracking-tight flex items-center gap-1.5 hover:opacity-85 transition-all cursor-pointer text-left focus:outline-none"
              >
                <span className="text-primary-navy text-[10px] leading-none">●</span>
                PORTFOLIO
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleTabChange(TabIndex.Accueil)}
                className={`text-2xs font-sans font-semibold tracking-tight transition-all cursor-pointer ${
                  activeTab === TabIndex.Accueil
                    ? "text-primary-navy font-bold underline decoration-secondary-sky decoration-2 underline-offset-2"
                    : "text-primary-navy/50 hover:text-primary-navy"
                }`}
              >
                Accueil
              </button>

              <button
                id="help-desk-trigger"
                onClick={() => setShowHelpDesk(true)}
                className="p-1 px-2 bg-primary-navy text-white rounded-lg text-[8px] font-display font-bold tracking-wider flex items-center gap-0.5 cursor-pointer shadow-soft-sm active:scale-95"
              >
                <HelpCircle size={8} className="text-accent-gold" />
                AIDE
              </button>
            </div>
          </div>

          {/* Main Content Area (Scrollable warm soft peach notebook paper) */}
          <div className="flex-1 px-4 pl-12 pr-3 pb-4 overflow-y-auto custom-scrollbar select-text relative z-10 flex flex-col items-center">
            <div className="bg-[#FFF7F2] rounded-2xl min-h-full p-4 relative overflow-visible w-full max-w-[340px]">
              
              {/* Binder Paper Stitching Line */}
              <div className="absolute left-1.5 top-0 bottom-0 w-[1px] border-l border-dashed border-secondary-sky/30" />
              
              {/* Animated Switcher with Retro Micro Loader */}
              <AnimatePresence mode="wait">
                {isLoading ? (
                  /* Elegant Anime Loading Screen */
                  <motion.div
                    key="clean-loader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.12 }}
                    className="absolute inset-0 bg-[#FFF7F2] flex flex-col items-center justify-center p-6 z-40 select-none"
                  >
                    <div className="rounded-2xl p-5 bg-white border border-secondary-sky/20 shadow-soft max-w-[240px] w-full text-center">
                      <div className="flex items-center justify-center gap-1.5 mb-2.5">
                        <span className="text-[10px] font-display font-bold text-primary-navy uppercase tracking-wider animate-pulse">
                          Chargement
                        </span>
                        <div className="flex gap-0.5">
                          <div className="w-1 h-1 rounded-full bg-primary-navy animate-bounce delay-75" />
                          <div className="w-1 h-1 rounded-full bg-primary-navy animate-bounce delay-150" />
                          <div className="w-1 h-1 rounded-full bg-primary-navy animate-bounce delay-300" />
                        </div>
                      </div>

                      {/* Smooth Loading Indicator */}
                      <div className="w-full h-2 bg-[#FFF7F2] rounded-full overflow-hidden border border-secondary-sky/20">
                        <div
                          className="h-full bg-primary-navy rounded-full transition-all duration-100 ease-out"
                          style={{ width: `${loadingProgress}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* Real Content Rendering */
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="w-full h-full"
                  >
                    {activeTab === TabIndex.Accueil && <Accueil onTabChange={handleTabChange} />}
                    
                    {activeTab === TabIndex.Presentation && <Presentation onTabChange={handleTabChange} />}
                    
                    {activeTab !== TabIndex.Presentation && activeTab !== TabIndex.Accueil && (
                      <div className="flex flex-col gap-4 py-1 w-full max-w-[296px] mx-auto">
                                           {/* Section Description Header Card */}
                        {activeTab === TabIndex.UxUi ? (
                          <div id="uxui-header-card" className="p-4 bg-white border border-secondary-sky/30 shadow-soft rounded-2xl flex gap-2 items-start relative min-h-[140px] overflow-visible">
                            <div className="z-10 flex flex-col w-[172px] max-w-[65%] shrink-0">
                              <h2 id="uxui-header-title" className="text-[16px] sm:text-[17px] font-display font-bold text-primary-navy uppercase tracking-wider mb-1.5 leading-snug w-[171.484px] max-w-full">
                                UX/UI & Brand Design
                              </h2>
                              <p id="uxui-header-description" className="text-[11px] text-primary-navy/80 leading-relaxed font-sans font-medium w-[172.484px] max-w-full">
                                J’apprécie énormément créer des identités de marque et réfléchir à de nouvelles interfaces utilisateur. Les trois premiers projets sont des projets purement UX/UI. Enfin, les trois suivants sont des projets de brand design.
                              </p>
                            </div>
                            <img
                              id="uxui-content-img"
                              src={cheimaNotebook}
                              alt="Illustration Cheïma"
                              className="absolute right-0 bottom-0 w-36 h-36 sm:w-44 sm:h-44 object-contain z-30 pointer-events-none translate-x-2 translate-y-1"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        ) : activeTab === TabIndex.WebDev ? (
                          <div id="webdev-header-card" className="p-4 bg-white border border-secondary-sky/30 shadow-soft rounded-2xl flex gap-2 items-start relative min-h-[140px] overflow-visible">
                            <div className="z-10 flex flex-col w-[172px] max-w-[65%] shrink-0">
                              <h2 id="webdev-header-title" className="text-[16px] sm:text-[17px] font-display font-bold text-primary-navy uppercase tracking-wider mb-1.5 leading-snug">
                                Développement Web
                              </h2>
                              <p id="webdev-header-description" className="text-[11px] text-primary-navy/80 leading-relaxed font-sans font-medium w-[155.307px] max-w-full">
                                Découvrez mes premiers pas en développement et conception web. Les projets ont été organisés par ordre chronologique. Chaque projet a débuté par une phase de maquettage puis de codage.
                              </p>
                            </div>
                            <img
                              id="webdev-content-img"
                              src={cheimaFocused}
                              alt="Illustration Cheïma Concentrée"
                              className="absolute right-0 bottom-0 w-36 h-36 sm:w-44 sm:h-44 object-contain z-30 pointer-events-none translate-x-2 translate-y-1"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        ) : (
                          <div id="event-header-card" className="p-4 bg-white border border-secondary-sky/30 shadow-soft rounded-2xl flex gap-2 items-start relative min-h-[140px] overflow-visible">
                            <div className="z-10 flex flex-col w-[172px] max-w-[65%] shrink-0">
                              <h2 id="event-header-title" className="text-[16px] sm:text-[17px] font-display font-bold text-primary-navy uppercase tracking-wider mb-1.5 leading-snug">
                                Événementiel
                              </h2>
                              <p id="event-header-description" className="text-[11px] text-primary-navy/80 leading-relaxed font-sans font-medium">
                                Au cours de mon cursus universitaire, j’ai eu l’opportunité de réaliser et diriger des projets événementiels, et d’organiser des événements qui ont accueilli le grand public.
                              </p>
                            </div>
                            <img
                              id="event-content-img"
                              src={cheimaInspired}
                              alt="Illustration Cheïma Inspirée"
                              className="absolute right-0 bottom-0 w-36 h-36 sm:w-44 sm:h-44 object-contain z-30 pointer-events-none translate-x-2 translate-y-1"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}



                        {/* Render Project Accordion or Custom Confused Pose Empty State */}
                        {filteredProjects.length > 0 ? (
                          <ProjectAccordion
                            projects={filteredProjects}
                            openProjectId={openProjectId}
                            setOpenProjectId={setOpenProjectId}
                          />
                        ) : (
                          /* 5. CONFUSED AVATAR EMPTY STATE / NO RESULTS */
                          <div id="empty-state-card" className="bg-white border border-secondary-sky/30 shadow-soft rounded-2xl p-6 text-center relative overflow-hidden mt-6 mb-6 pt-12">
                            
                            {/* OVERLAPPING CONFUSED AVATAR */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border border-secondary-sky/30 bg-white overflow-hidden shadow-soft z-20">
                              <img
                                src={cheimaConfused}
                                alt="Cheïma confuse"
                                className="w-full h-full object-cover scale-110 mix-blend-multiply"
                                referrerPolicy="no-referrer"
                              />
                            </div>

                            <div className="absolute top-2 right-4 bg-accent-gold text-primary-navy text-[8px] font-mono font-bold px-2 py-0.5 rounded-full">
                              Aucun résultat ?
                            </div>

                            <h3 className="text-2xs font-display font-bold text-primary-navy uppercase tracking-wider mt-4">
                              Aucun projet trouvé !
                            </h3>
                            <p className="text-[10px] text-primary-navy/70 leading-relaxed max-w-[240px] mx-auto mt-2 font-medium">
                              "Oups ! Je n'ai pas trouvé d'éléments correspondant à votre recherche. Essayez d'autres mots-clés ou réinitialisez le filtre !"
                            </p>

                            <button
                              id="reset-search-btn"
                              onClick={() => setSearchQuery("")}
                              className="mt-4 px-4 py-1.5 bg-primary-navy text-white text-[10px] font-display font-bold rounded-xl shadow-soft hover:bg-primary-navy/90 cursor-pointer inline-flex items-center gap-1.5 active:scale-95 transition-transform"
                            >
                              <RefreshCw size={10} />
                              Tout afficher
                            </button>
                          </div>
                        )}

                        {/* GitHub Server Link Card for WebDev Tab */}
                        {activeTab === TabIndex.WebDev && (
                          <div id="webdev-github-card" className="mt-3 mb-10 p-4 bg-white border border-secondary-sky/30 shadow-soft rounded-2xl flex flex-col items-center text-center gap-2.5">
                            <div className="flex items-center gap-2 text-primary-navy font-display font-bold text-xs uppercase tracking-wider">
                              <Github size={16} />
                              <span>Mon Serveur GitHub</span>
                            </div>
                            <p className="text-[11px] text-primary-navy/80 font-sans font-medium leading-relaxed">
                              Découvrez l’ensemble de mes projets, dépôts de code et réalisations sur mon serveur GitHub.
                            </p>
                            <a
                              id="webdev-github-link-btn"
                              href="https://github.com/cheimacherni-jpg/liens-projets-portfolio-dev.git"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full py-3 px-4 bg-primary-navy hover:bg-primary-navy/90 text-white font-mono text-xs font-bold rounded-xl shadow-soft transition-all duration-200 flex items-center justify-center gap-2 hover:translate-y-[-1px] active:scale-[0.98] cursor-pointer"
                            >
                              <Github size={15} className="text-secondary-sky" />
                              <span>Accéder à mon serveur GitHub</span>
                              <ArrowRight size={14} className="text-secondary-sky" />
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Sticky physical folder binder tabs navigation stacked at the bottom - SOLID simple tabs */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-primary-navy border-t border-primary-navy flex items-end justify-between px-1.5 pb-0.5 z-40 shadow-2xl" style={{ marginTop: "10px" }}>
            
            {/* Tab 1: Présentation */}
            <button
              id="tab-btn-presentation"
              onClick={() => handleTabChange(TabIndex.Presentation)}
              className={`folder-tab-modern flex-1 flex flex-col items-center justify-center pt-3 pb-2 px-0.5 text-center cursor-pointer font-display leading-none ${
                activeTab === TabIndex.Presentation
                  ? "bg-[#FFF7F2] text-primary-navy font-bold text-[9px] h-13 z-30 -translate-y-1 shadow-soft"
                  : "bg-[#111E38] text-white/70 hover:bg-[#111E38]/90 text-[8px] font-bold h-11 border-t border-x border-white/5"
              }`}
            >
              <Briefcase size={11} className="mb-0.5" />
              <span className="truncate w-full max-w-full">Présentation</span>
            </button>

            {/* Tab 2: UX/UI & Brand Design */}
            <button
              id="tab-btn-uxui"
              onClick={() => handleTabChange(TabIndex.UxUi)}
              className={`folder-tab-modern flex-1 flex flex-col items-center justify-center pt-3 pb-2 px-0.5 text-center cursor-pointer font-display leading-none -ml-1 ${
                activeTab === TabIndex.UxUi
                  ? "bg-[#CBE4F9] text-primary-navy font-bold text-[9px] h-13 z-30 -translate-y-1 shadow-soft"
                  : "bg-[#111E38] text-white/70 hover:bg-[#111E38]/90 text-[8px] font-bold h-11 border-t border-x border-white/5"
              }`}
            >
              <Award size={11} className="mb-0.5" />
              <span className="truncate w-full max-w-full">UX/UI</span>
            </button>

            {/* Tab 3: Développement Web */}
            <button
              id="tab-btn-webdev"
              onClick={() => handleTabChange(TabIndex.WebDev)}
              className={`folder-tab-modern flex-1 flex flex-col items-center justify-center pt-3 pb-2 px-0.5 text-center cursor-pointer font-display leading-none -ml-1 border-t border-x ${
                activeTab === TabIndex.WebDev
                  ? "text-primary-navy font-bold text-[9px] h-13 z-30 -translate-y-1 shadow-soft"
                  : "bg-[#111E38] text-white/70 hover:bg-[#111E38]/90 text-[8px] font-bold h-11 border-white/5"
              }`}
              style={activeTab === TabIndex.WebDev ? { backgroundColor: "#cdb49e", borderColor: "#cdb49e" } : undefined}
            >
              <Globe size={11} className="mb-0.5" />
              <span className="truncate w-full max-w-full">Dév Web</span>
            </button>

            {/* Tab 4: Evènementiel */}
            <button
              id="tab-btn-event"
              onClick={() => handleTabChange(TabIndex.Event)}
              className={`folder-tab-modern flex-1 flex flex-col items-center justify-center pt-3 pb-2 px-0.5 text-center cursor-pointer font-display leading-none -ml-1 border-t border-x ${
                activeTab === TabIndex.Event
                  ? "text-primary-navy font-bold text-[9px] h-13 z-30 -translate-y-1 shadow-soft"
                  : "bg-[#111E38] text-white/70 hover:bg-[#111E38]/90 text-[8px] font-bold h-11 border-white/5"
              }`}
              style={activeTab === TabIndex.Event ? { backgroundColor: "#eadece", borderColor: "#eadece" } : undefined}
            >
              <Calendar size={11} className="mb-0.5" />
              <span className="truncate w-full max-w-full">Évènements</span>
            </button>

          </div>

        </div>
      </div>

      {/* Floating Help Desk Simulation Modal featuring Confused Pose */}
      <AnimatePresence>
        {showHelpDesk && (
          <motion.div
            id="help-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary-navy/70 backdrop-blur-sm flex items-center justify-center p-4 select-none"
            onClick={() => setShowHelpDesk(false)}
          >
            <motion.div
              id="help-modal-content"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white w-full max-w-[340px] rounded-2xl p-5 border border-secondary-sky/30 shadow-soft-lg text-center relative pt-12 flex flex-col justify-between items-center"
              style={{ height: "390px" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* OVERLAPPING CONFUSED AVATAR inside Help desk */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border border-secondary-sky/30 bg-white overflow-hidden shadow-soft z-20">
                <img
                  src={cheimaConfused}
                  alt="Cheïma Help"
                  className="w-full h-full object-cover scale-110 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute top-3.5 right-4 bg-accent-gold text-primary-navy text-[8px] font-mono font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                Centre d'Aide
              </div>

              <h3 className="text-xs font-display font-bold text-primary-navy uppercase tracking-wider mt-2 w-full">
                Une question sur mon portfolio ?
              </h3>
              
              <div className="space-y-2.5 my-2 text-left font-sans w-full">
                <div className="p-2.5 bg-[#FFF7F2] rounded-xl border border-secondary-sky/10">
                  <h4 className="text-[10px] font-bold text-primary-navy leading-none">📋 Comment parcourir les projets ?</h4>
                  <p className="text-[9px] text-primary-navy/70 leading-relaxed mt-1">
                    Cliquez sur l'onglet **UX/UI**, **Dév Web** ou **Évènements** puis tapez sur un titre de projet pour dérouler sa fiche descriptive complète.
                  </p>
                </div>
                
                <div className="p-2.5 bg-[#FFF7F2] rounded-xl border border-secondary-sky/10">
                  <h4 className="text-[10px] font-bold text-primary-navy leading-none">📂 Comment télécharger mon CV ?</h4>
                  <p className="text-[9px] text-primary-navy/70 leading-relaxed mt-1">
                    Dans l'onglet **Présentation**, cliquez sur le bouton noir **"TÉLÉCHARGER MON CV"** pour l'imprimer ou l'enregistrer au format PDF.
                  </p>
                </div>
              </div>

              <button
                id="close-help-btn"
                onClick={() => setShowHelpDesk(false)}
                className="w-full py-2.5 bg-primary-navy text-white text-2xs font-display font-bold rounded-xl shadow-soft hover:bg-primary-navy/90 cursor-pointer active:scale-95 transition-all"
              >
                Compris, merci !
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
