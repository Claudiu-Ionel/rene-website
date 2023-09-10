"use client";

import { useContext } from "react";
import { AppContext } from "../layout";

export default function Contact() {
  const { englishVersion } = useContext(AppContext);
  return (
    <div className="w-full bg-white flex flex-col items-center">
      <div className="w-full bg-white px-8 py-6 h-[128px] ipadAir:hidden"></div>
      <h2 className="w-1/3 font-primary text-3xl my-10 sm:w-full text-center">
        {englishVersion ? "Contact me:" : "Kontakt mig:"}
      </h2>
      <div className="w-full flex justify-evenly ipadAir:flex-col">
        <div className="w-1/3 ipadAir:w-full ipadAir:px-5 mb-5 text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget auctor augue. Sed justo risus, tristique ut magna a,
            ullamcorper consequat eros. Donec sodales ex vel leo molestie
            consequat. Donec arcu tellus, vulputate porta tortor ac, porta
            semper lacus. Pellentesque sed justo elementum, condimentum felis
            vel, tempus mi. Fusce convallis tincidunt posuere. Integer dui urna,
            tincidunt eu vulputate ac, luctus ac leo. Mauris laoreet ante vitae
            imperdiet dignissim. Sed ultricies vestibulum ante. Aliquam est
            neque, tempor mollis semper at, fringilla quis arcu.
          </p>
        </div>
        <form className="w-1/3 ipadAir:w-full ipadAir:px-5 flex flex-col items-center [&>label]:w-full [&>label]:font-secondary [&>input]:w-full [&>input]:bg-backgroundColor/25 [&>input]:rounded-md [&>input]:p-2 [&>input]:mb-4 [&>input]:font-secondary">
          <label for="userName">{englishVersion ? "Name:" : "Navn:"}</label>
          <input type="text" name="userName" required></input>

          <label for="userEmail" required>
            E-mail:
          </label>
          <input type="email" name="userEmail"></input>

          <label for="subject">{englishVersion ? "Subject" : "Emne:"}</label>
          <input type="text" name="subject"></input>

          <label for="message">{englishVersion ? "Message:" : "Besked:"}</label>
          <textarea
            name="message"
            className="bg-backgroundColor/25 rounded-md p-2 font-secondary w-full"
            rows="20"
            cols="10"
          ></textarea>
          <button className="m-5 font-secondary border-solid border-backgroundColor border-2 rounded-md p-5 w-1/4">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
