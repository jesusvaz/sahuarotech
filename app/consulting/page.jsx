import Image from "next/image";
import Link from "next/link";

import Consulting from "@/public/consulting.svg"

export default function Ecommerce() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <h1><i className="text-6xl">Consulting</i></h1>
    
    <div>
    Investing in a comprehensive software solution to manage documents is not just a wise decision for consulting firms; it's a strategic investment in delivering unparalleled service and fostering long-term client relationships. Imagine a platform where every piece of critical information, from client contracts to project documentation, is seamlessly organized and readily accessible at your fingertips. With a dedicated software system, you're not just managing documents; you're transforming your consultancy's operations, enhancing efficiency, and ensuring accuracy in every client interaction. From tracking project milestones to monitoring deliverables, the software empowers your team to stay on top of every aspect of client engagements, driving productivity and client satisfaction. Additionally, with features such as version control and secure access permissions, you can safeguard sensitive information and maintain confidentiality with ease. By investing in a software solution for document management, you're not only elevating the quality of service you provide but also positioning your consultancy for sustained success in a competitive market.
    </div>
      <Image
        src={Consulting}
        alt="Consulting Image"
        width={500}
        height={500}
        priority
      />
     
    </main>
  );
}