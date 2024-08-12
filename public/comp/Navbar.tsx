"use client"
import Image from "next/image"
import Link from "next/link"
import Remedic from "../comp/images/Remedic.png"
// import { UserButton, useUser } from "@clerk/nextjs";
// import {
//    SignInButton,
//    SignedIn,
//    SignedOut,
//  } from '@clerk/nextjs'

const Navbar = () => {
      // const {user, isLoaded} = useUser()
    return ( 
    <nav className="nav">
     <div className="logo"> 
        <Image 
        src={Remedic} 
        alt="Remedic" 
        width={100} 
        height={80}/>
      </div>
      <div className="navlist">
         {/* {isLoaded && user && <Link href="/">Home</Link>} */}
         <Link href="/">Home</Link>
         <Link href="/About">About</Link>
         <Link href="/Services">Services</Link>
         <Link href="/Contact">Contact</Link>
         {/* <SignedOut>
            <SignInButton />
         </SignedOut>
         <SignedIn>
            <UserButton/>
         </SignedIn> */}
      </div>

    </nav>
    );
}
 
export default Navbar;