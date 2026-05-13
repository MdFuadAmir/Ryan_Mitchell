// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Logo = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      onClick={handleScrollTop}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-3 cursor-pointer group hover:scale-105 duration-300"
    >
      <span className="text-xl md:text-2xl font-bold tracking-tight text-[#5f5146] dark:text-[#ede9e5] transition-colors duration-300">
        Ryan{" "}
        <span className="text-[#a3978a] dark:text-[#d6c9bc] font-light">
          Mitchell
        </span>
      </span>
    </motion.div>
  );
};

export default Logo;
