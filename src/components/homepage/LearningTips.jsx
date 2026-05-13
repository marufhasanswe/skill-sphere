import React from "react";
import SectionTitle from "../shared/SectionTitle";
import { Card } from "@heroui/react";
import { GoDotFill } from "react-icons/go";

const LearningTips = () => {
  return (
    <div className="container mx-auto my-10 p-4">
      <SectionTitle>Learning Tips</SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="border bg-cyan-100 p-6 hover:shadow-xl transition duration-300">
          <h4 className="text-xl font-semibold">Study techniques:</h4>
          <ol className="list-disc list-inside space-y-4">
            <li className=" text-gray-700  font-medium">
              Active Learning:
              <p className="pl-4 text-[14px] text-gray-600">
                - Don’t just read or watch — practice, write, and apply what you
                learn
              </p>
            </li>
            <li className=" text-gray-700  font-medium">
              Take Smart Notes:
              <p className="pl-4 text-[14px] text-gray-600">
                - Use short bullet points, highlights, and summaries for better
                revision
              </p>
            </li>
            <li className=" text-gray-700  font-medium">
              Practice With Projects:
              <p className="pl-4 text-[14px] text-gray-600">
                - Build real projects to strengthen your practical skills
              </p>
            </li>
            <li className=" text-gray-700  font-medium">
              Revision Strategy:
              <p className="pl-4 text-[14px] text-gray-600">
                - Review topics regularly to improve long-term memory
              </p>
            </li>
          </ol>
        </Card>
        <Card className="border w-full bg-amber-100 p-6 hover:shadow-xl transition duration-300">
          <h4 className="text-xl font-semibold">Time management tips:</h4>
          <ol className="list-disc list-inside space-y-4">
            <li className=" text-gray-700  font-medium">
              Use a Daily Schedule:
              <p className="pl-4 text-[14px] text-gray-600">
                - Plan your study hours and break time before starting the day
              </p>
            </li>
            <li className=" text-gray-700  font-medium">
              Follow the Pomodoro Technique:
              <p className="pl-4 text-[14px] text-gray-600">
                - Study for 25 minutes, then take a 5-minute break
              </p>
            </li>
            <li className=" text-gray-700  font-medium">
              Set Small Goals:
              <p className="pl-4 text-[14px] text-gray-600">
                - Complete small tasks one by one to stay motivated
              </p>
            </li>
            <li className=" text-gray-700  font-medium">
              Limit Distractions:
              <p className="pl-4 text-[14px] text-gray-600">
                - Turn off notifications and avoid social media during study
                time
              </p>
            </li>
          </ol>
        </Card>
      </div>
    </div>
  );
};

export default LearningTips;
