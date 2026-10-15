/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Phone, Mail, GraduationCap, Briefcase, Award, Download, X, Sparkles, Star, CheckCircle, Eye, FileText, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Formation, Experience } from "../types";
import { generateAndDownloadCVPDF } from "../lib/cvPdf";

// Import the anime style generated assets
import cheimaAccueil from "../assets/images/regenerated_image_1784755350754.png";
import cheimaWelcome from "../assets/images/regenerated_image_1784849101795.png";
import cheimaInspired from "../assets/images/cheima_inspired_1784480561455.jpg";
import canvaLogo from "../assets/images/canva_app_icon_1784715365897.jpg";
import figmaLogo from "../assets/images/regenerated_image_1784715830733.png";
import notionLogo from "../assets/images/regenerated_image_1784715829480.png";
import webflowLogo from "../assets/images/regenerated_image_1784716092670.png";
import m365Logo from "../assets/images/regenerated_image_1784716218725.png";
import githubLogo from "../assets/images/regenerated_image_1784716219624.png";

const formations: Formation[] = [
  {
    id: "f1",
    degree: "Certification professionnelle Web",
    school: "La toile - EM Lyon Business School",
    year: "2026",
    details: "Conception et Développement Web - UX/UI Webdesign - Gestion de projet digital - Culture Web"
  },
  {
    id: "f2",
    degree: "BUT Techniques de Commercialisation",
    school: "IUT Lyon 1",
    year: "2021 - 2024",
    details: "Spécialisation Business Développement et Management de la Relation Client"
  },
  {
    id: "f3",
    degree: "Baccalauréat Général",
    school: "Lycée Parc Chabrière",
    year: "2021",
    details: "Mention Bien - SES- HGGSP - LLCER - Section européenne"
  }
];

const experiences: Experience[] = [
  {
    id: "e1",
    role: "Mise en situation professionnelle - Hackathon",
    company: "La toile - EM Lyon Business School, Lyon 7ème",
    period: "2026",
    description: [
      "Conception de maquettes haute fidélité et prototypage interactif sur Figma sur problématiques réelles"
    ]
  },
  {
    id: "e2",
    role: "Sales Account Manager",
    company: "GoStudent - Villeurbanne",
    period: "2023",
    description: [
      "Mise en relation et organisation des sessions d'essai élève-professeur-parent et présentation de la plateforme de cours"
    ]
  },
  {
    id: "e3",
    role: "Consultante Junior Marketing & Communication",
    company: "Institut de langue arabe - Villeurbanne",
    period: "2022",
    description: [
      "Création de plans de communication, stratégies marketing et organisation d'événements"
    ]
  }
];

const hardSkills: string[] = [
  "HTML/CSS/Javascript",
  "Création graphique",
  "Rédaction claire, structurée, adaptée au public",
  "Planification, rétroplanning, jalons, livrables"
];

const softSkills: string[] = [
  "Travail d’équipe",
  "Autonomie",
  "Pédagogie & Créativité",
  "Aisance relationnelle"
];

import { TabIndex } from "../App";

interface PresentationProps {
  onTabChange?: (tabIndex: TabIndex) => void;
}

