"use client";

import {useState, ChangeEvent} from "react";
import IconButton from './IconButton';

// noinspection JSUnusedGlobalSymbols
export default function Home() {
    const [name, setName] = useState("");
    const [profession, setProfession] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [profile, setProfile] = useState("");
    const [experiences, setExperiences] = useState([
        {title: "", company: "", date: "", description: ""},
    ]);

    type Experience = {
        title: string;
        company: string;
        date: string;
        description: string;
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleProfessionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProfession(event.target.value);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const handleProfileChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setProfile(event.target.value);
    };

    const handleExperienceChange = (
        index: number,
        key: keyof Experience,
        value: string
    ) => {
        setExperiences((prevExperiences) => {
            const newExperiences = [...prevExperiences];
            newExperiences[index] = {
                ...newExperiences[index],
                [key]: value,
            };
            return newExperiences;
        });
    };

    const handleAddExperience = () => {
        setExperiences((prevExperiences) => [
            ...prevExperiences,
            {title: "", company: "", date: "", description: ""},
        ]);
    };

    const handleRemoveExperience = (index: number) => {
        setExperiences((prevExperiences) =>
            prevExperiences.filter((_, i) => i !== index)
        );
    };

    return (
        <div style={{display: "flex"}}>
            <div style={{flex: 1}}>

                {/*Input section*/}
                <h2>Input fields</h2>

                {/* Add main fields */}
                <div style={{marginBottom: "10px"}}>
                    <label htmlFor="nameInput">Name: </label>
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

                <div style={{marginBottom: "10px"}}>
                    <label htmlFor="professionInput">Profession: </label>
                    <input
                        type="text"
                        id="professionInput"
                        value={profession}
                        onChange={handleProfessionChange}
                        style={{
                            padding: "8px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            fontSize: "16px",
                            marginBottom: "10px"
                        }}
                    />
                </div>

                <div style={{marginBottom: "10px"}}>
                    <label htmlFor="emailInput">Email: </label>
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

                <div style={{marginBottom: "10px"}}>
                    <label htmlFor="phoneInput">Phone: </label>
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

                <div style={{marginBottom: "10px"}}>
                    <label htmlFor="addressInput">Address: </label>
                    <input
                        type="address"
                        id="addressInput"
                        value={address}
                        onChange={handleAddressChange}
                        style={{
                            padding: "8px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            fontSize: "16px",
                            marginBottom: "10px"
                        }}
                    />
                </div>

                <div style={{marginBottom: "10px"}}>
                    <label htmlFor="experienceInput">Profile: </label>
                    <textarea
                        id="profileInput"
                        value={profile}
                        onChange={handleProfileChange}
                        style={{
                            padding: "8px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            fontSize: "16px",
                            marginBottom: "10px",
                            height: "100px"
                        }}
                    />
                </div>

                {/* Add multiple fields for many jobs */}
                {experiences.map((experience, index) => (
                    <div key={index}>
                        <div style={{marginBottom: "10px"}}>
                            <label htmlFor="titleInput">Title:</label>
                            <input
                                type="text"
                                id="titleInput"
                                value={experience.title}
                                onChange={(e) =>
                                    handleExperienceChange(index, "title", e.target.value)
                                }
                                style={{
                                    padding: "8px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    fontSize: "16px",
                                    marginBottom: "10px",
                                }}
                            />
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <label htmlFor="companyInput">Company:</label>
                            <input
                                type="company"
                                id="companyInput"
                                value={experience.company}
                                onChange={(e) =>
                                    handleExperienceChange(index, "company", e.target.value)
                                }
                                style={{
                                    padding: "8px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    fontSize: "16px",
                                    marginBottom: "10px",
                                }}
                            />
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <label htmlFor="dateInput">Date:</label>
                            <input
                                type="date"
                                id="dateInput"
                                value={experience.date}
                                onChange={(e) =>
                                    handleExperienceChange(index, "date", e.target.value)
                                }
                                style={{
                                    padding: "8px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    fontSize: "16px",
                                    marginBottom: "10px",
                                }}
                            />
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <label htmlFor="experienceInput">Description</label>
                            <textarea
                                id="descriptionInput"
                                value={experience.description}
                                onChange={(e) =>
                                    handleExperienceChange(index, "description", e.target.value)
                                }
                                style={{
                                    padding: "8px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    fontSize: "16px",
                                    marginBottom: "10px",
                                    height: "100px",
                                }}
                            />
                        </div>

                        <IconButton
                            icon="fa-plus-circle"
                            label="Add Experience"
                            onClick={handleAddExperience}
                        />
                        <IconButton
                            icon="fa-trash"
                            label="Remove Experience"
                            onClick={() => handleRemoveExperience(index)}
                        />
                    </div>
                ))}

            </div>

            {/*Display input*/}
            <div style={{flex: 1, marginLeft: "20px"}}>

                {/* Main CV info */}
                <div style={{marginBottom: "10px"}}>
                    <strong>Name:</strong> {name}
                </div>
                <div style={{marginBottom: "10px"}}>
                    <strong>Profession:</strong> {profession}
                </div>
                <h3>Details</h3>
                <div style={{marginBottom: "10px"}}>
                    <strong>Email:</strong> {email}
                </div>
                <div style={{marginBottom: "10px"}}>
                    <strong>Phone:</strong> {phone}
                </div>
                <div style={{marginBottom: "10px"}}>
                    <strong>Address:</strong> {address}
                </div>
                <div style={{marginBottom: "10px"}}>
                    <strong>Profile:</strong> {profile}
                </div>

                {/* Display multiple jobs */}
                <div>
                    {experiences.map((experience, index) => (
                        <div key={index}>
                            <h3>Job {index + 1}</h3>
                            <div>
                                <strong>Title:</strong> {experience.title}
                            </div>
                            <div>
                                <strong>Company:</strong> {experience.company}
                            </div>
                            <div>
                                <strong>Date:</strong> {experience.date}
                            </div>
                            <div>
                                <strong>Description:</strong> {experience.description}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
