// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import hero from "../../public/Images/p1.png";
const Hero = () => {
  return (
    <section
      id="home"
      className="md:min-h-screen flex items-center px-6 py-10 md:py-20"
      style={{
        background: "linear-gradient(135deg, #f6efe7, #e9eef2, #efe6dd)",
      }}
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full md:w-1/2 flex justify-center order-1 md:order-2 relative"
        >
          {/* IMAGE BOX */}
          <div
            className="rounded-3xl shadow-md overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #e9e0d6, #f2ebe4)",
            }}
          >
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
            className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-xs"
            style={{
              background: "#e3d8cc",
              color: "#5f5146",
            }}
          >
            ✨ Creative Designer
          </motion.div>

          {/* stat card */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute top-4 right-4 px-3 py-2 rounded-lg shadow-sm text-xs"
            style={{
              background: "#f0e6dc",
              color: "#5f5146",
            }}
          >
            🎯 20+ Projects
          </motion.div>
        </motion.div>
        {/* TEXT SIDE */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="tracking-widest text-[11px] sm:text-xs"
            style={{ color: "#7a6a5a" }}
          >
            CREATIVE GRAPHICS DESIGNER • BRANDING SPECIALIST
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-semibold leading-snug text-[24px] sm:text-[30px] md:text-[38px] lg:text-[48px]"
            style={{ color: "#5f5146" }}
          >
            Hi, I’m <span style={{ color: "#9a8572" }}>Ryan Mitchell</span>
            <br />I Build Modern Visual Identities That Grow Brands
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed max-w-md"
            style={{ color: "#7a6a5a" }}
          >
            I design high-impact logos, branding systems, social media kits and
            marketing visuals that help businesses stand out in a competitive
            digital world.
          </motion.p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 mt-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2.5 rounded-full flex items-center gap-2 text-xs sm:text-sm"
              style={{
                background: "#e3d8cc",
                color: "#5f5146",
              }}
            >
              Hire Me <FaArrowRight />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#portfolio"
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm"
              style={{
                border: "1px solid #d8c9b8",
                color: "#5f5146",
              }}
            >
              View Work
            </motion.a>
          </div>

          {/* STATS */}
          <div className="flex gap-4 mt-6 flex-wrap text-[11px] sm:text-xs">
            <span style={{ color: "#8b7b6b" }}>✔ 20+ Projects</span>
            <span style={{ color: "#8b7b6b" }}>✔ 5+ Years</span>
            <span style={{ color: "#8b7b6b" }}>✔ Branding Expert</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
