import { getInstructors } from "@/lib/data";
import Image from "next/image";

export default async function TopInstructors() {
  const instructors = await getInstructors();
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Top Instructors
          </h2>
          <p className="text-gray-500 mt-2">
            Learn from industry experts and boost your skills
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((inst, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center"
            >
              <Image
                src={inst.image}
                alt={inst.name}
                width={100}
                height={100}
                className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-blue-100"
              />

              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {inst.name}
              </h3>

              <p className="text-sm text-gray-500">{inst.role}</p>

              <div className="mt-3 flex justify-center items-center gap-2 text-sm">
                <span className="text-yellow-500 font-semibold">
                  ★ {inst.rating}
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">{inst.students} students</span>
              </div>

              <button className="mt-5 w-full py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
