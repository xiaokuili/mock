"use client";
import { CoreMessage } from "ai";
import { useState } from "react";
import { Chat, ChatUI } from "./action";
import { readStreamableValue } from "ai/rsc";

export default function Home() {
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState<string>("");
  const [ui, setUI] = useState<JSX.Element>();

  return (
    <div>
      {ui}
      {messages.map((message, i) => (
        <div key={i}>
          <p>{message.content as string}</p>
        </div>
      ))}
      <form
        action={async () => {
          const newMessages: CoreMessage[] = [
            ...messages,
            { content: input, role: "user" },
          ];
          setMessages(newMessages);
          setInput("");

          const result = await Chat(newMessages);
          for await (const content of readStreamableValue(result)) {
            setMessages([
              ...newMessages,
              { role: "assistant", content: content as string },
            ]);
          }
          const ui = await ChatUI();
          setUI(ui);
        }}
      >
        <input
          name="chat"
          id="chat"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}
