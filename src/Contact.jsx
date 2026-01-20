import { useState } from "react";
import "./App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  
  // 1. NEW STATE: Track if message was sent successfully
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error as they type
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required!";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid!";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required!";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // 2. SUCCESS: No alert. Just set state to true.
      setIsSubmitted(true);
      console.log("Form Submitted:", formData);
      
      // Clear form
      setFormData({ name: "", email: "", message: "" });

      // Optional: Hide the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    // 3. CHECK: Ensure data-aos="zoom-in" is here
    <section id="contact" className="contact-section" data-aos="zoom-in">
      <h2>Contact Me</h2>
      <p>Let's build something amazing together.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error-input" : ""} 
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "error-input" : ""}
          ></textarea>
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>

        <button type="submit">Send Message</button>

        {/* 4. THE SUCCESS MESSAGE (Only shows if isSubmitted is true) */}
        {isSubmitted && (
          <div className="success-message">
            ✅ Message sent successfully! I'll get back to you soon.
          </div>
        )}

      </form>
    </section>
  );
};

export default Contact;