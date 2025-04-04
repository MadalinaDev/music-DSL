"use server";

import { Sidebar } from "./_components/sidebar";
import { MainContent } from "./_components/mainContent";

export default async function Home() {
  return (
    <div className="flex h-full bg-background">
      <Sidebar />
      <MainContent />
    </div>
  );
}
