import { useState } from "react";

import "./Contact.css";

const offices = [
  {
    city: "Zurich",
    address: "Seestrasse 21, Zurich",
    email: "biagiottitheme@gmail.com",
    phone: "+ 99 411 725 39 12",
  },
  {
    city: "Paris",
    address: "Rue Vieille Du Temple, Paris",
    email: "biagiottitheme@gmail.com",
    phone: "+ 99 411 725 39 12",
  },
  {
    city: "London",
    address: "191 Victoria Street, London",
    email: "biagiottitheme@gmail.com",
    phone: "+ 99 411 725 39 12",
  },
  {
    city: "Milano",
    address: "72 Via Montena, Milano",
    email: "biagiottitheme@gmail.com",
    phone: "+ 99 411 725 39 12",
  },
];

function ContactUs() {
  const [formData, setFormData] = useState({
    email: "",
    comment: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: connect to backend / email service
    console.log("Contact form submitted:", formData);

    setSubmitted(true);
    setFormData({ email: "", comment: "" });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="contact-us">
      {/* Offices Row */}
      <div className="offices-row">
        {offices.map((office) => (
          <div className="office-item" key={office.city}>
            <h3>{office.city}</h3>
            <p>Address: {office.address}</p>
            <p>E-mail: {office.email}</p>
            <p>Phone : {office.phone}</p>
          </div>
        ))}
      </div>

      {/* Form + Map */}
      <div className="contact-split">
        {/* Form Side */}
        <div className="contact-form-side">
          <div className="floral-decoration" aria-hidden="true">
            <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M40 480 C 60 380, 30 300, 70 220 C 100 160, 60 100, 90 40"
                fill="none"
                stroke="#f2d9d3"
                strokeWidth="2"
              />
              <ellipse cx="95" cy="150" rx="22" ry="10" fill="none" stroke="#f2d9d3" strokeWidth="2" transform="rotate(30 95 150)" />
              <ellipse cx="60" cy="210" rx="22" ry="10" fill="none" stroke="#f2d9d3" strokeWidth="2" transform="rotate(-20 60 210)" />
              <ellipse cx="100" cy="270" rx="22" ry="10" fill="none" stroke="#f2d9d3" strokeWidth="2" transform="rotate(40 100 270)" />
              <ellipse cx="55" cy="340" rx="22" ry="10" fill="none" stroke="#f2d9d3" strokeWidth="2" transform="rotate(-30 55 340)" />
              <ellipse cx="95" cy="410" rx="26" ry="12" fill="none" stroke="#f2d9d3" strokeWidth="2" transform="rotate(25 95 410)" />
              <circle cx="70" cy="460" r="10" fill="none" stroke="#f2d9d3" strokeWidth="2" />
            </svg>
          </div>

          <span className="script-text">perfect shades</span>

          <h2>Ask Us Anything</h2>

          <p className="contact-lead">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="comment"
                placeholder="Your comment"
                rows={8}
                value={formData.comment}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send
            </button>

            {submitted && (
              <p className="form-success">
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>

        {/* Map Side */}
        <div className="contact-map-side">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps?q=New+York&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;