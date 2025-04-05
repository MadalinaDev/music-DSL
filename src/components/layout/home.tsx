"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Home = () => {

  const router = useRouter();

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