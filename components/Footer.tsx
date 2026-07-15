export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10 py-6 text-center text-gray-400">
      <p>
        © {new Date().getFullYear()} Srinivas. Built with Next.js, Tailwind CSS & ❤️
      </p>
    </footer>
  );
}