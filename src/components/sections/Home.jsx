import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <br />
            <br />
            <br />
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
  Hi, I&apos;m Marwan Eldaw
</h1>
            <p className="text-gray-100 text-lg">Web Developer</p>
          </div>

          <ul className="space-y-4 max-w-2xl mx-auto text-left mb-8">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <p className="text-white">
                Next.js specialist with expertise in SSR, SSG, ISR and efficient
                data fetching
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <p className="text-white">
                Build high-performance client-side applications with React
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <p className="text-white">
                State management using Redux, Context API, and React Query
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <p className="text-white">
                Strong JavaScript, HTML, CSS fundamentals with modern tooling
                (Git, Webpack)
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <p className="text-white">
                CSS frameworks: Bootstrap, TailwindCSS, and CSS-in-JS solutions
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <p className="text-white">
                Firebase integration (Authentication, Firestore, Storage)
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <p className="text-white">
                Currently expanding backend skills with C#.NET
              </p>
            </li>
          </ul>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="#projects"
              className="bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(74, 222, 128, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(74, 222, 128, 0.2)] hover:bg-green-500/10"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
            {/* Social Media Links */}
            <div className="mt-12 text-center">
            <div className="flex justify-center space-x-6">
              <a
                href="https://wa.me/01114278841"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 transition"
                aria-label="WhatsApp"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://github.com/Eldawit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition"
                aria-label="GitHub"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/Marwan-Tarek/pfbid027M3FuXRHZ3aSiVXrLckGQc9RyW2hYGnJ4TaETBQNAji4AGy98ZVSH9wV3ZKaCTB5l/?rdid=vxWtmzKgtxFRrAEc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18Zh4PwPka%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition"
                aria-label="Facebook"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/marwan-tarek-321b69325/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition"
                aria-label="LinkedIn"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
