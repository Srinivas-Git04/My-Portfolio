"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
<section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-6">
      
      <div className="absolute inset-0">

        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-[120px] opacity-30"></div>

        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-30"></div>

        </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >

        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Hi, I'm Srinivas Boddupalli 👋
        </h1>

        <h2 className="mt-5 text-2xl text-blue-400">
          AI & ML Engineer | Python Developer
        </h2>

        <p className="mt-6 max-w-2xl text-gray-300">
          I build AI applications, web platforms,
          and explore technology, data, and innovation.
        </p>

        <div className="mt-8 flex justify-center gap-5">

          <button className="px-6 py-3 bg-blue-600 rounded-xl">
            View Projects
          </button>

          <button className="px-6 py-3 border rounded-xl">
            Resume
          </button>

        </div>

      </motion.div>

    </section>
  );
}