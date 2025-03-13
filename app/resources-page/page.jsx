"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, FileText, Briefcase, Link2 } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function ResourcesPage() {
  const resources = [
    {
      icon: <BookOpen size={50} className="text-blue-600" />,
      title: "Interview Preparation Guides",
      description:
        "Master your interviews with expert guidance. Get structured preparation plans, mock interview tips, and sample questions.",
      items: [
        "✅ Common interview questions and answers",
        "✅ Industry-specific interview guides (IT, Marketing, Finance)",
        "✅ Tips for answering behavioral questions effectively",
        "✅ STAR method for structured responses",
        "✅ Best practices for remote & technical interviews",
        <div className="flex items-center mt-6 justify-end">
          <Link href="/resources-page/interview-preparation-details">
            <button className="flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:from-blue-700 hover:to-blue-600 transition duration-300 ease-in-out">
              <span className="mr-2">Learn More</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>,
      ],
    },
    {
      icon: <FileText size={50} className="text-green-600" />,
      title: "Resume & Cover Letter Templates",
      description:
        "Build a strong first impression with a professional resume and cover letter. Download templates and optimize your profile.",
      items: [
        "✅ Free downloadable resume templates (PDF & DOC)",
        "✅ Cover letter examples for different industries",
        "✅ How to write a compelling career summary",
        "✅ Keywords & ATS-friendly resume formatting",
        "✅ LinkedIn profile optimization tips",
        <div className="flex items-center mt-6 justify-end">
          <Link href="/resources-page/resume-cover-letter-details">
            <button className="flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:from-blue-700 hover:to-blue-600 transition duration-300 ease-in-out">
              <span className="mr-2">Learn More</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>,
      ],
    },
    {
      icon: <Briefcase size={50} className="text-yellow-600" />,
      title: "Career Growth Resources",
      description:
        "Advance your career with negotiation strategies, personal branding, and leadership development resources.",
      items: [
        "✅ Negotiating salary and benefits with confidence",
        "✅ Personal branding and networking tips",
        "✅ Leadership and soft skills development",
        "✅ Upskilling through online certifications",
        "✅ Best books and courses for career growth",
        <div className="flex items-center mt-6 justify-end">
          <Link href="/resources-page/career-growth">
            <button className="flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:from-blue-700 hover:to-blue-600 transition duration-300 ease-in-out">
              <span className="mr-2">Learn More</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>,
      ],
    },
    {
      icon: <Link2 size={50} className="text-red-600" />,
      title: "Useful Links & Tools",
      description:
        "Find the best career-boosting platforms, job search engines, and AI-powered tools for success.",
      items: [
        "✅ Best websites for job searching",
        "✅ Free online courses for skill improvement",
        "✅ AI-powered resume & grammar checkers",
        "✅ Top networking events and job fairs",
        "✅ Freelancing & remote work opportunities",
        <div className="flex items-center mt-6 justify-end">
          <Link href="/resources-page/UsefulLinksPage">
            <button className="flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:from-blue-700 hover:to-blue-600 transition duration-300 ease-in-out">
              <span className="mr-2">Learn More</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>,
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900 font-sans">
      {/* 🔹 Hero Section */}
      <section className="h-80 flex flex-col items-center justify-center text-center px-6 bg-blue-700 text-white">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Career Resources 📚
        </motion.h1>
        <motion.p
          className="text-xl max-w-3xl text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Get access to the best interview guides, resume templates, and career
          growth resources to enhance your professional journey.
        </motion.p>
      </section>

      {/* 🔹 Resources Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition transform hover:scale-105 min-h-[400px] flex flex-col justify-between"
            >
              <div className="flex flex-col items-center">
                <div className="mb-6">{resource.icon}</div>
                <h3 className="text-2xl font-semibold">{resource.title}</h3>
                <p className="text-gray-700 mt-2 text-lg">
                  {resource.description}
                </p>
                <ul className="text-gray-600 mt-4 text-base space-y-2 text-left">
                  {resource.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Start AI Interview Button */}
      <section className="py-12 bg-blue-600 text-white text-center">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Prepare?
        </motion.h2>
        <motion.p
          className="text-lg mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Start your AI-powered interview preparation now.
        </motion.p>
        <div className="mt-6">
          <Link href="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200 transition"
            >
              Start AI Interview 🚀
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
