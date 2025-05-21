"use client"

export default function FaqAccordion({ faqItems }) {
    return (
        <div className="accordion" id="faqAccordion">
            {faqItems.map((faq, index) => (
                <div className="accordion-item faq-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded="false"
                            aria-controls={`collapse${index}`}
                        >
                            {faq.question}
                        </button>
                    </h2>
                    <div
                        id={`collapse${index}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
