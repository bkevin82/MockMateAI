"use client";
import { motion } from "framer-motion";
import {
  Users,
  MessageSquare,
  Briefcase,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  User,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { UserPlus, FileText, Brain, Trophy } from "lucide-react";
import Script from "next/script";

export default function LandingPage() {
  const steps = [
    {
      icon: <UserPlus size={40} className="text-white" />,
      title: "Sign Up Instantly",
      desc: "Create an account and unlock AI-powered interviews instantly.",
      extra: "It’s free and takes less than a minute.",
    },
    {
      icon: <FileText size={40} className="text-white" />,
      title: "Enter Job Details",
      desc: "Fill in job roles, experience, and skills to customize your interview.",
      extra: "The more details you add, the smarter our AI becomes.",
    },
    {
      icon: <Brain size={40} className="text-white" />,
      title: "AI Generates Questions",
      desc: "Our AI instantly crafts tailored interview questions for you.",
      extra: "Get industry-specific, experience-level-appropriate questions.",
    },
    {
      icon: <Trophy size={40} className="text-white" />,
      title: "Land Your Dream Job",
      desc: "Reach your goals with confidence through comprehensive preparation.",
      extra: "We simulate real interviews so you ace the real one!",
    },
  ];
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative">
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          MockMateAI - Your AI Interview Partner
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl text-gray-200 tracking-wide">
          Ace your interviews with AI-crafted questions – tailored just for
          you😊
        </p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/dashboard">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200 transition hover:scale-105">
              Start AI Interview 🚀
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold text-blue-600">
          🚀 Why Choose MockMateAI?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10 px-6 max-w-6xl mx-auto">
          {[
            {
              icon: <Users size={40} />,
              title: "Personalized Questions",
              desc: "AI-generated questions tailored to your experience & role.",
            },
            {
              icon: <MessageSquare size={40} />,
              title: "Real-time AI Feedback",
              desc: "Receive instant feedback and rating to improve your answers.",
            },
            {
              icon: <Briefcase size={40} />,
              title: "Industry-Specific Prep",
              desc: "Prepare for various industries & job positions.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white text-black text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#0056b3]">
          🔍 How It Works
        </h2>

        <div className="relative flex flex-col items-center w-full">
          <div className="flex flex-col space-y-16 md:space-y-24 px-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: index * 0.3,
                }}
                viewport={{ once: true }}
                className={`relative flex w-full ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`bg-[#f0f8ff] text-black p-6 md:p-10 rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl w-full md:w-[70%] lg:w-[55%] flex flex-col items-start border border-[#0056b3]
              ${
                index % 2 === 0
                  ? "ml-0 md:ml-8 lg:ml-16"
                  : "mr-0 md:mr-8 lg:mr-16"
              }`}
                >
                  <div className="flex items-center space-x-4 mb-4 md:mb-6">
                    <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#0056b3] rounded-full shadow-md md:shadow-lg">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-base md:text-lg opacity-90">{step.desc}</p>
                  <p className="text-sm md:text-base opacity-80 mt-2 md:mt-3 italic">
                    {step.extra}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16"
          >
            <Link href="/dashboard">
              <button className="bg-white border-2 border-[#0056b3] text-[#0056b3] text-lg font-semibold py-3 md:py-4 px-8 md:px-10 rounded-full shadow-md md:shadow-lg transition-all duration-300 ease-in-out flex items-center space-x-2 hover:bg-[#DCE6FF] hover:border-[#003d80] hover:text-[#003d80]">
                TRY NOW
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* review sectio */}
      <section
        id="google-reviews"
        className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-200 w-full"
      >
        <div className="w-full px-0">
          {/* Section Title */}
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-16 flex items-center justify-center">
            <span className="text-yellow-500 text-6xl animate-pulse mr-3">
              ⭐
            </span>
            <span className="border-b-8 border-blue-600 pb-3 tracking-wide">
              Google Reviews
            </span>
          </h2>

          {/* Review Widget Container */}
          <div className="w-full max-w-6xl mx-auto bg-white/50 backdrop-blur-lg shadow-2xl rounded-[30px] px-10 py-12 transition-all duration-500 hover:shadow-[0px_0px_40px_rgba(0,0,0,0.2)]">
            <div
              className={`elfsight-app-${process.env.NEXT_PUBLIC_ELFSIGHT_APP_ID}`}
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>

        {/* Elfsight Google Reviews Script */}
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
        />
      </section>
      {/* Meet the Developers */}
      {/* Meet the Developers */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-blue-600">
          👨‍💻 Meet the Developers
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          The brilliant minds behind MockMateAI
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10 px-6 max-w-6xl mx-auto">
          {[
            {
              name: "Hardik Thakor",
              role: "Backend Developer",
              desc: "Learning Node.js & Databases, with some frontend experience.",
              instagram: "https://www.instagram.com/__.hardik.__40/",
              portfolio:
                "https://thakorhardik.github.io/hardik-thakor-portfolio/",
            },
            {
              name: "Devansh Raval",
              role: "AI Enthusiast",
              desc: "Studying AI & Machine Learning concepts.",
              email: "mailto:developer2@example.com",
              instagram: "https://www.instagram.com/devansh__raval__5421__/",
              twitter: "https://twitter.com/dev2",
            },
            {
              name: "Pransh Kapuriya",
              role: "Frontend Developer",
              desc: "Exploring UI/UX & React.js development.",
              email: "mailto:developer3@example.com",
              instagram: "https://www.instagram.com/kapuriya_prans_9/",
              twitter: "https://twitter.com/dev3",
            },
          ].map((dev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center hover:scale-105 transition"
            >
              <User size={50} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold">{dev.name}</h3>
              <p className="text-sm text-gray-600 font-medium">{dev.role}</p>
              <p className="text-gray-600">{dev.desc}</p>
              <div className="flex gap-4 mt-4">
                {/* Instagram Link */}
                <a
                  href={dev.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    size={30}
                    className="text-blue-600 hover:text-blue-400 transition"
                  />
                </a>
                {/* Portfolio Button (Only for Hardik) */}
                {dev.portfolio && (
                  <a
                    href={dev.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-lg transition">
                      <Globe size={20} />
                      {/* Step Into My Work 🌐*/}
                    </button>
                  </a>
                )}
                {/* Email & Twitter Links (For Other Developers) */}
                {dev.email && (
                  <a href={dev.email}>
                    <Mail
                      size={30}
                      className="text-blue-600 hover:text-blue-400 transition"
                    />
                  </a>
                )}
                {dev.twitter && (
                  <a
                    href={dev.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter
                      size={30}
                      className="text-blue-600 hover:text-blue-400 transition"
                    />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">📩 Get in Touch..</h2>
        <p className="text-lg mb-4 text-gray-300">
          Interested in working together? We'd love to hear from you💙
        </p>
        <p className="text-lg mb-6">Have questions? Reach out to us!</p>
        <div className="flex justify-center items-center gap-6">
          <a
            href="mailto:ashokthakor161985@gmail.com"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            <Mail size={30} /> Email
          </a>
          <a
            href="https://www.instagram.com/__.hardik.__40/"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            <Instagram size={30} /> Instagram
          </a>
          <a
            href="https://linkedin.com/company/mockmateai"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            <Linkedin size={30} /> LinkedIn
          </a>
          <a
            href="https://twitter.com/mockmateai"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            <Twitter size={30} /> Twitter
          </a>
        </div>
      </section>
    </div>
  );
}
