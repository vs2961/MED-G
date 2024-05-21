"use client";

import Book_1 from "./book_0";
import { useState } from "react";
import Book_2 from "./book_1";
import Book_3 from "./book_2";
import Book_4 from "./book_3";
import Book_5 from "./book_4";
import Book_6 from "./book_5";
import Book_7 from "./book_6";
import Book_8 from "./book_7";

const Book: React.FC = () => {
  const [page, setPage] = useState(0);
  const [patient, setPatient] = useState("me");
  const [doctor, setDoctor] = useState("");
  const [time, setTime] = useState("");
  const [visitType, setVisitType] = useState(false);
  const [reason, setReason] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [secondaryPhone, setSecondaryPhone] = useState("");
  const [text, setText] = useState("");
  const [location, setLocation] = useState("");
  let renderedPage = <Book_1 setPage={setPage} setPatient={setPatient}/>
  switch (page) {
    case 0:
      renderedPage = <Book_1 setPage={setPage} setPatient={setPatient}/>
      break;
    case 1:
      renderedPage = <Book_2 setPage={setPage} setDoctor={setDoctor} setTime={setTime}/>
      break;
    case 2:
      renderedPage = <Book_3 setPage={setPage} setVisitType={setVisitType}/>
      break;
    case 3:
      renderedPage = <Book_4 setPage={setPage} setReason={setReason}/>
      break;
    case 4:
      renderedPage = <Book_5 setPage={setPage} setEmail={setEmail} setPhone={setPhone} setSecondaryPhone={setSecondaryPhone} setText={setText}/>
      break;
    case 5:
      renderedPage = <Book_6 setPage={setPage} setLocation={setLocation}/>
      break;
    case 6:
      renderedPage = <Book_7 setPage={setPage}/>
      break;
    case 7:
      renderedPage = <Book_8 setPage={setPage}/>
      break;
  }
  return renderedPage;
};

export default Book;
