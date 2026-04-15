import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Utils/Logo";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    setActive(id);
    setOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed w-full top-0 left-0 z-50 backdrop-blur-xl shadow-sm"
      style={{
        background: "linear-gradient(90deg, #f6efe7cc, #e9eef2cc)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <div
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="relative cursor-pointer"
            >
              <motion.span
                whileHover={{ y: -2 }}
                className="text-sm md:text-base transition"
                style={{
                  color: active === link.id ? "#5f5146" : "#7a6a5a",
                }}
              >
                {link.label}
              </motion.span>

              {/* Active underline animation */}
              <motion.div
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-0.5 rounded-full"
                style={{
                  background: "#b7a692",
                }}
                initial={false}
                animate={{
                  width: active === link.id ? "100%" : "0%",
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="mailto:mdfuadamir@gmail.com"
            className="px-5 py-2 rounded-full text-sm transition hover:scale-105"
            style={{
              background: "#e3d8cc",
              color: "#5f5146",
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#6b5b4d] text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-6"
          >
            <div
              className="flex flex-col gap-4 rounded-2xl p-5 shadow-lg"
              style={{ background: "#f3eee8cc" }}
            >
              {navLinks.map((link) => (
                <div
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className="py-2 cursor-pointer transition"
                  style={{
                    color: active === link.id ? "#5f5146" : "#7a6a5a",
                    borderBottom: "1px solid #e2d8cc",
                  }}
                >
                  {link.label}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
