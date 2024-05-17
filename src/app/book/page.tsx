"use client";

import { useRouter } from "next/navigation";
import Book_1 from "./book_0";
import { useState } from "react";
import Book_2 from "./book_1";
import Book_3 from "./book_2";
import Book_4 from "./book_3";

const Book: React.FC = () => {
  const [page, setPage] = useState(0);
  const [patient, setPatient] = useState("me");
  const [doctor, setDoctor] = useState("");
  const [time, setTime] = useState("");
  const [visitType, setVisitType] = useState(false);
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
      renderedPage = <Book_4 setPage={setPage} setVisitType={setVisitType}/>
      break;
  }
  return renderedPage;
};

export default Book;
