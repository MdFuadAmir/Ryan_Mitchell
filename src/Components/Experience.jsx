// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaBriefcase, FaStar } from "react-icons/fa";
import Title from "../Utils/Title";

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
      className="py-24 px-6 bg-[#f6efe7] dark:bg-[#181512]"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <Title
          head={"EXPERIENCE"}
          title={"My Creative Journey"}
          subtitle={`Over the years, I have worked on branding, logo design, and marketing visuals, helping brands build strong and consistent visual identities.`}
        />

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
                className={`
    p-6 shadow-md relative
    rounded-[30px_10px_30px_10px]
    ${
      index % 2 === 0
        ? "bg-[#f0e6dc] dark:bg-[#2a241f]"
        : "bg-[#e3d8cc] dark:bg-[#312a24]"
    }
  `}
              >
                {/* icon */}
                <div className="absolute -top-4 left-6 w-10 h-10 flex items-center justify-center rounded-full shadow bg-[#ffffffaa] dark:bg-[#3a3128]">
                  <FaBriefcase className="text-[#5f5146] dark:text-[#d2c0ad]" />
                </div>

                {/* year */}
                <span className="absolute top-4 right-5 text-xs px-3 py-1 rounded-full bg-[#ffffff80] dark:bg-[#2a241f] text-[#7a6a5a] dark:text-[#c4b19d]">
                  {item.year}
                </span>

                <h3 className="text-lg font-semibold mt-4 text-[#5f5146] dark:text-[#f2e7da]">
                  {item.role}
                </h3>

                <p className="text-sm font-medium mt-1 text-[#8b7b6b] dark:text-[#b8a28d]">
                  {item.company}
                </p>

                <p className="text-sm mt-3 leading-relaxed text-[#7a6a5a] dark:text-[#c4b19d]">
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
            className="p-6 sticky top-24 bg-[#f0e6dc] dark:bg-[#24201c]"
            style={{
              borderRadius: "30px 10px 30px 10px",
            }}
          >
            <h3 className="text-lg font-semibold text-[#5f5146] dark:text-[#f2e7da]">
              Experience Overview
            </h3>

            <p className="text-sm mt-3 leading-relaxed text-[#7a6a5a] dark:text-[#c4b19d]">
              I am a passionate graphic designer with hands-on experience in
              branding, digital marketing design and visual storytelling.
            </p>

            <div className="mt-6 space-y-3 text-sm text-[#7a6a5a] dark:text-[#c4b19d]">
              <p>✔ 3+ Years Experience</p>
              <p>✔ 50+ Projects Completed</p>
              <p>✔ Brand Identity Specialist</p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-[#7a6a5a] dark:text-[#d2c0ad]">
              <FaStar /> Trusted by global clients
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
