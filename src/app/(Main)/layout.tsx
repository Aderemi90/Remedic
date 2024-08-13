// import { Metadata } from "next";
import Navbar from "../../../public/comp/Navbar";
import Footer from "../../../public/comp/Footer";
import "../styles/globals.css";
import "../styles/page.module.css";
// import {Auth} from "./components/auth"

// export const metadata: Metadata = {
//   title: {
//     default: "Remedic",
//     template: "%s | Remedic",
//   },
//   description: "Powered by Remedic",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  );
}