"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, googleProvider, githubProvider } from "../../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import styles from "../page.module.css";


const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

 const logIn = async () => {
    try {
      await signInWithEmailAndPassword( auth, email, password);
      sessionStorage.setItem("user", email);
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already in use. Please log in instead.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email format. Please check and try again.");
      } else if (err.code === "auth/weak-password") {
        setError("Password is too weak. Please choose a stronger password.");
      } else {
        setError("The user is not available. Please register.");
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGithub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginform}>
          <h2 className={styles.title}>Welcome to Remedic Health</h2>
          <p className={styles.loginpara}>
            Connecting the world to quality and subsidized healthcare
          </p>
          <div className={styles.providers}>
            <button className={styles.googleButton} onClick={signInWithGoogle}>
              Sign in with Google <FcGoogle className={styles.googleIcon} />
            </button>
            <button className={styles.googleButtonmobile} onClick={signInWithGoogle}>
              <FcGoogle className={styles.googleIcon} />
            </button>
            <button className={styles.githubButton} onClick={signInWithGithub}>
              Sign in with Github <FaGithub className={styles.githubIcon} />
            </button>
            <button className={styles.githubButtonmobile} onClick={signInWithGithub}>
              <FaGithub className={styles.githubIcon} />
            </button>
          </div>
          <input
            data-testid="cypress-email1"
            data-test="cypress-email"
            className={styles.input}
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            data-testid="cypress-password1"
            data-test="cypress-password"
            className={styles.input}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button data-testid="cypress-login1" data-test="cypress-login"style={{ borderRadius: "8px"}} className={styles.button} onClick={logIn}>
            Login
          </button>
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <div>
          <p style={{ padding: "0.5rem", marginTop: "0.5rem"}}>
            Don't have an account? <Link style={{ marginTop: "1rem",fontSize: "1.1rem", textDecoration: "none", color: "blue" }} href="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

