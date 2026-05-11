export const getCourses = async () => {
  const res = await fetch(
    "https://skill-sphere-three-iota.vercel.app/courses.json",
  );
  const data = await res.json();
  return data;
};

export const getInstructors = async () => {
  const res = await fetch(
    "https://skill-sphere-three-iota.vercel.app/instructors.json",
  );
  const data = await res.json();
  return data;
};
