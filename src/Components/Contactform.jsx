import React, { useState } from "react";
import "./Contactform.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        gymname: "",
        location: "",
        name: "",
        contact: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form data submitted: ", formData);
    };

    return (
        <div className="contact-form-container">
            <div className="contact-form-left">
                <h1>WANT TO INSTALL FITSNAP AI CAMERA IN YOUR GYM?</h1>
                <p>Please Submit Your Details Below.</p>
            </div>
            <div className="contact-form-right">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="gymname"
                            placeholder="Name of Gym"
                            value={formData.gymname}
                            onChange={handleChange}
                            required
                        />
                        <label>Name of Gym</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                        <label>Location</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <label>Your Name</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="contact"
                            placeholder="Contact"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                        />
                        <label>Contact</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="E-Mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label>E-Mail</label>
                    </div>
                    <button type="submit" className="contact-btn">
                        Contact Us
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
