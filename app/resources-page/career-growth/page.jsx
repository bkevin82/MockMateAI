// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const professionals = [
//   {
//     name: "John Smith",
//     title: "Career Coach & Leadership Mentor",
//     expertise: "Personal Branding, Salary Negotiation, Leadership Development",
//     contact: "john.smith@careermentor.com",
//   },
//   {
//     name: "Sarah Lee",
//     title: "Certified Professional Resume Writer",
//     expertise: "Resume Writing, Interview Preparation, Job Search Strategies",
//     contact: "sarah.lee@resumepro.com",
//   },
//   {
//     name: "Michael Johnson",
//     title: "Executive Coach",
//     expertise: "Management, Soft Skills Development, Public Speaking",
//     contact: "michael.johnson@exec-coach.com",
//   },
// ];

// const CareerGrowthPage = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen py-16 px-6">
//       <motion.h1
//         className="text-4xl font-bold text-center mb-10 text-blue-700"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Career Growth Resources
//       </motion.h1>

//       <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-blue-600 mb-4">
//           Maximize Your Career Potential
//         </h2>
//         <p className="text-gray-700 mb-6">
//           Whether you're negotiating a salary, building your personal brand, or
//           developing leadership skills, these resources and professionals can
//           help you advance your career.
//         </p>

//         <ul className="space-y-3 text-gray-700">
//           <li>📈 Negotiating salary and benefits with confidence</li>
//           <li>🧠 Developing leadership and soft skills</li>
//           <li>📚 Upskilling through online certifications</li>
//           <li>🌐 Building a strong personal brand and network</li>
//           <li>📖 Recommended books and courses for career growth</li>
//         </ul>
//       </section>

//       {/* Professionals Section */}
//       <section className="mt-12">
//         <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
//           Meet Our Career Experts
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {professionals.map((pro, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <h3 className="text-2xl font-bold text-blue-600">{pro.name}</h3>
//               <p className="text-gray-700 mt-2">{pro.title}</p>
//               <p className="text-sm text-gray-500 mt-1">{pro.expertise}</p>
//               <a
//                 href={`mailto:${pro.contact}`}
//                 className="text-blue-500 mt-4 inline-block"
//               >
//                 Contact: {pro.contact}
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CareerGrowthPage;

"use client";
import React from "react";
import { motion } from "framer-motion";

const CareerGrowthPage = () => {
  const professionals = [
    {
      name: "Hardik Thakor",
      specialization: "Salary Negotiation & Career Coaching",
      experience: "10+ years",
      bio: "Hardik specializes in helping professionals negotiate better salaries and benefits. His approach is strategic and results-driven.",
      contact: {
        website: "https://thakorhardik.github.io/hardik-thakor-portfolio/",
        phone: "+91 8320809049",
        email: "hardik.thakor@careermentor.com",
      },
    },
    {
      name: "Devansh Raval",
      specialization: "Personal Branding & Networking",
      experience: "8+ years",
      bio: "Devansh is an expert in building strong personal brands and effective networking strategies to boost your career prospects.",
      contact: {
        website: "https://devanshraval.com",
        phone: "+91 92655 75160",
        email: "devansh.raval@brandexpert.com",
      },
    },
    {
      name: "Prans Kapuriya",
      specialization: "Leadership & Soft Skills Development",
      experience: "12+ years",
      bio: "Prans offers training on leadership, communication, and essential soft skills to help you advance in your career.",
      contact: {
        website: "https://pranskapuriya.com",
        phone: "+91 78619 78169",
        email: "prans.kapuriya@leadershipcoach.com",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <motion.h1
        className="text-4xl font-bold text-blue-700 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Career Growth Resources
      </motion.h1>

      <section className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Focus on Career Growth?
        </motion.h2>
        <motion.p
          className="mb-6 text-gray-700"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Career growth is essential to achieving professional success and
          personal fulfillment. Whether it's negotiating your salary, developing
          leadership skills, or enhancing your personal brand, the right
          strategies can make a significant difference.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Key Growth Strategies:
        </motion.h2>
        <motion.ul
          className="list-disc list-inside mb-6 text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <li>Master salary and benefits negotiation techniques.</li>
          <li>Build a powerful personal brand and expand your network.</li>
          <li>Develop leadership qualities and soft skills.</li>
          <li>
            Engage in upskilling through online courses and certifications.
          </li>
          <li>
            Read recommended books and attend career development workshops.
          </li>
        </motion.ul>

        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Professionals
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {professionals.map((pro, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 p-6 rounded-lg shadow-sm flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold text-blue-600">{pro.name}</h3>
              <p className="text-md font-medium text-gray-800">
                {pro.specialization}
              </p>
              <p className="text-gray-600 mb-2">{pro.experience}</p>
              <p className="text-gray-700 mb-4">{pro.bio}</p>

              <div className="mt-auto">
                <p className="text-gray-600">
                  📧 Email:{" "}
                  <a
                    href={`mailto:${pro.contact.email}`}
                    className="text-blue-500"
                  >
                    {pro.contact.email}
                  </a>
                </p>
                <p className="text-gray-600">
                  🌐 Website:{" "}
                  <a
                    href={pro.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    {pro.contact.website}
                  </a>
                </p>
                <p className="text-gray-600">📞 Phone: {pro.contact.phone}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.button
          onClick={() => window.history.back()}
          className="mt-10 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Go Back
        </motion.button>
      </section>
    </div>
  );
};

export default CareerGrowthPage;
