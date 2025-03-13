// "use client";
// import { motion } from "framer-motion";
// import { UserPlus, FileText, Brain, CheckCircle } from "lucide-react";
// import Link from "next/link";

// export default function HowItWorks() {
//   const steps = [
//     {
//       icon: <UserPlus size={40} />,
//       title: "Step 1: Sign Up",
//       desc: "Create your free account in seconds.",
//       details: "Get instant access to AI-powered interview prep by signing up.",
//     },
//     {
//       icon: <FileText size={40} />,
//       title: "Step 2: Enter Your Details",
//       desc: "Provide job role, experience & skills.",
//       details: "Personalized interview questions based on your inputs.",
//     },
//     {
//       icon: <Brain size={40} />,
//       title: "Step 3: Get AI-Powered Questions",
//       desc: "Receive tailor-made interview questions.",
//       details: "Practice with real-world interview scenarios and feedback.",
//     },
//     {
//       icon: <CheckCircle size={40} />,
//       title: "Step 4: Ace Your Interview",
//       desc: "Practice, improve, and land your dream job!",
//       details: "Boost confidence and ace any job interview effortlessly.",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen text-gray-900 font-sans">
//       {/* Hero Section */}
//       <section className="h-80 flex flex-col items-center justify-center text-center px-6 bg-blue-700 text-white">
//         <motion.h1
//           className="text-5xl font-extrabold mb-4"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           How MockMateAI Works
//         </motion.h1>
//         <p className="text-lg max-w-2xl text-gray-200">
//           A step-by-step guide to mastering your next interview with AI-powered
//           simulations.
//         </p>
//       </section>

//       {/* Steps Section (Updated Layout) */}
//       <section className="py-16 px-6">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 justify-center items-center">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="relative bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition transform hover:scale-105 group"
//             >
//               <div className="text-blue-600 mb-4">{step.icon}</div>
//               <h3 className="text-lg font-semibold">{step.title}</h3>
//               <p className="text-gray-600">{step.desc}</p>

//               {/* Hover Effect - Show Details */}
//               <motion.div className="absolute inset-0 bg-white p-6 rounded-xl shadow-lg flex items-center justify-center text-gray-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 {step.details}
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Start Interview Button */}
//       <section className="py-12 bg-blue-600 text-white text-center">
//         <h2 className="text-3xl font-bold">Ready to Start?</h2>
//         <p className="text-lg mt-2">
//           Take your first AI-powered interview now.
//         </p>
//         <motion.div
//           className="mt-6"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <Link href="/dashboard">
//             <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200 transition hover:scale-105">
//               Start AI Interview 🚀
//             </button>
//           </Link>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { UserPlus, FileText, Brain, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus size={50} />, // Increased size for better visibility
      title: "Step 1: Sign Up",
      // desc: "Create your free account in seconds.",
      // details:
      //   "Get instant access to AI-powered interview prep by signing up. No payment required!",
      desc: "Create your free account in seconds and start your journey.",
      details:
        "Sign up quickly and explore AI-powered interview preparation. Enjoy free access to basic features, with premium plans available for advanced insights and personalized coaching. Get started today and upgrade anytime to unlock the full potential of MockMateAI.",
    },
    {
      icon: <FileText size={50} />, // Increased size for better visibility
      title: "Step 2: Enter Your Details",
      // desc: "Provide job role, experience & skills.",
      // details:
      //   "Customize your interview experience based on your career goals and expertise level.",
      desc: "Provide job role, experience & skills to personalize your AI interview.",
      details:
        "Customize your interview experience based on your career goals, industry, and expertise level. The more details you add, the smarter our AI adapts to your needs.",
    },
    {
      icon: <Brain size={50} />, // Increased size for better visibility
      title: "Step 3: Get AI-Powered Questions",
      // desc: "Receive tailor-made interview questions.",
      // details:
      //   "Practice with real-world scenarios and get AI-generated insights to improve your answers.",
      desc: "Receive tailor-made interview questions designed specifically for your job role and experience level.",
      details:
        "Our AI crafts intelligent, industry-specific questions based on your input. Practice with real-world interview scenarios, receive AI-generated insights, and get personalized feedback on your responses. Identify strengths, improve weak areas, and boost your confidence before the actual interview!",
    },
    {
      icon: <CheckCircle size={50} />, // Increased size for better visibility
      title: "Step 4: Ace Your Interview",
      // desc: "Practice, improve, and land your dream job!",
      // details:
      //   "Boost confidence, refine communication, and impress your interviewer effortlessly!",
      desc: "Master your interview skills with AI-driven mock sessions and land your dream job!",
      details:
        "Gain confidence with instant AI feedback, improve your answers with expert-designed questions, and practice effectively. Experience real interview scenarios, reduce nervousness, and stand out from other candidates with smart insights!",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="h-80 flex flex-col items-center justify-center text-center px-6 bg-blue-700 text-white">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          How MockMateAI Works
        </motion.h1>
        <p className="text-lg max-w-2xl text-gray-200">
          A step-by-step guide to mastering your next interview with AI-powered
          simulations.
        </p>
      </section>

      {/* Steps Section (Updated 2x2 Layout) */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition transform hover:scale-105 group flex flex-col items-center"
            >
              <div className="text-blue-600 mb-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.desc}</p>

              {/* Hover Effect - Show Details */}
              <motion.div className="absolute inset-0 bg-white p-8 rounded-2xl shadow-2xl flex items-center justify-center text-gray-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {step.details}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Start Interview Button */}
      <section className="py-12 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Start?</h2>
        <p className="text-lg mt-2">
          Take your first AI-powered interview now.
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
    </div>
  );
}
