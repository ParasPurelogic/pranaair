"use client"

import { useState, useEffect } from "react"
import { getMyProfile, updateMyProfile, updateMyPassword } from "@/lib/api"
import { useUserInfo } from "@/context/UserInfo"

export default function ProfileSection() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [profileMessage, setProfileMessage] = useState("")
    const [passwordMessage, setPasswordMessage] = useState("")
    const [loadingProfile, setLoadingProfile] = useState(true)
    const [profileError, setProfileError] = useState(null)

    const { token, loading: contextLoading } = useUserInfo() // Get token and loading from context

    useEffect(() => {
        const fetchProfile = async () => {
            if (contextLoading) {
                // Wait for context to finish loading
                return
            }
            if (!token) {
                setProfileError("Authentication token not found. Please log in again.")
                setLoadingProfile(false)
                return
            }
            try {
                setLoadingProfile(true)
                const data = await getMyProfile(token)
                if (data && data.success && data.user) {
                    setFirstName(data.user.firstName || "")
                    setLastName(data.user.lastName || "")
                    setEmail(data.user.email || "")
                    setPhone(data.user.phone || "")
                } else {
                    setProfileError(data.message || "Failed to fetch profile.")
                }
            } catch (err) {
                setProfileError(err.message || "An error occurred while fetching profile.")
            } finally {
                setLoadingProfile(false)
            }
        }
        fetchProfile()
    }, [token, contextLoading]) // Re-run when token or context loading state changes

    const handleProfileUpdate = async (e) => {
        e.preventDefault()
        setProfileMessage("")
        if (!token) {
            setProfileMessage("Authentication token not found. Please log in again.")
            return
        }
        try {
            const response = await updateMyProfile({ firstName, lastName, email, phone }, token)
            if (response && response.success) {
                setProfileMessage("Profile updated successfully!")
            } else {
                setProfileMessage(response.message || "Failed to update profile.")
            }
        } catch (error) {
            setProfileMessage(error.message || "Error updating profile.")
        }
    }

    const handlePasswordChange = async (e) => {
        e.preventDefault()
        setPasswordMessage("")
        if (newPassword !== confirmNewPassword) {
            setPasswordMessage("New passwords do not match.")
            return
        }
        if (!token) {
            setPasswordMessage("Authentication token not found. Please log in again.")
            return
        }
        try {
            const response = await updateMyPassword({ currentPassword, newPassword }, token)
            if (response && response.success) {
                setPasswordMessage("Password changed successfully!")
                setCurrentPassword("")
                setNewPassword("")
                setConfirmNewPassword("")
            } else {
                setPasswordMessage(response.message || "Failed to change password.")
            }
        } catch (error) {
            setPasswordMessage(error.message || "Error changing password.")
        }
    }

    if (loadingProfile || contextLoading) {
        return (
            <div className="p-4 flex-grow-1 d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading profile...</span>
                </div>
            </div>
        )
    }

    if (profileError) {
        return (
            <div className="p-4 flex-grow-1">
                <div className="alert alert-danger">{profileError}</div>
            </div>
        )
    }

    return (
        <div className="p-4 flex-grow-1">
            <h4 className="mb-3">My Profile</h4>
            <p className="text-muted mb-4">Manage your personal information and security settings</p>

            {/* Personal Information */}
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <h5 className="card-title mb-4">Personal Information</h5>
                    <form onSubmit={handleProfileUpdate}>
                        <div className="row g-3 mb-4">
                            <div className="col-md-6">
                                <label htmlFor="firstName" className="form-label">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lastName" className="form-label">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    readOnly
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        {profileMessage && (
                            <div
                                className={`alert ${profileMessage.includes("successfully") ? "alert-success" : "alert-danger"} mt-3`}
                            >
                                {profileMessage}
                            </div>
                        )}
                        <button type="submit" className="btn btn-success d-flex align-items-center">
                            Edit Profile
                        </button>
                    </form>
                </div>
            </div>

            {/* Account Security */}
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <h5 className="card-title mb-4">Account Security</h5>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <p className="mb-0">Password</p>
                            <small className="text-muted">Last changed: 3 months ago</small>
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#changePasswordModal"
                        >
                            Change Password
                        </button>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p className="mb-0">Two-Factor Authentication</p>
                            <small className="text-muted">Status: Not enabled</small>
                        </div>
                        <button className="btn btn-outline-primary">Enable 2FA</button>
                    </div>
                </div>
            </div>

            {/* Change Password Modal */}
            <div
                className="modal fade"
                id="changePasswordModal"
                tabIndex="-1"
                aria-labelledby="changePasswordModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handlePasswordChange}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="changePasswordModalLabel">
                                    Change Password
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="currentPassword" className="form-label">
                                        Current Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="currentPassword"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="newPassword" className="form-label">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="newPassword"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmNewPassword" className="form-label">
                                        Confirm New Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmNewPassword"
                                        value={confirmNewPassword}
                                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                {passwordMessage && (
                                    <div
                                        className={`alert ${passwordMessage.includes("successfully") ? "alert-success" : "alert-danger"} mt-3`}
                                    >
                                        {passwordMessage}
                                    </div>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
