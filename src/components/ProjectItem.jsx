const ProjectItem = () => {
  const myData = [
    {
      title: "Projet de refonte de site : Les Esprits Ardents",
      imgUrl: "https://placehold.co/200x200",
      description:
        "Non qui laborum sit ipsum esse enim pariatur tempor commodo laboris cupidatat proident id nulla. Ex ut in labore incididunt consequat voluptate cillum enim. Incididunt velit nostrud magna dolor proident cillum cupidatat elit commodo irure veniam culpa reprehenderit. Sunt eu sint deserunt. Occaecat mollit ipsum est fugiat duis fugiat. Cupidatat minim occaecat ea et aliquip commodo. Nostrud cupidatat consectetur officia qui mollit. Exercitation labore non sunt pariatur ad non dolor est consectetur anim anim irure culpa mollit ad.",
      extract:
        "Sint irure non dolore eiusmod. Cupidatat duis aliqua cupidatat consectet",
      date: "20 mai 2024",
      stack: ["Wordpress", "Sass", "Javascript", "PHP"],
      link: "",
    },
    {
      title: "Projet de site web de météo",
      imgUrl: "https://placehold.co/200x200",
      description:
        "Non qui laborum sit ipsum esse enim pariatur tempor commodo laboris cupidatat proident id nulla. Ex ut in labore incididunt consequat voluptate cillum enim. Incididunt velit nostrud magna dolor proident cillum cupidatat elit commodo irure veniam culpa reprehenderit. Sunt eu sint deserunt. Occaecat mollit ipsum est fugiat duis fugiat. Cupidatat minim occaecat ea et aliquip commodo. Nostrud cupidatat consectetur officia qui mollit. Exercitation labore non sunt pariatur ad non dolor est consectetur anim anim irure culpa mollit ad.",
      extract:
        "Sint irure non dolore eiusmod. Cupidatat duis aliqua cupidatat consectet",
      date: "24 avril 2024",
      stack: ["React", "Javascript", "Tailwind"],
      link: "",
    },
  ];
  return (
    <>
      {myData.map((item, index) => (
        <div key={index} className="mb-8 grid grid-cols-1 lg:grid-cols-3 ">
          <img src={item.imgUrl} alt={item.title} className="rounded-lg" />

          <div className="mb-4 col-span-2">
            <span className="font-light text-sm text-slate-800">
              {item.date}
            </span>
            <h3 className="font-medium text-md lg:my-3">{item.title}</h3>
            <p className="font-light text-sm mb-2">{item.extract}</p>
            <div className="flex flex-row flex-wrap">
              {item.stack.map((tech, index) => (
                <div
                  key={index}
                  className="border-2 px-2 py-2 mr-2 text-center rounded-md"
                >
                  {tech}
                </div>
              ))}
            </div>
            <button className="pt-4 lg:pt-8 text-[#7480FF]">Voir plus ↗</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectItem;
