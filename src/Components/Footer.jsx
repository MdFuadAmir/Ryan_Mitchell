// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";
import Logo from "../Utils/Logo";

const Footer = () => {
  return (
    <footer
      className="px-6 pt-20 pb-10"
      style={{
        background: "linear-gradient(135deg, #efe6dd, #e9eef2)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <Logo />
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: "#7a6a5a" }}
            >
              Creative graphics designer focused on building modern, clean and
              visually strong brand experiences.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-5">
              {[FaFacebookF, FaInstagram, FaBehance, FaDribbble].map(
                (Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="p-3 rounded-full cursor-pointer"
                    style={{
                      background: "#e3d8cc",
                      color: "#5f5146",
                    }}
                  >
                    <Icon size={14} />
                  </motion.div>
                ),
              )}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3
              className="text-sm font-semibold mb-4"
              style={{ color: "#5f5146" }}
            >
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:translate-x-1 transition"
                    style={{ color: "#7a6a5a" }}
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3
              className="text-sm font-semibold mb-4"
              style={{ color: "#5f5146" }}
            >
              Services
            </h3>

            <ul className="space-y-2 text-sm">
              {[
                "Logo Design",
                "Brand Identity",
                "Social Media Design",
                "Packaging Design",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:translate-x-1 transition"
                  style={{ color: "#7a6a5a" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3
              className="text-sm font-semibold mb-4"
              style={{ color: "#5f5146" }}
            >
              Contact
            </h3>

            <p className="text-sm" style={{ color: "#7a6a5a" }}>
              mdfuadamir@gmail.com
            </p>

            <p className="text-sm mt-2" style={{ color: "#7a6a5a" }}>
              Available for freelance projects worldwide.
            </p>

            {/* CTA */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="inline-block mt-4 px-4 py-2 rounded-full text-xs"
              style={{
                background: "#d8c9b8",
                color: "#5f5146",
              }}
            >
              Start a Project
            </motion.a>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="mt-16 pt-6 text-center text-xs border-t"
          style={{
            borderColor: "#d8c9b8",
            color: "#8b7b6b",
          }}
        >
          © 2026 Md Fuad Amir. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
