import fs from 'fs';
import path from 'path';

// Generate a valid PDF-1.4 file for Raja Ganapathi M's resume
function generateResumePDF() {
  const contentText = `Raja Ganapathi M
AI & Frontend Developer | Computer Science Engineer
Email: raja2005kcp@gmail.com | Location: Tamil Nadu, India
Education: B.E. Computer Science & Engineering (2022 - 2026) - CGPA: 8.2/10

TECHNICAL SKILLS:
• Programming: Python, Java, JavaScript, Database Queries (SQL)
• Frontend Development: React.js, HTML5, CSS3, JavaScript (ES6+), Responsive Web Design
• Generative AI & ML: Machine Learning, NLP, Prompt Engineering, RAG Systems, Hugging Face
• Tools & Frameworks: Git, Vite, Spring Boot, REST APIs

EXPERIENCE & INTERNSHIPS:
• Frontend & AI Developer Intern - Tech Solutions (2024)
  - Built responsive React web applications and integrated Generative AI features.
  - Implemented interactive UI components, state management, and optimized asset loading.

PROJECTS:
• Intelligent AI & Frontend Portfolio Website
• RAG-based Document Search & Q&A Assistant (Python, NLP, React)
• E-Learning Interactive Course Portal (React, JavaScript, CSS3)

CERTIFICATIONS:
• Generative AI Fundamentals & Prompt Engineering
• Frontend Development with React & Modern JavaScript
• Machine Learning Specialization
`;

  // Standard PDF 1.4 template with simple text streams
  const pdfString = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj

2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj

3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /Resources <<
    /Font <<
      /F1 <<
        /Type /Font
        /Subtype /Type1
        /BaseFont /Helvetica-Bold
      >>
      /F2 <<
        /Type /Font
        /Subtype /Type1
        /BaseFont /Helvetica
      >>
    >>
  >>
  /MediaBox [0 0 612 792]
  /Contents 4 0 R
>>
endobj

4 0 obj
<< /Length 1250 >>
stream
BT
/F1 22 Tf
50 740 Td
(RAJA GANAPATHI M) Tj
/F2 12 Tf
0 -25 Td
(AI & Frontend Developer | B.E. Computer Science & Engineering) Tj
0 -18 Td
(Email: raja2005kcp@gmail.com  |  Location: Tamil Nadu, India  |  CGPA: 8.2/10) Tj
0 -30 Td
/F1 14 Tf
(PROFESSIONAL SUMMARY) Tj
0 -18 Td
/F2 11 Tf
(Motivated Computer Science Engineering student specializing in Frontend Development) Tj
0 -15 Td
(and Generative AI. Skilled in React, JavaScript, Python, UI/UX design, and AI integration.) Tj
0 -30 Td
/F1 14 Tf
(TECHNICAL SKILLS) Tj
0 -18 Td
/F2 11 Tf
(- Programming: Python, Java, JavaScript, Database Queries) Tj
0 -16 Td
(- Frontend: React.js, HTML5, CSS3, Modern JavaScript \(ES6+\), Responsive Design) Tj
0 -16 Td
(- AI & ML: Machine Learning, NLP, Prompt Engineering, RAG Systems, Hugging Face) Tj
0 -16 Td
(- Core & Tools: REST APIs, Git, Spring Boot, Web Performance Optimization) Tj
0 -30 Td
/F1 14 Tf
(PROJECTS & EXPERIENCE) Tj
0 -18 Td
/F1 12 Tf
(Frontend & AI Web Developer Intern) Tj
0 -15 Td
/F2 11 Tf
(- Designed and built responsive web applications with React and Generative AI features.) Tj
0 -15 Td
(- Implemented modern UI/UX components and streamlined state management.) Tj
0 -20 Td
/F1 12 Tf
(Personal & Academic Projects) Tj
0 -15 Td
/F2 11 Tf
(- Portfolio Website: High-performance React portfolio with modern CSS and animations.) Tj
0 -15 Td
(- AI RAG Assistant: Python & NLP document search engine with interactive web interface.) Tj
0 -30 Td
/F1 14 Tf
(EDUCATION & CERTIFICATIONS) Tj
0 -18 Td
/F2 11 Tf
(- B.E. Computer Science & Engineering | RVS School of Engineering \(2022 - 2026\)) Tj
0 -16 Td
(- Generative AI & Prompt Engineering Specialist Certification) Tj
0 -16 Td
(- Modern Frontend Web Development Certification) Tj
ET
endstream
endobj

xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000350 00000 n 
trailer
<< /Size 5 /Root 1 0 R >>
startxref
1650
%%EOF
`;

  const pubDir = path.resolve('public');
  if (!fs.existsSync(pubDir)) {
    fs.mkdirSync(pubDir, { recursive: true });
  }

  fs.writeFileSync(path.join(pubDir, 'resume.pdf'), pdfString);
  fs.writeFileSync(path.join(pubDir, 'Raja_Ganapathi_M_Resume.pdf'), pdfString);
  console.log('Successfully generated resume.pdf and Raja_Ganapathi_M_Resume.pdf in public/');
}

generateResumePDF();
