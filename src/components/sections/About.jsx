import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Next",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Firebase"
  ];

  const backendSkills = ["C#", ".Net", "Sql", "Entity FrameWork"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/20 border hover:-translate-y-1 transition-all hover:shadow-[0_4px_20px_rgba(74,222,128,0.1)]">
            <p className="text-white mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all hover:shadow-[0_4px_15px_rgba(74,222,128,0.1)]">
                <h3 className="text-xl font-bold mb-4 text-white"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-400 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                    hover:shadow-[0_2px_8px_rgba(74,222,128,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all hover:shadow-[0_4px_15px_rgba(74,222,128,0.1)]">
                <h3 className="text-xl font-bold mb-4 text-white"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-400 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                    hover:shadow-[0_2px_8px_rgba(74,222,128,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all hover:shadow-[0_4px_20px_rgba(74,222,128,0.1)]">
              <h3 className="text-xl font-bold mb-4 text-white"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-white space-y-2">
                <li>
                  <strong>Student at faculty of commerce tanta universty</strong>  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};