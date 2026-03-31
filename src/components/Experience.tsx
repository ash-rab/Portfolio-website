import { Calendar, Briefcase, Award, Star } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Senior Creative Developer",
      company: "Acme Web Studio",
      period: "2023 - Present",
      description: "Leading the development of award-winning WebGL and Next.js experiences. Increased site performance by 40% across top-tier client projects.",
    },
    {
      role: "Frontend Engineer",
      company: "TechNova Solutions",
      period: "2020 - 2023",
      description: "Architected modern design systems using React and TailwindCSS. Collaborated with design teams to bridge the gap between Figma and code.",
    },
    {
      role: "UI/UX Developer",
      company: "Creative Form",
      period: "2018 - 2020",
      description: "Spearheaded user research and interactive prototyping. Developed high-conversion landing pages resulting in a 25% bump in user retention.",
    }
  ];

  const achievements = [
    { title: "Site of the Day (SOTD)", source: "Awwwards", year: "2024" },
    { title: "FWA of the Day", source: "FWA", year: "2023" },
    { title: "Developer Award", source: "Awwwards", year: "2023" },
    { title: "Top 10 Portfolios", source: "CSS Design Awards", year: "2022" },
  ];

  return (
    <section className="bg-stone-950 py-32 px-8 md:px-24 text-white relative z-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Experience Timeline */}
        <div>
          <h3 className="text-4xl md:text-5xl font-black mb-16 tracking-tight flex items-center gap-4">
            <Briefcase className="text-indigo-400" size={36} />
            Experience
          </h3>
          <div className="space-y-12 border-l border-white/10 ml-4 pl-8 md:pl-12 relative">
            {experiences.map((exp, i) => (
              <div key={i} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[3.35rem] md:-left-[4.35rem] top-1.5 w-6 h-6 rounded-full bg-stone-950 border-2 border-indigo-400 group-hover:bg-indigo-400 transition-colors duration-300"></div>
                
                <div className="flex flex-col mb-2 md:flex-row md:items-center md:justify-between gap-2">
                  <h4 className="text-2xl font-bold tracking-tight text-white/95">{exp.role}</h4>
                  <span className="flex items-center gap-2 text-sm font-medium text-indigo-300 bg-indigo-900/30 px-3 py-1 rounded-full border border-indigo-500/20 w-fit">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>
                <h5 className="text-xl text-white/60 mb-4 font-medium">{exp.company}</h5>
                <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-4xl md:text-5xl font-black mb-16 tracking-tight flex items-center gap-4">
            <Award className="text-yellow-400" size={36} />
            Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((item, i) => (
              <div 
                key={i} 
                className="group relative rounded-2xl p-6 backdrop-blur-md border border-white/10 bg-white/5 hover:bg-white/10 transition duration-500 ease-out flex flex-col items-start gap-4"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none rounded-2xl mix-blend-screen"></div>
                <Star className="text-yellow-500/70 group-hover:text-yellow-400 transition-colors duration-300" size={28} />
                <div>
                  <h4 className="text-xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">{item.title}</h4>
                  <p className="text-white/50 text-sm mt-1">{item.source} <span className="mx-2">•</span> {item.year}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 rounded-3xl bg-indigo-950/20 border border-indigo-500/10 relative overflow-hidden group">
            <div className="absolute -inset-20 bg-indigo-500/10 blur-3xl rounded-full group-hover:bg-indigo-500/20 transition-all duration-700"></div>
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl font-light leading-snug text-white/80">
                &quot;Driven by a relentless pursuit of pixel perfection. I blend motion, logic, and design to build the unseen.&quot;
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
