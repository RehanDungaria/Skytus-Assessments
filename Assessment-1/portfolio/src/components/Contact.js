import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      alert("Please fill all fields");
    } else {
      alert("Message Sent Successfully");
    }
  };

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />

        <textarea
          placeholder="Message"
          name="message"
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;