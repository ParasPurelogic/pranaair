"use client"
import { useCart } from "@/context/CartContext"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function Checkout() {
    const { cartItems, clearCart } = useCart()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const router = useRouter()

    const handleCheckout = async () => {
        const token = getCookie("token") // JWT token stored in cookies

        if (!token) {
            setError("Please login to place order.")
            return
        }

        setLoading(true)
        try {
            const response = await axios.post(
                "https://myserver.aqi.in/pranaAir/payment/create-order",
                { cartItems }, // or as per your backend payload structure
                { headers: { Authorization: `Bearer ${token}` } }
            )

            if (response.data.status === "success") {
                clearCart()
                router.push("/order-success")
            } else {
                setError(response.data.message || "Order failed")
            }
        } catch (err) {
            setError(err?.response?.data?.message || "Failed to place order")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{ paddingTop: '100px' }}>
            <h2>Checkout</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {cartItems.map((item) => (
                <p key={item._id}>{item.name} - Qty: {item.quantity}</p>
            ))}
            <button onClick={handleCheckout} disabled={loading}>
                {loading ? "Placing Order..." : "Place Order"}
            </button>
        </div>


    )
}
