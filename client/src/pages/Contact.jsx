import "../css/contact.css";

import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    zip: "",
    emailAddress: "",
    phoneNumber: "",
    projectDetails: {
      interests: [],
      startDate: "",
      message: "",
    },
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const form = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProjectInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      projectDetails: {
        ...prevData.projectDetails,
        [name]: value,
      },
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      projectDetails: {
        ...prevData.projectDetails,
        interests: checked
          ? [...prevData.projectDetails.interests, name]
          : prevData.projectDetails.interests.filter(
              (interest) => interest !== name
            ),
      },
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "This is a required field.";
    if (!formData.lastName) formErrors.lastName = "This is a required field.";
    if (!formData.emailAddress)
      formErrors.emailAddress = "This is a required field.";
    return formErrors;
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      zip: "",
      emailAddress: "",
      phoneNumber: "",
      projectDetails: {
        interests: [],
        startDate: "",
        message: "",
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setSuccessMessage("");
    } else {
      sendEmail();
    }
  };

  const sendEmail = () => {
    emailjs
      .sendForm('service_3f4yeom', 'template_omro8cg', form.current, {
        publicKey: 'G9sm5COvR3LFCAZFb',
      })
      .then(
        () => {
          setSuccessMessage("Thank you for your message. We’ll respond shortly.");
          resetForm();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccessMessage("");
        },
      );
  };

  return (
    <div id="form-div">
      <form ref={form} onSubmit={handleSubmit}>
        <h2 className="heading">Contact Us</h2>
        <h3>Request A Callback</h3>
        <h6></h6>
        <label>
          <p>First Name</p>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && (
            <span style={{ color: "red" }}>{errors.firstName}</span>
          )}
        </label>
        <br />
        <label>
          <p>Last Name</p>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && (
            <span style={{ color: "red" }}>{errors.lastName}</span>
          )}
        </label>
        <br />
        <label>
          City
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          State
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Zip
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          <p>Email Address</p>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
          />
          {errors.emailAddress && (
            <span style={{ color: "red" }}>{errors.emailAddress}</span>
          )}
        </label>
        <br />
        <label>
          Phone Number
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <br />

        {/* Interests Section */}
        <h3>I'm Interested in:</h3>
        {[
          "Kitchen",
          "Bathroom",
          "Furniture",
          "Other"
        ].map((interest) => (
          <label className="container" key={interest}>
            <input
              type="checkbox"
              name='interest'
              checked={formData.projectDetails.interests.includes(interest)}
              onChange={handleCheckboxChange}
            />
            {interest}
            <span className="checkmark"></span>
          </label>
        ))}
        <br />

        {/* Project Start Date */}
        <label>
          When would you like to start your project?
          <input
            type="date"
            name="startDate"
            value={formData.projectDetails.startDate}
            onChange={handleProjectInputChange}
          />
        </label>
        <br />

        {/* Additional Notes */}
        <label>
          Message
          <textarea
            name="message"
            spellCheck="false"
            value={formData.projectDetails.message}
            onChange={handleProjectInputChange}
          />
        </label>
        <br />
        
        {/* Success Message */}
        {successMessage && (
          <div style={{ color: "#1d3503", marginBottom: "15px", fontWeight: "bold", fontSize: '20px' }}>
            {successMessage}
          </div>
        )}
        
        {/* Submit Button */}
        <button className="submit-btn" type="submit">
          Send
          <i className="bi bi-send-fill"></i>
        </button>
      </form>
    </div>
  );
};

export default Contact;