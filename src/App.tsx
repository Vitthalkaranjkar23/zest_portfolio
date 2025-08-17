import React from 'react';
import CursorFire from './components/CursorFire';
import DepartmentBox from './components/DepartmentBox';
import {
  AccountsIcon,
  AOGIcon,
  CampusIcon,
  ChampionshipIcon,
  CRNIcon,
  DesignIcon,
  DocumentationIcon,
  ESMIcon,
  EventsIcon,
  FinanceIcon,
  HospitalityIcon,
  InfrastructureIcon,
  LogisticsIcon,
  MediaIcon,
  RefreshmentsIcon,
  SafetyIcon,
  VFXIcon,
  WebAppIcon
} from './components/DepartmentIcons';

const departments = [
  {
    title: "Accounts",
    description: "Manages the event budget, processes reimbursements, and issues covering letters.",
    icon: <AccountsIcon />
  },
  {
    title: "AOG (Alumni Outreach Group)",
    description: "Builds alumni relations, keeps graduates connected, and drives financial donations.",
    icon: <AOGIcon />
  },
  {
    title: "Campus",
    description: "Transforms the college with theme-based setups and installations to create a vibrant atmosphere.",
    icon: <CampusIcon />
  },
  {
    title: "Championship",
    description: "Handles merchandise and prizes like T-shirts, goodies, medals, and trophies.",
    icon: <ChampionshipIcon />
  },
  {
    title: "CRN (Community Reach & Networking)",
    description: "Connects with colleges, clubs, and organizations to boost participation.",
    icon: <CRNIcon />
  },
  {
    title: "Design",
    description: "Crafts creative posters, jerseys, sponsor posts, and visuals for Zest's identity.",
    icon: <DesignIcon />
  },
  {
    title: "Documentation",
    description: "Secures permissions and verifies documents for smooth fest execution.",
    icon: <DocumentationIcon />
  },
  {
    title: "ESM (Electronic System Management)",
    description: "Manages sound, lighting, and technical systems throughout the event.",
    icon: <ESMIcon />
  },
  {
    title: "Events",
    description: "Plans, schedules, and coordinates all activities to ensure smooth execution.",
    icon: <EventsIcon />
  },
  {
    title: "Finance & Marketing",
    description: "Secures sponsorships, builds partnerships, and funds the event.",
    icon: <FinanceIcon />
  },
  {
    title: "Hospitality",
    description: "Manages participant accommodation and guest well-being during Zest.",
    icon: <HospitalityIcon />
  },
  {
    title: "Infrastructure",
    description: "Oversees venues, logistics, and on-ground arrangements for seamless operations.",
    icon: <InfrastructureIcon />
  },
  {
    title: "Logistics",
    description: "Procures and manages event materials and equipment.",
    icon: <LogisticsIcon />
  },
  {
    title: "Media",
    description: "Handles social media, media partnerships, and campaigns to amplify Zest's spirit.",
    icon: <MediaIcon />
  },
  {
    title: "Refreshments",
    description: "Provides water and snacks to participants, coaches, and guests.",
    icon: <RefreshmentsIcon />
  },
  {
    title: "Safety & Dispute",
    description: "Ensures safety, minimizes risks, and resolves disputes fairly.",
    icon: <SafetyIcon />
  },
  {
    title: "VFX",
    description: "Captures and edits moments with cinematic visuals, reels, and dynamic edits.",
    icon: <VFXIcon />
  },
  {
    title: "Web & App",
    description: "Designs and maintains Zest's website, app, registrations, and live updates.",
    icon: <WebAppIcon />
  }
];

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with overlay */}
      <div className="fixed inset-0 bg-black">
        {/* Static background image - uncomment and replace 'your-image.png' with your image */}
<img 
  src="/color.png" 
  alt="Background" 
  className="absolute object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-60 h-60"
/>


        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-orange-900/10" />
      </div>

      <CursorFire />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Header with Logo */}
<div className="flex flex-col items-center justify-center pt-20 pb-16">
  <div className="relative">
    {/* Your Logo */}
    <img 
      src="/es.png" 
      alt="Logo" 
      className="object-contain w-40 h-40 mb-6 md:w-48 md:h-48 lg:w-56 lg:h-56 drop-shadow-2xl"
    />
  </div>
  
</div>


        {/* Department Grid */}
        <div className="container px-4 pb-20 mx-auto">
          <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 max-w-7xl">
            {departments.map((department, index) => (
              <div
                key={index}
                className="transition-all duration-300 transform hover:scale-105 active:scale-95"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                <DepartmentBox
                  title={department.title}
                  description={department.description}
                  icon={department.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute w-64 h-64 rounded-full top-1/4 left-1/4 bg-orange-500/5 blur-3xl animate-pulse" />
        <div className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute w-32 h-32 rounded-full top-1/2 right-1/3 bg-orange-400/5 blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;