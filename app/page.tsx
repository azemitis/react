"use client";

import { useState, ChangeEvent } from "react";

export default function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [experience, setExperience] = useState("");

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const handleExperienceChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setExperience(event.target.value);
    };

    return (
        <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
                <h2>CV</h2>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="nameInput">Name:</label>
                    <input
                        type="text"
                        id="nameInput"
                        value={name}
                        onChange={handleNameChange}
                        style={{
                            padding: "8px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            fontSize: "16px",
                            marginBottom: "10px"
                        }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="emailInput">Email:</label>
                    <input
                        type="email"
                        id="emailInput"
                        value={email}
                        onChange={handleEmailChange}
                        style={{
                            padding: "8px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            fontSize: "16px",
                            marginBottom: "10px"
                        }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="phoneInput">Phone:</label>
                    <input
                        type="tel"
                        id="phoneInput"
                        value={phone}
                        onChange={handlePhoneChange}
                        style={{
                            padding: "8px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            fontSize: "16px",
                            marginBottom: "10px"
                        }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="experienceInput">Experience:</label>
                    <textarea
                        id="experienceInput"
                        value={experience}
                        onChange={handleExperienceChange}
                        style={{
                            padding: "8px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            fontSize: "16px",
                            marginBottom: "10px",
                            height: "200px"
                        }}
                    />
                </div>
            </div>
            <div style={{ flex: 1, marginLeft: "20px" }}>
                <h2>CV Preview</h2>
                <div style={{ marginBottom: "10px" }}>
                    <strong>Name:</strong> {name}
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <strong>Email:</strong> {email}
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <strong>Phone:</strong> {phone}
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <strong>Experience:</strong> {experience}
                </div>
            </div>
        </div>
    );
}
