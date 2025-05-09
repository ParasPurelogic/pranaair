"use client"

export default function FaqAccordionCO2() {
    const faqs = [
        {
            id: "faq1",
            question: "1. What is a nano portable CO2 monitor?",
            answer:
                "A nano CO2 monitor is a device used to measure the concentration of carbon dioxide in the air in real-time. It is small and portable, making it convenient to carry and use in various indoor spaces.",
        },
        {
            id: "faq2",
            question: "2. How does Prana Air Nano CO2 monitor work?",
            answer:
                "This monitor operates by utilizing an NDIR sensor to detect the amount of carbon dioxide in the air. The sensor is capable of measuring the infrared radiation that is absorbed by CO2 molecules present in the air, and this data is then processed to determine the concentration of CO2 in the environment.",
        },
        {
            id: "faq3",
            question: "3. Why is it important to monitor CO2 levels?",
            answer:
                "Maintaining optimal indoor air quality is crucial, and monitoring CO2 levels is an effective way to achieve this. Elevated CO2 levels signify inadequate ventilation, and can cause various health issues such as headaches, drowsiness, discomfort, and other related problems. By keeping track of CO2 levels, it is possible to identify when ventilation needs to be improved to ensure good indoor air quality.",
        },
        {
            id: "faq4",
            question: "4. Where can this carbon dioxide monitor be used?",
            answer:
                "It is a versatile device suitable for use in diverse indoor environments such as homes, offices, schools, hospitals, and other public buildings. it proves to be especially valuable in areas where people tend to spend extended periods and where ventilation may be insufficient. These devices enable the monitoring of CO2 levels, ensuring optimal indoor air quality in various settings.",
        },
        {
            id: "faq5",
            question: "5. How accurate is the data of this monitor?",
            answer:
                "When it comes to measuring CO2 levels, our Nano CO2 monitor has an exceptional quality, and regular calibration further enhances their accuracy. High-quality NDIR sensor is incorporated into the device to deliver precise measurements of CO2 levels, ensuring reliable results.",
        },
        {
            id: "faq6",
            question: "6. How do I use this CO2 monitor?",
            answer:
                "To use the CO2 monitor, simply turn it on and let it run for a few minutes to allow it to calibrate and take readings. The device will display the current CO2 concentration in parts per million (ppm). You can then use this information to adjust ventilation and improve indoor air quality.",
        },
    ]

    return (
        <div className="faq-accordion">
            <div className="accordion" id="faqAccordion">
                {faqs.map((faq) => (
                    <div className="accordion-item faq-item" key={faq.id}>
                        <h2 className="accordion-header faq-question" id={`heading-${faq.id}`}>
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${faq.id}`}
                                aria-expanded="false"
                                aria-controls={`collapse-${faq.id}`}
                            >
                                <span className="question-text">{faq.question}</span>
                            </button>
                        </h2>
                        <div
                            id={`collapse-${faq.id}`}
                            className="accordion-collapse collapse faq-answer"
                            aria-labelledby={`heading-${faq.id}`}
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
