"use client";
import { Metadata } from "next";
import React, { useState, FormEvent } from "react";

 const metadata: Metadata = {
  title: "Appointment",
};

interface Doctor {
  id: number;
  name: string;
}

const doctors: Doctor[] = [
  { id: 1, name: "Dr. John Doe" },
  { id: 2, name: "Dr. Jane Smith" },
  { id: 3, name: "Dr. Sam Brown" },
];

const AppointmentForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [doctor, setDoctor] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission, such as sending the data to a backend server
    console.log({
      name,
      email,
      phone,
      doctor,
      date,
      time,
    });
    alert("Appointment booked successfully!");
  };

  return (
    <div className="appointment-form">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Doctor:</label>
          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            required
          >
            <option value="">Select a Doctor</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.name}>
                {doc.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

const appointment: React.FC = () => {
  return (
    <div className="appointment-page">
      <h2>Appointment page</h2>
      <p>
        Kindly fill the form below to schedule an appointment with your
        preferred physician. Note that it is subject to approval based on the
        available time slot. For more enquiries: Please call any of the numbers
        below or send an email.
      </p>
      <AppointmentForm />
    </div>
  );
};

export default appointment;
