import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Download, Sparkles, Mail, Linkedin, Github, Briefcase } from "lucide-react";
import { profile, stats, about, skills, projects, experience, milestones } from "./data.js";

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.12 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${on ? "in" : ""} ${className}`}>{children}</div>;
}

const Head = ({ eyebrow, title, accent, text }) => (
  <Reveal className="head">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title} <span className="grad">{accent}</span></h2>
    {text && <p className="sub">{text}</p>}
  </Reveal>
);

const Icon = ({ as: I }) => <span className="ico"><I size={20} /></span>;

function Nav() {
  const items = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];
  return (
    <header className="nav"><div className="wrap navin">
      <a href="#top" className="logo grad">{profile.logo}</a>
      <nav>{items.map((i) => <a key={i} href={`#${i.toLowerCase()}`}>{i}</a>)}</nav>
      <a className="pill" href={profile.resume} download>Resume</a>
    </div></header>
  );
}

function Hero() {
  const [ok, setOk] = useState(true);
  return (
    <section id="top" className="hero wrap">
      <div className="heroText">
        <span className="badge"><Sparkles size={13} /> {profile.badge}</span>
        <h1>Hi, I'm <span className="grad">{profile.first}</span> {profile.last}</h1>
        <p className="role">{profile.role}</p>
        <p className="lead">{profile.tagline}</p>
        <div className="row">
          <a className="btn primary" href="#projects">View Projects <ArrowDown size={15} /></a>
          <a className="btn dark" href={profile.resume} download><Download size={15} /> Download Resume</a>
        </div>
        <div className="stats">{stats.map((s) => <div key={s.l}><b className="grad2">{s.n}</b><span>{s.l}</span></div>)}</div>
      </div>
      <div className="photoWrap">
        <div className="photo">
          {ok ? <img src={profile.photo} alt={profile.name} onError={() => setOk(false)} /> : <div className="initials">{profile.first[0]}{profile.last[0]}</div>}
        </div>
        <div className="tag t1"><small>{profile.photoTag1.small}</small><b>{profile.photoTag1.big}</b></div>
        <div className="tag t2"><small>{profile.photoTag2.small}</small><b>{profile.photoTag2.big}</b></div>
      </div>
    </section>
  );
}

const About = () => (
  <section id="about" className="sec wrap">
    <Head eyebrow="ABOUT" title={about.title} accent={about.accent} text={about.text} />
    <div className="grid2">
      {about.cards.map((c, i) => (
        <Reveal key={c.title} delay={i * 70}><div className="card"><Icon as={c.icon} /><h3>{c.title}</h3><p>{c.text}</p></div></Reveal>
      ))}
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="sec wrap">
    <Head eyebrow="SKILLS" title="Tools I" accent="build with" text="A growing toolkit, from clean JavaScript to full-stack APIs and LLM integration." />
    {skills.map((g) => (
      <Reveal key={g.group} className="skillGroup">
        <h4>{g.group}</h4>
        <div className="chips">{g.items.map(([n, I]) => <span className="chip" key={n}><I size={15} />{n}</span>)}</div>
      </Reveal>
    ))}
  </section>
);

const Projects = () => (
  <section id="projects" className="sec wrap">
    <Head eyebrow="PROJECTS" title="Things I've" accent="built" text="A handful of projects that mix curiosity, code, and real impact." />
    <div className="grid2">
      {projects.map((p, i) => (
        <Reveal key={p.title} delay={i * 80}>
          <a className="card link" href={p.link !== "#" ? p.link : undefined} target="_blank" rel="noreferrer">
            <div className="between"><Icon as={p.icon} /><ArrowUpRight size={16} className="arrow" /></div>
            <span className="tagline">{p.tag}</span><h3 className="big">{p.title}</h3><p>{p.text}</p>
            <div className="chips sm">{p.tech.map((t) => <span className="chip s" key={t}>{t}</span>)}</div>
          </a>
        </Reveal>
      ))}
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="sec wrap">
    <Head eyebrow="EXPERIENCE" title="Where I've" accent="worked" text="Hands-on internships building real web applications." />
    <div className="stack">
      {experience.map((e, i) => (
        <Reveal key={e.role} delay={i * 80}>
          <div className="card exp">
            <span className="ico plain"><Briefcase size={20} /></span>
            <div>
              <h3 className="big">{e.role}</h3><span className="tagline">{e.company}</span><span className="period">{e.period}</span>
              <ul>{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="sec wrap">
    <Head eyebrow="EDUCATION" title="Milestones I'm" accent="proud of" text="Academics and certifications that fuel the next build." />
    <div className="grid3">
      {milestones.map((m, i) => (
        <Reveal key={m.title} delay={i * 80}>
          <div className="card"><m.icon size={22} className="mi" /><b className="num grad2">{m.big}</b><span className="cap">{m.small}</span><h3>{m.title}</h3><p>{m.text}</p></div>
        </Reveal>
      ))}
    </div>
  </section>
);

const Contact = () => {
  const items = [
    { I: Mail, l: "EMAIL", v: profile.email, h: `mailto:${profile.email}` },
    { I: Linkedin, l: "LINKEDIN", v: profile.linkedin.replace("https://www.", "").replace("https://", ""), h: profile.linkedin },
    { I: Github, l: "GITHUB", v: profile.github.replace("https://", ""), h: profile.github },
  ];
  return (
    <section id="contact" className="sec wrap">
      <Head eyebrow="CONTACT" title="Let's" accent="build something" text="Got a role, a project, or just want to chat tech? My inbox is always open." />
      <div className="grid3">
        {items.map((c, i) => (
          <Reveal key={c.l} delay={i * 80}>
            <a className="card link" href={c.h} target="_blank" rel="noreferrer">
              <div className="between"><Icon as={c.I} /><ArrowUpRight size={16} className="arrow" /></div>
              <span className="cap">{c.l}</span><b className="val">{c.v}</b>
            </a>
          </Reveal>
        ))}
      </div>
      <p className="foot">&copy; {new Date().getFullYear()} {profile.name}</p>
    </section>
  );
};

export default function App() {
  return (<><div className="bg" /><Nav /><main><Hero /><About /><Skills /><Projects /><Experience /><Education /><Contact /></main></>);
}
