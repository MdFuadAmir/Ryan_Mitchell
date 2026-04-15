// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaFigma,
  FaPenNib,
  FaPaintBrush,
  FaLayerGroup,
  FaBullhorn,
  FaImage,
  FaBezierCurve,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "Brand Identity Design", level: 90 },
    { name: "Social Media Design", level: 92 },
    { name: "UI Visual Design", level: 78 },
    { name: "Print & Poster Design", level: 85 },
  ];

  const tools = [
    { icon: <FaImage />, name: "Photoshop" },
    { icon: <FaBezierCurve />, name: "Illustrator" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaPenNib />, name: "Canva" },
    { icon: <FaPaintBrush />, name: "Corel Draw" },
    { icon: <FaBullhorn />, name: "Marketing Tools" },
    { icon: <FaLayerGroup />, name: "Creative Suite" },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6"
      style={{
        background: "linear-gradient(135deg, #f6efe7, #e9eef2, #efe6dd)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p
            className="tracking-widest text-xs sm:text-sm"
            style={{ color: "#7a6a5a" }}
          >
            SKILLS & TOOLS
          </p>

          <h2
            className="mt-3 font-bold text-[26px] sm:text-[36px] md:text-[44px]"
            style={{ color: "#5f5146" }}
          >
            My Creative Expertise
          </h2>

          <p
            className="mt-4 text-sm sm:text-base max-w-xl mx-auto"
            style={{ color: "#7a6a5a" }}
          >
            I use modern design tools and creative skills to build strong visual
            identities and engaging digital experiences.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* SKILLS */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold" style={{ color: "#5f5146" }}>
              Design Skills
            </h3>

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-4"
                style={{
                  background: "#f0e6dc",
                  borderRadius: "30px 10px 30px 10px",
                }}
              >
                <div className="flex justify-between mb-2">
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#5f5146" }}
                  >
                    {skill.name}
                  </span>
                  <span className="text-xs" style={{ color: "#7a6a5a" }}>
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-2 bg-white/40 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #e3d8cc, #d8c9b8)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* TOOLS */}
          <div>
            <h3
              className="text-lg font-semibold mb-6"
              style={{ color: "#5f5146" }}
            >
              Tools I Use
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 flex flex-col items-center justify-center gap-2 cursor-pointer"
                  style={{
                    background: "#e3d8cc",
                    borderRadius: "25px 8px 25px 8px",
                  }}
                >
                  <div className="text-xl" style={{ color: "#5f5146" }}>
                    {tool.icon}
                  </div>
                  <p
                    className="text-xs text-center"
                    style={{ color: "#7a6a5a" }}
                  >
                    {tool.name}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* EXTRA LINE */}
            <p className="mt-6 text-sm" style={{ color: "#7a6a5a" }}>
              I continuously explore new tools to improve my creative workflow
              and design quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
