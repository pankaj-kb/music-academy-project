"use client";

import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
function Footer() {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Have a query ? <br /> Contact Us
        </motion.h1>
      </LampContainer>
      <footer className="bg-black text-gray-400 py-12">
        <div
          className="max-w-6xl mx-auto grid grid-cols-1 
sm:grid-cols-2 lg:grid-cols-4 gap-8 
px-4 sm:px-6 lg:px-8 text-center"
        >
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
              Music School is a premier institution dedicated to teaching the
              art and science of music. We nurture talent from the ground up,
              fostering a vibrant community of musicians.
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex flex-col">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>

              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h2>
            <p>New Delhi, India</p>
            <p>Delhi 10001</p>
            <p>Email: info@musicschool.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <p className="text-center text-xs pt-8">
          © 2024 Music School. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
