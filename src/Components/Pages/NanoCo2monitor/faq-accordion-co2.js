"use client"
export default function FaqAccordionCO2({ faqs = [] }) {
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
