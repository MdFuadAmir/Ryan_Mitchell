// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import img1 from "../../public/Images/p1.png";
import img2 from "../../public/Images/p2.png";
import img3 from "../../public/Images/p3.png";
import img4 from "../../public/Images/p6.png";
import img5 from "../../public/Images/p5.png";
import img6 from "../../public/Images/p4.png";

const Portfolio = () => {
  const projects = [
    {
      img: img1,
      title: "Brand Identity Design",
      category: "Logo & Branding",
      desc: "Complete brand system with logo, typography and visual identity direction.",
      tools: ["Photoshop", "Illustrator"],
    },
    {
      img: img2,
      title: "Social Media Campaign",
      category: "Marketing Design",
      desc: "Engaging creatives designed for high conversion and brand awareness.",
      tools: ["Figma", "Photoshop"],
    },
    {
      img: img3,
      title: "Modern Logo Concept",
      category: "Logo Design",
      desc: "Minimal logo concept built with strong brand psychology.",
      tools: ["Illustrator"],
    },
    {
      img: img4,
      title: "Product Packaging",
      category: "Packaging Design",
      desc: "Premium packaging focused on shelf impact and storytelling.",
      tools: ["Illustrator", "Photoshop"],
    },
    {
      img: img5,
      title: "Creative Poster Design",
      category: "Print Design",
      desc: "Eye-catching posters for promotions and campaigns.",
      tools: ["Photoshop"],
    },
    {
      img: img6,
      title: "Digital Ads Design",
      category: "Advertising",
      desc: "High-performance ad creatives for marketing campaigns.",
      tools: ["Figma", "Photoshop"],
    },
  ];

  return (
    <section
      id="portfolio"
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
            PORTFOLIO
          </p>

          <h2
            className="mt-3 font-bold text-[26px] sm:text-[36px] md:text-[44px]"
            style={{ color: "#5f5146" }}
          >
            My Creative Works
          </h2>

          <p
            className="mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "#7a6a5a" }}
          >
            Selected design projects focused on branding, storytelling and
            modern visual identity.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-12">
          {projects.map((item, index) => (
            <motion.div
              key={index}
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

              {/* IMAGE WRAPPER */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <p className="text-xs mb-1" style={{ color: "#7a6a5a" }}>
                  {item.category}
                </p>

                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#5f5146" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm mt-2 leading-relaxed"
                  style={{ color: "#7a6a5a" }}
                >
                  {item.desc}
                </p>

                {/* TOOLS */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: "#ffffff55",
                        color: "#5f5146",
                        backdropFilter: "blur(5px)",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
