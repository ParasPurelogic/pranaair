"use client"
import { useState } from "react"

export default function QuantityCounter() {
    const [quantity, setQuantity] = useState(1)

    const increment = () => setQuantity((prev) => prev + 1)
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

    return (
        <ul>
            <li>
                <button onClick={decrement} className="dicrement">
                    –
                </button>
            </li>
            <li>{quantity}</li>
            <li>
                <button onClick={increment} className="increment">
                    +
                </button>
            </li>
        </ul>
    )
}
