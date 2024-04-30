import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
const Contact = () => {
  const contactData = [
    {
      name: "Courriel",
      icon: <SiGmail />,
      link: "mailto:nobelaubry5@gmail.com",
    },
    {
      name: "Github",
      icon: <SiGithub />,
      link: "https://github.com/nobelAubry5",
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin />,
      link: "https://www.linkedin.com/in/aubry-nobel-niyonkuru-3206ba233/",
    },
  ];
  return (
    <section
      className="my-8 flex flex-col md:flex-row gap-2 md:gap-9 col-reverse"
      id="contact"
    >
      <h2 className="font-medium text-lg mb-2 md:w-32 shrink-0">Contact</h2>
      {contactData.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-between border-2 border-[#7480FF] p-4 mb-2 rounded-lg hover:text-white hover:bg-[#7480FF] cursor-pointer"
        >
          <a href={item.link} className="flex items-center w-full">
            {" "}
            {/* Added className to anchor tag */}
            <div className="mr-2">{item.icon}</div>
            <div>{item.name}</div>
            <div className="ml-3">↗</div> {/* Moved arrow to the right */}
          </a>
        </div>
      ))}
    </section>
  );
};

export default Contact;
