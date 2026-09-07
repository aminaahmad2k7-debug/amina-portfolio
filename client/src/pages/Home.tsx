/* Paper Lab Notebook design: editorial asymmetry, tactile surfaces, handwritten type, Notebook Wine actions. */
import heroImage from "../assets/amina-hero.png";
import portraitImage from "../assets/amina-portrait.jpg";
import markImage from "../assets/amina-mark.png";
import plannerCover from "../assets/gallery/planner-1.png";
import bankCover from "../assets/gallery/bank-1.png";
import chronobudgetCover from "../assets/gallery/chronobudget-1.png";
import floodreliefCover from "../assets/gallery/floodrelief-1.png";
import donationCover from "../assets/gallery/donation-1.png";
import failfastCover from "../assets/gallery/failfast-1.png";
import campusCover from "../assets/gallery/campus-1.png";
import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  ChevronRight,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    slug: "my-planner",
    title: "My Planner",
    type: "Individual project",
    cue: "tasks · habits · reminders",
    description:
      "A full-stack personal productivity and life-management application bringing tasks, reminders, habits, finances, journaling, university activities, calendar planning, and notifications into one platform.",
    tech: ["React", "TypeScript", "Flask", "SQLite", "Web Push"],
    image: plannerCover,
    tone: "wine",
    url: "https://steadfast07.pythonanywhere.com/",
  },
  {
    number: "02",
    slug: "bank-customer-segmentation",
    title: "Bank Customer Segmentation",
    type: "Individual project",
    cue: "cluster map · customer data",
    description:
      "A machine learning project that explores bank customer data, then uses preprocessing, visualization, and clustering techniques to identify meaningful customer segments.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    image: bankCover,
    tone: "plum",
  },
  {
    number: "03",
    slug: "chronobudget",
    title: "ChronoBudget",
    type: "Group project",
    cue: "goals · scenarios · cashflow",
    description:
      "A financial management application that helps users organize finances, set goals, and explore budgeting scenarios through an interactive desktop interface.",
    tech: ["Java", "JavaFX", "Maven", "OOP"],
    image: chronobudgetCover,
    tone: "mauve",
  },
  {
    number: "04",
    slug: "flood-relief-management-system",
    title: "Flood Relief Management System",
    type: "Group project",
    cue: "relief map · field records",
    description:
      "A web-based system for managing and analyzing flood relief information, processing relief data, and presenting useful statistics through an accessible interface.",
    tech: ["Python", "Flask", "Pandas", "JavaScript"],
    image: floodreliefCover,
    tone: "ink",
  },
  {
    number: "05",
    slug: "donation-management-system",
    title: "Donation Management System",
    type: "Group project",
    cue: "matching · priority queue",
    description:
      "A graphical donation management application for donors, recipients, and resources, with donation matching, priority-based management, validation, and persistence.",
    tech: ["C++", "Raylib", "Algorithms", "Data Structures"],
    image: donationCover,
    tone: "rose",
  },
  {
    number: "06",
    slug: "failfast-db",
    title: "FailFast DB",
    type: "Group project",
    cue: "ideas · ratings · REST API",
    description:
      "A web application for sharing, exploring, and evaluating project ideas through a modern interface backed by a relational database and REST APIs.",
    tech: ["Next.js", "React", "MySQL", "Flask"],
    image: failfastCover,
    tone: "plum",
    url: "https://fail-fast-db-rnpq.vercel.app/",
    linkLabel: "Open live app",
  },
  {
    number: "07",
    slug: "campus-concierge",
    title: "Campus Concierge",
    type: "Group project",
    cue: "student portal · campus services",
    description:
      "A digital campus platform that brings announcements, attendance, LMS, Qalam, requests, clubs, hostel services, sports, incident reporting, and student support into one student portal.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    image: campusCover,
    tone: "ink",
    url: "https://nust-central.vercel.app/",
    linkLabel: "Open live portal",
  },
];

const aiMlSkills = ["Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Jupyter", "Clustering", "Data Preprocessing", "Model Evaluation"];

