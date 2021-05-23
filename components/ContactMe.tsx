<<<<<<< HEAD
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";

const ContactMe = () => {
  let list: { logo: JSX.Element; text: string }[] = [
    {
      logo: <IoLogoWhatsapp />,
      text: "0903 195 1624",
    },
    {
      logo: <SiGmail />,
      text: "tchandnofame@gmail.com",
=======
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
>>>>>>> 7213bb1404f9f5d10953ec5a79f3f888e0b73102
    },
  ];
  return (
    <ul>
<<<<<<< HEAD
      {list.map((i) => (
        <li>
          <sapn></sapn>
=======
      {list.map((item, index) => (
        <li key={index} className="my-2 flex items-center">
          <span className="inline-block ml-4 text-xl">{item.logo}</span>
          <a className="inline-block " dir="ltr" href={item.href}>
            {item.text}
          </a>
>>>>>>> 7213bb1404f9f5d10953ec5a79f3f888e0b73102
        </li>
      ))}
    </ul>
  );
};

export default ContactMe;
