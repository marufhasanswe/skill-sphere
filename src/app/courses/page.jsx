import CourseSearch from "@/components/CourseSearch";
import CourseCard from "@/components/shared/CourseCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { getCourses } from "@/lib/data";

const CoursesPage = async ({ searchParams }) => {
  const sp = await searchParams;
  const courses = await getCourses(sp.search);

  return (
    <div className="container mx-auto p-4">
      <SectionTitle>All Courses</SectionTitle> <CourseSearch></CourseSearch>
      <div className="grid md:grid-cols-3 gap-4">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))
        ) : (
          <h2 className="text-2xl font-semibold col-span-3 text-center my-10">
            No Courses available
          </h2>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
