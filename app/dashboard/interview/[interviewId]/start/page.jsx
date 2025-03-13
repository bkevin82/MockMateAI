"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { use } from "react";
import QustionsSection from "./_components/QustionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function StartInterview({ params }) {
  const resolvedParams = use(params);
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQustion, setMockInterviewQustion] = useState();

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  useEffect(() => {
    GetInterviewDetails();
  }, [resolvedParams]);

  /**
   * interview ni badhij details GetInterviewDetails function thi mli jse mockId ane interviewId ni help thi
   */

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, resolvedParams.interviewId));

    const jasonMockResp = JSON.parse(result[0].jasonMockResp);
    console.log(jasonMockResp);
    setMockInterviewQustion(jasonMockResp);
    setInterviewData(result[0]);
    // console.log("Mock ID:", interviewData?.mockId);
    // console.log("Database Query Result:", result);
    // console.log("Parsed JSON Response:", jasonMockResp);
    // console.log("Resolved Params:", resolvedParams);
    // console.log("Interview ID:", resolvedParams?.interviewId);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Qustions */}
        <QustionsSection
          mockInterviewQustion={mockInterviewQustion}
          activeQuestionIndex={activeQuestionIndex}
        />

        {/* Video/Audio Recording */}

        <RecordAnswerSection
          mockInterviewQustion={mockInterviewQustion}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
        />
      </div>
      <div className="flex justify-end gap-6">
        {activeQuestionIndex > 0 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
          >
            Previous Question
          </Button>
        )}
        {activeQuestionIndex != mockInterviewQustion?.length - 1 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
          >
            Next Question
          </Button>
        )}
        {activeQuestionIndex == mockInterviewQustion?.length - 1 && (
          <Link
            // href={"/dashboard/interview" + interviewData?.mockId + "/feedback"}
            href={`/dashboard/interview/${interviewData?.mockId}/feedback`}
          >
            <Button>End Interview</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default StartInterview;
