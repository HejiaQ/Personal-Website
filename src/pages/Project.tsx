import React from 'react';

const Project = [
  {
    id: 1,
    title: "Placeholder 1",
    category: "Development",
    tech: ["React", "Tailwind", "Framer"],
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem reiciendis recusandae expedita, atque incidunt provident porro sit. Quas minus adipisci vero corporis, quisquam eveniet optio aliquam omnis, reiciendis, totam magni.",
    link: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    status: "Live"
  },
  {
    id: 2,
    title: "Placeholder 2",
    category: "Design",
    tech: ["TypeScript", "Three.js"],
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem reiciendis recusandae expedita, atque incidunt provident porro sit. Quas minus adipisci vero corporis, quisquam eveniet optio aliquam omnis, reiciendis, totam magni.",
    link: "#",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    status: "In Progress"
  },
  {
    id: 3,
    title: "Placeholder 3",
    category: "Logic",
    tech: ["Node.js", "D3.js"],
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem reiciendis recusandae expedita, atque incidunt provident porro sit. Quas minus adipisci vero corporis, quisquam eveniet optio aliquam omnis, reiciendis, totam magni.",
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800",
    status: "Live"
  }
];

export default function Projects() {
  return (
    <div className="space-y-12 py-4">
      {/* Page Header */}
      <header className="max-w-2xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Selected <span className="text-blue-600">Works</span>
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          A collection of projects where I've blended technical structure with creative problem solving.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Project.map((project) => (
          <div 
            key={project.id} 
            className="group flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-500"
          >
            {/* Project Image Container */}
            <div className="relative h-52 overflow-hidden bg-slate-100">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  project.status === 'Live' ? 'bg-orange-500 text-white' : 'bg-slate-900 text-white'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md border border-slate-100">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <div className="pt-4 mt-auto">
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-orange-500 transition-colors group/link"
                >
                  View Details
                  <span className="transform transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}