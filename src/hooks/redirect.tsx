import { User as FirebaseUser } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { UserContext } from "@/contexts/user";

export const LOGIN_URL = "/login";
export const HOME_URL = "/home";
export const NOT_FOUND_URL = "/404-not-found";
export const NOT_APPROVED_URL = "/create_user_3";

/**
 * An interface for the user's current authentication credentials
 */
export type AuthCredentials = {
  firebaseUser: FirebaseUser | null;
};

/**
 * A type for a function that determines whether the user should be redirected
 * based on their current credentials
 */
export type CheckShouldRedirect = (authCredentials: AuthCredentials) => boolean;

export type UseRedirectionProps = {
  checkShouldRedirect: CheckShouldRedirect;
  redirectURL: string;
};

/**
 * A base hook that redirects the user to redirectURL if checkShouldRedirect returns true
 */
export const useRedirection = ({ checkShouldRedirect, redirectURL }: UseRedirectionProps) => {
  const { firebaseUser } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (checkShouldRedirect({ firebaseUser })) {
      router.push(redirectURL);
    }
  }, [firebaseUser]);
};

/**
 * A hook that redirects the user to the staff/admin home page if they are already signed in
 */
export const useRedirectToHomeIfSignedIn = () => {
  useRedirection({
    checkShouldRedirect: ({ firebaseUser }) => firebaseUser !== null,
    redirectURL: HOME_URL,
  });
};

/**
 * A hook that redirects the user to the login page if they are not signed in
 */
export const useRedirectToLoginIfNotSignedIn = () => {
  useRedirection({
    checkShouldRedirect: ({ firebaseUser }) => firebaseUser === null,
    redirectURL: LOGIN_URL,
  });
};