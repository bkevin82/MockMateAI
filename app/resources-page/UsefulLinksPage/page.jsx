"use client";
import React from "react";
import Link from "next/link";
import { Briefcase, ExternalLink, User, Mail, Phone } from "lucide-react";
import { ArrowRight } from "lucide-react";

const UsefulLinksPage = () => {
  const resources = [
    {
      title: "Job Search Websites",
      links: [
        { name: "LinkedIn", url: "https://www.linkedin.com" },
        { name: "Indeed", url: "https://www.indeed.com" },
        { name: "Naukri", url: "https://www.naukri.com" },
      ],
    },
    {
      title: "Skill Improvement Courses",
      links: [
        { name: "Coursera", url: "https://www.coursera.org" },
        { name: "Udemy", url: "https://www.udemy.com" },
        { name: "edX", url: "https://www.edx.org" },
      ],
    },
    {
      title: "AI-Powered Tools",
      links: [
        { name: "Grammarly", url: "https://www.grammarly.com" },
        { name: "Resume Worded", url: "https://www.resumeworded.com" },
      ],
    },
  ];

  const professionals = [
    {
      name: "Hardik Thakor",
      expertise: "Full Stack Developer",
      description:
        "Hardik specializes in building responsive websites and AI-powered applications.",
      email: "hardik.thakor@example.com",
      phone: "+91 8320809049",
    },
    {
      name: "Pransh Kapuriya",
      expertise: "Frontend Developer",
      description:
        "Devansh has a keen eye for design and excels in creating intuitive user interfaces.",
      email: "devansh.raval@example.com",
      phone: "+91 92655 75160",
    },
    {
      name: "Devansh Raval",
      expertise: "Backend Developer",
      description:
        "Pransh is an expert in backend technologies, ensuring robust and scalable server architectures.",
      email: "pransh.kapuriya@example.com",
      phone: "+91 78619 78169",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Useful Links & Tools
      </h1>

      {/* Resource Links */}
      {resources.map((resource, index) => (
        <div key={index} className="mb-8 bg-white p-6 shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Briefcase className="mr-2" />
            {resource.title}
          </h2>
          <ul className="space-y-2">
            {resource.links.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.url}
                  target="_blank"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <ExternalLink className="mr-1" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Professionals Section */}
      <h2 className="text-3xl font-semibold mb-6">Meet Our Professionals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {professionals.map((prof, index) => (
          <div key={index} className="p-4 bg-white shadow rounded-lg">
            <div className="flex items-center mb-4">
              <User size={40} className="text-blue-500 mr-3" />
              <div>
                <h3 className="text-xl font-semibold">{prof.name}</h3>
                <p className="text-gray-500">{prof.expertise}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{prof.description}</p>
            <div className="text-gray-600 space-y-1">
              <p className="flex items-center">
                <Mail className="mr-2" /> {prof.email}
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" /> {prof.phone}
              </p>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-blue-50 py-10 px-4 flex justify-between items-center mt-8">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Go Back
        </button>

        <Link href="/dashboard">
          <button className="flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:from-blue-700 hover:to-blue-600 transition duration-300 ease-in-out">
            <span className="mr-2">Get Started Now</span>
            <ArrowRight size={20} />
          </button>
        </Link>
      </section>
    </div>
  );
};

export default UsefulLinksPage;
