"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface MusicNotationProps {
  instrument: "guitar" | "piano";
}

export function MusicNotation({ instrument }: MusicNotationProps) {

  useEffect(() => {
    // This would normally load and render the music notation
    // For this example, we're just displaying the image
  }, [instrument]);

  return (
    <Card className="bg-background h-full overflow-auto">
      <CardContent className="p-4">
        <div className="text-xs text-muted-foreground mb-2">
          {instrument === "guitar" ? "Guitar Standard Tuning" : "Piano"}
        </div>

        <div className="mb-2">
          <span className="text-xs">♩= 90</span>
          <Image
            src="https://online-musical-scales.com/beginner_guitar_sheet_music/allegro_by_giuliani/allegro-by-mauro-giuliani.gif"
            alt="music-sheet"
            width={800}
            height={400}
            className="w-full mt-2"
          />
        </div>
      </CardContent>
    </Card>
  );
}
