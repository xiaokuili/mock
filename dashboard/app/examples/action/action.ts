"use server";

export async function createInvoice(id: string, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const query = formData.get("query");
  console.log(id, query);
}

export async function createUser(prevState: any, formData: FormData) {
  // ...
  return {
    message: "error: Please enter a valid email",
  };
}
