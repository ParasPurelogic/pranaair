"use client"
import { useState } from "react"

export default function FaqAccordion({ faqItems }) {
    const [activeFaq, setActiveFaq] = useState(null)

    const toggleFaq = (index) => {
        if (activeFaq === index) {
            setActiveFaq(null)
        } else {
            setActiveFaq(index)
        }
    }

    return (
        <div className="faq-accordion">
            {faqItems.map((faq, index) => (
                <div key={index} className={`faq-item ${activeFaq === index ? "active" : ""}`}>
                    <div className="faq-question" onClick={() => toggleFaq(index)}>
                        {faq.question}
                        <span className="faq-icon">{activeFaq === index ? "-" : "+"}</span>
                    </div>
                    {activeFaq === index && (
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
