"use client";
import React from "react";

const CareerSummaryKeywords = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Crafting a Powerful Career Summary & Effective Keywords
        </h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Your career summary is the first impression recruiters get from your
          resume. A well-written summary highlights your professional strengths,
          key experiences, and significant achievements, while effectively
          incorporating industry-specific keywords. These keywords not only help
          you pass Applicant Tracking Systems (ATS) but also demonstrate your
          alignment with the job requirements.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Key Elements of a Strong Career Summary
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Conciseness:</strong> Keep your summary brief, ideally
            within 3-5 sentences.
          </li>
          <li>
            <strong>Customization:</strong> Tailor your summary to match the
            specific role you are applying for.
          </li>
          <li>
            <strong>Quantifiable Achievements:</strong> Highlight
            accomplishments with measurable results, such as "Increased sales by
            30% in six months."
          </li>
          <li>
            <strong>Industry-Relevant Keywords:</strong> Integrate relevant
            keywords from the job description to improve your chances with ATS.
          </li>
          <li>
            <strong>Action-Oriented Language:</strong> Use strong action verbs
            like "Led," "Implemented," "Achieved," and "Managed."
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          How to Identify Effective Keywords
        </h2>
        <p className="text-gray-700 mb-6">
          Conduct research using job postings, industry blogs, and professional
          networks like LinkedIn to find out which skills and terms are highly
          valued in your field. Common keyword categories include:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Technical Skills:</strong> Specific tools, software, or
            methodologies (e.g., Python, Agile, SEO).
          </li>
          <li>
            <strong>Soft Skills:</strong> Leadership, communication,
            problem-solving.
          </li>
          <li>
            <strong>Certifications:</strong> PMP, AWS Certified, Microsoft
            Certified.
          </li>
          <li>
            <strong>Industry Jargon:</strong> Terms that demonstrate your
            expertise and understanding of the field.
          </li>
        </ul>

        <div className="mt-8 flex justify-start">
          <button
            onClick={() => window.history.back()}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerSummaryKeywords;
