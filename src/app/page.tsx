"use client";

import Image from "next/image";
import styles from "./styles/page.module.css";
import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import { useEffect } from "react";

interface DataItem {
  id: number;
  name: string;
  address: string;
  phone_number: number;
  // completed: boolean;
}

const Home: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dataPerPage, setDataPerPage] = useState<number>(12);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

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

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const noOfPages = Math.ceil(filteredData.length / dataPerPage);
  const pages: number[] = Array.from({ length: noOfPages }, (_, i) => i + 1);
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const visibleData = filteredData.slice(indexOfFirstData, indexOfLastData);

  const nextPage = () => {
    if (currentPage < noOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <p className="hero p">
            We Believe Everyone Should Have Easy Access To Healthcare.
          </p>
          <Link href="/Appointment">
            <button className="hero button">Book an Appointment</button>
          </Link>
        </div>
        <Image
          src={"/comp/images/Homebg.jpg"}
          alt="background"
          layout="fill"
          objectFit="cover"
          className={styles.Homebg}
        />
      </div>
      <div className={styles.cardcontainer}>
        <div className={styles.card}>
          <img src={"/comp/images/Online.jpg"} alt="Online" />
          <div className={styles.cardcontent}>
            <h2>Online Doctor</h2>
            <p>
              Get medical advice, treatment, prescriptions, and refills in
              minutes. Talk to a doctor now.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={"/comp/images/Pharmacy.jpg"} alt="Pharmacy" />
          <div className={styles.cardcontent}>
            <h2>Pharmacy</h2>
            <p>We offer online pharmacy services.</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={"/comp/images/Emergency.jpg"} alt="Emergency" />
          <div className={styles.cardcontent}>
            <h2>Emergency Services</h2>
            <p>
              We offer 24/7 emergency services to help you save lives. Call us :
              0703-REMEDIC
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={"/comp/images/Surgery.jpg"} alt="Surgery" />
          <div className={styles.cardcontent}>
            <h2>Surgery</h2>
            <p>
              Our experienced and renowned surgeons and doctors can help you
              with your surgery.
            </p>
          </div>
        </div>
      </div>
      <div>
        <input
          className={styles.input}
          type="text"
          placeholder="Search by name, address or state"
          onChange={handleSearch}
        />
        <select
          onChange={(e) => setDataPerPage(Number(e.target.value))}
          value={dataPerPage}
        >
          <option value={12}>10</option>
          <option value={32}>30</option>
          <option value={52}>50</option>
        </select>
        <div>
          <h1>Hospital Search</h1>
          {isLoading && <div>Loading...</div>}
          <div className={styles.hospital_grid}>
            {visibleData.map((item) => (
              <div className={styles.hospital} key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.address}</p>
                <p>{item.phone_number}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}
            id={styles.hospital_pagination}
          >
            {page}
          </button>
        ))}
        <button
          onClick={nextPage}
          disabled={currentPage === noOfPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Home;
