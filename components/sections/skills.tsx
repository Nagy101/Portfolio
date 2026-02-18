'use client'

import { Code2, Database, Zap, Shield, Palette, BarChart3 } from 'lucide-react'

const skillCategories = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    icon: Code2,
    color: 'from-[#10B981] to-[#059669]',
    badge: 'Core Strength',
    skills: ['C#', '.NET 10 / 8', 'ASP.NET Core', 'Web API', 'MVC', 'LINQ', 'SignalR', 'Background Services'],
    count: 8
  },
  {
    id: 'architecture',
    title: 'Architecture & Patterns',
    icon: Zap,
    color: 'from-[#3B82F6] to-[#1D4ED8]',
    badge: 'Core Strength',
    skills: ['Clean Architecture', 'Onion Architecture', 'SOLID Principles', 'CORS', 'Design Patterns', 'Repository Pattern', 'Dependency Injection', 'Microservices'],
    count: 8
  },
  {
    id: 'database',
    title: 'Database & Performance',
    icon: Database,
    color: 'from-[#A855F7] to-[#7C3AED]',
    badge: 'Core Strength',
    skills: ['SQL Server', 'Entity Framework Core', 'Redis (Caching)', 'PostgreSQL', 'Database Optimization', 'Code/DB First', 'NoSQL'],
    count: 7
  },
  {
    id: 'security',
    title: 'Security & DevOps',
    icon: Shield,
    color: 'from-[#F97316] to-[#EA580C]',
    badge: 'Advanced',
    skills: ['Docker', 'Git & GitHub', 'CI/CD Basics', 'JWT Auth', 'OAuth2', 'IdentityServer', 'Role-Based Access (RBAC)'],
    count: 7
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Palette,
    color: 'from-[#6366F1] to-[#4F46E5]',
    badge: 'Intermediate',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5 & CSS3'],
    count: 6
  },
  {
    id: 'tools',
    title: 'Analysis & Workflow',
    icon: BarChart3,
    color: 'from-[#06B6D4] to-[#0891B2]',
    badge: 'Advanced',
    skills: ['System Analysis', 'UML & ERD', 'Agile / Scrum', 'Team Leadership', 'Problem Solving', 'Requirement Gathering', 'Postman'],
    count: 7
  }
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#38BDF8]/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#E5E7EB]">Skills & </span><span className="text-[#38BDF8]">Expertise</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg">Comprehensive technical expertise spanning backend architecture, database optimization, and full-stack development</p>
          <div className="w-16 h-1 bg-[#38BDF8] mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-xl border border-[#38BDF8]/30 bg-[#0F1629]/50 hover:border-[#38BDF8]/60 transition-all duration-300 hover:scale-105"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[#38BDF8]/20 text-[#38BDF8]">
                      {category.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#E5E7EB]">
                    {category.title}
                  </h3>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-sm text-[#9CA3AF] bg-[#1E293B] px-3 py-1 rounded-md hover:bg-[#38BDF8]/20 hover:text-[#38BDF8] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Count */}
                  <div className="pt-2 border-t border-[#38BDF8]/20 text-center">
                    <p className="text-[#9CA3AF] text-xs">{category.count} skills</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
