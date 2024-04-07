"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { apiUrl } from "@/consts";
console.log("apiUrl:",apiUrl)

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<{
    results: string[];
    duration: number;
  }>();

  useEffect(() => {
    const fetchData = async () => {
      if (!input) return setSearchResults(undefined);

      const res = await fetch(`${apiUrl}/api/search?q=${input}`);
      const data = await res.json();
      console.log("data", data);
      setSearchResults(data);
    };
    fetchData();
  }, [input]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md text-zinc-900"
      />
      <p>
        {searchResults?.results.map((result, index) => (
          <p key={index}>{result}</p>
        ))}
      </p>
      <p>{searchResults?.duration}</p>
    </div>
  );
}
