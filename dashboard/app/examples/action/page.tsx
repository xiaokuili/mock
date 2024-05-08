"use client";
import { useActionState } from "react";
import { useState } from "react";
import { createInvoice, createUser } from "@/app/examples/action/action";
import { useFormStatus, useFormState } from "react-dom";

const initialState = { message: null, errors: {} };

function Signup() {
  //   const [state, formAction] = useActionState(createUser, initialState);
  return (
    <form action={formAction}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" required />
      {/* ... */}
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
      <button>Sign up</button>
    </form>
  );
}
export default function Page() {
  console.log(useActionState);
  console.log(useFormStatus);
  console.log(useFormState);
  console.log(useState);

  return <div></div>;
}

function Button() {
  const { pending, error, success } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Searching..." : "Search"}
    </button>
  );
}
