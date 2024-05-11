"use server";
import { createOpenAI } from "@ai-sdk/openai";
import { CoreMessage, streamText } from "ai";
import { createStreamableUI, createStreamableValue } from "ai/rsc";
import { set } from "zod";
import { UpdateUI, DoneUI } from "./ui";
import { Update } from "next/dist/build/swc";

async function Chat(messages: CoreMessage[]) {
  const openai = createOpenAI({
    baseURL: process.env.OPENAI_BASE_URL,
    apiKey: process.env.OPENAI_API_KEY,
  });
  console.log({
    baseURL: process.env.OPENAI_BASE_URL,
    apiKey: process.env.OPENAI_API_KEY,
  });
  const result = await streamText({
    model: openai("gpt-3.5-turbo"),
    messages,
  });
  const stream = createStreamableValue(result.textStream);
  return stream.value;
}

function ChatUI() {
  const ui = createStreamableUI();
  ui.update(UpdateUI());
  setTimeout(() => {
    ui.done(DoneUI());
  }, 1000);
  return ui.value;
}

export { Chat, ChatUI };
