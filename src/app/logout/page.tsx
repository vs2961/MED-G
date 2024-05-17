"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";


const Logout: React.FC = () => {
  signOut(auth);
  const router = useRouter();
  router.push("/")
  return null;
};

export default Logout;