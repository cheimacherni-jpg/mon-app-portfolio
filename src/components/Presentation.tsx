/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Phone, Mail, GraduationCap, Briefcase, Award, Download, X, Printer, Sparkles, Star, CheckCircle, Eye, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Formation, Experience } from "../types";
import { generateAndDownloadCVPDF } from "../lib/cvPdf";

// Import the anime style generated assets
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

  const triggerPrint = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.print();
  };

  return (
    <div id="presentation-container" className="flex flex-col gap-5 py-1 select-text font-sans">
      
      {/* 1. Welcome Profile Card with Detached Overlapping Avatar */}
      <div id="profile-card" className="bg-white border border-secondary-sky/40 shadow-soft rounded-2xl p-4 sm:p-5 relative mt-8 pt-12 w-full max-w-full mx-auto">
        
        {/* DETACHED OVERLAPPING AVATAR - Welcoming Fist Pump Pose */}
        <div className="flex flex-col">
          <span className="text-[13px] font-mono tracking-wider text-primary-navy/50 uppercase font-black">Mon Profil</span>
          <h1 className="text-[25px] font-display font-bold text-primary-navy leading-none mt-1">Cheïma Cherni</h1>
          <p className="text-2xs font-bold text-primary-navy/70 mt-0 pt-[13px] font-mono">Digital & Numérique</p>
        </div>

        <p className="text-2xs text-primary-navy leading-relaxed mt-3 pt-2 border-t border-secondary-sky/20 font-medium">
          Dynamique et toujours motivée, découvrez mon univers à travers mes projets et mes réalisations. Polyvalentes et variées, mes réalisations sont à l’image de mes compétences.
        </p>

        {/* CV View CTA Button */}
        <div className="mt-4 flex justify-center">
          <button
            id="download-cv-btn"
            onClick={() => setIsCVModalOpen(true)}
            className="w-[238px] max-w-full mx-auto py-1 px-4 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-xl text-[13px] leading-[29px] font-display font-bold shadow-soft flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-[0.98]"
          >
            <Eye size={15} className="text-secondary-sky shrink-0" />
            VOIR MON CV
          </button>
        </div>
      </div>

      {/* Quick Contact Widget using native protocols */}
      <div id="contact-widget" className="flex flex-col gap-2.5 w-full max-w-full mx-auto">
        <a
          id="contact-call-link"
          href="tel:0749985320"
          className="flex items-center gap-3 p-3 bg-secondary-sky border border-secondary-sky/60 shadow-soft hover:shadow-soft-lg hover:bg-secondary-sky/90 rounded-xl text-primary-navy transition-all group"
        >
          <div className="w-8 h-8 rounded-lg bg-primary-navy flex items-center justify-center text-secondary-sky shrink-0 group-hover:scale-105 transition-transform">
            <Phone size={13} className="stroke-[2.5px]" />
          </div>
          <div className="text-left min-w-0">
            <p className="text-[8px] font-mono font-bold text-primary-navy/70 uppercase leading-none">Téléphone</p>
            <p className="text-[11px] font-bold font-display text-primary-navy mt-0.5">07 49 98 53 20</p>
          </div>
        </a>

        <a
          id="contact-email-link"
          href="mailto:chema.cherni@gmail.com"
          className="flex items-center gap-3 p-3 bg-secondary-sky border border-secondary-sky/60 shadow-soft hover:shadow-soft-lg hover:bg-secondary-sky/90 rounded-xl text-primary-navy transition-all group"
        >
          <div className="w-8 h-8 rounded-lg bg-primary-navy flex items-center justify-center text-secondary-sky shrink-0 group-hover:scale-105 transition-transform">
            <Mail size={13} className="stroke-[2.5px]" />
          </div>
          <div className="text-left min-w-0">
            <p className="text-[8px] font-mono font-bold text-primary-navy/70 uppercase leading-none">E-mail</p>
            <p className="text-[11px] font-bold font-display text-primary-navy mt-0.5 break-all">chema.cherni@gmail.com</p>
          </div>
        </a>
      </div>

      {/* 2. Skills Section */}
      <div 
        id="skills-section" 
        className="bg-white border border-secondary-sky/30 shadow-soft rounded-2xl p-4 sm:p-5 relative overflow-hidden w-full max-w-full mx-auto"
      >
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-secondary-sky/20">
          <Award className="text-primary-navy" size={14} />
          <h2 className="text-xs font-display font-bold text-primary-navy uppercase tracking-wider">Expertises & Compétences</h2>
        </div>

        <div className="flex flex-col gap-4 pr-0">
          <div>
            <h3 className="text-[9px] font-mono font-bold text-primary-navy/50 uppercase mb-2">Hard Skills (Compétences techniques)</h3>
            <div className="flex flex-wrap gap-1.5">
              {hardSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-secondary-sky/20 text-primary-navy border border-secondary-sky/40 rounded-lg text-[9px] font-mono font-bold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[9px] font-mono font-bold text-primary-navy/50 uppercase mb-2">Soft Skills (Savoir-être)</h3>
            <div className="flex flex-wrap gap-1.5">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-secondary-sky/10 text-primary-navy border border-secondary-sky/20 rounded-lg text-[9px] font-mono font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2.5 SOFTWARE Section - Styled exactly like the user's photo with custom high-fidelity SVG logos */}
      <div 
        id="software-section" 
        className="bg-white border border-[#D2BCA6]/50 shadow-soft rounded-2xl p-4 sm:p-5 relative mt-6 pt-8 pb-5 flex flex-col items-center w-full max-w-full mx-auto"
      >
        {/* Floating blue header tab matching the photo */}
        <div className="absolute -top-4.5 left-1/2 transform -translate-x-1/2 bg-[#C6E5F7] border border-[#A8D3F0] px-8 py-1.5 rounded-xl shadow-soft-sm">
          <span className="text-[11px] font-display font-bold text-primary-navy tracking-widest uppercase">
            SOFTWARE
          </span>
        </div>

        {/* Horizontal row of high-fidelity tool logos */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 w-full pt-1.5">
          {/* Canva Logo */}
          <div className="w-13 h-13 sm:w-16 sm:h-16 flex items-center justify-center relative group transition-all duration-300 hover:scale-110 shadow-soft rounded-[15px] overflow-hidden" title="Canva">
            <img 
              src={canvaLogo} 
              alt="Canva logo" 
              className="w-full h-full object-cover rounded-[15px]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Figma Logo */}
          <div className="w-13 h-13 sm:w-16 sm:h-16 flex items-center justify-center relative group transition-all duration-300 hover:scale-110 shadow-soft rounded-[15px] overflow-hidden" title="Figma">
            <img 
              src={figmaLogo} 
              alt="Figma logo" 
              className="w-full h-full object-cover rounded-[15px]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Webflow Logo */}
          <div className="w-13 h-13 sm:w-16 sm:h-16 flex items-center justify-center relative group transition-all duration-300 hover:scale-110 shadow-soft rounded-[15px] overflow-hidden" title="Webflow">
            <img 
              src={webflowLogo} 
              alt="Webflow logo" 
              className="w-full h-full object-cover rounded-[15px]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Microsoft 365 Logo */}
          <div className="w-13 h-13 sm:w-16 sm:h-16 flex items-center justify-center relative group transition-all duration-300 hover:scale-110 shadow-soft rounded-[15px] overflow-hidden" title="Microsoft 365">
            <img 
              src={m365Logo} 
              alt="Microsoft 365 logo" 
              className="w-full h-full object-cover rounded-[15px]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* GitHub Logo */}
          <div className="w-13 h-13 sm:w-16 sm:h-16 flex items-center justify-center relative group transition-all duration-300 hover:scale-110 shadow-soft rounded-[15px] overflow-hidden" title="GitHub">
            <img 
              src={githubLogo} 
              alt="GitHub logo" 
              className="w-full h-full object-cover rounded-[15px]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Notion Logo */}
          <div className="w-13 h-13 sm:w-16 sm:h-16 flex items-center justify-center relative group transition-all duration-300 hover:scale-110 shadow-soft rounded-[15px] overflow-hidden" title="Notion">
            <img 
              src={notionLogo} 
              alt="Notion logo" 
              className="w-full h-full object-cover rounded-[15px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>



      {/* Experiences Section */}
      <div id="experiences-section" className="bg-white border border-secondary-sky/30 shadow-soft rounded-2xl p-5 w-full max-w-full mx-auto">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-secondary-sky/10">
          <Briefcase className="text-primary-navy" size={14} />
          <h2 className="text-xs font-display font-bold text-primary-navy uppercase tracking-wider">Parcours Professionnel</h2>
        </div>

        <div className="relative border-l-2 border-dashed border-secondary-sky/50 pl-4 ml-2 flex flex-col gap-5">
          {experiences.map((exp) => (
            <div id={`exp-${exp.id}`} key={exp.id} className="relative group">
              <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-secondary-sky border border-primary-navy/30 group-hover:bg-accent-gold transition-colors duration-200" />
              
              <div className="flex items-baseline justify-between flex-wrap gap-1 mb-1">
                <h3 className="text-2xs font-display font-bold text-primary-navy">{exp.role}</h3>
                <span className="text-[8px] font-mono font-bold px-1.5 py-0.5 bg-primary-navy text-white rounded-md">
                  {exp.period}
                </span>
              </div>
              <p className="text-[9px] font-mono font-bold text-primary-navy/50 mb-1.5">{exp.company}</p>
              
              <ul className="list-disc list-outside pl-4 space-y-1">
                {exp.description.map((item, index) => (
                  <li key={index} className="text-[10px] text-primary-navy/80 leading-relaxed font-sans">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Formations Section */}
      <div id="formations-section" className="bg-white border border-secondary-sky/30 shadow-soft rounded-2xl p-5 w-full max-w-full mx-auto mb-6">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-secondary-sky/10">
          <GraduationCap className="text-primary-navy" size={14} />
          <h2 className="text-xs font-display font-bold text-primary-navy uppercase tracking-wider">Études & Formations</h2>
        </div>

        <div className="flex flex-col gap-4">
          {formations.map((f) => (
            <div id={`formation-${f.id}`} key={f.id} className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-lg bg-secondary-sky/20 text-primary-navy flex items-center justify-center flex-shrink-0 mt-0.5">
                <GraduationCap size={13} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xs font-display font-bold text-primary-navy leading-tight">{f.degree}</h3>
                <span className="inline-block text-[8px] font-mono font-bold text-primary-navy/60 bg-secondary-sky/20 px-1.5 py-0.5 rounded-md mt-1">{f.year}</span>
                <p className="text-[9px] font-mono font-bold text-primary-navy/40 mt-1">{f.school}</p>
                {f.details && (
                  <p className="text-[10px] text-primary-navy/70 mt-1 leading-relaxed font-sans">
                    {f.details}
                  </p>
                )}
              </div>
            </div>
          ))}
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
                  <Printer size={13} className="text-accent-gold" />
                  <span className="font-display font-bold text-2xs uppercase tracking-wider">Curriculum Vitae — Imen Cheïma CHERNI</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    id="modal-print-btn"
                    onClick={triggerPrint}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white cursor-pointer transition-colors"
                    title="Imprimer"
                  >
                    <Printer size={13} />
                  </button>
                  <button
                    id="modal-close-btn"
                    onClick={() => setIsCVModalOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white cursor-pointer transition-colors"
                  >
                    <X size={13} />
                  </button>
                </div>
              </div>

              {/* CV Body to Scroll/View */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-5 custom-scrollbar bg-white text-black select-text">
                <div id="printable-cv-document" className="bg-white p-2 sm:p-3 text-black font-sans">
                  {/* Top Pills Bar */}
                  <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start mb-4 text-[9px] sm:text-[10px] font-bold">
                    <span className="border border-black rounded-full px-2.5 py-0.5 bg-white">📍 Lyon</span>
                    <span className="border border-black rounded-full px-2.5 py-0.5 bg-white">📞 07 49 98 53 20</span>
                    <span className="border border-black rounded-full px-2.5 py-0.5 bg-white">✉️ chema.cherni@gmail.com</span>
                    <a href="https://www.linkedin.com/in/che%C3%AFma-cherni/" target="_blank" rel="noopener noreferrer" className="border border-black rounded-full px-2.5 py-0.5 bg-white hover:bg-black/5">🔗 Profil LinkedIn</a>
                  </div>

                  {/* Header Title & Photo */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-black font-sans tracking-tight leading-none">Imen, Cheïma</h2>
                      <h1 className="text-2xl sm:text-3xl font-extrabold text-[#4F80E2] font-sans tracking-tight leading-tight -mt-0.5">CHERNI</h1>
                      <div className="mt-2 bg-black text-white px-3 py-1 font-bold text-[10px] sm:text-xs rounded-r-lg inline-block shadow-sm">
                        Assistante en Projet digitaux et numérique
                      </div>
                    </div>
                    <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden border-2 border-black/10 shrink-0 bg-secondary-sky/20 shadow-sm">
                      <img src={cheimaWelcome} alt="Imen Cheïma CHERNI" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <hr className="border-t-2 border-black my-3" />

                  {/* Sub-header / Intro Banner */}
                  <div className="text-[9.5px] sm:text-[10.5px] text-black/90 font-medium leading-snug my-2">
                    Diplômée d'un BAC +3, et en pleine réorientation dans le numérique, je poursuis en <strong>alternance</strong> en <strong>conception pédagogique et e-learning</strong>, en intégrant la formation <strong>Digital Learning</strong> au sein de Le Bahut à Lyon. Une nouvelle aventure commence !
                  </div>

                  <hr className="border-t-2 border-black my-3" />

                  {/* Two Columns Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-3">
                    {/* LEFT COLUMN: EXPÉRIENCES */}
                    <div className="md:col-span-7 space-y-3">
                      <h3 className="text-sm font-extrabold text-[#4F80E2] font-sans uppercase tracking-wider flex items-center gap-1.5">
                        <span className="p-1 bg-[#D97706]/15 rounded text-[#D97706] text-xs">💼</span>
                        EXPÉRIENCES
                      </h3>

                      <div className="space-y-3 text-[9px] sm:text-[10px]">
                        {/* Exp 1 */}
                        <div>
                          <h4 className="font-bold text-[#4F80E2] text-[11px]">◆ LA TOILE</h4>
                          <p className="font-bold text-black text-[10px] -mt-0.5">em lyon | mars - juillet 2026</p>
                          <ul className="list-disc list-inside space-y-0.5 text-black/80 mt-1 pl-1">
                            <li><strong>Projets de groupe</strong>
                              <ul className="list-circle list-inside pl-3 space-y-0.5 font-normal">
                                <li>Réalisation de wireframes, UI/UX Design et prototypage - tests utilisateurs</li>
                                <li>Amélioration continue de l'application</li>
                              </ul>
                            </li>
                            <li><strong>Hackathon</strong> et mise en situation professionnelle sur des cas réels d'entreprise</li>
                          </ul>
                        </div>

                        {/* Exp 2 */}
                        <div>
                          <h4 className="font-bold text-[#4F80E2] text-[11px]">◆ BUSINESS DEVELOPER JUNIOR</h4>
                          <p className="font-bold text-black text-[10px] -mt-0.5">Kalygma | avr - juil 2024 | stage</p>
                          <ul className="list-disc list-inside space-y-0.5 text-black/80 mt-1 pl-1">
                            <li>Création et gestion d'une base de données clients</li>
                            <li>Prospection téléphonique en BtoB (région AURA)</li>
                          </ul>
                        </div>

                        {/* Exp 3 */}
                        <div>
                          <h4 className="font-bold text-[#4F80E2] text-[11px]">◆ SALES ACCOUNT MANAGER</h4>
                          <p className="font-bold text-black text-[10px] -mt-0.5">GoStudent | oct 2023 - jan 2024 | alternance</p>
                          <ul className="list-disc list-inside space-y-0.5 text-black/80 mt-1 pl-1">
                            <li>Gestion de la relation client et CRM</li>
                            <li>Organisation des premières sessions d'essai des élèves-professeurs</li>
                          </ul>
                        </div>

                        {/* Exp 4 */}
                        <div>
                          <h4 className="font-bold text-[#4F80E2] text-[11px]">◆ CONSULTANTE JUNIOR MARKETING & COM</h4>
                          <p className="font-bold text-black text-[10px] -mt-0.5">Institut de langue arabe | juil - sep 2022 | stage</p>
                          <ul className="list-disc list-inside space-y-0.5 text-black/80 mt-1 pl-1">
                            <li>Création de plan de communication et de stratégie marketing</li>
                            <li>Organisation Journée Portes Ouvertes</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: FORMATION, COMPÉTENCES, LANGUES */}
                    <div className="md:col-span-5 space-y-4">
                      {/* FORMATION */}
                      <div>
                        <h3 className="text-sm font-extrabold text-[#4F80E2] font-sans uppercase tracking-wider flex items-center gap-1.5 mb-2">
                          <span className="p-1 bg-[#4F80E2]/15 rounded text-[#4F80E2] text-xs">🎓</span>
                          FORMATION
                        </h3>
                        <div className="space-y-2 text-[9px] sm:text-[10px]">
                          <div>
                            <h4 className="font-bold text-[#4F80E2] text-[10px] leading-tight">◆ CERTIFICAT PROFESSIONNEL CONCEPTION ET DÉVELOPPEMENT WEB</h4>
                            <p className="font-bold text-black text-[9.5px]">La toile - em lyon | 2026</p>
                            <ul className="list-disc list-inside text-black/80 pl-1 mt-0.5">
                              <li>UX/UI DESIGN</li>
                              <li>DÉVELOPPEMENT WEB</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-[#4F80E2] text-[10px] leading-tight">◆ BUT TECHNIQUES DE COMMERCIALISATION</h4>
                            <p className="font-bold text-black text-[9.5px]">IUT Gratte-Ciel - Lyon1 | 2024</p>
                          </div>
                        </div>
                      </div>

                      {/* COMPÉTENCES */}
                      <div>
                        <h3 className="text-sm font-extrabold text-[#4F80E2] font-sans uppercase tracking-wider flex items-center gap-1.5 mb-2">
                          <span className="p-1 bg-slate-200 rounded text-slate-700 text-xs">💻</span>
                          COMPÉTENCES
                        </h3>
                        <ul className="list-disc list-inside text-[9px] sm:text-[10px] space-y-0.5 text-black/90 font-medium pl-1">
                          <li>Langages informatiques : <strong>HTML/CSS/ Javascript</strong></li>
                          <li>Sens de l'autonomie et de l'organisation</li>
                          <li>Travail d'équipe</li>
                          <li><strong>Canva/Figma/Webflow/Notion/Moodle</strong></li>
                          <li>Pédagogie & Créativité</li>
                          <li>Aisance relationnelle - Communication</li>
                          <li>Suite Google & Office 360</li>
                        </ul>
                      </div>

                      {/* LANGUES */}
                      <div>
                        <h3 className="text-sm font-extrabold text-[#4F80E2] font-sans uppercase tracking-wider flex items-center gap-1.5 mb-2">
                          <span className="p-1 bg-pink-100 rounded text-pink-600 text-xs">🎤</span>
                          LANGUES
                        </h3>
                        <div className="text-[9px] sm:text-[10px] font-bold text-black space-y-1">
                          <p>FRANÇAIS | LANGUE MATERNELLE</p>
                          <p>ANGLAIS | B1-B2</p>
                          <p>ITALIEN | B1-B2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  <button
                    id="cv-modal-print-cta"
                    onClick={triggerPrint}
                    className="px-2.5 py-1.5 bg-secondary-sky/40 text-primary-navy text-[10px] font-display font-bold rounded-lg hover:bg-secondary-sky/60 cursor-pointer flex items-center gap-1.5"
                  >
                    <Printer size={11} />
                    Imprimer
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
