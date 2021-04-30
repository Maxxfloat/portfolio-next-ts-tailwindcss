import { IoLogoWhatsapp, IoIosCall } from "react-icons/io";
import { SiGmail } from "react-icons/si";

const ContactMe = () => {
  const list = [
    {
      logo: <IoIosCall className="" />,
      text: "0903 195 1624",
    },
    {
      logo: <IoLogoWhatsapp className="text-green-500" />,
      text: "0903 195 1624",
    },
    {
      logo: <SiGmail className="text-red-600" />,
      text: "tchandnofame@gamil.com",
    },
  ];
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index} className="my-2 flex items-center">
          <span className="inline-block ml-4 text-xl">{item.logo}</span>
          <p className="inline-block " dir="ltr">
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactMe;
