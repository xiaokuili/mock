"use server";

import { createOpenAI } from "@ai-sdk/openai";
import { CoreMessage, generateText, streamText } from "ai";
import { string } from "zod";
import { createStreamableValue } from "ai/rsc";

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});
export interface Message {
  role: "user" | "assistant";
  content: string;
}
export async function continueConversation(history: Message[]) {
  "use server";
  const { textStream } = await streamText({
    model: openai("gpt-3.5-turbo"),
    system: "你是一个推荐电影的助手,每次回答在100字以内",
    messages: history,
  });
  const stream = createStreamableValue(textStream);

  return stream.value;
}
