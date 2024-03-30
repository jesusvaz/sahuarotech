import Image from "next/image";
import Link from "next/link";
import Shopping from "@/public/shopping.svg"


export default function Ecommerce() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Ecommerce</h1>
      <div>
      Investing in a software e-commerce platform isn't just about setting up an online store; it's about unlocking a world of opportunities for your business. Imagine having a powerful tool at your fingertips that not only showcases your products or services but also seamlessly integrates with your operations, streamlining everything from inventory management to order fulfillment. With an e-commerce platform, you're not just reaching customers; you're captivating them with a personalized and immersive shopping experience that keeps them coming back for more. Plus, with the ability to work 24/7, your online store never sleeps, allowing you to engage with customers around the clock and drive sales even when your physical location is closed. From robust security measures that instill trust to advanced analytics that inform strategic decisions, an e-commerce platform empowers you to compete at the highest level in today's digital marketplace. Moreover, with the ability to scale and evolve alongside your business, investing in a software e-commerce platform isn't just a short-term solution; it's a strategic investment in the long-term success and sustainability of your brand.
      </div>
      <Image
        src={Shopping}
        alt="Shopping Logo"
        width={500}
        height={500}
        priority
      />

    </main>
  );
}
