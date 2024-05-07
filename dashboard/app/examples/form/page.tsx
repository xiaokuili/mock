"use client";
import { useFormState } from "react-dom";
import Markdown from "react-markdown";
import Add from "./action";

const know = `
const [state, dispatch] = useFormState(action, initState)
- action: function(state, formData)
- dispatch: 闭包
`;

export default function Page() {
  const [state, dispatch] = useFormState(Add, 0);
  return (
    <form
      action={dispatch}
      className="flex flex-col gap-3 items-start ml-10 mt-10"
    >
      <Markdown>{know}</Markdown>
      state: {state}
      <input name="num" type="number" />
      <button>add</button>
    </form>
  );
}
