import { jsPDF } from "jspdf";

export function generateAndDownloadCVPDF() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const blueColor = [79, 128, 226]; // #4F80E2
  const textBlack = [10, 10, 10];
  const darkGray = [50, 50, 50];

  let y = 12;

  // --- TOP PILLS BAR ---
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.4);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);

  // Pill 1: Lyon
  doc.roundedRect(12, y, 22, 6, 3, 3, "S");
  doc.setTextColor(10, 10, 10);
  doc.text("📍 Lyon", 14, y + 4.2);

  // Pill 2: Phone
  doc.roundedRect(37, y, 35, 6, 3, 3, "S");
  doc.text("📞 07 49 98 53 20", 39, y + 4.2);

  // Pill 3: Email
  doc.roundedRect(75, y, 54, 6, 3, 3, "S");
  doc.text("✉️ chema.cherni@gmail.com", 77, y + 4.2);

  // Pill 4: LinkedIn
  doc.roundedRect(132, y, 36, 6, 3, 3, "S");
  doc.text("🔗 Profil LinkedIn", 134, y + 4.2);

  y += 14;

  // --- HEADER: NAME & TITLE BANNER ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(10, 10, 10);
  doc.text("Imen, Cheïma", 12, y);

  y += 10;
  doc.setFontSize(28);
  doc.setTextColor(blueColor[0], blueColor[1], blueColor[2]);
  doc.text("CHERNI", 12, y);

  y += 4;
  // Black banner
  doc.setFillColor(10, 10, 10);
  doc.roundedRect(12, y, 110, 8, 1, 1, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Assistante en Projet digitaux et numérique", 15, y + 5.5);

  y += 14;

  // Header Divider
  doc.setDrawColor(10, 10, 10);
  doc.setLineWidth(0.6);
  doc.line(12, y, 198, y);

  y += 5;

  // --- SUBHEADER / INTRO TEXT ---
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  const introText =
    "Diplômée d'un BAC +3, et en pleine réorientation dans le numérique, je poursuis en alternance en conception pédagogique et e-learning, en intégrant la formation Digital Learning au sein de Le Bahut à Lyon. Une nouvelle aventure commence !";
  const splitIntro = doc.splitTextToSize(introText, 180);
  doc.text(splitIntro, 15, y);

  y += splitIntro.length * 4.2 + 2;

  // Divider
  doc.line(12, y, 198, y);

  y += 7;

  // --- TWO COLUMNS LAYOUT ---
  // Left Column (x = 12 to 110)
  // Right Column (x = 118 to 198)

  let yLeft = y;
  let yRight = y;

  // ================= LEFT COLUMN: EXPÉRIENCES =================
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(blueColor[0], blueColor[1], blueColor[2]);
  doc.text("💼 EXPÉRIENCES", 12, yLeft);

  yLeft += 6;

  // Exp 1: LA TOILE
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(blueColor[0], blueColor[1], blueColor[2]);
  doc.text("◆ LA TOILE", 12, yLeft);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(textBlack[0], textBlack[1], textBlack[2]);
  doc.text("em lyon | mars - juillet 2026", 12, yLeft + 4);

  yLeft += 8.5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("• Projets de groupe", 14, yLeft);
  yLeft += 3.8;
  doc.text("  - Réalisation de wireframes, UI/UX Design et", 16, yLeft);
  yLeft += 3.8;
  doc.text("    prototypage - tests utilisateurs", 16, yLeft);
  yLeft += 3.8;
  doc.text("  - Amélioration continue de l'application", 16, yLeft);
  yLeft += 3.8;
  doc.text("• Hackathon et mise en situation professionnelle sur", 14, yLeft);
  yLeft += 3.8;
  doc.text("  des cas réels d'entreprise", 14, yLeft);

  yLeft += 6;

  // Exp 2: Kalygma
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(blueColor[0], blueColor[1], blueColor[2]);
  doc.text("◆ BUSINESS DEVELOPER JUNIOR", 12, yLeft);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(textBlack[0], textBlack[1], textBlack[2]);
  doc.text("Kalygma | avr - juil 2024 | stage", 12, yLeft + 4);

  yLeft += 8.5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("• Création et gestion d'une base de données clients", 14, yLeft);
  yLeft += 3.8;
  doc.text("• Prospection téléphonique en BtoB (région AURA)", 14, yLeft);

  yLeft += 6;

  // Exp 3: GoStudent
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(blueColor[0], blueColor[1], blueColor[2]);
  doc.text("◆ SALES ACCOUNT MANAGER", 12, yLeft);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(textBlack[0], textBlack[1], textBlack[2]);
  doc.text("GoStudent | oct 2023 - jan 2024 | alternance", 12, yLeft + 4);

  yLeft += 8.5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("• Gestion de la relation client et CRM", 14, yLeft);
  yLeft += 3.8;
  doc.text("• Organisation des premières sessions d'essai des", 14, yLeft);
  yLeft += 3.8;
  doc.text("  élèves-professeurs", 14, yLeft);

  yLeft += 6;

  // Exp 4: Institut de langue arabe
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(blueColor[0], blueColor[1], blueColor[2]);
  doc.text("◆ CONSULTANTE JUNIOR MARKETING & COM", 12, yLeft);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(textBlack[0], textBlack[1], textBlack[2]);
  doc.text("Institut de langue arabe | juil - sep 2022 | stage", 12, yLeft + 4);

  yLeft += 8.5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("• Création de plan de communication et de", 14, yLeft);
  yLeft += 3.8;
  doc.text("  stratégie marketing", 14, yLeft);
  yLeft += 3.8;
  doc.text("• Organisation Journée Portes Ouvertes", 14, yLeft);

  // ================= RIGHT COLUMN =================
  const colRightX = 118;

  // FORMATION
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(blueColor[0], blueColor[1], blueColor[2]);
  doc.text("🎓 FORMATION", colRightX, yRight);

  yRight += 6;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(blueColor[0], blueColor[1], blueColor[2]);
  doc.text("◆ CERTIFICAT PROFESSIONNEL", colRightX, yRight);
  yRight += 3.8;
  doc.text("  CONCEPTION ET DÉVELOPPEMENT WEB", colRightX, yRight);

  yRight += 4.5;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(textBlack[0], textBlack[1], textBlack[2]);
  doc.text("La toile - em lyon | 2026", colRightX, yRight);

  yRight += 4.5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("• UX/UI DESIGN", colRightX + 2, yRight);
  yRight += 3.8;
  doc.text("• DÉVELOPPEMENT WEB", colRightX + 2, yRight);

  yRight += 6;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(blueColor[0], blueColor[1], blueColor[2]);
  doc.text("◆ BUT TECHNIQUES DE COMMERCIALISATION", colRightX, yRight);

  yRight += 4.5;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(textBlack[0], textBlack[1], textBlack[2]);
  doc.text("IUT Gratte-Ciel - Lyon1 | 2024", colRightX, yRight);

  yRight += 10;

  // COMPÉTENCES
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(blueColor[0], blueColor[1], blueColor[2]);
  doc.text("💻 COMPÉTENCES", colRightX, yRight);

  yRight += 6;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(textBlack[0], textBlack[1], textBlack[2]);

  const skills = [
    "Langages informatiques :",
    "HTML/CSS/ Javascript",
    "Sens de l'autonomie et de l'organisation",
    "Travail d'équipe",
    "Canva/Figma/Webflow/Notion/Moodle",
    "Pédagogie & Créativité",
    "Aisance relationnelle - Communication",
    "Suite Google & Office 360",
  ];

  skills.forEach((skill) => {
    doc.text(`• ${skill}`, colRightX, yRight);
    yRight += 3.8;
  });

  yRight += 6;

  // LANGUES
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(blueColor[0], blueColor[1], blueColor[2]);
  doc.text("🎤 LANGUES", colRightX, yRight);

  yRight += 6;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(textBlack[0], textBlack[1], textBlack[2]);

  doc.text("FRANÇAIS | LANGUE MATERNELLE", colRightX, yRight);
  yRight += 4.2;
  doc.text("ANGLAIS | B1-B2", colRightX, yRight);
  yRight += 4.2;
  doc.text("ITALIEN | B1-B2", colRightX, yRight);

  // Footer
  doc.setFont("helvetica", "italic");
  doc.setFontSize(7.5);
  doc.setTextColor(150, 150, 150);
  doc.text("CV Imen, Cheïma CHERNI — Assistante en Projet digitaux et numérique", 105, 288, { align: "center" });

  doc.save("CV_Imen_Cheima_CHERNI.pdf");
}

