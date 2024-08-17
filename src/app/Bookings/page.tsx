"use client";

import React, { useState, FormEvent, useEffect } from "react";
import { auth } from "../config/firebase";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import "../styles/globals.css";

interface HospitalItem {
  id: number;
  name: string;
  address: string;
}

interface Doctor {
  id: number;
  name: string;
}

const doctors: Doctor[] = [
  { id: 1, name: "Dr. Ken Jigawa (cardiology)" },
  { id: 2, name: "Dr. Ben Shapiro (oncology)" },
  { id: 3, name: "Dr. Setemi Ojo (radiology)" },
  { id: 4, name: "Dr. Limit Less (cardiology)" },
  { id: 5, name: "Dr. Kayode Nwogbu (dermatology)" },
  { id: 6, name: "Dr. Ugo C. Ugo (pediatrics)" },
  { id: 7, name: "Dr. Ayomide Bashiru (orthopedics)" },
  { id: 8, name: "Dr. Remi Owolabi (oncology)" },
  { id: 9, name: "Dr. Dotun Ogunlana (psychiatry)" },
  { id: 10, name: "Dr. Omotola Adebusuyi (gynecology)" },
  { id: 11, name: "Dr. Olawale Yusuph (gynecology)" },
  { id: 12, name: "Dr. Ikechuckwu Ngbeme (urology)" },
];

const AppointmentForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [doctor, setDoctor] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [data, setData] = useState<HospitalItem[]>([]);
  const [hospital, setHospital] = useState<string>("");
  const [specialty, setSpecialty] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
 
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    fetch("https://api.reliancehmo.com/v3/providers")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(data.data);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log({
      name,
      email,
      phone,
      doctor,
      date,
      time,
    });

    alert("Appointment booked successfully!");

    setName("");
    setEmail("");
    setPhone("");
    setDoctor("");
    setDate("");
    setTime("");
    setHospital("");
    setSpecialty("");
    router.push("/");
  };

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading]);


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
          <label>Hospital:</label>
          <select
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
            required
            disabled={isLoading}
          >
            <option value="">
              {isLoading ? "Loading hospitals..." : "Pick preferred hospital"}
            </option>
            {!isLoading &&
              data.map((hospital) => (
                <option key={hospital.id} value={hospital.name}>
                  {hospital.name}
                </option>
              ))}
          </select>
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
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="specialty">Specialty</label>
          <select
            id="specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          >
            <option value="">Select a Specialty</option>
            <option value="cardiology">Cardiology</option>
            <option value="dermatology">Dermatology</option>
            <option value="neurology">Neurology</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="gynecology">Gynecology</option>
            <option value="oncology">Oncology</option>
            <option value="radiology">Radiology</option>
            <option value="psychiatry">Psychiatry</option>
            <option value="urology">Urology</option>
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

const Bookings: React.FC = () => {
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

export default Bookings;
