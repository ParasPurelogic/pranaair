export default function FaqAccordion({ faqs = [] }) {
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
