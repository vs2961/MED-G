"use client";

import { Button } from "@/components/Button";
import { Textfield } from "@/components/TextField";
import Navigation from "@/components/navigation";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useRef } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type BookProps = {
  setPage: Dispatch<SetStateAction<number>>;
  setLocation: Dispatch<SetStateAction<string>>;
};

export function Book_6({ setPage, setLocation }: BookProps) {
  const router = useRouter();

  const { register, setValue, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    setLocation(data.location);
    setPage(6);
  };

  const locations = {
    "Ralphs Pharmacy": ["8657 Villa La Jolla La Jolla, CA 92037"],
    "Strive Pharmacy": ["8950 Villa La Jolla Dr. Ste C225 La Jolla, CA 92037"],
    "Cvs/ pharmacy # 9195": ["8831 Villa La Jolla Dr La Jolla, CA 92037"],
  };

  return (
    <Navigation>
      <div className="grid grid-cols-6 mx-auto h-16">
        <button onClick={() => setPage(4)} className="ml-5">
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
          <div className="bg-[#B5F1F9] h-2.5 rounded-full w-[85%]"></div>
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
        Select a pharmacy for store pickup
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 mb-6">
          {Object.entries(locations).map((location) => {
            return <div className="mb-5 ml-5 mr-5">
              <div className="bg-white rounded-lg flex items-center justify-between w-full ">
                <label className="ml-4 w-full mt-4 mb-4" htmlFor={location[0]}>
                  <h1 className="font-bold">{location[0]}</h1>
                  <h1 className="text-gray-500 text-xs">
                    {location[1]}
                  </h1>
                </label>
                <input type="radio" name="location" id={location[0]} className="mr-5" />
              </div>
            </div>;
          })}
        </div>
      </form>
      <Button
        className="mt-8 ml-5 mr-5"
        label="Continue"
        onClick={() => setPage(6)}
      />
    </Navigation>
  );
}

export default Book_6;
