import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
const Contact = () => {
  const contactData = [
    {
      name: "Courriel",
      icon: <SiGmail />,
    },
    {
      name: "Github",
      icon: <SiGithub />,
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin />,
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
          <div className="flex items-center">
            <div className="mr-2">{item.icon}</div>
            <div>{item.name}</div>
          </div>
          <div className="ml-2">↗</div>
        </div>
      ))}
    </section>
  );
};

export default Contact;
