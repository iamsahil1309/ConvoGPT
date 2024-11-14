import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "./ui/sidebar";
import { NewChat } from "./NewChat";
import ProfileButton from "./ProfileButton";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function AppSidebar() {
    const session = await auth()

    if(!session) {
        redirect("/")
    }

    if(!session.user) {
        redirect("/")
    }
    const user = session.user
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <NewChat/>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
            {/* chat list */}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuItem>
                <ProfileButton user={user}/>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
