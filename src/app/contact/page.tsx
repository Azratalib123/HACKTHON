import React from "react";
import { SiteHeader } from "../components/site-header"
import Footer from '../components/footer'
import Features from '../components/features'
import styles from "../styles/contact.module.css";
import Link from "next/link";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
export default function Contact() {
  return (
    <header>
        < SiteHeader />
        <a href="http://localhost:3000/"><FaArrowLeft /></a>
        <div className="back relative h-[300px] bg-center">
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white relative z-10">
            <h1 className="text-4xl font-bold mb-2">CONTACT</h1>
            <div className="flex items-center space-x-2">
              <span>Home</span>
              <span>/</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
<br />
<br />
<br />
  <section className="contact-us">
      <div className="row">
        <div className="contact-col">
          <div>
            <span>
              <h5><FaPhoneAlt /> +1233456789</h5>
              <p>MONDAY TO SATURDAY,10AM to 9PM</p>
            </span>
          </div>
          <div>
            <span>
              <h5><FaHome /> XYZRoad, ABC Building</h5>
              <p>KARACHI, SHAH LATIF ,IN</p>
            </span>
          </div>
          <div>
            <span>
              <h5><MdEmail /> 1234676@gmail.com</h5>
              <p>EMAIL US YOUR QUERYE</p>
            </span>
          </div>
        </div>
        <div className="contact-col">
          <span>Name</span>
          <input type="text" placeholder="Enter your name" required />
          <span>Email</span>
          <input type="email" placeholder="Enter email adress" required />
          <span>Password</span>
          <input type="text" placeholder="Enter your Password" required />
          <span>Message</span>
          <textarea placeholder="message" required></textarea>
          <button type="submit" className="btn reb-btn">Send Message</button>
        </div>
      </div>
    </section>
    <Features />
    <Footer />
 </header>
  )}