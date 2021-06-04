import { IoLogoWhatsapp, IoIosCall } from "react-icons/io";
import { SiGmail } from "react-icons/si";

const ContactMe = () => {
  const list = [
    {
      logo: <IoIosCall className="" />,
      text: "0903 195 1624",
      href: "tel:0903-195-1624",
    },
    {
      logo: <IoLogoWhatsapp className="text-green-500" />,
      text: "0903 195 1624",
    },
    {
      logo: <SiGmail className="text-red-600" />,
      text: "tchandnofame@gamil.com",
      href: "mailto:tchandnofame@gamil.com",
    },
  ];
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index} className="my-2 flex items-center justify-end">
          <a className="inline-block" dir="ltr" href={item.href}>
            {item.text}
          </a>
          <span className="inline-block mr-4 text-xl">{item.logo}</span>
        </li>
      ))}
    </ul>
  );
};

export default ContactMe;
