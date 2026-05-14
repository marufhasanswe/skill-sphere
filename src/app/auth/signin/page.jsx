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
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Link from "next/link";
import { Icon } from "@iconify/react";

const SigninPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    }
    if (data?.user) {
      toast.success("Successfully Logged In!");
    }
  };
  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="container mx-auto h-[90vh] p-4  flex flex-col items-center justify-center">
      <Form
        className="flex w-80 md:w-96 mx-auto flex-col gap-4 bg-blue-400 p-6 rounded-xl shadow-2xl "
        onSubmit={onSubmit}
      >
        <h2 className="text-2xl font-semibold text-center text-white">Login</h2>
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
        <div className="flex flex-col gap-2">
          <Button
            variant="primary"
            type="submit"
            className={"w-full bg-gray-800"}
          >
            <Check />
            Submit
          </Button>
          <div className="flex items-center justify-center gap-2">
            <Link
              href={"/auth/signup"}
              className="text-gray-600 hover:text-gray-800"
            >
              Register
            </Link>
            <p className="text-center text-lg text-gray-100">Or</p>
          </div>
          <div>
            <Button
              onClick={handleGoogleSignin}
              className="w-full"
              variant="tertiary"
            >
              <Icon icon="devicon:google" />
              Sign in with Google
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SigninPage;
