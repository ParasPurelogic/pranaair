import React from 'react'
import Link from "next/link"
import Image from "next/image"
import "./style.css"

export default function Footer() {
  return (
    <footer className="footer-section">
    <div className="container py-5">
      <div className="row">
        {/* Company Info Column */}
        <div className="col-md-3 mb-4 mb-md-0">
          <div className="footer-logo mb-3">
            <Image
              src="https://www.pranaair.com/wp-content/uploads/2021/03/prana-air-white.png"
              alt="Prana Air Logo"
              width={160}
              height={80}
              className="img-fluid"
            />
          </div>
          <p className="footer-about">
            Prana Air is a product brand of Purelogic Labs India to provide the best air quality monitoring and
            solutions for indoor & outdoor globally.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="col-md-3 mb-4 mb-md-0">
          <h5 className="footer-heading mb-4">Quick Links</h5>
          <ul className="footer-links list-unstyled">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
          </ul>
          <div className="mt-4">
            <span className="me-2">Your Order</span>
            <Link href="/tracking" className="tracking-btn">
              Tracking
            </Link>
          </div>
        </div>

        {/* Our Products Column */}
        <div className="col-md-3 mb-4 mb-md-0">
          <h5 className="footer-heading mb-4">Our Products</h5>
          <ul className="footer-links list-unstyled">
            <li>
              <Link href="/products/monitors">Air Quality Monitors</Link>
            </li>
            <li>
              <Link href="/products/sensors">Air Quality Sensors</Link>
            </li>
            <li>
              <Link href="/products/drone">Air Quality Drone</Link>
            </li>
            <li>
              <Link href="/products/pcbs">Air Quality PCBs</Link>
            </li>
            <li>
              <Link href="/products/weather-station">Weather Station</Link>
            </li>
            <li>
              <Link href="/products/fresh-air-machine">Fresh Air Machine</Link>
            </li>
          </ul>
        </div>

        {/* Other Links Column */}
        <div className="col-md-3 mb-4 mb-md-0">
          <h5 className="footer-heading mb-4">Other Links</h5>
          <ul className="footer-links list-unstyled mb-4">
            <li>
              <Link href="/solutions">Air Quality Solutions</Link>
            </li>
            <li>
              <Link href="/manuals">Product Manuals</Link>
            </li>
            <li>
              <Link href="/data-accuracy">Data Accuracy</Link>
            </li>
            <li>
              <Link href="/case-study">Case Study</Link>
            </li>
            <li>
              <Link href="/refund-policy">Refund Policy</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>

          <h5 className="footer-heading mb-3">Contact Details</h5>
          <ul className="contact-info list-unstyled">
            <li className="mb-2">
              <div className="me-2" /> Email:
              <a href="mailto:info@purelogic.in">info@purelogic.in</a>
            </li>
            <li className="mb-2">
              <div className="me-2" /> Phone:
              <div>+91 7391873918 (India)</div>
              <div>+1 612 2992 211 (US)</div>
            </li>
            <li className="mb-2">
              <div className="me-2" /> India Office:
              <div>Crown Heights, 7th Floor, 706, Rohini Sec-10,</div>
              <div>New Delhi-110085, India</div>
            </li>
            <li>
              <div className="me-2" /> US Office:
              <div>1240 S 2nd St, #933, Minneapolis, MN 55415,</div>
              <div>United States</div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Social Media & Copyright */}
    <div className="container">
      <div className="row py-3 border-top">
        <div className="col-md-6 text-center text-md-start">
          <p className="mb-0">© {new Date().getFullYear()} Copyright Prana Air</p>
        </div>
        <div className="col-md-6 text-center text-md-end">
          <p className="mb-0">
            Find Us On :
            <a href="#" className="social-icon ms-2">
             
            </a>
            <a href="#" className="social-icon ms-2">
              
            </a>
            <a href="#" className="social-icon ms-2">
             
            </a>
            <a href="#" className="social-icon ms-2">
            
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}
