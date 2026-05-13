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
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <footer className="px-6 pt-20 pb-10 bg-[#e6ddd4] dark:bg-[#120f0d] transition-colors duration-300 border-t border-[#d4c2af] dark:border-[#2f2722]">
      <div className="max-w-6xl mx-auto relative">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* BRAND */}
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-[#7a6a5a] dark:text-[#c4b19d]">
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
                    className="p-3 rounded-full cursor-pointer bg-[#d8c9b8] dark:bg-[#2a241f] text-[#5f5146] dark:text-[#f2e7da] transition-colors duration-300"
                  >
                    <Icon size={14} />
                  </motion.div>
                ),
              )}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#5f5146] dark:text-[#f2e7da]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.id}`}
                    className="cursor-pointer hover:translate-x-1 inline-block transition text-[#7a6a5a] dark:text-[#c4b19d]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#5f5146] dark:text-[#f2e7da]">
              Contact
            </h3>

            <p className="text-sm text-[#7a6a5a] dark:text-[#c4b19d]">
              mdfuadamir@gmail.com
            </p>

            <p className="text-sm mt-2 text-[#7a6a5a] dark:text-[#c4b19d]">
              Available for freelance projects worldwide.
            </p>

            {/* CTA */}
            <motion.a
              href="#contact"
              onClick={() => {
                const textarea = document.querySelector(
                  'textarea[name="message"]',
                );
                if (textarea) {
                  textarea.value =
                    "I’d like to collaborate on a design project that elevates my brand with modern and impactful visuals.";
                  textarea.dispatchEvent(new Event("input", { bubbles: true }));
                }
              }}
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-4 px-4 py-2 rounded-full text-xs bg-[#cdb8a3] dark:bg-[#3a3128] text-[#5f5146] dark:text-[#f2e7da] transition-colors duration-300"
            >
              Start a Project
            </motion.a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-8 text-center text-xs border-t border-[#cdb8a3] dark:border-[#352c26] text-[#8b7b6b] dark:text-[#b8a28d]">
          Copyright © {new Date().getFullYear()} Md Fuad Amir. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
