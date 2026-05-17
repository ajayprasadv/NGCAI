import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Info, CheckCircle, Link as LinkIcon, ExternalLink, CreditCard, Mail, Globe } from 'lucide-react';
import logoImg from '../assets/iilm-logo.png';
import pressLogo from '../assets/atlantis.png';

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
            <img src={logoImg} alt="IILM Logo" className="h-10 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="font-sans font-bold text-xl tracking-tighter text-slate-950">
                NGCAI <span className="font-light text-slate-400">2026</span>
              </span>
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
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Author Guidelines</h1>
            <p className="text-lg text-slate-400 max-w-2xl font-light">
              Everything you need to know about submitting your research to NGCAI 2026.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="py-16 md:py-24 container mx-auto px-6 md:px-12 space-y-24">
        
        {/* 1. Call for Paper */}
        <section id="cfp-intro">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-amber-100 text-amber-600 rounded-lg"><FileText size={24} /></div>
            <h2 className="text-3xl font-bold">Call for Papers</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
            <p className="text-lg">
              The International Conference on Next-Generation Cybersecurity and Applied Artificial Intelligence (NGCAI-2026) 
              invites original, high-quality research papers that explore the intersection of AI, cybersecurity, and 
              emerging engineering technologies. We welcome submissions from academia, industry, and government 
              organizations worldwide.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 border border-slate-200 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-4">Key Themes</h3>
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
        </section>

        {/* 2. Submission Guidelines */}
        <section id="guidelines">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg"><Info size={24} /></div>
            <h2 className="text-3xl font-bold">Submission Guidelines</h2>
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
                Papers must adhere to the <strong>Atlantis Press</strong> proceedings guidelines. Download the <a href="https://www.atlantis-press.com/proceedings/series/ahis/instructions-for-authors" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">Author Template Pack</a> for detailed formatting instructions.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Submission Link */}
        <section id="submit">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
            <LinkIcon className="mx-auto mb-6 text-amber-400" size={48} />
            <h2 className="text-3xl font-bold mb-4">Ready to Submit?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Please submit your full paper in PDF format through our Microsoft CMT portal.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-3 bg-amber-500 text-slate-900 px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-amber-400 transition-all"
            >
              Go to Submission Portal <ExternalLink size={18} />
            </a>
          </div>
        </section>

        {/* 4. Registration Details */}
        <section id="registration">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg"><CreditCard size={24} /></div>
            <h2 className="text-3xl font-bold">Registration Details</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { type: "Academician", price: "₹ 6000 / $ 150" },
              { type: "Industry Professional", price: "₹ 8000 / $ 200" },
              { type: "Student / Scholar", price: "₹ 4000 / $ 100" }
            ].map((tier, i) => (
              <div key={i} className="bg-white p-8 border border-slate-200 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-4">{tier.type}</h3>
                <p className="text-3xl font-bold text-slate-900 mb-6">{tier.price}</p>
                <ul className="text-sm text-slate-500 space-y-2 mb-8 text-left">
                  <li>• Conference Kit</li>
                  <li>• Presentation Certificate</li>
                  <li>• Publication Fee</li>
                  <li>• Lunch & Refreshments</li>
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-500 italic text-center">
            * Early bird discounts and group registration benefits are available. Contact the finance chair for details.
          </p>
        </section>

      </main>

      <footer className="bg-slate-950 text-white py-12 border-t border-slate-800 text-center">
        <p className="text-slate-400 text-sm">© 2026 IILM University. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Cfp;
