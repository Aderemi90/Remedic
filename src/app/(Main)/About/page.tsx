import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About',
};

import React from 'react';

const about: React.FC = () => {
  return (
    <div className="about-us" style={{fontFamily: 'Arial, sans-serif'}}>
      <h1 style={{ marginBottom: '15px' }}>About Us</h1><br/>
      <section className="mission">
        <h2 style={{ marginBottom: '15px' }}>Our Mission</h2>
        <p>
          Our mission is to provide high-quality healthcare services to our community. We strive to offer personalized and compassionate care to each of our patients.
        </p>
      </section>
      <section className="values" >
        <h2 style={{ marginBottom: '15px' }}>Our Values</h2>
        <ul>
          <li>Compassion: We treat each patient with empathy and understanding.</li>
          <li>Excellence: We are committed to maintaining the highest standards in healthcare.</li>
          <li>Integrity: We operate with honesty and transparency in all our actions.</li>
          <li>Collaboration: We work together as a team to achieve the best outcomes for our patients.</li>
        </ul>
      </section>
      <section className="team">
        <h2 style={{ marginBottom: '15px' }}>Meet Our Team</h2>
        <p style={{ marginBottom: '10px' }}>
          Our team of dedicated professionals includes experienced doctors, nurses, and support staff who are all committed to providing exceptional care.
        </p>
        <ul>
          <li>Dr. John Doe - Chief Medical Officer</li>
          <li>Dr. Jane Smith - Head of Pediatrics</li>
          <li>Dr. Sam Brown - Head of Cardiology</li>
          <li>Dr. Lisa White - Head of Surgery</li>
        </ul>
      </section>
    </div>
  );
};



export default about;