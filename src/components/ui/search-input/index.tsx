"use client";

import React from "react";
import Input from "../input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  label?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  className,
  placeholder = "Search",
  label = "Search input",
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (term) {
      params.set("searchValue", term);
    } else {
      params.delete("searchValue");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Input
      aria-label={label}
      placeholder={placeholder}
      startContent={<MagnifyingGlassIcon width={20} />}
      className={clsx(className, "w-1/4")}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default SearchInput;
