"use client"
import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"

export default function CartPage() {
    const { cartItems, removeFromCart } = useCart()
    const router = useRouter()

    const goToCheckout = () => {
        router.push("/checkout")
    }

    return (
        <div style={{ paddingTop: '100px' }}>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart.</p> :
                <>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item._id}>
                                {item.name} - {item.quantity}
                                <button onClick={() => removeFromCart(item._id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={goToCheckout}>Proceed to Checkout</button>
                </>
            }
        </div>
    )
}
