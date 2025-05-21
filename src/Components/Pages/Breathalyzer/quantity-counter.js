"use client"
import { useState } from "react"

export default function QuantityCounter({ initialValue = 1, onChange }) {
    const [quantity, setQuantity] = useState(initialValue)

    const increment = () => {
        const newValue = quantity + 1
        setQuantity(newValue)
        if (onChange) onChange(newValue)
    }

    const decrement = () => {
        const newValue = quantity > 1 ? quantity - 1 : 1
        setQuantity(newValue)
        if (onChange) onChange(newValue)
    }

    const handleChange = (e) => {
        const value = Number.parseInt(e.target.value) || 1
        setQuantity(value)
        if (onChange) onChange(value)
    }

    return (
        <div className="quantity buttons_added">
            <button onClick={decrement} className="dicrement">
                –
            </button>
            <input
                type="number"
                step="1"
                min="1"
                max="9999"
                value={quantity}
                onChange={handleChange}
                title="Qty"
                className="input-text qty text"
                size="4"
                pattern="[0-9]*"
                inputMode="numeric"
            />
            <button onClick={increment} className="increment">
                +
            </button>
        </div>
    )
}
