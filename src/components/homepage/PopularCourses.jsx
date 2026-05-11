import { getCourses } from "@/lib/data";
import React from "react";
import CourseCard from "./CourseCard";

const PopularCourses = async () => {
  const courses = await getCourses();

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-semibold my-4">Popular Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
