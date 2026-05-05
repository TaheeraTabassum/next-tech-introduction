"use client"
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState([]);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`;
    router.push(url);
  }, [search]);
  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="search your meal..."
        onChange={(e) => setSearch(e.target.value)}
        className="border p-1"
      />
    </div>
  );
}
