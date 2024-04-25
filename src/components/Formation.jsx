const Formation = () => {
  const dataFormation = [
    {
      formationName: "Technique d’intégration multimédia",
      duration: "2019-2024",
      schoolName: "Cégep de Sainte-Foy",
    },
  ];
  return (
    <section className="mt-6 flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
      <h2 className="font-medium text-lg mb-2 md:w-32 shrink-0">Formation</h2>
      {dataFormation.map((data, index) => (
        <div
          key={index}
          className="p-3 border border-[#7480FF] rounded-md w-full"
        >
          <h4 className="font-medium text-lg mb-1">{data.formationName}</h4>
          <p className="text-sm">{data.duration}</p>
          <p>{data.schoolName}</p>
        </div>
      ))}
    </section>
  );
};

export default Formation;
