"use server";
import {
  StreamableValue,
  createAI,
  createStreamableUI,
  createStreamableValue,
  getAIState,
  getMutableAIState,
  streamUI,
} from "ai/rsc";
import { AIMessage } from "@/lib/types";
import { nanoid } from "nanoid";
import { openai } from "@ai-sdk/openai";

export type UIState = {
  id: string;
  component: React.ReactNode;
  isGenerating?: StreamableValue<boolean>;
  isCollapsed?: StreamableValue<boolean>;
}[];

export type AIState = {
  messages: AIMessage[];
  chatId: string;
  isSharePage?: boolean;
};

export async function submit(input: string): Promise<any> {
  "use server";

  const history = getMutableAIState();
  // const result = await streamUI({
  //   model: openai("gpt-3.5-turbo"),
  //   messages: [...history.get(), { role: "user", content: input }],
  // });

  return {
    id: nanoid(),
    role: "assistant",
  };
}

export const AI = createAI({
  actions: {
    submit,
  },
  initialAIState: [],
  initialUIState: [],
});
