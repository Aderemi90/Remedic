"use client";

import { Metadata } from "next";
import React, { useState, ChangeEvent, FormEvent } from "react";

const metadata: Metadata = {
  title: "Contact",
};

const contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  const handleStateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to the server or display a message
    console.log("Form submitted:", {
      name,
      title,
      email,
      phone,
      city,
      state,
      message,
    });
    // Reset form fields
    setName("");
    setTitle("");
    setPhone("");
    setCity("");
    setState("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="contact-us">
        <h1>Contact Us</h1>
        <p>
          We would love to hear from you! Please fill out the form to help us
          know who to put you in touch with and someone from our team will get
          back to you soon.
        </p>
        <p>
          <strong>Are you a patient?</strong> Direct contact information can be
          found under Billing Questions. Please do not include personal health
          information in any forms or emails.
        </p>
      </div>
      <div className="contact-us-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
            required
          />
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={handleStateChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <div className="contact-details">
          <div className="contact-info">
            <h2>Our Address</h2>
            <p>123 Cole Palmer St, Wellness City, Lagos</p>
            <h2>Email</h2>
            <p>info@remedic.com</p>
            <h2>Phone</h2>
            <p>0703-REMEDIC</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
