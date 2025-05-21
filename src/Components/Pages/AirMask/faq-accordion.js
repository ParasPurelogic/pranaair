"use client"

import { useState } from "react"

export function FaqAccordion({ items }) {
    const [activeFaq, setActiveFaq] = useState(null)

    const toggleFaq = (id) => {
        if (activeFaq === id) {
            setActiveFaq(null)
        } else {
            setActiveFaq(id)
        }
    }

    return (
        <div className="accordion" id="faqAccordion">
            {items.map((faq) => (
                <div key={faq.id} className="accordion-item">
                    <h2 className="accordion-header" id={`heading-${faq.id}`}>
                        <button
                            className={`accordion-button ${activeFaq === faq.id ? "" : "collapsed"}`}
                            type="button"
                            onClick={() => toggleFaq(faq.id)}
                            aria-expanded={activeFaq === faq.id}
                            aria-controls={`collapse-${faq.id}`}
                        >
                            {faq.title}
                        </button>
                    </h2>
                    <div
                        id={`collapse-${faq.id}`}
                        className={`accordion-collapse collapse ${activeFaq === faq.id ? "show" : ""}`}
                        aria-labelledby={`heading-${faq.id}`}
                    >
                        <div className="accordion-body">{faq.content}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
