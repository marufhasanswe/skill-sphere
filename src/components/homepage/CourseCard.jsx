import { Button, Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const CourseCard = ({ course }) => {
  return (
    <Card className="shadow border">
      <div className="relative w-full aspect-square">
        <Image
          src={course.image}
          fill
          alt={course.title}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ></Image>
      </div>
      <h2>{course.title}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>{course.rating}</p>
      <Button>View Details</Button>
    </Card>
  );
};

export default CourseCard;
