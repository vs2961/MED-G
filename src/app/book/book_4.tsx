"use client";

import { Button } from "@/components/Button";
import { Textfield } from "@/components/TextField";
import Navigation from "@/components/navigation";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type BookProps = {
  setPage: Dispatch<SetStateAction<number>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPhone: Dispatch<SetStateAction<string>>;
  setSecondaryPhone: Dispatch<SetStateAction<string>>;
  setText: Dispatch<SetStateAction<string>>;
};


export function Book_5({ setPage, setEmail, setPhone, setSecondaryPhone, setText }: BookProps) {
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit  
  } = useForm();

  const _setValue = setValue;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    setEmail(data.email);
    setPhone(data.phone);
    setSecondaryPhone(data.secondaryPhone);
    setText(data.text);
    setPage(5)
  };

  return (
    <Navigation>
      <div className="grid grid-cols-6 mx-auto h-16">
        <button onClick={() => setPage(3)} className="ml-5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 21.308L0.692017 12L10 2.69199L11.064 3.75599L2.81902 12L11.063 20.244L10 21.308Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="w-full bg-white rounded-full h-2.5 mt-[27px] col-span-4">
          <div className="bg-[#B5F1F9] h-2.5 rounded-full w-[71%]"></div>
        </div>
        <button
          onClick={() => router.push("/home")}
          className="mr-5 mt-[20px] flex justify-end"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 21H19"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 21V8M19 21V8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 21V13H15V21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 10L12 2L22 10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <h1 className="text-center text-3xl text-white text-shadow shadow-black text-bold mb-6">
        What's your contact information?
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 mb-6">
            <Textfield name="email"  type="email" label="Email notifications will be sent at:" register={register} className="ml-5 mr-5"/>
            <Textfield name="password" label="Primary Phone Number" type="tel" register={register} className="ml-5 mr-5"/>
            <Textfield name="password" label="Secondary Phone Number (optional)" type="tel" register={register} className="ml-5 mr-5"/>
            <Textfield name="password" label="Text notifications will be sent to:" type="tel" register={register} className="ml-5 mr-5"/>
        </div>
      </form>
      <Button className="mt-8 ml-5 mr-5" label="Continue" onClick={() => setPage(5)}/>
    </Navigation>
  );
}

export default Book_5;
