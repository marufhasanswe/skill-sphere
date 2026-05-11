import React from "react";

const SectionTitle = ({ children, className }) => {
  return (
    <>
      <h2 className={`text-2xl font-semibold my-4 ${className}`}>{children}</h2>
    </>
  );
};

export default SectionTitle;
