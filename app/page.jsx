import Image from "next/image";
import Link from "next/link";
import Shopping from "@/public/shopping.svg"
import Bookkeping from "@/public/bookKepping.svg"
import Legal from "@/public/legal.svg"
import Consulting from "@/public/consulting.svg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Launch your online presence at lightning speed with our rapid development&nbsp;

        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
     
            rel="noopener noreferrer"
          >
            By{" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
              <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="gray" />
              <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="20" fill="black">ST</text>
            </svg>
            
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div>  <i className="text-8xl">Sahuaro Tech</i></div>

      </div>


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/ecomerce"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
       
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            E-commerce Store{" "}

          </h2>
          <p >
            Create an online platform for businesses to sell their products or services.
          </p>
        </Link>

        <Link
          href="/booking"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Booking System{" "}

          </h2>
          <p >
            Develop a website that allows customers to book appointments, reservations, or services online, such as for restaurants, salons, or medical offices.
           

          </p>
        </Link>

        <Link
          href="/legal"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Legal Services{" "}

          </h2>
          <p>
            Develop a website for law firms or individual lawyers to present their services, expertise, and contact information.
           
          </p>
        </Link>

        <Link
          href="/consulting"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Consulting Services{" "}

          </h2>
          <p>
            Develop a website for consultants in various fields such as marketing, HR, or management to showcase expertise, case studies, and client testimonials.
            
          </p>
        </Link>
      </div>
    </main>
  );
}
