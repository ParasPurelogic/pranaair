import axios from "axios"

const API_BASE_URL = "https://myserver.aqi.in/pranaAir"

export const loginCustomer = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/loginCustomer`, { email, password })
        return response?.data
    } catch (error) {
        console.dir({ SSSSSSSS: error }, { depth: 4 });
        return { status: "failed", message: error?.response?.data?.message || error?.message, token: undefined }
    }
}

export const createCustomer = async (customerData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/createCustomer`, customerData)
        return response.data
    } catch (error) {
        console.error("Create customer error:", error.response ? error.response.data : error.message)
        throw error.response ? error.response.data : new Error("Network error or unexpected response")
    }
}

export const getMyProfile = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getMyProfile`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        return response?.data
    } catch (error) {
        return { status: "failed", message: error?.response?.data?.message || error?.message }
    }
}

export const updateMyProfile = async (profileData, token) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/updateMyProfile`, profileData, {
            headers: { Authorization: `Bearer ${token}` },
        })
        return response.data
    } catch (error) {
        console.error("Update profile error:", error.response ? error.response.data : error.message)
        throw error.response ? error.response.data : new Error("Network error or unexpected response")
    }
}

export const updateMyPassword = async (passwordData, token) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/updateMyPassword`, passwordData, {
            headers: { Authorization: `Bearer ${token}` },
        })
        return response.data
    } catch (error) {
        console.error("Update password error:", error.response ? error.response.data : error.message)
        throw error.response ? error.response.data : new Error("Network error or unexpected response")
    }
}

export const getMyOrders = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getMyOrders`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        return response.data
    } catch (error) {
        console.error("Get orders error:", error.response ? error.response.data : error.message)
        throw error.response ? error.response.data : new Error("Network error or unexpected response")
    }
}

export const getMyOrderById = async (orderId, token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getMyOrderById/${orderId}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        return response.data
    } catch (error) {
        console.error(`Get order by ID ${orderId} error:`, error.response ? error.response.data : error.message)
        throw error.response ? error.response.data : new Error("Network error or unexpected response")
    }
}
