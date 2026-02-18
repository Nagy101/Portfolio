"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Create mailto link with form data
    const mailtoLink = `mailto:nagynady1976@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    setTimeout(() => {
      setSubmitted(true);
      setSending(false);
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }, 500);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#38BDF8]/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-[#38BDF8]">Touch</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg">
            Let's collaborate and create something amazing together
          </p>
          <div className="w-16 h-1 bg-[#38BDF8] mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3 rounded-lg bg-[#38BDF8]/20 text-[#38BDF8] flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#E5E7EB] mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:nagynady1976@gmail.com"
                    className="text-[#9CA3AF] hover:text-[#38BDF8] transition-colors"
                  >
                    nagynady1976@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 rounded-lg bg-[#38BDF8]/20 text-[#38BDF8] flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#E5E7EB] mb-1">
                    Phone
                  </h3>
                  <p className="text-[#9CA3AF]">+20 121 196 1909</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 rounded-lg bg-[#38BDF8]/20 text-[#38BDF8] flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#E5E7EB] mb-1">
                    Location
                  </h3>
                  <p className="text-[#9CA3AF]">Cairo, Egypt</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-[#E5E7EB] mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Nagy101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#1E293B] hover:bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30 hover:border-[#38BDF8]/60 transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-nagy-36aa4b318/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#1E293B] hover:bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30 hover:border-[#38BDF8]/60 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:nagynady1976@gmail.com"
                  className="p-3 rounded-full bg-[#1E293B] hover:bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30 hover:border-[#38BDF8]/60 transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1E293B] border border-[#38BDF8]/30 rounded-lg p-8 hover:border-[#38BDF8]/60 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#E5E7EB] font-semibold mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-[#0F1629] border-[#38BDF8]/30 text-[#E5E7EB] placeholder-[#9CA3AF] rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-[#E5E7EB] font-semibold mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-[#0F1629] border-[#38BDF8]/30 text-[#E5E7EB] placeholder-[#9CA3AF] rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-[#E5E7EB] font-semibold mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full bg-[#0F1629] border border-[#38BDF8]/30 text-[#E5E7EB] placeholder-[#9CA3AF] rounded-lg p-3 focus:outline-none focus:border-[#38BDF8]/60 transition-colors"
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-[#38BDF8] hover:bg-[#0EA5E9] text-black font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="mr-2" size={20} />
                {sending ? "Opening email client..." : "Send Message"}
              </Button>

              {submitted && (
                <div className="p-4 bg-[#10B981]/20 border border-[#10B981] rounded-lg text-[#10B981] text-center">
                  ✓ Email client opened! Please send the email from your email
                  app.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#38BDF8]/20 mt-16 pt-8 text-center text-[#9CA3AF]">
          <p>
            &copy; {new Date().getFullYear()} Mohamed Nagy. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
