import React from 'react';

const hobbies = [
  {
    id: 1,
    title: "Drawing",
    description: `
    I enjoy many forms of drawing, involving water color, oil painting, digital painting, etc.
    It is very relaxing to create arts and see where my imagination would lead me to. 
    
    `,
    tag: "Visuals",
    color: "blue"
  },
  {
    id: 2,
    title: "Language Learning",
    description: "Learning ",
    tag: "Language",
    color: "orange"
  },
  {
    id: 3,
    title: "Random Walk",
    description: "I don't mean the random walk in stochastic process, which is an interesting topic in Markov chain btw. I mean I like walking around in the city and nature. It's like watching a movie but with myself inside of it.",
    tag: "Sport - yeah I think that's a sport",
    color: "blue"
  },
  {
    id: 4,
    title: "Some Fun Facts",
    description: "My name means a plant is growing well. <br> I like otters and cats. ",
    tag: "I cannot classify this",
    color: "orange"
  }
];

export default function Hobby() {
  return (
    <div className="space-y-12 py-4">
      {/* Page Header */}
      <header className="max-w-2xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Fun Facts & <span className="text-blue-600">Hobbies</span>
        </h1>
        <p className="text-slate-500 mt-4 leading-relaxed">
          A few things I enjoy besides my major
        </p>
      </header>

      {/* Staggered Content Area */}
      <div className="columns-1 md:columns-2 gap-8 space-y-8">
        {hobbies.map((hobby) => (
          <div 
            key={hobby.id} 
            className="break-inside-avoid bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex justify-between items-start mb-6">
              {/* Simple Icon-style Placeholder */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                hobby.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
              }`}>
                <div className={`w-6 h-6 rounded-full border-2 border-current opacity-40 group-hover:scale-125 transition-transform duration-500`} />
              </div>
              
              <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                hobby.color === 'blue' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'
              }`}>
                {hobby.tag}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">{hobby.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              {hobby.description}
            </p>

            {/* Subtle Orange/Blue accent line at the bottom of the card */}
            <div className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full ${
              hobby.color === 'blue' ? 'bg-blue-600' : 'bg-orange-500'
            }`} />
          </div>
        ))}
      </div>
    </div>
  );
}