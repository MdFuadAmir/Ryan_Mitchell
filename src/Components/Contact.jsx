// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";
import Title from "../Utils/Title";
import { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const defaultMessage = localStorage.getItem("contactMessage");
    if (defaultMessage) {
      setValue("message", defaultMessage);
      localStorage.removeItem("contactMessage");
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await axios.post("https://ryan-mitchell-server.vercel.app/send-email", data);

      toast("Message sent successfully!");
      reset();
    } catch {
      toast("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#f6efe7] dark:bg-[#181512]">
      <div className="max-w-6xl mx-auto">
        <Title
          head={"CONTACT"}
          title={"Let’s Build Something Creative Together"}
          subtitle={
            "Let’s discuss your ideas and transform them into meaningful visual experiences."
          }
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-14">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <p className="text-sm sm:text-base leading-relaxed max-w-md text-[#7a6a5a] dark:text-[#c4b19d]">
              I help brands stand out with modern and creative design solutions.
              Let’s talk about your next project.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-[#e3d8cc] dark:bg-[#312821]">
                  <FaEnvelope className="text-[#5f5146] dark:text-[#f2e7da]" />
                </div>
                <span className="text-[#7a6a5a] dark:text-[#c4b19d]">
                  mdfuadamir@email.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-[#e3d8cc] dark:bg-[#312821]">
                  <FaUser className="text-[#5f5146] dark:text-[#f2e7da]" />
                </div>
                <span className="text-[#7a6a5a] dark:text-[#c4b19d]">
                  Available for freelance work
                </span>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 backdrop-blur-xl shadow-lg bg-[#f0e6dc]/70 dark:bg-[#24201c]/80 border border-[#e3d8cc] dark:border-[#3a2f28] rounded-[30px_10px_30px_10px]"
          >
            <div className="relative mb-5">
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="w-full p-3 rounded-lg outline-none text-sm bg-white/70 dark:bg-[#312821] dark:text-[#f2e7da] focus:scale-[1.02] transition"
              />
            </div>

            <div className="relative mb-5">
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: true })}
                className="w-full p-3 rounded-lg outline-none text-sm bg-white/70 dark:bg-[#312821] dark:text-[#f2e7da] focus:scale-[1.02] transition"
              />
            </div>

            <div className="relative mb-5">
              <textarea
                rows="8"
                {...register("message", { required: true })}
                className="w-full p-3 rounded-lg outline-none text-sm bg-white/70 dark:bg-[#312821] dark:text-[#f2e7da] focus:scale-[1.02] transition"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full flex items-center justify-center gap-2 text-sm bg-[#d8c9b8] dark:bg-[#4a3d33] text-[#5f5146] dark:text-[#f2e7da]"
            >
              {loading ? "Sending..." : "Send Inquiry"} <FaPaperPlane />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
