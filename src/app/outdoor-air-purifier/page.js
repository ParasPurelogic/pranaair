"use client"

import { useEffect } from "react"
import "./style.css"
import "react-multi-carousel/lib/styles.css"

export default function OutdoorAirPurifier() {
  useEffect(() => {
    // Initialize video overlay functionality
    const playVideo = document.getElementById("play-video")
    const playVideo2 = document.getElementById("play-video2")
    const videoOverlay = document.getElementById("video-overlay")
    const videoOverlay2 = document.getElementById("video-overlay2")
    const videoOverlayClose = document.querySelectorAll(".video-overlay-close")

    if (playVideo) {
      playVideo.addEventListener("click", (e) => {
        e.preventDefault()
        videoOverlay.classList.add("open")
        videoOverlay.innerHTML +=
          '<video controls autoplay> <source src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-outdoor-air-purifier-filtration.mp4" type="video/mp4"></video>'
      })
    }

    if (playVideo2) {
      playVideo2.addEventListener("click", (e) => {
        e.preventDefault()
        videoOverlay2.classList.add("open")
        videoOverlay2.innerHTML +=
          '<video controls autoplay> <source src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-outdoor-air-purifier.mp4" type="video/mp4"></video>'
      })
    }

    if (videoOverlayClose) {
      videoOverlayClose.forEach((close) => {
        close.addEventListener("click", (e) => {
          e.preventDefault()
          closeVideo()
        })
      })
    }

    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        closeVideo()
      }
    })

    function closeVideo() {
      const openOverlays = document.querySelectorAll(".video-overlay.open")
      openOverlays.forEach((overlay) => {
        overlay.classList.remove("open")
        const videos = overlay.querySelectorAll("video")
        videos.forEach((video) => {
          video.remove()
        })
      })
    }

    // Add click event for video overlays
    const overlays = document.querySelectorAll(".video-overlay")
    overlays.forEach((overlay) => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          closeVideo()
        }
      })
    })

    return () => {
      // Cleanup event listeners
      if (playVideo) {
        playVideo.removeEventListener("click", () => {})
      }
      if (playVideo2) {
        playVideo2.removeEventListener("click", () => {})
      }
      if (videoOverlayClose) {
        videoOverlayClose.forEach((close) => {
          close.removeEventListener("click", () => {})
        })
      }
      document.removeEventListener("keyup", () => {})
    }
  }, [])

  return (
    <div className="outdoor-air-purifier-page">
      {/* Invisible Killers Section */}
      <div className="container" style={{ paddingTop: "30px" }}>
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ textAlign: "center", fontSize: "24pt" }}>Invisible Killers - Air Pollutants</h2>
            <p style={{ textAlign: "center", fontSize: "18.6667px" }}>
              Every day, we breathe harmful air when we walk out of our homes and cant see the invisible killers like
              PM2.5, CO, O<sub>3</sub>, SO<sub>2</sub>, and NO<sub>2</sub>.
            </p>
          </div>
        </div>

        <div className="row pollution_cntr" style={{ paddingBottom: "40px" }}>
          <div className="col-md-2">
            <div className="feature_box">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2022/08/pm2.5.png"
                alt="pm2.5 icon"
              />
              <div className="feature_wrap_box">
                <h2 style={{ textAlign: "center", fontSize: "15pt" }}>PM2.5</h2>
                <p style={{ textAlign: "center", fontSize: "12pt" }}>Gasoline, oil, wood combustion</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="feature_box">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2022/08/co.png"
                alt="co icon"
              />
              <div className="feature_wrap_box">
                <h2 style={{ textAlign: "center", fontSize: "15pt" }}>CO</h2>
                <p style={{ textAlign: "center", fontSize: "12pt" }}>Vehicle &amp; machinery that burns fossil fuels</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="feature_box">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2022/08/o3.png"
                alt="o3 icon"
              />
              <div className="feature_wrap_box">
                <h2 style={{ textAlign: "center", fontSize: "15pt" }}>
                  O<sub>3</sub>
                </h2>
                <p style={{ textAlign: "center", fontSize: "12pt" }}>
                  Emitted from cars, power plants, industrial broilers
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="feature_box">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2022/08/no2.png"
                alt="no2 icon"
              />
              <div className="feature_wrap_box">
                <h2 style={{ textAlign: "center", fontSize: "15pt" }}>
                  NO<sub>2</sub>
                </h2>
                <p style={{ textAlign: "center", fontSize: "12pt" }}>Vehicles, construction activities, power plants</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="feature_box">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2022/08/so2.png"
                alt="SO2 icon"
              />
              <div className="feature_wrap_box">
                <h2 style={{ textAlign: "center", fontSize: "15pt" }}>
                  SO<sub>2</sub>
                </h2>
                <p style={{ textAlign: "center", fontSize: "12pt" }}>
                  High sulfur-containing fuels used in large ships
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Electrostatic Filter Section */}
      <div className="container" style={{ paddingTop: "30px" }}>
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ textAlign: "center", fontWeight: "400", fontSize: "20pt", paddingTop: "30px" }}>
              How does <strong>ELECTROSTATIC FILTER</strong> help in cleaning the air?
            </h2>
            <p style={{ textAlign: "center", fontSize: "13pt" }}>
              <span style={{ fontWeight: "400" }}>
                Think of how the positive and negative sides of magnets attract each other. This principle is applied to
                airborne particles and plates within the air cleaner. If the particles passing through a filter are
                given an electrical charge, and you place a couple of plates nearby with
              </span>
            </p>
            <div style={{ textAlign: "center", paddingBottom: "80px" }}>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/07/electro-static-filtration.jpg"
                alt="Electrostatic Filter Working"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Section 1 */}
      <div className="full-width-section" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{ position: "relative" }}>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-purifier-filtration-process.jpg"
                alt="Outdoor Air Purifier Filtration Video"
                style={{ width: "100%", height: "auto" }}
              />
              <a id="play-video" className="video-play-button" href="#">
                <span></span>
              </a>
              <div id="video-overlay" className="video-overlay">
                <a className="video-overlay-close">&times;</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Variants Section */}
      <div className="container" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ textAlign: "center", fontSize: "24pt", marginBottom: "20px" }}>
              Two Variants – Different Size
            </h2>
            <p style={{ textAlign: "center", fontSize: "16pt", maxWidth: "800px", margin: "0 auto 60px" }}>
              Based on different sizes, the purification efficiency and CADR are different.
            </p>
          </div>
        </div>

        <div className="row variants-container" style={{ display: "flex", justifyContent: "center", gap: "80px" }}>
          <div className="col-md-4 variant-item" style={{ textAlign: "center" }}>
            <img
              src="https://www.pranaair.com/wp-content/uploads/2022/08/outdoor-air-purifier-mini.png"
              alt="Outdoor Air Purifier (Mini)"
              style={{ height: "400px", maxWidth: "100%" }}
            />
            <h3 style={{ marginTop: "30px", fontSize: "18pt", fontWeight: "500" }}>Outdoor Air Purifier (Mini)</h3>
          </div>
          <div className="col-md-4 variant-item" style={{ textAlign: "center" }}>
            <img
              src="https://www.pranaair.com/wp-content/uploads/2022/08/outdoor-air-purifier.png"
              alt="Outdoor Air Purifier"
              style={{ height: "400px", maxWidth: "100%" }}
            />
            <h3 style={{ marginTop: "30px", fontSize: "18pt", fontWeight: "500" }}>Outdoor Air Purifier</h3>
          </div>
        </div>

        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-md-12">
            <p style={{ textAlign: "center", fontSize: "14pt", maxWidth: "1000px", margin: "0 auto" }}>
              From the drawn-in air, Prana Airs outdoor air purifier binds more than 80 percent of the particulate
              matter along with bacteria and viruses. The essence of this technology is the newly developed Pre-filter
              and electrostatic filter which is highly effective in reducing the Particulate matter in the air. Our
              outdoor air purifier is also equipped with U light and a negative ion ionizer which helps in reducing
              bacteria and viruses, hence improving the overall air quality of the area.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Specification Section */}
      <div className="container table_specifiction_collapse">
        <div className="row">
          <div className="col-md-12">
            <h2
              className="specification_heading specific_head"
              style={{ textAlign: "center", fontSize: "17pt", fontWeight: "bold", paddingBottom: "30px" }}
            >
              Technical Specification
            </h2>
            <div className="table_box">
              <table className="table table-striped" style={{ width: "92.8068%", margin: "0 auto" }}>
                <thead>
                  <tr>
                    <th style={{ width: "46.6042%", textAlign: "center" }}>Features</th>
                    <th style={{ width: "155.484%", textAlign: "center" }}>Specifications</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ width: "46.6042%" }}>
                      <strong>Fan Speed</strong>
                    </td>
                    <td style={{ width: "155.484%", textAlign: "left" }}>12,000 CADR</td>
                  </tr>
                  <tr>
                    <td style={{ width: "46.6042%" }}>
                      <strong>Filtration Type</strong>
                    </td>
                    <td style={{ width: "155.484%", textAlign: "left" }}>
                      <strong>1st:</strong> Washable pre-filter
                      <br />
                      <strong>2nd:</strong> Electrostatic filter
                      <br />
                      <strong>3rd:</strong> UV Light
                      <br />
                      <strong>4th:</strong> Ionization
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "46.6042%" }}>
                      <strong>Dimension</strong>
                    </td>
                    <td style={{ width: "155.484%", textAlign: "left" }}>1m x 1m x 3m</td>
                  </tr>
                  <tr>
                    <td style={{ width: "46.6042%" }}>
                      <strong>Power Supply</strong>
                    </td>
                    <td style={{ width: "155.484%", textAlign: "left" }}>3000W</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section 2 */}
      <div className="full-width-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{ position: "relative" }}>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/08/prana-air-outdoor-air-purifier-in-manufacturing-site.jpg"
                alt="Outdoor Air Purifier Video"
                style={{ width: "100%", height: "auto" }}
              />
              <a id="play-video2" className="video-play-button" href="#">
                <span></span>
              </a>
              <div id="video-overlay2" className="video-overlay">
                <a className="video-overlay-close">&times;</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smart City Section */}
      <div className="container" style={{ paddingTop: "30px" }}>
        <div className="row">
          <div className="col-md-12">
            <h3 style={{ textAlign: "center", fontSize: "24pt" }}>
              How Outdoor Air purifiers will help in building a smart city?
            </h3>
            <p style={{ textAlign: "center" }}>
              Outdoor air filtration is a part of the Air Monitoring and its Solutions Project provided by Prana Air
              that will help in filtering out harmful pollutants present in different areas within a city. We provide
              air purifiers to smart city projects across the country by deploying these purifiers at the street level.
              This will help in curbing outdoor air pollution and maintaining the ideal outdoor air quality of a city.
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.pranaair.com/wp-content/uploads/2022/08/outdoor-air-purifier-for-a-smart-city.jpg"
                alt="Outdoor Air Purifier Smart City"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="container" style={{ paddingTop: "50px", paddingBottom: "70px" }}>
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ textAlign: "center", fontSize: "24pt", marginBottom: "20px" }}>
              Applications of Prana Air Outdoor Air Purifier
            </h2>
            <p style={{ textAlign: "center", fontSize: "16px", maxWidth: "1000px", margin: "0 auto 60px" }}>
              Fast-moving air contaminants have an uneven distribution. Air pollution can be up to eight times worse on
              one extreme of a block than on another. We tend to bring high spatial and temporal resolution to the
              forefront of outdoor air quality filtration. There are wide ranges of applications in many places outdoor.
            </p>
          </div>
        </div>

        <div className="row" style={{ marginBottom: "50px" }}>
          <div className="col-md-6" style={{ marginBottom: "30px" }}>
            <img
              src="https://www.pranaair.com/wp-content/uploads/2022/08/outdoor-air-purifier-at-airports.jpg"
              alt="Outdoor Air Purifier Airport"
              style={{ width: "100%", height: "auto", borderRadius: "5px", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "10px" }}>Airport:</h3>
            <p>
              Air purifiers at places like airports are extremely important as the combustion of fuels releases various
              pollutants like CO that can be harmful to the travellers and people living near airports.
            </p>
          </div>
          <div className="col-md-6" style={{ marginBottom: "30px" }}>
            <img
              src="https://www.pranaair.com/wp-content/uploads/2022/08/outdoor-air-purifier-at-parks.jpg"
              alt="Outdoor Air Purifier Public Park"
              style={{ width: "100%", height: "auto", borderRadius: "5px", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "10px" }}>Public Park:</h3>
            <p>
              People go to parks for runs, walks, and relaxation, and children play in parks. An air purifier will help
              different age groups present in parks to breathe clean air.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6" style={{ marginBottom: "30px" }}>
            <img
              src="https://www.pranaair.com/wp-content/uploads/2022/08/outdoor-air-purifier-at-bus-stops.jpg"
              alt="Outdoor Air Purifier Bus Stop"
              style={{ width: "100%", height: "auto", borderRadius: "5px", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "10px" }}>Bus Stop:</h3>
            <p>
              PM pollution at bus stops is mostly produced by automobile combustion. People are exposed to higher levels
              of various vehicle-based pollution while waiting at bus stops.
            </p>
          </div>
          <div className="col-md-6" style={{ marginBottom: "30px" }}>
            <img
              src="https://www.pranaair.com/wp-content/uploads/2022/08/outdoor-air-purifier-at-railway-stations.jpg"
              alt="Outdoor Air Purifier Railway/Metro Platform"
              style={{ width: "100%", height: "auto", borderRadius: "5px", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "10px" }}>Railway/Metro Platform:</h3>
            <p>
              Air pollution builds in places where trains come and depart continuously on railway/ metro stations. The
              air near these areas is more polluted than in the areas with no railway/metro stations.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="airqulality_contact_section inner_container" id="Contact_Us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="introducing_box sub_title_box text-center">
                <h2 className="title_heading">
                  Get in <span className="bold_text">Touch </span>
                </h2>
                <p>Please help us know what requirements you have. Our team will contact you very soon.</p>
              </div>
            </div>
          </div>

          <div className="row airquality_inner_form">
            <div className="col-md-3 contact_content_box">
              <div className="contact_information_box">
                <h4>Prana Air Contact Info</h4>
                <p>Looking for an outdoor air purifier for a smart city?</p>
                <ul className="contact_info">
                  <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>Phone Number: (+91) 73918-73918
                  </li>
                  <li>
                    <i className="fa fa-envelope" aria-hidden="true"></i>Email Address: info@purelogic.in
                  </li>
                  <li>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>Office Location: 706, 7th Floor, Sec 10,
                    Rohini, Delhi 85, India
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9 contact-colum">
              <div className="airquality_contact_box">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Your Name*</label>
                        <input type="text" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Your Email*</label>
                        <input type="email" className="form-control" required />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Phone Number*</label>
                        <input type="tel" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Subject</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="message_text">Your Message</label>
                    <textarea className="form-control" rows="4"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

