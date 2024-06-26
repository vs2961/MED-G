"use client";

import { Button } from "@/components/Button";
import Navigation from "@/components/navigation";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type BookProps = {
  setPage: Dispatch<SetStateAction<number>>;
  setDoctor: Dispatch<SetStateAction<string>>;
  setTime: Dispatch<SetStateAction<string>>;
};

export function Book_2({ setPage, setDoctor, setTime }: BookProps) {
  const router = useRouter();
  const appointments = {
    ASAP: ["First Available"],
    "5:30": ["Dr.XYZ", "Dr.XYZ", "Dr.XYZ"],
    "6:30": ["Dr.XYZ"],
  };
  return (
    <Navigation>
      <div className="grid grid-cols-6 mx-auto h-16">
        <button onClick={() => setPage(0)} className="ml-5">
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
          <div className="bg-[#B5F1F9] h-2.5 rounded-full w-[28%]"></div>
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
        Select an appointment for yourself
      </h1>
      <div className="mb-20">
        {Object.entries(appointments).map(([time, doctors]) => {
          return (
            <div>
              <div className="rounded-lg flex items-center justify-left m-8 mb-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.4375C10.1087 2.4375 8.25991 2.99833 6.68736 4.04907C5.11482 5.09981 3.88917 6.59327 3.16541 8.34059C2.44164 10.0879 2.25227 12.0106 2.62125 13.8656C2.99022 15.7205 3.90096 17.4244 5.2383 18.7617C6.57564 20.099 8.27951 21.0098 10.1345 21.3788C11.9894 21.7477 13.9121 21.5584 15.6594 20.8346C17.4067 20.1108 18.9002 18.8852 19.9509 17.3126C21.0017 15.7401 21.5625 13.8913 21.5625 12C21.5595 9.46478 20.5511 7.03425 18.7584 5.24158C16.9658 3.44891 14.5352 2.44048 12 2.4375ZM12 20.4375C10.3312 20.4375 8.69992 19.9426 7.31238 19.0155C5.92484 18.0884 4.84338 16.7706 4.20477 15.2289C3.56616 13.6871 3.39907 11.9906 3.72463 10.3539C4.05019 8.71721 4.85379 7.21379 6.03379 6.03379C7.2138 4.85378 8.71722 4.05019 10.3539 3.72462C11.9906 3.39906 13.6871 3.56615 15.2289 4.20477C16.7706 4.84338 18.0884 5.92484 19.0155 7.31238C19.9427 8.69992 20.4375 10.3312 20.4375 12C20.435 14.237 19.5453 16.3817 17.9635 17.9635C16.3817 19.5453 14.237 20.435 12 20.4375ZM17.8125 12C17.8125 12.1492 17.7532 12.2923 17.6478 12.3977C17.5423 12.5032 17.3992 12.5625 17.25 12.5625H12C11.8508 12.5625 11.7077 12.5032 11.6023 12.3977C11.4968 12.2923 11.4375 12.1492 11.4375 12V6.75C11.4375 6.60082 11.4968 6.45774 11.6023 6.35225C11.7077 6.24676 11.8508 6.1875 12 6.1875C12.1492 6.1875 12.2923 6.24676 12.3978 6.35225C12.5032 6.45774 12.5625 6.60082 12.5625 6.75V11.4375H17.25C17.3992 11.4375 17.5423 11.4968 17.6478 11.6023C17.7532 11.7077 17.8125 11.8508 17.8125 12Z"
                    fill="white"
                  />
                </svg>
                <h1 className="text-white ml-2">{time}</h1>
              </div>
              {doctors.map((doctor) => {
                return (
                  <div className="mt-0">
                    <div className="bg-white rounded-lg flex items-center justify-between m-8 mb-0">
                      <h1 className="font-bold m-5">{doctor}</h1>
                      <div className="w-[100px]">
                      <Button
                        label="Book"
                        className="items-end mr-5 mt-2"
                        rounded="rounded-lg"
                        onClick={() => {
                          setDoctor(doctor);
                          setPage(2);
                        }}
                      />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </Navigation>
  );
}

export default Book_2;
