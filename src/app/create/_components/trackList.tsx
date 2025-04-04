"use client";

import { useState, useEffect } from "react";
import { AudioPlayer } from "./audioPlayer";

interface Track {
  id: number;
  name: string;
}

export function TrackList() {
  const [tracks, setTracks] = useState<Track[]>([
    { id: 1, name: "Track 1" },
    { id: 2, name: "Track 2" },
    { id: 3, name: "Track 3" },
    { id: 4, name: "Track 4" },
    { id: 5, name: "Track 5" },
    { id: 6, name: "Track 6" },
    { id: 7, name: "Track 7" },
    { id: 8, name: "Track 8" },
  ]);

  const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return null;

  return (
    <div className="flex flex-col space-y-2">
      {tracks.map((track) => (
        <div key={track.id} className="bg-zinc-800 rounded-md p-2">
          <AudioPlayer />
        </div>
      ))}
    </div>
  );
}
