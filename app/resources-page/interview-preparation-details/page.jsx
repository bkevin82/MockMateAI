"use client";
import React from "react";

const InterviewPreparationDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">
        Detailed Interview Preparation Resources
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          📌 Key Interview Preparation Tips
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Common interview questions and answers.</li>
          <li>Industry-specific interview guides (IT, Marketing, Finance).</li>
          <li>Tips for answering behavioral questions effectively.</li>
          <li>How to use the STAR method for structured responses.</li>
          <li>Best practices for remote & technical interviews.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🤝 Connect with Experts
        </h2>
        <p className="text-lg">
          For personalized interview preparation, connect with industry
          professionals:
        </p>
        <div className="mt-4">
          <div className="p-4 border rounded-lg bg-gray-50 mb-4">
            <h3 className="text-xl font-bold">Hardik Thakor</h3>
            <p className="text-gray-700">IT Interview Coach</p>
            <p className="text-blue-600">Email: hardikthakor@gmail.com</p>
            <p className="text-blue-600">Phone: 8320809049</p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50 mb-4">
            <h3 className="text-xl font-bold">Devansh Raval</h3>
            <p className="text-gray-700">Finance Interview Specialist</p>
            <p className="text-blue-600">Email: devanshraval@example.com</p>
            <p className="text-blue-600">Phone: +91 92655 75160</p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50 mb-4">
            <h3 className="text-xl font-bold">Prans Kapuriya</h3>
            <p className="text-gray-700">designing interview Specialist</p>
            <p className="text-blue-600">Email: pranskapuriya@example.com</p>
            <p className="text-blue-600">Phone: +91 78619 78169</p>
          </div>
        </div>

        <button
          onClick={() => window.history.back()}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default InterviewPreparationDetails;
