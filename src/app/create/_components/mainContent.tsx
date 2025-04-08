"use client";

import React, { useState, useEffect } from "react";
import { CodeEditor } from "./codeEditor";
import { MusicPlayer } from "./musicPlayer";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MainContent() {
  const [response, setResponse] = useState("");

  const runPythonScript = async () => {
    const code = `
chunk1 {
    TimeSignature=4/4
    Tempo=120
    Volume=80
    Guitar(L, do, 1/4)
    Guitar(L, mi, 1/4)
    Guitar(L, sol, 1/2)
    sync {
        Guitar(L, re, 1/8)
        Guitar(L, fa, 1/8)
    }
}
  `;
    const encodedCode = encodeURIComponent(code);
    const res = await fetch(`/api/process-dsl?code=${encodedCode}`);
    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <div className="flex-1 flex flex-col bg-card min-h-[92vh]">
      <div className="p-4 flex justify-center">
        <Button
          variant="outline"
          className="relative overflow-hidden group"
          onClick={runPythonScript}
        >
          <span className="absolute inset-0 bg-secondary opacity-75 blur-sm transition duration-500 group-hover:opacity-100" />
          <span className="relative flex items-center text-secondary-foreground duration-300 group-hover:text-primary/60">
            <Play className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-4" />
            Run
          </span>
        </Button>
      </div>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        <CodeEditor />
        <MusicPlayer response={response} />
      </div>
    </div>
  );
}
