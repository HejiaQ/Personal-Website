import { Link, Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 [scrollbar-gutter:stable]">
      
      {/* HEADER */}
      <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
        <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="w-32 flex-shrink-0">
            <Link to="/" className="font-bold text-xl tracking-tighter group inline-block">
              HEJIA<span className="text-orange-500 group-hover:text-blue-400 transition-colors">.</span>
            </Link>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <Link to="/projects" className="text-slate-300 hover:text-blue-400 transition-colors">Projects</Link>
            <Link to="/courses" className="text-slate-300 hover:text-blue-400 transition-colors">Courses</Link>
            <Link to="/hobbies" className="text-slate-300 hover:text-blue-400 transition-colors">Hobbies</Link>
          </div>

          <div className="w-32 flex justify-end flex-shrink-0">
            <a 
              href="mailto:hqiu09@student.ubc.ca" 
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md active:scale-95"
            >
              Email Me
            </a>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-12">
        <Outlet />
      </main>

      {/* SLIM-PRO FOOTER */}
      <footer className="bg-slate-900 text-white py-6 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* Left side: Bio (now even more compact) */}
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-orange-500 rounded-full" />
              <div>
                <p className="text-sm font-bold tracking-tight">What I believe...</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">"Curiosity saves the cat."</p>
              </div>
            </div>

            {/* Right side: Tight 2x2 Contact Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-blue-400 font-black uppercase">Email:</span>
                <a href="hqiu09@student.ubc.ca" className="text-[11px] font-medium hover:text-orange-400 transition-colors">hqiu09@student.ubc.ca</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-slate-500 font-black uppercase">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/hejia-qiu-12b839253/" className="text-[11px] font-medium hover:text-blue-400 transition-colors">Click here</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-blue-400 font-black uppercase">Phone:</span>
                <p className="text-[11px] font-medium">+1.236.978.5176</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-slate-500 font-black uppercase">GitHub:</span>
                <a href="https://github.com/HejiaQ" className="text-[11px] font-medium hover:text-blue-400 transition-colors">Click here</a>
              </div>
            </div>
          </div>

          {/* Ultra-slim bottom bar */}
          <div className="mt-6 pt-4 border-t border-slate-800/50 flex justify-between items-center text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em]">
            {/* <p>© {new Date().getFullYear()} MIA</p> */}
            <p className="hidden sm:block">Built with React + Tailwind</p>
          </div>
        </div>
      </footer>
    </div>
  );
}