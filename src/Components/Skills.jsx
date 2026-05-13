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
import Title from "../Utils/Title";

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
      className="py-24 md:py-28 px-6 bg-[#f6efe7] dark:bg-[#181512]"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <Title
          head={"SKILLS & TOOLS"}
          title={"My Creative Expertise"}
          subtitle={`I use modern design tools and creative skills to build strong visual
            identities and engaging digital experiences.`}
        />

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* SKILLS */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#5f5146] dark:text-[#f2e7da]">
              Design Skills
            </h3>

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-4 bg-[#f0e6dc] dark:bg-[#24201c]"
                style={{
                  borderRadius: "30px 10px 30px 10px",
                }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-[#5f5146] dark:text-[#f2e7da]">
                    {skill.name}
                  </span>
                  <span className="text-xs text-[#7a6a5a] dark:text-[#b8a28d]">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-2 bg-white/40 dark:bg-[#3a3128] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-[#d8c9b8] dark:bg-[#b89e82]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* TOOLS */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#5f5146] dark:text-[#f2e7da]">
              Tools I Use
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 flex flex-col items-center justify-center gap-2 cursor-pointer bg-[#e3d8cc] dark:bg-[#2a241f]"
                  style={{
                    borderRadius: "25px 8px 25px 8px",
                  }}
                >
                  <div className="text-xl text-[#5f5146] dark:text-[#d2c0ad]">
                    {tool.icon}
                  </div>

                  <p className="text-xs text-center text-[#7a6a5a] dark:text-[#c4b19d]">
                    {tool.name}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-sm text-[#7a6a5a] dark:text-[#c4b19d]">
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
