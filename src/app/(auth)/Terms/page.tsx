import React from 'react';
import Link from 'next/link';


const TermsAndConditions: React.FC = () => {
    
  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '30px 50px', border: '10px', marginBottom: "1rem" }} className='termscontainer'>
      <h1 className="titleh1" style={{ marginBottom: "1rem" }}>Terms and Conditions</h1>
      <p style={{ marginBottom: "1rem" }}><strong>Last Updated:</strong> [13th August 2024]</p>

      <h2 style={{ marginBottom: "1rem" }}>1. Acceptance of Terms</h2>
      <p style={{ marginBottom: "1rem" }}>
        By accessing or using our website, you agree to be legally bound by these terms and conditions. If you do not agree with any of these terms, please do not use our services.
      </p>

      <h2 style={{ marginBottom: "1rem" }}>2. Services</h2>
      <p style={{ marginBottom: "1rem" }}>
        Our website provides an online platform for booking appointments with healthcare providers. We facilitate the scheduling of appointments but are not responsible for the actual medical services provided.
      </p>

      <h2 style={{ marginBottom: "1rem" }}>3. User Responsibilities</h2>
      <p style={{ marginBottom: "1rem" }}><strong>Accuracy of Information:</strong> You agree to provide accurate and up-to-date information when booking an appointment. Any false or misleading information may result in cancellation of your appointment.</p>
      <p style={{ marginBottom: "1rem" }}><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account information, including your username and password. You are responsible for all activities that occur under your account.</p>
      <p style={{ marginBottom: "1rem" }}><strong>Compliance:</strong> You agree to use our services in compliance with all applicable laws and regulations.</p>

      <h2 style={{ marginBottom: "1rem" }}>4. Booking and Cancellation Policy</h2>
      <p style={{ marginBottom: "1rem" }}><strong>Booking:</strong> Appointments can be booked online through our platform. Once an appointment is confirmed, you will receive a confirmation email with the details.</p>
      <p style={{ marginBottom: "1rem" }}><strong>Cancellation:</strong> If you need to cancel or reschedule your appointment, please do so at least 24 hours in advance. Failure to cancel within this time frame may result in a cancellation fee.</p>

      <h2 style={{ marginBottom: "1rem" }}>5. Payment</h2>
      <p style={{ marginBottom: "1rem" }}><strong>Fees:</strong> Some services may require payment at the time of booking. The payment terms will be clearly stated during the booking process.</p>
      <p style={{ marginBottom: "1rem" }}><strong>Refunds:</strong> Refunds are subject to the cancellation policy of the respective healthcare provider and will be processed accordingly.</p>

      <h2 style={{ marginBottom: "1rem" }}>6. Limitation of Liability</h2>
      <p style={{ marginBottom: "1rem" }}><strong>No Guarantee:</strong> We do not guarantee the availability of any particular healthcare provider or service. All bookings are subject to availability.</p>
      <p style={{ marginBottom: "1rem" }}><strong>Medical Advice:</strong> The content on our website is for informational purposes only and is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
      <p style={{ marginBottom: "1rem" }}><strong>Liability:</strong> [Remedic Health] shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services.</p>

      <h2 style={{ marginBottom: "1rem" }}>7. Privacy</h2>
      <p style={{ marginBottom: "1rem" }}>
        Your privacy is important to us. Please review our <a href="/privacy-policy">Privacy Policy</a> to understand how we collect, use, and protect your personal information.
      </p>

      <h2 style={{ marginBottom: "1rem" }}>8. Changes to Terms</h2>
      <p style={{ marginBottom: "1rem" }}>
        We reserve the right to modify these terms and conditions at any time. Any changes will be effective immediately upon posting on this page. Your continued use of our services after any changes are made constitutes your acceptance of the new terms.
      </p>

      <h2 style={{ marginBottom: "1rem" }}>9. Governing Law</h2>
      <p style={{ marginBottom: "1rem" }}>
        These terms and conditions are governed by and construed in accordance with the laws of [Nigeria/Lagos], without regard to its conflict of law principles.
      </p>

      <h2 style={{ marginBottom: "1rem" }}>10. Contact Information</h2>
      <p>
        If you have any questions about these terms and conditions, please contact us at [info@remedic.com].
      </p>

      <p style={{ marginBottom: "1rem" }}>By using our website and services, you acknowledge that you have read, understood, and agreed to these terms and conditions.</p>

      <Link href="/" style={{ marginBottom: "1rem", textDecoration: "none"}}><button style={{ padding: "10px", borderRadius: "8px", background: "#007bff", color: "white", cursor: "pointer"}}>Home Page </button></Link>
    </div>
  );
};

export default TermsAndConditions;