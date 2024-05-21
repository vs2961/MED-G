"use client";

import { Button } from "@/components/Button";
import Navigation from "@/components/navigation";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type BookProps = {
  setPage: Dispatch<SetStateAction<number>>;
  setReason: Dispatch<SetStateAction<string>>;
};

export function Book_4({ setPage, setReason }: BookProps) {
  const router = useRouter();
  return (
    <Navigation>
      <div className="grid grid-cols-6 mx-auto h-16">
        <button onClick={() => setPage(2)} className="ml-5">
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
          <div className="bg-[#B5F1F9] h-2.5 rounded-full w-[57%]"></div>
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
      <h1 className="text-center text-3xl text-white text-shadow shadow-black text-bold">
        A few more details
      </h1>
      <h1 className="text-center text-lg text-white shadow-black text-bold mt-3">
        What's the reason for your visit?
      </h1>
      <div className="mt-5 flex justify-centers mb-8">
        <select
          className="w-full ml-5 mr-5 rounded-lg h-[50px] text-base"
          onSelect={(value) => setReason(value.currentTarget.name)}
        >
          <option value={"Covid-19"}> Covid-19 </option>
          <option value={"Cough, wheezing"}> Cough, wheezing </option>
          <option value={"Ear ache"}> Ear ache </option>
          <option value={"Flu-like symptoms (fever, aches, chills)"}> Flu-like symptoms (fever, aches, chills) </option>
          <option value={"Insect bite or sting"}> Insect bite or sting </option>
          <option value={"Nasal congestion, runny nose, cough, sneezing"}> Nasal congestion, runny nose, cough, sneezing</option>
          <option value={"Pain, any type (neck, back, foot, leg)"}> Pain, any type (neck, back, foot, leg)</option>
          <option value={"Prescription refill"}> Prescription refill </option>
          <option value={"Rash, skin issue"}> Rash, skin issue </option>
          <option value={"Sinus symptoms"}> Sinus symptoms </option>
          <option value={"Sore throat"}> Sore throat </option>
          <option value={"Tobacco Cessation"}> Tobacco Cessation </option>
          <option value={"Upset stomach, nausea, diarrhea"}> Upset stomach, nausea, diarrhea</option>
          <option value={"Urination Symptoms"}> Urination Symptoms </option>
          <option value={"Other"}> Other</option>
        </select>
      </div>
      <label htmlFor="image" className="text-[#B5F1F9] font-bold ml-5">Upload images: optional</label> 
      <input type="file" className="hidden" id="image" name="image"/>
      <Button className="mt-8 ml-5 mr-5" label="Continue" onClick={() => setPage(4)}/>
    </Navigation>
  );
}

export default Book_4;
