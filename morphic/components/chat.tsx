"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChatPanel } from "./chat-pannel";
// import { ChatMessages } from "./chat-messages";
import { useUIState, useAIState } from "ai/rsc";

type ChatProps = {
  id?: string;
};

export function Chat({ id }: ChatProps) {
  const router = useRouter();
  const path = usePathname();
  const [messages] = useUIState();
  const [aiState] = useAIState();
  // 这两个就是各种刷新，现在还看不懂
  useEffect(() => {
    if (!path.includes("search") && messages.length === 1) {
      window.history.replaceState({}, "", `/search/${id}`);
    }
  }, [id, path, messages]);

  useEffect(() => {
    // if (aiState.messages[aiState.messages.length - 1]?.type === "followup") {
    //   // Refresh the page to chat history updates
    //   router.refresh();
    // }
  }, [aiState, router]);

  return (
    <div className='px-8 sm:px-12 pt-12 md:pt-14 pb-14 md:pb-24 max-w-3xl mx-auto flex flex-col space-y-3 md:space-y-4'>
      <ChatPanel messages={messages} />
    </div>
  );
}
