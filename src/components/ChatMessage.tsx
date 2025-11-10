import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  sender: string;
  timestamp: string;
  isSent?: boolean;
}

export function ChatMessage({ message, sender, timestamp, isSent = false }: ChatMessageProps) {
  return (
    <div className={cn("flex gap-3 mb-4", isSent && "flex-row-reverse")}>
      <Avatar className="h-8 w-8 flex-shrink-0">
        <AvatarFallback className={cn(
          "text-xs font-medium",
          isSent ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
        )}>
          {sender.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className={cn("flex flex-col", isSent ? "items-end" : "items-start")}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-foreground">{sender}</span>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        <div
          className={cn(
            "rounded-2xl px-4 py-2 max-w-md break-words",
            isSent
              ? "bg-chat-bubble-sent text-chat-bubble-sent-foreground rounded-tr-sm"
              : "bg-chat-bubble-received text-chat-bubble-received-foreground rounded-tl-sm"
          )}
        >
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
}
