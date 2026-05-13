export const getCourses = async (search = "") => {
  const res = await fetch(
    "https://skill-sphere-three-iota.vercel.app/data.json",
  );
  const data = await res.json();
  if (!search) return data;

  return data.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()),
  );
};

export const getInstructors = async () => {
  const res = await fetch(
    "https://skill-sphere-three-iota.vercel.app/instructors.json",
  );
  const data = await res.json();
  return data;
};
