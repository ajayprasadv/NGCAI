import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Info, CheckCircle, Link as LinkIcon, ExternalLink, CreditCard, Mail, Globe } from 'lucide-react';
import logoImg from '../assets/iilm-logo.png';
import pressLogo from '../assets/atlantis.png';
import Conflogo from '../assets/conflogo.png';

const slides = [
  {
    title: "Author Guidelines for Proceedings",
    content: [
      "Please follow these instructions carefully while preparing your manuscript.",
      "These guidelines help improve indexing and publication quality.",
    ],
  },
  {
    title: "Introduction & General",
    content: [
      "Use the provided template without modifying margins or layout.",
      "Do not include page numbers, headers, footers, or blank pages.",
      "Use spell check and proofread before submission.",
      "The submitted manuscript is considered final and camera-ready.",
    ],
  },
  {
    title: "Frontmatter - Title",
    content: [
      "Use APA title capitalization style.",
      "Capitalize nouns, verbs, adjectives, and words with four or more letters.",
      "Do not use all caps.",
      "Correct spelling errors before submission.",
      "Subtitles should appear below the title in smaller font.",
    ],
  },
  {
    title: "Authors and Affiliations",
    content: [
      "Use 'first name last name' format.",
      "Mark corresponding author using an asterisk (*).",
      "Provide email address for corresponding author.",
      "Include affiliations with department, institution, city, and country.",
      "Use superscript identifiers for affiliations.",
    ],
  },
  {
    title: "Abstract",
    content: [
      "Provide a complete and correct abstract.",
      "Abstracts are mandatory.",
      "If literature is cited, provide full citation details.",
    ],
  },
  {
    title: "Main Content",
    content: [
      "Provide at least 3 keywords separated by commas.",
      "Use consistent heading numbering.",
      "Avoid skipping heading levels.",
      "Ensure headings and content appear together on the page.",
    ],
  },
  {
    title: "References and Citations",
    content: [
      "Every reference must be cited in the text.",
      "Use a consistent citation style.",
    ],
  },
  {
    title: "Lists, Tables, Figures",
    content: [
      "Use standard list styles.",
      "Place figures and tables near their citations.",
      "All figures and tables must have captions.",
      "Tables must be editable, not screenshots.",
    ],
  },
  {
    title: "Back Matter",
    content: [
      "Include references at the end of the manuscript.",
      "Use consistent formatting.",
      "All references must be in Roman script.",
    ],
  },
  {
    title: "Template (only MS Word format is allowed for this conference)",
    content: [
   <a href="https://assets.ctfassets.net/b4d0t67iwrjs/61D4gQKQaJuqyRIB8i5h8h/0e1b497360ae6c6d0e04fdf5d776a9e2/Word_Template.zip" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">Download Word Template</a>

    ],
  },
];

const AuthorGuidelinesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto space-y-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200"
          >
            <h1 className="text-3xl font-bold text-blue-700 mb-6">
              {slide.title}
            </h1>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
              {slide.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const Cfp = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <img src={logoImg} alt="IILM Logo" className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all" />
            <div className="flex flex-col">
              <img src={Conflogo} alt="Conference Logo" className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all" />
              <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-slate-500">Call For Papers</span>
            </div>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-amber-600 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </nav>

  

      {/* Hero Section */}
      <header className="pt-32 pb-16 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px]"
          />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="flex items-center gap-4 mb-6"><span className="h-[1px] w-12 bg-amber-400"></span><p className="text-xs uppercase tracking-[0.3em] font-bold text-amber-400">NGCAI-2026</p></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Call for Papers</h1>
            <p className="text-lg text-slate-400 max-w-2xl font-light">
              The International Conference on Next-Generation Cybersecurity and Applied Artificial Intelligence (NGCAI-2026) 
              invites original, high-quality research papers that explore the intersection of AI, cybersecurity, and 
              emerging engineering technologies. We welcome submissions from academia, industry, and government 
              organizations worldwide.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="py-16 md:py-24 container mx-auto px-6 md:px-12 space-y-24">
        
      {/* 1. Call for Paper */}
        <section id="cfp-intro">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-amber-100 text-amber-600 rounded-lg"><FileText size={24} /></div>
            <h2 className="text-3xl font-bold">Author Guidelines</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
            <p className="text-lg">
                Everything you need to know about submitting your research to the International Conference on Next-Generation Cybersecurity and Applied Artificial Intelligence.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 border border-slate-200 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-4">Key Themes (not limited to)</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>AI-driven Threat Intelligence</li>
                  <li>Secure IoT and Edge Computing</li>
                  <li>Quantum Cryptography</li>
                  <li>EV and UAV Security Systems</li>
                  <li>Adversarial Machine Learning</li>
                </ul>
              </div>
              <div className="bg-white p-6 border border-slate-200 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-4">Publication</h3>
                <p>
                  Accepted and presented papers will be published in the <strong>Atlantis Highlights in Intelligent Systems</strong> 
                  series (Atlantis Press - part of Springer Nature), subject to meeting quality standards.
                </p>
              </div>
            </div>
          </div>
                    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="p-8 space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="text-emerald-500 shrink-0" size={20} />
                <p><strong>Format:</strong> Papers must be formatted according to the Atlantis Press template (Single-column, A4 size).</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-emerald-500 shrink-0" size={20} />
                <p><strong>Length:</strong> Full papers should be between 6 to 10 pages including figures and references.</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-emerald-500 shrink-0" size={20} />
                <p><strong>Originality:</strong> Submissions must be original and not currently under review by any other conference or journal. Plagiarism check will be mandatory.</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-emerald-500 shrink-0" size={20} />
                <p><strong>Review Process:</strong> All papers will undergo a single-blind peer review process by at least two technical experts.</p>
              </div>
            </div>
            <div className="p-8 bg-slate-50 border-t border-slate-200 flex flex-col md:flex-row items-center gap-6">
              <img src={pressLogo} alt="Atlantis Press" className="h-12 object-contain grayscale opacity-70" />
              <p className="text-sm text-slate-500">
                Papers must adhere to the <strong>Atlantis Press</strong> proceedings <a href="https://www.atlantis-press.com/policies" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">guidelines</a>. Download the <a href="https://assets.ctfassets.net/b4d0t67iwrjs/61D4gQKQaJuqyRIB8i5h8h/0e1b497360ae6c6d0e04fdf5d776a9e2/Word_Template.zip" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">Author Template (MS Word) Pack</a> for detailed formatting instructions.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Submission Guidelines */}
        <section id="guidelines">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg"><Info size={24} /></div>
            <h2 className="text-3xl font-bold">Submission Guidelines</h2>
          </div>
        <AuthorGuidelinesPage />
        </section>

        {/* 3. Submission Link */}
        <section id="submit">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
            <LinkIcon className="mx-auto mb-6 text-amber-400" size={48} />
            <h2 className="text-3xl font-bold mb-4">Ready to Submit?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Please submit your full paper in only <strong>MS Word</strong> format through our Microsoft CMT portal.
            </p>
            <a 
              href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FNGCAI2026" 
              className="inline-flex items-center gap-3 bg-amber-500 text-slate-900 px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-amber-400 transition-all"
            >
              Submit Paper <ExternalLink size={18} />
            </a>
          </div>
        </section>

        {/* 4. Registration Details */}
        <section id="registration">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg"><CreditCard size={24} /></div>
            <h2 className="text-3xl font-bold">Registration Details</h2>
          </div>
            <div className="w-full overflow-x-auto py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">
                Registration and Participation Fees
            </h2>

            <table className="w-full border border-black border-collapse text-left">
                <thead>
                <tr>
                    <th className="border border-black p-4 bg-gray-100"></th>

                    <th className="border border-black p-4 bg-gray-100">
                    Paper Registration Fees (In Rs.)
                    </th>

                    <th className="border border-black p-4 bg-gray-100">
                    Participation Fees Conference (In Rs.)
                    </th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td className="border border-black p-4">
                    Student/ Research Scholar
                    </td>

                    <td className="border border-black p-4">
                    10000/-
                    </td>

                    <td className="border border-black p-4">
                    1000/-
                    </td>
                </tr>

                <tr>
                    <td className="border border-black p-4">
                    Faculty Member
                    </td>

                    <td className="border border-black p-4">
                    12000/-
                    </td>

                    <td className="border border-black p-4">
                    3000/-
                    </td>
                </tr>

                <tr>
                    <td className="border border-black p-4">
                    Corporate Member
                    </td>

                    <td className="border border-black p-4">
                    15000/-
                    </td>

                    <td className="border border-black p-4">
                    5000/-
                    </td>
                </tr>

                <tr>
                    <td className="border border-black p-4">
                    Foreign Nationals
                    </td>

                    <td className="border border-black p-4">
                    150$
                    </td>

                    <td className="border border-black p-4">
                    50$
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </section>

      </main>

      <footer className="bg-slate-950 text-white py-12 border-t border-slate-800 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-slate-400 text-sm">© 2026 IILM University. All rights reserved.</p>
          <Link to="/" className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-amber-400 hover:text-white transition-colors">Return to Conference Home</Link>
        </div>
      </footer>
    </div>
  );
};

export default Cfp;
