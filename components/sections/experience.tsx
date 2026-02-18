"use client";

import { Briefcase, Calendar, MapPin, Award, TrendingUp } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: ".NET Backend Developer",
    company: "Freelance & Contract Work",
    duration: "2024 - Present",
    location: "Remote | Cairo, Egypt",
    type: "Contract",
    isCurrent: true,
    description:
      "Architecting and developing scalable backend systems using .NET and Clean Architecture principles. Specializing in complex business logic, API design, and enterprise-grade solutions.",
    achievements: [
      "Engineered Makanak real estate platform with .NET 10, implementing complex booking engine with conflict resolution",
      "Built production-ready RESTful APIs serving 1000+ daily requests with optimized SQL Server queries",
      "Implemented real-time features using SignalR for instant notifications and live updates",
      "Designed and deployed secure authentication systems with JWT and role-based authorization",
      "Delivered EOS e-commerce platform generating active sales with automated email notifications",
    ],
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Personal Projects & Portfolio Development",
    duration: "2023 - Present",
    location: "Cairo, Egypt",
    type: "Self-Employed",
    isCurrent: true,
    description:
      "Building end-to-end web applications combining React frontend with .NET backend, focusing on performance, scalability, and excellent user experience.",
    achievements: [
      "Developed 4+ production-ready full-stack applications deployed on Vercel and live servers",
      "Created FreshCart grocery platform with Firebase integration and real-time inventory tracking",
      "Built responsive admin dashboards with data visualization, filtering, and advanced pagination",
      "Integrated payment processing systems and third-party APIs for enhanced functionality",
      "Implemented modern UI/UX using React, Material UI, Tailwind CSS, and Framer Motion",
    ],
  },
  {
    id: 3,
    title: "Backend Development Specialist",
    company: "Intensive Training & Certification",
    duration: "2023 - 2024",
    location: "Remote Learning",
    type: "Education",
    isCurrent: false,
    description:
      "Completed comprehensive backend development training through structured courses and hands-on projects, mastering ASP.NET Core ecosystem and modern software architecture.",
    achievements: [
      "Mastered ASP.NET Core MVC, Web API, Entity Framework Core, and LINQ",
      "Applied SOLID principles, Clean Architecture, Repository & Unit of Work patterns",
      "Built secure, scalable APIs with advanced authentication and authorization",
      "Optimized database performance with indexing, query optimization, and migrations",
      "Implemented dependency injection, middleware, and comprehensive error handling",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#38BDF8]/20 relative overflow-hidden"
    >
      {/* Background Gradient Effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#E5E7EB]">Professional</span>{" "}
            <span className="text-[#38BDF8]">Journey</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg">
            Building scalable systems and delivering quality solutions
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Line */}
              {idx !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-[#38BDF8] via-[#38BDF8]/50 to-transparent hidden md:block"></div>
              )}

              {/* Experience Card */}
              <div className="flex gap-6">
                {/* Timeline Dot */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#2563EB] flex items-center justify-center border-4 border-[#0B1220] shadow-lg shadow-[#38BDF8]/30 group-hover:shadow-[#38BDF8]/50 transition-all duration-300 group-hover:scale-110">
                      <Briefcase size={20} className="text-white" />
                    </div>
                    {/* Pulse Effect for Current Positions */}
                    {exp.isCurrent && (
                      <span className="absolute top-0 right-0 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gradient-to-br from-[#1E293B] to-[#1E293B]/80 border border-[#38BDF8]/30 rounded-xl p-6 md:p-8 hover:border-[#38BDF8]/70 hover:shadow-xl hover:shadow-[#38BDF8]/10 transition-all duration-300 group-hover:translate-x-1">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-[#E5E7EB] group-hover:text-white transition-colors">
                          {exp.title}
                        </h3>
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30 hover:bg-[#38BDF8]/30 transition-colors">
                          {exp.type}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white flex items-center gap-1.5 shadow-lg shadow-[#10B981]/20">
                            <TrendingUp size={12} />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[#38BDF8] font-semibold text-lg mb-1">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 mb-5 text-[#9CA3AF] text-sm">
                    <div className="flex items-center gap-2 bg-[#0F1629] px-4 py-2 rounded-lg border border-[#38BDF8]/10 hover:border-[#38BDF8]/30 transition-colors">
                      <Calendar size={16} className="text-[#38BDF8]" />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#0F1629] px-4 py-2 rounded-lg border border-[#38BDF8]/10 hover:border-[#38BDF8]/30 transition-colors">
                      <MapPin size={16} className="text-[#38BDF8]" />
                      <span className="font-medium">{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#9CA3AF] leading-relaxed mb-6 text-base">
                    {exp.description}
                  </p>


                  {/* Achievements */}
                  <div className="bg-gradient-to-br from-[#0F1629] to-[#0F1629]/50 rounded-lg p-5 border border-[#38BDF8]/20 hover:border-[#38BDF8]/40 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 rounded-lg bg-[#38BDF8]/10">
                        <Award size={18} className="text-[#38BDF8]" />
                      </div>
                      <h4 className="text-[#E5E7EB] font-bold text-lg">
                        Key Achievements
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-[#9CA3AF] text-sm flex gap-3 leading-relaxed hover:text-[#E5E7EB] transition-colors group/item"
                        >
                          <span className="text-[#38BDF8] mt-1 font-bold text-base group-hover/item:scale-125 transition-transform inline-block">
                            •
                          </span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#1E293B] to-[#1E293B]/80 border border-[#38BDF8]/30 rounded-xl p-8 hover:border-[#38BDF8]/60 transition-all duration-300">
            <p className="text-[#9CA3AF] text-lg mb-4">
              Want to work together or learn more about my journey?
            </p>
            <a href="#contact">
              <button className="bg-gradient-to-r from-[#38BDF8] to-[#2563EB] hover:from-[#0EA5E9] hover:to-[#38BDF8] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#38BDF8]/20 hover:shadow-[#38BDF8]/40">
                Get In Touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
