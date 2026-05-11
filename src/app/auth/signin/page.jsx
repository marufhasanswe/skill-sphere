"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import React from "react";
import { Check } from "@gravity-ui/icons";
import SectionTitle from "@/components/shared/SectionTitle";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SigninPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
    });
    const user = data?.user;
    if (user) {
      redirect("/auth/signin");
    }
  };
  return (
    <div className="container mx-auto h-[60vh] p-4 flex flex-col items-center justify-center">
      <SectionTitle>Sign In</SectionTitle>
      <Form
        className="flex w-96 mx-auto flex-col gap-4 bg-blue-500 p-6 rounded-xl"
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description className="text-gray-200">
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button variant="tertiary" type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SigninPage;
