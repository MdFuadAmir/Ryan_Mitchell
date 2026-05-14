// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import hero from "../assets/p1.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="md:min-h-screen flex items-center px-6 py-24 md:py-28 bg-[#f6efe7] dark:bg-[#181512]"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full md:w-1/2 flex justify-center order-1 md:order-2 relative"
        >
          {/* IMAGE BOX */}
          <div className="rounded-3xl shadow-md overflow-hidden bg-[#ebe2d8] dark:bg-[#24201c]">
            <img
              src={hero}
              alt="design"
              className="w-full h-full object-cover"
            />
          </div>

          {/* floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-xs bg-[#e3d8cc] text-[#5f5146] dark:bg-[#312b25] dark:text-[#d2c0ad]"
          >
            ✨ Creative Designer
          </motion.div>

          {/* stat card */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-4 right-4 px-3 py-2 rounded-lg shadow-sm text-xs bg-[#f0e6dc] text-[#5f5146] dark:bg-[#2a241f] dark:text-[#d2c0ad]"
          >
            🎯 20+ Projects
          </motion.div>
        </motion.div>

        {/* TEXT SIDE */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="tracking-widest text-[11px] sm:text-xs text-[#7a6a5a] dark:text-[#b8a28d]"
          >
            CREATIVE GRAPHICS DESIGNER • BRANDING SPECIALIST
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-semibold leading-snug text-[24px] sm:text-[30px] md:text-[38px] lg:text-[48px] text-[#5f5146] dark:text-[#f2e7da]"
          >
            Hi, I’m{" "}
            <span className="text-[#9a8572] dark:text-[#d4b89d]">
              Ryan Mitchell
            </span>
            <br />I Build Modern Visual Identities That Grow Brands
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed max-w-md text-[#7a6a5a] dark:text-[#c4b19d]"
          >
            I design high-impact logos, branding systems, social media kits and
            marketing visuals that help businesses stand out in a competitive
            digital world.
          </motion.p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 mt-6">
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
              className="px-5 py-2.5 rounded-full flex items-center gap-2 text-xs sm:text-sm bg-[#e3d8cc] text-[#5f5146] dark:bg-[#3a3128] dark:text-[#f2e7da]"
            >
              Hire Me <FaArrowRight />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#portfolio"
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm border border-[#d8c9b8] text-[#5f5146] dark:border-[#4a3f34] dark:text-[#e5d3c0]"
            >
              View Work
            </motion.a>
          </div>

          {/* STATS */}
          <div className="flex gap-4 mt-6 flex-wrap text-[11px] sm:text-xs text-[#8b7b6b] dark:text-[#b89f89]">
            <span>✔ 20+ Projects</span>
            <span>✔ 5+ Years</span>
            <span>✔ Branding Expert</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
