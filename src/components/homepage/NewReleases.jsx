import Image from "next/image";
import Link from "next/link";

export default function NewReleases() {
  const courses = [
    {
      id: 1,
      title: "Modern React Masterclass",
      category: "Web Development",
      duration: "12 Hours",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      category: "Design",
      duration: "8 Hours",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Python for Data Science",
      category: "Data Science",
      duration: "15 Hours",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Digital Marketing Bootcamp",
      category: "Marketing",
      duration: "10 Hours",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-white px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              New Releases
            </h2>
            <p className="text-gray-500 mt-2">
              Explore the latest skill-based courses
            </p>
          </div>

          <Link href={"/courses"}>
            <button className="mt-4 md:mt-0 px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              View All
            </button>
          </Link>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={500}
                  height={500}
                  className="w-full h-52 object-cover"
                />

                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  NEW
                </span>
              </div>

              <div className="p-5">
                <p className="text-sm text-blue-600 font-medium">
                  {course.category}
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mt-2">
                  {course.title}
                </h3>

                <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                  <span>{course.duration}</span>
                  <span>⭐ 4.8</span>
                </div>

                <button className="mt-5 w-full py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
