"use client";

import { Button } from "@/components/Button";
import { Textfield } from "@/components/TextField";
import Navigation from "@/components/navigation";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type BookProps = {
  setPage: Dispatch<SetStateAction<number>>;
};

export function Book_7({ setPage }: BookProps) {
  const router = useRouter();
  return (
    <Navigation>
      <div className="grid grid-cols-6 mx-auto h-16">
        <button onClick={() => setPage(5)} className="ml-5">
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
          <div className="bg-[#B5F1F9] h-2.5 rounded-full w-[100%]"></div>
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
        How will you pay for this visit?
      </h1>
      <div className="w-full flex">
      <div className="bg-white rounded-lg flex items-center w-full ml-5 mr-5">
        <div className="ml-4 w-full mt-4 mb-4 mr-5">
          <h1 className="font-bold">This visit will cost</h1>
          <h1 className="text-black font-bold text-xl">$89.00</h1>
        </div>
      </div></div>

      <Button
        className="mt-8 ml-5 mr-5"
        label="Pay Now"
        onClick={() => setPage(7)}
      />
    </Navigation>
  );
}

export default Book_7;
