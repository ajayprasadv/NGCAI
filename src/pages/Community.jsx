import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Globe, Award, BookOpen, Megaphone, DollarSign, Share2, Briefcase } from 'lucide-react';
import logoImg from '../assets/iilm-logo.png';
import Conflogo from '../assets/conflogo.png';

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
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    }
};

const CommitteeSection = ({ title, icon, members }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="mb-16"
    >
        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-200">
            <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                {icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {members.map((member, idx) => (
                <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="bg-white p-5 border border-slate-100 rounded-sm hover:border-emerald-200 hover:shadow-md transition-all"
                >
                    <p className="font-semibold text-slate-900 text-sm">{member.name}</p>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{member.affiliation}</p>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

const COMMITTEE_DATA = {
    patrons: [
        { name: "Dr. Nihar Amoncar", affiliation: "Vice Chancellor, IILM University, Greater Noida, India" },
    ],
    generalChairs: [
        { name: "Dr. Munish Sabharwal", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Alok Agarwal", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Arvind Kumar Jain", affiliation: "IILM University, Greater Noida" }
    ],
    organizingChairs: [
        { name: "Dr. Ajay Prasad", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Vanya Aruna", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Naseem Ahmed", affiliation: "IILM University, Greater Noida" }

    ],
    organizingCoChairs: [
        { name: "Dr. Ankita Awasthi", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Akhilesh Mishra", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Achyut Sharma", affiliation: "IILM University, Greater Noida" }
    ],
    TechnicalProgramChairs: [
        { name: "Dr. Akhilesh Mishra (Chair)", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Abhishek Kumar", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Rakhi Trivedi", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Sapna Chaudhary", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Anand Singh", affiliation: "IILM University, Greater Noida" }

    ],
    Editors: [
        { name: "Dr. Vanya Aruna", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Ajay Prasad", affiliation: "IILM University Greater Noida, India" },
        { name: "Dr. Ankita Awasthi", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Naseem Ahmed", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Achyut Sharma", affiliation: "IILM University, Greater Noida" }

    ],
    internationalAdvisory: [
        { name: "Dr. Amit Rai", affiliation: "Ulsan National Institute of Science and Technology, South Korea" },
        { name: "Dr. Himanshu Sharma", affiliation: "University of Calgari, Canada" },
        { name: "Kavita Vishwakarma", affiliation: "RnD Scientist, IMEC Belgium" },
        { name: "Dr. Miroslav Skoric", affiliation: "Govt. of Serbia" },
        { name: "Dr. Deepak jain", affiliation: "Daliyan University of Technology" },
        { name: "Prof Ramesh Bansal", affiliation: "University of Sharjah" },
        { name: "DR. Bhawna Verma", affiliation: "INFENION Germany" },
        { name: "Prof. Jai Govind Singh", affiliation: "AIT Bangkok" },
        { name: "Prof. Ghanshyam Singh", affiliation: "University of Johannesburg" },
        { name: "Dr. Amit Kumar Prasad", affiliation: "University of Pittsburgh" }

    ],
    nationalAdvisory: [
        { name: "Prof. Neeta Pandey", affiliation: "Delhi Technological University" },
        { name: "Dr. Madan Kumar Das", affiliation: "NIT Jalandhar" },
        { name: "Prof. (Dr.) Jyoti Ohri", affiliation: "NIT Kurukshetra" },
        { name: "Dr. Shakti Sharma", affiliation: "Bennett University Greater Noida" },
        { name: "Dr. Sanyog Rawat", affiliation: "Central University Rajasthan" },
        { name: "Dr. Karan Veer", affiliation: "NIT Jalandhar" },
        { name: "Dr. Richa Agarwal. Satta.", affiliation: "NIT Patna" },
        { name: "Dr. Sandeep Kumar", affiliation: "JNU New Delhi" },
        { name: "Dr. Arun Choudhary", affiliation: "MNRE, Delhi" },
        { name: "Prof. Kirti Gupta", affiliation: "Bharti Vidyapeeth's College of Engineering, New Delhi" },
        { name: "Prof (Dr.) Vinod Kumar Yadav", affiliation: "DTU" },
        { name: "Prof. ( Dr.) Sathansh", affiliation: "NIT Kurukshetra" },
        { name: "Dr. Ananyo Bhattacharya", affiliation: "NIT Jamshedpur" },
        { name: "Dr. Dharmendra Tripathi,", affiliation: "NIT, Uttarakhand" },
        { name: "Prof. Pramod Kumar", affiliation: "Central University Karnataka" },
        { name: "Prof. Sunil Kumar Khah", affiliation: "JUIT Waknaghat" },
        { name: "Dr. Vipin Pal", affiliation: "NIT Delhi" },
        { name: "Prof (Dr.) J S Lather", affiliation: "NIT Kurukshetra" },
        { name: "Dr. Jayendra Kumar", affiliation: "NIT Jamshedpur" },
        { name: "Dr. Ankit Aggarwal", affiliation: "Galgotia University" },
        { name: "Dr. Pratul Arvind", affiliation: "BBDITM, Lucknow" },
        { name: "Prof. (Dr.) Usha Chauhan", affiliation: "Galgotias University, Greater Noida" },
        { name: "Prof. Manish Prateek", affiliation: "DBS University Dehradun" }
    ],
    technicalProgramCommittee: [
        { name: "Dr. Varun Gupta", affiliation: "NIT Silchar" },
        { name: "Dr. Akhilesh Nautiyal", affiliation: "NIT Uttarakhand" },
        { name: "Dr. Garima Varshney", affiliation: "Assistant Professor, ECE Dept., AKGEC" },
        { name: "Dr. Tapan Nahar", affiliation: "Marwari University" },
        { name: "Dr. Deepak Panwar", affiliation: "Manipal University Jaipur" },
        { name: "Dr. Abhas Kanungo", affiliation: "KIET University" },
        { name: "Dr. Ratish Dhiman", affiliation: "Chandigarh University" },
        { name: "Dr. Pushpa Gothwal", affiliation: "VIT Vellore" },
        { name: "Dr. Surender Dhiman", affiliation: "GGSIPU" },
        { name: "Dr. Manisha Mittal", affiliation: "GGSIPU" },
        { name: "Mr. Amit Chaurasia", affiliation: "Amity University Rajasthan" },
        { name: "Mr. Vinod Sharma", affiliation: "Amity University Rajasthan" },
        { name: "Dr. Pallav Rawal", affiliation: "SKIT, Jaipur" },
        { name: "Dr. Prachi Dewan", affiliation: "GGSIPU" },
        { name: "Dr. Bhawna Sharma", affiliation: "Manipal University Jaipur" },
        { name: "Prof (Dr.) Shubham Tiwari", affiliation: "ABES, Ghaziabad" },
        { name: "Prof (Dr.) S K Sinha", affiliation: "Amity University, Noida" },
        { name: "Dr. Navneet Sharma", affiliation: "GEC Jaipur" },
        { name: "Dr. Hari shankar", affiliation: "Chitkara University" },
        { name: "Dr. Ved Prakash Mishra", affiliation: "Professor, Amity University Dubai" },
        { name: "Dr. Swadha Gupta", affiliation: "Shiratech Knowtion GmbH, Germany" },
        { name: "Dr. Seema Rawat", affiliation: "Associate Professor, Amity University Tashkent Uzbekistan" },
        { name: "Dr. Abdul Razaq", affiliation: "Abertay University, United Kingdom" },
        { name: "Dr. Praveen Kumar", affiliation: "Professor, Astana IT University, Kazakhstan" },
        { name: "Ms. Marcie Sonderson", affiliation: "Criminal Investigator McAfee, Missouri, USA" },
        { name: "Dr. Cheng Cheng", affiliation: "Senior Lecturer Computer Science, Swansea University, UK" },
        { name: "Dr. Madhu Khurana", affiliation: "Assistant Professor, University of Gloucestershire, UK" },
        { name: "Dr. Thinagaran A/L Perumal", affiliation: "Associate Professor, Universiti Putra, Malaysia" },
        { name: "Dr. Danish Ather", affiliation: "Associate Professor, Amity University Tashkent Uzbekistan" },
        { name: "Dr. Salim Barbhuiya", affiliation: "Professor, University of Leeds, UK" },
        { name: "Dr. Pramod Gaur", affiliation: "Senior Lecturer, Nottingham Trent University, UK" },
        { name: "Dr. Manash K. Paul", affiliation: "Scientist, Principal Investigator, UCLA" },
        { name: "Dr. Sayantan Chakraborty", affiliation: "Chairman, IAPFE-Delaware-USA" },
        { name: "Dr. Vinayakumar Ravi", affiliation: "Assistant Research Professor, Prince Mohammad Bin Fahd University, Saudi Arabia" },
        { name: "Dr. Amit Kumar Mondal", affiliation: "Assistant Professor, Manipal University Dubai UAE" },
        { name: "Dr. Santhi Raju Pilli", affiliation: "Assistant Professor, Jazan University, KSA" },
        { name: "Dr. Manoj Kumar", affiliation: "Associate Professor, University of Wollongong, Dubai, UAE" },
        { name: "Dr. Nguyen Gia Nhu", affiliation: "Professor, Duy Tan University, Da Nang, Vietnam" },
        { name: "Dr. Teoh Teik Toe", affiliation: "Professor and Academic Director, NTU Singapore" },
        { name: "Dr. Mohit Mittal", affiliation: "Shiratech Knowtion GmbH, Germany" },
        { name: "Dr. Alexander Kuiper", affiliation: "Computer Scientist at Kuiper Forensics, Germany" },
        { name: "Dr. Jung-Sup Um", affiliation: "Professor, Kyungpook National University, South Korea" },
        { name: "Ms. Jane Eliseva", affiliation: "Head Alliances, Social Links, Riga, Latvia" },
        { name: "Dr. Hussain Falih Mahdi", affiliation: "Associate Professor, University of Diyala, Iraq" },
        { name: "Dr. Arijit Ghosh", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Dr. Tanupriya Choudhury", affiliation: "UPES, India" },
        { name: "Dr. Akash Punhani", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Sudhir Kumar Barai", affiliation: "BITS Pilani, India" },
        { name: "Dr. Kirti Shukla", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. P. Kumar", affiliation: "IIT Patna, India" },
        { name: "Dr. Adarsh Kumar", affiliation: "UPES, India" },
        { name: "Dr. Nitish Kumar Guru", affiliation: "Scientific Assistant (Ballistics), Directorate of Forensic Science and Laboratory, India" },
        { name: "Dr. Kaushik Ghosh", affiliation: "UPES, India" },
        { name: "Dr. Sourav Chakraborty", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Dr. Harshal Patil", affiliation: "Professor, IILM University, Greater Noida" },
        { name: "Dr. Udai Bhan Trivedi", affiliation: "Professor, IILM University, Greater Noida" },
        { name: "Dr. Amit Kumar", affiliation: "Thapar Institute of Engineering and Technology, India" },
        { name: "Dr. S. Raghavan", affiliation: "NIT Trichy, India" },
        { name: "Dr. Ujwal Chakraborty", affiliation: "NIT Silchar, India" },
        { name: "Dr. Talwar Yoginder", affiliation: "Scientist at National Informatics Centre, India" },
        { name: "Dr. Supratim Biswas", affiliation: "BIT Mesra Ranchi, India" },
        { name: "Dr. Gunjan Mittal Roy", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Chandrashekhar Azad", affiliation: "National Institute of Technology, India" },
        { name: "Dr. Suneet", affiliation: "CU, India" },
        { name: "Dr. Saurabh Kumar", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Anil Kumar", affiliation: "UPES, India" },
        { name: "Dr. Kumar Venkatesh", affiliation: "MNNIT Allahabad, India" },
        { name: "Dr. Rudra P. Pradhan", affiliation: "IIT Kharagpur, India" },
        { name: "Dr. Anirban Ghatak", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Dr. Richa Vijay", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Anup Dewanji", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Dr. Souvik Ganguli", affiliation: "Thapar Institute of Engineering and Technology, India" },
        { name: "Dr. Hitesh Kumar Sharma", affiliation: "UPES, India" },
        { name: "Dr. Jaswinder Singh", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Soumik Das", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Dr. Soumyabrata Chakrabarty", affiliation: "IIT, India" },
        { name: "Dr. Debrup Chakraborty", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Mr. Karuna Nidhan Upadhyay", affiliation: "Assistant Director (Cyber Forensic), Directorate of Forensic Science and Laboratory, India" },
    
    ],
    publicityChairs: [
        { name: "Dr. ABC", affiliation: "Associate Professor, IILM University, Greater Noida" },
        // { name: "Dr. Manali", affiliation: "Associate Professor, IILM University, Greater Noida" },
    ],
    publicityCoChairs: [
        { name: "Dr. ABC", affiliation: "Associate Professor, IILM University, Greater Noida" },
        // { name: "Dr. Gaurav Kumar", affiliation: "Associate Professor, IILM University, Greater Noida" },
        // { name: "Dr. Saurabh Shanu", affiliation: "IILM University, India" },
    ],
    financeChair: [
        { name: "Dr. Chandan Choubey", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Sandeep Saxena", affiliation: "Professor, IILM University, Greater Noida" },
    ],
    financeCommittee: [
        
        { name: "Mr. Awadhesh Maurya", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Bidyut Mahato", affiliation: "IILM University, Greater Noida" },

    ],
    digitalMediaChairs: [
        { name: "Dr. ABC", affiliation: "Assistant Professor, IILM University, Greater Noida" },
        // { name: "Dr. Pranav Shrivastav", affiliation: "Assistant Professor, IILM University, Greater Noida" },
    ],
    digitalMediaCoChairs: [
        { name: "Dr. ABC", affiliation: "Assistant Professor, IILM University, Greater Noida" },
        { name: "Dr. Juhi Priyani", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Damyanti Singh", affiliation: "IILM University, Greater Noida" },
    ],
    coordinationCommittee: [
        
        { name: "Ms. Garima Kulshreshtra (Chair)", affiliation: "IILM University, Greater Noida" },
        { name: "Ms. Priyanka Agarwal", affiliation: "IILM University, Greater Noida" }

    ],
    SponsorshipCommittee: [

        { name: "Ms. Kshama Pandey (Chair)", affiliation: "IILM University, Greater Noida" },
        { name: "Mr. Arpit Varshney", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Naseem Ahmed", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Abhishek Kumar", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Juhi Priyani", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Ankita Awasthi", affiliation: "IILM University, Greater Noida" },

    ],
    RegistrationAndPublicityCommittee: [
        { name: "Mr. Arpit Varshney (Chair)", affiliation: "IILM University, Greater Noida" },
        { name: "Ms. Garima Kulshreshtra", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Chandan Choubey", affiliation: "IILM University, Greater Noida" },
        { name: "Ms. Kshama Pandey", affiliation: "IILM University, Greater Noida" },
        { name: "Ms. Priyanka Agarwal", affiliation: "IILM University, Greater Noida" },


    ],
    ExecutionAndCoordinationCommittee: [

        { name: "Ms. Garima Kulshreshtra (Chair)", affiliation: "IILM University, Greater Noida" },
        { name: "Ms. Priyanka Agarwal", affiliation: "IILM University, Greater Noida" }
    ],
    WebSiteCommittee: [

        { name: "Dr. Juhi Priyani", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Damyanti Singh", affiliation: "IILM University, Greater Noida" },
    ]   
};

const Community = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-4 group">
                        <img src={logoImg} alt="IILM Logo" className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all" />
                        <div className="flex flex-col">
                            <img src={Conflogo} alt="Conference Logo" className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all" />
                            <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-slate-500">Organizing Committee</span>
                        </div>
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-emerald-600 transition-colors"
                    >
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
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[1px] w-12 bg-emerald-400"></span>
                            <p className="text-xs uppercase tracking-[0.3em] font-bold text-emerald-400">NGCAI-2026</p>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Organizing Committee</h1>
                        <p className="text-lg text-slate-400 max-w-2xl font-light">
                            Meet the distinguished academicians, researchers, and industry leaders driving the International Conference on Next-Generation Cybersecurity and Applied Artificial Intelligence.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12">

                    <CommitteeSection title="Patrons" icon={<Award size={20} />} members={COMMITTEE_DATA.patrons || []} />
                    <CommitteeSection title="General Chairs" icon={<Users size={20} />} members={COMMITTEE_DATA.generalChairs} />
                    <CommitteeSection title="Organizing Chairs (Convenors)" icon={<Users size={20} />} members={COMMITTEE_DATA.organizingChairs} />
                    <CommitteeSection title="Organizing Co-Chairs" icon={<Users size={20} />} members={COMMITTEE_DATA.organizingCoChairs} />
                    <CommitteeSection title="Technical Program Chairs" icon={<Globe size={20} />} members={COMMITTEE_DATA.TechnicalProgramChairs} />
                    <CommitteeSection title="Editors" icon={<BookOpen size={20} />} members={COMMITTEE_DATA.Editors} />
                    <CommitteeSection title="International Advisory Committee" icon={<Globe size={20} />} members={COMMITTEE_DATA.internationalAdvisory} />
                    <CommitteeSection title="National Advisory Committee" icon={<Globe size={20} />} members={COMMITTEE_DATA.nationalAdvisory} />
                    <CommitteeSection title="Technical Program Committee" icon={<Globe size={20} />} members={COMMITTEE_DATA.technicalProgramCommittee} />
                    {/* <CommitteeSection title="Publicity Chairs" icon={<Megaphone size={20} />} members={COMMITTEE_DATA.publicityChairs} /> */}
                    {/* <CommitteeSection title="Publicity Co-Chairs" icon={<Megaphone size={20} />} members={COMMITTEE_DATA.publicityCoChairs} /> */}
                    <CommitteeSection title="Finance Chair" icon={<DollarSign size={20} />} members={COMMITTEE_DATA.financeChair} />
                    <CommitteeSection title="Finance Committee" icon={<DollarSign size={20} />} members={COMMITTEE_DATA.financeCommittee} />
                    {/* <CommitteeSection title="Digital Media Chairs" icon={<Share2 size={20} />} members={COMMITTEE_DATA.digitalMediaChairs} /> */}
                    {/* <CommitteeSection title="Digital Media Co-Chairs" icon={<Share2 size={20} />} members={COMMITTEE_DATA.digitalMediaCoChairs} /> */}
                    <CommitteeSection title="Coordination Committee" icon={<Briefcase size={20} />} members={COMMITTEE_DATA.coordinationCommittee} />
                    <CommitteeSection title="Sponsorship Committee" icon={<Briefcase size={20} />} members={COMMITTEE_DATA.SponsorshipCommittee} />
                    <CommitteeSection title="Registration and Publicity Committee" icon={<Briefcase size={20} />} members={COMMITTEE_DATA.RegistrationAndPublicityCommittee} />
                    <CommitteeSection title="Execution and Coordination Committee" icon={<Briefcase size={20} />} members={COMMITTEE_DATA.ExecutionAndCoordinationCommittee} />
                    <CommitteeSection title="Web Site Committee" icon={<Briefcase size={20} />} members={COMMITTEE_DATA.WebSiteCommittee} />    

                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <p className="text-slate-400 text-sm">© 2026 IILM University. All rights reserved.</p>
                    <Link to="/" className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-emerald-400 hover:text-white transition-colors">
                        Return to Conference Home
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default Community;
