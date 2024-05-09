"use client";

import { Button } from "@/components/Button";
import { Textfield } from "@/components/TextField";
import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";
import Navigation from "@/components/navigation";
import { useStore } from "@/store";
import Link from "next/link";
import { useEffect } from "react";

const Login: React.FC = () => {
  return (
    <Navigation>
      <form className="container mx-auto max-w-md p-8">
        <h1 className="text-center text-white text-4xl font-bold mb-20">
          Sign in
        </h1>
        <div className="grid gap-6 mb-6">
          <Textfield name="email" label="Email Address" />
          <Textfield name="password" label="Password" />
          <h1 className="text-white text-center mt-5">
            Don't have an account?
          </h1>
          <Link href="/signup">
            <Button
              name="signup"
              label="Sign up"
              size="w-40"
              color="bg-gray-300"
            />
          </Link>

          <Button name="login" label="Log In" size="w-60" className="mt-16" />
        </div>
      </form>
    </Navigation>
  );
};

export default Login;