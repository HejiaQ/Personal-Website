import React from 'react';
import codequiz from '../assets/CodeQuizIntro.png';
import influencerHome from '../assets/InfluencerHome.png';
import spendingJava from '../assets/SpendingJavaMain.png';

const projects = [
  {
    id: "p1",
    title: "Web Application Project: Code Comprehension Exercise Web App",
    category: "Development",
    tech: ["React", "Node.js", "Ollama", "Course Project"],
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem reiciendis recusandae expedita, atque incidunt provident porro sit. Quas minus adipisci vero corporis, quisquam eveniet optio aliquam omnis, reiciendis, totam magni.",
    link: "#",
    image: codequiz,
    status: "Completed"
  },
  {
    id: "p2",
    title: "Database Project: Analyzing Influencer Data with SQL",
    category: "Design",
    tech: ["Sqlplus", "HTML", "CSS", "Course Project"],
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem reiciendis recusandae expedita, atque incidunt provident porro sit. Quas minus adipisci vero corporis, quisquam eveniet optio aliquam omnis, reiciendis, totam magni.",
    link: "#",
    image: influencerHome,
    status: "In Progress"
  },
  {
    id: "p3",
    title: "Java Desktop Project: Spending Management App",
    category: "Logic",
    tech: ["Data Persistent", "Java", "JUnit", "Course Project"],
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem reiciendis recusandae expedita, atque incidunt provident porro sit. Quas minus adipisci vero corporis, quisquam eveniet optio aliquam omnis, reiciendis, totam magni.",
    link: "#",
    image: spendingJava,
    status: "Completed"
  }
];

export default function Projects() {
  return (
    <div className="py-4 space-y-12">
      {/* Page Header */}
      <header className="max-w-2xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
          Selected <span className="text-blue-600">Works</span>
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          A collection of projects developed through coursework and personal exploration.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-12 relative">
        {/* LEFT: STICKY MENU */}
        <aside className="hidden md:block w-48 shrink-0">
          <div className="sticky top-32 space-y-6">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Index</p>
            <nav className="flex flex-col gap-4">
              {projects.map((p, index) => (
                <a 
                  key={p.id} 
                  href={`#${p.id}`} 
                  className="group flex items-center gap-3 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors"
                >
                  <span className="text-slate-300 group-hover:text-orange-500 transition-colors">0{index + 1}</span>
                  {p.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* RIGHT: SCROLLABLE SECTIONS */}
        <div className="flex-grow space-y-32">
          {projects.map((project) => (
            <section 
              key={project.id} 
              id={project.id} 
              className="scroll-mt-32 border-t border-slate-100 pt-12 first:border-0 first:pt-0"
            >
              <div className="space-y-8">
                {/* Image */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-slate-50 rounded-[2rem] -z-10 group-hover:bg-blue-50 transition-colors" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[400px] object-cover rounded-2xl shadow-lg border border-slate-100"
                  />
                  <div className="absolute top-6 right-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${
                      project.status === 'In Progress' ? 'bg-orange-500 text-white' : 'bg-blue-900 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Text Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-1 space-y-4">
                    <div>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                        {project.category}
                      </span>
                      <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                        {project.title}
                      </h2>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[9px] font-bold bg-blue-600 text-white px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-slate-500 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    {/* <a 
                      href={project.link} 
                      className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-blue-600 hover:text-orange-500 transition-colors group"
                    >
                      Explore Project
                      <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                    </a> */}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}