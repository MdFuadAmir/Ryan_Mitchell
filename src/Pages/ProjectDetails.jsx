// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useParams, Link } from "react-router";
import projects from "../../public/Data/Projects";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#7a6a5a] dark:text-[#c4b19d]">
        No project found
      </div>
    );
  }

  return (
    <section className="py-24 md:py-28 px-6 bg-[#f6efe7] dark:bg-[#181512] transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* IMAGE */}
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          src={project.img}
          alt={project.title}
          className="w-full h-105 object-cover rounded-[30px_10px_30px_10px] shadow-lg"
        />

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <p className="text-sm tracking-widest text-[#7a6a5a] dark:text-[#b8a28d]">
            {project.category}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-[#5f5146] dark:text-[#f2e7da]">
            {project.title}
          </h1>

          <p className="text-[#7a6a5a] dark:text-[#c4b19d] leading-relaxed">
            {project.desc}
          </p>
        </motion.div>

        {/* INFO GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-[20px_10px_20px_10px] bg-[#f0e6dc] dark:bg-[#24201c]">
            <h3 className="text-[#5f5146] dark:text-[#f2e7da] font-semibold mb-2">
              Project Details
            </h3>

            <p className="text-sm text-[#7a6a5a] dark:text-[#c4b19d]">
              <b>Client:</b> {project.client}
            </p>
            <p className="text-sm text-[#7a6a5a] dark:text-[#c4b19d]">
              <b>Year:</b> {project.year}
            </p>
            <p className="text-sm text-[#7a6a5a] dark:text-[#c4b19d]">
              <b>Duration:</b> {project.duration}
            </p>
            <p className="text-sm text-[#7a6a5a] dark:text-[#c4b19d]">
              <b>Role:</b> {project.role}
            </p>
          </div>

          <div className="p-5 rounded-[20px_10px_20px_10px] bg-[#e3d8cc] dark:bg-[#2a241f]">
            <h3 className="text-[#5f5146] dark:text-[#f2e7da] font-semibold mb-2">
              Tools Used
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-white/60 dark:bg-[#3a3128] text-[#5f5146] dark:text-[#d2c0ad]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* LONG DESCRIPTION */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[#5f5146] dark:text-[#f2e7da]">
            Overview
          </h2>
          <p className="text-sm leading-relaxed text-[#7a6a5a] dark:text-[#c4b19d]">
            {project.longDesc}
          </p>
        </div>

        {/* CASE STUDY */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-[#f0e6dc] dark:bg-[#24201c] rounded-xl">
            <h3 className="font-semibold text-[#5f5146] dark:text-[#f2e7da]">
              Challenge
            </h3>
            <p className="text-sm text-[#7a6a5a] dark:text-[#c4b19d] mt-2">
              {project.challenge}
            </p>
          </div>

          <div className="p-4 bg-[#e3d8cc] dark:bg-[#2a241f] rounded-xl">
            <h3 className="font-semibold text-[#5f5146] dark:text-[#f2e7da]">
              Solution
            </h3>
            <p className="text-sm text-[#7a6a5a] dark:text-[#c4b19d] mt-2">
              {project.solution}
            </p>
          </div>

          <div className="p-4 bg-[#f0e6dc] dark:bg-[#24201c] rounded-xl">
            <h3 className="font-semibold text-[#5f5146] dark:text-[#f2e7da]">
              Result
            </h3>
            <p className="text-sm text-[#7a6a5a] dark:text-[#c4b19d] mt-2">
              {project.result}
            </p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            className="px-5 py-2 rounded-full bg-[#d8c9b8] dark:bg-[#3a3128] text-[#5f5146] dark:text-[#f2e7da] text-sm flex items-center gap-2"
          >
            Live Preview <FaExternalLinkAlt />
          </a>

          <Link
            to={-1}
            className="px-5 py-2 rounded-full border border-[#d8c9b8] dark:border-[#3a3128] text-sm text-[#5f5146] dark:text-[#f2e7da]"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
