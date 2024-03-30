import Image from "next/image";
import Link from "next/link";
import About from "@/public/about.svg"


export default function Ecommerce() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1><i className="text-6xl">About us</i></h1>
      <div>
      At Sahuaro Tech, we are committed to making a meaningful impact on the community by providing innovative services that enhance accessibility and readability for all. Our mission is rooted in the belief that technology should empower individuals of all abilities to access information and participate fully in society. Through our cutting-edge software solutions, we strive to break down barriers and create inclusive experiences for everyone. Whether it is developing tools to improve website accessibility, creating user-friendly interfaces for applications, or implementing language simplification techniques to enhance readability, we are dedicated to championing accessibility and fostering a more inclusive world. At Sahuaro Tech, we do not just write code; we write solutions that transform lives and empower communities to thrive. Join us in our mission to build a more accessible and inclusive future for all.
      </div>
      <Image
        src={About}
        alt="About image"
        width={500}
        height={500}
        priority
      />

    </main>
  );
}


