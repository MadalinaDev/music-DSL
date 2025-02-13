"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";

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

  if (!isClient) return null;

  return (
    <div>
      <Button onClick={runPythonScript}>
        Click for Python script
      </Button>
      <p>{response && response}</p>
    </div>
  );
}

export default Home;