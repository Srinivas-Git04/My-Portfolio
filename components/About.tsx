import {
  User,
  MapPin,
  GraduationCap,
  Briefcase,
  Heart,
  Languages,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            About Me
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Get to know me better.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-6">
              Hi, I'm Srinivas 👋
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              I'm a passionate <span className="text-cyan-400 font-semibold">AI & Machine Learning graduate </span>
              with a strong interest in building intelligent software,
              scalable web applications, and solving real-world problems
              through technology.
            </p>

            <p className="text-gray-300 leading-8 mb-6">
              I enjoy working with modern technologies like
              <span className="text-purple-400 font-semibold">
                {" "}Next.js, React, Supabase, Python,
              </span>
              {" "}and AI tools to create impactful applications.
            </p>

            <p className="text-gray-300 leading-8">
              My goal is to become a skilled Full-Stack AI Engineer and
              build innovative products that improve everyday life.
            </p>

          </div>

          {/* Right */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-8">
              Personal Details
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <User className="text-cyan-400" />
                <div>
                  <p className="text-gray-400 text-sm">Name</p>
                  <p>Srinivas Boddupalli</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-purple-400" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p>Hyderabad, Telangana, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <GraduationCap className="text-green-400" />
                <div>
                  <p className="text-gray-400 text-sm">Education</p>
                  <p>B.Tech in AI & ML</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Briefcase className="text-yellow-400" />
                <div>
                  <p className="text-gray-400 text-sm">Currently</p>
                  <p>Open to Full-Time Opportunities</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Languages className="text-pink-400" />
                <div>
                  <p className="text-gray-400 text-sm">Languages</p>
                  <p>English, Telugu, Hindi</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Heart className="text-red-400" />
                <div>
                  <p className="text-gray-400 text-sm">Interests</p>
                  <p>
                    AI • Full Stack • UI Design • Problem Solving • Learning New Technologies
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}