"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useUserInfo } from "@/context/UserInfo"
import { getMyOrders } from "@/lib/api"

export default function OrdersSection() {
    // user Info
    const { token } = useUserInfo();

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchOrders = async () => {
            if (!token) {
                setError("Authentication token not found.")
                setLoading(false)
                return
            }
            try {
                setLoading(true)
                const data = await getMyOrders(token)
                if (data && data.success) {
                    setOrders(data.orders) // Assuming API returns { success: true, orders: [...] }
                } else {
                    setError(data.message || "Failed to fetch orders.")
                }
            } catch (err) {
                setError(err.message || "An error occurred while fetching orders.")
            } finally {
                setLoading(false)
            }
        }
        fetchOrders()
    }, [token])

    if (loading) {
        return (
            <div className="p-4 flex-grow-1 d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading orders...</span>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="p-4 flex-grow-1">
                <div className="alert alert-danger">{error}</div>
            </div>
        )
    }

    if (orders.length === 0) {
        return (
            <div className="p-4 flex-grow-1">
                <h4 className="mb-3">My Orders</h4>
                <p className="text-muted mb-4">Track and manage all your orders in one place</p>
                <div className="alert alert-info">No orders found.</div>
            </div>
        )
    }

    return (
        <div className="p-4 flex-grow-1">
            <h4 className="mb-3">My Orders</h4>
            <p className="text-muted mb-4">Track and manage all your orders in one place</p>

            <div className="input-group mb-4" style={{ maxWidth: "400px" }}>
                <span className="input-group-text bg-white border-end-0">
                    <FontAwesomeIcon icon={faSearch} size="sm" />
                </span>
                <input type="text" className="form-control border-start-0" placeholder="Search orders..." />
                <select className="form-select border-start-0">
                    <option value="all">All Orders</option>
                    <option value="delivered">Delivered</option>
                    <option value="pending">Pending</option>
                </select>
            </div>

            {orders.map((order) => (
                <div className="card mb-4 shadow-sm" key={order.id}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h6 className="card-subtitle text-muted mb-0">Order #{order.orderId}</h6>{" "}
                            {/* Assuming orderId from API */}
                            <span className="badge bg-success">{order.status}</span>
                        </div>
                        <div className="text-muted small mb-3">{new Date(order.orderDate).toLocaleDateString()}</div>{" "}
                        {/* Assuming orderDate */}
                        <hr className="my-3" />
                        {order.items.map((item, idx) => (
                            <div key={idx} className="d-flex align-items-center mb-3">
                                <img
                                    src={item.image || "/placeholder.svg?height=40&width=40&query=product"}
                                    alt={item.name}
                                    className="me-3 rounded"
                                    style={{ width: "40px", height: "40px", objectFit: "cover" }}
                                />
                                <div className="flex-grow-1">
                                    <p className="mb-0">{item.name}</p>
                                    <small className="text-muted">Qty: {item.quantity}</small> {/* Assuming quantity from API */}
                                </div>
                                <div className="text-end">₹{item.price.toFixed(2)}</div>
                            </div>
                        ))}
                        <hr className="my-3" />
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <h5 className="mb-0">Total: ₹{order.totalAmount.toFixed(2)}</h5> {/* Assuming totalAmount from API */}
                            <div>
                                <button className="btn btn-outline-primary btn-sm me-2">Track Order</button>
                                <button
                                    className="btn btn-outline-secondary btn-sm me-2"
                                    onClick={() => getMyOrderById(order.orderId, token)}
                                >
                                    Details
                                </button>
                                <button className="btn btn-primary btn-sm">Buy Again</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
