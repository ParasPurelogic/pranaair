"use client"

import { useState } from "react"
import login from "@/actions/login"
import { domain } from "@/config"

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage("")
        setSuccessMessage("")
        setLoading(true)
        try {
            // Regex check

            // Login
            const response = await login({
                email: email,
                password: password
            })

            // Error if not success
            if (!response.status) {
                throw new Error(response.message)
            }

            // 
            alert("Login success");

            if (typeof window != undefined) {
                window.location.href == `${domain}/dashboard`
            }

            //
        } catch (err) {
            console.error("Login error details:", err)
            setErrorMessage(err.response?.data?.message || err.message || "An unexpected error occurred during login.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1>Customer Login</h1>
                    <p>Enter your credentials to access your account.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="emailInput" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="emailInput"
                                placeholder="admin@pranaair.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="passwordInput" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="passwordInput"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {successMessage && <div className="alert alert-success text-center mb-3">{successMessage}</div>}
                        {errorMessage && <div className="alert alert-danger text-center mb-3">{errorMessage}</div>}
                        <button type="submit" className="btn btn-primary w-100 py-2 mb-3 login-button" disabled={loading}>
                            {loading ? "Logging in..." : "Login"}
                        </button>
                        <div className="text-center">
                            <a href="/signup" className="btn btn-outline-secondary w-100 mt-1">Create an account</a>
                            <a href="/" className="d-block text-decoration-none mt-2">Back to Home</a>
                        </div>
                    </form>
                </div>
            </div>

            {/* Internal CSS */}
            <style jsx>{`
              .login-container {
     display: flex;
     justify-content: center;
     align-items: center;
     min-height: 100vh;
     background-color: #f5f8fa;
     padding: 1rem;
 }

 .login-card {
     background: white;
     border-radius: 12px;
     box-shadow: 0 8px 30px rgba(0, 0, 0, .12);
     width: 100%;
     max-width: 450px;
     padding: 2.5rem;
     transition: transform .3s ease;
 }

 .login-header {

     margin-bottom: 2rem;
 }

 .login-header h1 {
     font-size: 2rem;
     font-weight: 700;
     color: #1a202c;
     text-align: center;
     margin-bottom: .5rem;
 }

 .login-header form label {
     display: block;
     margin-bottom: .5rem;
     font-weight: 400;
     color: #4a5568;
     font-size: 14px;
 }

 .login-header p {
     color: #718096;
     text-align: center;
     font-size: 1rem;
 }

 .login-button {
     width: 100%;
     padding: .75rem 1rem;
     background-color: #4299e1;
     color: white;
     border: none;
     border-radius: 8px;
     font-size: 1rem;
     font-weight: 600;
     cursor: pointer;
     transition: background-color .2s ease;
     position: relative;
     display: flex;
     align-items: center;
     justify-content: center;
 }

 @media only screen and (min-width: 320px) and (max-width: 767px) {
     .login-card {
         padding: 1.5rem;
     }

     .login-header h1 {
         font-size: 1.5rem;
     }
 }

 @media only screen and (min-width: 768px) and (max-width: 1023px) {
     .login-card {
         padding: 2rem;
     }
 }

 @media only screen and (min-width: 1024px) and (max-width: 1366px) {
     .login-card {
         padding: 2.5rem;
     }
 }
        `}</style>
        </div>
    );
}
