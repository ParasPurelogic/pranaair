"use client"

import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import "./style.css"

export default function CO2MonitorPage() {
    useEffect(() => {
        // Initialize tabs functionality
        const openTab = (evt, tabName) => {
            const tabcontent = document.getElementsByClassName("tabcontent");
            for (let i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            const tablinks = document.getElementsByClassName("tablinks");
            for (let i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        };

        // Initialize new tabs
        const openNewTab = (evt, tabName) => {
            const tabcontent = document.getElementsByClassName("new-tabcontent");
            for (let i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            const tablinks = document.getElementsByClassName("new-tablinks");
            for (let i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        };

        // Initialize app tabs
        const showTab = (tabId) => {
            const tabContents = document.getElementsByClassName("app-tab-content");
            for (let i = 0; i < tabContents.length; i++) {
                tabContents[i].classList.remove("active");
            }

            const selectedTabContent = document.getElementById(tabId + "Content");
            if (selectedTabContent) {
                selectedTabContent.classList.add("active");
            }

            const tabs = document.getElementsByClassName("app-tab");
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove("active");
            }

            const selectedTab = document.querySelector(`.app-tab[data-tab='${tabId}']`);
            if (selectedTab) {
                selectedTab.classList.add("active");
            }

            const brClrImages = document.querySelectorAll(".br-clr");
            brClrImages.forEach(image => {
                image.classList.remove("active");
            });

            const activeImage = document.querySelector(`.app-key-feature-mobile-bg ul li[data-tab='${tabId}'] .br-clr`);
            if (activeImage) {
                activeImage.classList.add("active");
            }
        };

        // Reset active state for work steps
        const resetActive = (event, percent, step) => {
            document.querySelectorAll(".work-body").forEach(function () {
                if (this.classList.contains("activestep")) {
                    this.classList.remove("activestep");
                }
            });

            if (event.target.className === "work-body") {
                event.target.classList.add("activestep");
            } else {
                event.target.parentNode.classList.add("activestep");
            }

            hideSteps();
            showCurrentStepInfo(step);
        };

        // Hide all steps
        const hideSteps = () => {
            document.querySelectorAll(".step").forEach(function () {
                if (this.classList.contains("activeStepInfo")) {
                    this.classList.remove("activeStepInfo");
                    this.classList.add("hiddenStepInfo");
                }
            });
        };

        // Show current step info
        const showCurrentStepInfo = (step) => {
            const id = "#" + step;
            document.querySelector(id).classList.add("activeStepInfo");
        };

        // Add event listeners for tabs
        document.querySelectorAll('.tablinks').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const tabName = tab.getAttribute('data-tab');
                openTab(e, tabName);
            });
        });

        document.querySelectorAll('.new-tablinks').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const tabName = tab.getAttribute('data-tab');
                openNewTab(e, tabName);
            });
        });

        document.querySelectorAll('.app-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                showTab(tabId);
            });
        });

        // Add event listeners for work steps
        document.querySelectorAll('.work-body').forEach(workBody => {
            workBody.addEventListener('click', (e) => {
                const step = workBody.nextElementSibling.id;
                resetActive(e, 0, step);
            });
        });

        // Range hover effects
        document.querySelectorAll('.range_cntr li').forEach(li => {
            li.addEventListener('mouseenter', () => {
                document.querySelectorAll('.range_cntr li').forEach(item => {
                    item.classList.remove('active_range');
                });
                li.classList.add('active_range');
            });
        });

        // Initialize first tabs
        const firstTab = document.querySelector('.tablinks');
        if (firstTab) {
            firstTab.classList.add('active');
            const firstTabName = firstTab.getAttribute('data-tab');
            if (firstTabName) {
                const firstTabContent = document.getElementById(firstTabName);
                if (firstTabContent) {
                    firstTabContent.style.display = 'block';
                }
            }
        }

        const firstNewTab = document.querySelector('.new-tablinks');
        if (firstNewTab) {
            firstNewTab.classList.add('active');
            const firstNewTabName = firstNewTab.getAttribute('data-tab');
            if (firstNewTabName) {
                const firstNewTabContent = document.getElementById(firstNewTabName);
                if (firstNewTabContent) {
                    firstNewTabContent.style.display = 'block';
                }
            }
        }

        // Initialize first app tab
        showTab('tab1');

        // Cleanup event listeners on component unmount
        return () => {
            document.querySelectorAll('.tablinks').forEach(tab => {
                tab.removeEventListener('click', () => { });
            });
            document.querySelectorAll('.new-tablinks').forEach(tab => {
                tab.removeEventListener('click', () => { });
            });
            document.querySelectorAll('.app-tab').forEach(tab => {
                tab.removeEventListener('click', () => { });
            });
            document.querySelectorAll('.work-body').forEach(workBody => {
                workBody.removeEventListener('click', () => { });
            });
            document.querySelectorAll('.range_cntr li').forEach(li => {
                li.removeEventListener('mouseenter', () => { });
            });
        };
    }, [])
    const [activeProductTab, setActiveProductTab] = useState("handheld")
    const [appTab, setAppProductTab] = useState("Home")
    // Add this state for the active step in Section 7 after the other state declarations
    const [activeStep, setActiveStep] = useState(1)

    const changeStep = (step) => {
        setActiveStep(step)
    }

    return (
        <div className="co2-monitor-page">
            {/* Banner Section */}
            <section className="pocket_banner_box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="banner-content">
                                <h1>Worlds Smallest <span className="banner-txt">CO2 Monitor</span></h1>
                                <p>Track the real-time air quality levels on the go with our smallest, portable, and handiest pocket air monitor.</p>
                                <ul className="rate_list">
                                    <li>
                                        <div className="woocom-list-content">₹ 5,990.00</div>
                                    </li>
                                    <li>
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2022/07/Pocket-Sized-icon.png" width={20} height={20} alt="pocket-sized icon" /> Pocket-Sized
                                    </li>
                                    <li>
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2022/07/WIFI-enable-icon.png" width={20} height={20} alt="wifi icon" /> Wifi Enabled
                                    </li>
                                </ul>
                                <form class="cart" action="https://www.pranaair.com/product/pocket-co2-monitor/" enctype="multipart/form-data"
                                    method="post"><button class="single_add_to_cart_button button alt banner-btn" name="add-to-cart" type="submit"
                                        value="52265">Buy Now <img decoding="async" src="https://www.pranaair.com/wp-content/uploads/2023/09/Vector-3.png" alt="icon" /></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 right_pocket_Image">
                            {/* Right side image is in the background */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Qualitative Features Section */}
            <section className="qualitytative_features_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 features_left_box">
                            <div className="title_heading circle_heading">
                                <span style={{ fontSize: '24pt' }}>Monitors</span>
                                <sup>
                                    <Image src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" width={24} height={24} alt="logo" />
                                </sup>
                                <span style={{ fontSize: '24pt' }}>Qualitative Features</span>
                            </div>
                            <span style={{ fontSize: '15pt' }}>
                                This air quality monitor helps you to track real-time CO2 levels
                                wherever you go indoor & outdoor. Our pocket sized
                                monitor is the slimmest and handy device that you can
                                easily fit into your pocket.
                            </span>
                        </div>
                        <div className="col-md-6 border_left_line">
                            <div className="features_detail_box">
                                <ul>
                                    <li>
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2022/07/real-time-co2-levels.png" width={109} height={109} alt="real-time co2 level" />
                                        <span className="fetures_name" style={{ fontSize: '12pt' }}>Real-time Level</span>
                                    </li>
                                    <li>
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2022/07/wifi.png" width={109} height={109} alt="wifi icon" />
                                        <span className="fetures_name" style={{ fontSize: '12pt' }}>Wi-Fi Connectivity</span>
                                    </li>
                                    <li>
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2022/07/mobile-app.png" width={109} height={109} alt="mobile app icon" />
                                        <span className="fetures_name" style={{ fontSize: '12pt' }}>Mobile App Enabled</span>
                                    </li>
                                    <li>
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2022/07/portable-monitor.png" width={109} height={109} alt="portable monitor icon" />
                                        <span className="fetures_name" style={{ fontSize: '12pt' }}>Portable Monitor</span>
                                    </li>
                                    <li>
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2022/07/lcd-display.png" width={109} height={109} alt="lcd display icon" />
                                        <span className="fetures_name" style={{ fontSize: '12pt' }}>LCD Display</span>
                                    </li>
                                    <li>
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2022/07/battery.png" width={109} height={109} alt="battery icon" />
                                        <span className="fetures_name" style={{ fontSize: '12pt' }}>400 mAh Battery</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance Section */}
            <section className="qualitytative_features_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 text-center">
                            <p style={{ textAlign: 'center' }}>
                                <em>
                                    <span style={{ fontSize: '17pt' }}>
                                        <sup>
                                            <sub>
                                                <Image src="https://www.pranaair.com/wp-content/uploads/2022/07/compliance-icon.png" width={30} height={30} alt="compliance icon" />
                                            </sub> Compliance with <span style={{ color: '#4cae51' }}><strong>LEED, WELL,</strong></span> and <span style={{ color: '#4cae51' }}><strong>ASHRAE</strong></span> standards
                                        </sup>
                                    </span>
                                </em>
                            </p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </section>

            {/* Portable Monitor Image */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="pocket_portable_box">
                                <Image src="https://www.pranaair.com/wp-content/uploads/2022/08/portable-pocket-co2-monitor.jpeg" width={1200} height={400} alt="prana air portable pocket co2 monitor" className="Image-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Multiple User Interfaces Section */}
            <section className="bottom_tab_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="multi-data-content">
                                <h2 className="title_heading">
                                    Multiple User-Interfaces
                                    <span className="heading-leaf">
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" width={24} height={24} alt="logo" />
                                    </span>
                                </h2>
                                <p>
                                    Displaying the real-time CO2 levels in the form of both the emoticon
                                    and numerical screens. Green, yellow, and red color representation.
                                </p>
                            </div>
                            <div className="tab">
                                <button className="tablinks active" data-tab="Comonitora" onClick={(e) => openTab(e, 'Comonitora')}>
                                    <ul>
                                        <li>
                                            <Image src="https://www.pranaair.com/wp-content/uploads/2023/08/face-number-icon.png" width={30} height={30} alt="face and number screen" />
                                        </li>
                                        <li>
                                            <h3>Face + Number</h3>
                                            <p>Front view</p>
                                        </li>
                                    </ul>
                                </button>
                                <button className="tablinks" data-tab="Comonitorb" onClick={(e) => openTab(e, 'Comonitorb')}>
                                    <ul>
                                        <li>
                                            <Image src="https://www.pranaair.com/wp-content/uploads/2023/08/number-screen.png" width={30} height={30} alt="number screen" />
                                        </li>
                                        <li>
                                            <h3>Number Screen</h3>
                                            <p>Numerical View</p>
                                        </li>
                                    </ul>
                                </button>
                                <button className="tablinks" data-tab="Comonitorc" onClick={(e) => openTab(e, 'Comonitorc')}>
                                    <ul>
                                        <li>
                                            <Image src="https://www.pranaair.com/wp-content/uploads/2023/08/face-screen.png" width={30} height={30} alt="face screen" />
                                        </li>
                                        <li>
                                            <h3>Face Screen</h3>
                                            <p>Emoticon View</p>
                                        </li>
                                    </ul>
                                </button>
                                <button className="tablinks" data-tab="Comonitord" onClick={(e) => openTab(e, 'Comonitord')}>
                                    <ul>
                                        <li>
                                            <Image src="https://www.pranaair.com/wp-content/uploads/2023/08/graphic-screen.png" width={30} height={30} alt="graph screen" />
                                        </li>
                                        <li>
                                            <h3>Graph Screen</h3>
                                            <p>Historical Data</p>
                                        </li>
                                    </ul>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="Comonitora" className="tabcontent disply" style={{ display: 'block' }}>
                                <Image src="https://www.pranaair.com/wp-content/uploads/2023/10/face-number-co2-monitor.png" width={400} height={400} alt="prana air co2 monitor face and number screen" />
                            </div>
                            <div id="Comonitorb" className="tabcontent">
                                <Image src="https://www.pranaair.com/wp-content/uploads/2023/10/number-co2-monitor.png" width={400} height={400} alt="prana air co2 monitor number screen" />
                            </div>
                            <div id="Comonitorc" className="tabcontent">
                                <Image src="https://www.pranaair.com/wp-content/uploads/2023/10/face-co2-monitor.png" width={400} height={400} alt="prana air co2 monitor face screen" />
                            </div>
                            <div id="Comonitord" className="tabcontent">
                                <Image src="https://www.pranaair.com/wp-content/uploads/2023/10/graph-co2-monitor.png" width={400} height={400} alt="prana air co2 monitor graph screen" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Remote Data Accessibility */}
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="remote-data-para">
                                <h2 className="title_heading circle_heading data_heading">
                                    Remote Data
                                    <sup>
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" width={24} height={24} alt="logo" />
                                    </sup>
                                    Accessibility
                                </h2>
                                <p>
                                    AQI data cloud storage eases the accessibility of the monitors
                                    air quality data remotely anytime anywhere wherever you go.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Remote Data Images */}
            <section className="remote-data-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="remote-data-iamges">
                                <ul>
                                    <li className="image-box-first">
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2023/10/remote-data-co2-monitor.png" width={200} height={200} alt="prana air pocket co2 monitor wifi enabled" className="screen-monitor" />
                                        <h5>CO2 Monitor</h5>
                                    </li>
                                    <li className="image-box">
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2023/08/wifi-image.png" width={100} height={100} alt="wifi icon" className="wife" />
                                        <h5>WIFI Connectivity</h5>
                                    </li>
                                    <li className="image-box">
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2023/08/aqi-cloud.png" width={135} height={135} alt="aqi cloud" className="aqi-cloud" />
                                        <h5>AQI Cloud Server</h5>
                                    </li>
                                    <li>
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2023/08/mobile-app.png" width={220} height={220} alt="prana air pocket co2 monitor data on aqi app" className="mob-app" />
                                        <h5>CO2 data on AQI mobile app</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Key Features */}
            <section className="app-key-features">
                <div className="container">
                    <div className="product-tabs">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className={`nav-link ${activeProductTab === "handheld" ? "active" : ""}`} onClick={() =>
                                    setActiveProductTab("handheld")}
                                >
                                    AQI App
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className={`nav-link ${activeProductTab === "indoor" ? "active" : ""}`} onClick={() =>
                                    setActiveProductTab("indoor")}
                                >
                                    AQI Dashboard
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className={`nav-link ${activeProductTab === "outdoor" ? "active" : ""}`} onClick={() =>
                                    setActiveProductTab("outdoor")}
                                >
                                    AQI TV App
                                </button>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className={`tab-pane fade ${activeProductTab === "handheld" ? "show active" : ""}`}>
                                <div className="row">
                                    <div className="aqi-dashboard-para">
                                        <p>Connect your Prana Air Pocket CO2 monitor to AQI mobile app to track your CO2 levels in real time and ventilation score.</p>
                                    </div>
                                    <div className="tab-card row">
                                        <div className="col-md-6">
                                            <ul className="application-tabs">
                                                <li>
                                                    <div className="app-tab active" data-tab="tab1">Health Advice</div>
                                                </li>
                                                <li>
                                                    <div className="app-tab" data-tab="tab2">Ventilation Score</div>
                                                </li>
                                                <li>
                                                    <div className="app-tab" data-tab="tab3">Historic Data</div>
                                                </li>
                                                <li>
                                                    <div className="app-tab" data-tab="tab4">Monthly Insight</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="app-key-feature-mobile-bg">
                                                <ul>
                                                    <li data-tab="tab1">
                                                        <div id="tab1Content" className="app-tab-content active">
                                                            <p>Get the health advice for indoor CO2 level from AQI app</p>
                                                        </div>
                                                        <Image src="https://www.pranaair.com/wp-content/uploads/2023/08/health-advice-of-co2-level.webp"
                                                            width={220} height={220} alt="health advice of co2 level"
                                                            className="br-clr helth-advice-Image active" />
                                                    </li>
                                                    <li data-tab="tab2">
                                                        <div id="tab2Content" className="app-tab-content">
                                                            <p>You will understand how good or bad the CO2 levels are in your house.</p>
                                                        </div>
                                                        <Image src="https://www.pranaair.com/wp-content/uploads/2023/08/vantilation-score-data.png"
                                                            width={220} height={220} alt="co2 vantilation score data on aqi app"
                                                            className="br-clr vantilation-score-Image" />
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li data-tab="tab3">
                                                        <div id="tab3Content" className="app-tab-content">
                                                            <p>You can analyse the historic data of CO2 where you keep the monitor.</p>
                                                        </div>
                                                        <Image src="https://www.pranaair.com/wp-content/uploads/2023/08/pocket-co2-monitor-history-data.webp"
                                                            width={220} height={220} alt="pocket co2 monitor history data"
                                                            className="br-clr historic-data-Image" />
                                                    </li>
                                                    <li data-tab="tab4">
                                                        <div id="tab4Content" className="app-tab-content">
                                                            <p>The CO2 level of a whole month can be analysed on your fingertips</p>
                                                        </div>
                                                        <Image src="https://www.pranaair.com/wp-content/uploads/2023/08/monthly-insight-data.png" width={220}
                                                            height={220} alt="Prana Air co2 monitor calender monthly data"
                                                            className="br-clr monthly-insight-Image" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab-pane fade ${activeProductTab === "indoor" ? "show active" : ""}`}>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="dashboard-data">
                                            <ul>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/real-time-co2-level.png"
                                                        alt="real-time co2 data icon"
                                                        width={100}
                                                        height={100}
                                                    />
                                                    <h5>Real-time CO2 air quality data</h5>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-data.png"
                                                        alt="dashboard icon"
                                                        width={100}
                                                        height={100}
                                                    />
                                                    <h5>Insightful Air quality monitoring dashboard</h5>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-co2-graph-level.png"
                                                        alt="historic co2 graph"
                                                        width={100}
                                                        height={100}
                                                    />
                                                    <h5>Historic air quality graphs of CO2 level</h5>
                                                </li>
                                                <li>
                                                    <Image
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/health-recommendation.png"
                                                        alt="air quality health"
                                                        width={100}
                                                        height={100}
                                                    />
                                                    <h5>Air Quality health recommendations</h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <Image
                                            className="dashborad-Image"
                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-web-dashboard-for-pocket-co2-monitor.png"
                                            alt="prana air pocket co2 monitor on aqi web-dashboard"
                                            width={300}
                                            height={200}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={`tab-pane fade ${activeProductTab === "outdoor" ? "show active" : ""}`}>
                                <div className="aqi-dashboard-para">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="dashboard-data">
                                                <ul>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/real-time-co2-level.png"
                                                            alt="real-time co2 data"
                                                            width={100}
                                                            height={100}
                                                        />
                                                        <h5>Real-time CO2 air quality data</h5>
                                                    </li>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/historic-data.png"
                                                            alt="historic co2 data"
                                                            width={100}
                                                            height={100}
                                                        />
                                                        <h5>Historic data for 1, 8, 12 hours.</h5>
                                                    </li>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/control-tv-app-form-mobile.png"
                                                            alt="aqi tv app"
                                                            width={100}
                                                            height={100}
                                                        />
                                                        <h5>Control the TV app from mobile.</h5>
                                                    </li>
                                                    <li>
                                                        <Image
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/10/indicate-valid-score-co2.png"
                                                            alt="ventilation score"
                                                            width={100}
                                                            height={100}
                                                        />
                                                        <h5>The data indicates the ventilation score.</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <Image
                                                className="dashborad-Image tv-Image"
                                                src="https://www.pranaair.com/wp-content/uploads/2023/10/aqi-tv-app-pocket-co2-monitor.png"
                                                alt="prana air pocket co2 monitor on aqi tv-dashboard"
                                                width={300}
                                                height={200}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Connectivity Section */}
            <section className="data-connectivity-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="connectivity-content">
                                <h2 className="connectivity-title">
                                    Pocket PM2.5 Monitor
                                    <Image
                                        src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png"
                                        width={20} height={20}
                                        alt="Prana Air"
                                        className="title-icon"
                                    />
                                </h2>
                                <h3 className="connectivity-subtitle">Data connectivity to Mobile App</h3>

                                <div className="connectivity-steps">
                                    <div
                                        className={`connectivity-step ${activeStep === 1 ? "active-step" : ""}`}
                                        onClick={() => changeStep(1)}
                                    >
                                        <div className="step-icon">
                                            <Image
                                                src="https://www.pranaair.com/wp-content/uploads/2023/08/install.png.png"
                                                alt="Install AQI App"
                                                width={20} height={20}
                                            />
                                        </div>
                                        <div className="step-content">
                                            <h4 className="step-title">1. INSTALL AQI APP & SIGN UP</h4>
                                            <p className="step-description">
                                                Install the AQI app on your smartphones from the app store. Sign up & log in through your
                                                account.
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className={`connectivity-step ${activeStep === 2 ? "active-step" : ""}`}
                                        onClick={() => changeStep(2)}
                                    >
                                        <div className="step-icon">
                                            <Image src="https://www.pranaair.com/wp-content/uploads/2023/09/connect.png"
                                                width={20} height={20}
                                                alt="Connect Device" />
                                        </div>
                                        <div className="step-content">
                                            <h4 className="step-title">2. CONNECT THE DEVICE WITH THE APP</h4>
                                            <p className="step-description">
                                                Go to My Device & select Pocket PM2.5 Monitor. Long press the power button on top of the
                                                device until a QR code appears on the screen.
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className={`connectivity-step ${activeStep === 3 ? "active-step" : ""}`}
                                        onClick={() => changeStep(3)}
                                    >
                                        <div className="step-icon">
                                            <Image
                                                src="https://www.pranaair.com/wp-content/uploads/2023/09/scan-qr-code.png"
                                                width={20} height={20}
                                                alt="Scan QR Code"
                                            />
                                        </div>
                                        <div className="step-content">
                                            <h4 className="step-title">3. SCAN THE QR & CONFIGURE WIFI</h4>
                                            <p className="step-description">
                                                Scan the QR code or Enter the device ID displayed on your device screen. Fill in your Wi-Fi
                                                details. Your device should successfully be connected now.
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className={`connectivity-step ${activeStep === 4 ? "active-step" : ""}`}
                                        onClick={() => changeStep(4)}
                                    >
                                        <div className="step-icon">
                                            <Image
                                                src="https://www.pranaair.com/wp-content/uploads/2023/09/data.png"
                                                alt="Get Insightful Data"
                                                width={20} height={20}
                                            />
                                        </div>
                                        <div className="step-content">
                                            <h4 className="step-title">4. NOW GET THE INSIGHTFUL DATA-</h4>
                                            <p className="step-description">
                                                Analyse the PM2.5 level in real-time & historical data stored in the AQI cloud through the app
                                                on your smartphone.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="download-app-section">
                                    <h3 className="download-title">
                                        Download the <span className="highlight-text">AQI App</span>
                                    </h3>
                                    <p className="download-description">
                                        Integrate your monitors data to our mobile application to access the data remotely and analyze the
                                        historical trend.
                                    </p>
                                    <div className="app-store-buttons">
                                        <a
                                            href="https://play.google.com/store/apps/details?id=com.aqi.data"
                                            className="app-store-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                src="https://www.pranaair.com/wp-content/uploads/2021/03/google-play-store.png"
                                                alt="Google Play Store"
                                                width={20} height={20}
                                            />
                                        </a>
                                        <a
                                            href="https://apps.apple.com/tt/app/airqualityindex-aqi/id1439684571"
                                            className="app-store-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                src="https://www.pranaair.com/wp-content/uploads/2021/02/appstore.png"
                                                alt="Apple App Store"
                                                width={20} height={20}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="app-preview">
                                <div className="app-image-container">
                                    {activeStep === 1 && (
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2022/06/1.png"
                                            alt="Install AQI App Preview"
                                            width={600} height={400}
                                        />
                                    )}
                                    {activeStep === 2 && (
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/09/connect-device-with-our-app.png"
                                            alt="Connect Device Preview"
                                            width={600} height={400}
                                        />
                                    )}
                                    {activeStep === 3 && (
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/09/scan-qr-and-configure-with-wifi.png"
                                            alt="Scan QR Code Preview"
                                            width={600} height={400}
                                        />
                                    )}
                                    {activeStep === 4 && (
                                        <Image
                                            src="https://www.pranaair.com/wp-content/uploads/2023/09/insightful-data.png"
                                            alt="Insightful Data Preview"
                                            width={600} height={400}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Slider */}
            <section className="pocket_flex_slider">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 product-slider-first">
                            <div id="MonitorTab1" className="new-tabcontent disply" style={{ display: 'block' }}>
                                <Image src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-co2-monitor-face-and-number-screen.png" width={400} height={400} alt="prana-air-smart-portable-monitor" />
                            </div>
                            <div id="MonitorTab2" className="new-tabcontent">
                                <Image src="https://www.pranaair.com/wp-content/uploads/2023/08/co2-monitor-left-view.png" width={400} height={400} alt="pocket-monitor-side-view" />
                            </div>
                            <div id="MonitorTab3" className="new-tabcontent">
                                <Image src="https://www.pranaair.com/wp-content/uploads/2023/08/co2-monitor-side-view.png" width={400} height={400} alt="pm-pocket-monitor-sideview" />
                            </div>
                            <div className="new-tab">
                                <button className="new-tablinks active" data-tab="MonitorTab1" onClick={(e) => openNewTab(e, 'MonitorTab1')}>
                                    <Image src="https://www.pranaair.com/wp-content/uploads/2023/10/prana-air-co2-monitor-face-and-number-screen.png" width={80} height={80} alt="prana-air-smart-portable-monitor" />
                                </button>
                                <button className="new-tablinks" data-tab="MonitorTab2" onClick={(e) => openNewTab(e, 'MonitorTab2')}>
                                    <Image src="https://www.pranaair.com/wp-content/uploads/2023/08/co2-monitor-left-view.png" width={80} height={80} alt="pocket-monitor-side-view" />
                                </button>
                                <button className="new-tablinks" data-tab="MonitorTab3" onClick={(e) => openNewTab(e, 'MonitorTab3')}>
                                    <Image src="https://www.pranaair.com/wp-content/uploads/2023/08/co2-monitor-side-view.png" width={80} height={80} alt="pm-pocket-monitor-sideview" />
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6 pocket_slider_content">
                            <h2 className="title_heading circle_heading">
                                Salient Features
                                <sup>
                                    <Image src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" width={24} height={24} alt="logo" />
                                </sup>
                                CO2 Monitor
                            </h2>
                            <p>
                                Our monitor detects CO<sub>2</sub> levels at ±5 % accuracy with the help of an in-built NDIR sensor.
                                The product has a 400 mAh battery with 30 minutes (approx.) charging time.
                                It can measure the CO<sub>2</sub> range up to 9999 ppm.
                            </p>
                            <div className="introduce_features clearfix">
                                <ul>
                                    <li><span className="highlight_feature">Type-C USB</span>Charging</li>
                                    <li><span className="highlight_feature">CO<sub>2</sub> Level</span>Real-time Data</li>
                                    <li><span className="highlight_feature">400mAh</span>Battery</li>
                                    <li><span className="highlight_feature">Size</span>Pocket</li>
                                    <li><span className="highlight_feature">NDIR</span>Sensor</li>
                                    <li><span className="highlight_feature">WiFi 2.4 GHz</span>Connectivity</li>
                                </ul>
                            </div>
                            <div className="introduce_button">
                                <Link href="https://www.pranaair.com/wp-content/uploads/2023/10/Prana-Air-Pocket-CO2-Air-Quality-Monitor-Brochure.pdf" className="pocket_buy_btn black_download_brochure">
                                    <Image src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png" width={20} height={20} alt="download icon" /> Brochure
                                </Link>
                                <Link href="https://www.pranaair.com/wp-content/uploads/2024/10/Prana-air-Pocket-CO2-air-quality-monitor-manual.pdf" className="pocket_buy_btn black_download_brochure">
                                    <Image src="https://www.pranaair.com/wp-content/uploads/2023/06/brochore-btn.png" width={20} height={20} alt="download icon" /> Manual
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="tech-spec-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pocket-air-sec">
                            <div className="tech-spec-heading">
                                <h2 className="title_heading circle_heading data_heading">
                                    Technical Specifications
                                    <sup>
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" width={24} height={24} alt="logo" />
                                    </sup>
                                </h2>
                                <p>CO2 Monitor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications Details */}
            <section className="tech-spec-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pocket-air-sec">
                            <div className="tech-spec">
                                <div className="tech-spec-colm">
                                    <ul>
                                        <li>
                                            <h6>Product Name :</h6>
                                            <h5>Pocket CO2 monitor</h5>
                                        </li>
                                        <li className="tech-spec-row-bg">
                                            <h6>Sensor :</h6>
                                            <h5>CO2 NDIR</h5>
                                        </li>
                                        <li>
                                            <h6>Dimension :</h6>
                                            <h5>5.8 x 2.5 x 4.6 cm</h5>
                                        </li>
                                        <li className="tech-spec-row-bg">
                                            <h6>Power Supply :</h6>
                                            <h5>5V DC / Type-C USB cable</h5>
                                        </li>
                                        <li>
                                            <h6>Connectivity :</h6>
                                            <h5>WiFi [2.4GHz]</h5>
                                        </li>
                                        <li className="tech-spec-row-bg">
                                            <h6>Mobile App Enabled :</h6>
                                            <h5>AQI Mobile App [iOS &amp; Android]</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tech-spec">
                                <div className="tech-spec-colm">
                                    <ul>
                                        <li>
                                            <h6>Range :</h6>
                                            <h5>Up to 9999 ppm</h5>
                                        </li>
                                        <li className="tech-spec-row-bg">
                                            <h6>Operating temperature range:</h6>
                                            <h5>-5° C - 45°C</h5>
                                        </li>
                                        <li>
                                            <h6>Weight :</h6>
                                            <h5>60 gram</h5>
                                        </li>
                                        <li className="tech-spec-row-bg">
                                            <h6>Display :</h6>
                                            <h5>LCD Display</h5>
                                        </li>
                                        <li>
                                            <h6>Data Storage :</h6>
                                            <h5>AQI Cloud Storage (option)</h5>
                                        </li>
                                        <li className="tech-spec-row-bg">
                                            <h6>Battery :</h6>
                                            <h5>400 mAh rechargeable battery</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NDIR Technology Section */}
            <section className="ndir-techo-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ndir-sensor-Image">
                                <Image src="https://www.pranaair.com/wp-content/uploads/2023/10/ndir-sensor-for-pocket-co2-monitor.png" width={600} height={600} alt="prana air ndir sensor for pocket co2 monitor" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ndir-sensor-taxt">
                                <h2><span className="ndir">NDIR</span> Technology</h2>
                                <h3>for more Accurate Detection</h3>
                                <p>With Prana Airs CO2 sensor is based on the non-dispersive infrared (NDIR) principle, which is the most widely used and trusted technology for CO2 sensing.</p>
                                <Link href="https://www.pranaair.com/air-quality-sensor/carbon-dioxide-co2-sensor/">Find Out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CO2 Health Index */}
            <section className="quality_range_section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="introducing_box text-center">
                                <h2 className="title_heading">
                                    CO2 Health Index
                                    <sup>
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" width={24} height={24} alt="logo" />
                                    </sup>
                                </h2>
                                <span style={{ fontSize: '13pt' }}>
                                    The CO<sub>2</sub> health index will help you understand the quality of the air you breathe and
                                    the health impacts. You will also know if your house or office ventilation
                                    system is good or bad.
                                </span>
                                <p>
                                    <span style={{ fontSize: '13pt' }}><Link href="/what-is-carbon-dioxide-co2/">Know More</Link></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <section className="range_section">
                                <div className="range_cntr">
                                    <ul>
                                        <li className="good_range active_range">
                                            <span className="range_text">Good</span>
                                            <div className="range_color"></div>
                                            <small className="range_no">350-700</small>
                                            <div className="hover_range_box">
                                                <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/good_child.png" width={55} height={55} alt="good co2 level" />
                                                <div className="tooltip_aqi">
                                                    The air is fresh and free from toxins. People are not exposed to any health risk.
                                                </div>
                                            </div>
                                        </li>
                                        <li className="moderate_range">
                                            <span className="range_text">Moderate</span>
                                            <div className="range_color"></div>
                                            <small className="range_no">701-900</small>
                                            <div className="hover_range_box">
                                                <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate_child.png" width={55} height={55} alt="moderate co2 level" />
                                                <div className="tooltip_aqi">
                                                    Indoor CO2 levels with a good ventilation rate
                                                </div>
                                            </div>
                                        </li>
                                        <li className="poor_range">
                                            <span className="range_text">Poor</span>
                                            <div className="range_color"></div>
                                            <small className="range_no">901-1200</small>
                                            <div className="hover_range_box">
                                                <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/poor_child.png" width={88} height={88} alt="poor co2 level" />
                                                <div className="tooltip_aqi">
                                                    Tiredness, laziness, and stuffiness in the air
                                                </div>
                                            </div>
                                        </li>
                                        <li className="unhealthy_range">
                                            <span className="range_text">Unhealthy</span>
                                            <div className="range_color"></div>
                                            <small className="range_no">1201-1500</small>
                                            <div className="hover_range_box">
                                                <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/unhealthy_child.png" width={68} height={68} alt="unhealthy co2 level" />
                                                <div className="tooltip_aqi">
                                                    Lack of concentration, sleepiness, drowsiness, headaches, increased heart rate, stuffiness in the air, nausea, etc. can be experienced.
                                                </div>
                                            </div>
                                        </li>
                                        <li className="serve_range">
                                            <span className="range_text">Severe</span>
                                            <div className="range_color"></div>
                                            <small className="range_no">1501-2500</small>
                                            <div className="hover_range_box">
                                                <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/sevre_child.png" width={74} height={74} alt="severe co2 level" />
                                                <div className="tooltip_aqi">
                                                    Many countries have occupational exposure (like an eight-hour TWA).
                                                </div>
                                            </div>
                                        </li>
                                        <li className="hazaedous_range">
                                            <span className="range_text">Hazardous</span>
                                            <div className="range_color"></div>
                                            <small className="range_no">2500+</small>
                                            <div className="hover_range_box">
                                                <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/hazardous_child.png" width={106} height={106} alt="hazardous co2 level" />
                                                <div className="tooltip_aqi">
                                                    <span style={{ fontSize: '12pt' }}>Such high levels of exposure can cause acute oxygen shortage, unconsciousness, severe neurological damage, and even death.</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="introducing_box text-center">
                                <h2 className="title_heading">
                                    Applications of CO<sub>2</sub> Monitor
                                    <sup>
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" width={24} height={24} alt="logo" />
                                    </sup>
                                </h2>
                                <span style={{ fontSize: '14pt' }}>
                                    Based on the dense CO2 concentrations that can be present indoors, Prana Air Pocket CO2 monitor
                                    can have various indoor applications like home, school, office, etc. The below cases are on a condition when any fresh air machine or proper ventilation system is not facilitated.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="app-tabs">
                            <ul className="app-nav-tabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className={`nav-link ${appTab === "Home" ? "active" : ""}`} onClick={() =>
                                        setAppProductTab("Home")}
                                    >
                                        Home
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className={`nav-link ${appTab === "School" ? "active" : ""}`} onClick={() =>
                                        setAppProductTab("School")}
                                    >
                                        School
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className={`nav-link ${appTab === "Office" ? "active" : ""}`} onClick={() =>
                                        setAppProductTab("Office")}
                                    >
                                        Office
                                    </button>
                                </li>
                            </ul>

                            <div className="app-tabs">
                                <div className={`tab-pane fade ${appTab === "Home" ? "show active" : ""}`}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="tab_left_Image"><span className="range_btn_Image">
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-tag.png" width={30}
                                                    height={30} alt="moderate co2 level" />
                                            </span>
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-home.jpg" width={300}
                                                    height={300} alt="moderate co2 level at home" />
                                                <span className="tab_monitor_device">
                                                    <Image decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/face-number-co2-monitor.png" width={300}
                                                        height={300}
                                                        alt="moderate co2 level on monitor" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p><span className="application_no">01</span></p>
                                                <h3 style={{ textAlign: "left", color: "#e8c92e" }}>
                                                    Moderate CO<sub>2</sub> At Home – Morning
                                                </h3>
                                                <p style={{ textAlign: "justify", fontSize: "13pt" }}>
                                                    Usually, at the beginning of the day, the CO₂ levels will range from good to moderate in the
                                                    early morning.
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-co2-icon.png"
                                                        alt="moderate co2 icon" width="20" height="20" /> CO₂ Range: Between 400-1000 ppm
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-co2-icon.png"
                                                        alt="moderate co2 icon" width="20" height="20" /> Time Frame: Till 10 am
                                                </p>
                                                <p style={{ fontSize: "13pt", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-co2-icon.png"
                                                        alt="moderate co2 icon" width="20" height="20" /> Health Impacts: Headaches, vomiting, &
                                                    drowsiness.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p style={{ textAlign: "right", }}><span className="application_no">02</span></p>
                                                <h3 style={{ textAlign: "right", color: "#33c262" }}>
                                                    Good CO<sub>2</sub> At Home – Morning
                                                </h3>
                                                <p style={{ textAlign: "right", fontSize: "13pt" }}>
                                                    When there is proper ventilation and the number of people inside a house is minimal, CO2 levels remain under the good category.
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    Levels 250 ppm : CO2 Range <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" />
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    10 am – 5 pm : Time Frame <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" />
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", color: "#1c1b1b" }}>
                                                    Safe to breathe : Health Impacts   <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" />
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="tab_left_Image"><span className="range_btn_Image">
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/good-tag.png" width={30}
                                                    height={30} alt="good air co2 level" />
                                            </span>
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/good-home.jpg" width={300}
                                                    height={300} alt="moderate co2 level at home" />
                                                <span className="tab_monitor_device">
                                                    <Image decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/co2-monitor-in-home-device.png" width={300}
                                                        height={300}
                                                        alt="moderate co2 level on monitor" />
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="tab_left_Image"><span className="range_btn_Image">
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-tag.png" width={30}
                                                    height={30} alt="moderate co2 level" />
                                            </span>
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-home.jpg" width={300}
                                                    height={300} alt="moderate co2 level at home" />
                                                <span className="tab_monitor_device">
                                                    <Image decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/remote-data-co2-monitor.png" width={300}
                                                        height={300}
                                                        alt="moderate co2 level on monitor" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p><span className="application_no">03</span></p>
                                                <h3 style={{ textAlign: "left", color: "#db4746" }}>
                                                    Moderate CO<sub>2</sub> At Home – Morning
                                                </h3>
                                                <p style={{ textAlign: "justify", fontSize: "13pt" }}>
                                                    Usually, at the beginning of the day, the CO₂ levels will range from good to moderate in the
                                                    early morning.
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" /> CO₂ Range: Between 400-1000 ppm
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" /> Time Frame: Till 10 am
                                                </p>
                                                <p style={{ fontSize: "13pt", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" /> Health Impacts: Headaches, vomiting, &
                                                    drowsiness.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`tab-pane fade ${appTab === "School" ? "show active" : ""}`}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="tab_left_Image"><span className="range_btn_Image">
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-tag.png" width={30}
                                                    height={30} alt="moderate co2 level" />
                                            </span>
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-classroom.jpg" width={300}
                                                    height={300} alt="moderate co2 level at home" />
                                                <span className="tab_monitor_device">
                                                    <Image decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/face-number-co2-monitor.png" width={300}
                                                        height={300}
                                                        alt="moderate co2 level on monitor" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p><span className="application_no">01</span></p>
                                                <h3 style={{ textAlign: "left", color: "#e8c92e" }}>
                                                    Moderate CO2 in School – Morning
                                                </h3>
                                                <p style={{ textAlign: "justify", fontSize: "13pt" }}>
                                                    Usually, the CO2 level in the early morning is moderate when the number of students and staff is not much. The range increases when the number of students and staff increases.
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-co2-icon.png"
                                                        alt="moderate co2 icon" width="20" height="20" /> CO2 Range: Between 400-1000 ppm
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-co2-icon.png"
                                                        alt="moderate co2 icon" width="20" height="20" /> Time Frame: From 8 am – 12 pm
                                                </p>
                                                <p style={{ fontSize: "13pt", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-co2-icon.png"
                                                        alt="moderate co2 icon" width="20" height="20" /> Health Impacts: lifelong respiratory infections, unattentiveness, etc.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p style={{ textAlign: "right", }}><span className="application_no">02</span></p>
                                                <h3 style={{ textAlign: "right", color: "#33c262" }}>
                                                    Good CO2 in School – Evening
                                                </h3>
                                                <p style={{ textAlign: "right", fontSize: "13pt" }}>
                                                    As the school day ends, there is a progressive decline in the number of students on the school grounds. When the ventilation rate is good, CO2 levels start to decline and the air quality begins to improve.
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    CO2 Range: ≤ 1000 ppm<Image src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" />
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    Time Frame: Between 12-2 PM  <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" />
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", color: "#1c1b1b" }}>
                                                    Health Impacts: Cognitive, IQ skills, mental abilities of the child   <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" />
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="tab_left_Image"><span className="range_btn_Image">
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/good-tag.png" width={30}
                                                    height={30} alt="good air co2 level" />
                                            </span>
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/good-classroom.jpg" width={300}
                                                    height={300} alt="moderate co2 level at home" />
                                                <span className="tab_monitor_device">
                                                    <Image decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/co2-monitor-in-home-device.png" width={300}
                                                        height={300}
                                                        alt="moderate co2 level on monitor" />
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="tab_left_Image"><span className="range_btn_Image">
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-tag.png" width={30}
                                                    height={30} alt="moderate co2 level" />
                                            </span>
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-classroom-1.jpg" width={300}
                                                    height={300} alt="moderate co2 level at home" />
                                                <span className="tab_monitor_device">
                                                    <Image decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/remote-data-co2-monitor.png" width={300}
                                                        height={300}
                                                        alt="moderate co2 level on monitor" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p><span className="application_no">03</span></p>
                                                <h3 style={{ textAlign: "left", color: "#db4746" }}>
                                                    Bad CO2 in School – Day (Afternoon)
                                                </h3>
                                                <p style={{ textAlign: "justify", fontSize: "13pt" }}>
                                                    An increase in the CO2 levels even by 100 ppm corresponds to a 0.2% increase in absence rates.
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" /> CO2 Range: 2000 ppm.
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" /> Time Frame: Between 12-2 PM
                                                </p>
                                                <p style={{ fontSize: "13pt", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" /> Health Impacts: Cognitive, IQ skills, mental abilities of the child
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`tab-pane fade ${appTab === "Office" ? "show active" : ""}`}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="tab_left_Image"><span className="range_btn_Image">
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-tag.png" width={30}
                                                    height={30} alt="moderate co2 level" />
                                            </span>
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-office.jpg" width={300}
                                                    height={300} alt="moderate co2 level at home" />
                                                <span className="tab_monitor_device">
                                                    <Image decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/face-number-co2-monitor.png" width={300}
                                                        height={300}
                                                        alt="moderate co2 level on monitor" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p><span className="application_no">01</span></p>
                                                <h3 style={{ textAlign: "left", color: "#e8c92e" }}>
                                                    Moderate CO2 in Office – Morning
                                                </h3>
                                                <p style={{ textAlign: "justify", fontSize: "13pt" }}>
                                                    Early in the morning, when working hour begins, CO2 levels are typical to moderate as the employees are not fully present.
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-co2-icon.png"
                                                        alt="moderate co2 icon" width="20" height="20" /> CO2 Range: 1000 ppm
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/good-office.jpg"
                                                        alt="moderate co2 icon" width="20" height="20" /> Time Frame: From 9 am – 11 pm
                                                </p>
                                                <p style={{ fontSize: "13pt", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/moderate-co2-icon.png"
                                                        alt="moderate co2 icon" width="20" height="20" /> Health Impacts: Employees feel fresh and active when there are good to moderate CO2 levels.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p style={{ textAlign: "right", }}><span className="application_no">02</span></p>
                                                <h3 style={{ textAlign: "right", color: "#33c262" }}>
                                                    Bad CO2 in Office – Day (Afternoon)
                                                </h3>
                                                <p style={{ textAlign: "right", fontSize: "13pt" }}>
                                                    As all the employees are present, then CO2 levels rise as a result of respiration and accumulate over time, they are in an unhealthy range.
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    CO2 Range: It can exceed up to 3000 ppm<Image src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" />
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    Time Frame: between 12 pm – 4 pm  <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" />
                                                </p>
                                                <p style={{ textAlign: "right", fontSize: "13pt", color: "#1c1b1b" }}>
                                                    Health Impacts: Dizziness, loss of coordination, unattentiveness   <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/good-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" />
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="tab_left_Image"><span className="range_btn_Image">
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/good-tag.png" width={30}
                                                    height={30} alt="good air co2 level" />
                                            </span>
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-classroom-1.jpg" width={300}
                                                    height={300} alt="moderate co2 level at home" />
                                                <span className="tab_monitor_device">
                                                    <Image decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/co2-monitor-in-home-device.png" width={300}
                                                        height={300}
                                                        alt="moderate co2 level on monitor" />
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="tab_left_Image"><span className="range_btn_Image">
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-tag.png" width={30}
                                                    height={30} alt="moderate co2 level" />
                                            </span>
                                                <Image decoding="async"
                                                    src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-classroom-1.jpg" width={300}
                                                    height={300} alt="moderate co2 level at home" />
                                                <span className="tab_monitor_device">
                                                    <Image decoding="async"
                                                        src="https://www.pranaair.com/wp-content/uploads/2023/10/remote-data-co2-monitor.png" width={300}
                                                        height={300}
                                                        alt="moderate co2 level on monitor" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="application_text_box">
                                                <p><span className="application_no">03</span></p>
                                                <h3 style={{ textAlign: "left", color: "#db4746" }}>
                                                    Bad CO2 in School – Day (Afternoon)
                                                </h3>
                                                <p style={{ textAlign: "justify", fontSize: "13pt" }}>
                                                    An increase in the CO2 levels even by 100 ppm corresponds to a 0.2% increase in absence rates.
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" /> CO2 Range: 2000 ppm.
                                                </p>
                                                <p style={{ fontSize: "13pt", paddingBottom: "10px", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" /> Time Frame: Between 12-2 PM
                                                </p>
                                                <p style={{ fontSize: "13pt", color: "#1c1b1b" }}>
                                                    <Image src="https://www.pranaair.com/wp-content/uploads/2022/06/bad-co2-icon-100x100.png"
                                                        alt="moderate co2 icon" width="20" height="20" /> Health Impacts: Cognitive, IQ skills, mental abilities of the child
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Places with High CO2 */}
            <section className="product_application_sec">
                <div className="container">
                    <div className="row">
                        <div className="introducing_box text-center">
                            <h2 className="places_heading">
                                Places Where There is High CO2 Level
                                <sup>
                                    <Image src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" width={24} height={24} alt="logo" />
                                </sup>
                            </h2>
                            <span style={{ fontSize: '14pt' }}>
                                It helps you understand the level of Carbon Dioxide of your location. Works as both – real-time indoor and outdoor CO2
                                monitoring sensor; the LCD display shows you CO2 reading indicating


                            </span>
                        </div>
                        <div className="col-md-6">
                            <div className="pocket_monitor_cntr">
                                <Image src="https://www.pranaair.com/wp-content/uploads/2022/07/co2-monitor-at-home.jpg" width={600} height={400} alt="high co2 level at home" />
                                <div className="pocket_overlay_box pocket_overlay_box2 hover_overlay_pocket">
                                    <h3>Home</h3>
                                    <p>
                                        CO2 monitoring becomes necessary since different age groups are present
                                        in a typical house setting. High CO2 concentrations have diverse effects
                                        on different age groups. Children and the elderly are particularly affected.
                                        If you have pets, the high levels of CO2 will also harm them. To prevent
                                        carbon dioxide poisoning in you, your children, the elderly, and your pets,
                                        you can ensure that the desired levels of CO2 are maintained within
                                        your homes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pocket_monitor_cntr">
                                <Image src="https://www.pranaair.com/wp-content/uploads/2022/07/co2-monitor-at-school.jpg" width={600} height={400} alt="high co2 level at school" />
                                <div className="pocket_overlay_box pocket_overlay_box2 hover_overlay_pocket">
                                    <h3>Schools</h3>
                                    <p>
                                        Besides our homes, we spend the majority of our time indoors at schools
                                        /offices. CO2 levels are generally greater in both classrooms and business
                                        settings. When students and staff are exposed to high CO2 levels, they
                                        may become drowsy, tired, and lose attention, resulting in poor academic
                                        and overall performance. The staffs thinking abilities are also hampered.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pocket_monitor_cntr">
                                <Image src="https://www.pranaair.com/wp-content/uploads/2022/07/co2-monitor-at-mall.jpg" width={600} height={400} alt="high co2 level at mall" />
                                <div className="pocket_overlay_box pocket_overlay_box2 hover_overlay_pocket">
                                    <h3>Malls</h3>
                                    <p>
                                        The indoor air quality and ventilation rates of a building are monitored
                                        with the help of a CO2 monitor. There is a constant movement of people inside
                                        malls and shop establishments. When a few of them depart, new people enter.
                                        As a result, contaminants like carbon dioxide accumulates in malls and retail
                                        stores. Monitoring CO2 levels in the retail sector is therefore much more
                                        crucial in light of this.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pocket_monitor_cntr">
                                <Image src="https://www.pranaair.com/wp-content/uploads/2022/07/co2-monitor-at-hospitals.jpg" width={600} height={400} alt="high co2 level at hospital" />
                                <div className="pocket_overlay_box pocket_overlay_box2 hover_overlay_pocket">
                                    <h3>Hospitals</h3>
                                    <p>
                                        According to a 2011 Infinium Medical, Inc. study, 82% of critical care
                                        accidents that resulted in brain damage and death might have been avoided
                                        if CO2 had been monitored and the necessary steps are taken to lower the
                                        excessive levels. Monitoring CO2 levels is frequently overlooked when managing
                                        the hospits indoor air quality. When these levels are kept in check,
                                        recovery time and attention problems improve.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pocket_monitor_cntr">
                                <Image src="https://www.pranaair.com/wp-content/uploads/2022/07/co2-monitor-at-restaurant.jpg" width={600} height={400} alt="high co2 level in restaurants" />
                                <div className="pocket_overlay_box pocket_overlay_box2 hover_overlay_pocket">
                                    <h3>Restaurants</h3>
                                    <p>
                                        Monitoring CO2 will be helpful since increased CO2 exhalation by residents
                                        increases the risk of viral transmission (such as covid-19). On a smart LCD
                                        TV screen, the real-time CO2 levels can be displayed. Checking the AQI of
                                        hotels and restaurants will be made easier with the help of monitoring. Staff
                                        productivity will rise as a result of ongoing CO2 monitoring.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pocket_monitor_cntr">
                                <Image src="https://www.pranaair.com/wp-content/uploads/2022/07/co2-monitor-at-subway.jpg" width={600} height={400} alt="high co2 level in metro subways" />
                                <div className="pocket_overlay_box pocket_overlay_box2 hover_overlay_pocket">
                                    <h3>Metro Subways</h3>
                                    <p>
                                        Monitoring CO2 levels offer a helpful measure of how well-ventilated inhabited
                                        indoor spaces are. These places include airports and metro subways, where the
                                        population is fluid and people are constantly arriving and departing, especially
                                        during peak hours. To protect public health, it is necessary to continuously
                                        monitor interior air pollutant levels in subway stations and airports, where the
                                        accumulation of pollutants is very easy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clean Air Quality Solution */}
            <section className="smallest_portable_section">
                <div className="container-fluid">
                    <div className="row equal-height content-placement-middle">
                        <div className="col-md-6" style={{ backgroundColor: '#f2f8f0', paddingLeft: '90px' }}>
                            <div className="pocket_cntr_bg">
                                <h2 className="title_heading">
                                    <span style={{ fontSize: '24pt', lineHeight: '55px' }}>Clean Air Quality Solution</span>
                                    <sup>
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" width={24} height={24} alt="logo" />
                                    </sup>
                                    <span style={{ fontSize: '24pt' }}>Fresh Air Machine</span>
                                </h2>
                                <span style={{ fontSize: '14pt' }}>Prana Air provides the solution to indoor air pollution with an air purifying machine to purify the air pollutants.</span>
                                <Link href="/fresh-air-machine/" className="learn_more">&gt;&gt;Learn More</Link>
                            </div>
                        </div>
                        <div className="col-md-6 clean-air-Image">
                            <Image src="https://www.pranaair.com/wp-content/uploads/2022/07/air-quality-solutions-of-prana-air-1.png" width={600} height={400} alt="fresh air machine" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By Section */}
            <section className="trusted-by-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="trusted_heading">
                                Trusted By
                                <sup>
                                    <Image src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" width={24} height={24} alt="logo" />
                                </sup>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="logo-box">
                            <ul>
                                <li><Image src="https://www.pranaair.com/wp-content/uploads/2022/07/ola.jpg" width={65} height={65} alt="microsoft logo" /></li>
                                <li><Image src="https://www.pranaair.com/wp-content/uploads/2022/07/microsoftt.jpg" width={65} height={65} alt="microsoft logo" /></li>
                                <li><Image src="https://www.pranaair.com/wp-content/uploads/2022/07/marriott.jpg" width={65} height={65} alt="microsoft logo" /></li>
                                <li><Image src="https://www.pranaair.com/wp-content/uploads/2022/07/tata.jpg" width={65} height={65} alt="microsoft logo" /></li>
                                <li><Image src="https://www.pranaair.com/wp-content/uploads/2022/07/havellss.jpg" width={65} height={65} alt="microsoft logo" /></li>
                                <li><Image src="https://www.pranaair.com/wp-content/uploads/2022/07/csir.jpg" width={65} height={65} alt="microsoft logo" /></li>
                                <li><Image src="https://www.pranaair.com/wp-content/uploads/2022/07/gmda.jpg" width={65} height={65} alt="microsoft logo" /></li>
                                <li><Image src="https://www.pranaair.com/wp-content/uploads/2022/07/cii.jpg" width={65} height={65} alt="microsoft logo" /></li>
                                <li><Image src="https://www.pranaair.com/wp-content/uploads/2022/07/morgan.jpg" width={65} height={65} alt="microsoft logo" /></li>
                                <li><Image src="https://www.pranaair.com/wp-content/uploads/2022/07/interglobe.jpg" width={65} height={65} alt="microsoft logo" /></li>
                                <li><Image src="https://www.pranaair.com/wp-content/uploads/2022/07/mahindra.jpg" width={65} height={65} alt="microsoft logo" /></li>
                                <li><Image src="https://www.pranaair.com/wp-content/uploads/2022/07/renault-nissan.jpg" width={65} height={65} alt="microsoft logo" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Smallest & Portable Section */}
            <section className="smallest_portable">
                <div className="container">
                    <div className="row smallest_portable_monitore-section">
                        <div className="col-md-7">
                            <div className="smallest-portable-heading">
                                <h2>Smallest &amp; Portable</h2>
                                <h3>
                                    CO<sub>2</sub> Monitor
                                    <span className="heading-Image">
                                        <Image src="https://www.pranaair.com/wp-content/uploads/2021/02/logo-icon-top.png" width={24} height={24} alt="leaf icon" />
                                    </span>
                                </h3>
                                <div className="buy-btns">
                                    <ul>
                                        <li><Link href="/?page_id=9&amp;add-to-cart=52265">Buy Now</Link></li>
                                        <li><Link href="https://www.amazon.in/dp/B0CKQXGKW1?ref=myi_title_dp">Amazon</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <Image src="https://www.pranaair.com/wp-content/uploads/2023/08/pocket-co2-side-view-300x259.png" width={220} height={220} alt="pocket co2 monitor side view" className="pocket-co-monitor-side-view" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
