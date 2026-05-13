// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaPenNib, FaPalette, FaBullhorn, FaCube } from "react-icons/fa";
import Title from "../Utils/Title";

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
      className="py-24 md:py-28 px-6 bg-[#f6efe7] dark:bg-[#181512]"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}

        <Title
          head={"SERVICES"}
          title={"What I Can Do For Your Brand"}
          subtitle={` I create modern, clean and impactful design solutions that help your
            brand stand out, connect with audience and grow visually in a
            competitive market.`}
        />

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="relative p-6 shadow-md cursor-pointer overflow-hidden"
              style={{
                background:
                  index % 2 === 0 ? "var(--card-even)" : "var(--card-odd)",
                borderRadius: "30px 10px 30px 10px",
              }}
            >
              {/* soft glow */}
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-3xl opacity-20 bg-white dark:bg-[#3a3128]" />

              {/* ICON */}
              <div className="text-xl mb-4 text-[#5f5146] dark:text-[#d2c0ad]">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-lg text-[#5f5146] dark:text-[#f2e7da]">
                {item.title}
              </h3>

              <p className="text-xs mb-1 opacity-70 text-[#7a6a5a] dark:text-[#b8a28d]">
                {item.subtitle}
              </p>

              {/* DESC */}
              <p className="text-sm mt-2 leading-relaxed text-[#7a6a5a] dark:text-[#c4b19d]">
                {item.desc}
              </p>

              {/* NUMBER */}
              <span className="absolute bottom-3 right-4 text-3xl font-bold opacity-10 text-[#5f5146] dark:text-[#f2e7da]">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        :root {
          --card-even: #f0e6dc;
          --card-odd: #e3d8cc;
        }

        .dark {
          --card-even: #24201c;
          --card-odd: #2a241f;
        }
      `}</style>
    </section>
  );
};

export default Services;
