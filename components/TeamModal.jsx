"use client"
import React, { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Linkedin, Twitter, Github, ChevronRight, Cpu, Search, User } from "lucide-react"
import GsapModalWrapper from "./GsapModalWrapper"

const TeamModalContent = ({ handleClose }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")

  // --- 1. CONFIGURATION: Add new members here ---
  // The layout will automatically handle as many members as you add.
  const team = [
    {
      id: "sarah",
      name: "Sarah Chen",
      post: "Founder & Chief Architect",
      responsibility: "Leading the vision for Cognitive Automation and overseeing core neural architecture design.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      gradient: "from-purple-500 to-indigo-500",
      stats: { exp: "12y", projects: "85+" }
    },
    {
      id: "david",
      name: "David Miller",
      post: "Head of AI Research",
      responsibility: "Spearheading LLM fine-tuning methodologies and ensuring ethical AI compliance protocols.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      gradient: "from-blue-500 to-cyan-500",
      stats: { exp: "9y", projects: "60+" }
    },
    {
      id: "elena",
      name: "Elena Rodriguez",
      post: "Lead Data Scientist",
      responsibility: "Transforming raw unstructured data into high-precision predictive models for enterprise clients.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      gradient: "from-emerald-500 to-teal-500",
      stats: { exp: "7y", projects: "45+" }
    },
    {
      id: "james",
      name: "James Kim",
      post: "VP of Engineering",
      responsibility: "Architecting scalable cloud infrastructure to support real-time, low-latency AI agent deployment.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      gradient: "from-orange-500 to-red-500",
      stats: { exp: "10y", projects: "90+" }
    },
    // Example of adding a new member:
    
    // {
    //   id: "new-member",
    //   name: "Alex Rivera",
    //   post: "Security Lead",
    //   responsibility: "Ensuring zero-trust security architecture across all AI deployments.",
    //   image: "URL_HERE",
    //   gradient: "from-pink-500 to-rose-500",
    //   stats: { exp: "5y", projects: "30+" }
    // },
    
  ]

  // --- 2. LOGIC: Filter functionality ---
  const filteredTeam = useMemo(() => {
    return team.filter((member) => 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.post.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])
  const activeMember = filteredTeam[activeIndex] || filteredTeam[0]

  return (
    <div className="relative w-full h-[85vh] md:h-[700px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-white/20 dark:border-slate-700 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
      
      {/* --- Top Bar --- */}
      <div className="flex items-center justify-between px-6 py-4 md:px-8 md:py-6 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 shrink-0">
        <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                Our <span className="text-blue-500">Team</span>
            </h2>
        </div>
        <button
          onClick={handleClose}
          className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-500 transition-colors text-slate-500"
        >
          <X size={20} />
        </button>
      </div>

      {/* --- Main Content Area --- */}
      <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
        
        {/* LEFT: Searchable, Scrollable List */}
        <div className="w-full md:w-1/3 bg-slate-50/50 dark:bg-slate-800/20 border-r border-slate-200 dark:border-slate-800 flex flex-col h-full">
            
            {/* Search Input */}
            <div className="p-4 border-b border-slate-200/50 dark:border-slate-700/50">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                        type="text" 
                        placeholder="Search agent..." 
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                            setActiveIndex(0) // Reset selection on search
                        }}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
                    />
                </div>
            </div>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                {filteredTeam.length > 0 ? (
                    filteredTeam.map((member, index) => {
                        const isActive = member.id === activeMember?.id
                        return (
                            <div
                                key={member.id}
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => setActiveIndex(index)}
                                className={`
                                    relative flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300
                                    ${isActive 
                                        ? "bg-white dark:bg-slate-800 shadow-md scale-[1.02] ring-1 ring-blue-500/20" 
                                        : "hover:bg-white/60 dark:hover:bg-slate-800/40 opacity-70 hover:opacity-100"
                                    }
                                `}
                            >
                                {/* Avatar Thumbnail */}
                                <div className={`w-10 h-10 rounded-full p-0.5 bg-gradient-to-br ${member.gradient}`}>
                                    <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover border border-white dark:border-slate-900" />
                                </div>
                                
                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <h4 className={`text-sm font-bold truncate ${isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400"}`}>
                                        {member.name}
                                    </h4>
                                    <p className="text-[11px] text-slate-500 truncate">{member.post}</p>
                                </div>

                                {/* Active Arrow */}
                                {isActive && (
                                    <motion.div layoutId="activeArrow" className="hidden md:block">
                                        <ChevronRight size={16} className="text-blue-500" />
                                    </motion.div>
                                )}
                            </div>
                        )
                    })
                ) : (
                    <div className="flex flex-col items-center justify-center h-40 text-slate-400">
                        <User size={32} className="mb-2 opacity-50" />
                        <p className="text-sm">No agent found.</p>
                    </div>
                )}
            </div>
        </div>

        {/* RIGHT: Detail View (The "Console") */}
        <div className="w-full md:w-2/3 p-6 md:p-10 relative overflow-y-auto md:overflow-hidden flex flex-col justify-center bg-white/30 dark:bg-transparent">
            {activeMember ? (
                <>
                    {/* Background Gradient Blob */}
                    <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${activeMember.gradient} rounded-full blur-[120px] opacity-15 pointer-events-none transition-colors duration-700`} />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeMember.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="relative z-10"
                        >
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6">
                                {/* Big Image with Status Ring */}
                                <div className="relative">
                                    <div className={`absolute -inset-1 bg-gradient-to-br ${activeMember.gradient} rounded-full blur opacity-40 animate-pulse`} />
                                    <img 
                                        src={activeMember.image} 
                                        alt={activeMember.name} 
                                        className="relative w-24 h-24 md:w-36 md:h-36 rounded-br-3xl rounded-sm object-cover border-4 border-white dark:border-slate-800 shadow-2xl" 
                                    />
                                    <div className="absolute top-2 left-2 bg-white dark:bg-slate-800 p-1 rounded-full shadow-md">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    </div>
                                </div>

                                {/* Tech Stats */}
                                <div className="flex gap-4 w-full md:w-auto">
                                    <div className="flex-1 md:flex-none text-center p-3 bg-slate-50/80 dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700 backdrop-blur-sm min-w-[80px]">
                                        <div className="text-xl font-bold text-slate-900 dark:text-white">{activeMember.stats.exp}</div>
                                        <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Experience</div>
                                    </div>
                                    <div className="flex-1 md:flex-none text-center p-3 bg-slate-50/80 dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700 backdrop-blur-sm min-w-[80px]">
                                        <div className="text-xl font-bold text-slate-900 dark:text-white">{activeMember.stats.projects}</div>
                                        <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Projects</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                                    {activeMember.name}
                                </h3>
                                <div className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${activeMember.gradient} text-white text-xs md:text-sm font-bold shadow-md`}>
                                    {activeMember.post}
                                </div>
                            </div>

                            <div className="bg-white/60 dark:bg-slate-800/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 mb-8 shadow-sm">
                                <div className="flex items-center gap-2 mb-3 text-slate-900 dark:text-white font-semibold">
                                    <Cpu size={18} className="text-blue-500" /> Core Directive
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                                    {activeMember.responsibility}
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <SocialButton icon={Linkedin} label="LinkedIn" />
                                <SocialButton icon={Twitter} label="Twitter" />
                                <SocialButton icon={Github} label="GitHub" />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </>
            ) : (
                <div className="flex items-center justify-center h-full text-slate-400">
                    Select an agent to view details
                </div>
            )}
        </div>
      </div>
    </div>
  )
}

