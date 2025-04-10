"use client";

import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation"; 
import { useState } from "react";
import "./style.css";

const ContactForm = ({ pageName }) => {
  const pathname = usePathname();
  const router = useRouter(); 
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          page: pageName || pathname,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setIsError(false);
        reset();

        
        setTimeout(() => {
          router.push("/air-quality-monitor");
        }, 1000); // wait 1.5 seconds before redirecting
      } else {
        setStatus(result.error || "Something went wrong");
        setIsError(true);
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again later.");
      setIsError(true);
    }
  };

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
                  {...register("fullName")}
                  type="text"
                  className="form-control"
                  placeholder="Your Full Name"
                  required
                />
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    {...register("phone")}
                    type="text"
                    className="form-control"
                    placeholder="Your Phone No"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    {...register("email")}
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
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
                  {...register("message")}
                  rows="4"
                  className="form-control"
                  placeholder="Write message here"
                  required
                ></textarea>
              </div>

              <div className="mt-4">
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </div>

              {status && (
                <p
                  className={`mt-3 ${
                    isError ? "text-danger" : "text-success"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
