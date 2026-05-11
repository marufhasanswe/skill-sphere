import { getCourses } from "@/lib/data";
import React from "react";
import SectionTitle from "../shared/SectionTitle";
import CourseCard from "../shared/CourseCard";

const PopularCourses = async () => {
  const courses = await getCourses();
  const sortedCourses = courses.sort((a, b) => b.rating - a.rating);

  return (
    <div className="container mx-auto my-10 p-4">
      <SectionTitle>Popular Courses</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortedCourses.slice(0, 3).map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
