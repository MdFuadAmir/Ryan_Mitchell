// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Utils/Logo";
import DarkMood from "../Utils/DarkMood";

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
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-xl shadow-sm bg-[#ede9e5cc] dark:bg-[#1e1b18cc] transition-colors duration-300 border-b border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu - Only visible on LG and larger */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="relative cursor-pointer group"
            >
              <motion.span
                whileHover={{ y: -2 }}
                className={`text-sm lg:text-base transition-colors duration-300 ${
                  active === link.id
                    ? "text-[#5f5146] dark:text-[#ede9e5]"
                    : "text-[#7a6a5a] dark:text-[#a3978a] hover:text-[#5f5146] dark:hover:text-[#ede9e5]"
                }`}
              >
                {link.label}
              </motion.span>

              {active === link.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-0.5 rounded-full bg-[#b7a692] dark:bg-[#d6c9bc]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <DarkMood />
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={() => {
                const textarea = document.querySelector(
                  'textarea[name="message"]',
                );
                if (textarea) {
                  textarea.value =
                    "I would like to start a project with Md Fuad Amir!";
                  textarea.dispatchEvent(new Event("input", { bubbles: true }));
                }
              }}
              className="px-6 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 bg-[#e3d8cc] dark:bg-[#3a342f] text-[#5f5146] dark:text-[#ede9e5] border border-[#d6c9bc] dark:border-[#5f5146]"
            >
              Let’s Talk
            </a>
          </div>

          <button
            className="lg:hidden text-[#6b5b4d] dark:text-[#d6c9bc] text-2xl z-60"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-55 lg:hidden "
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-fit w-[70%] max-w-80 bg-[#f6f3f0] dark:bg-[#26221f] shadow-2xl z-58 lg:hidden flex flex-col p-6 overflow-y-auto rounded-bl-[20px]"
            >
              {/* Drawer Header: Logo and Close Button */}
              <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#e2d8cc] dark:border-[#3a342f]">
                <Logo />
              </div>

              {/* Nav Links */}
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleScroll(link.id)}
                    className={`text-lg font-medium cursor-pointer py-2 transition-all ${
                      active === link.id
                        ? "text-[#5f5146] dark:text-[#ede9e5] pl-2 border-l-4 border-[#b7a692] dark:border-[#d6c9bc]"
                        : "text-[#7a6a5a] dark:text-[#a3978a] hover:pl-2"
                    }`}
                  >
                    {link.label}
                  </motion.div>
                ))}
              </div>

              {/* Footer Button */}
              <div className="mt-auto pt-10 pb-6">
                <a
                  href="#contact"
                  onClick={() => {
                    setOpen(false);
                    const textarea = document.querySelector(
                      'textarea[name="message"]',
                    );
                    if (textarea) {
                      textarea.value =
                        "I would like to start a project with Md Fuad Amir!";
                      textarea.dispatchEvent(
                        new Event("input", { bubbles: true }),
                      );
                    }
                  }}
                  className="block text-center w-full px-6 py-4 rounded-xl bg-[#e3d8cc] dark:bg-[#3a342f]"
                >
                  Get In Tuch
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
