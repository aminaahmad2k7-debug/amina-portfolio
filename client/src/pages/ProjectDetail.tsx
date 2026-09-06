/* Paper Lab Notebook detail page: evidence-first project pages with tactile labels, readable summaries, and screenshot galleries. */
import failfast1 from "../assets/gallery/failfast-1.png";
import failfast2 from "../assets/gallery/failfast-2.png";
import failfast3 from "../assets/gallery/failfast-3.png";
import planner1 from "../assets/gallery/planner-1.png";
import planner2 from "../assets/gallery/planner-2.png";
import planner3 from "../assets/gallery/planner-3.png";
import planner4 from "../assets/gallery/planner-4.png";
import bank1 from "../assets/gallery/bank-1.png";
import bank2 from "../assets/gallery/bank-2.png";
import bank3 from "../assets/gallery/bank-3.png";
import bank4 from "../assets/gallery/bank-4.png";
import chronobudget1 from "../assets/gallery/chronobudget-1.png";
import chronobudget2 from "../assets/gallery/chronobudget-2.png";
import chronobudget3 from "../assets/gallery/chronobudget-3.png";
import floodrelief1 from "../assets/gallery/floodrelief-1.png";
import floodrelief2 from "../assets/gallery/floodrelief-2.png";
import floodrelief3 from "../assets/gallery/floodrelief-3.png";
import donation1 from "../assets/gallery/donation-1.png";
import donation2 from "../assets/gallery/donation-2.png";
import donation3 from "../assets/gallery/donation-3.png";
import donation4 from "../assets/gallery/donation-4.png";
import campus1 from "../assets/gallery/campus-1.png";
import campus2 from "../assets/gallery/campus-2.png";
import campus3 from "../assets/gallery/campus-3.png";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Link, useRoute } from "wouter";

type ProjectDetailRecord = {
  number: string;
  title: string;
  type: string;
  cue: string;
  description: string;
  tech: string[];
  tone: string;
  live?: string;
  liveLabel?: string;
  gallery: string[];
};

const projectDetails: Record<string, ProjectDetailRecord> = {
  "my-planner": {
    number: "01",
    title: "My Planner",
    type: "Individual project",
    cue: "tasks · habits · reminders",
    description: "A full-stack personal productivity and life-management application bringing tasks, reminders, habits, finances, journaling, university activities, calendar planning, and notifications into one platform.",
    tech: ["React", "TypeScript", "Flask", "SQLite", "Web Push"],
    tone: "wine",
    live: "https://steadfast07.pythonanywhere.com/",
    liveLabel: "Open live planner",
    gallery: [planner1, planner2, planner3, planner4],
  },
  "bank-customer-segmentation": {
    number: "02",
    title: "Bank Customer Segmentation",
    type: "Individual project",
    cue: "cluster map · customer data",
    description: "A machine learning project that explores bank customer data, then uses preprocessing, visualization, and clustering techniques to identify meaningful customer segments.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    tone: "plum",
    gallery: [bank1, bank2, bank3, bank4],
  },
  chronobudget: {
    number: "03",
    title: "ChronoBudget",
    type: "Group project",
    cue: "goals · scenarios · cashflow",
    description: "A financial management application that helps users organize finances, set goals, and explore budgeting scenarios through an interactive desktop interface.",
    tech: ["Java", "JavaFX", "Maven", "OOP"],
    tone: "mauve",
    gallery: [chronobudget1, chronobudget2, chronobudget3],
  },
  "flood-relief-management-system": {
    number: "04",
    title: "Flood Relief Management System",
    type: "Group project",
    cue: "relief map · field records",
    description: "A web-based system for managing and analyzing flood relief information, processing relief data, and presenting useful statistics through an accessible interface.",
    tech: ["Python", "Flask", "Pandas", "JavaScript"],
    tone: "ink",
    gallery: [floodrelief1, floodrelief2, floodrelief3],
  },
  "donation-management-system": {
    number: "05",
    title: "Donation Management System",
    type: "Group project",
    cue: "matching · priority queue",
    description: "A graphical donation management application for donors, recipients, and resources, with donation matching, priority-based management, validation, and persistence.",
    tech: ["C++", "Raylib", "Algorithms", "Data Structures"],
    tone: "rose",
    gallery: [donation1, donation2, donation3, donation4],
  },
  "failfast-db": {
    number: "06",
    title: "FailFast DB",
    type: "Group project",
    cue: "ideas · ratings · REST API",
    description: "A web application for sharing, exploring, and evaluating project ideas through a modern interface backed by a relational database and REST APIs.",
    tech: ["Next.js", "React", "MySQL", "Flask"],
    tone: "plum",
    live: "https://fail-fast-db-rnpq.vercel.app/",
    liveLabel: "Open live app",
    gallery: [failfast1, failfast2, failfast3],
  },
  "campus-concierge": {
    number: "07",
    title: "Campus Concierge",
    type: "Group project",
    cue: "student portal · campus services",
    description: "A digital campus platform that brings announcements, attendance, LMS, Qalam, requests, clubs, hostel services, sports, incident reporting, and student support into one student portal.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    tone: "ink",
    live: "https://nust-central.vercel.app/",
    liveLabel: "Open live portal",
    gallery: [campus1, campus2, campus3],
  },
};

export default function ProjectDetail() {
  const [, params] = useRoute<{ slug: string }>("/projects/:slug");
  const project = params ? projectDetails[params.slug] : undefined;

  if (!project) {
    return (
      <main className="project-detail-page">
        <div className="project-detail-empty">
          <p className="eyebrow"><span className="eyebrow-dot" /> missing page</p>
          <h1>That project page is still <em>being sketched.</em></h1>
          <Link href="/#work" className="button button-primary"><ArrowLeft size={17} /> Back to projects</Link>
        </div>
      </main>
    );
  }

  return (
    <main className={`project-detail-page tone-${project.tone}`}>
      <header className="project-detail-header">
        <Link href="/#work" className="back-link"><ArrowLeft size={16} /> Back to projects</Link>
        <span className="detail-index">case study / {project.number}</span>
      </header>
      <section className="project-detail-hero">
        <div className="detail-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> {project.type} · {project.cue}</p>
          <h1>{project.title}</h1>
          <p className="detail-description">{project.description}</p>
          <div className="detail-tech-list" aria-label="Technologies used">
            {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
          {project.live && <a className="button button-primary detail-live-link" href={project.live} target="_blank" rel="noreferrer">{project.liveLabel} <ArrowUpRight size={17} /></a>}
        </div>
        <div className="detail-note">
          <span>field note</span>
          <strong>What I explored</strong>
          <p>Turning a real-world need into an interface that makes the next useful action easier to find.</p>
        </div>
      </section>
      <section className="project-gallery-section">
        <div className="section-marker"><span>evidence</span><span className="marker-rule" /> screens from the build</div>
        {project.gallery.length ? (
          <div className="project-gallery">
            {project.gallery.map((image, index) => (
              <figure className={`gallery-frame gallery-frame-${index % 3}`} key={image}>
                <img src={image} alt={`${project.title} screenshot ${index + 1}`} loading={index > 0 ? "lazy" : "eager"} />
                <figcaption><span>screen {String(index + 1).padStart(2, "0")}</span><span>{project.title}</span></figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="gallery-empty"><ExternalLink size={18} /><p>Screenshot evidence can be added here when the next build capture is ready.</p></div>
        )}
      </section>
      <footer className="project-detail-footer">
        <Link href="/#work" className="back-link"><ArrowLeft size={16} /> Browse another project</Link>
        <span>AMINA AHMAD · AI / 2029</span>
      </footer>
    </main>
  );
}
