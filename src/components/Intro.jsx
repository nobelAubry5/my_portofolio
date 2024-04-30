import Image from "../assets/aubry.png";
const Intro = () => {
  return (
    <div>
      <div className="flex justify-start my-4">
        <img
          src={Image}
          alt="Aubry Nobel Niyonkuru"
          className="rounded-full border-4 border-[#7480FF] p-1 w-1/3 h-1/3 md:w-1/5 md:h-1/5"
        />
      </div>
      <h1 className="font-bold text-xl lg:text-3xl">Aubry Nobel Niyonkuru</h1>
      <p className="text-md mt-3 text-gray-900">
        Je réside à Québec, Je suis un développeur front-end. Je me passionne
        dans la conception d&apos;applications web modernes.
      </p>
      <button className="bg-[#7480FF] text-center py-3 px-4 rounded-lg my-4 text-white">
        <a href="mailto:nobelaubry5@gmail.com">Contactez-moi 📪</a>
      </button>
    </div>
  );
};

export default Intro;