const SocialButton = ({ icon: Icon, label }) => (
    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium group border border-transparent hover:border-slate-300 dark:hover:border-slate-600">
        <Icon size={16} className="group-hover:text-blue-500 transition-colors" />
        <span className="hidden sm:inline">{label}</span>
    </button>
)

// Export Wrapper
export default function TeamModal({ isOpen, onClose }) {
  return (
    <GsapModalWrapper isOpen={isOpen} onClose={onClose}>
      <TeamModalContent />
    </GsapModalWrapper>
  )
}






// "use client"
// import React from "react"
// import { X, Linkedin, Twitter, Github, ArrowUpRight } from "lucide-react"
// import GsapModalWrapper from "./GsapModalWrapper"

// const TeamModalContent = ({ handleClose }) => {
//   const team = [
//     {
//       name: "Sarah Chen",
//       post: "Founder & Architect",
//       responsibility: "Leading the vision for Cognitive Automation and neural architecture.",
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
//       gradient: "from-purple-500 to-indigo-500",
//       featured: true, // Mark Sarah as featured
//     },
//     {
//       name: "David Miller",
//       post: "Head of AI Research",
//       responsibility: "Spearheading LLM fine-tuning methodologies.",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       name: "Elena Rodriguez",
//       post: "Lead Data Scientist",
//       responsibility: "Transforming raw data into predictive models.",
//       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
//       gradient: "from-emerald-500 to-teal-500",
//     },
//     {
//       name: "James Kim",
//       post: "VP of Engineering",
//       responsibility: "Architecting scalable cloud infrastructure.",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
//       gradient: "from-orange-500 to-red-500",
//     },
//   ]

