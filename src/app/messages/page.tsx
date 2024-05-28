"use client";

import Navigation from "@/components/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Messages: React.FC = () => {
  const router = useRouter();

  const [myChats, setMyChats] = useState([""]);
  const [customChat, setCustomChat] = useState("");

  const quickSelect = [
    "Body Pain",
    "Gastro Problem",
    "Head Problem",
    "Respiratory Issue",
    "Reproductive Issue",
    "Other",
  ];
  return (
    <Navigation>
      <div className="flex justify-between mx-auto h-16">
        <div className="grid grid-cols-2 w-[80px]">
          <button onClick={() => router.push("/")} className="ml-5 mt-3">
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
          <div className="grid grid-cols-2 mt-5 w-[120px]">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="justify-self-end"
            >
              <circle cx="24" cy="24" r="24" fill="#D9D9D9" />
            </svg>
            <div className="w-[130px] ml-2">
              <h1 className="text-white font-bold">Dr.xyz</h1>
              <h1 className="text-white">Online now</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <button
            onClick={() => {}}
            className="mr-5 mt-[20px] flex justify-end"
          >
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.70833 6.16666H13.875L16.9583 13.875L13.1042 16.1875C14.7552 19.5353 17.4647 22.2448 20.8125 23.8958L23.125 20.0417L30.8333 23.125V29.2917C30.8333 30.1094 30.5085 30.8937 29.9302 31.4719C29.352 32.0501 28.5678 32.375 27.75 32.375C21.7364 32.0095 16.0644 29.4558 11.8043 25.1957C7.54415 20.9356 4.99045 15.2636 4.625 9.24999C4.625 8.43224 4.94985 7.64798 5.52809 7.06974C6.10632 6.49151 6.89058 6.16666 7.70833 6.16666Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => {}}
            className="mr-5 mt-[20px] flex justify-end"
          >
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.502 14.43C17.9673 14.43 17.4378 14.5353 16.9438 14.74C16.4498 14.9446 16.0009 15.2445 15.6228 15.6226C15.2447 16.0007 14.9448 16.4496 14.7401 16.9436C14.5355 17.4376 14.4302 17.9671 14.4302 18.5019C14.4302 19.0366 14.5355 19.5661 14.7401 20.0601C14.9448 20.5541 15.2447 21.003 15.6228 21.3811C16.0009 21.7592 16.4498 22.0591 16.9438 22.2638C17.4378 22.4684 17.9673 22.5737 18.502 22.5737C19.5819 22.5735 20.6175 22.1442 21.381 21.3804C22.1444 20.6166 22.5732 19.5809 22.573 18.5009C22.5727 17.421 22.1435 16.3854 21.3797 15.622C20.6159 14.8585 19.5801 14.4298 18.5002 14.43H18.502ZM18.502 9.62001C19.0365 9.61977 19.5657 9.51425 20.0594 9.30949C20.5531 9.10473 21.0016 8.80473 21.3794 8.42663C21.7572 8.04852 22.0568 7.59971 22.2611 7.10582C22.4654 6.61194 22.5704 6.08264 22.5702 5.54816C22.5699 5.01368 22.4644 4.48448 22.2597 3.99078C22.0549 3.49708 21.7549 3.04854 21.3768 2.67078C20.9987 2.29302 20.5499 1.99343 20.056 1.78911C19.5621 1.5848 19.0328 1.47977 18.4983 1.48001C17.4189 1.4805 16.3839 1.90977 15.6209 2.67339C14.858 3.43701 14.4297 4.47243 14.4302 5.55186C14.4307 6.63129 14.8599 7.66632 15.6236 8.42924C16.3872 9.19217 17.4226 9.6205 18.502 9.62001ZM18.502 27.38C17.4221 27.38 16.3864 27.809 15.6228 28.5726C14.8592 29.3362 14.4302 30.3719 14.4302 31.4519C14.4302 32.5318 14.8592 33.5675 15.6228 34.3311C16.3864 35.0947 17.4221 35.5237 18.502 35.5237C19.5819 35.5237 20.6176 35.0947 21.3813 34.3311C22.1449 33.5675 22.5739 32.5318 22.5739 31.4519C22.5739 30.3719 22.1449 29.3362 21.3813 28.5726C20.6176 27.809 19.5819 27.38 18.502 27.38Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-10">
        <div className="ml-5 flex items-start gap-3.5 grid grid-cols-1">
          <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-bl-none rounded-tl-xl">
            <p className="text-sm font-normal text-black">
              Hey, what symptoms are you feeling today?
            </p>
          </div>
          {myChats.map((chat) => {
            if (chat != "") {
              return (
                <div className="break-words justify-self-end mr-5 flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-[#B5F1F9] rounded-e-xl rounded-br-none rounded-tl-xl rounded-bl-xl">
                  <p className="text-sm font-normal text-black">{chat}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="flex items-center justify-center bottom-16 mb-40 mt-5">
        <div className="grid grid-cols-3 w-[500px] gap-y-3">
          {quickSelect.map((symptom) => {
            return (
              <button
                onClick={() => {
                  setMyChats((prevChats) => [...prevChats, symptom]);
                }}
                className="flex items-center text-center justify-center w-32 h-32 bg-[#B5F1F9] text-black rounded-full"
              >
                <h1 className="p-3">{symptom}</h1>
              </button>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-16 left-0 w-full">
        <label htmlFor="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-center px-3 py-2 bg-gray-50">
          <button
            type="button"
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                fill="currentColor"
                d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
              />
            </svg>
            <span className="sr-only">Upload image</span>
          </button>
          <button
            type="button"
            className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
              />
            </svg>
            <span className="sr-only">Add emoji</span>
          </button>
          <input
            id="chat"
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your message..."
            onChange={(text) => setCustomChat(text.currentTarget.value)}
            value={customChat}
          ></input>
          <button
            onClick={() => {setMyChats((prevChats) => [...prevChats, customChat]);setCustomChat("")}}
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100"
          >
            <svg
              className="w-5 h-5 rotate-90 rtl:-rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </div>
    </Navigation>
  );
};

export default Messages;
