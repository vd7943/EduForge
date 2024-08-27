import React from "react";
import "./Contact.css";

const Contact = () => {
  // using web3 form for this form submission
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "61d77ad7-06a1-41d0-98cd-fb915419ec45");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send me a message <img src="./msg-icon.png" alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src="./mail-icon.png" alt="" /> dalmiavishesh786@gmail.com
          </li>
          <li>
            <img src="./phone-icon.png" alt="" /> +91-9322824379
          </li>
          <li>
            <img src="./location-icon.png" alt="" /> 77 Massachusetts Ave, MA
            02139, United States
            <br />
            Time Square
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email id"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter you message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src="./white-arrow.png" alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
