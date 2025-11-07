"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import ReactFlagsSelect from "react-flags-select";
import { IconType } from "react-icons";

// ✅ Fixed individual imports for react-icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

import { SiNextdotjs } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { SiMailchimp } from "react-icons/si";
import { SiGoogleadsense } from "react-icons/si";

export default function Home() {
  const [dark, setDark] = useState(true);
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // ✅ Add selectedCountry state for ReactFlagsSelect
  const [selectedCountry, setSelectedCountry] = useState<string>("US");

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  const projects = [
    {
      title: "AI Chatbot",
      desc: "An intelligent chatbot built with NLP & Python Flask.",
      category: "App Projects",
      doc: "This AI Chatbot processes user queries using NLP and provides smart automated responses.",
      link: "https://example.com/chatbot",
    },
    {
      title: "E-Commerce Platform",
      desc: "Full-stack store using Django backend & React frontend.",
      category: "Web Development",
      doc: "A secure, fast and user-friendly online store built with Django and React.",
      link: "https://example.com/ecommerce",
    },
    {
      title: "Portfolio Website",
      desc: "A responsive portfolio built with Next.js & Tailwind CSS.",
      category: "Web Development",
      doc: "My personal portfolio showcasing my work, skills, and contact info with smooth UI/UX.",
      link: "https://example.com/portfolio",
    },
    {
      title: "Digital Marketing Dashboard",
      desc: "A social media and SEO analytics dashboard.",
      category: "Digital Marketing",
      doc: "Real-time performance insights, keyword rankings, and traffic analytics dashboard.",
      link: "https://example.com/marketing",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const skills: { name: string; icon: IconType; color: string }[] = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
    { name: "React", icon: FaReact, color: "text-sky-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800 dark:text-white" },
    { name: "Django", icon: SiDjango, color: "text-green-700" },
    { name: "Python", icon: FaPython, color: "text-yellow-400" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "Digital Marketing", icon: SiMailchimp, color: "text-pink-500" },
    { name: "Google Ads", icon: SiGoogleadsense, color: "text-blue-600" },
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "Kotlin", icon: SiKotlin, color: "text-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-950 dark:text-white font-sans transition duration-500">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-zinc-900/80 backdrop-blur-md border-b border-green-500/30 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-3xl font-extrabold tracking-tight hover:scale-105 transition-transform duration-300 cursor-pointer text-green-600 dark:text-green-400">
            M. Hashaam Ahmad
          </h1>
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative group hover:text-green-500 transition duration-300"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 text-xl"
            >
              {dark ? "☀️" : "🌙"}
            </button>
            <a
              href="#contact"
              className="bg-green-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-green-400 transform hover:scale-105 transition"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-40 pb-24"
      >
        <div className="space-y-6 md:w-1/2 animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="text-green-600 dark:text-green-400">
              M. Hashaam Ahmad
            </span>
          </h2>
          <TypeAnimation
            sequence={[
              "Full-Stack Developer 💻",
              2000,
              "Django Expert 🐍",
              2000,
              "Next.js Enthusiast 🚀",
              2000,
              "UI/UX Designer 🎨",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl text-green-600 dark:text-green-400 font-semibold"
          />
          <p className="text-lg text-gray-700 dark:text-zinc-300">
            I build responsive, dynamic web applications and love combining
            backend power with beautiful frontend designs.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transform hover:scale-105 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-green-500 text-green-600 dark:text-green-400 px-6 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-black transform hover:scale-105 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
          <div
            className="relative group"
            style={{ animation: "float 4s ease-in-out infinite" }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-700 rounded-full blur opacity-50 group-hover:opacity-70 transition duration-500"></div>
            <Image
              src="/About.jpg"
              alt="Profile"
              width={300}
              height={300}
              className="relative rounded-full border-4 border-green-500 shadow-2xl transform group-hover:scale-105 transition-all"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 md:px-20 py-20 bg-green-50 dark:bg-zinc-900">
        <h3 className="text-4xl font-extrabold mb-12 text-center text-green-600 dark:text-green-400 tracking-wide">
          About Me
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          <div className="relative w-120 h-120 rounded-full overflow-hidden shadow-2xl ring-4 ring-green-500 ring-opacity-50 hover:scale-105 transition-transform">
            <Image
              src="/About.jpg"
              alt="Hashaam"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-2/3 space-y-6 text-lg text-gray-700 dark:text-zinc-300 leading-relaxed">
            <p>
              I’m <span className="text-green-600 font-semibold">M. Hashaam Ahmad</span>, a passionate
              developer dedicated to crafting high-quality, scalable, and visually engaging web
              applications using Django, React, and Next.js.
            </p>
            <p>
              With <span className="text-green-600 font-semibold">3+ years</span> of experience in
              Virtual Assistance (eBay & Amazon) and <span className="text-green-600 font-semibold">1+ year</span> in Social Media Management,
              I blend business understanding with technical expertise to deliver practical solutions.
            </p>
            <p>
              I love solving real-world problems, continuously learning new technologies, and enhancing
              both performance and user experience. My goal is to create web experiences that are both
              beautiful and functional.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#projects" className="bg-green-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-green-400 transition-all">
                My Projects
              </a>
              <a href="#contact" className="border-2 border-green-500 text-green-600 dark:text-green-400 px-6 py-2 rounded-full font-semibold hover:bg-green-500 hover:text-black transition-all">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="px-8 md:px-20 py-20 bg-gradient-to-r from-green-100 to-emerald-200 dark:from-green-800 dark:to-emerald-900 text-center"
      >
        <h3 className="text-4xl font-bold mb-10 text-green-700 dark:text-green-300">
          Professional Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {skills.map((skill) => {
            const Icon = skill.icon as React.ComponentType<{ className?: string }>;
            return (
              <div
                key={skill.name}
                className="bg-white/80 dark:bg-zinc-800/80 p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:scale-105 transition-all flex flex-col items-center justify-center gap-3"
              >
                <Icon className={`text-4xl ${skill.color}`} />
                <p className="text-lg font-semibold text-green-700 dark:text-green-300">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="px-8 md:px-20 py-20 bg-gray-50 dark:bg-zinc-950 text-center"
      >
        <h3 className="text-4xl font-bold mb-10 text-green-600 dark:text-green-400">
          Featured Projects
        </h3>
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {["All", "App Projects", "Web Development", "Digital Marketing"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-semibold border transition-all ${
                  filter === cat
                    ? "bg-green-500 text-black"
                    : "border-green-500 text-green-600 hover:bg-green-500 hover:text-black"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((proj) => (
            <div
              key={proj.title}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition-all border border-green-500/30"
            >
              <h4 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">
                {proj.title}
              </h4>
              <p className="text-gray-700 dark:text-zinc-400">{proj.desc}</p>
              <div className="mt-4 flex flex-col gap-2">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="border border-green-500 px-5 py-2 rounded-full text-green-600 hover:bg-green-500 hover:text-black transition-all"
                >
                  Get Details
                </button>
                <a
                  href={proj.link}
                  target="_blank"
                  className="bg-green-500 text-black px-5 py-2 rounded-full hover:bg-green-400 transition-all"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-xl max-w-lg w-[90%] animate-fadeInUp"
            >
              <h4 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
                {selectedProject.title} — Documentation
              </h4>
              <p className="text-gray-700 dark:text-zinc-300 mb-4">
                {selectedProject.doc}
              </p>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-400"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-8 md:px-20 py-20 bg-green-50 dark:bg-zinc-900 text-center"
      >
        <h3 className="text-4xl font-bold mb-10 text-green-600 dark:text-green-400">
          Arrange a Meeting
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Meeting request sent successfully!");
            (e.target as HTMLFormElement).reset();
          }}
          className="max-w-2xl mx-auto bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg flex flex-col gap-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Full Name *"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-green-500 dark:bg-zinc-900"
            />
            <input
              type="email"
              placeholder="Email *"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-green-500 dark:bg-zinc-900"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <ReactFlagsSelect
              countries={["US", "GB", "PK", "IN", "CA", "AE", "AU"]}
              customLabels={{
                US: "United States",
                GB: "United Kingdom",
                PK: "Pakistan",
                IN: "India",
                CA: "Canada",
                AE: "UAE",
                AU: "Australia",
              }}
              placeholder="Select Country"
              className="flex-1"
              selected={selectedCountry}
              onSelect={(code) => setSelectedCountry(code)}
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-green-500 dark:bg-zinc-900"
            />
          </div>

          <select
            required
            className="px-4 py-3 rounded-lg border border-green-500 dark:bg-zinc-900"
          >
            <option value="">Meeting With *</option>
            <option>CEO</option>
            <option>Director</option>
            <option>Manager</option>
            <option>Developer</option>
            <option>SEO Expert</option>
          </select>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="date"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-green-500 dark:bg-zinc-900"
            />
            <input
              type="time"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-green-500 dark:bg-zinc-900"
            />
          </div>

          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-green-500 dark:bg-zinc-900"
          />

          <button
            type="submit"
            className="bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition-all mt-2"
          >
            Send Request
          </button>
        </form>
      </section>

      {/* Footer Enhancement */}
      <footer className="py-12 bg-green-600 dark:bg-green-800 text-center text-white">
        <h4 className="text-xl font-semibold mb-4">Connect with Me</h4>
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="hover:text-gray-200 transition">LinkedIn</a>
          <a href="#" className="hover:text-gray-200 transition">GitHub</a>
          <a href="#" className="hover:text-gray-200 transition">Twitter</a>
        </div>
        <p className="text-gray-200">
          &copy; {new Date().getFullYear()} M. Hashaam Ahmad. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
