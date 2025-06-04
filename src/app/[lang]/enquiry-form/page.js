"use client"
import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Image from "next/image"
import "./style.css"

export default function DeviceForm() {
    // Form state
    const [currentStep, setCurrentStep] = useState(1)
    const [progressWidth, setProgressWidth] = useState("0%")
    const [progressText, setProgressText] = useState("0%")
    const [activeTab, setActiveTab] = useState("London")
    const [showOthersInput, setShowOthersInput] = useState(false)
    const [formData, setFormData] = useState({
        Fname: "",
        Lname: "",
        Email: "",
        phone: "",
        Organisation: "",
        inout: [],
        app: [],
        other: false,
        others: "",
        poll: [],
        comf: [],
        gas: [],
        met: [],
        cont: [],
        power: [],
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    // Update progress bar when step changes
    useEffect(() => {
        const progress = (currentStep - 1) * 25
        setProgressWidth(`${progress}%`)
        setProgressText(`${progress}%`)
    }, [currentStep])

    // Handle tab changes for device type
    const openTab = (tabName) => {
        setActiveTab(tabName)
    }

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target

        if (type === "checkbox") {
            if (name === "other") {
                setShowOthersInput(checked)
                setFormData({
                    ...formData,
                    [name]: checked,
                })
            } else if (name.endsWith("[]")) {
                const fieldName = name.replace("[]", "")
                if (checked) {
                    setFormData({
                        ...formData,
                        [fieldName]: [...(formData[fieldName] || []), value],
                    })
                } else {
                    setFormData({
                        ...formData,
                        [fieldName]: (formData[fieldName] || []).filter((item) => item !== value),
                    })
                }
            }
        } else if (type === "radio") {
            if (name === "inout[]") {
                setFormData({
                    ...formData,
                    inout: [value],
                })

                // Open corresponding tab
                if (value === "Indoor") openTab("London")
                else if (value === "Outdoor") openTab("Paris")
                else if (value === "Vehicular") openTab("Tokyo")
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            })
        }
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch("/api/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                alert("Form submitted successfully!")
                // Reset form or redirect
                setCurrentStep(1)
                setFormData({
                    Fname: "",
                    Lname: "",
                    Email: "",
                    phone: "",
                    Organisation: "",
                    inout: [],
                    app: [],
                    other: false,
                    others: "",
                    poll: [],
                    comf: [],
                    gas: [],
                    met: [],
                    cont: [],
                    power: [],
                })
            } else {
                alert(`Error: ${data.message}`)
            }
        } catch (error) {
            alert("An error occurred while submitting the form.")
            console.error("Form submission error:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    // Filter parameters based on search term
    const filterParameters = (items, term) => {
        if (!term) return true
        return items.toLowerCase().includes(term.toLowerCase())
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="chosse-device-heading">
                        <h1>Choose your Device</h1>
                        <h2>Choose the right fit for you</h2>
                    </div>

                    <form id="msform" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-3">
                                <ul id="progressbar">
                                    <li className={currentStep >= 1 ? "active" : ""} id="account">
                                        <strong>Basic Details</strong>
                                    </li>
                                    <li className={currentStep >= 2 ? "active" : ""} id="personal">
                                        <strong>Device Type</strong>
                                    </li>
                                    <li className={currentStep >= 3 ? "active" : ""} id="payment">
                                        <strong>Select Parameter</strong>
                                    </li>
                                    <li className={currentStep >= 4 ? "active" : ""} id="confirm">
                                        <strong>Connectivity &amp; Power</strong>
                                    </li>
                                </ul>
                                <div className="progress">
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated"
                                        role="progressbar"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: progressWidth }}
                                    ></div>
                                </div>
                                <span className="progress-bar-text">{progressText}</span>
                            </div>

                            <div className="col-lg-9" style={{ backgroundColor: "#fff" }}>
                                {/* Step 1: Basic Details */}
                                {currentStep === 1 && (
                                    <fieldset>
                                        <div className="form-card">
                                            <ul>
                                                <li>
                                                    <input
                                                        type="text"
                                                        name="Fname"
                                                        placeholder="First Name*"
                                                        required
                                                        value={formData.Fname}
                                                        onChange={handleInputChange}
                                                    />
                                                </li>
                                                <li>
                                                    <input
                                                        type="text"
                                                        name="Lname"
                                                        placeholder="Last Name"
                                                        value={formData.Lname}
                                                        onChange={handleInputChange}
                                                    />
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <input
                                                        type="email"
                                                        name="Email"
                                                        placeholder="Email Id*"
                                                        required
                                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                        value={formData.Email}
                                                        onChange={handleInputChange}
                                                    />
                                                </li>
                                                <li>
                                                    <input
                                                        id="phone"
                                                        type="tel"
                                                        name="phone"
                                                        placeholder="Contact No.*"
                                                        required
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                    />
                                                </li>
                                            </ul>
                                            <input
                                                type="textarea"
                                                name="Organisation"
                                                placeholder="Organisation (Optional)"
                                                value={formData.Organisation}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <input
                                            type="button"
                                            name="next"
                                            className="next action-button"
                                            value="Next"
                                            onClick={() => setCurrentStep(2)}
                                        />
                                    </fieldset>
                                )}

                                {/* Step 2: Device Type */}
                                {currentStep === 2 && (
                                    <fieldset>
                                        <div className="form-card">
                                            <div className="in-outdoor">
                                                <h3>Device Type</h3>
                                                <ul>
                                                    <li>
                                                        <input
                                                            type="radio"
                                                            name="inout[]"
                                                            id="cb1"
                                                            value="Indoor"
                                                            className="tablinks"
                                                            checked={formData.inout.includes("Indoor")}
                                                            onChange={(e) => {
                                                                handleInputChange(e)
                                                                openTab("London")
                                                            }}
                                                        />
                                                        <label htmlFor="cb1">
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2024/02/indoor-air-quality-monitors.png"
                                                                width={200}
                                                                height={150}
                                                                alt="Indoor air quality monitors"
                                                            />
                                                            <br />
                                                            <span className="radio-txt">
                                                                <strong>Indoor</strong> Air quality monitors
                                                            </span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="radio"
                                                            name="inout[]"
                                                            id="cb2"
                                                            value="Outdoor"
                                                            className="tablinks"
                                                            checked={formData.inout.includes("Outdoor")}
                                                            onChange={(e) => {
                                                                handleInputChange(e)
                                                                openTab("Paris")
                                                            }}
                                                        />
                                                        <label htmlFor="cb2">
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2024/02/outdoor-air-quality-monitors.png"
                                                                width={200}
                                                                height={150}
                                                                alt="Outdoor air quality monitors"
                                                            />
                                                            <br />
                                                            <span className="radio-txt">
                                                                <strong>Outdoor</strong> Air quality monitors
                                                            </span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="radio"
                                                            name="inout[]"
                                                            id="cb3"
                                                            value="Vehicular"
                                                            className="tablinks"
                                                            checked={formData.inout.includes("Vehicular")}
                                                            onChange={(e) => {
                                                                handleInputChange(e)
                                                                openTab("Tokyo")
                                                            }}
                                                        />
                                                        <label htmlFor="cb3">
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2024/02/vehicularair-quality-monitors.jpg"
                                                                width={200}
                                                                height={150}
                                                                alt="Vehicular air quality monitors"
                                                            />
                                                            <br />
                                                            <span className="radio-txt">
                                                                <strong>Vehicular</strong> Air quality monitors
                                                            </span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Indoor Applications */}
                                            <div className={`application tabcontent ${activeTab === "London" ? "" : "d-none"}`} id="London">
                                                <h3>Applications</h3>
                                                <ul>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="vehicle1"
                                                            name="app[]"
                                                            value="Home"
                                                            checked={formData.app?.includes("Home")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="vehicle1">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Home.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Home"
                                                                />
                                                            </span>{" "}
                                                            Home
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Monitor the air quality in your surroundings by installing an Indoor Air quality
                                                                    monitoring device in bedrooms, living room, kitchen, washroom, etc to make better
                                                                    decisions.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="vehicle2"
                                                            name="app[]"
                                                            value="Office"
                                                            checked={formData.app?.includes("Office")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="vehicle2">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Office.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Office"
                                                                />
                                                            </span>{" "}
                                                            Office
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Increase your employees performance by keeping track of air pollutants in your office
                                                                    premises. Use Indoor Air Quality monitors in conference rooms, photocopying areas,
                                                                    etc.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="vehicle3"
                                                            name="app[]"
                                                            value="Restaurant"
                                                            checked={formData.app?.includes("Restaurant")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="vehicle3">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Restaurant.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Restaurant"
                                                                />
                                                            </span>{" "}
                                                            Restaurant
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Provide better indoor air quality to your guests by tracking air containment in your
                                                                    restaurant. Install air quality devices in Waiting, Dining areas, Payment stations,
                                                                    and others.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="vehicle4"
                                                            name="app[]"
                                                            value="Theaters"
                                                            checked={formData.app?.includes("Theaters")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="vehicle4">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Theaters.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Theaters"
                                                                />
                                                            </span>{" "}
                                                            Theaters
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Detect Air pollutants in Cinema halls or theatre by installing top Indoor Air quality
                                                                    monitoring devices. Make a well-informed decision for better experiences for your
                                                                    customers.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="vehicle5"
                                                            name="app[]"
                                                            value="Real estate"
                                                            checked={formData.app?.includes("Real estate")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="vehicle5">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Real-estate.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Real estate"
                                                                />
                                                            </span>{" "}
                                                            Real estate
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Air Quality monitoring is very necessary in the Building Management System. Install
                                                                    Indoor air quality monitors to decide on control.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="vehicle6"
                                                            name="app[]"
                                                            value="Banks"
                                                            checked={formData.app?.includes("Banks")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="vehicle6">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Banks.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Banks"
                                                                />
                                                            </span>{" "}
                                                            Banks
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Keep track of air quality in a bank with Indoor Air quality monitors. Air Monitors can
                                                                    be installed in lobbies, deposit box areas, vault areas storage, etc.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="vehicle7"
                                                            name="app[]"
                                                            value="Hotel"
                                                            checked={formData.app?.includes("Hotel")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="vehicle7">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Hotel.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Hotel"
                                                                />
                                                            </span>{" "}
                                                            Hotel
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Improve your customers experience by keeping track of air pollutants present in the
                                                                    air. For it, Install Indoor air quality monitors in hotel rooms and lobbies.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="vehicle8"
                                                            name="app[]"
                                                            value="Parking Lots"
                                                            checked={formData.app?.includes("Parking Lots")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="vehicle8">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Parking-Lots.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Parking Lots"
                                                                />
                                                            </span>{" "}
                                                            Parking Lots
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Vehicles cause much more emission in basements parking lots. Monitor the air quality
                                                                    with the best Indoor Air quality monitors to take required measurements.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="vehicle9"
                                                            name="app[]"
                                                            value="Hospital"
                                                            checked={formData.app?.includes("Hospital")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="vehicle9">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Hospital.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Hospital"
                                                                />
                                                            </span>{" "}
                                                            Hospital
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Improve your customers experience by keeping track of air pollutants present in the
                                                                    air. For it, Install Indoor air quality monitors in hotel rooms and lobbies.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="Edu"
                                                            name="app[]"
                                                            value="Educational institutions"
                                                            checked={formData.app?.includes("Educational institutions")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="Edu">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Educational-institutions.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Educational institutions"
                                                                />
                                                            </span>{" "}
                                                            Educational institutions
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Keep track of the Air containment inside your school, colleges, or institutes by
                                                                    installing air quality monitors and improving students performances.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="vehicle10"
                                                            name="app[]"
                                                            value="Religious Buildings"
                                                            checked={formData.app?.includes("Religious Buildings")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="vehicle10">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Religious-Buildings.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Religious Buildings"
                                                                />
                                                            </span>{" "}
                                                            Religious Buildings
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Install indoor air quality monitoring devices in any religious building. Improve the
                                                                    air quality for more calmness, focus, and a better environment.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="vehicle11"
                                                            name="app[]"
                                                            value="Community Centers"
                                                            checked={formData.app?.includes("Community Centers")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="vehicle11">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Community-Centers.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Community Centers"
                                                                />
                                                            </span>{" "}
                                                            Community Centers
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Air quality monitoring in community centers is much more necessary. Install top
                                                                    devices to keep track of the air quality and manage the emissions.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Outdoor Applications */}
                                            <div className={`application tabcontent ${activeTab === "Paris" ? "" : "d-none"}`} id="Paris">
                                                <h3>Applications</h3>
                                                <ul>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="rmc-plants"
                                                            name="app[]"
                                                            value="RMC Plants"
                                                            checked={formData.app?.includes("RMC Plants")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="rmc-plants">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/RMC-Plants.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="RMC Plants"
                                                                />
                                                            </span>{" "}
                                                            RMC Plants
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Install ambient air quality monitors at your Ready Mix Concrete plants. RMC plants
                                                                    emit various hazardous pollutants in the air that require measuring.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="streets"
                                                            name="app[]"
                                                            value="Streets"
                                                            checked={formData.app?.includes("Streets")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="streets">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Streets.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Streets"
                                                                />
                                                            </span>{" "}
                                                            Streets
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Outdoor air quality monitors can be installed in streets to track the areas
                                                                    pollution. Street pollution can manage by monitoring to protect public health.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="smart-cities"
                                                            name="app[]"
                                                            value="Smart cities"
                                                            checked={formData.app?.includes("Smart cities")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="smart-cities">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Smart-cities.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Smart cities"
                                                                />
                                                            </span>{" "}
                                                            Smart cities
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Air Quality monitors can establish in smart cities to monitor the emission from
                                                                    different sources. It can regulate by adjusting traffic patterns and industrial
                                                                    emissions.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="traffic-junctions"
                                                            name="app[]"
                                                            value="Traffic junctions"
                                                            checked={formData.app?.includes("Traffic junctions")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="traffic-junctions">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Traffic-junctions.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Traffic junctions"
                                                                />
                                                            </span>{" "}
                                                            Traffic junctions
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Outdoor Air Quality monitoring devices can be installed in traffic junctions to
                                                                    monitor the automobiles emission. Pollution board can take steps to control the
                                                                    pollution.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="parks"
                                                            name="app[]"
                                                            value="Parks"
                                                            checked={formData.app?.includes("Parks")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="parks">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Parks.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Parks"
                                                                />
                                                            </span>{" "}
                                                            Parks
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    A healthy environment is necessary in parks for clean and healthy air for old and
                                                                    young age people groups. Air quality monitors can use to ensure air quality.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="airport"
                                                            name="app[]"
                                                            value="Airports"
                                                            checked={formData.app?.includes("Airports")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="airport">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Airports.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Airports"
                                                                />
                                                            </span>{" "}
                                                            Airports
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Ambient air quality monitors can be installed in airports to track various pollutants.
                                                                    It helps in providing a better experience to every passenger as clean air.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="hl"
                                                            name="app[]"
                                                            value="Hyper-local"
                                                            checked={formData.app?.includes("Hyper-local")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="hl">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Mask-group.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Hyper-local"
                                                                />
                                                            </span>{" "}
                                                            Hyper-local
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Air quality monitors can install in small areas to monitor the entire areas air
                                                                    quality. It can done for various purposes to control or contrast the air quality.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="cs"
                                                            name="app[]"
                                                            value="Construction site"
                                                            checked={formData.app?.includes("Construction site")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="cs">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Construction-site.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Construction site"
                                                                />
                                                            </span>{" "}
                                                            Construction site
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Top outdoor air quality monitors can install at construction sites. These sites emit
                                                                    many pollutants in the air that can measure with the best device.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="rs"
                                                            name="app[]"
                                                            value="Railway stations"
                                                            checked={formData.app?.includes("Railway stations")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="rs">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Railway-stations.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Railway stations"
                                                                />
                                                            </span>{" "}
                                                            Railway stations
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Install air quality monitoring devices in Railway stations as at the waiting lobbies,
                                                                    platforms, TC rooms, etc. Control the emission with a well-informed decision.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="hotspot"
                                                            name="app[]"
                                                            value="Hotspots"
                                                            checked={formData.app?.includes("Hotspots")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="hotspot">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Hotspots.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Hotspots"
                                                                />
                                                            </span>{" "}
                                                            Hotspots
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Monitor the air quality in the high emission hotspots with the best air quality
                                                                    monitoring device. It can help manage high emissions points.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Vehicular Applications */}
                                            <div className={`application tabcontent ${activeTab === "Tokyo" ? "" : "d-none"}`} id="Tokyo">
                                                <h3>Applications</h3>
                                                <ul>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="train"
                                                            name="app[]"
                                                            value="Train"
                                                            checked={formData.app?.includes("Train")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="train">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Train.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Train"
                                                                />
                                                            </span>{" "}
                                                            Train
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Air quality monitors can be installed inside trains for a better experience for
                                                                    passengers. As it can monitor the air pollutants in coaches, sleepers, lobbies, and
                                                                    others.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="bus"
                                                            name="app[]"
                                                            value="Buses"
                                                            checked={formData.app?.includes("Buses")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="bus">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Buses.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Buses"
                                                                />
                                                            </span>{" "}
                                                            Buses
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Install Air quality monitoring devices in buses to track the pollutant emissions
                                                                    inside the bus. Suffocation and ventilation can manage by monitoring.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="car"
                                                            name="app[]"
                                                            value="Cars"
                                                            checked={formData.app?.includes("Cars")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="car">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Cars.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Cars"
                                                                />
                                                            </span>{" "}
                                                            Cars
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    The best indoor air quality monitors can be established in cars to keep a check on air
                                                                    quality. Hence, poor air quality and ventilation can be managed.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="two-h"
                                                            name="app[]"
                                                            value="Two Wheeler"
                                                            checked={formData.app?.includes("Two Wheeler")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="two-h">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Two-Wheeler.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Two Wheeler"
                                                                />
                                                            </span>{" "}
                                                            Two Wheeler
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    Install air quality monitors on your bikes, scooters, or motorbikes. The portable air
                                                                    quality monitoring devices are available to check the air.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="drone"
                                                            name="app[]"
                                                            value="Drone"
                                                            checked={formData.app?.includes("Drone")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="drone">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Drone.png"
                                                                    width={23}
                                                                    height={23}
                                                                    alt="Drone"
                                                                />
                                                            </span>{" "}
                                                            Drone
                                                            <div className="info-icon">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/info-icon.png"
                                                                    width={16}
                                                                    height={16}
                                                                    alt="Info"
                                                                />
                                                                <span className="info-text">
                                                                    An air quality monitor can install on the drone to cover wider areas for tracking
                                                                    wider areas. Field and area monitoring can be performed with it.
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>

                                            <ul className="others">
                                                <li>
                                                    <input
                                                        type="checkbox"
                                                        id="vehicle12"
                                                        name="other"
                                                        value="Others"
                                                        checked={formData.other}
                                                        onChange={(e) => {
                                                            handleInputChange(e)
                                                            setShowOthersInput(e.target.checked)
                                                        }}
                                                    />
                                                    <label htmlFor="vehicle12">
                                                        <span className="img-box">
                                                            <Image
                                                                src="https://www.pranaair.com/wp-content/uploads/2024/02/Group.png"
                                                                width={23}
                                                                height={23}
                                                                alt="Others"
                                                            />
                                                        </span>
                                                        Others
                                                    </label>
                                                </li>
                                                <li>
                                                    <input
                                                        type="text"
                                                        name="others"
                                                        placeholder="Others"
                                                        style={{ display: showOthersInput ? "block" : "none" }}
                                                        value={formData.others}
                                                        onChange={handleInputChange}
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                        <input
                                            type="button"
                                            name="next"
                                            className="next action-button"
                                            value="Next"
                                            onClick={() => setCurrentStep(3)}
                                        />
                                        <input
                                            type="button"
                                            name="previous"
                                            className="previous action-button-previous"
                                            value="Previous"
                                            onClick={() => setCurrentStep(1)}
                                        />
                                    </fieldset>
                                )}

                                {/* Step 3: Parameters Select */}
                                {currentStep === 3 && (
                                    <fieldset>
                                        <div className="form-card">
                                            <h3 className="search-heading">Parameters Select</h3>
                                            <input
                                                type="text"
                                                id="searchInput"
                                                placeholder="Search Parameter"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                            <div className="scrol">
                                                {/* Pollutants Section */}
                                                <div className="application pd">
                                                    <h3>Pollutants</h3>
                                                    <ul>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="aqi"
                                                                name="poll[]"
                                                                value="AQI"
                                                                checked={formData.poll?.includes("AQI")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="aqi" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/aqi-icon.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="AQI"
                                                                    />
                                                                </span>
                                                                AQI
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="pm1"
                                                                name="poll[]"
                                                                value="PM1"
                                                                checked={formData.poll?.includes("PM1")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="pm1" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/pm1.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="PM1"
                                                                    />
                                                                </span>
                                                                PM1
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="pm2-5"
                                                                name="poll[]"
                                                                value="PM2.5"
                                                                checked={formData.poll?.includes("PM2.5")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="pm2-5" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/pm2-5.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="PM2.5"
                                                                    />
                                                                </span>
                                                                PM2.5
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="pm10"
                                                                name="poll[]"
                                                                value="PM10"
                                                                checked={formData.poll?.includes("PM10")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="pm10" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/pm10.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="PM10"
                                                                    />
                                                                </span>
                                                                PM10
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="particles-count-0-3"
                                                                name="poll[]"
                                                                value="Particles Count(0.3)"
                                                                checked={formData.poll?.includes("Particles Count(0.3)")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="particles-count-0-3" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/0-3.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Particles Count(0.3)"
                                                                    />
                                                                </span>
                                                                Particles Count(0.3)
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="particles-count-0-5"
                                                                name="poll[]"
                                                                value="Particles Count(0.5)"
                                                                checked={formData.poll?.includes("Particles Count(0.5)")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="particles-count-0-5" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/0-5.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Particles Count(0.5)"
                                                                    />
                                                                </span>
                                                                Particles Count(0.5)
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="particles-count-1"
                                                                name="poll[]"
                                                                value="Particles Count(1)"
                                                                checked={formData.poll?.includes("Particles Count(1)")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="particles-count-1" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/1.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Particles Count(1)"
                                                                    />
                                                                </span>
                                                                Particles Count(1)
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="particles-count-3"
                                                                name="poll[]"
                                                                value="Particles Count(3)"
                                                                checked={formData.poll?.includes("Particles Count(3)")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="particles-count-3" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/3.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Particles Count(3)"
                                                                    />
                                                                </span>
                                                                Particles Count(3)
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="particles-count-5"
                                                                name="poll[]"
                                                                value="Particles Count(5)"
                                                                checked={formData.poll?.includes("Particles Count(5)")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="particles-count-5" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/5.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Particles Count(5)"
                                                                    />
                                                                </span>
                                                                Particles Count(5)
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>

                                                {/* Comfort Section */}
                                                <div className="application pd">
                                                    <h3>Comfort</h3>
                                                    <ul>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="temp"
                                                                name="comf[]"
                                                                value="Temp"
                                                                checked={formData.comf?.includes("Temp")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="temp" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/temp.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Temp"
                                                                    />
                                                                </span>
                                                                Temp
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="humidity"
                                                                name="comf[]"
                                                                value="Humidity"
                                                                checked={formData.comf?.includes("Humidity")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="humidity" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/humidity.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Humidity"
                                                                    />
                                                                </span>
                                                                Humidity
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="o2"
                                                                name="comf[]"
                                                                value="O2"
                                                                checked={formData.comf?.includes("O2")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="o2" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/o2.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="O2"
                                                                    />
                                                                </span>
                                                                O2
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="lux"
                                                                name="comf[]"
                                                                value="LUX"
                                                                checked={formData.comf?.includes("LUX")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="lux" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/lux.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="LUX"
                                                                    />
                                                                </span>
                                                                LUX
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="noise"
                                                                name="comf[]"
                                                                value="Noise"
                                                                checked={formData.comf?.includes("Noise")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="noise" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/noise.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Noise"
                                                                    />
                                                                </span>
                                                                Noise
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="co2"
                                                                name="comf[]"
                                                                value="CO2"
                                                                checked={formData.comf?.includes("CO2")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="co2" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/co2.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="CO2"
                                                                    />
                                                                </span>
                                                                CO2
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="pressure"
                                                                name="comf[]"
                                                                value="Pressure"
                                                                checked={formData.comf?.includes("Pressure")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="pressure" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/pressure.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Pressure"
                                                                    />
                                                                </span>
                                                                Pressure
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>

                                                {/* Gases Section */}
                                                <div className="application pd">
                                                    <h3>Gases</h3>
                                                    <ul className="gases">
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="co"
                                                                name="gas[]"
                                                                value="CO"
                                                                checked={formData.gas?.includes("CO")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="co" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/co.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="CO"
                                                                    />
                                                                </span>
                                                                CO
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="so2"
                                                                name="gas[]"
                                                                value="SO2"
                                                                checked={formData.gas?.includes("SO2")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="so2" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/so2.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="SO2"
                                                                    />
                                                                </span>
                                                                SO2
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="no2"
                                                                name="gas[]"
                                                                value="NO2"
                                                                checked={formData.gas?.includes("NO2")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="no2" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/no2.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="NO2"
                                                                    />
                                                                </span>
                                                                NO2
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="tvoc"
                                                                name="gas[]"
                                                                value="TVOC"
                                                                checked={formData.gas?.includes("TVOC")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="tvoc" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/tvoc.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="TVOC"
                                                                    />
                                                                </span>
                                                                TVOC
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="radon"
                                                                name="gas[]"
                                                                value="Radon"
                                                                checked={formData.gas?.includes("Radon")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="radon" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/radon.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Radon"
                                                                    />
                                                                </span>
                                                                Radon
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="hcho"
                                                                name="gas[]"
                                                                value="HCHO"
                                                                checked={formData.gas?.includes("HCHO")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="hcho" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/hcho.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="HCHO"
                                                                    />
                                                                </span>
                                                                HCHO
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="no"
                                                                name="gas[]"
                                                                value="NO"
                                                                checked={formData.gas?.includes("NO")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="no" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/no.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="NO"
                                                                    />
                                                                </span>
                                                                NO
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="ozone"
                                                                name="gas[]"
                                                                value="Ozone"
                                                                checked={formData.gas?.includes("Ozone")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="ozone" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/ozone.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Ozone"
                                                                    />
                                                                </span>
                                                                Ozone
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="nh3"
                                                                name="gas[]"
                                                                value="NH3"
                                                                checked={formData.gas?.includes("NH3")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="nh3" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/nh3.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="NH3"
                                                                    />
                                                                </span>
                                                                NH3
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="nox"
                                                                name="gas[]"
                                                                value="NOx"
                                                                checked={formData.gas?.includes("NOx")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="nox" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/nox.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="NOx"
                                                                    />
                                                                </span>
                                                                NOx
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="h2s"
                                                                name="gas[]"
                                                                value="H2S"
                                                                checked={formData.gas?.includes("H2S")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="h2s" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/h2s.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="H2S"
                                                                    />
                                                                </span>
                                                                H2S
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="ch4"
                                                                name="gas[]"
                                                                value="CH4"
                                                                checked={formData.gas?.includes("CH4")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="ch4" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/ch4.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="CH4"
                                                                    />
                                                                </span>
                                                                CH4
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="ethlyene-oxide"
                                                                name="gas[]"
                                                                value="Ethlyene oxide"
                                                                checked={formData.gas?.includes("Ethlyene oxide")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="ethlyene-oxide" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/Ethlyene-oxide.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Ethlyene oxide"
                                                                    />
                                                                </span>
                                                                Ethlyene oxide
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>

                                                {/* Met Section */}
                                                <div className="application pd">
                                                    <h3>Met</h3>
                                                    <ul className="met">
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="uv"
                                                                name="met[]"
                                                                value="UV"
                                                                checked={formData.met?.includes("UV")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="uv" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/uv.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="UV"
                                                                    />
                                                                </span>
                                                                UV
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="gust-speed"
                                                                name="met[]"
                                                                value="Gust Speed"
                                                                checked={formData.met?.includes("Gust Speed")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="gust-speed" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/Gust-Speed.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Gust Speed"
                                                                    />
                                                                </span>
                                                                Gust Speed
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="wind-speed"
                                                                name="met[]"
                                                                value="Wind speed"
                                                                checked={formData.met?.includes("Wind speed")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="wind-speed" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/Wind-speed.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Wind speed"
                                                                    />
                                                                </span>
                                                                Wind speed
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="wind-direction"
                                                                name="met[]"
                                                                value="Wind Direction"
                                                                checked={formData.met?.includes("Wind Direction")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="wind-direction" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/Wind-Direction.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Wind Direction"
                                                                    />
                                                                </span>
                                                                Wind Direction
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="rainfall"
                                                                name="met[]"
                                                                value="Rainfall"
                                                                checked={formData.met?.includes("Rainfall")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="rainfall" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/Rainfall.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Rainfall"
                                                                    />
                                                                </span>
                                                                Rainfall
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="solar-radiation"
                                                                name="met[]"
                                                                value="Solar radiation"
                                                                checked={formData.met?.includes("Solar radiation")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="solar-radiation" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/Solar-radiation.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Solar radiation"
                                                                    />
                                                                </span>
                                                                Solar radiation
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="solar-irradiance"
                                                                name="met[]"
                                                                value="Solar Irradiance"
                                                                checked={formData.met?.includes("Solar Irradiance")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="solar-irradiance" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/Solar-Irradiance.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Solar Irradiance"
                                                                    />
                                                                </span>
                                                                Solar Irradiance
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="virus-index"
                                                                name="met[]"
                                                                value="Virus index"
                                                                checked={formData.met?.includes("Virus index")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="virus-index" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/Virus-index.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Virus index"
                                                                    />
                                                                </span>
                                                                Virus index
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="capacity-index"
                                                                name="met[]"
                                                                value="Capacity Index"
                                                                checked={formData.met?.includes("Capacity Index")}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label htmlFor="capacity-index" className="parameters-box">
                                                                <span className="img-box">
                                                                    <Image
                                                                        src="https://www.pranaair.com/wp-content/uploads/2024/02/Capacity-Index.png"
                                                                        width={21}
                                                                        height={21}
                                                                        alt="Capacity Index"
                                                                    />
                                                                </span>
                                                                Capacity Index
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <input
                                            type="button"
                                            name="next"
                                            className="next action-button"
                                            value="Next"
                                            onClick={() => setCurrentStep(4)}
                                        />
                                        <input
                                            type="button"
                                            name="previous"
                                            className="previous action-button-previous"
                                            value="Previous"
                                            onClick={() => setCurrentStep(2)}
                                        />
                                    </fieldset>
                                )}

                                {/* Step 4: Connectivity & Power */}
                                {currentStep === 4 && (
                                    <fieldset>
                                        <div className="form-card">
                                            <div className="application pd">
                                                <h3>Connectivity</h3>
                                                <ul>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="wifi"
                                                            name="cont[]"
                                                            value="Wifi"
                                                            checked={formData.cont?.includes("Wifi")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="wifi" className="parameters-box">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Wifi.png"
                                                                    width={21}
                                                                    height={21}
                                                                    alt="Wifi"
                                                                />
                                                            </span>
                                                            Wifi
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="rs-485"
                                                            name="cont[]"
                                                            value="RS-485"
                                                            checked={formData.cont?.includes("RS-485")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="rs-485" className="parameters-box">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/RS-485.png"
                                                                    width={21}
                                                                    height={21}
                                                                    alt="RS-485"
                                                                />
                                                            </span>
                                                            RS-485
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="lora"
                                                            name="cont[]"
                                                            value="LORA"
                                                            checked={formData.cont?.includes("LORA")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="lora" className="parameters-box">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/LORA.png"
                                                                    width={21}
                                                                    height={21}
                                                                    alt="LORA"
                                                                />
                                                            </span>
                                                            LORA
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="gsm"
                                                            name="cont[]"
                                                            value="GSM"
                                                            checked={formData.cont?.includes("GSM")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="gsm" className="parameters-box">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/GSM.png"
                                                                    width={21}
                                                                    height={21}
                                                                    alt="GSM"
                                                                />
                                                            </span>
                                                            GSM
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="application pd">
                                                <h3>Power Type</h3>
                                                <ul>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="solar"
                                                            name="power[]"
                                                            value="Solar"
                                                            checked={formData.power?.includes("Solar")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="solar" className="parameters-box">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Solar.png"
                                                                    width={21}
                                                                    height={21}
                                                                    alt="Solar"
                                                                />
                                                            </span>
                                                            Solar
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="usb"
                                                            name="power[]"
                                                            value="USB"
                                                            checked={formData.power?.includes("USB")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="usb" className="parameters-box">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/USB.png"
                                                                    width={21}
                                                                    height={21}
                                                                    alt="USB"
                                                                />
                                                            </span>
                                                            USB
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input
                                                            type="checkbox"
                                                            id="battery"
                                                            name="power[]"
                                                            value="Battery"
                                                            checked={formData.power?.includes("Battery")}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="battery" className="parameters-box">
                                                            <span className="img-box">
                                                                <Image
                                                                    src="https://www.pranaair.com/wp-content/uploads/2024/02/Battery.png"
                                                                    width={21}
                                                                    height={21}
                                                                    alt="Battery"
                                                                />
                                                            </span>
                                                            Battery
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            name="send"
                                            className="action-button"
                                            id="contact-submit"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Submitting..." : "Submit"}
                                        </button>
                                        <input
                                            type="button"
                                            name="previous"
                                            className="previous action-button-previous"
                                            value="Previous"
                                            onClick={() => setCurrentStep(3)}
                                        />
                                    </fieldset>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
