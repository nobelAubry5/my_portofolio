const Experience = () => {
  const myExperience = [
    {
      imgUrl: "https://placehold.co/50x50",
      jobName: "Développeur front-end",
      jobDuration: "2024",
      jobEmployer: "Cégep de Sainte-Foy | Les Esprits Ardents",
    },
    {
      imgUrl: "https://placehold.co/50x50",
      jobName: "Développeur front-end",
      jobDuration: "2022",
      jobEmployer: "Kiwi Technologies",
    },
  ];
  return (
    <div className="mt-6 flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
      <h2 className="font-medium text-lg mb-2 md:w-32 shrink-0">Expériences</h2>
      <div>
        {myExperience.map((item, index) => (
          <div key={index} className="flex flex-row items-center mb-7">
            <div className="flex-shrink-0">
              <img
                src={item.imgUrl}
                alt={item.jobName}
                className="rounded-full" // Adjust width and height as needed
              />
            </div>
            <div className="ml-2">
              <div className="font-medium">{item.jobName}</div>
              <div className="text-sm">{item.jobDuration}</div>
              <p className="text-sm">{item.jobEmployer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
