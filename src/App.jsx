import React, { useState, useEffect, useMemo } from 'react';
import {
  Calendar, MapPin, ArrowRight, Users, Clock, Download, ShieldCheck, Mail, Globe, Menu, X, ChevronRight, BookOpen, Award, Search, ExternalLink, Plus, Linkedin, Twitter, FileText, Briefcase, GraduationCap, Microscope, ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

// Assets
import logoImg from './assets/iilm-logo.png';
import heroImg from './assets/iilm-hero.png';
import campusImg from './assets/iilm-campus1.png';
import confLogo from './assets/conflogo.png';
import workshopImg from './assets/iilm-workshop.png';
import workflowImg from './assets/submission-workflow.jpg';
import pressLogo from './assets/atlantis.png';

const ICADC_CONTENT = {
  deadlines: [
    { label: "Conference Launched Date", date: "15 May 2026", status: "Upcoming", color: "text-indigo-500", bg: "bg-indigo-50" },
    { label: "Submission Deadline", date: "30 July 2026", status: "Open", color: "text-rose-600", bg: "bg-rose-50" },
    { label: "Paper Acceptance Decision and Notification", date: "30 August 2026", status: "Upcoming", color: "text-indigo-500", bg: "bg-indigo-50" },
    { label: "Camera-Ready Paper Submission", date: "30 October 2026", status: "Pending", color: "text-indigo-500", bg: "bg-indigo-50" },
    { label: "Registration Deadline", date: "30 October 2026", status: "Pending", color: "text-indigo-500", bg: "bg-indigo-50" },
    { label: "Conference Date", date: "Nov 20-21, 2026", status: "Upcoming", color: "text-indigo-500", bg: "bg-indigo-50" }
  ],

  tracks: [
    { id: 1, category: "Track 1", title: "AI/ML and Emerging Technologies in Cybersecurity", topics: ["AI/ML for threat detection and prevention", "Adversarial machine learning", "Zero Trust architectures and security automation", "AI-powered surveillance and anomaly detection", "AI for strategic defense planning"] },
    { id: 2, category: "Track 2", title: "Network and Infrastructure Security", topics: ["Secure network protocols and architectures", "Intrusion detection and prevention systems", "Cloud, edge, and IoT security", "5G/6G network security"] },
    { id: 3, category: "Track 3", title: "Quantum Computing and Modern Cryptography", topics: ["Quantum computing and post-quantum cryptography", "Cryptography and cryptanalysis", "Quantum cryptography and secure communications", "Quantum computing for optimization problems"] },
    { id: 4, category: "Track 4", title: "Emerging Technologies, Semiconductor/IoT/Communication", topics: ["6G Vision and Technologies", "Massive MIMO", "Energy Efficiency and Green Communications", "5G for Internet of Things (IoT)", "AI-Enabled Networking", "Ultra-Reliable Low-Latency Communications (URLLC)"] },
    { id: 5, category: "Track 5", title: "Electrical Vehicle and UAV Technologies", topics: ["VLSI","Semiconductor Technologies","Unmanned Aircraft Vehicles (UAV) and Systems", "Convergence of Drones and Artificial Intelligence", "Cybersecurity, Safety, and Resilience of Unmanned Systems", "Electric Vehicles", "Smart Grid and Charging Infrastructure", "V2V and V2I Communication", "Green Manufacturing", "EV standards: Policy, Education & Market", "Autonomous and Intelligent Robotic Vehicles"] }
  ],
  workshops: [
    { title: "Hands-on TensorFlow for Building AI Intrusion Detection Systems", desc: "A practical deep dive into building production-ready IDS using the latest TensorFlow frameworks.", seats: 24 },
    { title: "PyTorch Implementation of Adversarial Robustness Training", desc: "Learn to defend your models against sophisticated adversarial attacks using PyTorch.", seats: 18 },
    { title: "Practical Federated Learning for Collaborative Threat Detection", desc: "Collaboratively train models without sharing sensitive raw data.", seats: 30 }
  ],
  careers: [
    { role: "AI Security Engineer", icon: <ShieldCheck size={20} /> },
    { role: "Cybersecurity Systems Engineer", icon: <Globe size={20} /> },
    { role: "Network Security Engineer", icon: <Briefcase size={20} /> },
    { role: "Cryptographic Systems Engineer", icon: <Award size={20} /> },
    { role: "AI-driven Threat Intelligence Engineer", icon: <Microscope size={20} /> },
    { role: "Cybersecurity Research Scientist", icon: <FileText size={20} /> }
  ]
};

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const SectionHeader = ({ title, subtitle, kicker, align = "left", light = false }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    className={`mb-24 ${align === "center" ? "text-center mx-auto" : ""} max-w-4xl relative z-10`}
  >
    {kicker && (
      <div className={`flex items-center gap-4 mb-6 ${align === "center" ? "justify-center" : ""}`}>
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ duration: 1.2, ease: 'circOut' }}
          className={`h-[3px] ${light ? "bg-rose-400" : "bg-rose-500"}`}
        ></motion.span>
        <p className={`text-xs uppercase tracking-[0.3em] font-black ${light ? "text-rose-400" : "text-rose-600"}`}>{kicker}</p>
      </div>
    )}
    <h2 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight ${light ? "text-white" : "text-slate-900"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl font-light leading-relaxed ${light ? "text-slate-400" : "text-slate-500"} ${align === "center" ? "mx-auto" : ""}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

const NavItem = ({ href, label, scrolled }) => (
  <a
    href={href}
    className={`relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group
      ${scrolled ? 'text-slate-600 hover:text-slate-950' : 'text-slate-300 hover:text-white'}`}
  >
    {label}
    <span className={`absolute -bottom-2 left-0 w-full h-[1px] ${scrolled ? 'bg-slate-950' : 'bg-white'} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}></span>
  </a>
);

const CountdownTimer = () => {
  // Target date: November 20, 2026
  const targetDate = useMemo(() => new Date("2026-11-20T00:00:00"), []);

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap gap-6 py-6 w-fit">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold text-slate-900">
            {value.toString().padStart(2, '0')}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-2 font-bold">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effects
  const yHero = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredTracks = useMemo(() => {
    return (ICADC_CONTENT.tracks || []).filter(t =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.topics.some(tp => tp.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-amber-500 selection:text-white overflow-x-hidden">

      {/* --- TOAST NOTIFICATION --- */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] bg-slate-900 text-white px-8 py-4 rounded-sm shadow-2xl flex items-center gap-4"
          >
            <div className="p-2 bg-emerald-500 rounded-full text-white">
              <Clock size={16} />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest">Coming Soon</p>
              <p className="text-xs text-slate-400">Community features are launching next week.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- REGISTRATION MODAL --- */}
      <AnimatePresence>
        {showRegisterModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setShowRegisterModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-lg rounded-lg shadow-2xl relative flex flex-col overflow-hidden"
            >
              <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-emerald-600 mb-2">NGCAI-2026</p>
                  <h2 className="text-2xl font-bold text-slate-900">Secure Your Spot</h2>
                </div>
                <button
                  onClick={() => setShowAboutModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-slate-500" />
                </button>
              </div>

              <div className="p-8 space-y-6">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowRegisterModal(false); setShowToast(true); }}>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:border-amber-500 outline-none transition-colors rounded-lg" placeholder="Dr. Jane Doe" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:border-amber-500 outline-none transition-colors rounded-lg" placeholder="jane@university.edu" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Affiliation</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:border-amber-500 outline-none transition-colors rounded-lg" placeholder="Department of Computer Science" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Registration Type</label>
                    <select className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:border-amber-500 outline-none transition-colors rounded-lg">
                      <option>Academic Delegate</option>
                      <option>Industry Professional</option>
                      <option>Student / Research Scholar</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full bg-amber-500 text-slate-900 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-400 transition-colors shadow-lg rounded-lg">
                      Proceed to Payment
                    </button>
              <p className="text-xs text-slate-400">Secure payment powered by Stripe. Early bird rates apply.</p>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- DETAILED ABOUT MODAL --- */}
      <AnimatePresence>
        {showAboutModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setShowAboutModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl relative flex flex-col"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white z-10 p-6 md:p-8 border-b border-slate-100 flex justify-between items-center bg-white/95 backdrop-blur-sm">
                <div>
                  <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] text-emerald-600 mb-1 md:mb-2">NGCAI-2026</p>
                  <h2 className="text-xl md:text-3xl font-bold text-slate-900">Conference Overview</h2>
                </div>
                <button
                  onClick={() => setShowAboutModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-slate-500" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-12 space-y-8 md:space-y-10 text-slate-600 leading-relaxed text-base md:text-lg">
                <section>
                  <p className="first-letter:text-4xl md:first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-2 md:first-letter:mr-3 first-letter:float-left">
                    The International Conference on Next-Generation Cybersecurity and Applied Artificial Intelligence (NGCAI) serves as a premier global platform dedicated to advancing engineering-driven innovations and AI-powered solutions in cybersecurity. It brings together researchers, engineers, academicians, industry professionals, policymakers, and innovators to explore cutting-edge developments at the convergence of Artificial Intelligence, Cybersecurity Engineering, and Intelligent Systems Design.
In an era defined by escalating cyber threats, rapid digital transformation, and the proliferation of complex intelligent infrastructures, NGCAI emphasizes the engineering of resilient, scalable, and adaptive security architectures. The conference highlights the critical role of AI-enabled engineering approaches in designing proactive, automated, and self-learning defense mechanisms.
                  </p>
                  <p className="mt-4">
                    NGCAI promotes in-depth discussions on the application of machine learning algorithms, deep neural networks, generative AI models, and hybrid intelligent systems to engineer solutions capable of predicting, detecting, mitigating, and recovering from sophisticated cyberattacks across critical infrastructures. Special attention is given to secure system design, AI model robustness, adversarial resilience, and real-time threat engineering.
                  </p>
                </section>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <MapPin size={20} className="text-emerald-600" /> Host Institution
                    </h3>
                    <p className="text-base text-slate-500">
                      The conference will be hosted by <strong className="text-slate-900">IILM University, Greater Noida</strong>, established under the Uttar Pradesh Private University (Amendment) Act 2022. As a young and forward-looking institution, the university is committed to nurturing engineering excellence, technological innovation, and AI-driven research ecosystems.
Situated in the dynamic educational hub of Greater Noida, IILM University promotes hands-on engineering practices, interdisciplinary learning, and strong industry collaboration. The institution is actively building capabilities in AI engineering, cybersecurity infrastructure development, and advanced computing systems, positioning itself as a center for next-generation technology education and research.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <Users size={20} className="text-blue-600" /> Primary Audience
                    </h3>
                    <p className="text-base text-slate-500">
                      The conference equips participants with the knowledge and skills required for emerging engineering and AI-focused cybersecurity roles, including:
                    </p>
                    <ul className="list-disc list-inside text-base text-slate-500 mt-2">
                      <li>Artificial Intelligence and Engineering</li>
                      <li>Computer Science and Engineering</li>
                      <li>Security aspects in Electrical Engineering</li>
                      <li>Information Security and IoT Systems</li>
                      <li>Robotics </li>
                      <li> Network Engineering </li>
                    </ul>
                    <p className="text-base text-slate-500 mt-4">
                      The proceedings provide a strong foundation in engineering-centric approaches to integrating AI with cybersecurity systems, preparing participants for real-world implementation challenges.
                    </p>
                  </section>
                </div>

                <div className="bg-slate-50 p-6 md:p-8 rounded-sm border-l-4 border-emerald-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Career Pathways</h3>
                  <p className="text-base text-slate-500 mb-6">
                    The conference equips participants with the knowledge and skills required for emerging engineering and AI-focused cybersecurity roles, including:
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm font-bold uppercase tracking-wider text-slate-700">
                    {["AI Security Engineer", "Cybersecurity Systems Engineer", "Network Security Engineer", "Cryptographic Systems Engineer", "AI-driven Threat Intelligence Engineer", "Cybersecurity Research Scientist","AI Security Analyst", "Network Security Engineer", "Cybersecurity Consultant", "Cryptographer", "AI-driven Threat Intelligence Specialist", "Cybersecurity Researcher"].map(role => (
                      <span key={role} className="bg-white border border-slate-200 px-3 py-1 rounded-full">{role}</span>
                    ))}
                  </div>
                  <p className="text-base text-slate-500 mt-6">
                    By integrating core engineering principles with advanced AI methodologies, NGCAI aims to empower the next generation of engineers and technologists to design and implement intelligent, secure, and resilient digital ecosystems capable of addressing evolving cyber threats.
                  </p>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-8 border-t border-slate-100 bg-slate-50 flex justify-end">
                <button
                  onClick={() => setShowAboutModal(false)}
                  className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-emerald-600 transition-colors"
                >
                  Close Overview
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- NAVIGATION --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white border-b border-slate-200 py-3 shadow-lg' : 'bg-white/95 backdrop-blur-sm py-4 border-b border-slate-100'}`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-4 group">
              {/* IMAGE 1: LOGO IN NAVBAR */}
              <img src={logoImg} alt="IILM Logo" className="h-20 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all" />
              <div className="flex flex-col">
                <img src={confLogo} alt="conference logo" className="h-10 w-auto object-contain" />
                <img src={pressLogo} alt="press logo" className="h-10 w-auto object-contain" />
                
              </div>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <NavItem href="#about" label="About" scrolled={true} />
            <NavItem href="#expectations" label="Tracks" scrolled={true} />
            <NavItem href="#milestones" label="Dates" scrolled={true} />
            {/* <NavItem href="#workshops" label="Workshops" scrolled={true} /> */}
            <Link
              to="/cfp"
              className="relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950"
            >
              CFP
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
            {/* <NavItem href="#advisory" label="Advisory" scrolled={true} /> */}
          {/* <NavItem href="#editors" label="Editors" scrolled={true} /> */}


            <Link
              to="/community"
              className="relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950"
            >
              Committee
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
              <a
                href="/cmt-acknowledgment.html"
                className="relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950"
              >
                CMT Acknowledgment
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowRegisterModal(true)}
              className="px-8 py-3 text-[10px] font-bold uppercase tracking-[0.25em] transition-all shadow-lg bg-slate-950 text-white shadow-slate-900/10 hover:bg-emerald-600"
            >
              Register Now
            </motion.button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            {/* Sticky Mobile Register Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowRegisterModal(true)}
              className="px-4 py-2 text-[9px] font-bold uppercase tracking-widest rounded-sm bg-slate-950 text-white shadow-md"
            >
              Register
            </motion.button>
            <button className="text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Second Row - New Menu Items (Desktop Only) */}
        <div className="hidden lg:flex justify-center items-center gap-8 border-t border-slate-200/30 py-3 px-6 md:px-12">
          {/* <NavItem href="#advisory" label="Advisory" scrolled={true} />
          <NavItem href="#cfp" label="CFP" scrolled={true} />
          <NavItem href="#editors" label="Editors" scrolled={true} /> */}
        </div>
      </motion.nav>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
          >
            {/* {['About', 'Tracks', 'Dates', 'Workshops'].map(item =>...... removed workshops */}
            {['About', 'Tracks', 'Dates'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold text-slate-900 hover:text-emerald-600 transition-all">
                {item}
              </a>
            ))}
            <Link
              to="/cfp"
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-bold text-slate-900 hover:text-emerald-600 transition-all"
            >
              CFP
            </Link>
            <Link
              to="/community"
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-bold text-slate-900 hover:text-emerald-600 transition-all"
            >
              Committee
            </Link>
            <a
              href="/cmt-acknowledgment.html"
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-bold text-slate-900 hover:text-emerald-600 transition-all"
            >
              CMT Acknowledgment
            </a>
            <button
              onClick={() => { setIsMenuOpen(false); setShowRegisterModal(true); }}
              className="mt-8 bg-slate-950 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest"
            >
              Register
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <header className="relative min-h-[100vh] flex items-center pt-32 md:pt-24 pb-12 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
        {/* BACKGROUND: Subtle Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.08]"
          style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* BACKGROUND: Abstract Floating Shapes (Soft & Ethereal) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] border border-amber-400/10 rounded-full"/>
          <div className="absolute top-[10%] -right-[5%] w-[600px] h-[600px] border border-amber-300/5 rounded-full"/>
          <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-r from-amber-500/10 to-amber-400/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-t from-amber-600/5 to-amber-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* HERO CONTENT LEFT */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-8 space-y-5 md:space-y-7"
            >
              <br />
              <br />
              <br />
       
              {/* Badge */}
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2 bg-white rounded-full shadow-sm border border-slate-100">
                <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-slate-500">
                  Accepting Papers for 2026
                  <a 
                                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FNGCAI2026" 
                                className="inline-flex items-center gap-3 bg-amber-200 text-slate-900 px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-amber-100 transition-all"
                              >
                                Submit Paper <ExternalLink size={18} />
                  </a>
                  
                </span>
              </motion.div>

              {/* Headline */}
              <div className="relative">
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1] md:leading-[0.95] tracking-tighter"
                >
                  <span className="block text-xl md:text-3xl font-normal text-amber-300 mb-2 md:mb-4 tracking-normal">International Conference on</span>
                  Next Generation Cybersecurity & Applied AI 
                    <br />
                    <span className="text-[22px] uppercase font-bold tracking-[0.2em] text-amber-200">
                    Nov 20-21, 2026
                    </span>
                  
                  <span className="relative inline-block">
                    
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 4, duration: 1.5, ease: "circOut" }}
                      className="absolute bottom-1 md:bottom-2 left-0 h-2 md:h-4 bg-amber-400/30 -z-10 skew-x-12"
                    />
                  </span>
                </motion.h1>
              </div>

              {/* Scrolling Deadlines Ticker */}
              <motion.div variants={fadeInUp} className="w-full overflow-hidden bg-amber-500/10 border-y border-amber-400/20 py-2">
                <motion.div
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                  className="flex gap-12 whitespace-nowrap"
                >
                  {[...ICADC_CONTENT.deadlines, ...ICADC_CONTENT.deadlines, ...ICADC_CONTENT.deadlines,...ICADC_CONTENT.deadlines, ...ICADC_CONTENT.deadlines, ...ICADC_CONTENT.deadlines].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">{item.label}:</span>
                      <span className="text-[10px] font-bold text-amber-100">{item.date}</span>
                      <span className="text-amber-300 ml-4">/</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Description */}
              <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-amber-100 font-normal max-w-2xl leading-relaxed border-l-4 border-amber-400 pl-4 md:pl-6">
                Where Artificial Intelligence converges with Digital Defense, Next-Generation
