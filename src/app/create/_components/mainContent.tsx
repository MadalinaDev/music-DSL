"use client";

import { CodeEditor } from "./codeEditor";
import { MusicPlayer } from "./musicPlayer";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MainContent() {
  return (
    <div className="flex-1 flex flex-col bg-card">
      <div className="p-4 flex justify-center">
        <Button variant="outline" className="relative overflow-hidden group">
          <span className="absolute inset-0 bg-secondary opacity-75 blur-sm transition duration-500 group-hover:opacity-100" />
          <span className="relative flex items-center text-secondary-foreground duration-300 group-hover:text-primary/60">
            <Play className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-4" />
            Run
          </span>
        </Button>
      </div>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        <CodeEditor />
        <MusicPlayer />
      </div>
    </div>
  );
}
