import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDocker,
} from "react-icons/fa";
import { 
  SiFlutter, 
  SiDart,
  SiReact, 
  SiNextdotjs,
  SiFirebase,
  SiNodedotjs,
  SiGo,
  SiGooglecolab,
  SiAxios
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Golang", icon: <SiGo /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "APIs", icon: <SiAxios /> },
    ]
  },
  {
    category: "Mobile",
    skills: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Dart", icon: <SiDart /> },
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "C#", icon: <TbBrandCSharp /> },
    ]
  },
  {
    category: "Data & IA",
    skills: [
      { name: "Google Colab", icon: <SiGooglecolab /> },
    ]
  }
];

export default function Skills() {
  return (
    <section className="stack-section" id="skills">
      <div className="container">
        <div className="skills-heading">
          <h2>STACK</h2>
        </div>

        <div className="skills-groups">
          {skillsData.map((group) => (
            <div className="skills-group" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skills-grid">
                {group.skills.map((skill) => (
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