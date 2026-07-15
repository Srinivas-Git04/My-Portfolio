import {
  Code2,
  Database,
  Brain,
  Wrench,
  Server,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 size={30} className="text-cyan-400" />,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    icon: <Server size={30} className="text-green-400" />,
    skills: [
      "Node.js",
      "REST APIs",
      "Supabase",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain size={30} className="text-purple-400" />,
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "OpenCV",
      "TensorFlow",
    ],
  },
  {
    title: "Database",
    icon: <Database size={30} className="text-yellow-400" />,
    skills: [
      "MongoDB",
      "Supabase",
      "SQL",
    ],
  },
  {
    title: "Tools",
    icon: <Wrench size={30} className="text-pink-400" />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Postman",
      "Power BI",
      "Excel",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            My Skills
          </h2>

          <p className="mt-4 text-gray-400 text-lg">
            Technologies and tools I use to build intelligent
            and scalable applications.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:scale-105 transition duration-300"
            >

              <div className="flex items-center gap-4 mb-6">
                {category.icon}

                <h3 className="text-2xl font-bold">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}