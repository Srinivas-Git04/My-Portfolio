"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 flex items-center overflow-hidden px-6"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Srinivas Boddupalli
          </h1>

          <h2 className="mt-5 text-2xl lg:text-3xl font-semibold text-white">
            AI Engineer • Full-Stack Developer • Problem Solver
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-8 max-w-xl">
            Building intelligent software, scalable web applications,
            and AI-powered solutions that solve real-world problems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
            >
              🚀 View Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-xl border border-white hover:bg-white hover:text-black transition"
            >
              📄 Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition"
            >
              📬 Contact
            </a>
          </div>

          <div className="mt-8 flex gap-6 text-gray-400">
            <a
              href="https://github.com/Srinivas-Git04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/boddupallisrinivas2004"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="mailto:srinivas.boddupalli1101@gmail.com"
              className="hover:text-white"
            >
              Email
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

            {/* Left Side */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left"
            >
                {/* Move ALL your existing content here */}
            </motion.div>

            {/* Right Side */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center md:justify-end"
            >
                <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-40"></div>

                <Image
                    src="/profile/profile.jpg"
                    alt="Srinivas"
                    width={420}
                    height={520}
                    priority
                    className="relative rounded-3xl object-cover border-2 border-white/10 shadow-2xl"
                />
                </div>
            </motion.div>

</div>
      </div>
    </section>
  );
}