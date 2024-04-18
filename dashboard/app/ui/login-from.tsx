"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import { KeyIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import clsx from "clsx";

import { lusitana } from "@/app/ui/fonts";
import { signIn } from "@/auth";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/actions";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 8 characters"),
});

export default function LoginForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function login(formdata: FormData) {
    await authenticate("Credentials", formdata);
  }
  return (
    <Form {...form}>
      <form action={login} className="space-y-8">
        <p className={clsx("text-2xl", "leading-normal", lusitana.className)}>
          Please log in to continue.
        </p>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  startIcon={AtSymbolIcon}
                  placeholder="Enter your email address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter password"
                  {...field}
                  startIcon={KeyIcon}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md flex justify-between py-5"
        >
          <span className="text-base">Log in</span>
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}
