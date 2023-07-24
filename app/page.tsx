"use client";

import {useState, ChangeEvent} from "react";
import IconButton from './IconButton';
import {ContainerStyles, InputStyles} from './inputStyles'; // Import both styles
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
        <div className="flex">
            <div className="flex-2 ml-20 my-10 border border-gray-300 rounded-lg shadow-md p-6 bg-gray-200
             space-y-4">

            {/*Input section*/}
                <h2 className="text-3xl my-5 text-center">Create your CV</h2>

                {/* Add main fields */}
                <div style={ContainerStyles}>
                    <div>
                        <label htmlFor="nameInput" className="block font-medium mb-1">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="nameInput"
                            value={name}
                            onChange={handleNameChange}
                            style={InputStyles}
                        />
                    </div>

                    <div>
                        <label htmlFor="professionInput" className="block font-medium mb-1">Profession: </label>
                        <input
                            type="text"
                            id="professionInput"
                            value={profession}
                            onChange={handleProfessionChange}
                            style={InputStyles}
                        />
                    </div>

                    <div style={{marginBottom: "10px"}}>
                        <label htmlFor="emailInput" className="block font-medium mb-1">Email: </label>
                        <input
                            type="email"
                            id="emailInput"
                            value={email}
                            onChange={handleEmailChange}
                            style={InputStyles}
                        />
                    </div>

                    <div style={{marginBottom: "10px"}}>
                        <label htmlFor="phoneInput" className="block font-medium mb-1">Phone: </label>
                        <input
                            type="tel"
                            id="phoneInput"
                            value={phone}
                            onChange={handlePhoneChange}
                            style={InputStyles}
                        />
                    </div>

                    <div style={{marginBottom: "10px"}}>
                        <label htmlFor="addressInput" className="block font-medium mb-1">Address: </label>
                        <input
                            type="address"
                            id="addressInput"
                            value={address}
                            onChange={handleAddressChange}
                            style={InputStyles}
                        />
                    </div>

                    <div style={{marginBottom: "10px"}}>
                        <label htmlFor="experienceInput" className="block font-medium mb-1">Profile: </label>
                        <textarea
                            id="profileInput"
                            value={profile}
                            onChange={handleProfileChange}
                            style={InputStyles}
                        />
                    </div>

                    <h3 className="text-2xl my-5">Employment history</h3>

                    {/* Add multiple fields for many jobs */}
                    {experiences.map((experience, index) => (
                        <div key={index}>
                            <div style={{marginBottom: "10px"}}>
                                <label htmlFor="titleInput" className="block font-medium mb-1 mt-5">Title:</label>
                                <input
                                    type="text"
                                    id="titleInput"
                                    value={experience.title}
                                    onChange={(e) =>
                                        handleExperienceChange(index, "title", e.target.value)
                                    }
                                    style={InputStyles}
                                />
                            </div>

                            <div style={{marginBottom: "10px"}}>
                                <label htmlFor="companyInput" className="block font-medium mb-1">Company:</label>
                                <input
                                    type="company"
                                    id="companyInput"
                                    value={experience.company}
                                    onChange={(e) =>
                                        handleExperienceChange(index, "company", e.target.value)
                                    }
                                    style={InputStyles}
                                />
                            </div>

                            <div style={{marginBottom: "10px"}}>
                                <label htmlFor="dateInput" className="block font-medium mb-1">Date:</label>
                                <input
                                    type="date"
                                    id="dateInput"
                                    value={experience.date}
                                    onChange={(e) =>
                                        handleExperienceChange(index, "date", e.target.value)
                                    }
                                    style={InputStyles}
                                />
                            </div>

                            <div style={{marginBottom: "10px"}}>
                                <label htmlFor="experienceInput" className="block font-medium mb-1">Description</label>
                                <textarea
                                    id="descriptionInput"
                                    value={experience.description}
                                    onChange={(e) =>
                                        handleExperienceChange(index, "description", e.target.value)
                                    }
                                    style={InputStyles}
                                />
                            </div>

                            {/* Add spacing between buttons */}
                            <div className="space-x-4">
                                <IconButton
                                    icon="fa-plus-circle"
                                    label="Add New Job"
                                    onClick={handleAddExperience}
                                />
                                <IconButton
                                    icon="fa-trash"
                                    label="Remove Job"
                                    onClick={() => handleRemoveExperience(index)}
                                />
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/*Display input*/}
            <div style={{flex: 3, marginLeft: "20px"}}>

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
