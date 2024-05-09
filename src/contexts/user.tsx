"use client";

import { User as FirebaseUser, onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useState } from "react";

import { initFirebase } from "@/firebase/firebase";

type IUserContext = {
  firebaseUser: FirebaseUser | null;
};

/**
 * A context that provides the current Firebase and PAP (MongoDB) user data,
 * automatically fetching them when the page loads.
 */
export const UserContext = createContext<IUserContext>({
  firebaseUser: null,
});

/**
 * A provider component that handles the logic for supplying the context
 * with its current user & loading state variables.
 */
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);

  const { auth } = initFirebase();

  /**
   * Callback triggered by Firebase when the user logs in/out, or on page load
   */
  onAuthStateChanged(auth, (user) => {
    setFirebaseUser(user);
  });

  return (
    <UserContext.Provider value={{ firebaseUser }}>
      {children}
    </UserContext.Provider>
  );
};