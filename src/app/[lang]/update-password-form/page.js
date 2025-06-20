"use client"

import { useState } from "react"
import updatePassword from "@/actions/update-password"
export default function UpdatePasswordForm() {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage("")

        if (newPassword !== confirmPassword) {
            setMessage("New password and confirm password do not match.")
            return
        }

        setLoading(true)
        const result = await updatePassword({
            old_password: oldPassword,
            new_password: newPassword,
        })

        setMessage(result.message)
        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="password"
                placeholder="Old Password"
                className="form-control mb-3"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="New Password"
                className="form-control mb-3"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Confirm New Password"
                className="form-control mb-3"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            {message && <div className="alert alert-info">{message}</div>}
            <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Updating..." : "Update Password"}
            </button>
        </form>
    )
}
