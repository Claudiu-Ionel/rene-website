"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { AppContext } from "../layout";
import { send } from "@emailjs/browser";

export default function Contact() {
  // lang switch:
  const { englishVersion } = useContext(AppContext);
  // Email JS functionality:

  // Handling the user input:
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [msg, setMsg] = useState("");

  // Grabbing user's input:
  const handleSenderName = (e) => {
    setSenderName(e.target.value);
  };
  const handleSenderEmail = (e) => {
    setSenderEmail(e.target.value);
  };
  const handleMsg = (e) => {
    setMsg(e.target.value);
  };

  // Sending mail via EmailJS:
  const sendEmail = (e) => {
    e.preventDefault();

    send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      { senderName, senderEmail, msg },
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    ).then(
      (result) => {
        console.log(result.text);
        alert("Your message has been sent!");
      },
      (error) => {
        console.log(error.text);
        alert("Sending error");
      }
    );
  };

  return (
    <div className="w-full bg-white flex flex-col items-center">
      <div className="w-full bg-white px-8 py-6 h-[128px] ipadAir:hidden"></div>
      <h2 className="w-1/3 font-primary text-3xl my-10 sm:w-full text-center">
        {englishVersion ? "Contact me:" : "Kontakt mig:"}
      </h2>
      <div className="w-full flex justify-evenly ipadAir:flex-col font-secondary text-xl">
        <div className="w-[30%] ipadAir:w-full text-justify flex flex-col items-center">
          <p className={"px-6" + (!englishVersion ? " block" : " hidden")}>
            For henvendelser, smid mig en besked i kontaktformularen og jeg vil
            vende tilbage hurtigst muligt.
          </p>
          <p className={"px-5" + (englishVersion ? " block" : " hidden")}>
            For enquiries, drop me a message in the contact form and I will get
            back to you as soon as possible.
          </p>
          <Image
            src="/Contactme.jpg"
            alt="Julius Rene Leo"
            width="450"
            height="300"
            className="object-contain my-3"
            priority={true}
          />
        </div>

        <form
          className="w-[30%] ipadAir:w-full ipadAir:px-5 flex flex-col items-center [&>label]:w-full [&>label]:font-secondary [&>input]:w-full [&>input]:bg-backgroundColor/25 [&>input]:rounded-md [&>input]:p-2 [&>input]:mb-4 [&>input]:font-secondary"
          onSubmit={sendEmail}
        >
          <label htmlFor="sender_name">
            {englishVersion ? "Name:" : "Navn:"}
          </label>
          <input
            type="text"
            name="sender_name"
            required
            value={senderName}
            onChange={handleSenderName}
          ></input>

          <label htmlFor="sender_email">E-mail:</label>
          <input
            type="email"
            name="sender_email"
            required
            value={senderEmail}
            onChange={handleSenderEmail}
          ></input>

          <label htmlFor="subject">
            {englishVersion ? "Subject" : "Emne:"}
          </label>
          <input type="text" name="subject"></input>

          <label htmlFor="message">
            {englishVersion ? "Message:" : "Besked:"}
          </label>
          <textarea
            name="message"
            className="bg-backgroundColor/25 rounded-md p-2 font-secondary w-full"
            rows="17"
            cols="10"
            required
            value={msg}
            onChange={handleMsg}
          ></textarea>
          <button className="m-5 font-secondary border-solid border-backgroundColor border-2 rounded-md p-5 w-1/4">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
