"use client"

export default function FaqAccordion({ faqItems = [] }) {

    return (
        <div className="accordion" id="faqAccordion">
            {faqItems.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faq${index + 1}`}
                            aria-expanded={index === 0 ? "true" : "false"}
                        >
                            {item.question}
                        </button>
                    </h2>
                    <div
                        id={`faq${index + 1}`}
                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body faq-tab-para">{item.answer}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
