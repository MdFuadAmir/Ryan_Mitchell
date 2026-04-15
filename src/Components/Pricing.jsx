// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$10",
      desc: "Perfect for simple design needs",
      features: [
        "1 Design Concept",
        "Basic Quality Design",
        "2 Revisions",
        "JPG/PNG Files",
      ],
    },
    {
      name: "Standard",
      price: "$20",
      desc: "Best for growing brands",
      popular: true,
      features: [
        "2 Design Concepts",
        "High Quality Design",
        "5 Revisions",
        "Source File Included",
        "Fast Delivery",
      ],
    },
    {
      name: "Premium",
      price: "$35",
      desc: "Complete professional solution",
      features: [
        "3+ Design Concepts",
        "Premium Quality",
        "Unlimited Revisions",
        "All File Formats",
        "Priority Support",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 px-6"
      style={{
        background: "linear-gradient(135deg, #f6efe7, #e9eef2, #efe6dd)",
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="tracking-widest text-xs sm:text-sm" style={{ color: "#7a6a5a" }}>
            PRICING
          </p>

          <h2
            className="mt-3 font-bold text-[26px] sm:text-[36px] md:text-[44px]"
            style={{ color: "#5f5146" }}
          >
            Simple Pricing Plans
          </h2>

          <p
            className="mt-4 text-sm sm:text-base max-w-xl mx-auto"
            style={{ color: "#7a6a5a" }}
          >
            Choose a plan that fits your design needs and budget.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: plan.popular ? 1.05 : 1.03 }}
              viewport={{ once: true }}
              className="p-6 relative shadow-md"
              style={{
                background: plan.popular ? "#e3d8cc" : "#f0e6dc",
                borderRadius: "30px 10px 30px 10px",
              }}
            >

              {/* POPULAR TAG */}
              {plan.popular && (
                <span
                  className="absolute -top-3 left-6 text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "#ffffffcc",
                    color: "#5f5146",
                  }}
                >
                  Most Popular
                </span>
              )}

              {/* TITLE */}
              <h3
                className="text-lg font-semibold"
                style={{ color: "#5f5146" }}
              >
                {plan.name}
              </h3>

              {/* PRICE */}
              <h2
                className="text-3xl font-bold mt-2"
                style={{ color: "#5f5146" }}
              >
                {plan.price}
              </h2>

              <p
                className="text-sm mt-2"
                style={{ color: "#7a6a5a" }}
              >
                {plan.desc}
              </p>

              {/* FEATURES */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "#7a6a5a" }}>
                    <FaCheck style={{ color: "#8b7b6b" }} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                className="mt-8 w-full py-2.5 rounded-full text-sm cursor-pointer"
                style={{
                  background: "#d8c9b8",
                  color: "#5f5146",
                }}
              >
                Choose Plan
              </button>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Pricing;