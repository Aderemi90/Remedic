"use client"
import Image from "next/image"
import Link from "next/link"
import Remedic from "../comp/images/Remedic.png"
import { signOut } from "firebase/auth";
import { auth } from "../../src/app/config/firebase";


const AppointNavbar = () => {

    const logOut = async() => {
        try{
          await signOut(auth);
        } catch(err){
          console.error(err);
        }
      };

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
         <Link href="/">Home</Link>
         <Link href="/About">About</Link>
         <Link href="/Services">Services</Link>
         <Link href="/Contact">Contact</Link>
         <Link href="/login"><button onClick={logOut}>LogOut</button></Link>
      </div>
    </nav>
    );
}

export default AppointNavbar;