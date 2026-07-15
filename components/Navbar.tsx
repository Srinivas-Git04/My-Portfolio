export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold text-white">
          Srinivas.dev
        </h1>


        <div className="flex gap-6 text-gray-300">

          <a href="/" className="hover:text-white">
            Home
          </a>

          <a href="#projects" className="hover:text-white">
            Projects
          </a>

          <a href="#skills" className="hover:text-white">
            Skills
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}