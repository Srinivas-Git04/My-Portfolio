"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-6">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center"
      >
        <p className="text-blue-400 text-lg mb-3">
          👋 Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Srinivas Boddupalli
        </h1>

        <h2 className="mt-5 text-2xl md:text-3xl font-semibold">
          AI Engineer • Full-Stack Developer • Problem Solver
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-8">
          Building intelligent software, scalable web applications,
          and AI-powered solutions that solve real-world problems.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

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
            📄 Download Resume
          </a>

        </div>

        <div className="mt-10 flex justify-center gap-6 text-gray-400">

          <a
            href="https://github.com/Srinivas-Git04"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/boddupallisrinivas2004"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:srinivas.boddupalli1101@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>

        </div>

      </motion.div>
    </section>
  );
}