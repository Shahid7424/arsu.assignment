import React from 'react';
import { CheckSquare, Award, Users } from 'lucide-react';

const CompanyAchievement: React.FC = () => {
  const achievements = [
    {
      icon: CheckSquare,
      number: "150",
      suffix: "+",
      title: "Project Completed"
    },
    {
      icon: Award,
      number: "250",
      suffix: "+",
      title: "Satisfied Clients"
    },
    {
      icon: Users,
      number: "50",
      suffix: "+",
      title: "Expert Teams"
    }
  ];

  return (
   <div className="relative min-h-screen bg-slate-900 px-4 py-16">
  {/* Background text */}
  <div className="absolute inset-0 flex items-start justify-start pointer-events-none pt-8 pl-4 sm:pl-8">
   
    <div 
      className="text-[3rem] sm:text-[4rem] lg:text-[6rem] xl:text-[8rem] font-black text-transparent select-none tracking-[0.2em] leading-none"
      style={{
        WebkitTextStroke: '1px rgba(255, 255, 255, 0.08)',  
        color: "rgba(255,255,255,0.05)", 
      }}
    >
      FACT
      
    </div>
</div>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let&apos;s See Our Company<br />
              Achievement
            </h1>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Sed ut perspiciatis unde omnis iste natus error sit ways 
              voluptatem accusantium doloremque laudantium totam rem 
              aperiam eaque epsa quae abillo inventore
            </p>
          </div>
          
          {/* Play Button */}
          <div className="flex-shrink-0 ml-8">
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-0 h-0 border-l-[12px] border-l-slate-900 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1 group-hover:border-l-blue-600 transition-colors duration-300"></div>
            </button>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-slate-700/50 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-gray-300" strokeWidth={1.5} />
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {achievement.number}
                    <span className="text-blue-400">{achievement.suffix}</span>
                  </div>
                  
                  <h3 className="text-gray-300 text-lg font-medium">
                    {achievement.title}
                  </h3>
                </div>
              </div>
            );
          })} 
          
        </div>
      </div>
    </div>
  );
};

export default CompanyAchievement;