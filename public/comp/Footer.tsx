import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import styles from "./Footer.module.css"

const Footer = () => {
    return (  
        <footer className={styles.footer}>
        <div className={styles.socials}>
          <Link href="https://www.facebook.com/RemedicHealth" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className={styles.icon}/>
          </Link>
          <Link href="https://www.twitter.com/RemedicHealth" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={styles.icon} />
          </Link>
          <Link href="https://www.instagram.com/RemedicHealth" target="_blank" rel="noopener noreferrer">
            < FaInstagram className={styles.icon} />
          </Link>
          <Link href="mailto:remoj2003@yahoo.com">
            < FaEnvelope   className={styles.icon} />
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/Terms">
            <div className={styles.link}>Terms and Conditions</div>
          </Link>

        </div>
        <p className={styles.copyright}>© {new Date().getFullYear()} Remedic Health. All rights reserved.</p>
      </footer>
    );
}
 
export default Footer;