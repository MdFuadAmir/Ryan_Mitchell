// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        toast.success("Message send Successfully");
        reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{
        background: "linear-gradient(135deg, #f6efe7, #e9eef2, #efe6dd)",
      }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <p
            className="tracking-widest text-xs sm:text-sm"
            style={{ color: "#7a6a5a" }}
          >
            CONTACT
          </p>

          <h2
            className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-tight"
            style={{ color: "#5f5146" }}
          >
            Let’s Build Something <br /> Creative Together
          </h2>

          <p
            className="text-sm sm:text-base leading-relaxed max-w-md"
            style={{ color: "#7a6a5a" }}
          >
            I help brands stand out with modern and creative design solutions.
            Let’s talk about your next project.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-[#e3d8cc]">
                <FaEnvelope style={{ color: "#5f5146" }} />
              </div>
              <span style={{ color: "#7a6a5a" }}>mdfuadamir@email.com</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-[#e3d8cc]">
                <FaUser style={{ color: "#5f5146" }} />
              </div>
              <span style={{ color: "#7a6a5a" }}>
                Available for freelance work
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-8 backdrop-blur-xl shadow-lg"
          style={{
            background: "rgba(240, 230, 220, 0.6)",
            borderRadius: "30px 10px 30px 10px",
          }}
        >
          {/* NAME */}
          <div className="relative mb-5">
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: true })}
              className="w-full p-3 rounded-lg outline-none text-sm bg-white/70 focus:scale-[1.02] transition"
            />
          </div>

          {/* EMAIL */}
          <div className="relative mb-5">
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: true })}
              className="w-full p-3 rounded-lg outline-none text-sm bg-white/70 focus:scale-[1.02] transition"
            />
          </div>

          {/* MESSAGE */}
          <div className="relative mb-5">
            <textarea
              rows="5"
              placeholder="Your Message"
              {...register("message", { required: true })}
              className="w-full p-3 rounded-lg outline-none text-sm bg-white/70 focus:scale-[1.02] transition"
            />
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full py-3 rounded-full flex items-center justify-center gap-2 text-sm"
            style={{
              background: "#d8c9b8",
              color: "#5f5146",
            }}
          >
            Send Message <FaPaperPlane />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
