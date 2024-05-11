import { createOpenAI } from "@ai-sdk/openai";
import { StreamingTextResponse, streamText, StreamData } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const openai = createOpenAI({
    baseURL: process.env.OPENAI_BASE_URL,
    apiKey: process.env.OPENAI_API_KEY,
  });
  const result = await streamText({
    model: openai("gpt-3.5-turbo"),
    messages,
  });

  const data = new StreamData();

  data.append("this is my test stream data");

  const stream = result.toAIStream({
    onFinal(_) {
      data.close();
    },
  });

  return new StreamingTextResponse(stream, {}, data);
}
