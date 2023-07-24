"use client";

import {useState, ChangeEvent} from "react";

// noinspection JSUnusedGlobalSymbols
export default function Home() {
    const [name, setName] = useState("");
    const [profession, setProfession] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [profile, setProfile] = useState("");
    const [company, setCompany] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

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

    const handleProfileChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setProfile(event.target.value);
    };

    const handleCompanyChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCompany(event.target.value);
    };

    const handleJobTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setJobTitle(event.target.value);
    };

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    return (
        <div style={{display: "flex"}}>
            <div style={{flex: 1}}>
                <h2>Input fields</h2>

                {/*Input section*/}
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
                            height: "200px"
                        }}
                    />
                </div>

                <div style={{marginBottom: "10px"}}>
                    <label htmlFor="jobTitleInput">Title: </label>
                    <input
                        type="title"
                        id="titleInput"
                        value={jobTitle}
                        onChange={handleJobTitleChange}
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
                    <label htmlFor="companyInput">Company: </label>
                    <input
                        type="company"
                        id="companyInput"
                        value={company}
                        onChange={handleCompanyChange}
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
                    <label htmlFor="dateInput">Date: </label>
                    <input
                        type="date"
                        id="dateInput"
                        value={date}
                        onChange={handleDateChange}
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
                    <label htmlFor="experienceInput">Description: </label>
                    <textarea
                        id="descriptionInput"
                        value={description}
                        onChange={handleDescriptionChange}
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

            {/*Display input*/}
            <div style={{flex: 1, marginLeft: "20px"}}>
                <h2>CV Preview</h2>
                <div style={{marginBottom: "10px"}}>
                    <strong>Name:</strong> {name}
                </div>
                <div style={{marginBottom: "10px"}}>
                    <strong>Profession:</strong> {profession}
                </div>
                <div style={{marginBottom: "10px"}}>
                    <strong>Email:</strong> {email}
                </div>
                <div style={{marginBottom: "10px"}}>
                    <strong>Phone:</strong> {phone}
                </div>
                <div style={{marginBottom: "10px"}}>
                    <strong>Profile:</strong> {profile}
                </div>
                <div style={{marginBottom: "10px"}}>
                    <strong>Job Title:</strong> {jobTitle}
                </div>
                <div style={{marginBottom: "10px"}}>
                    <strong>Company:</strong> {company}
                </div>
                <div style={{marginBottom: "10px"}}>
                    <strong>Date:</strong> {date}
                </div>
                <div style={{marginBottom: "10px"}}>
                    <strong>Description:</strong> {description}
                </div>
            </div>

        </div>
    );
}
