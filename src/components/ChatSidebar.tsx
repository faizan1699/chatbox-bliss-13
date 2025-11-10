import { MessageSquare } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread?: number;
}

const conversations: Conversation[] = [
  {
    id: "1",
    name: "General Chat",
    lastMessage: "Hey, how's it going?",
    timestamp: "2m ago",
    unread: 3,
  },
  {
    id: "2",
    name: "Project Team",
    lastMessage: "Meeting at 3pm",
    timestamp: "1h ago",
  },
  {
    id: "3",
    name: "Design Discussion",
    lastMessage: "Love the new mockups!",
    timestamp: "3h ago",
  },
  {
    id: "4",
    name: "Random",
    lastMessage: "Check out this article",
    timestamp: "Yesterday",
  },
];

export function ChatSidebar() {
  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold px-4 py-3">
            Messages
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {conversations.map((conversation) => (
                <SidebarMenuItem key={conversation.id}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={`/?chat=${conversation.id}`}
                      className="flex items-start gap-3 p-3 hover:bg-sidebar-accent rounded-lg transition-colors"
                      activeClassName="bg-sidebar-accent"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <MessageSquare className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm truncate">
                            {conversation.name}
                          </span>
                          {conversation.unread && (
                            <span className="flex-shrink-0 ml-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-0.5 rounded-full">
                              {conversation.unread}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-muted-foreground truncate flex-1">
                            {conversation.lastMessage}
                          </p>
                          <span className="flex-shrink-0 ml-2 text-xs text-muted-foreground">
                            {conversation.timestamp}
                          </span>
                        </div>
                      </div>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
