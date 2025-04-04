"use client";

import { useState, useEffect } from "react";
import { Home, Music, Clock, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./themeToggle";

export function Sidebar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-16 h-full bg-card flex flex-col items-center py-6 space-y-8">
      <Button
        variant="ghost"
        size="icon"
        className="text-card-foreground hover:bg-muted"
      >
        <Home className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-card-foreground hover:bg-muted"
      >
        <Music className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-card-foreground hover:bg-muted"
      >
        <Clock className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-card-foreground hover:bg-muted"
      >
        <Settings className="h-6 w-6" />
      </Button>
      <div className="mt-auto">
        <ThemeToggle />
      </div>
    </div>
  );
}
