"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  BarChart,
  ShoppingBag,
  Package,
  Users,
  FileText,
  Settings,
  LogOut,
  Search,
  Plus,
  Filter,
  ChevronDown,
  Edit,
  Trash2,
  ExternalLink,
  DollarSign,
  ArrowUp,
  ArrowDown,
  Truck,
  Box,
  CreditCard,
  Mail,
  Calendar,
  User,
} from "lucide-react"
import "./dashboard.css"

// Replace the mockOrders array with this function to get orders from localStorage
const getOrdersFromStorage = () => {
  if (typeof window !== "undefined") {
    try {
      const savedOrders = localStorage.getItem("orders")
      return savedOrders ? JSON.parse(savedOrders) : mockOrders
    } catch (error) {
      console.error("Failed to parse orders from localStorage:", error)
      return mockOrders
    }
  }
  return mockOrders
}

// Keep the mockOrders as fallback data
const mockOrders = [
  { id: "ORD-001", customer: "John Doe", date: "2023-04-01", total: 299.99, status: "completed" },
  { id: "ORD-002", customer: "Jane Smith", date: "2023-04-02", total: 149.5, status: "pending" },
  { id: "ORD-003", customer: "Robert Johnson", date: "2023-04-03", total: 599.99, status: "completed" },
  { id: "ORD-004", customer: "Emily Davis", date: "2023-04-04", total: 89.99, status: "cancelled" },
  { id: "ORD-005", customer: "Michael Brown", date: "2023-04-05", total: 199.99, status: "pending" },
]

const mockProducts = [
  {
    id: 1,
    name: "Air Quality Monitor",
    sku: "AQM-001",
    price: 149.99,
    stock: 25,
    image: "/smart-home-air-quality.png",
  },
  {
    id: 2,
    name: "Wearable Air Purifier",
    sku: "WAP-002",
    price: 99.99,
    stock: 42,
    image: "/urban-commute-air-shield.png",
  },
  { id: 3, name: "Air Mask", sku: "AM-003", price: 29.99, stock: 78, image: "/futuristic-city-air-mask.png" },
  { id: 4, name: "Air Sanitizer", sku: "AS-004", price: 199.99, stock: 15, image: "/clean-air-device.png" },
  { id: 5, name: "Fresh Air Machine", sku: "FAM-005", price: 299.99, stock: 8, image: "/indoor-garden-purifier.png" },
]

