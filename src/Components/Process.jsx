// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaSearch,
  FaLightbulb,
  FaPaintBrush,
  FaRocket,
  FaCube,
  FaPenNib,
} from "react-icons/fa";
import Title from "../Utils/Title";

const Process = () => {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Research & Discovery",
      desc: "I analyze your brand, competitors, target audience and market trends to build a strong foundation.",
    },
    {
      icon: <FaLightbulb />,
      title: "Strategy & Concept Planning",
      desc: "I create multiple creative directions and choose the best visual strategy for your brand growth.",
    },
    {
      icon: <FaPenNib />,
      title: "Sketch & Wireframe Ideas",
      desc: "Initial sketches and rough layout ideas are developed to define structure and visual flow.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Design Execution",
      desc: "Final high-quality design is created with modern aesthetics, typography and color balance.",
    },
    {
      icon: <FaCube />,
      title: "Brand Refinement",
      desc: "I refine every detail carefully to ensure consistency, clarity and strong visual identity.",
    },
    {
      icon: <FaRocket />,
      title: "Final Delivery & Launch",
      desc: "All optimized files are delivered with proper formats ready for web, print and social media use.",
    },
  ];

  return (
    <section
      id="process"
      className="py-24 md:py-28 px-6 relative bg-[#f6efe7] dark:bg-[#181512]"
    >
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <Title
          head={"WORK FLOW"}
          title={"My Creative Work Process"}
          subtitle={
            "A structured creative process that transforms ideas into impactful visual designs with clarity, strategy, and precision."
          }
        />

        {/* TIMELINE */}
        <div className="relative">
          {/* CENTER LINE */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-[#d8c9b8] dark:bg-[#3a3128]" />

          <div className="space-y-14">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                } flex-col`}
              >
                {/* ICON DOT */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-md bg-[#e3d8cc] dark:bg-[#2a241f]">
                  <span className="text-[#5f5146] dark:text-[#d2c0ad]">
                    {item.icon}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="sm:w-1/2 ml-14 sm:ml-0 sm:px-10">
                  <h3 className="text-lg font-semibold text-[#5f5146] dark:text-[#f2e7da]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#7a6a5a] dark:text-[#c4b19d]">
                    {item.desc}
                  </p>

                  <span className="text-xs mt-3 inline-block text-[#8b7b6b] dark:text-[#a88f78]">
                    Step 0{index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
