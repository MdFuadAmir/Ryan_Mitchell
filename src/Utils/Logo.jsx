import { Link } from "react-scroll";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const Logo = () => {
  return (
    <Link
      to="home"
      smooth={true}
      duration={500}
      className="flex items-center gap-2 text-2xl font-semibold text-gray-700 tracking-wide cursor-pointer hover:scale-105 duration-500"
    >

      <p className="text-[#6b5b4d] font-bold text-xl tracking-wide">
        Ryan <span style={{ color: "#a38f7a" }}>Mitchell</span>
      </p>
    </Link>
  );
};

export default Logo;
