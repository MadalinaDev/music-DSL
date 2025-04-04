"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Code, X } from "lucide-react";
import { nanoid } from "nanoid";

interface Chunk {
  id: string;
  content: string;
}

export function CodeEditor() {
  const [chunks, setChunks] = useState<Chunk[]>([
    { id: nanoid(), content: "" },
  ]);

  const addChunk = () => {
    const newChunk = {
      id: nanoid(),
      content: "",
    };
    setChunks([...chunks, newChunk]);
  };

  const handleContentChange = (id: string, value: string) => {
    setChunks(
      chunks.map((chunk) =>
        chunk.id === id ? { ...chunk, content: value } : chunk
      )
    );
  };

  const deleteChunk = (id: string) => {
    if (chunks.length > 1) {
      setChunks(chunks.filter((chunk) => chunk.id !== id));
    }
  };

  const autoResize = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    target.style.height = "auto";
    target.style.height = target.scrollHeight + "px";
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Card className="bg-card border border-muted-foreground overflow-hidden">
      <div className="p-2 border-b border-muted-foreground flex items-center">
        <Code className="h-5 w-5 text-muted-foreground mr-2" />
        <span className="text-primary text-sm">/</span>
      </div>
      <CardContent className="p-0">
        <div className="flex flex-col space-y-2 p-4">
          {chunks.map((chunk) => (
            <div key={chunk.id} className="relative">
              <textarea
                className="w-full bg-card border border-muted-foreground p-4 rounded-md text-muted-foreground placeholder:text-muted-foreground resize-none overflow-hidden"
                value={chunk.content}
                onChange={(e) => handleContentChange(chunk.id, e.target.value)}
                onInput={autoResize}
                style={{ minHeight: "3rem" }}
              />
              {chunks.length > 1 && (
                <X
                  className="h-4 w-4 absolute top-2 right-2 cursor-pointer"
                  onClick={() => deleteChunk(chunk.id)}
                />
              )}
            </div>
          ))}
          <div className="flex justify-center mt-4">
            <Button variant="outline" onClick={addChunk}>
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
