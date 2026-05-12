import CourseCurriculum from "@/components/CourseCurriculum";
import SectionTitle from "@/components/shared/SectionTitle";
import { getCourses } from "@/lib/data";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BsStarFill } from "react-icons/bs";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const courses = await getCourses();
  const course = courses.find((c) => c.id == id);
  return (
    <>
      <div className="container mx-auto p-4">
        <SectionTitle className="text-center text-3xl md:mb-4">
          Course details
        </SectionTitle>
        <Card className="max-w-4xl p-6 mx-auto shadow border flex flex-col  justify-between">
          <h2 className="text-xl font-semibold">{course.title}</h2>
          <p className="text-gray-500">{course.description}</p>
          <div className="relative aspect-square h-[300px] md:h-[400px]">
            <Image
              src={course.image}
              fill
              alt={course.title}
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
          </div>

          <div className="grid md:grid-cols-2 gap-2 text-gray-600 mt-4">
            <p>Instructor: {course.instructor}</p>
            <p>Duration: {course.duration}</p>
            <p>Level: {course.level}</p>
            <p>Category: {course.category}</p>
            <p className="flex items-center gap-2 ">
              Rating: {course.rating}
              <BsStarFill className="text-yellow-400 "></BsStarFill>
            </p>
          </div>
          <Link href={"/courses"}>
            <Button className={"w-full"}>All Courses</Button>
          </Link>
        </Card>
      </div>
      <CourseCurriculum></CourseCurriculum>
    </>
  );
};

export default CourseDetailsPage;
