"use client";

import { Button } from "@/components/ui/button";
import { Download, MapPin, Globe, Code } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#38BDF8]/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[#38BDF8]">Me</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg">
            Building scalable systems with Clean Architecture principles at the
            core
          </p>
          <div className="w-16 h-1 bg-[#38BDF8] mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Left - Story */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <Code className="text-[#38BDF8] mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-2xl font-bold text-[#E5E7EB] mb-4">
                  My Story
                </h3>
                <p className="text-[#9CA3AF] leading-relaxed mb-4">
                  My passion lies in understanding how large-scale systems work
                  and what makes them resilient. I don't just write code—I
                  architect solutions. My focus is always on building systems
                  with performance, maintainability, and scalability in mind,
                  ensuring that every line serves a purpose.
                </p>
                <p className="text-[#9CA3AF] leading-relaxed mb-4">
                  I specialize in bridging the gap between complex business
                  needs and technical implementation. My focus is on the core
                  business logic, ensuring that every solution I build is not
                  only functional but also scalable, secure, and maintainable
                  for the long term. I believe that great software is built on
                  solid foundations.
                </p>
                <p className="text-[#9CA3AF] leading-relaxed">
                  Currently pursuing a Bachelor's degree in Computer Science,
                  specializing in Information Systems (3rd Year). As a proactive
                  learner and collaborative team player, I continuously adapt to
                  new technologies and best practices. I'm ready to bring my
                  technical expertise, problem-solving mindset, and commitment
                  to quality to a professional team that values engineering
                  excellence.
                </p>
              </div>
            </div>

            {/* Show CV Button */}
            <div className="pt-4">
              <a
                href="https://drive.google.com/file/d/1Nv1du0NvV7A5-RdlP3wgEvf2ZcJK1lOa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#38BDF8] hover:bg-[#0EA5E9] text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                  Show CV
                </Button>
              </a>
            </div>
          </div>

          {/* Right - Quick Facts */}
          <div className="space-y-6">
            <div className="bg-[#1E293B] border border-[#38BDF8]/30 rounded-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-[#E5E7EB] mb-6 flex items-center gap-2">
                <span className="text-[#38BDF8]">📌</span> Quick Facts
              </h3>

              {/* Facts */}
              <div className="space-y-6">
                <div>
                  <p className="text-[#9CA3AF] text-sm flex items-center gap-2">
                    <Code size={16} className="text-[#38BDF8]" />
                    Experience
                  </p>
                  <p className="text-[#E5E7EB] font-semibold mt-1">2+ Years</p>
                </div>

                <div>
                  <p className="text-[#9CA3AF] text-sm flex items-center gap-2">
                    <MapPin size={16} className="text-[#38BDF8]" />
                    Location
                  </p>
                  <p className="text-[#E5E7EB] font-semibold mt-1">
                    Cairo, Egypt
                  </p>
                </div>

                <div>
                  <p className="text-[#9CA3AF] text-sm flex items-center gap-2">
                    <Globe size={16} className="text-[#38BDF8]" />
                    Languages
                  </p>
                  <p className="text-[#E5E7EB] font-semibold mt-1">
                    Arabic, English
                  </p>
                </div>

                <div className="pt-2 border-t border-[#38BDF8]/20">
                  <p className="text-[#38BDF8] font-bold mb-3">
                    🎯 Available for Work
                  </p>
                  <p className="text-[#9CA3AF] text-sm mb-3">
                    Open for Full-time & Freelance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
