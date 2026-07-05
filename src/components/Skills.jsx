import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJs,
  FaPython,
} from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { SiCplusplus, SiFlutter, SiNextdotjs, SiNodedotjs, SiGoland, SiFirebase, SiDart } from "react-icons/si";

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Backend & Mobile",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Go", icon: <SiGoland /> },
      { name: "Dart", icon: <SiDart /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Python", icon: <FaPython /> },
      { name: "C++", icon: <SiCplusplus /> },
    ],
  },
  {
    title: "Ferramentas",
    items: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Power BI", icon: <FaChartColumn /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-heading">
          <span className="section-label">Stack</span>
          <h2>Ferramentas e tecnologias com as quais trabalho.</h2>
        </div>

        <div className="skills-groups">
          {groups.map((group) => (
            <div className="skills-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skills-grid">
                {group.items.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <span className="skill-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}