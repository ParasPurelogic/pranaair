"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createCustomer } from "@/lib/api"
import { domain } from "@/config"

export default function SignupForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage("")
        setLoading(true)

        try {
            const result = await createCustomer({
                first_name: firstName,
                last_name: lastName,
                email,
                password,
                phone_number: phoneNumber,
            })

            if (result.status) {
                router.push(`${domain}/customer-login`)
            } else {
                setErrorMessage(result.message || "Signup failed. Please try again.")
            }
        } catch (err) {
            console.error("Signup form error details:", err)
            setErrorMessage(err.message || "An unexpected error occurred during signup.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="card shadow-sm p-4" style={{ width: "28rem" }}>
                <div className="card-body">
                    <h5 className="card-title text-center mb-3">Customer Signup</h5>
                    <p className="card-text text-center text-muted mb-4">Create your account to get started.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="firstNameInput" className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstNameInput"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastNameInput" className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastNameInput"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emailInput" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="emailInput"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneInput" className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phoneInput"
                                placeholder="8989898989"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="passwordInput" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="passwordInput"
                                placeholder="Your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {errorMessage && (
                            <div className="alert alert-danger text-center mb-3">{errorMessage}</div>
                        )}
                        <button type="submit" className="btn btn-primary w-100 py-2 mb-3" disabled={loading}>
                            {loading ? "Signing up..." : "Signup"}
                        </button>
                        <div className="text-center">
                            <a href="/" className="d-block text-decoration-none mb-2">Back to Home</a>
                            <a href="/customer-login" className="d-block text-decoration-none">Already have an account? Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
