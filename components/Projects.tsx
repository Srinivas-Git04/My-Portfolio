import Image from "next/image";

const projects = [
  {
    
  title: "DSK DriveMate 🚗",
  image: "/projects/drivemate.png",

  description:
    "A full-stack driver booking platform that connects vehicle owners with professional drivers. Customers can book drivers, track ride status, and manage bookings through an intuitive dashboard.",

  features: [
    "Customer booking system",
    "Driver availability management",
    "Ride status tracking",
    "Automatic driver status updates",
    "Admin dashboard",
    "Responsive UI",
  ],

  tech: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Supabase",
    "Vercel"
  ],

  github: "", // Add your GitHub repo when available
  demo: "",   // Add your Vercel deployment URL when available
},

  {
    title: "Recipe Generation from Food Image 🍲",
    image: "/projects/recipe-ai.png",

    description:
      "A deep learning application that generates recipes from food images using AI models.",

    features: [
      "Computer vision",
      "Deep learning model",
      "Recipe generation",
    ],

    tech: [
      "Python",
      "Deep Learning",
      "Computer Vision"
    ],

    github: "",
    demo: "",
  },

  {
    title: "Memory Game 🧠",
    image: "/projects/memory-game.png",

    description:
      "An interactive memory card game with matching logic and score tracking.",

    features: [
      "Card flipping animation",
      "Match detection",
      "Score tracking",
    ],

    tech: [
      "React",
      "JavaScript",
      "CSS"
    ],

    github: "",
    demo: "",
  },

  {
    title: "HangMan Game 🎮",
    image: "/projects/hangman.png",

    description:
      "A Python-based word guessing game focused on programming logic.",

    features: [
      "Game logic",
      "User interaction",
      "Python fundamentals",
    ],

    tech: [
      "Python"
    ],

    github:
      "https://github.com/Srinivas-Git04/HangManGame",

    demo: "",
  },
];


export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-20 px-6"
    >

      <h2 className="text-4xl font-bold text-center mb-12">
        My Projects 🚀
      </h2>


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">


        {projects.map((project, index) => (

          <div
            key={index}
            className="
              p-6
              rounded-2xl
              bg-white/10
              backdrop-blur-lg
              border border-white/10
              hover:scale-105
              transition duration-300
            "
          >
            <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="w-full h-56 object-contain rounded-xl mb-5 bg-gray-900 p-2"
                />

            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>


            <p className="mt-4 text-gray-300">
              {project.description}
            </p>


            <h4 className="mt-5 font-semibold">
              Features:
            </h4>


            <ul className="mt-2 list-disc ml-5 text-gray-300">

              {project.features.map((feature, i) => (
                <li key={i}>
                  {feature}
                </li>
              ))}

            </ul>


            <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item, i) => (
                <span
                key={i}
                className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm border border-blue-500/30"
                >
                {item}
                </span>
            ))}
            </div>


            <div className="mt-6 flex gap-4">

                {project.demo && (
                    <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                    >
                    🚀 Live Demo
                    </a>
                )}

                {project.github && (
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
                    >
                    💻 GitHub
                    </a>
                )}

                </div>


          </div>

        ))}


      </div>


    </section>
  );
}