const skillGroups = [
  { label: "Programming languages", items: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL"] },
  { label: "Web development", items: ["HTML", "CSS", "Tailwind CSS", "React", "Flask"] },
  { label: "Data science & ML", items: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"] },
  { label: "Backend & databases", items: ["SQLAlchemy", "SQLite", "REST APIs", "PythonAnywhere"] },
  { label: "Tools & systems", items: ["Git", "GitHub", "Vite", "Web Push", "Service Workers", "Cron Jobs"] },
];

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <button className="theme-toggle" onClick={() => setDark((value) => !value)} aria-label="Toggle light and dark mode">
      {dark ? <Sun size={17} /> : <Moon size={17} />}
      <span>{dark ? "Light desk" : "Dark desk"}</span>
    </button>
  );
}


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const message = new FormData(form).get("message")?.toString() || "";
    window.location.href = `mailto:amina.ahmad2k7@gmail.com?subject=Hello from ${encodeURIComponent(formName)}&body=${encodeURIComponent(message + `\n\nReply to: ${formEmail}`)}`;
    setSent(true);
  };

  return (
    <div className="site-shell">
      <div className="paper-grain" aria-hidden="true" />
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Amina Ahmad home">
          <img src={markImage} alt="" className="brand-mark" />
          <span className="brand-name">Amina Ahmad<span>.</span></span>
        </a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          <button className="nav-link" onClick={() => navigateTo("about")}>About</button>
          <button className="nav-link" onClick={() => navigateTo("work")}>Projects</button>
          <button className="nav-link" onClick={() => navigateTo("recognition")}>Recognition</button>
          <button className="nav-link" onClick={() => navigateTo("skills")}>Skills</button>
          <button className="nav-link" onClick={() => navigateTo("contact")}>Contact</button>
        </nav>
        <div className="header-actions"><ThemeToggle /><button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-dot" /> Entry 01 · learning in public</p>
            <h1 style={{ color: "#230b1c" }}>Building ideas into<br /><em>working things.</em></h1>
            <p className="hero-lede">I’m Amina Ahmad, a BS Artificial Intelligence student at NUST and an aspiring ML engineer interested in making technology practical and thoughtful.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={18} /></a>
            </div>
            <div className="hero-note"><span className="note-line" /> Currently based at <strong>NUST H-12, Islamabad / Rawalpindi</strong></div>
          </div>
          <div className="hero-art reveal reveal-delay-2">
            <div className="hero-index">AI / 2029</div>
            <img src={heroImage} alt="Laptop with code editor, notebook of ideas, and coffee, surrounded by icons for web, data, and ML" />
            <div className="hero-sticker">problem<br /><span>→</span> possibility</div>
            <div className="hero-caption">a small archive of<br />things I’m figuring out</div>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="section-marker"><span>02</span><span className="marker-rule" /> about me</div>
          <div className="about-layout">
            <div className="portrait-card reveal">
              <div className="portrait-placeholder"><img src={portraitImage} alt="Amina Ahmad" className="portrait-photo" /><div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" /></div>
              <p className="portrait-caption">Amina Ahmad<br /><span>BS AI · NUST</span></p>
            </div>
            <div className="about-copy reveal reveal-delay-1">
              <h2>Driven by<br /><span>curiosity.</span></h2>
              <p>I’m a BS Artificial Intelligence student at NUST, Islamabad, with a strong interest in finding problems and building practical solutions for them. I enjoy exploring new and emerging technologies and continuously updating my skills through hands-on learning and personal projects.</p>
              <p>I’m naturally curious, enjoy solving challenging problems, and like turning ideas into something functional and useful. My goal is to keep learning, grow as a developer, and build a successful career in technology while creating solutions that have a real-world impact.</p>
              <div className="about-signature" style={{ color: "#471a43", fontSize: "16px", fontWeight: 800 }}>Alhamdulillah <span>— Hafiz e Quran</span></div>
            </div>
            <aside className="margin-note reveal reveal-delay-2"><Sparkles size={17} /><p><strong>Beyond the code</strong>Hiking, parks, travelling, new restaurants, long conversations, and learning from different perspectives.</p><div className="note-check"><Check size={15} /> Hafiz-e-Quran</div></aside>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading"><div><div className="section-marker"><span>03</span><span className="marker-rule" /> selected experiments</div><h2>Things I’ve <span>made.</span></h2></div><p className="section-intro">A growing collection of class projects, personal experiments, and practical systems built while learning how ideas become interfaces.</p></div>
          <div className="project-list">
            {projects.map((project, index) => <article className={`project-card tone-${project.tone} reveal ${index % 2 ? "project-offset" : ""}`} key={project.title} tabIndex={0} aria-label={`${project.title}: reveal technologies on hover or focus`}><div className="project-number">{project.number}</div><div className="project-visual"><img src={project.image} alt="" /><span className="project-type">{project.type}</span><span className="project-cue">{project.cue}</span></div><div className="project-tech-reveal" aria-hidden="true"><span>built with</span><strong>{project.tech.join(" · ")}</strong></div><div className="project-details"><h3><a className="project-title-link" href={`/projects/${project.slug}`}>{project.title} <ArrowUpRight size={18} aria-hidden="true" /></a></h3><p>{project.description}</p><div className="tech-row">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-card-actions"><a href={`/projects/${project.slug}`} className="project-link">View case study <ArrowUpRight size={16} /></a>{project.url && <a href={project.url} className="project-link live-project-link" target="_blank" rel="noreferrer">{project.linkLabel || "Open live project"} <ArrowUpRight size={16} /></a>}</div></div></article>)}
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills" style={{ backgroundColor: "#3e223f" }}>
          <div className="section-marker"><span>04</span><span className="marker-rule" /> my toolkit</div>
          <div className="skills-layout"><div className="skills-heading"><h2>Learning the<br /><span>language of ideas.</span></h2><p>Tools are only useful when they help a good question become a useful answer. These are the ones I’m currently learning, using, and getting better at.</p><div className="learning-cluster"><span className="learning-label">currently learning · AI / ML</span><div className="learning-tags">{aiMlSkills.map((skill) => <span key={skill}>{skill}</span>)}</div></div><div className="stat-row"><div><strong>06</strong><span>projects explored</span></div><div><strong>02</strong><span>Kaggle certificates</span></div><div><strong>2029</strong><span>graduation year</span></div></div></div><div className="skill-groups">{skillGroups.map((group, index) => <div className="skill-group" key={group.label}><span className="skill-index">0{index + 1}</span><div><h3>{group.label}</h3><div className="skill-pills">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div></div>)}</div></div>
        </section>

        <section className="recognition-section section-wrap" id="recognition">
          <div className="recognition-header"><div className="section-marker"><span>05</span><span className="marker-rule" /> notes in the margin</div><p>Small wins, meaningful milestones.</p></div>
          <div className="recognition-grid">
            <article className="recognition-card featured" style={{ backgroundColor: "#3e223f" }}>
              <Award size={24} />
              <span className="card-label">Winner · Oct 2024</span>
              <h3 style={{ color: "#8d537e" }}>Climate Stewardship:<br /><em style={{ color: "#8d537e" }}>Reshaping Earth</em></h3>
              <p>1st place in a presentation competition during World Space Week, pitching solutions that use space technology and data for environmental sustainability.</p>
              <small>SERL & NCGSA, Institute of Space Technology</small>
            </article>
            <article className="recognition-card">
              <GraduationCap size={22} style={{ color: "#734e70" }} />
              <span className="card-label">Certifications</span>
              <h3>Kaggle<br /><em>coursework</em></h3>
              <ul><li>Intro to Machine Learning</li><li>Python</li></ul>
            </article>
            <article className="recognition-card">
              <Sparkles size={22} style={{ color: "#734e70" }} />
              <span className="card-label">Participant · Jan 2025</span>
              <h3>SIGMA <em>9</em></h3>
              <p>Participated in SIGMA 9, hosted by the LUMS Students’ Mathematics Society, engaging in mathematical problem-solving, analytical challenges, and collaborative activities.</p>
              <small style={{ color: "#8f4280" }}>Issued by LUMS Students’ Mathematics Society · Associated with Siddeeq Public School and College</small>
            </article>
            <article className="recognition-card">
              <BookOpen size={22} style={{ color: "#551b45" }} />
              <span className="card-label">Competition</span>
              <h3>Understanding<br /><em>of Quran</em></h3>
              <p>Participated in the “Understanding of Quran” competition organized by Dr. Ubaid ur Rehman Bashir.</p>
            </article>
            <article className="recognition-card">
              <Check size={22} style={{ color: "#734e70" }} />
              <span className="card-label">Academic results</span>
              <h3>Strong<br /><em>foundations</em></h3>
              <p>HSSC: <strong>92.7%</strong><br />Matric: <strong>95.7%</strong></p>
            </article>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact"><div className="contact-copy"><div className="section-marker"><span>06</span><span className="marker-rule" /> leave a note</div><h2>Have a question?<br /><span>Let’s make it useful.</span></h2><p>I’m always happy to talk about technology, learning, project ideas, or the next thing worth exploring.</p><div className="contact-links"><a href="mailto:amina.ahmad2k7@gmail.com"><Mail size={17} /> amina.ahmad2k7@gmail.com</a><a href="https://github.com/aminaahmad2k7-debug" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/amina-ahmad-73a294316/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a></div></div><form className="contact-form" onSubmit={submit}><label>Your name<input required value={formName} onChange={(event) => setFormName(event.target.value)} placeholder="A curious human" /></label><label>Your email<input required type="email" value={formEmail} onChange={(event) => setFormEmail(event.target.value)} placeholder="you@example.com" /></label><label>Your note<textarea required name="message" rows={4} placeholder="Tell me what you’re thinking about..." /></label><button className="button button-primary" type="submit">Send the note <ChevronRight size={18} /></button>{sent && <p className="form-success">Your mail app should be opening now. Thank you for the note.</p>}</form></section>
      </main>
      {showBackToTop && <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><ArrowUp size={18} /><span>top</span></button>}
      <footer className="site-footer"><span>© {year} Amina Ahmad</span><span>built with curiosity <span className="footer-heart">✦</span></span><a href="#top">back to top <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}
