"use client"
import "./style.css"

const productDocuments = [
    {
        id: "pocket-pm25",
        name: "Pocket PM2.5",
        image: "https://www.pranaair.com/wp-content/uploads/2023/11/document-pocket-pm.png",
        brochureUrl: "https://www.pranaair.com/wp-content/uploads/2025/04/Prana-Air-Pocket-PM-Monitor-Brochure.pdf",
        manualUrl: "https://www.pranaair.com/wp-content/uploads/2024/10/Prana-air-Pocket-PM-air-quality-monitor-manual.pdf",
    },
    {
        id: "pocket-co2",
        name: "Pocket CO2",
        image: "https://www.pranaair.com/wp-content/uploads/2023/11/document-pocket-co2.png",
        brochureUrl:
            "https://www.pranaair.com/wp-content/uploads/2023/10/Prana-Air-Pocket-CO2-Air-Quality-Monitor-Brochure.pdf",
        manualUrl:
            "https://www.pranaair.com/wp-content/uploads/2024/10/Prana-air-Pocket-CO2-air-quality-monitor-manual.pdf",
    },
    {
        id: "squair-monitor",
        name: "SQUAIR Monitor",
        image: "https://www.pranaair.com/wp-content/uploads/2023/11/document-squair-lite.png",
        brochureUrl: "https://www.pranaair.com/wp-content/uploads/2023/04/prana-air-squair-air-monitor-brochure.pdf",
        manualUrl: "https://www.pranaair.com/wp-content/uploads/2024/03/Prana-air-SQUAIR-air-quality-monitor-manual.pdf",
    },
    {
        id: "cair-monitor",
        name: "Cair + Monitor",
        image: "https://www.pranaair.com/wp-content/uploads/2024/01/cair-document.png",
        brochureUrl: "https://www.pranaair.com/wp-content/uploads/2024/11/Prana-air-Cair-Monitor-Brochure.pdf",
        manualUrl: "https://www.pranaair.com/wp-content/uploads/2024/11/Prana-Air-Cair-Air-Quality-Monitors-Manual.pdf",
    },
    {
        id: "squair-lite",
        name: "SQUAIR Lite",
        image: "https://www.pranaair.com/wp-content/uploads/2023/11/document-squair.png",
        brochureUrl: "https://www.pranaair.com/wp-content/uploads/2023/04/prana-air-squair-lite-air-monitor-brochure.pdf",
        manualUrl:
            "https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-squair-lite-air-quality-monitor-manual.pdf",
    },
    {
        id: "sensible",
        name: "Sensible",
        image: "https://www.pranaair.com/wp-content/uploads/2023/11/document-sensible.png",
        brochureUrl:
            "https://www.pranaair.com/wp-content/uploads/2023/04/prana-air-sensible-monitor-with-wifi-brochure.pdf",
        manualUrl: "https://www.pranaair.com/wp-content/uploads/2025/04/Prana-Air-Sensible-monitor-Manual.pdf",
    },
    {
        id: "sensible-plus",
        name: "Sensible+",
        image: "https://www.pranaair.com/wp-content/uploads/2023/11/document-sensible-1.png",
        brochureUrl: "https://www.pranaair.com/wp-content/uploads/2023/04/prana-air-sensible-plus-air-monitor-brochure.pdf",
        manualUrl: "https://www.pranaair.com/wp-content/uploads/2025/04/Prana-Air-Sensible-basic-Manual.pdf",
    },
    {
        id: "sensible-advance",
        name: "Sensible-Advance",
        image: "https://www.pranaair.com/wp-content/uploads/2025/04/Sensible-Advance.png",
        brochureUrl: "#",
        manualUrl: "https://www.pranaair.com/wp-content/uploads/2025/04/Prana-Air-Sensible-Advance-Monitor-Manual.pdf",
    },
    {
        id: "ambient-lite",
        name: "Ambient Lite",
        subtitle: "(gsm/wifi)",
        image: "https://www.pranaair.com/wp-content/uploads/2023/11/document-ambinet.png",
        brochureUrl: "https://www.pranaair.com/wp-content/uploads/2024/03/Prana-air-Ambient-Lite-Monitor-brohcure.pdf",
        manualUrl:
            "https://www.pranaair.com/wp-content/uploads/2024/03/COMBINED-Prana-air-Ambient-Lite-GSM-and-Wifi-instruction-manual.pdf",
    },
    {
        id: "ambient-pro-wifi",
        name: "Ambient Pro",
        subtitle: "(wifi/gsm)",
        image: "https://www.pranaair.com/wp-content/uploads/2023/11/document-ambinet-pro.png",
        brochureUrl: "https://www.pranaair.com/wp-content/uploads/2023/11/Prana-air-Ambient-Pro-wifi_gsm.pdf",
        manualUrl: "https://www.pranaair.com/wp-content/uploads/2024/03/Prana-air-Ambient-PRO-GSM_Wifi-Manual-1.pdf",
    },
    {
        id: "ambient-pro-rs485",
        name: "Ambient Pro",
        subtitle: "(RS485)",
        image: "https://www.pranaair.com/wp-content/uploads/2023/11/document-ambinet-pro-rs.png",
        brochureUrl:
            "https://www.pranaair.com/wp-content/uploads/2023/11/Prana-air-Ambient-Pro-Air-quality-monitor-brochure.pdf",
        manualUrl: "#",
    },
    {
        id: "ambient-pm",
        name: "Ambient PM",
        subtitle: "(gsm/wifi)",
        image: "https://www.pranaair.com/wp-content/uploads/2024/11/Ambient-PM.png",
        brochureUrl: "https://www.pranaair.com/wp-content/uploads/2024/11/Prana-Air-Air-quality-monitor-brochure.pdf",
        manualUrl: "https://www.pranaair.com/wp-content/uploads/2024/12/New-Prana-air-Ambient-PM-WiFi-manual.pdf",
    },
    {
        id: "handheld",
        name: "Handheld",
        image: "https://www.pranaair.com/wp-content/uploads/2023/11/document-handheld.png",
        brochureUrl:
            "https://www.pranaair.com/wp-content/uploads/2023/04/prana-air-smart-portable-air-monitor-brochure.pdf",
        manualUrl: "https://www.pranaair.com/wp-content/uploads/2023/05/prana-air-handheld-air-monitor-manual.pdf",
    },
    {
        id: "aqi-tv-app",
        name: "AQI TV App",
        image: "https://www.pranaair.com/wp-content/uploads/2023/11/document-aqi-tv-app.png",
        brochureUrl: "https://www.pranaair.com/wp-content/uploads/2023/11/AQI-TV-App-Themes.pdf",
        manualUrl: "https://www.pranaair.com/wp-content/uploads/2025/04/AQI-TV-App-manual.pdf",
    },
    {
        id: "bam",
        name: "BAM",
        image: "https://www.pranaair.com/wp-content/uploads/2024/03/BAM.png",
        brochureUrl: "#",
        manualUrl:
            "https://www.pranaair.com/wp-content/uploads/2024/03/Prana-air-Beta-Attenuation-Monitor-BAM-Monitor-Manual.pdf",
    },
    {
        id: "weather-station",
        name: "Weather Station",
        image: "https://www.pranaair.com/wp-content/uploads/2023/11/document-weather-staion.png",
        brochureUrl:
            "https://www.pranaair.com/wp-content/uploads/2023/11/Prana-air-Ambient-PM-with-Weather-station-brochure.pdf",
        manualUrl: "https://www.pranaair.com/wp-content/uploads/2023/11/Prana-Air-Weather-Station-Instruction-Manual.pdf",
    },
    {
        id: "oxyco-monitor",
        name: "OxyCO Monitor",
        image: "https://www.pranaair.com/wp-content/uploads/2024/09/OxyCO-Monitor.png",
        brochureUrl: "#",
        manualUrl: "https://www.pranaair.com/wp-content/uploads/2024/09/Prana-Air-OxyCO-Monitor-Manual.pdf",
    },
    {
        id: "prana-sense",
        name: "Prana Sense",
        image: "https://www.pranaair.com/wp-content/uploads/2024/11/Prana-sense-doc.png",
        brochureUrl: "https://www.pranaair.com/wp-content/uploads/2024/11/Prana-air-Prana-Sense-monitor-brochure.pdf",
        manualUrl: "https://www.pranaair.com/wp-content/uploads/2024/12/Prana-air-Prana-sense-Wifi-manual.pdf",
    },
    {
        id: "prana-vtol",
        name: "Prana VTOL",
        image: "https://www.pranaair.com/wp-content/uploads/2025/04/Prana-VTOL.png",
        brochureUrl: "https://www.pranaair.com/wp-content/uploads/2025/04/Prana-VTOL-Air-Quality-Drone-Brochure.pdf",
        manualUrl: "#",
    },
    {
        id: "prana-quad",
        name: "Prana Quad",
        image: "https://www.pranaair.com/wp-content/uploads/2025/04/Prana-Quad-Document.png",
        brochureUrl: "https://www.pranaair.com/wp-content/uploads/2025/04/Prana-Quad-Drone-Brochure.pdf",
        manualUrl: "#",
    },
]

