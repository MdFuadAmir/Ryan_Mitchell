// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaPenNib, FaPalette, FaBullhorn, FaCube } from "react-icons/fa";

const Services = () => {

  const services = [
    {
      icon: <FaPenNib />,
      title: "Logo Design",
      subtitle: "Brand Identity Starter",
      desc: "I design unique, modern and memorable logos that define your brand personality and make your business stand out instantly.",
    },
    {
      icon: <FaPalette />,
      title: "Brand Identity",
      subtitle: "Visual System Design",
      desc: "Complete brand identity system including color palette, typography, style guide and visual consistency across all platforms.",
    },
    {
      icon: <FaBullhorn />,
      title: "Marketing Design",
      subtitle: "Growth & Engagement",
      desc: "High-impact social media posts, ad creatives and promotional designs that attract attention and increase engagement.",
    },
    {
      icon: <FaCube />,
      title: "Packaging Design",
      subtitle: "Product Presentation",
      desc: "Modern and clean packaging designs that enhance product value and create strong shelf presence.",
    },
  ];

  return (
    <section
      id="services"
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
            SERVICES
          </p>

          <h2
            className="mt-3 font-bold text-[26px] sm:text-[36px] md:text-[44px]"
            style={{ color: "#5f5146" }}
          >
            What I Can Do For Your Brand
          </h2>
          <p
            className="mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "#7a6a5a" }}
          >
            I create modern, clean and impactful design solutions that help your
            brand stand out, connect with audience and grow visually in a
            competitive market.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="relative p-6 shadow-md cursor-pointer overflow-hidden"
              style={{
                background: index % 2 === 0 ? "#f0e6dc" : "#e3d8cc",
                borderRadius: "30px 10px 30px 10px", // 🔥 custom shape (not normal rounded)
              }}
            >
              {/* soft glow background blob */}
              <div
                className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-3xl opacity-30"
                style={{ background: "#ffffff" }}
              />

              {/* ICON */}
              <div className="text-xl mb-4" style={{ color: "#5f5146" }}>
                {item.icon}
              </div>

              {/* TITLE */}
              <h3
                className="font-semibold text-lg"
                style={{ color: "#5f5146" }}
              >
                {item.title}
              </h3>
              <p
                className="text-xs mb-1 opacity-70"
                style={{ color: "#7a6a5a" }}
              >
                {item.subtitle}
              </p>

              {/* DESC */}
              <p
                className="text-sm mt-2 leading-relaxed"
                style={{ color: "#7a6a5a" }}
              >
                {item.desc}
              </p>

              {/* NUMBER */}
              <span
                className="absolute bottom-3 right-4 text-3xl font-bold opacity-10"
                style={{ color: "#5f5146" }}
              >
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
