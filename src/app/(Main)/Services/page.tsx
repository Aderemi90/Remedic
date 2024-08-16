import { Metadata } from "next"
import { FC } from "react";

const metadata: Metadata = {
  title: 'Services',
};





const Services: FC = () => {
  return (
    <>
      <div style={{ textAlign: 'left', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ marginBottom: '15px' }}>Hospital Services</h1>
      </div>

      <div style={{ maxWidth: '800px', marginLeft: '50px', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ marginBottom: '10px' }}>1. Outpatient Services</h2>
          <p style={{ marginBottom: '10px' }}>
            Our outpatient services cater to patients who do not require overnight hospitalization. You can book appointments for consultations, routine check-ups, diagnostic tests, and minor procedures.
          </p>
          <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
            <li>General Medicine</li>
            <li>Pediatrics</li>
            <li>Dermatology</li>
            <li>ENT (Ear, Nose, and Throat)</li>
            <li>Ophthalmology (Eye Care)</li>
            <li>Gynecology</li>
            <li>Psychiatry</li>
            <li>Orthopedics</li>
          </ul>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{  marginBottom: '10px' }}>2. Inpatient Services</h2>
          <p style={{ marginBottom: '10px' }}>
            We offer comprehensive inpatient care for patients who need hospitalization. Our facilities are equipped with state-of-the-art medical technology, ensuring high-quality care during your stay.
          </p>
          <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
            <li>General Surgery</li>
            <li>Maternity and Childbirth</li>
            <li>Intensive Care Unit (ICU)</li>
            <li>Cardiology and Heart Surgery</li>
            <li>Neurology and Neurosurgery</li>
            <li>Orthopedic Surgery</li>
            <li>Oncology (Cancer Treatment)</li>
            <li>Rehabilitation Services</li>
          </ul>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{  marginBottom: '10px' }}>3. Emergency Services</h2>
          <p style={{ marginBottom: '10px' }}>
            Our emergency department is open 24/7, staffed by highly trained medical professionals ready to handle any medical emergency. We provide rapid response and immediate care for all critical conditions.
          </p>
          <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
            <li>Trauma Care</li>
            <li>Heart Attack and Stroke Management</li>
            <li>Respiratory Emergencies</li>
            <li>Severe Infections</li>
            <li>Poisoning and Overdose Management</li>
          </ul>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ marginBottom: '10px' }}>4. Diagnostic Services</h2>
          <p style={{ marginBottom: '10px' }}>
            Accurate diagnosis is the foundation of effective treatment. Our diagnostic department is equipped with the latest technology to provide quick and precise results.
          </p>
          <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
            <li>Medical Imaging (X-ray, MRI, CT Scan)</li>
            <li>Ultrasound and Echocardiogram</li>
            <li>Pathology and Lab Tests</li>
            <li>Endoscopy and Colonoscopy</li>
            <li>ECG and Stress Tests</li>
          </ul>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{  marginBottom: '10px' }}>5. Surgical Services</h2>
          <p style={{ marginBottom: '10px' }}>
            Our surgical department offers a full range of surgical procedures, from minimally invasive surgeries to complex operations, performed by experienced surgeons.
          </p>
          <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
            <li>General Surgery (Appendectomy, Gallbladder Removal)</li>
            <li>Laparoscopic Surgery</li>
            <li>Cardiac Surgery</li>
            <li>Neurosurgery</li>
            <li>Orthopedic Surgery (Joint Replacement, Spine Surgery)</li>
            <li>Plastic and Reconstructive Surgery</li>
          </ul>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ marginBottom: '10px' }}>6. Maternity and Child Care</h2>
          <p style={{ marginBottom: '10px' }}>
            We provide comprehensive maternity care from pre-pregnancy counseling to postnatal care. Our pediatric department also offers specialized care for infants and children.
          </p>
          <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
            <li>Antenatal Care</li>
            <li>Delivery and Postnatal Care</li>
            <li>Neonatal Intensive Care Unit (NICU)</li>
            <li>Pediatric Consultations</li>
            <li>Vaccination Programs</li>
          </ul>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{  marginBottom: '10px' }}>7. Specialized Clinics</h2>
          <p style={{ marginBottom: '10px' }}>
            Our hospital offers specialized clinics for chronic conditions and specific medical needs, ensuring expert care in a focused environment.
          </p>
          <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
            <li>Diabetes and Endocrinology</li>
            <li>Pain Management Clinic</li>
            <li>Cardiology Clinic</li>
            <li>Sleep Disorder Clinic</li>
            <li>Geriatric Care (Elderly Care)</li>
            <li>Weight Loss and Nutrition Counseling</li>
          </ul>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{  marginBottom: '10px' }}>8. Preventive Health Checkups</h2>
          <p style={{ marginBottom: '10px' }}>
            We believe in the importance of prevention. Our health checkup packages are designed to detect health issues early, allowing for timely intervention.
          </p>
          <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
            <li>Executive Health Checkup</li>
            <li>Women’s Health Checkup</li>
            <li>Cardiac Health Checkup</li>
            <li>Diabetes Screening</li>
            <li>Cancer Screening</li>
          </ul>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{  marginBottom: '10px' }}>9. Telemedicine Services</h2>
          <p style={{ marginBottom: '10px' }}>
            Access quality healthcare from the comfort of your home with our telemedicine services. Book virtual consultations with our specialists and receive expert advice remotely.
          </p>
          <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
            <li>Online Consultations</li>
            <li>Follow-up Appointments</li>
            <li>Second Opinion Services</li>
            <li>Prescription Refills</li>
          </ul>
        </section>

        <section style={{ marginBottom: '20px' }}>
          <h2 style={{  marginBottom: '10px' }}>10. Pharmacy Services</h2>
          <p style={{ marginBottom: '10px' }}>
            Our in-house pharmacy is open 24/7, offering a wide range of medications, health products, and consultation with licensed pharmacists.
          </p>
          <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
            <li>Prescription Medications</li>
            <li>Over-the-Counter Drugs</li>
            <li>Health Supplements</li>
            <li>Home Delivery of Medicines</li>
            <li>Medication Counseling</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Services;
