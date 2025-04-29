"use client";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { useState } from "react";

export function AppSidebar() {
  const [folder, setFolder] = useState<boolean>(false);
  return (
    <Sidebar>
      <SidebarContent>
        <Button onClick={() => setFolder(!folder)}>aa</Button>
        {folder ? <div>hamburger</div> : <div>folder</div>}
      </SidebarContent>
    </Sidebar>
  );
}
