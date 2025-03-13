"use client";
import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const ResumeCoverLetterDetails = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Resume & Cover Letter Templates 📄
        </h1>
        <p className="text-xl max-w-4xl mx-auto">
          Create a strong first impression with our professional resume and
          cover letter templates. Stand out from the crowd and secure your dream
          job.
        </p>
      </section>

      {/* Content Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-blue-700 mb-8">
          Why Choose Our Templates?
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Our templates are designed by professionals and optimized for
          Applicant Tracking Systems (ATS). Whether you're a fresh graduate or
          an experienced professional, you'll find templates tailored to your
          needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md transition transform hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
                ✅ Downloadable Resume Templates (PDF & DOC)
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Choose from a variety of professional templates that highlight
                your strengths and make you shine. Easy to edit and personalize.
              </p>
            </div>
            <a
              href="https://www.canva.com/resumes/templates/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <button className="bg-blue-600 text-white font-medium py-3 rounded-full w-full hover:bg-blue-700 transition">
                Explore resumes
              </button>
            </a>
          </div>

          {/* Cover Letter Examples Card */}
          <div className="bg-white p-8 rounded-2xl shadow-md transition transform hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
                ✅ Industry-specific Cover Letter Examples
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Access cover letter samples that cater to different industries,
                helping you craft a personalized and impactful introduction.
              </p>
            </div>
            <a
              href="https://www.canva.com/templates/?query=cover%20letter"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <button className="bg-blue-600 text-white font-medium py-3 rounded-full w-full hover:bg-blue-700 transition">
                Explore templates
              </button>
            </a>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-3 text-green-600">
              ✅ Career Summary & Keywords
            </h3>
            <p className="text-gray-600 mb-4">
              Learn how to write a compelling career summary and incorporate
              relevant keywords to pass ATS screening.
            </p>
            <a
              href="/resources-page/resume-cover-letter-details/career-summary-keywords"
              target="_self"
            >
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                Learn More
              </button>
            </a>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-3 text-green-600">
              ✅ LinkedIn Profile Optimization
            </h3>
            <p className="text-gray-600 mb-4">
              Improve your LinkedIn profile with our tips to attract recruiters
              and enhance your professional online presence.
            </p>
            <a
              href="/resources-page/linkedin-profile-optimization"
              target="_self"
            >
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action & Navigation Buttons */}
      <section className="bg-blue-50 py-10 px-4 flex justify-between items-center">
        {/* Go Back Button */}
        <button
          onClick={() => window.history.back()}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Go Back
        </button>

        {/* Get Started Button */}
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

export default ResumeCoverLetterDetails;
