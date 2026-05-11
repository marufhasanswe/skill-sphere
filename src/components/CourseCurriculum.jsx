export default function CourseCurriculum() {
  const curriculum = [
    {
      week: "Week 1",
      title: "Introduction & Fundamentals",
      topics: [
        "Course Overview",
        "Setup & Tools Installation",
        "How the Web Works",
        "HTML Basics",
      ],
    },
    {
      week: "Week 2",
      title: "Styling & Layout",
      topics: [
        "CSS Fundamentals",
        "Flexbox & Grid",
        "Responsive Design",
        "Tailwind CSS Basics",
      ],
    },
    {
      week: "Week 3",
      title: "JavaScript Essentials",
      topics: [
        "Variables & Data Types",
        "Functions & Arrays",
        "DOM Manipulation",
        "ES6 Features",
      ],
    },
    {
      week: "Week 4",
      title: "React & Components",
      topics: [
        "React Basics",
        "Components & Props",
        "State & Events",
        "Hooks Introduction",
      ],
    },
    {
      week: "Week 5",
      title: "Final Project",
      topics: [
        "Project Planning",
        "Building UI",
        "API Integration",
        "Deployment",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 mt-10 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Course Curriculum
          </h2>
          <p className="text-gray-500 mt-2">
            Step-by-step learning path to master skills
          </p>
        </div>

        {/* Curriculum List */}
        <div className="space-y-6">
          {curriculum.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border p-5 hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-blue-600">
                    {item.week}
                  </h3>
                  <h4 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h4>
                </div>
              </div>

              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600">
                {item.topics.map((topic, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
