export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 py-10">
      
      {/* PHOTO: Scaled to w-72 (The perfect middle size) */}
      <div className="relative">
        {/* Fancy Geometric Background Decor */}
        <div className="absolute top-4 -left-4 w-full h-full bg-slate-100 rounded-2xl -z-10" />
        <div className="absolute -top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-orange-500 rounded-tr-xl" />
        <div className="absolute -bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-blue-600 rounded-bl-xl" />
        
        <img 
          src="/src/assets/my_photo.jpg" 
          alt="Profile" 
          className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl object-cover shadow-2xl relative z-10"
        />
      </div>

      {/* TEXT CONTENT: Bold and High-End */}
      <div className="max-w-xl text-center lg:text-left">
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">
              CS & STAT student @ UBC
            </p>
            <h1 className="text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Hejia (Lisa) Qiu</span><span className="text-orange-500">.</span>
            </h1>
          </div>
          
          <div className="h-1 w-20 bg-orange-500 rounded-full mx-auto lg:mx-0" />

          <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed font-medium max-w-md">
            I’m a computer science and statistics student who enjoys <span className="italic font-semibold text-blue-600">solving problems</span> through <span className="italic font-semibold text-blue-600">code, data</span> and <span className="italic font-semibold text-blue-600">analytical thinking</span>.
          </p>
          
          <p className="text-base text-slate-500 leading-relaxed max-w-sm mx-auto lg:mx-0">
            I’m drawn to problems that require structuring ambiguity, reasoning carefully about constraints, and turning ideas into workable solutions. 
            Through working experience, coursework and projects, I’ve developed a methodical, detail-oriented approach to technical problem solving. 
            This site is a space to share my projects, coursework, and interests, and to reflect on what I’m learning along the way.
   
          </p>
          
          {/* Subtle horizontal links instead of a button */}
          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            <span className="hover:text-blue-600 transition-colors cursor-default">Logic</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full" />
            <span className="hover:text-orange-500 transition-colors cursor-default">Data</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full" />
            <span className="hover:text-blue-600 transition-colors cursor-default">Code</span>
          </div>
        </div>
      </div>
    </div>
  );
}