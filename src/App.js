import React, { useState } from 'react';
import './index.css';

function RegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Full Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}`);
  }

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />

        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
