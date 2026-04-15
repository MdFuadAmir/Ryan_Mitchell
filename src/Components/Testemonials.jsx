// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

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
      className="py-24 px-6"
      style={{
        background: "linear-gradient(135deg, #f6efe7, #e9eef2, #efe6dd)",
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="tracking-widest text-xs sm:text-sm" style={{ color: "#7a6a5a" }}>
            TESTIMONIALS
          </p>

          <h2
            className="mt-3 font-bold text-[26px] sm:text-[36px] md:text-[44px]"
            style={{ color: "#5f5146" }}
          >
            What Clients Say
          </h2>

          <p className="mt-4 text-sm sm:text-base max-w-xl mx-auto" style={{ color: "#7a6a5a" }}>
            Feedback from happy clients I have worked with across different design projects.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="p-6 relative shadow-md"
              style={{
                background: "rgba(240, 230, 220, 0.7)",
                backdropFilter: "blur(10px)",
                borderRadius: "30px 10px 30px 10px",
              }}
            >

              {/* QUOTE ICON */}
              <FaQuoteLeft
                className="text-xl mb-4"
                style={{ color: "#8b7b6b" }}
              />

              {/* TEXT */}
              <p className="text-sm leading-relaxed" style={{ color: "#7a6a5a" }}>
                {item.text}
              </p>

              {/* STAR */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} style={{ color: "#d8c9b8", fontSize: "12px" }} />
                ))}
              </div>

              {/* NAME */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold" style={{ color: "#5f5146" }}>
                  {item.name}
                </h4>
                <p className="text-xs" style={{ color: "#8b7b6b" }}>
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