export default function ProductDocuments() {
    return (
        <main>
            {/* Add the JavaScript for accordion functionality */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const accordionItems = document.querySelectorAll('.accordion-item');
              
              accordionItems.forEach(function(accordionItem) {
                const title = accordionItem.querySelector('.accordion-title');
                
                title.addEventListener('click', function() {
                  const content = this.nextElementSibling;
                  const isActive = this.classList.contains('active');
                  
                  // Close other tabs if they are open
                  accordionItems.forEach(function(item) {
                    if (item !== accordionItem) {
                      item.querySelector('.accordion-content').style.maxHeight = 0;
                      item.querySelector('.accordion-title').classList.remove('active');
                    }
                  });
                  
                  if (!isActive) {
                    this.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                  } else {
                    this.classList.remove('active');
                    content.style.maxHeight = 0;
                  }
                });
              });
            });
          `,
                }}
            />

            <section style={{ paddingTop: "50px" }}>
                <div className="container mx-auto px-4">
                    <div className="document-title">
                        <h1>Prana Airs Product Documents</h1>
                    </div>
                </div>
            </section>

            <section className="prana-documents-section py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {productDocuments.map((product) => (
                            <div key={product.id} className="accordion">
                                <div className="accordion-item">
                                    <div className="accordion-title" data-product-id={product.id}>
                                        <ul>
                                            <li>
                                                <img src={product.image || "/placeholder.svg"} alt={product.name} />
                                            </li>
                                            <li>
                                                <h5>
                                                    {product.name}
                                                    {product.subtitle && (
                                                        <>
                                                            <br />
                                                            <span className="wifie">{product.subtitle}</span>
                                                        </>
                                                    )}
                                                </h5>
                                            </li>
                                            <li>
                                                <img src="https://www.pranaair.com/wp-content/uploads/2023/11/brochure-icon.png" alt="icon" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="accordion-content">
                                        <ul>
                                            {product.brochureUrl && product.brochureUrl !== "#" && (
                                                <li>
                                                    <a href={product.brochureUrl} target="_blank" rel="noopener noreferrer">
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/11/documentdownload.png"
                                                            alt="download icon"
                                                        />
                                                        Brochure
                                                    </a>
                                                </li>
                                            )}
                                            {product.manualUrl && product.manualUrl !== "#" && (
                                                <li>
                                                    <a href={product.manualUrl} target="_blank" rel="noopener noreferrer">
                                                        <img
                                                            src="https://www.pranaair.com/wp-content/uploads/2023/11/documentdownload.png"
                                                            alt="download icon"
                                                        />
                                                        Manual
                                                    </a>
                                                </li>
                                            )}
                                            {(!product.brochureUrl || product.brochureUrl === "#") &&
                                                (!product.manualUrl || product.manualUrl === "#") && (
                                                    <li>
                                                        <a href="#" onClick={(e) => e.preventDefault()}>
                                                            <img
                                                                src="https://www.pranaair.com/wp-content/uploads/2023/11/documentdownload.png"
                                                                alt="download icon"
                                                            />
                                                            Coming Soon
                                                        </a>
                                                    </li>
                                                )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
