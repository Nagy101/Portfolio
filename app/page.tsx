'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Download, ExternalLink, Github, Mail, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import HeroSection from '@/components/sections/hero'
import AboutSection from '@/components/sections/about'
import SkillsSection from '@/components/sections/skills'
import ProjectsSection from '@/components/sections/projects'
import ExperienceSection from '@/components/sections/experience'
import ContactSection from '@/components/sections/contact'
import Navigation from '@/components/navigation'

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#0B1220] to-[#0F1629] min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}
