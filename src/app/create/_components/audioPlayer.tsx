"use client";

import { useState } from "react";
import { Play, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(203); // 3:23 in seconds

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center space-x-2 bg-muted rounded-md p-2">
      <Button
        variant="ghost"
        size="icon"
        className="bg-primary hover:bg-primary/90 rounded-full h-8 w-8 p-0 flex items-center justify-center"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        <Play className="h-4 w-4 text-primary-foreground" />
      </Button>
      <span className="text-xs text-muted-foreground w-8">
        {formatTime(currentTime)}
      </span>
      <Slider
        value={[currentTime]}
        max={duration}
        step={1}
        className="flex-1"
        onValueChange={(value) => setCurrentTime(value[0])}
      />
      <span className="text-xs text-muted-foreground w-8">
        {formatTime(duration)}
      </span>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground hover:text-primary-foreground"
      >
        <Download className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground hover:text-primary-foreground"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
