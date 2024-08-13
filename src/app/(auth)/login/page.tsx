"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
// import { Metadata } from "next";
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, googleProvider, githubProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import styles from "../login/page.module.css";
// import { log } from "console";

// const metadata: Metadata = {
//   title: "Login",
// };

const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

 const logIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      router.push("/Bookings");
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/Bookings");
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGithub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      router.push("/Bookings");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginform}>
        <h2 className={styles.title}>Welcome to Remedic Health</h2>
        <p className={styles.loginpara}>Connecting the world to quality and subsidized healthcare</p>
        <div className={styles.providers}>
          <button className={styles.googleButton} onClick={signInWithGoogle}>
            Sign in with Google <FcGoogle className={styles.googleIcon} />
          </button>
          <button className={styles.githubButton} onClick={signInWithGithub}>
            Sign in with Github <FaGithub className={styles.githubIcon} />
          </button>
        </div>
        <input
          className={styles.input}
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} onClick={logIn}>
          Login
        </button>
      </div>
      <div>
        <p>Don't have an account? <Link href="/register">Register</Link></p> 
      </div>
    </div>
  );
};

export default Login;