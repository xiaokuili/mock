"use client";
import { useState } from "react";
import { createInvoice, createUser } from "@/app/examples/action/action";
import { useFormStatus, useFormState } from "react-dom";

const initialState: { message: string } = { message: "" };

export default function Page() {
  const [state, dapatch] = useFormState(createUser, initialState);

  return (
    <form action={dapatch}>
      {state.message && <p>{state.message}</p>}
      <input />
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Searching..." : "Search"}
    </button>
  );
}
