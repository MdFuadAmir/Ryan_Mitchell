// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Title from "../Utils/Title";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      text: "Amazing work! The branding design was clean, modern and exactly what our company needed.",
    },
    {
      name: "Michael Brown",
      role: "Startup Founder",
      text: "Very professional designer. Delivered high quality social media creatives that boosted our engagement.",
    },
    {
      name: "Emily Davis",
      role: "Business Owner",
      text: "Loved the logo design! It perfectly represents my brand identity and vision.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-[#f6efe7] dark:bg-[#181512]"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <Title
          title={"What Clients Say"}
          subtitle={
            "Feedback from happy clients I have worked with across different design projects."
          }
          head={"TESTIMONIALS"}
        />

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="
    p-6 relative shadow-md
    bg-[#f0e6dc]/70 dark:bg-[#2a221d]/80
    backdrop-blur-md
    border border-[#e3d8cc] dark:border-[#3a2f28]
    rounded-[50px_10px_50px_10px]
  "
            >
              {/* QUOTE ICON */}
              <FaQuoteLeft className="text-xl mb-4 text-[#8b7b6b] dark:text-[#c4b19d]" />

              {/* TEXT */}
              <p className="text-sm leading-relaxed text-[#7a6a5a] dark:text-[#c4b19d]">
                {item.text}
              </p>

              {/* STAR */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-[#d8c9b8] dark:text-[#b89e82]"
                    style={{ fontSize: "12px" }}
                  />
                ))}
              </div>

              {/* NAME */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-[#5f5146] dark:text-[#f2e7da]">
                  {item.name}
                </h4>
                <p className="text-xs text-[#8b7b6b] dark:text-[#b8a28d]">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
