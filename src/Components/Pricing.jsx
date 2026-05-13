// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import Title from "../Utils/Title";

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
        "Responsive Layout",
        "Basic Support",
        "3 Days Delivery",
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
        "Priority Email Support",
        "Commercial Use",
        "Custom Branding",
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
        "Brand Strategy",
        "Lifetime File Access",
        "Express Delivery",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 md:py-28 px-6 bg-[#f6efe7] dark:bg-[#181512]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Reusable Title */}
        <Title
          head={"PRICING"}
          title={"Simple Pricing Plans"}
          subtitle={
            "Choose a flexible pricing plan designed to match your creative goals, project scope, and business needs."
          }
        />

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: plan.popular ? 1.05 : 1.03 }}
              viewport={{ once: true }}
              className={`
                p-6 relative shadow-md rounded-[30px_10px_30px_10px]
                ${
                  plan.popular
                    ? "bg-[#e3d8cc] dark:bg-[#312821]"
                    : "bg-[#f0e6dc] dark:bg-[#24201c]"
                }
              `}
            >
              {/* POPULAR TAG */}
              {plan.popular && (
                <span className="absolute -top-3 left-6 text-xs px-3 py-1 rounded-full bg-[#ffffffcc] dark:bg-[#3b3128] text-[#5f5146] dark:text-[#f2e7da]">
                  Most Popular
                </span>
              )}

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-[#5f5146] dark:text-[#f2e7da]">
                {plan.name}
              </h3>

              {/* PRICE */}
              <h2 className="text-3xl font-bold mt-2 text-[#5f5146] dark:text-[#f2e7da]">
                {plan.price}
              </h2>

              <p className="text-sm mt-2 text-[#7a6a5a] dark:text-[#c4b19d]">
                {plan.desc}
              </p>

              {/* FEATURES */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-[#7a6a5a] dark:text-[#c4b19d]"
                  >
                    <FaCheck className="text-[#8b7b6b] dark:text-[#d2c0ad]" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                onClick={() => {
                  const textarea = document.querySelector(
                    'textarea[name="message"]',
                  );

                  if (textarea) {
                    const message = `
I want to choose the ${plan.name} plan.

Price: ${plan.price}

Included Features:
${plan.features.map((f) => `- ${f}`).join("\n")}

Please let me know how we can proceed.
      `.trim();
                    textarea.value = message;
                    textarea.dispatchEvent(
                      new Event("input", { bubbles: true }),
                    );
                  }
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-8 w-full py-2.5 rounded-full text-sm cursor-pointer bg-[#d8c9b8] dark:bg-[#4a3d33] text-[#5f5146] dark:text-[#f2e7da] hover:scale-105 transition"
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
