"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";


const Logout: React.FC = () => {
  signOut(auth);
  const router = useRouter();

  return (<div className="w-full h-full" onClick={() => router.push("/")}>Logout!</div>);
};

export default Logout;