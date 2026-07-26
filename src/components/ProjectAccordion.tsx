/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronDown, ExternalLink, Github, ArrowRight, Figma } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import Carousel from "./Carousel";

interface ProjectAccordionProps {
  projects: Project[];
  openProjectId: string | null;
  setOpenProjectId: (id: string | null) => void;
}

export default function ProjectAccordion({
  projects,
  openProjectId,
  setOpenProjectId,
}: ProjectAccordionProps) {
  const toggleProject = (id: string) => {
    if (openProjectId === id) {
      setOpenProjectId(null); // Collapses if clicked again
    } else {
      setOpenProjectId(id); // Opens and exclusive collapses others
    }
  };

  return (
    <div id="project-accordion-list" className="flex flex-col gap-4 select-text mb-6">
      {projects.map((project) => {
        const isOpen = openProjectId === project.id;

        return (
          <div
            id={`project-card-${project.id}`}
            key={project.id}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
              isOpen
                ? "border-secondary-sky/60 shadow-soft-lg"
                : "border-secondary-sky/30 shadow-soft hover:shadow-soft-lg"
            }`}
          >
            {/* Accordion Header */}
            <button
              id={`project-header-${project.id}`}
              onClick={() => toggleProject(project.id)}
              className="w-full text-left p-4 pr-12 flex items-center justify-between gap-4 cursor-pointer focus:outline-none relative"
              aria-expanded={isOpen}
            >
              <div className="min-w-0 pr-4">
                <h3
                  className="text-sm font-display font-bold text-primary-navy leading-snug"
                  style={project.id === "p_apptivity" ? { width: "214.56px" } : undefined}
                >
                  {project.title}
                </h3>
              </div>
              <div
                className={`w-8 h-8 rounded-full border border-secondary-sky/30 text-primary-navy flex items-center justify-center flex-shrink-0 transition-transform duration-300 bg-bg-peach absolute right-4 top-1/2 -translate-y-1/2 ${
                  isOpen ? "rotate-180 bg-secondary-sky/30" : ""
                }`}
              >
                <ChevronDown size={14} />
              </div>
            </button>

            {/* Accordion Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`project-body-${project.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-4 pb-5 pt-4 border-t border-secondary-sky/20 flex flex-col gap-4 relative">
                    
                    {/* Project Description */}
                    <div>
                      <p
                        className="text-[11px] text-primary-navy leading-relaxed font-sans font-medium whitespace-pre-line"
                        style={project.id === "p_apptivity" ? { width: "241.555px" } : undefined}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Image Carousel (handles thumbnail and navigation clicks) */}
                    <Carousel images={project.images} projectTitle={project.title} />

                    {/* Context Specific Action Buttons with clean styles */}
                    <div className="flex flex-wrap justify-center gap-2 pt-3 border-t border-secondary-sky/20">
                      {project.prototypeUrl && (
                        <a
                          id={`action-proto-${project.id}`}
                          href={project.prototypeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 min-w-[130px] py-[10px] px-3 bg-primary-navy hover:bg-primary-navy/90 text-white text-[12px] text-center font-display font-bold rounded-xl flex items-center justify-center gap-1.5 transition-transform active:scale-[0.98]"
                        >
                          <Figma size={14} className="text-secondary-sky" />
                          <span>TESTER LE PROTOTYPE FIGMA</span>
                          <ArrowRight size={14} className="text-secondary-sky" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          id={`action-git-${project.id}`}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-[10px] px-5 bg-secondary-sky/20 text-primary-navy border border-secondary-sky/40 hover:bg-secondary-sky/30 text-[13px] text-center font-display font-bold rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
                          title="Voir le code source sur GitHub"
                        >
                          <Github size={14} />
                          <span>Voir le code</span>
                          <ArrowRight size={14} />
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          id={`action-live-${project.id}`}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-[10px] px-4 bg-primary-navy hover:bg-primary-navy/90 text-white text-[13px] text-center font-display font-bold rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
                        >
                          <ExternalLink size={14} className="text-secondary-sky" />
                          <span>Voir la page</span>
                          <ArrowRight size={14} className="text-secondary-sky" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