const mockCustomers = [
  { id: 1, name: "John Doe", email: "john@example.com", orders: 3, spent: 549.97 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", orders: 1, spent: 149.5 },
  { id: 3, name: "Robert Johnson", email: "robert@example.com", orders: 2, spent: 699.98 },
  { id: 4, name: "Emily Davis", email: "emily@example.com", orders: 1, spent: 89.99 },
  { id: 5, name: "Michael Brown", email: "michael@example.com", orders: 4, spent: 799.96 },
]

// Loading spinner component
const LoadingSpinner = ({ text = "Loading..." }) => (
  <div className="loading">
    <div className="spinner"></div>
    <p>{text}</p>
  </div>
)

// Main Admin Dashboard component
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [orders, setOrders] = useState([])
  const [products, setProducts] = useState([])
  const [customers, setCustomers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [showAddProductModal, setShowAddProductModal] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [newProduct, setNewProduct] = useState({
    name: "",
    sku: "",
    price: "",
    stock: "",
    description: "",
  })
  const [adminUser, setAdminUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // Check if admin is logged in
    const checkAdminAuth = () => {
      try {
        const adminStr = localStorage.getItem("admin")
        if (adminStr) {
          const adminData = JSON.parse(adminStr)
          // Check if token is still valid (not expired)
          if (adminData && adminData.expiresAt && new Date(adminData.expiresAt) > new Date()) {
            setAdminUser(adminData)
            // Load data
            setOrders(getOrdersFromStorage())
            setProducts(mockProducts)
            setCustomers(mockCustomers)
            setIsLoading(false)
          } else {
            // Token expired, redirect to login
            localStorage.removeItem("admin")
            router.push("/admin/login")
          }
        } else {
          // No admin token, redirect to login
          router.push("/admin/login")
        }
      } catch (error) {
        console.error("Admin auth check failed:", error)
        localStorage.removeItem("admin")
        router.push("/admin/login")
      }
    }

    // Small delay to prevent immediate redirects that can cause UI flashing
    const timer = setTimeout(checkAdminAuth, 100)
    return () => clearTimeout(timer)
  }, [router])

  // Add a new useEffect to listen for order updates
  useEffect(() => {
    const handleStorageChange = () => {
      setOrders(getOrdersFromStorage())
    }

    window.addEventListener("storage", handleStorageChange)

    // Check for orders every 30 seconds
    const interval = setInterval(() => {
      setOrders(getOrdersFromStorage())
    }, 30000)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      clearInterval(interval)
    }
  }, [])

  // Handle media query for sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarCollapsed(true)
      } else {
        setSidebarCollapsed(false)
      }
    }

    // Set initial state
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddProduct = (e) => {
    e.preventDefault()

    // Add new product to the list
    const product = {
      id: products.length + 1,
      name: newProduct.name,
      sku: newProduct.sku,
      price: Number.parseFloat(newProduct.price),
      stock: Number.parseInt(newProduct.stock),
      image: `/placeholder.svg?height=50&width=50&query=${encodeURIComponent(newProduct.name)}`,
    }

    setProducts([...products, product])

    // Reset form and close modal
    setNewProduct({
      name: "",
      sku: "",
      price: "",
      stock: "",
      description: "",
    })
    setShowAddProductModal(false)
  }

  const handleDeleteProduct = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((product) => product.id !== id))
    }
  }

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order))
    setOrders(updatedOrders)

    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("orders", JSON.stringify(updatedOrders))
    }
  }

  const handleLogout = () => {
    // Clear admin data
    localStorage.removeItem("admin")
    // Redirect to admin login
    router.push("/admin/login")
  }

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  if (isLoading) {
    return <LoadingSpinner text="Loading dashboard..." />
  }

  return (
    <div className="admin-dashboard">
      {/* Sidebar Toggle Button for Mobile */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarCollapsed ? <ChevronDown size={20} /> : <ChevronDown size={20} className="rotate-180" />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">PA</span>
            {!sidebarCollapsed && <span className="logo-text">Prana Air</span>}
          </div>
        </div>

        <div className="sidebar-content">
          <nav className="sidebar-menu">
            <button
              className={`menu-item ${activeTab === "dashboard" ? "active" : ""}`}
              onClick={() => setActiveTab("dashboard")}
            >
              <BarChart size={20} className="menu-icon" />
              {!sidebarCollapsed && <span>Dashboard</span>}
            </button>

            <button
              className={`menu-item ${activeTab === "orders" ? "active" : ""}`}
              onClick={() => setActiveTab("orders")}
            >
              <ShoppingBag size={20} className="menu-icon" />
              {!sidebarCollapsed && <span>Orders</span>}
            </button>

            <button
              className={`menu-item ${activeTab === "products" ? "active" : ""}`}
              onClick={() => setActiveTab("products")}
            >
              <Package size={20} className="menu-icon" />
              {!sidebarCollapsed && <span>Products</span>}
            </button>

            <button
              className={`menu-item ${activeTab === "customers" ? "active" : ""}`}
              onClick={() => setActiveTab("customers")}
            >
              <Users size={20} className="menu-icon" />
              {!sidebarCollapsed && <span>Customers</span>}
            </button>

            <button
              className={`menu-item ${activeTab === "analytics" ? "active" : ""}`}
              onClick={() => setActiveTab("analytics")}
            >
              <FileText size={20} className="menu-icon" />
              {!sidebarCollapsed && <span>Analytics</span>}
            </button>

            <button
              className={`menu-item ${activeTab === "settings" ? "active" : ""}`}
              onClick={() => setActiveTab("settings")}
            >
              <Settings size={20} className="menu-icon" />
              {!sidebarCollapsed && <span>Settings</span>}
            </button>
          </nav>
        </div>

        <div className="sidebar-footer">
          <button className="logout-button" onClick={handleLogout}>
            <LogOut size={20} className="menu-icon" />
            {!sidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`main-content ${sidebarCollapsed ? "expanded" : ""}`}>
        {/* Header */}
        <header className="content-header">
          <div className="header-title">
            <h1>
              {activeTab === "dashboard" && "Dashboard"}
              {activeTab === "orders" && "Orders"}
              {activeTab === "products" && "Products"}
              {activeTab === "customers" && "Customers"}
              {activeTab === "analytics" && "Analytics"}
              {activeTab === "settings" && "Settings"}
            </h1>
            <p className="header-subtitle">
              {activeTab === "dashboard" && "Welcome back, "}
              {activeTab === "orders" && "Manage your "}
              {activeTab === "products" && "Manage your "}
              {activeTab === "customers" && "Manage your "}
              {activeTab === "analytics" && "View your "}
              {activeTab === "settings" && "Configure your "}
              {activeTab === "dashboard" ? <span className="admin-name">{adminUser?.name || "Admin"}</span> : activeTab}
            </p>
          </div>

          <div className="header-actions">
            <div className="search-bar">
              <Search size={18} className="search-icon" />
              <input type="text" placeholder={`Search ${activeTab}...`} value={searchTerm} onChange={handleSearch} />
            </div>

            <div className="admin-profile">
              <div className="profile-avatar">{adminUser?.name?.charAt(0) || "A"}</div>
              {!sidebarCollapsed && (
                <div className="profile-info">
                  <span className="profile-name">{adminUser?.name || "Admin User"}</span>
                  <span className="profile-role">Administrator</span>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="content-body">
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="dashboard-content">
              {/* Stats Cards */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-header">
                    <div className="stat-icon orders">
                      <ShoppingBag size={20} />
                    </div>
                    <div className="stat-actions">
                      <span className="stat-period">This Month</span>
                    </div>
                  </div>
                  <h3 className="stat-title">Total Orders</h3>
                  <div className="stat-value">1,247</div>
                  <div className="stat-footer">
                    <div className="stat-change positive">
                      <ArrowUp size={14} />
                      <span>12.5%</span>
                    </div>
                    <span className="stat-comparison">vs last month</span>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-header">
                    <div className="stat-icon revenue">
                      <DollarSign size={20} />
                    </div>
                    <div className="stat-actions">
                      <span className="stat-period">This Month</span>
                    </div>
                  </div>
                  <h3 className="stat-title">Total Revenue</h3>
                  <div className="stat-value">₹215,000</div>
                  <div className="stat-footer">
                    <div className="stat-change positive">
                      <ArrowUp size={14} />
                      <span>8.3%</span>
                    </div>
                    <span className="stat-comparison">vs last month</span>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-header">
                    <div className="stat-icon products">
                      <Package size={20} />
                    </div>
                    <div className="stat-actions">
                      <span className="stat-period">Total</span>
                    </div>
                  </div>
                  <h3 className="stat-title">Products</h3>
                  <div className="stat-value">{products.length}</div>
                  <div className="stat-footer">
                    <div className="stat-change positive">
                      <ArrowUp size={14} />
                      <span>4.2%</span>
                    </div>
                    <span className="stat-comparison">new products</span>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-header">
                    <div className="stat-icon customers">
                      <Users size={20} />
                    </div>
                    <div className="stat-actions">
                      <span className="stat-period">Total</span>
                    </div>
                  </div>
                  <h3 className="stat-title">Customers</h3>
                  <div className="stat-value">{customers.length}</div>
                  <div className="stat-footer">
                    <div className="stat-change negative">
                      <ArrowDown size={14} />
                      <span>2.8%</span>
                    </div>
                    <span className="stat-comparison">acquisition rate</span>
                  </div>
                </div>
              </div>

              {/* Recent Orders & Activity Section */}
              <div className="dashboard-grid">
                <div className="dashboard-card recent-orders">
                  <div className="card-header">
                    <h2 className="card-title">Recent Orders</h2>
                    <button className="view-all-button" onClick={() => setActiveTab("orders")}>
                      View All
                    </button>
                  </div>

                  <div className="card-content scrollable">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Customer</th>
                          <th>Date</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.slice(0, 5).map((order) => (
                          <tr key={order.id}>
                            <td className="order-id">{order.id}</td>
                            <td>{order.customer}</td>
                            <td>
                              <div className="table-date">
                                <Calendar size={14} />
                                <span>{order.date}</span>
                              </div>
                            </td>
                            <td className="amount">₹{order.total.toFixed(2)}</td>
                            <td>
                              <span className={`status-badge ${order.status}`}>
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                              </span>
                            </td>
                            <td>
                              <div className="table-actions">
                                <button className="action-button">
                                  <ExternalLink size={14} />
                                </button>
                                <div className="dropdown">
                                  <button className="action-button">
                                    <ChevronDown size={14} />
                                  </button>
                                  <div className="dropdown-menu">
                                    <button onClick={() => updateOrderStatus(order.id, "pending")}>
                                      Set as Pending
                                    </button>
                                    <button onClick={() => updateOrderStatus(order.id, "processing")}>
                                      Set as Processing
                                    </button>
                                    <button onClick={() => updateOrderStatus(order.id, "shipped")}>
                                      Set as Shipped
                                    </button>
                                    <button onClick={() => updateOrderStatus(order.id, "completed")}>
                                      Set as Completed
                                    </button>
                                    <button onClick={() => updateOrderStatus(order.id, "cancelled")}>
                                      Set as Cancelled
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="dashboard-card activity">
                  <div className="card-header">
                    <h2 className="card-title">Recent Activity</h2>
                  </div>

                  <div className="card-content">
                    <div className="timeline">
                      <div className="timeline-item">
                        <div className="timeline-icon orders">
                          <ShoppingBag size={16} />
                        </div>
                        <div className="timeline-content">
                          <h4>New order placed</h4>
                          <p>Order #ORD-006 from Alex Johnson</p>
                          <span className="timeline-time">10 minutes ago</span>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-icon status">
                          <Truck size={16} />
                        </div>
                        <div className="timeline-content">
                          <h4>Order status updated</h4>
                          <p>Order #ORD-003 marked as shipped</p>
                          <span className="timeline-time">2 hours ago</span>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-icon product">
                          <Box size={16} />
                        </div>
                        <div className="timeline-content">
                          <h4>Product stock updated</h4>
                          <p>Air Quality Monitor is now low in stock</p>
                          <span className="timeline-time">5 hours ago</span>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-icon payment">
                          <CreditCard size={16} />
                        </div>
                        <div className="timeline-content">
                          <h4>Payment received</h4>
                          <p>Payment for order #ORD-005 completed</p>
                          <span className="timeline-time">Yesterday</span>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-icon customer">
                          <User size={16} />
                        </div>
                        <div className="timeline-content">
                          <h4>New customer registered</h4>
                          <p>Emily Wilson created an account</p>
                          <span className="timeline-time">Yesterday</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sales Overview Section */}
              <div className="dashboard-card sales-overview">
                <div className="card-header">
                  <h2 className="card-title">Sales Overview</h2>
                  <div className="chart-period-selector">
                    <button className="period-button active">Weekly</button>
                    <button className="period-button">Monthly</button>
                    <button className="period-button">Yearly</button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="chart-placeholder">
                    {/* Here would be the actual chart - using placeholder for now */}
                    <div className="chart-empty">
                      <BarChart size={48} />
                      <p>Sales data visualization would appear here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div className="orders-content">
              <div className="page-actions">
                <div className="filters">
                  <div className="filter-item">
                    <select className="filter-select">
                      <option value="all">All Orders</option>
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>

                  <div className="filter-item">
                    <button className="filter-button">
                      <Filter size={16} />
                      <span>Filter</span>
                    </button>
                  </div>
                </div>

                <div className="export-actions">
                  <button className="action-button">Export CSV</button>
                </div>
              </div>

              <div className="data-card">
                <div className="card-content scrollable">
                  <table className="data-table orders-table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredOrders.map((order) => (
                        <tr key={order.id}>
                          <td className="order-id">{order.id}</td>
                          <td>{order.customer}</td>
                          <td>
                            <div className="table-date">
                              <Calendar size={14} />
                              <span>{order.date}</span>
                            </div>
                          </td>
                          <td className="amount">₹{order.total.toFixed(2)}</td>
                          <td>
                            <span className={`status-badge ${order.status}`}>
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                          </td>
                          <td>
                            <div className="table-actions">
                              <button className="action-button primary">
                                <ExternalLink size={14} />
                                <span>View</span>
                              </button>
                              <div className="dropdown">
                                <button className="action-button">
                                  <span>Status</span>
                                  <ChevronDown size={14} />
                                </button>
                                <div className="dropdown-menu">
                                  <button onClick={() => updateOrderStatus(order.id, "pending")}>Set as Pending</button>
                                  <button onClick={() => updateOrderStatus(order.id, "processing")}>
                                    Set as Processing
                                  </button>
                                  <button onClick={() => updateOrderStatus(order.id, "shipped")}>Set as Shipped</button>
                                  <button onClick={() => updateOrderStatus(order.id, "completed")}>
                                    Set as Completed
                                  </button>
                                  <button onClick={() => updateOrderStatus(order.id, "cancelled")}>
                                    Set as Cancelled
                                  </button>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === "products" && (
            <div className="products-content">
              <div className="page-actions">
                <div className="filters">
                  <div className="filter-item">
                    <select className="filter-select">
                      <option value="all">All Products</option>
                      <option value="instock">In Stock</option>
                      <option value="lowstock">Low Stock</option>
                      <option value="outofstock">Out of Stock</option>
                    </select>
                  </div>
                </div>

                <div className="action-buttons">
                  <button className="primary-button" onClick={() => setShowAddProductModal(true)}>
                    <Plus size={16} />
                    <span>Add Product</span>
                  </button>
                </div>
              </div>

              <div className="data-card">
                <div className="card-content scrollable">
                  <table className="data-table products-table">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>SKU</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.map((product) => (
                        <tr key={product.id}>
                          <td className="product-image">
                            <img src={product.image || "/placeholder.svg"} alt={product.name} />
                          </td>
                          <td>{product.name}</td>
                          <td className="sku">{product.sku}</td>
                          <td className="amount">₹{product.price.toFixed(2)}</td>
                          <td>
                            <span className={`stock-badge ${product.stock <= 10 ? "low" : "in"}`}>
                              {product.stock} in stock
                            </span>
                          </td>
                          <td>
                            <div className="table-actions">
                              <button className="action-button">
                                <Edit size={14} />
                                <span>Edit</span>
                              </button>
                              <button className="action-button danger" onClick={() => handleDeleteProduct(product.id)}>
                                <Trash2 size={14} />
                                <span>Delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Add Product Modal */}
              {showAddProductModal && (
                <div className="modal-overlay">
                  <div className="modal">
                    <div className="modal-header">
                      <h2>Add New Product</h2>
                      <button className="close-button" onClick={() => setShowAddProductModal(false)}>
                        &times;
                      </button>
                    </div>

                    <div className="modal-body">
                      <form onSubmit={handleAddProduct}>
                        <div className="form-group">
                          <label htmlFor="productName">Product Name</label>
                          <input
                            type="text"
                            id="productName"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="productSku">SKU</label>
                          <input
                            type="text"
                            id="productSku"
                            value={newProduct.sku}
                            onChange={(e) => setNewProduct({ ...newProduct, sku: e.target.value })}
                            required
                          />
                        </div>

                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="productPrice">Price (₹)</label>
                            <input
                              type="number"
                              id="productPrice"
                              value={newProduct.price}
                              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                              required
                              min="0"
                              step="0.01"
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="productStock">Stock</label>
                            <input
                              type="number"
                              id="productStock"
                              value={newProduct.stock}
                              onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                              required
                              min="0"
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="productDescription">Description</label>
                          <textarea
                            id="productDescription"
                            value={newProduct.description}
                            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                            rows="4"
                          ></textarea>
                        </div>

                        <div className="form-actions">
                          <button
                            type="button"
                            className="button-secondary"
                            onClick={() => setShowAddProductModal(false)}
                          >
                            Cancel
                          </button>
                          <button type="submit" className="button-primary">
                            Add Product
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Customers Tab */}
          {activeTab === "customers" && (
            <div className="customers-content">
              <div className="page-actions">
                <div className="filters">
                  <div className="filter-item">
                    <select className="filter-select">
                      <option value="all">All Customers</option>
                      <option value="new">New Customers</option>
                      <option value="returning">Returning Customers</option>
                    </select>
                  </div>
                </div>

                <div className="export-actions">
                  <button className="action-button">Export CSV</button>
                </div>
              </div>

              <div className="data-card">
                <div className="card-content scrollable">
                  <table className="data-table customers-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Orders</th>
                        <th>Total Spent</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCustomers.map((customer) => (
                        <tr key={customer.id}>
                          <td>#{customer.id}</td>
                          <td>{customer.name}</td>
                          <td>
                            <div className="table-email">
                              <Mail size={14} />
                              <span>{customer.email}</span>
                            </div>
                          </td>
                          <td>{customer.orders}</td>
                          <td className="amount">₹{customer.spent.toFixed(2)}</td>
                          <td>
                            <div className="table-actions">
                              <button className="action-button primary">
                                <ExternalLink size={14} />
                                <span>View</span>
                              </button>
                              <button className="action-button">
                                <Mail size={14} />
                                <span>Email</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div className="analytics-content">
              <div className="analytics-header">
                <div className="period-selector">
                  <button className="period-button active">Last 7 days</button>
                  <button className="period-button">Last 30 days</button>
                  <button className="period-button">Last 90 days</button>
                  <button className="period-button">Custom</button>
                </div>
              </div>

              <div className="analytics-grid">
                <div className="analytics-card sales-analytics">
                  <div className="card-header">
                    <h2 className="card-title">Sales Analytics</h2>
                  </div>

                  <div className="card-content">
                    <div className="chart-placeholder">
                      <div className="chart-empty">
                        <BarChart size={48} />
                        <p>Sales analytics visualization would appear here</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="analytics-card top-products">
                  <div className="card-header">
                    <h2 className="card-title">Top Selling Products</h2>
                  </div>

                  <div className="card-content">
                    <div className="product-rank-list">
                      {products.slice(0, 5).map((product, index) => (
                        <div className="product-rank-item" key={product.id}>
                          <div className="rank">{index + 1}</div>
                          <div className="product-image">
                            <img src={product.image || "/placeholder.svg"} alt={product.name} />
                          </div>
                          <div className="product-details">
                            <h4>{product.name}</h4>
                            <p className="amount">₹{product.price.toFixed(2)}</p>
                          </div>
                          <div className="product-sales">
                            <div className="sales-bar" style={{ width: `${100 - index * 15}%` }}></div>
                            <span>{100 - index * 15} sold</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="analytics-grid second-row">
                <div className="analytics-card customer-analytics">
                  <div className="card-header">
                    <h2 className="card-title">Customer Demographics</h2>
                  </div>

                  <div className="card-content">
                    <div className="chart-placeholder">
                      <div className="chart-empty">
                        <Users size={48} />
                        <p>Customer demographics visualization would appear here</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="analytics-card inventory-analytics">
                  <div className="card-header">
                    <h2 className="card-title">Inventory Status</h2>
                  </div>

                  <div className="card-content">
                    <div className="chart-placeholder">
                      <div className="chart-empty">
                        <Package size={48} />
                        <p>Inventory status visualization would appear here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="settings-content">
              <div className="settings-grid">
                <div className="settings-card">
                  <div className="card-header">
                    <h2 className="card-title">General Settings</h2>
                  </div>

                  <div className="card-content">
                    <form className="settings-form">
                      <div className="form-group">
                        <label htmlFor="storeName">Store Name</label>
                        <input type="text" id="storeName" defaultValue="Prana Air" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="storeEmail">Store Email</label>
                        <input type="email" id="storeEmail" defaultValue="contact@pranaair.com" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="storePhone">Store Phone</label>
                        <input type="tel" id="storePhone" defaultValue="+91 123 456 7890" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="storeCurrency">Currency</label>
                        <select id="storeCurrency" defaultValue="INR">
                          <option value="INR">Indian Rupee (₹)</option>
                          <option value="USD">US Dollar ($)</option>
                          <option value="EUR">Euro (€)</option>
                          <option value="GBP">British Pound (£)</option>
                        </select>
                      </div>

                      <div className="form-actions">
                        <button type="submit" className="button-primary">
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="settings-card">
                  <div className="card-header">
                    <h2 className="card-title">User Account</h2>
                  </div>

                  <div className="card-content">
                    <form className="settings-form">
                      <div className="form-group">
                        <label htmlFor="adminName">Name</label>
                        <input type="text" id="adminName" defaultValue={adminUser?.name || "Admin User"} />
                      </div>

                      <div className="form-group">
                        <label htmlFor="adminEmail">Email</label>
                        <input type="email" id="adminEmail" defaultValue={adminUser?.email || "admin@pranaair.com"} />
                      </div>

                      <div className="form-group">
                        <label htmlFor="adminPassword">Password</label>
                        <input type="password" id="adminPassword" placeholder="••••••••" />
                        <span className="form-hint">Leave blank to keep current password</span>
                      </div>

                      <div className="form-actions">
                        <button type="submit" className="button-primary">
                          Update Profile
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="settings-card notifications">
                <div className="card-header">
                  <h2 className="card-title">Notification Settings</h2>
                </div>

                <div className="card-content">
                  <div className="notification-options">
                    <div className="notification-option">
                      <div className="option-details">
                        <h3>New Order Notifications</h3>
                        <p>Receive notifications when new orders are placed</p>
                      </div>
                      <label className="toggle">
                        <input type="checkbox" defaultChecked />
                        <span className="toggle-switch"></span>
                      </label>
                    </div>

                    <div className="notification-option">
                      <div className="option-details">
                        <h3>Low Stock Alerts</h3>
                        <p>Get notified when product inventory is running low</p>
                      </div>
                      <label className="toggle">
                        <input type="checkbox" defaultChecked />
                        <span className="toggle-switch"></span>
                      </label>
                    </div>

                    <div className="notification-option">
                      <div className="option-details">
                        <h3>Customer Sign-ups</h3>
                        <p>Notifications for new customer registrations</p>
                      </div>
                      <label className="toggle">
                        <input type="checkbox" />
                        <span className="toggle-switch"></span>
                      </label>
                    </div>

                    <div className="notification-option">
                      <div className="option-details">
                        <h3>Payment Notifications</h3>
                        <p>Get notified about payment status updates</p>
                      </div>
                      <label className="toggle">
                        <input type="checkbox" defaultChecked />
                        <span className="toggle-switch"></span>
                      </label>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="button-primary">
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
