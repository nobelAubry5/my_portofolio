import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiCreatereactapp,
  SiTailwindcss,
  SiGithub,
  SiWordpress,
} from "react-icons/si";
import { FaPhp } from "react-icons/fa";
const Skills = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "SASS", icon: <SiSass /> },
    { name: "Javascript", icon: <SiJavascript /> },
    { name: "React", icon: <SiCreatereactapp /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Wordpress", icon: <SiWordpress /> },
  ];
  return (
    <section className="my-12 flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
      <h2 className="font-medium text-lg md:w-32 shrink-0">Compétences</h2>
      <div className="flex flex-col">
        <p className="text-md mb-6">
          Voici les langages que je maîtrise. Je me spécialise également dans la
          conception et le design web (UI/UX). Je suis toujours en quête de
          nouvelles connaissances.
        </p>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="flex flex-row items-center border border-[#7480FF] p-4 rounded-full text-center"
            >
              <div className="mr-2">{skill.icon}</div>
              <div>{skill.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
