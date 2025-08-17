import React from 'react';

interface DepartmentBoxProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const DepartmentBox: React.FC<DepartmentBoxProps> = ({ title, description, icon }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-black/30 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/60 active:border-orange-500/80 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-orange-500/20 touch-manipulation">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-4 md:p-6 h-full flex flex-col min-h-[160px] md:min-h-[180px]">
        <div className="mb-3 md:mb-4 text-orange-500 group-hover:text-orange-400 transition-colors duration-300 transform group-hover:scale-110 flex-shrink-0 flex justify-center">
          {icon}
        </div>
        
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-orange-100 transition-colors duration-300 leading-tight text-center">
          {title}
        </h3>
        
        <p className="text-gray-300 text-xs md:text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 flex-grow text-center">
          {description}
        </p>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </div>
  );
};

export default DepartmentBox;