"use client";

import Link from "next/link";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Srinivas.dev
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          className="hidden md:block px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
        >
          Resume
        </a>

      </nav>
    </header>
  );
}