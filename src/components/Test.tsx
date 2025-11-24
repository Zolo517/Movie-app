"use client";

import { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Test() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch movies from backend
  const searchMovies = async (q: string) => {
    if (q.trim() === "") return;

    setLoading(true);

    const res = await fetch(`/api/movies?search=${q}`);
    const data = await res.json();

    setMovies(data.movies || []);
    setLoading(false);
  };

  // search on typing
  useEffect(() => {
    const timer = setTimeout(() => {
      searchMovies(query);
    }, 350);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {/* Input acting like button */}
      <PopoverTrigger asChild>
        <button
          className="w-full text-left px-3 py-2 border rounded-lg bg-white text-gray-500"
        >
          Search movies...
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-72 p-4">
        {/* Actual search input */}
        <Input
          placeholder="Search movies…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />

        <div className="mt-3 space-y-2 max-h-60 overflow-y-auto">
          {loading && <p className="text-sm">Loading…</p>}

          {!loading &&
            movies.map((movie: any) => (
              <div
                key={movie.id}
                className="p-2 border rounded hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  console.log("Selected movie", movie);
                  setOpen(false);
                }}
              >
                {movie.title}
              </div>
            ))}

          {!loading && movies.length === 0 && query.length > 0 && (
            <p className="text-sm text-gray-500">No results</p>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}