"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const UpgradePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-blue-700 mb-6">
        Upgrade to Premium
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl text-center">
        We're excited to announce that our web app is currently{" "}
        <span className="font-semibold">completely free</span> for all users.
        Our goal is to provide you with the best tools and resources to support
        your career journey.
        <br />
        <br />
        In the future, we plan to introduce premium features that will enhance
        your experience even further, offering advanced tools and personalized
        services. Stay tuned for exciting updates, and enjoy the full range of
        our offerings at no cost—for now!
      </p>

      <Link href="/dashboard">
        <button className="flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:from-blue-700 hover:to-blue-600 transition duration-300 ease-in-out">
          <span className="mr-2">Go to Dashboard</span>
          <ArrowRight size={20} />
        </button>
      </Link>
    </div>
  );
};

export default UpgradePage;
