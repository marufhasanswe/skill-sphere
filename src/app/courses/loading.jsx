import { Spinner } from "@heroui/react";
import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col h-[90vh] justify-center items-center gap-2">
      <Spinner size="lg" color="accent" />
    </div>
  );
};

export default loading;
