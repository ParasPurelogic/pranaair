import { useCart } from "@/context/CartContext"

const ProductCard = ({ product }) => {
    const { addToCart } = useCart()

    return (
        <div className="border p-4 rounded shadow-md max-w-sm">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">₹{product.price}</p>
            <button
                onClick={() => addToCart(product)}
                style={{ background: 'green', color: 'white' }}
            >
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCard
