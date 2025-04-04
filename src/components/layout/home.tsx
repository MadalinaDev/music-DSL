"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Home = () => {
  const [response, setResponse] = useState("");

  const runPythonScript = async () => {
    const res = await fetch("/api/process-dsl");
    const data = await res.json();
    setResponse(data.message);
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const router = useRouter();

  if (!isClient) return null;

  return (
    <div className="h-[92vh] flex justify-center items-center">
      <Button
        onClick={() => {
          router.push("/create");
        }}
      >
        Start
      </Button>
    </div>
  );
}

export default Home;