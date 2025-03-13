"use client";
import React from "react";

const LinkedInProfileOptimization = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-6">
      {/* Header Section */}
      <div className="w-full max-w-5xl bg-blue-600 text-white p-8 rounded-lg shadow-md mb-10">
        <h1 className="text-4xl font-bold mb-2">
          LinkedIn Profile Optimization
        </h1>
        <p className="text-lg">
          Boost your professional presence on LinkedIn with our proven
          strategies and tips.
        </p>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Profile Picture & Headline */}
        <div className="bg-white p-6 rounded-2xl shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-3 text-green-600">
            📸 Profile Picture & Headline
          </h3>
          <p className="text-gray-600 mb-4">
            Make a strong first impression with a professional profile picture
            and a headline that highlights your expertise.
          </p>
        </div>

        {/* Card 2: About Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-3 text-green-600">
            📝 About Section
          </h3>
          <p className="text-gray-600 mb-4">
            Write a compelling summary that showcases your skills, achievements,
            and career aspirations.
          </p>
        </div>

        {/* Card 3: Experience & Skills */}
        <div className="bg-white p-6 rounded-2xl shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-3 text-green-600">
            💼 Experience & Skills
          </h3>
          <p className="text-gray-600 mb-4">
            Highlight your professional experience and key skills that set you
            apart from others.
          </p>
        </div>

        {/* Card 4: Recommendations & Endorsements */}
        <div className="bg-white p-6 rounded-2xl shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-3 text-green-600">
            ⭐ Recommendations & Endorsements
          </h3>
          <p className="text-gray-600 mb-4">
            Build credibility by collecting endorsements and recommendations
            from colleagues and managers.
          </p>
        </div>
      </div>

      {/* Go Back Button */}
      <div className="mt-10">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default LinkedInProfileOptimization;
