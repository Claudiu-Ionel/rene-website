import { socials } from "../data/data";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-footerColor p-4 flex justify-center">
      {socials.map(({ link, icon }) => (
        <a href={link}>
          <Image src={icon} width="40" height="40" />
        </a>
      ))}
    </footer>
  );
}
