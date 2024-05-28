"use client";

import { Button } from "@/components/Button";
import { Textfield } from "@/components/TextField";
import Navigation from "@/components/navigation";
import { useRedirectToHomeIfSignedIn } from "@/hooks/redirect";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";


const Login: React.FC = () => {
  const [firebaseError, setFirebaseError] = useState("");
  const router = useRouter();

  const {
    register,
    setValue,
    handleSubmit  
  } = useForm();

  const _setValue = setValue;

  const login = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return userCredential.user.getIdToken();
      })
      .then((token) => {
        return token;
      });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    login(data.email as string, data.password as string)
      .then(() => {
        router.push("/");
      })
      .catch((_) => {
        setFirebaseError("Invalid login. Please check your username and password.");
      });
  };
  
  useRedirectToHomeIfSignedIn();
  return (
    <Navigation>
      <form className="container mx-auto max-w-md p-8" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center text-white text-4xl font-bold mb-20">
          Sign in
        </h1>
        <div className="grid gap-6 mb-6">
          <Textfield name="email"  type="email" label="Email Address" register={register}/>
          <Textfield name="password" label="Password" type="password" register={register}/>
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

          <Button label="Log In" size="w-60" className="mt-16" type="submit"/>
          {firebaseError && <h1 className="text-white text-center">{firebaseError}</h1>}
        </div>
      </form>
    </Navigation>
  );
};

export default Login;