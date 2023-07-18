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
        <div>
            <div>
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
                <span>{name}</span>
            </div>
            <div>
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
                <span>{email}</span>
            </div>
            <div>
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
                <span>{phone}</span>
            </div>
            <div>
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
                        marginBottom: "10px"
                    }}
                />
                <span>{experience}</span>
            </div>
        </div>
    );
}
