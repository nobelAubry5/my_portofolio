const Intro = () => {
  return (
    <div>
      <div className="flex justify-start my-4">
        <img
          src="https://placehold.co/150x150"
          alt="Aubry Nobel Niyonkuru"
          className="rounded-full border-4 border-[#7480FF] p-1"
        />
      </div>
      <h1 className="font-bold text-xl lg:text-3xl">Aubry Nobel Niyonkuru</h1>
      <p className="text-md mt-3 text-gray-900">
        Je réside à Québec, Je suis un développeur front-end. Je me passionne
        dans la conception d&apos;applications web modernes.
      </p>
      <button className="bg-[#7480FF] text-center py-3 px-4 rounded-lg my-4 text-white">
        Contactez-moi 📪
      </button>
    </div>
  );
};

export default Intro;
