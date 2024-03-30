import { Rubik } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav/NavBar/page";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Sahuaro Tech",
  description: "Create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={rubik.className}>
        <NavBar />
        {children}
      </body>

    </html>
  );
}
