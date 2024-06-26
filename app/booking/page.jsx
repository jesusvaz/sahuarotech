import Image from "next/image";
import Link from "next/link";
 import Bookkeping from "@/public/bookKepping.svg"


export default function Ecommerce() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1><i className="text-6xl">Booking</i></h1>
    
    <div>
    Investing in a software booking system is an indispensable step towards optimizing efficiency, streamlining operations, and ultimately, unlocking the full potential of your business. By embracing this innovative technology, you are not merely upgrading your booking process; you are revolutionizing it. Imagine a system where appointments are effortlessly managed, resources are allocated with precision, and customer satisfaction soars to new heights. With a software booking system, you are not just automating tasks; you are empowering your team to focus on what truly matters – delivering exceptional service and fostering meaningful connections with your clientele. Moreover, such a system offers unparalleled flexibility, allowing you to customize and adapt it to suit the unique needs of your business. In a world where time is of the essence, investing in a software booking system is not just an option; it is a strategic imperative for staying ahead of the curve and ensuring long-term success. </div>
      <Image
        src={Bookkeping}
        alt="Bookkepingg Logo"
        width={500}
        height={500}
        priority
      />
     
    </main>
  );
}