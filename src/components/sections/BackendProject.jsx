import { useEffect, useState } from "react";
import { db } from "../../../firebase/db";
import { RevealOnScroll } from "../RevealOnScroll";
import { collection, getDocs } from "firebase/firestore";

export const BackendProjects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasValidData, setHasValidData] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const querySnapshot = await getDocs(collection(db, "backend"));      
        const projectsData = [];
        
        querySnapshot.forEach((doc) => {
          const projectData = doc.data();
          if (projectData.Name && projectData.imageurl && projectData.link) {
            projectsData.push(projectData);
          }
        });

        setData(projectsData);
        setHasValidData(projectsData.length > 0);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setHasValidData(false);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <div className="text-white text-center">Loading backend projects...</div>;
  }

  if (!hasValidData) {
    return null; // لا تعرض أي شيء إذا لم توجد بيانات صالحة
  }

  return (
    <section
      id="backend-projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent text-center">
            Backend Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.map((item, index) => (
              <div key={index} className="p-10 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(74,222,128,0.2)] transition">
                <h3 className="text-xl font-bold mb-2 text-white">{item.Name}</h3>
                <div className="flex flex-col">
                  <div className="relative pt-[56.25%] rounded overflow-hidden mb-4">
                    <img
                      src={item.imageurl}
                      alt={item.Name}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};