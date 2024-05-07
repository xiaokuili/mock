"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function Add(prevState, formData) {
  const state = prevState + formData.get("num");

  console.log("fetch data...");
  revalidatePath("/examples");
  redirect("/examples");

  return state;
}
