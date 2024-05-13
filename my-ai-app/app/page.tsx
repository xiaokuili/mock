"use client";

import { useState } from "react";
import { continueConversation } from "./actions";
import { readStreamableValue } from "ai/rsc";
import { CoreMessage } from "ai";
import { set } from "zod";
import { Message } from "./actions";

export default function Home() {
  const [history, setHistory] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  return (
    <div>
      {history &&
        history.map((message, index) => (
          <div key={index}>{message.content as string}</div>
        ))}

      <form
        action={async () => {
          const newHistory: Message[] = [
            ...history,
            { role: "user", content: input },
          ];

          setHistory(newHistory);
          setInput("");

          const result = await continueConversation(newHistory);

          let textContent = "";
          for await (const delta of readStreamableValue(result)) {
            textContent = `${textContent}${delta}`;

            setHistory([
              ...newHistory,
              { role: "assistant", content: textContent },
            ]);
          }
        }}
      >
        <input
          name="input"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
    </div>
  );
}
