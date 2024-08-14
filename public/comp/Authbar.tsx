"use client"
import Image from "next/image"
import Remedic from "../comp/images/Remedic.png"




const Authbar = () => {

    return ( 
    <nav className="nav">
     <div className="logo"> 
        <Image 
        src={Remedic} 
        alt="Remedic" 
        width={100} 
        height={80}/>
      </div>
    </nav>
    );
}
 
export default Authbar;