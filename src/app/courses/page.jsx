import CourseCard from "@/components/shared/CourseCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { getCourses } from "@/lib/data";

const CoursesPage = async () => {
  const courses = await getCourses();
  return (
    <div className="container mx-auto p-4">
      <SectionTitle>All Courses</SectionTitle>
      <div className="grid md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
