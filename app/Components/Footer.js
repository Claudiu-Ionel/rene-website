import { socials } from "../data/data";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-footerColor p-4 flex justify-start">
      {socials.map(({ link, icon }) => (
        <a className="mx-1" href={link}>
          <Image src={icon} width="40" height="40" />
        </a>
      ))}
    </footer>
  );
}
