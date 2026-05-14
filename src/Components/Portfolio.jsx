// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import projects from "../Data/Projects.js";
import Title from "../Utils/Title";
import { Link } from "react-router";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-24 md:py-28 px-6 bg-[#f6efe7] dark:bg-[#181512]"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="tracking-widest text-xs sm:text-sm text-[#7a6a5a] dark:text-[#b8a28d]">
            PORTFOLIO
          </p>

          <h2 className="mt-3 font-bold text-[26px] sm:text-[36px] md:text-[44px] text-[#5f5146] dark:text-[#f2e7da]">
            My Creative Works
          </h2>

          <p className="mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed text-[#7a6a5a] dark:text-[#c4b19d]">
            Selected design projects focused on branding, storytelling and
            modern visual identity.
          </p>
        </div>
        <Title />

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projects.map((item, index) => (
            <Link to={`/project-details/${item.id}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden shadow-md cursor-pointer"
                style={{
                  background: index % 2 === 0 ? "#f0e6dc" : "#e3d8cc",
                  borderRadius: "50px 10px 50px 10px",
                }}
              >
                {/* IMAGE */}
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition duration-300"
                  />
                </div>

                {/* CONTENT */}
                <div
                  className={`p-5 ${
                    index % 2 === 0 ? "dark:bg-[#24201c]" : "dark:bg-[#2a241f]"
                  }`}
                >
                  <p className="text-xs mb-1 text-[#7a6a5a] dark:text-[#b8a28d]">
                    {item.category}
                  </p>

                  <h3 className="text-lg font-semibold text-[#5f5146] dark:text-[#f2e7da]">
                    {item.title}
                  </h3>

                  <p className="text-sm mt-2 leading-relaxed text-[#7a6a5a] dark:text-[#c4b19d]">
                    {item.desc}
                  </p>

                  {/* TOOLS */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-[#ffffff55] text-[#5f5146] dark:bg-[#3a3128] dark:text-[#d2c0ad]"
                        style={{
                          backdropFilter: "blur(5px)",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
