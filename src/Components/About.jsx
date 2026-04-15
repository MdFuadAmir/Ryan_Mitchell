// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaPalette, FaLayerGroup, FaLightbulb } from "react-icons/fa";
import owner from "../../public/Images/owner.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f6efe7, #e9eef2, #efe6dd)",
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center relative"
        >
          {/* IMAGE BOX */}
          <div className="relative">
            <div
              className="w-64 h-80 sm:w-72 sm:h-80 md:w-80 md:h-110 rounded-3xl shadow-lg overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #e3d8cc, #f0e6dc)",
              }}
            >
              <img
                src={owner}
                alt="owner"
                className="w-full h-full object-cover"
              />
            </div>

            {/* floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full text-xs shadow-md"
              style={{
                background: "#e3d8cc",
                color: "#5f5146",
              }}
            >
              🎨 Designer
            </motion.div>

            {/* floating stat */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-lg text-xs shadow-md"
              style={{
                background: "#f0e6dc",
                color: "#5f5146",
              }}
            >
              ⭐ 20+ Projects
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="tracking-widest text-xs sm:text-sm"
            style={{ color: "#7a6a5a" }}
          >
            ABOUT ME
          </p>

          <h2
            className="mt-3 font-bold leading-snug text-[26px] sm:text-[34px] md:text-[42px]"
            style={{ color: "#5f5146" }}
          >
            I Create Modern & Clean Visual Designs
          </h2>

          <p
            className="mt-5 text-sm sm:text-base leading-relaxed"
            style={{ color: "#7a6a5a" }}
          >
            I’m Ryan Mitchell, a passionate graphics designer specialized in
            branding, logo design, and visual storytelling for modern brands.
          </p>

          <p
            className="mt-3 text-sm sm:text-base leading-relaxed"
            style={{ color: "#7a6a5a" }}
          >
            My focus is simple — create designs that are clean, meaningful,
            and help businesses build strong identity.
          </p>

          {/* FEATURE CARDS */}
          <div className="grid gap-4 mt-8">

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-3 p-4 rounded-xl shadow-sm"
              style={{ background: "#f0e6dc" }}
            >
              <FaPalette color="#7a6a5a" />
              <div>
                <h4 className="font-semibold" style={{ color: "#5f5146" }}>
                  Creative Design
                </h4>
                <p className="text-sm" style={{ color: "#7a6a5a" }}>
                  Modern visuals that make brands stand out.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-3 p-4 rounded-xl shadow-sm"
              style={{ background: "#e3d8cc" }}
            >
              <FaLayerGroup color="#7a6a5a" />
              <div>
                <h4 className="font-semibold" style={{ color: "#5f5146" }}>
                  Branding System
                </h4>
                <p className="text-sm" style={{ color: "#7a6a5a" }}>
                  Complete brand identity & style system.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-3 p-4 rounded-xl shadow-sm"
              style={{ background: "#f2ebe4" }}
            >
              <FaLightbulb color="#7a6a5a" />
              <div>
                <h4 className="font-semibold" style={{ color: "#5f5146" }}>
                  Creative Strategy
                </h4>
                <p className="text-sm" style={{ color: "#7a6a5a" }}>
                  Design that connects with business goals.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;