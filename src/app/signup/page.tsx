
"use client";

import { Button } from "@/components/Button";
import { Textfield } from "@/components/TextField";
import Navigation from "@/components/navigation";
import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import router from "next/router";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Signup: React.FC = () => {
  const [firebaseError, setFirebaseError] = useState("");
  
  const {
    register,
    setValue,
    handleSubmit  
  } = useForm();

  const _setValue = setValue;

  const signup = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return userCredential.user.getIdToken();
      })
      .then((token) => {
        return token;
      });
  };

  // add textfield verification

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    signup(data.email as string, data.password as string)
      .then(() => {
        router.push("/");
      })
      .catch((_) => {
        setFirebaseError("Invalid login. Please check your username and password.");
      });
  };

  return (
    <Navigation>
      <form className="container mx-auto max-w-md p-8 overflow-y-auto" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center text-white text-4xl font-bold mb-3">
          Sign up
        </h1>
        <div className="grid gap-3 mb-6">
          <Textfield register={register} name="first" label="First Name" />
          <Textfield register={register} name="last" label="Last Name" />
          <Textfield register={register} name="email" label="Email Address" />
          <Textfield register={register} name="email_confirm" label="Confirm Email Address" />
          <Textfield register={register} name="password" label="Password" />
          <Textfield register={register} name="password_confirm" label="Confirm Password" />
          <Button name="create" label="Create Account" size="w-60" className="mb-10 mt-5" type="submit" />
        </div>
        {firebaseError && <h1 className="text-white text-center">{firebaseError}</h1>}
      </form>
    </Navigation>
  );
};

export default Signup;