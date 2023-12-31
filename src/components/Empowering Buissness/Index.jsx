import React, { useState } from "react";
import styles from "./Index.module.css";
import { BiRightArrowCircle } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
const Index = () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    const emailData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const response = await fetch("https://stsdesigns.co/api/mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        let result = await response.json();
        console.log(result.message);
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.mainContainer} id="empowering-buisness">
      <div className={styles.leftHandContainer}>
        <div className={styles.mainHeading}>
          <h1>
            Welcome to <span>STS designs</span>
          </h1>
        </div>
        <div className={styles.importantPoints}>
          <h3>
            Your gateway to mesmerizing overlays and dynamic animations. Opt for
            us to experience top-notch quality, speedy delivery, competitive
            rates, and a team driven by design excellence. We Offer:
          </h3>
        </div>
        <div className={styles.checkPoints}>
          <div className={styles.checkpointNumbers}>
            <BiRightArrowCircle className={styles.rightArrow} />
            <h2>Unparalleled Quality</h2>
          </div>
          <div className={styles.checkpointNumbers}>
            <BiRightArrowCircle className={styles.rightArrow} />
            <h2>Swift Delivery</h2>
          </div>
          <div className={styles.checkpointNumbers}>
            <BiRightArrowCircle className={styles.rightArrow} />
            <h2>Competitive Pricing</h2>
          </div>
          <div className={styles.checkpointNumbers}>
            <BiRightArrowCircle className={styles.rightArrow} />
            <h2>Dedicated Experts</h2>
          </div>
        </div>
        <div className={styles.empowerButtons}>
          <button>GET STARTED</button>
          <button>CHAT WITH US</button>
        </div>
      </div>
      <div id="quote" className={styles.rightHandContainer}>
        <div className={styles.formHeadings}>
          <h3>Lets Get Started</h3>
          <h1>Avail Upto 30% Discount</h1>
        </div>
        <form action="" onSubmit={submit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="4"
            placeholder="Enter Your Messages"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">LETS GET STARTED</button>
        </form>
      </div>
    </div>
  );
};

export default Index;
