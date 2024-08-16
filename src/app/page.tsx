"use client"
import Navbar from "../../public/comp/Navbar";
import "./styles/globals.css";
import Footer from "../../public/comp/Footer";
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

  const convertToCSV = (data: DataItem[]) => {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(","));

    for (const row of data) {
      const values = headers.map((header) => {
        const escaped = `${row[header as keyof DataItem]}`.replace(/"/g, '\\"');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(","));
    }

    return csvRows.join("\n");
  };

  const downloadCSV = () => {
    const csvData = convertToCSV(visibleData);
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "hospital_data.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const renderPageNumbers = () => {
    const maxPagesToShow = 5;
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
    let startPage = Math.max(currentPage - halfMaxPagesToShow, 1);
    let endPage = Math.min(currentPage + halfMaxPagesToShow, noOfPages);

   
    if (endPage - startPage < maxPagesToShow - 1) {
      if (startPage === 1) {
        endPage = Math.min(startPage + maxPagesToShow - 1, noOfPages);
      } else {
        startPage = Math.max(endPage - maxPagesToShow + 1, 1);
      }
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={i === currentPage ? "active" : ""}
          id={styles.hospital_pagination}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.hero}>
          <p className="hero p">
            We Believe Everyone Should Have Easy Access To Healthcare.
          </p>
          <Link href="/Bookings">
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
      <div className={styles.hospitalcontainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search by name, address or state"
          onChange={handleSearch}
        />
        <select
          onChange={(e) => setDataPerPage(Number(e.target.value))}
          value={dataPerPage} className={styles.inputselect}
        >
          <option value={12}>10</option>
          <option value={32}>30</option>
          <option value={52}>50</option>
        </select>
        <div>
          <h2 className={styles.hospitalh2}>Hospital Search</h2>
          {isLoading && <div>Loading...</div>}
          <div className={styles.hospital_grid}>
            {visibleData.map((item) => (
              <div className={styles.hospital} key={item.id}>
                <h2>{item.name}</h2>
                <p>Address: {item.address}</p>
                <p>Phone: {item.phone_number}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <button onClick={downloadCSV} className={styles.downloadButton}>
            Download CSV
          </button>
        </div>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={styles.hospital_paginationbutton}
        >
          Prev
        </button>
        {renderPageNumbers()}
        <button
          onClick={nextPage}
          disabled={currentPage === noOfPages}
          className={styles.hospital_paginationbutton}
        >
          Next
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;