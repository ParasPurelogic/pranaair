"use client"
import ProductCard from "@/Components/CartButton/cart-button"

export default function CartTestPage() {
    const dummyProduct = {
        id: "demo123",
        name: "Test Air Purifier",
        price: 4999,
        quantity: 1,
        image: "/img/demo-air-purifier.jpg",
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Cart Test Page</h1>
            <ProductCard product={dummyProduct} />
        </div>
    )
}
