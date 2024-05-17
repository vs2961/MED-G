/**
 * Navigation Component
 *
 * Wraps the content of the current page with the navbar
 * Uses the constant in `src/constants` to populate the actual sidebar
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { navigation } from "../constants/navigation";
import { cn } from "../lib/utils";
import { useWindowSize } from "@/lib/useWindowSize";

// the mapping of elements within navigation
const Links = () => {
  const pathName = usePathname();

  return navigation.map((item, i) => {
    return (
      <Link
        href={item.href}
        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
        key={i}
      >
        <div className="w-5 h-5 mb-2 group-hover:text-blue-600">{item.icon}</div>
        <div
          className={cn("text-sm text-gray-500 group-hover:text-blue-600", pathName === item.href && "text-blue-600")}
        >
          {item.title}
        </div>
      </Link>
    );
  });
};


// Navigation component that wraps the content of the page
function Navigation({ children }: { children: React.ReactNode }) {
  const { isTablet } = useWindowSize();
  return (
    <main
      className={cn(
        "flex h-screen w-full bg-blue max-sm:relative sm:max-lg:flex-col overflow-y-auto",
      )}
    >
      {/* navbar */}
      <nav
        className={cn(
          "fixed bottom-0 z-50 w-full h-16 -translate-x-1/2 bg-white border-t border-gray-200 left-1/2",
        )}
      >
        <div className="grid h-full grid-cols-4 mx-auto">
          <Links/>
        </div>
      </nav>
      <div
        className={cn("h-full w-full bg-[#364A71] overflow-y-auto overflow-x-auto", isTablet && "mt-16")}
      >
        {children}
      </div>
    </main>
  );
}

export default Navigation;
