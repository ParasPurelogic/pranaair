"use client"
import { useForm } from "react-hook-form"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import "./style.css"

const ContactForm = ({ pageName }) => {
  const pathname = usePathname()
  const router = useRouter()
  const [status, setStatus] = useState("")
  const [isError, setIsError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setStatus("")
    setIsError(false)

    try {
      console.log("Submitting contact form:", data)

      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          page: pageName || pathname,
        }),
      })

      console.log("Response status:", response.status)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      console.log("API Response:", result)

      if (result.success) {
        setStatus("Message sent successfully!")
        setIsError(false)
        reset()

        setTimeout(() => {
          router.push("/air-quality-monitor")
        }, 1000)
      } else {
        setStatus(result.error || "Something went wrong")
        setIsError(true)
      }
    } catch (error) {
      console.error("Contact form submission error:", error)

      if (error.message.includes("404")) {
        setStatus("API endpoint not found. Please check server configuration.")
      } else if (error.message.includes("Unexpected token")) {
        setStatus("Server returned invalid response. Please try again.")
      } else {
        setStatus("Failed to send message. Please try again later.")
      }
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-section">
      <div className="container box-form">
        <div className="row">
          {/* Left Contact Info */}
          <div className="col-md-4 contact-info">
            <h4>Contact Info</h4>
            <p className="mb-2">Looking for Any Indoor Air Quality Monitor?</p>
            <ul>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>
              </li>
              <li>
                <p>
                  Phone: <br /> (+91) 73918-73918
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </li>
              <li>
                <p>
                  Email: <br /> info@purelogic.in
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </li>
              <li>
                <p>
                  Office: <br /> 706, 7th Floor, Sec 10, Rohini, Delhi 85, India
                </p>
              </li>
            </ul>
          </div>

          {/* Right Contact Form */}
          <div className="col-md-8">
            <form className="form-box" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <input
                  {...register("fullName", { required: "Full name is required" })}
                  type="text"
                  className="form-control"
                  placeholder="Your Full Name"
                />
                {errors.fullName && <span className="text-danger">{errors.fullName.message}</span>}
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    {...register("phone", { required: "Phone number is required" })}
                    type="text"
                    className="form-control"
                    placeholder="Your Phone No"
                  />
                  {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
                </div>
                <div className="col-md-6">
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                  {errors.email && <span className="text-danger">{errors.email.message}</span>}
                </div>
              </div>

              <div className="mt-3">
                <input
                  {...register("organization")}
                  type="text"
                  className="form-control"
                  placeholder="Your Organisation"
                />
              </div>

              <div className="mt-3">
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows="4"
                  className="form-control"
                  placeholder="Write message here"
                ></textarea>
                {errors.message && <span className="text-danger">{errors.message.message}</span>}
              </div>

              <div className="mt-4">
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              {status && <p className={`mt-3 ${isError ? "text-danger" : "text-success"}`}>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
