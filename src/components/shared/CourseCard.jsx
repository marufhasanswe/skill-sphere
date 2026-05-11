import { Button, Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";

const CourseCard = ({ course }) => {
  return (
    <Card className="shadow border flex flex-col  justify-between">
      <div className="relative aspect-square h-[300px]">
        <Image
          src={course.image}
          fill
          alt={course.title}
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ></Image>
      </div>
      <h2 className="text-xl font-semibold">{course.title}</h2>
      <p className="text-gray-600">Instructor: {course.instructor}</p>
      <p className="text-gray-600 flex items-center gap-2 ">
        Rating: {course.rating}
        <BsStarFill className="text-yellow-400 "></BsStarFill>
      </p>
      <Button variant="primary" className={"w-full"}>
        View Details
      </Button>
    </Card>
  );
};

export default CourseCard;
