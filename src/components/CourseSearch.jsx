"use client";

import { Button, Form, SearchField } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const CourseSearch = () => {
  const [searchInput, setSearchInput] = useState();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPath = usePathname();

  const handleSearchBtn = () => {
    const params = new URLSearchParams(searchParams);
    if (searchInput) {
      params.set("search", searchInput);
    } else {
      params.delete("search");
    }
    router.push(`${currentPath}?${params.toString()}`);
  };
  return (
    <div className="flex gap-2 my-4">
      <SearchField
        name="search"
        value={searchInput}
        onChange={setSearchInput}
        className={"border rounded-xl"}
      >
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input className="w-[200px]" placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>
      <Button onClick={handleSearchBtn}>Search</Button>
    </div>
  );
};

export default CourseSearch;
