"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "EOS - Premium Streetwear Store",
    description:
      "A live Freelance e-commerce platform built for a fashion brand, currently generating active sales. Features automated email order notifications and a premium, responsive UI designed with React and Material UI to drive business growth.",
    images: [
      "/images/Eoc/1.jpeg",
      "/images/Eoc/2.jpeg",
      "/images/Eoc/3.jpeg",
      "/images/Eoc/4.jpeg",
    ],
    tags: ["React", "Material UI", "Freelance"],
    liveLink: "https://eos-pants.vercel.app/",
    codeLink: "https://github.com/Nagy101/HangMan",
  },
  {
    id: 2,
    title: "Makanak - Real Estate Marketplace",
    description:
      "A scalable peer-to-peer rental platform engineered with .NET 10 and Clean Architecture. Features a complex booking engine with conflict resolution, real-time notifications via SignalR, and secure payment processing, API Production.",
    images: [
      "/images/Makanak/1.jpeg",
      "/images/Makanak/2.jpeg",
      "/images/Makanak/3.jpeg",
      "/images/Makanak/4.jpeg",
      "/images/Makanak/5.jpeg",
      "/images/Makanak/6.jpeg",
    ],
    tags: [".NET 10", "Clean Arch", "SignalR", "SQL Server"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    title: "Hangman Game - Interactive Web App",
    description:
      "A fun and interactive Hangman game built with React, Mantine, and Framer Motion. Features smooth animations, responsive design, and a user-friendly interface that provides an engaging gaming experience.",
    images: [
      "/images/Hangman/1.png",
      "/images/Hangman/2.png",
      "/images/Hangman/3.png",
    ],
    tags: ["React", "Mantine", "Framer Motion", "Frontend"],
    liveLink: "https://hang-man-olive.vercel.app/",
    codeLink: "https://github.com/Nagy101/HangMan",
  },
  {
    id: 4,
    title: "FreshMart - Grocery Delivery App",
    description:
      "A modern grocery delivery platform built with React and Firebase. Features real-time inventory tracking, user authentication, and a seamless shopping experience with integrated payment processing.",
    images: [
      "/images/FreShCart/1.png",
      "/images/FreShCart/2.png",
      "/images/FreShCart/3.png",
      "/images/FreShCart/4.png",
    ],
    tags: ["React", "Firebase", "Tailwind CSS", "Frontend"],
    liveLink: "https://fresh-cart-beige-eight.vercel.app/",
    codeLink: "https://github.com/Nagy101/FreshCart",
  },
];

// Component for project image carousel
function ProjectImageCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-80 bg-[#0F1629] flex items-center justify-center overflow-hidden">
      <img
        src={images[currentImageIndex]}
        alt={`${title} - Image ${currentImageIndex + 1}`}
        className="w-full h-full object-contain transition-transform duration-300"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all z-10"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImageIndex ? "bg-[#38BDF8] w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const currentProjects = projects.slice(startIdx, startIdx + itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#38BDF8]/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#38BDF8]">Featured</span>{" "}
            <span className="text-[#E5E7EB]">Projects</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg">
            Here are some of my recent projects that showcase my skills and
            passion for creating exceptional digital experiences.
          </p>
          <div className="w-16 h-1 bg-[#38BDF8] mx-auto mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl border border-[#38BDF8]/30 bg-[#1E293B] hover:border-[#38BDF8]/60 transition-all duration-300 hover:scale-105 flex flex-col"
            >
              {/* Image Carousel */}
              <ProjectImageCarousel
                images={project.images}
                title={project.title}
              />

              {/* Content */}
              <div className="relative p-5 flex-1 flex flex-col space-y-3">
                <h3 className="text-xl font-bold text-[#E5E7EB]">
                  {project.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-[#38BDF8] hover:bg-[#0EA5E9] text-black font-semibold py-2 rounded-lg transition-all duration-300">
                      <ExternalLink size={16} className="mr-2" />
                      View Project
                    </Button>
                  </a>
                  {project.codeLink !== "#" && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8]/10 py-2 rounded-lg"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-[#38BDF8]/30 text-[#38BDF8] hover:bg-[#38BDF8]/20 transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-10 h-10 rounded-full font-semibold transition-all ${
                    currentPage === idx
                      ? "bg-[#38BDF8] text-black"
                      : "border border-[#38BDF8]/30 text-[#38BDF8] hover:bg-[#38BDF8]/20"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-[#38BDF8]/30 text-[#38BDF8] hover:bg-[#38BDF8]/20 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