Communication, and Electric Vehicle Technology to shape the future of secure,
intelligent, and sustainable systems. Join visionary experts and innovators in
redefining the architecture of trust and technological advancement.
              </motion.p>

              {/* Mobile Date Banner - Hidden on large screens where cards are visible */}
              <motion.div variants={fadeInUp} className="lg:hidden flex items-center gap-4 py-3 px-4 bg-slate-800/50 backdrop-blur-sm border border-amber-400/30 rounded-lg shadow-sm">
                <Calendar size={18} className="text-amber-400" />
                <div>
                  <p className="text-sm font-bold text-amber-100">Oct 09-10, 2026</p>
                  <p className="text-xs text-amber-300/70">IILM University, Greater Noida</p>
                </div>
              </motion.div>

              {/* Timer & CTAs */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-8">
                <CountdownTimer />

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/cfp"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 bg-amber-200 text-slate-900 px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-amber-100 transition-all"
                  >
                    Submit Paper <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#dbeafe" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('expectations')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-3 bg-amber-200 text-slate-900 px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-amber-100 transition-all"
                  >
                    View Tracks
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* HERO CONTENT RIGHT (Cards) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="lg:col-span-4 hidden lg:flex flex-col gap-6 relative"
            >
              {/* Decorative line connecting cards */}
              <div className="absolute left-8 top-10 bottom-10 w-[1px] bg-gradient-to-b from-slate-200 via-emerald-200 to-slate-200"></div>

              {[                { label: "Host", val: "IILM University", sub: "Greater Noida", icon: <MapPin size={24} className="text-amber-400" /> },
                { label: "Proceedings", val: "Coming Soon", sub: "To be announced", icon: <BookOpen size={24} className="text-amber-300" /> },
                { label: "Date", val: "Nov 20-21", sub: "2026 Hybrid", icon: <Clock size={24} className="text-amber-200" /> }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: -10, backgroundColor: "#ffffff" }}
                  className="relative p-6 ml-8 bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-lg group cursor-pointer transition-all"
                >
                  <div className="absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-800 border-2 border-amber-400 rounded-full group-hover:border-amber-300 transition-colors z-10 shadow-sm"></div>

                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-amber-300 mb-1 group-hover:text-amber-400 transition-colors">{stat.label}</p>
                      <h3 className="font-bold text-2xl text-white leading-tight">{stat.val}</h3>
                      <p className="text-sm text-amber-100/70 mt-1 font-light">{stat.sub}</p>
                    </div>
                    <div className="p-3 bg-amber-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100 duration-300">
                      {stat.icon}
                    </div>
                  </div>
                </motion.div>
              ))}


            </motion.div>
          </div>
        </div>
      </header>

      {/* --- STATS TICKER --- */}
      <div className="border-y border-slate-700 bg-slate-800 py-8 overflow-hidden relative z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <React.Fragment key={i}>
              <span className="text-4xl text-amber-400/30 mx-8">✦</span>
              <span className="text-xl font-bold tracking-widest uppercase text-white">Advancing Secure Intelligence</span>
              <span className="text-4xl text-amber-400/30 mx-8">✦</span>
              <span className="text-xl font-bold tracking-widest uppercase text-amber-200">NIST Framework Compliant</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* --- ABOUT --- */}
      <section id="about" className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader
            kicker="The Mission"
            title="Bridging AI & Engineering for a Secure Future"
            subtitle="As intelligent technologies reshape connectivity, mobility, and security, the future demands adaptive, resilient, and innovation-driven solutions."
          />

          <div className="grid lg:grid-cols-12 gap-12 mt-20">
            {/* Text Content - Spans 7 cols */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="lg:col-span-12 grid lg:grid-cols-12 gap-12 items-start"
            >
              {/* Left Column: Sticky Image */}
              <div className="lg:col-span-5 relative h-full">
                <div className="sticky top-24 space-y-8">
                  <div className="relative group rounded-sm overflow-hidden h-[500px] shadow-2xl">
                    <img src={campusImg} alt="IILM Campus Life" className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-all duration-1000 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <span className="block w-12 h-1 bg-amber-500 mb-4"></span>
                      <p className="text-white font-bold text-3xl leading-tight">Where Innovation <br /><span className="text-amber-400">Meets Tradition</span></p>
                    </div>
                  </div>
                  {/* CTA Box tucked under image for balance */}
                  <div className="bg-slate-900 text-white p-8 rounded-lg shadow-xl border-t-4 border-amber-500">
                    <BookOpen className="mb-4 text-amber-400" size={24} />
                    <h3 className="text-lg font-bold mb-2">Select accepted and peer-reviewed papers will be published in Atlantis Highlights in Intelligent Systems series of Atlantis Press - a part of Springer Nature.
                      <br/>
                        <ArrowRight size={14} /> <a href="http://atlantis-press.com/proceedings/all" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 hover:text-white transition-colors">View Listing</a>
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">

                    </p>
                    <a href="https://www.atlantis-press.com/policies" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 hover:text-white transition-colors">
                      View Guidelines <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:col-span-7 space-y-12 lg:pl-8">
                <div>
                  <h3 className="text-4xl font-bold text-slate-950 mb-6 leading-tight">
                    About the <br /> <span className="text-slate-400">Conference</span>
                  </h3>
                  <p className="text-lg leading-relaxed text-slate-600">
                    <strong>International Conference on Next-Generation Cybersecurity and Applied Artificial Intelligence (NGCAI)</strong> serves as a premier global forum connecting visionaries from academia and industry.
                  </p>
                  <p>
                    {/* By converging <span className="text-emerald-700 font-medium">Artificial Intelligence </span> and <span className="text-slate-900 font-medium">Engineering</span> The conference aims to address the critical need for adaptive defenses in an era of sophisticated, AI-generated cyber threats. As intelligent technologies reshape connectivity, mobility, and security, the future demands adaptive, resilient, and innovation-driven solutions. */}
                  </p>
                  <p className="mt-4 text-slate-500 leading-relaxed">The International Conference on Next-Generation Cybersecurity and Applied Artificial Intelligence - 2026 (NGCAI-2026) is a
distinguished global platform that unites academicians, researchers, industry leaders, policymakers, and innovators to explore
transformative advancements in Artificial Intelligence, Digital Defense, Next-Generation Communication, and Electric Vehicle
Technology. The conference focuses on building secure, intelligent, connected, and sustainable technological ecosystems for the
future.

In an era marked by rapid digital transformation, intelligent mobility, hyper-connectivity, and evolving cyber threats, NGCAI
emphasizes the growing need for adaptive, resilient, and AI-driven solutions capable of safeguarding modern digital infrastructures.
The conference promotes meaningful dialogue on leveraging machine learning, deep neural networks, generative AI, hybrid
intelligence, and advanced communication technologies to predict, detect, mitigate, and recover from sophisticated cyberattacks
while enabling secure innovation across critical sectors.

NGCAI-2026 also highlights emerging paradigms in next-generation communication networks and smart electric vehicle ecosystems,
fostering interdisciplinary collaboration to redefine the architecture of trust, connectivity, and sustainable technological
advancement.</p>

                  <button
                    onClick={() => setShowAboutModal(true)}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600 hover:text-amber-800 transition-colors group"
                  >
                    Read Full Overview <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-8 rounded-sm border border-slate-100 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all group">
                    <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <MapPin size={20} />
                    </div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-slate-900 mb-2">Host Institution</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      <strong>IILM University, Greater Noida.</strong> A hub for experiential learning and advanced research systems.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-sm border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all group">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Users size={20} />
                    </div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-slate-900 mb-2">Our Attendees</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Engineers, Engineering Students, Researchers, Computer Science Students, and InfoSec Professionals ready to lead the next wave of innovation.
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Career Pathways</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(ICADC_CONTENT.careers || []).map((c, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-amber-50/50 hover:bg-amber-100 border border-transparent hover:border-amber-300 transition-all cursor-default">
                        <span className="text-amber-600">{c.icon}</span>
                        <span className="text-xs font-bold text-slate-700">{c.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MILESTONES --- */}
      <section id="milestones" className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <SectionHeader
                kicker="Important Dates"
                title="Timelines & Deadlines"
                subtitle="Strict adherence to these deadlines is required for inclusion in the 2026 proceedings."
              />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {(ICADC_CONTENT.deadlines || []).map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ y: -5, borderColor: "#cbd5e1" }}
                    className={`p-10 border border-slate-100 rounded-lg hover:shadow-lg transition-all group bg-white`}
                  >
                    <div className="flex justify-between items-start mb-8">
                      <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest ${item.status === 'Open' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'}`}>
                        {item.status}
                      </span>
                      <Calendar className="text-slate-300 group-hover:text-slate-900 transition-colors" size={20} />
                    </div>
                    <h4 className="text-3xl font-bold text-slate-900 mb-2">{item.date}</h4>
                    <p className="text-sm font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TRACKS --- */}
      <section id="expectations" className="py-32 bg-slate-950 text-white relative overflow-hidden">
        {/* Abstract bg elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px]"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900 rounded-full blur-[150px]"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
            <SectionHeader
              light
              kicker="Call for Papers"
              title="Research Tracks"
              subtitle="Exploration at the frontier of secure intelligence."
            />

            <div className="w-full lg:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Find your topic..."
                  className="w-full lg:w-80 bg-slate-900/50 border border-slate-800 rounded-full pl-6 pr-12 py-4 text-sm text-white focus:border-white/40 outline-none transition-all placeholder:text-slate-600 focus:bg-slate-900"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
              </div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredTracks.map(track => (
              <motion.div
                key={track.id}
                variants={fadeInUp}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className="group p-8 border border-white/10 hover:border-amber-400/30 bg-white/5 backdrop-blur-sm rounded-lg transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400 border border-blue-900/50 px-2 py-1 rounded bg-blue-900/20">{track.category}</span>
                  <ArrowUpRight className="text-slate-600 group-hover:text-white transition-colors" size={20} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-200 transition-colors">{track.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {track.topics.map((t, i) => (
                    <span key={i} className="text-xs text-slate-400 bg-black/20 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SUBMISSION WORKFLOW --- */}
      <section id="workflow" className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader
            align="center"
            kicker="Process Flow"
            title="Submission & Review Workflow"
            subtitle="The Single blind peer review process ensures rigorous evaluation of submissions, maintaining the highest standards of quality and integrity for the conference proceedings."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto mt-16 relative"
          >
            <div className="p-2 border border-slate-100 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-sm">
              <img
                src={workflowImg}
                alt="Submission Workflow"
                className="w-full h-auto object-contain rounded-sm"
              />
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Submission", desc: "Authors submit abstracts and full papers via the portal." },
                { step: "02", title: "Peer Review", desc: "Rigorous double-blind review by technical program committee." },
                { step: "03", title: "Decision", desc: "Notification of acceptance and camera-ready submission." }
              ].map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-slate-50 p-6 rounded-lg border border-slate-100/50"
                >
                  <span className="text-3xl font-bold text-slate-200 block mb-2">{s.step}</span>
                  <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-2">{s.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WORKSHOPS --- */}
      {/* <section id="workshops" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader
            kicker="Practical Learning"
            title="Workshops & Masterclasses"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            {(ICADC_CONTENT.workshops || []).map((ws, i) => (
              // IMAGE 4: WORKSHOP CARD IMAGE
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
                className="group bg-white border border-slate-200 shadow-sm transition-all rounded-lg flex flex-col md:flex-row overflow-hidden"
              >
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <img src={workshopImg} alt="Workshop Session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-12 p-8 md:p-12 flex-1 relative bg-white">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="w-8 h-[1px] bg-slate-400"></span>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Workshop 0{i + 1}</p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">{ws.title}</h3>
                    <p className="text-slate-500 leading-relaxed max-w-2xl">{ws.desc}</p>
                  </div>

                  <div className="flex flex-col items-center gap-4 shrink-0">
                    <div className="text-center">
                      <span className="block text-3xl font-bold text-slate-900">{ws.seats}</span>
                      <span className="text-[10px] uppercase tracking-widest text-slate-400">Seats Left</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowRegisterModal(true)}
                      className="bg-amber-500 text-slate-900 px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors rounded-lg"
                    >
                      Reserve Seat
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-slate-950 text-white pt-32 pb-12 border-t border-slate-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-4 gap-16 mb-24 border-b border-white/10 pb-16">
            <div className="lg:col-span-2">
              <span className="font-bold text-3xl text-white mb-8 block">NGCAI 2026 <img src={pressLogo} alt="press logo" className="h-10 w-auto object-contain" /> </span> 
              <p className="text-slate-400 leading-relaxed max-w-sm mb-8">
                Bridging the gap between AI innovation and cybersecurity resilience. Organized by IILM University for the global academic community.
              </p>
              <div className="flex gap-6">
                {[Twitter, Linkedin, Globe].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 10, backgroundColor: "#fff", color: "#000" }}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 transition-all"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8">Navigation</h4>
              <ul className="space-y-4">
                {/* removed workshops , 'Workshops' */}
                {['About', 'Tracks', 'Contact'].map(item => (
                  <li key={item}><a href={`#${item.toLowerCase()}`} className="text-sm text-slate-300 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8">Contact</h4>
              <p className="text-sm text-slate-300 mb-2">conference@icadc2026.org</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Plot No. 16, Knowledge Park II, <br />
                Greater Noida, UP 201306, India
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-widest text-slate-600">
            <p>© 2026 IILM University. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-400">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
