"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-xl md:text-6xl font-bold text-[#E5E7EB] leading-tight">
              <span className="text-[#38BDF8]">.NET Developer</span> | Backend
              Specialist
            </h1>
            <p className="text-lg text-[#9CA3AF] leading-relaxed">
              I turn complex ideas into real, working software. With a strong
              foundation in .NET Backend and React Frontend, I help businesses
              build modern and reliable web solutions. Whether you need a
              complex API or a full platform, I focus on delivering quality,
              speed, and a great user experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects">
                <Button className="bg-[#38BDF8] hover:bg-[#0EA5E9] text-black font-semibold px-8 py-6 text-base rounded-lg transition-all duration-300 hover:scale-105">
                  View My Work
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <a
                href="https://drive.google.com/file/d/1Nv1du0NvV7A5-RdlP3wgEvf2ZcJK1lOa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8]/10 px-8 py-6 text-base rounded-lg"
                >
                  Show CV
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Nagy101"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#1E293B] hover:bg-[#38BDF8]/20 text-[#38BDF8] transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-nagy-36aa4b318/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#1E293B] hover:bg-[#38BDF8]/20 text-[#38BDF8] transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nagynady1976@gmail.com"
                className="p-3 rounded-full bg-[#1E293B] hover:bg-[#38BDF8]/20 text-[#38BDF8] transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="hidden md:block">
            <div className="relative w-full aspect-square rounded-2xl border border-[#38BDF8]/30 overflow-hidden bg-gradient-to-br from-[#38BDF8]/10 to-[#2563EB]/10">
              <img
                src="/images/Image.png"
                alt="Mohamed Nagy - Full Stack Developer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
