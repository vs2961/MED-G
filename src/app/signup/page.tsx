
"use client";

import { Button } from "@/components/Button";
import { Textfield } from "@/components/TextField";
import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";
import Navigation from "@/components/navigation";
import { useStore } from "@/store";
import Link from "next/link";
import { useEffect } from "react";

const Signup: React.FC = () => {
  return (
    <Navigation>
      <form className="container mx-auto max-w-md p-8">
        <h1 className="text-center text-white text-4xl font-bold mb-5">
          Sign up
        </h1>
        <div className="grid gap-6 mb-6">
          <Textfield name="first" label="First Name" />
          <Textfield name="last" label="Last Name" />
          <Textfield name="email" label="Email Address" />
          <Textfield name="email_confirm" label="Confirm Email Address" />
          <Textfield name="password" label="Password" />
          <Textfield name="password_confirm" label="Confirm Password" />
          <Button name="create" label="Create Account" size="w-60" className="" />
        </div>
      </form>
    </Navigation>
  );
};

export default Signup;