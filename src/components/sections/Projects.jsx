import { useEffect, useState } from "react";
import { db } from "../../../firebase/db";
import { RevealOnScroll } from "../RevealOnScroll";
import { collection, getDocs } from "firebase/firestore";
import { BackendProjects } from "./BackendProject";

export const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const querySnapshot = await getDocs(collection(db, "myapp"));
        const projectsData = [];
        querySnapshot.forEach((doc) => {
          projectsData.push(doc.data());
        });
        setData(projectsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <div className="text-white text-center">Loading projects...</div>;
  }

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.length > 0 && data.map((item, index) => (
              <div key={{index}} className="p-10 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(74,222,128,0.2)] transition">
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
        <BackendProjects />
      </RevealOnScroll>
      
    </section>
  );
};
// import { useEffect, useState } from "react";
// import { db } from "../../../firebase/db";
// import { RevealOnScroll } from "../RevealOnScroll";
// import { collection, getDocs, limit, query, startAfter, orderBy } from "firebase/firestore";

// export const Projects = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(4); // عدد العناصر في كل صفحة
//   const [lastVisible, setLastVisible] = useState(null);
//   const [totalItems, setTotalItems] = useState(0);

//   useEffect(() => {
//     async function getTotalCount() {
//       const snapshot = await getDocs(collection(db, "myapp"));
//       setTotalItems(snapshot.size);
//     }
//     getTotalCount();
//   }, []);

//   useEffect(() => {
//     async function getData() {
//       try {
//         setLoading(true);
//         let q;
//         if (currentPage === 1) {
//           q = query(collection(db, "myapp"), orderBy("Name"), limit(itemsPerPage));
//         } else {
//           q = query(
//             collection(db, "myapp"),
//             orderBy("Name"),
//             startAfter(lastVisible),
//             limit(itemsPerPage)
//           );
//         }

//         const querySnapshot = await getDocs(q);
//         const projectsData = [];
//         querySnapshot.forEach((doc) => {
//           projectsData.push(doc.data());
//         });

//         setData(projectsData);
//         setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     getData();
//   }, [currentPage, itemsPerPage, lastVisible]);

//   const nextPage = () => {
//     if (currentPage * itemsPerPage < totalItems) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   if (loading) {
//     return <div className="text-white text-center">Loading projects...</div>;
//   }

//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <RevealOnScroll>
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent text-center">
//             Featured Projects
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {data.length > 0 && data.map((item, index) => (
//               <div 
//                 key={index}
//                 className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(74,222,128,0.2)] transition"
//               >
//                 <h3 className="text-xl font-bold mb-2 text-white">
//                   {item.Name}
//                 </h3>
//                 <div className="flex justify-between items-center">
//                   <a
//                     href={item.link} 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-green-400 hover:text-green-300 transition-colors my-4"
//                   >
//                     <img
//                       src={item.imageurl}
//                       alt={item.Name}
//                       className="w-full h-auto rounded"
//                     />
//                     <br />
//                     View Project →
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Pagination Controls */}
//           <div className="flex justify-center mt-8 gap-4">
//             <button
//               onClick={prevPage}
//               disabled={currentPage === 1}
//               className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
//             >
//               Previous
//             </button>
//             <span className="px-4 py-2 text-white">
//               Page {currentPage} of {Math.ceil(totalItems / itemsPerPage)}
//             </span>
//             <button
//               onClick={nextPage}
//               disabled={currentPage * itemsPerPage >= totalItems}
//               className={`px-4 py-2 rounded ${currentPage * itemsPerPage >= totalItems ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };