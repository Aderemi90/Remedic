"use client";

import React, { useState, FormEvent } from "react";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  AuthError,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../page.module.css";

const register: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const router = useRouter();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      phone,
      city,
      gender,
    });
    alert("Registration successful!");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;
      await sendEmailVerification(userCredential.user);
      await updateProfile(user, {
        displayName: firstName,
      });
      sessionStorage.setItem("user", email);
      router.push("/Bookings");
    } catch (err) {
      const firebaseError = err as AuthError;
      setError(firebaseError.message);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "1rem",
        border: "1px solid #ccc",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Hospital Registration</h2>
      <p style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
        Fill the form below to create an account in seconds and start bookings
        immediately.
      </p>
      <form onSubmit={handleRegister}>
        <div style={{ marginBottom: "1rem" }}>
          {" "}
          <label htmlFor="firstName">First name</label>{" "}
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />{" "}
        </div>{" "}
        <div style={{ marginBottom: "1rem" }}>
          {" "}
          <label htmlFor="lastName">Last name</label>{" "}
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />{" "}
        </div>{" "}
        <div style={{ marginBottom: "1rem" }}>
          {" "}
          <label htmlFor="Gender">Gender</label>{" "}
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          >
            {" "}
            <option value="pick">Select gender</option>{" "}
            <option value="Male">Male</option>{" "}
            <option value="Female">Female</option>{" "}
            <option value="Others">Others</option>{" "}
          </select>{" "}
        </div>{" "}
        <div style={{ marginBottom: "1rem" }}>
          {" "}
          <label htmlFor="email">Email</label>{" "}
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />{" "}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password">Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "0.5rem", paddingRight: "2rem" }}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}{" "}
             
            </span>
          </div>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "0.5rem", paddingRight: "2rem" }}
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {showConfirmPassword ? "👁️" : "👁️‍🗨️"}{" "}
              
            </span>
          </div>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          {" "}
          <label htmlFor="State">State</label>{" "}
          <input
            type="text"
            id="state"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />{" "}
        </div>{" "}
        <div style={{ marginBottom: "1rem" }}>
          {" "}
          <label htmlFor="phone">Phone Number</label>{" "}
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />{" "}
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button
          type="submit"
          style={{ padding: "0.5rem 1rem" }}
          className={styles.registerButton}
        >
          Register
        </button>
      </form>
      <div
        style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "1rem" }}
      >
        <p style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
          Have an account?{" "}
          <Link style={{ color: "blue", textDecoration: "none" }} href="/login">
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default register;
