"use client"

export default function FaqAccordion() {
    const faqs = [
        {
            id: "faq1",
            title: "1. What is the ideal range of CO levels in indoor environments?",
            content:
                "The ideal range of CO levels in indoor environments is below 9 parts per million (ppm). However, it is recommended to maintain levels below 5 ppm for better indoor air quality and to ensure safety.",
        },
        {
            id: "faq2",
            title: "2. How often should I check the CO levels using the portable monitor?",
            content:
                "If you are exposed to CO gas, you should check it often. Due to the compact size of the monitor, it is easy to carry so you can carry it easily, without any hassle.",
        },
        {
            id: "faq3",
            title: "3. How accurate are the readings on the monitor?",
            content: "±(5ppmm + 5%)",
        },
        {
            id: "faq4",
            title: "4. How does the alarm on the monitor work?",
            content: "To activate or deactivate the alarm, use the 'S' button on the monitor.",
        },
        {
            id: "faq5",
            title: "5. How many times does the alarm work?",
            content: "50-100 ppm- 3 times per 3 minutes\n101-200 ppm- 5 times per 3 minutes\n> 200 ppm- 10 times per minute",
        },
        {
            id: "faq6",
            title: "6. What is the use time of the monitor?",
            content: "About 14 hours after a full charge",
        },
        {
            id: "faq7",
            title: "7. Can the portable CO monitor be used in vehicles, such as cars and trucks?",
            content:
                "Due to its compact size and accurate data, the mini air quality monitor is highly versatile and suitable for a wide range of indoor and outdoor applications.",
        },
    ]

    return (
        <div className="my-faq">
            <div className="accordion" id="faqAccordion">
                {faqs.map((faq) => (
                    <div className="accordion-item inner-faq" key={faq.id}>
                        <h2 className="accordion-header faq-title" id={`heading-${faq.id}`}>
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${faq.id}`}
                                aria-expanded="false"
                                aria-controls={`collapse-${faq.id}`}
                            >
                                <h4>{faq.title}</h4>
                            </button>
                        </h2>
                        <div
                            id={`collapse-${faq.id}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`heading-${faq.id}`}
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body faq-para">
                                <p>{faq.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
