export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-6">
          Let's Connect
        </h2>

        <p className="text-gray-400 mb-10">
          I'm always interested in discussing new opportunities,
          collaborations, and innovative projects.
        </p>

        <div className="space-y-4">

          <p>
            📧 Email:
            <a
              href="mailto:your@email.com"
              className="text-blue-400 ml-2 hover:underline"
            >
              srinivas.boddupalli1101@gmail.com
            </a>
          </p>

          <p>
            💻 GitHub:
            <a
              href="https://github.com/Srinivas-Git04"
              target="_blank"
              className="text-blue-400 ml-2 hover:underline"
            >
              github.com/Srinivas-Git04
            </a>
          </p>

          <p>
            💼 LinkedIn:
            <a
              href="https://linkedin.com/in/boddupallisrinivas2004"
              target="_blank"
              className="text-blue-400 ml-2 hover:underline"
            >
              LinkedIn Profile
            </a>
          </p>

        </div>

      </div>
    </section>
  );
}