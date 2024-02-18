import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ subsets: ['latin'] })

export const metadata = {
  title: "Parishway",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:fixed w-full top-0 bg-white">
          <Navbar />
        </div>{" "}
        {children}
        <div className="md:fixed bottom-0 w-full bg-white py-3">
          <Footer />
        </div>
      </body>
    </html>
  );
}
