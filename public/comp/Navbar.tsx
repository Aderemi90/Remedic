"use client";
import Image from "next/image";
import Link from "next/link";
import Remedic from "../comp/images/Remedic.png";
import { useEffect, useState } from "react";

const Navbar = () => {

   return (
      <nav className="nav">
         <div className="logo">
            <Image src={Remedic} alt="Remedic" width={100} height={80} />
         </div>
         <div className="navlist">
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Services">Services</Link>
            <Link href="/Contact">Contact</Link>
         </div>
      </nav>
   );
};

export default Navbar;
