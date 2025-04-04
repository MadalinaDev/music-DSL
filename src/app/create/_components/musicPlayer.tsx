"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AudioPlayer } from "./audioPlayer";
import { Music } from "lucide-react";
import { MusicNotation } from "./musicNotation";

export function MusicPlayer() {

  return (
    <Card className="bg-card border border-muted-foreground overflow-hidden">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="p-2 border-b border-muted-foreground flex items-center">
          <Music className="h-5 w-5 text-primary mr-2" />
        </div>
        <div className="p-4">
          <AudioPlayer />
        </div>
        <Tabs defaultValue="guitar1" className="flex-1">
          <TabsList className="bg-muted p-0 h-10">
            <TabsTrigger
              value="guitar1"
              className="data-[state=active]:bg-muted/80 rounded-none flex items-center h-full"
            >
              <span className="h-4 w-4 mr-2 text-primary">🎸</span>
              Guitar 
            </TabsTrigger>
            <TabsTrigger
              value="piano1"
              className="data-[state=active]:bg-muted/50 rounded-none flex items-center h-full"
            >
              <span className="h-4 w-4 mr-2">🎹</span>
              Piano 
            </TabsTrigger>
          </TabsList>
          <TabsContent value="guitar1" className="flex-1 m-0">
            <MusicNotation instrument="guitar" />
          </TabsContent>
          <TabsContent value="piano1" className="flex-1 m-0">
            <MusicNotation instrument="piano" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
