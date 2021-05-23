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
    },
  ];
  return (
    <ul>
      {list.map((i) => (
        <li>
          <sapn></sapn>
        </li>
      ))}
    </ul>
  );
};

export default ContactMe;
