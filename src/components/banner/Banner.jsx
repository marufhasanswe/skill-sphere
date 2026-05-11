import { Button } from "@heroui/react";

import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://plus.unsplash.com/premium_photo-1663075847012-c781e0d194ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[90vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/70 flex justify-between items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white flex  justify-between">
          <div className="">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
              Upgrade Your <span className="">Skills</span> Today
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
              Master in-demand skills with expert-led courses, hands-on
              projects, and real-world learning experiences.
            </p>

            <div className="flex gap-4">
              <Link href="#">
                <Button className="">Explore Courses</Button>
              </Link>

              <Link href="/pricing">
                <Button variant="outline" className="text-white">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
