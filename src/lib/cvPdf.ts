import { jsPDF } from "jspdf";
import cheimaWelcome from "../assets/images/regenerated_image_1784849101795.png";

export function generateAndDownloadCVPDF() {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = cheimaWelcome;

  const downloadPDF = () => {
    try {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // A4 dimensions: 210mm x 297mm
      const pdfWidth = 210;
      const pdfHeight = 297;

      const naturalW = img.naturalWidth || img.width || 210;
      const naturalH = img.naturalHeight || img.height || 297;

      const imgWidth = pdfWidth;
      const imgHeight = (naturalH * pdfWidth) / naturalW;

      doc.addImage(img, "PNG", 0, 0, imgWidth, Math.min(imgHeight, pdfHeight));
      doc.save("CV_Imen_Cheima_CHERNI.pdf");
    } catch (e) {
      console.error("PDF generation failed, falling back to direct image download:", e);
      const link = document.createElement("a");
      link.href = cheimaWelcome;
      link.download = "CV_Imen_Cheima_CHERNI.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (img.complete && img.naturalWidth !== 0) {
    downloadPDF();
  } else {
    img.onload = downloadPDF;
    img.onerror = () => {
      const link = document.createElement("a");
      link.href = cheimaWelcome;
      link.download = "CV_Imen_Cheima_CHERNI.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  }
}
