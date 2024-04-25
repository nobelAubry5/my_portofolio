import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <section
      className=" my-8 flex flex-col md:flex-row gap-2 md:gap-9 col-reverse"
      id="projects"
    >
      <h2 className="font-medium text-lg mb-2 md:w-32 shrink-0">
        Mes projects
      </h2>
      <div className="flex flex-col">
        <ProjectItem />
      </div>
    </section>
  );
};

export default Projects;
