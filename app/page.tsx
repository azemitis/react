"use client";

import {useState, ChangeEvent} from "react";
import IconButton from './IconButton';
import {ContainerStyles, InputStyles} from './inputStyles';
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
            <div className="w-1/3 ml-20 my-10 border border-gray-200 rounded-lg shadow-md p-6 bg-yellow-50 space-y-4">

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
            <div className="w-2/3 mx-20 my-10">

                <div className="bg-white border rounded-lg shadow-md p-6 mb-4 flex">

                    <div className="flex-1 mr-4">
                        {/*Main info*/}
                        <div className="mb-4">
                            <span className="text-6xl font-bold"> {name} </span>
                            <span className="text-gray-300">name</span>
                        </div>
                        <div className="mb-4">
                            <span className="text-2xl"> {profession} </span>
                            <span className="text-gray-300">profession</span>
                        </div>
                        <div className="mb-4">
                            <span className="text-xl">Profile</span>
                            <div>{profile}</div>
                        </div>

                        {/* Display multiple jobs */}
                        {experiences.map((experience, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="text-xl text-gray-300">Job {index + 1}</h3>
                                <div className="mb-2">
                                    <span className="text-xl font-bold"> {experience.title} </span>
                                    <span className="text-gray-300">title</span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-gray-500"> {experience.date} </span>
                                    <span className="text-gray-300">date</span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-xl"> {experience.company} </span>
                                    <span className="text-gray-300">company</span>
                                </div>
                                <div className="mb-2">
                                    <div dangerouslySetInnerHTML={{
                                        __html:
                                            experience.description.replace(/\n/g, '<br>')
                                    }}/>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right side - Details */}
                    <div className="flex-1/3 mt-20">
                        {/*Details*/}
                        <h3 className="text-xl font-bold mb-4">Details</h3>
                        <div className="mb-4">
                            <span> {email} </span>
                            <span className="text-gray-300">email</span>
                        </div>
                        <div className="mb-4">
                            <span> {phone} </span>
                            <span className="text-gray-300">phone</span>
                        </div>
                        <div className="mb-4">
                            <span> {address} </span>
                            <span className="text-gray-300">address</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
