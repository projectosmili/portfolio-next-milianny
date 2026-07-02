import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import { SiFlutter, SiCplusplus } from "react-icons/si";
import { FaChartColumn } from "react-icons/fa6";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Power BI", icon: <FaChartColumn /> },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Tecnologias que Utilizo</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <span className="skill-icon">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}