import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ChatSidebar } from "@/components/ChatSidebar";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";

interface Message {
  id: string;
  message: string;
  sender: string;
  timestamp: string;
  isSent: boolean;
}

const initialMessages: Message[] = [
  {
    id: "1",
    message: "Hey! How's the project coming along?",
    sender: "Sarah",
    timestamp: "10:30 AM",
    isSent: false,
  },
  {
    id: "2",
    message: "Going great! Just finished the new chat interface design.",
    sender: "You",
    timestamp: "10:32 AM",
    isSent: true,
  },
  {
    id: "3",
    message: "That's awesome! Can't wait to see it.",
    sender: "Sarah",
    timestamp: "10:33 AM",
    isSent: false,
  },
  {
    id: "4",
    message: "I'll share the mockups in a few minutes.",
    sender: "You",
    timestamp: "10:35 AM",
    isSent: true,
  },
];

const Index = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleSendMessage = (message: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      message,
      sender: "You",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSent: true,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <ChatSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b border-border bg-background flex items-center px-6 gap-4">
            <SidebarTrigger />
            <div className="flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-primary" />
              <div>
                <h1 className="font-semibold text-lg">General Chat</h1>
                <p className="text-xs text-muted-foreground">4 members online</p>
              </div>
            </div>
          </header>

          {/* Messages Area */}
          <main className="flex-1 overflow-y-auto bg-muted/30 p-6">
            <div className="max-w-4xl mx-auto">
              {messages.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  message={msg.message}
                  sender={msg.sender}
                  timestamp={msg.timestamp}
                  isSent={msg.isSent}
                />
              ))}
            </div>
          </main>

          {/* Input Area */}
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
