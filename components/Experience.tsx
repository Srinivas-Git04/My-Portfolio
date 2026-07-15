import { GraduationCap, Briefcase, Rocket, Brain } from "lucide-react";

const timeline = [
  {
    year: "2022 – 2025",
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    company: "Gokaraju Rangaraju Institute of Engineering & Technology",
    description:
      "Built a strong foundation in Artificial Intelligence, Machine Learning, Python, Data Structures, and Software Development.",
    icon: <GraduationCap className="w-7 h-7 text-purple-400" />,
  },
  {
    year: "2025",
    title: "AI Projects",
    company: "Academic & Personal Projects",
    description:
      "Developed a Recipe Generation system using Deep Learning and Computer Vision.",
    icon: <Brain className="w-7 h-7 text-cyan-400" />,
  },
  {
    year: "2026",
    title: "Full Stack Development",
    company: "Personal Projects",
    description:
      "Built DSK DriveMate using Next.js, Supabase, Tailwind CSS, and Vercel.",
    icon: <Briefcase className="w-7 h-7 text-green-400" />,
  },
  {
    year: "Present",
    title: "Continuous Learning",
    company: "Currently Learning",
    description:
      "Improving skills in Full Stack Development, System Design, AI, Cloud Deployment, and scalable web applications.",
    icon: <Rocket className="w-7 h-7 text-yellow-400" />,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Experience & Education
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            My learning journey and development experience.
          </p>

        </div>

        <div className="relative border-l-2 border-purple-500 ml-5">

          {timeline.map((item, index) => (

            <div
              key={index}
              className="mb-14 ml-10 relative"
            >

              <div className="absolute -left-[58px] top-0 bg-black border-4 border-purple-500 rounded-full p-3">
                {item.icon}
              </div>

              <span className="text-sm text-cyan-400 font-semibold">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <h4 className="text-gray-300 mt-1">
                {item.company}
              </h4>

              <p className="text-gray-400 mt-3 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}