//   return (
//     <div className="relative w-full max-h-[85vh] overflow-y-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-white/20 dark:border-slate-700 rounded-3xl shadow-2xl custom-scrollbar">
//       {/* Decorative Elements */}
//       <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
      
//       {/* Close Button */}
//       <button
//         onClick={handleClose}
//         className="sticky top-6 right-6 ml-auto block p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-500 dark:text-slate-400 z-50 mb-2 shadow-sm"
//       >
//         <X size={20} />
//       </button>

//       <div className="p-8 md:p-12 pt-0">
//         {/* Header */}
//         <div className="text-center mb-12 relative z-10">
//           <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
//             Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Architects</span>
//           </h2>
//           <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
//             The visionaries designing the intelligence of tomorrow.
//           </p>
//         </div>

//         {/* Dynamic Bento Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {team.map((member, index) => {
//             const isFeatured = index === 0; // First person is featured

//             return (
//               <div
//                 key={index}
//                 className={`
//                   group relative flex p-6 rounded-3xl border border-slate-200 dark:border-slate-700 
//                   bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-800/80 
//                   transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300/50
//                   ${isFeatured 
//                     ? "lg:col-span-3 flex-col md:flex-row items-center gap-8 md:p-10 bg-gradient-to-br from-white/80 to-blue-50/50 dark:from-slate-800/80 dark:to-slate-900/80" 
//                     : "lg:col-span-1 flex-col items-start gap-5"
//                   }
//                 `}
//               >
//                 {/* Image Section */}
//                 <div className={`relative shrink-0 ${isFeatured ? "w-32 h-32 md:w-48 md:h-48" : "w-20 h-20"}`}>
//                   <div className={`absolute -inset-2 bg-gradient-to-br ${member.gradient} rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className={`relative w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-lg group-hover:scale-105 transition-transform duration-500`}
//                   />
//                   {/* Status Dot */}
//                   <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full" title="Online" />
//                 </div>

//                 {/* Content Section */}
//                 <div className={`flex flex-col ${isFeatured ? "text-center md:text-left flex-1" : "text-left w-full"}`}>
                  
//                   {/* Top Line */}
//                   <div className="flex items-center justify-between w-full mb-1">
//                     <h3 className={`${isFeatured ? "text-3xl" : "text-xl"} font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
//                       {member.name}
//                     </h3>
//                     {!isFeatured && (
//                       <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100" />
//                     )}
//                   </div>

//                   {/* Role Gradient */}
//                   <p className={`${isFeatured ? "text-lg" : "text-sm"} font-bold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-3 uppercase tracking-wide`}>
//                     {member.post}
//                   </p>

//                   {/* Description */}
//                   <p className={`text-slate-600 dark:text-slate-300 leading-relaxed mb-6 ${isFeatured ? "text-lg max-w-2xl" : "text-sm"}`}>
//                     {member.responsibility}
//                   </p>

//                   {/* Social Icons */}
//                   <div className={`flex gap-3 ${isFeatured ? "justify-center md:justify-start" : "justify-start mt-auto"}`}>
//                     {[Linkedin, Twitter, Github].map((Icon, i) => (
//                       <button 
//                         key={i} 
//                         className={`
//                           flex items-center justify-center rounded-xl transition-all duration-300
//                           ${isFeatured 
//                             ? "p-3 bg-slate-100 dark:bg-slate-700/50 hover:bg-blue-500 hover:text-white text-slate-500" 
//                             : "p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700"
//                           }
//                         `}
//                       >
//                         <Icon size={isFeatured ? 20 : 18} />
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// // Export Wrapper
// export default function TeamModal({ isOpen, onClose }) {
//   return (
//     <GsapModalWrapper isOpen={isOpen} onClose={onClose}>
//       <TeamModalContent />
//     </GsapModalWrapper>
//   )
// }