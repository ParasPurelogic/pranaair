"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons"

export default function AddressesSection() {
    const addresses = [
        {
            id: 1,
            type: "Home Address",
            addressLine1: "123 Main Street",
            addressLine2: "New Delhi, Delhi 110001",
            country: "India",
            phone: "+91 98765 43210",
            isDefaultShipping: true,
            isDefaultBilling: false,
        },
        {
            id: 2,
            type: "Work Address",
            addressLine1: "456 Office Park",
            addressLine2: "Gurgaon, Haryana 122001",
            country: "India",
            phone: "+91 98765 43211",
            isDefaultShipping: false,
            isDefaultBilling: true,
        },
    ]

    return (
        <div className="p-4 flex-grow-1">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0">My Addresses</h4>
                <button className="btn btn-primary d-flex align-items-center">
                    <FontAwesomeIcon icon={faPlus} className="me-2" />
                    Add New Address
                </button>
            </div>
            <p className="text-muted mb-4">Manage your shipping and billing addresses</p>

            <div className="row g-4">
                {addresses.map((address) => (
                    <div className="col-md-6" key={address.id}>
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="card-title mb-0">{address.type}</h5>
                                    <div>
                                        {address.isDefaultShipping && <span className="badge bg-primary me-2">Default shipping</span>}
                                        {address.isDefaultBilling && <span className="badge bg-info">Default billing</span>}
                                    </div>
                                </div>
                                <p className="card-text mb-1">{address.addressLine1}</p>
                                <p className="card-text mb-1">{address.addressLine2}</p>
                                <p className="card-text mb-1">{address.country}</p>
                                <p className="card-text text-muted mb-3">{address.phone}</p>
                                <div className="d-flex">
                                    <button className="btn btn-outline-secondary btn-sm d-flex align-items-center me-2">
                                        <FontAwesomeIcon icon={faEdit} className="me-1" /> Edit
                                    </button>
                                    <button className="btn btn-outline-danger btn-sm d-flex align-items-center">
                                        <FontAwesomeIcon icon={faTrashAlt} className="me-1" /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
