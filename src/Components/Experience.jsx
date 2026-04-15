// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaBriefcase, FaStar } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "Freelance Graphic Designer",
      company: "Self Employed",
      year: "2023 - Present",
      desc: "Working with global clients to create brand identity, social media visuals and marketing creatives.",
    },
    {
      role: "Junior Designer",
      company: "Creative Studio",
      year: "2022 - 2023",
      desc: "Assisted in branding projects, logo design and visual content production.",
    },
    {
      role: "Design Intern",
      company: "Design Agency",
      year: "2021 - 2022",
      desc: "Learned typography, layout design and professional workflow in real projects.",
    },
  ];

  return (
    <section
      id="experience"
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
            EXPERIENCE
          </p>

          <h2
            className="mt-3 font-bold text-[26px] sm:text-[36px] md:text-[44px]"
            style={{ color: "#5f5146" }}
          >
            My Creative Journey
          </h2>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* LEFT: CARDS */}
          <div className="lg:col-span-2 space-y-6">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-6 shadow-md relative"
                style={{
                  background: index % 2 === 0 ? "#f0e6dc" : "#e3d8cc",
                  borderRadius: "30px 10px 30px 10px",
                }}
              >
                {/* icon */}
                <div
                  className="absolute -top-4 left-6 w-10 h-10 flex items-center justify-center rounded-full shadow"
                  style={{ background: "#ffffffaa" }}
                >
                  <FaBriefcase style={{ color: "#5f5146" }} />
                </div>

                {/* year */}
                <span
                  className="absolute top-4 right-5 text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "#ffffff80",
                    color: "#7a6a5a",
                  }}
                >
                  {item.year}
                </span>

                <h3
                  className="text-lg font-semibold mt-4"
                  style={{ color: "#5f5146" }}
                >
                  {item.role}
                </h3>

                <p
                  className="text-sm font-medium mt-1"
                  style={{ color: "#8b7b6b" }}
                >
                  {item.company}
                </p>

                <p
                  className="text-sm mt-3 leading-relaxed"
                  style={{ color: "#7a6a5a" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: INFO PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 sticky top-24"
            style={{
              background: "#f0e6dc",
              borderRadius: "30px 10px 30px 10px",
            }}
          >
            <h3 className="text-lg font-semibold" style={{ color: "#5f5146" }}>
              Experience Overview
            </h3>

            <p
              className="text-sm mt-3 leading-relaxed"
              style={{ color: "#7a6a5a" }}
            >
              I am a passionate graphic designer with hands-on experience in
              branding, digital marketing design and visual storytelling.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <p style={{ color: "#7a6a5a" }}>✔ 3+ Years Experience</p>
              <p style={{ color: "#7a6a5a" }}>✔ 50+ Projects Completed</p>
              <p style={{ color: "#7a6a5a" }}>✔ Brand Identity Specialist</p>
            </div>

            <div
              className="mt-6 flex items-center gap-2 text-sm"
              style={{ color: "#7a6a5a" }}
            >
              <FaStar /> Trusted by global clients
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
