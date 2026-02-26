import React from 'react';

const courseData = [
   {
    code: "IT",
    name: "Google IT support Certificate (Online Certificate)",
    focus: "CS",
    takeaway: "Built a strong foundation in IT concepts through hands-on practice, applying troubleshooting, networking, and system administration skills in a virtual environment.",
    skills: ["Troubele Shooting", "Networking", "Command Line Tools"]
  },
  {
    code: "CPSC320",
    name: "Intermediate Algorithm Design and Analysis",
    focus: "CS",
    takeaway: "Developed techniques for solving complex problems by studying advanced algorithms and strategic problem-solving approaches.",
    skills: ["In Progress", "Greedy Algorithm", "Prune & Search", "time complexity analysis"]
  },
    {
    code: "CPSC310",
    name: "Introduction to Software Enigneering",
    focus: "CS",
    takeaway: "Developed an understanding of scalable software design through design patterns, API development, testing, and modern DevOps workflows.",
    skills: ["Agile", "DevOp", "Design Principles", "API"]
  },
  {
    code: "CPSC322",
    name: "Introduction to Artificial Intelligence",
    focus: "CS",
    takeaway: "Explored different problem domains and strategies for intelligent agents, including decision networks, constraint satisfaction, and advanced search algorithms.",
    skills: ["Decision Network", "A* Search", "Constrain Optimization", "Planning"]
  },
  {
    code: "CPSC317",
    name: "Introduction to Computer Networking",
    focus: "CS",
    takeaway: "Explored core networking protocols and performance through lectures and assignments simulating DNS, TCP retransmission, and routing.",
    skills: ["IP/TCP", "DNS", "VPN", "Routing Policy"]
  },
  {
    code: "CPSC221",
    name: "Data Structures & Algorithms",
    focus: "CS",
    takeaway: `
    Learned core data structures, their common operations, and time complexity analysis through C++ implementations
    `,
    skills: ["Time Complexity", "Sorting", "Heaps", "Trees/Graphs"]
  },
  {
    code: "CPSC213",
    name: "Computer System",
    focus: "CS",
    takeaway: "Gained insight into how programs execute at a low level by working with assembly, C programming, and gdb debugging.",
    skills: ["Operating System", "Thread", "Assembly Language"]
  },
  {
    code: "STAT305",
    name: "Introduction to Statistical Inference",
    focus: "STAT",
    takeaway: "Explored statistical reasoning and inference, including maximum likelihood estimation, sampling distributions, and Bayesian methods.",
    skills: ["Sampling Distribution", "Maximum-Likelihood", "Inference", "Baysian Inference"]
  },
  {
    code: "STAT306",
    name: "Finding Relationships in Data",
    focus: "STAT",
    takeaway:  `Studied the theory behind regression, including the sampling distribution of coefficients, model selection principles, and evaluation methods.`,
    skills: ["Linear Regression", "Poisson Regression", "LASSO", "AIC/BIC"]
  },
  {
    code: "DSCI100",
    name: "Introduction to Data Science",
    focus: "STAT",
    takeaway: "Learned core machine learning concepts such as classification, clustering, and model evaluation by applying algorithms to training and test datasets in Python.",
    skills: ["Python Scikit-learn", "Cross-Validation", "Exploratory Data Analysis"]
  }
];

export default function Course() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="max-w-2xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
          Academic <span className="text-blue-600">Course</span>
        </h1>
        <p className="text-slate-500 mt-4 leading-relaxed">
          Here are core courses in my learning journey, which builds strong 
          foundations for me to solve complex problems.
        </p>
      </header>
       {/* Top Credential Bar */}
      <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
        <p className="text-xs text-slate-400 font-medium text-center uppercase tracking-[0.2em]">
          Current Avg: <span className="text-slate-900"> 94% </span> • Dean's List • Focus: Software & Data
        </p>
      </div>

      {/* Course List */}
      <div className="grid gap-6 whitespace-pre-line leading-tight">
        {courseData.map((item) => (
          <div 
            key={item.code} 
            className="group relative bg-white border border-slate-100 p-6 rounded-2xl hover:border-blue-500/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              {/* Left Side: Identifiers */}
              <div className="flex items-center gap-4">
                <div className={`w-15 h-15 flex-shrink-0 flex items-center justify-center rounded-xl font-black text-xs ${
                  item.focus === 'CS' ? 'bg-slate-900 text-white' : 'bg-orange-500 text-white'
                }`}>
                  {item.code}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-500 italic">
                    {item.takeaway}
                  </p>
                </div>
              </div>

              {/* Right Side: Skills Tags */}
              <div className="flex flex-wrap gap-2 md:justify-end">
                {item.skills.map(skill => (
                  <span key={skill} className={`px-3 py-1 ${skill == "In Progress" ? "bg-orange-50 text-orange-700": "bg-blue-50 text-blue-700"}  text-[10px] font-bold uppercase tracking-wider rounded-md border border-blue-100`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Subtle progress indicator */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-orange-500 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
          </div>
        ))}
      </div>

     
    </div>
  );
}