export default function Presentation({ onTabChange }: PresentationProps) {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div id="presentation-container" className="flex flex-col py-1 select-text font-sans">
      
      {/* Responsive Grid on Desktop / PC screen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start w-full">
        
        {/* Left Column on Desktop (Col 5): Profile Card, Contact Widget, Software */}
        <div className="lg:col-span-5 flex flex-col gap-5 w-full">
          
          {/* 1. Welcome Profile Card */}
          <div id="profile-card" className="bg-white border border-secondary-sky/40 shadow-soft rounded-2xl md:rounded-3xl p-5 md:p-6 relative mt-8 pt-10 w-full">
            
            {/* OVERLAPPING AVATAR FROM ACCUEIL */}
            <div className="absolute -top-10 -right-2 md:-right-3 w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-secondary-sky/40 bg-white overflow-hidden shadow-soft-lg z-20">
              <img
                id="profile-card-avatar-img"
                src={cheimaAccueil}
                alt="Cheïma Cherni"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Status Badge */}
            <div className="absolute -top-3 left-4 bg-primary-navy text-accent-gold border border-primary-navy px-3 py-1 rounded-full text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 z-10 shadow-soft-sm">
              <Star size={10} className="fill-accent-gold stroke-accent-gold" />
              Creative Tech
            </div>

            <div className="flex flex-col pr-24 md:pr-28">
              <span className="text-[12px] md:text-[13px] font-mono tracking-wider text-primary-navy/50 uppercase font-black">Mon Profil</span>
              <h1 className="text-[27px] md:text-[32px] font-display font-bold text-primary-navy leading-tight mt-1 w-[190px] md:w-auto">Cheïma Cherni</h1>
              <p className="text-2xs md:text-xs font-bold text-primary-navy/70 mt-0 pt-1 font-mono w-[187px] md:w-auto h-[40px] md:h-auto">Digital & Numérique</p>
            </div>

            <p className="text-2xs md:text-xs text-primary-navy leading-relaxed mt-3 pt-3 border-t border-secondary-sky/20 font-medium">
              Dynamique et toujours motivée, découvrez mon univers à travers mes projets et mes réalisations. Polyvalentes et variées, mes réalisations sont à l’image de mes compétences.
            </p>

            {/* CV View CTA Button */}
            <div className="mt-4 flex justify-center">
              <button
                id="download-cv-btn"
                onClick={() => setIsCVModalOpen(true)}
                className="w-[238px] md:w-full max-w-full py-2.5 px-4 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl text-xs md:text-sm font-display font-bold shadow-soft flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-[0.98]"
              >
                <Eye size={15} className="text-secondary-sky shrink-0" />
                VOIR MON CV
              </button>
            </div>
          </div>

          {/* Quick Contact Widget using native protocols */}
          <div id="contact-widget" className="flex flex-col gap-2.5 w-full">
            <a
              id="contact-call-link"
              href="tel:0749985320"
              className="flex items-center gap-3 p-3 bg-secondary-sky/90 border border-secondary-sky/60 shadow-soft hover:shadow-soft-lg hover:bg-secondary-sky rounded-xl text-primary-navy transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary-navy flex items-center justify-center text-secondary-sky shrink-0 group-hover:scale-105 transition-transform">
                <Phone size={13} className="stroke-[2.5px]" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-[8px] md:text-[9px] font-mono font-bold text-primary-navy/70 uppercase leading-none">Téléphone</p>
                <p className="text-[11px] md:text-xs font-bold font-display text-primary-navy mt-0.5">07 49 98 53 20</p>
              </div>
            </a>

            <a
              id="contact-email-link"
              href="mailto:chema.cherni@gmail.com"
              className="flex items-center gap-3 p-3 bg-secondary-sky/90 border border-secondary-sky/60 shadow-soft hover:shadow-soft-lg hover:bg-secondary-sky rounded-xl text-primary-navy transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary-navy flex items-center justify-center text-secondary-sky shrink-0 group-hover:scale-105 transition-transform">
                <Mail size={13} className="stroke-[2.5px]" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-[8px] md:text-[9px] font-mono font-bold text-primary-navy/70 uppercase leading-none">E-mail</p>
                <p className="text-[11px] md:text-xs font-bold font-display text-primary-navy mt-0.5 break-all">chema.cherni@gmail.com</p>
              </div>
            </a>

            <a
              id="contact-linkedin-link"
              href="https://www.linkedin.com/in/imen-che%C3%AFma-cherni-02b945224"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-secondary-sky/90 border border-secondary-sky/60 shadow-soft hover:shadow-soft-lg hover:bg-secondary-sky rounded-xl text-primary-navy transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary-navy flex items-center justify-center text-secondary-sky shrink-0 group-hover:scale-105 transition-transform">
                <Linkedin size={13} className="stroke-[2.5px]" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-[8px] md:text-[9px] font-mono font-bold text-primary-navy/70 uppercase leading-none">Profil LinkedIn</p>
                <p className="text-[11px] md:text-xs font-bold font-display text-primary-navy mt-0.5 break-all">imen-cheïma-cherni-02b945224</p>
              </div>
            </a>
          </div>

          {/* SOFTWARE Section - High fidelity tool logos */}
          <div 
            id="software-section" 
            className="bg-white border border-[#D2BCA6]/50 shadow-soft rounded-2xl md:rounded-3xl p-5 relative mt-4 pt-8 pb-5 flex flex-col items-center w-full"
          >
            {/* Floating blue header tab matching the photo */}
            <div className="absolute -top-4.5 left-1/2 transform -translate-x-1/2 bg-[#C6E5F7] border border-[#A8D3F0] px-8 py-1.5 rounded-xl shadow-soft-sm">
              <span className="text-[11px] font-display font-bold text-primary-navy tracking-widest uppercase">
                SOFTWARE
              </span>
            </div>

            {/* Grid of high-fidelity tool logos */}
            <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-3.5 sm:gap-4 w-full pt-2">
              {/* Canva */}
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-soft rounded-[15px] overflow-hidden" title="Canva">
                  <img src={canvaLogo} alt="Canva logo" className="w-full h-full object-cover rounded-[15px]" referrerPolicy="no-referrer" />
                </div>
                <span className="text-[9px] font-mono text-primary-navy/70 font-semibold">Canva</span>
              </div>

              {/* Figma */}
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-soft rounded-[15px] overflow-hidden" title="Figma">
                  <img src={figmaLogo} alt="Figma logo" className="w-full h-full object-cover rounded-[15px]" referrerPolicy="no-referrer" />
                </div>
                <span className="text-[9px] font-mono text-primary-navy/70 font-semibold">Figma</span>
              </div>

              {/* Webflow */}
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-soft rounded-[15px] overflow-hidden" title="Webflow">
                  <img src={webflowLogo} alt="Webflow logo" className="w-full h-full object-cover rounded-[15px]" referrerPolicy="no-referrer" />
                </div>
                <span className="text-[9px] font-mono text-primary-navy/70 font-semibold">Webflow</span>
              </div>

              {/* Microsoft 365 */}
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-soft rounded-[15px] overflow-hidden" title="Microsoft 365">
                  <img src={m365Logo} alt="Microsoft 365 logo" className="w-full h-full object-cover rounded-[15px]" referrerPolicy="no-referrer" />
                </div>
                <span className="text-[9px] font-mono text-primary-navy/70 font-semibold">M365</span>
              </div>

              {/* GitHub */}
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-soft rounded-[15px] overflow-hidden" title="GitHub">
                  <img src={githubLogo} alt="GitHub logo" className="w-full h-full object-cover rounded-[15px]" referrerPolicy="no-referrer" />
                </div>
                <span className="text-[9px] font-mono text-primary-navy/70 font-semibold">GitHub</span>
              </div>

              {/* Notion */}
              <div className="flex flex-col items-center gap-1 group">
                <div className="w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-soft rounded-[15px] overflow-hidden" title="Notion">
                  <img src={notionLogo} alt="Notion logo" className="w-full h-full object-cover rounded-[15px]" referrerPolicy="no-referrer" />
                </div>
                <span className="text-[9px] font-mono text-primary-navy/70 font-semibold">Notion</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column on Desktop (Col 7): Skills, Experiences, Formations */}
        <div className="lg:col-span-7 flex flex-col gap-5 w-full">
          
          {/* Skills Section */}
          <div 
            id="skills-section" 
            className="bg-white border border-secondary-sky/30 shadow-soft rounded-2xl md:rounded-3xl p-5 md:p-6 relative overflow-hidden w-full"
          >
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-secondary-sky/20">
              <Award className="text-primary-navy" size={16} />
              <h2 className="text-xs md:text-sm font-display font-bold text-primary-navy uppercase tracking-wider">Expertises & Compétences</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-[9px] md:text-[10px] font-mono font-bold text-primary-navy/50 uppercase mb-2">Hard Skills (Technique)</h3>
                <div className="flex flex-wrap gap-1.5">
                  {hardSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-secondary-sky/20 text-primary-navy border border-secondary-sky/40 rounded-lg text-[9px] md:text-[10px] font-mono font-bold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[9px] md:text-[10px] font-mono font-bold text-primary-navy/50 uppercase mb-2">Soft Skills (Savoir-être)</h3>
                <div className="flex flex-wrap gap-1.5">
                  {softSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-secondary-sky/10 text-primary-navy border border-secondary-sky/20 rounded-lg text-[9px] md:text-[10px] font-mono font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experiences Section */}
          <div id="experiences-section" className="bg-white border border-secondary-sky/30 shadow-soft rounded-2xl md:rounded-3xl p-5 md:p-6 w-full">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-secondary-sky/10">
              <Briefcase className="text-primary-navy" size={16} />
              <h2 className="text-xs md:text-sm font-display font-bold text-primary-navy uppercase tracking-wider">Parcours Professionnel</h2>
            </div>

            <div className="relative border-l-2 border-dashed border-secondary-sky/50 pl-4 ml-2 flex flex-col gap-5">
              {experiences.map((exp) => (
                <div id={`exp-${exp.id}`} key={exp.id} className="relative group">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-secondary-sky border border-primary-navy/30 group-hover:bg-accent-gold transition-colors duration-200" />
                  
                  <div className="flex items-baseline justify-between flex-wrap gap-1 mb-1">
                    <h3 className="text-xs md:text-[13px] font-display font-bold text-primary-navy">{exp.role}</h3>
                    <span className="text-[8px] md:text-[9px] font-mono font-bold px-1.5 py-0.5 bg-primary-navy text-white rounded-md">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[9px] md:text-[10px] font-mono font-bold text-primary-navy/50 mb-1.5">{exp.company}</p>
                  
                  <ul className="list-disc list-outside pl-4 space-y-1">
                    {exp.description.map((item, index) => (
                      <li key={index} className="text-[10px] md:text-[11px] text-primary-navy/80 leading-relaxed font-sans">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Formations Section */}
          <div id="formations-section" className="bg-white border border-secondary-sky/30 shadow-soft rounded-2xl md:rounded-3xl p-5 md:p-6 w-full mb-6">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-secondary-sky/10">
              <GraduationCap className="text-primary-navy" size={16} />
              <h2 className="text-xs md:text-sm font-display font-bold text-primary-navy uppercase tracking-wider">Études & Formations</h2>
            </div>

            <div className="flex flex-col gap-4">
              {formations.map((f) => (
                <div id={`formation-${f.id}`} key={f.id} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-secondary-sky/20 text-primary-navy flex items-center justify-center flex-shrink-0 mt-0.5">
                    <GraduationCap size={15} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs md:text-[13px] font-display font-bold text-primary-navy leading-tight">{f.degree}</h3>
                    <span className="inline-block text-[8px] md:text-[9px] font-mono font-bold text-primary-navy/60 bg-secondary-sky/20 px-1.5 py-0.5 rounded-md mt-1">{f.year}</span>
                    <p className="text-[9px] md:text-[10px] font-mono font-bold text-primary-navy/50 mt-1">{f.school}</p>
                    {f.details && (
                      <p className="text-[10px] md:text-[11px] text-primary-navy/70 mt-1 leading-relaxed font-sans">
                        {f.details}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* CV Showcase & Print Modal */}
      <AnimatePresence>
        {isCVModalOpen && (
          <motion.div
            id="cv-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary-navy/70 backdrop-blur-sm flex items-center justify-center p-3 select-none"
            onClick={() => setIsCVModalOpen(false)}
          >
            <motion.div
              id="cv-modal-content"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white w-full max-w-[440px] max-h-[78vh] rounded-2xl flex flex-col shadow-soft-lg border border-secondary-sky/30 overflow-hidden my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-4 py-3 bg-primary-navy text-white">
                <div className="flex items-center gap-2">
                  <FileText size={13} className="text-accent-gold" />
                  <span className="font-display font-bold text-2xs uppercase tracking-wider">Curriculum Vitae — Imen Cheïma CHERNI</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    id="modal-close-btn"
                    onClick={() => setIsCVModalOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white cursor-pointer transition-colors"
                  >
                    <X size={13} />
                  </button>
                </div>
              </div>

              {/* CV Body Image */}
              <div id="printable-cv-document" className="flex-1 overflow-y-auto p-3 sm:p-5 custom-scrollbar bg-white flex items-center justify-center">
                <img
                  id="cv-modal-image"
                  src={cheimaWelcome}
                  alt="Curriculum Vitae — Imen Cheïma CHERNI"
                  className="w-full h-auto max-h-[60vh] object-contain rounded-xl shadow-soft border border-secondary-sky/20"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Modal footer print guidance */}
              <div className="bg-primary-navy/5 p-2.5 px-4 border-t border-secondary-sky/10 flex justify-between items-center shrink-0">
                <p className="text-[9px] text-primary-navy/60 italic font-medium leading-tight hidden sm:block">Aperçu officiel du CV</p>
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    id="cv-modal-download-cta"
                    onClick={generateAndDownloadCVPDF}
                    className="px-3.5 py-1.5 bg-primary-navy text-white text-[11px] font-display font-bold rounded-lg hover:bg-primary-navy/95 cursor-pointer flex items-center gap-1.5 shadow-soft active:scale-[0.98] transition-transform"
                  >
                    <Download size={12} className="text-secondary-sky" />
                    Télécharger le CV
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
