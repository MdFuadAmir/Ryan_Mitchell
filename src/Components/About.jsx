// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaPalette, FaLayerGroup, FaLightbulb } from "react-icons/fa";
import owner from "../assets/owner.webP";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-28 px-6 overflow-hidden bg-[#f6efe7] dark:bg-[#181512]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center relative"
        >
          <div className="relative">
            <div className="w-64 h-80 sm:w-72 sm:h-80 md:w-80 md:h-110 rounded-3xl shadow-lg overflow-hidden bg-[#e3d8cc] dark:bg-[#24201c]">
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
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full text-xs shadow-md bg-[#e3d8cc] text-[#5f5146] dark:bg-[#312b25] dark:text-[#d2c0ad]"
            >
              🎨 Designer
            </motion.div>

            {/* floating stat */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-lg text-xs shadow-md bg-[#f0e6dc] text-[#5f5146] dark:bg-[#2a241f] dark:text-[#d2c0ad]"
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
          <p className="tracking-widest text-xs sm:text-sm text-[#7a6a5a] dark:text-[#b8a28d]">
            ABOUT ME
          </p>

          <h2 className="mt-3 font-bold leading-snug text-[26px] sm:text-[34px] md:text-[42px] text-[#5f5146] dark:text-[#f2e7da]">
            I Create Modern & Clean Visual Designs
          </h2>

          <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#7a6a5a] dark:text-[#c4b19d]">
            I’m Ryan Mitchell, a passionate graphics designer specialized in
            branding, logo design, and visual storytelling for modern brands.
          </p>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#7a6a5a] dark:text-[#c4b19d]">
            My focus is simple — create designs that are clean, meaningful, and
            help businesses build strong identity.
          </p>

          {/* FEATURE CARDS */}
          <div className="grid gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-3 p-4 rounded-xl shadow-sm bg-[#f0e6dc] dark:bg-[#24201c]"
            >
              <FaPalette className="text-[#7a6a5a] dark:text-[#d2c0ad]" />
              <div>
                <h4 className="font-semibold text-[#5f5146] dark:text-[#f2e7da]">
                  Creative Design
                </h4>
                <p className="text-sm text-[#7a6a5a] dark:text-[#c4b19d]">
                  Modern visuals that make brands stand out.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-3 p-4 rounded-xl shadow-sm bg-[#e3d8cc] dark:bg-[#2a241f]"
            >
              <FaLayerGroup className="text-[#7a6a5a] dark:text-[#d2c0ad]" />
              <div>
                <h4 className="font-semibold text-[#5f5146] dark:text-[#f2e7da]">
                  Branding System
                </h4>
                <p className="text-sm text-[#7a6a5a] dark:text-[#c4b19d]">
                  Complete brand identity & style system.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-3 p-4 rounded-xl shadow-sm bg-[#f2ebe4] dark:bg-[#312b25]"
            >
              <FaLightbulb className="text-[#7a6a5a] dark:text-[#d2c0ad]" />
              <div>
                <h4 className="font-semibold text-[#5f5146] dark:text-[#f2e7da]">
                  Creative Strategy
                </h4>
                <p className="text-sm text-[#7a6a5a] dark:text-[#c4b19d]">
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
