import Image from "next/image";
import Link from "next/link";
import Contactus from "@/public/contactus.svg";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <h1><i className="text-6xl">Contactus</i></h1>
      
      <div>
      At Sahuaro Tech, we understand the importance of convenience and accessibility in our client interactions. Whether you prefer the immediacy of a phone call, the face-to-face connection of a Zoom meeting, or the convenience of email correspondence, we offer multiple avenues for you to reach us and schedule appointments that suit your needs. Simply give us a call at <i>804-568-798 </i>to speak directly with one of our knowledgeable representatives. If you prefer a virtual meeting, you can schedule a Zoom appointment by visiting our website or sending us an email <i>contact@sahuaroTexh.com</i> Our team is here to assist you every step of the way, ensuring that you receive the personalized attention and support you deserve. Reach out to us today at Sahuaro Tech, and let start working together to turn your vision into reality.
      </div>
      <Image
        src={Contactus}
        alt="Contact image"
        width={500}
        height={500}
        priority
      />

    </main>
  );
}



