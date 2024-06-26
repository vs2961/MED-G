/**
 * The array that populates the navbar
 */

type NavigationEntry = {
    title: string;
    href: string;
    icon: React.ReactNode;
  };
  
  export const navigation: NavigationEntry[] = [
    {
      title: "Home",
      href: "/home",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 21H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 21V8M19 21V8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 21V13H15V21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 10L12 2L22 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "MyHealth",
      href: "/health",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7.19401C10.27 3.27401 6.24 2.96401 4.36 4.63401C2.83 5.96401 2.1 9.29401 3.49 12.324C5.9 17.534 12 20.324 12 20.324C12 20.324 18.1 17.584 20.51 12.374C21.9 9.37401 21.17 6.05401 19.64 4.68401C17.76 2.96401 13.73 3.27401 12 7.19401Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.34 11.964H8L11 14.964L14 8.96402L16 11.964H20.66" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Messages",
      href: "/message",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 19.5V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V16C21 16.5523 20.5523 17 20 17H5.5L3 19.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 7H16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 10H16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 13H12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

      ),
    },
    {
      title: "Help",
      href: "/help",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.95 18C12.3 18 12.596 17.879 12.838 17.637C13.08 17.395 13.2007 17.0993 13.2 16.75C13.1993 16.4007 13.0787 16.1047 12.838 15.862C12.5973 15.6193 12.3013 15.4987 11.95 15.5C11.5987 15.5013 11.303 15.6223 11.063 15.863C10.823 16.1037 10.702 16.3993 10.7 16.75C10.698 17.1007 10.819 17.3967 11.063 17.638C11.307 17.8793 11.6027 18 11.95 18ZM11.05 14.15H12.9C12.9 13.6 12.9627 13.1667 13.088 12.85C13.2133 12.5333 13.5673 12.1 14.15 11.55C14.5833 11.1167 14.925 10.704 15.175 10.312C15.425 9.92 15.55 9.44934 15.55 8.9C15.55 7.96667 15.2083 7.25001 14.525 6.75001C13.8417 6.25001 13.0333 6.00001 12.1 6.00001C11.15 6.00001 10.3793 6.25001 9.788 6.75001C9.19667 7.25001 8.784 7.85001 8.55 8.55001L10.2 9.20001C10.2833 8.9 10.471 8.57501 10.763 8.22501C11.055 7.87501 11.5007 7.70001 12.1 7.70001C12.6333 7.70001 13.0333 7.846 13.3 8.138C13.5667 8.43 13.7 8.75067 13.7 9.10001C13.7 9.43334 13.6 9.74601 13.4 10.038C13.2 10.33 12.95 10.6007 12.65 10.85C11.9167 11.5 11.4667 11.9917 11.3 12.325C11.1333 12.6583 11.05 13.2667 11.05 14.15ZM12 22C10.6167 22 9.31667 21.7377 8.1 21.213C6.88334 20.6883 5.825 19.9757 4.925 19.075C4.025 18.1743 3.31267 17.116 2.788 15.9C2.26333 14.684 2.00067 13.384 2 12C1.99933 10.616 2.262 9.31601 2.788 8.10001C3.314 6.88401 4.02633 5.82567 4.925 4.92501C5.82367 4.02434 6.882 3.31201 8.1 2.78801C9.318 2.26401 10.618 2.00134 12 2.00001C13.382 1.99867 14.682 2.26134 15.9 2.78801C17.118 3.31467 18.1763 4.02701 19.075 4.92501C19.9737 5.82301 20.6863 6.88134 21.213 8.10001C21.7397 9.31867 22.002 10.6187 22 12C21.998 13.3813 21.7353 14.6813 21.212 15.9C20.6887 17.1187 19.9763 18.177 19.075 19.075C18.1737 19.973 17.1153 20.6857 15.9 21.213C14.6847 21.7403 13.3847 22.0027 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.32501C16.125 4.77501 14.2333 4.00001 12 4.00001C9.76667 4.00001 7.875 4.77501 6.325 6.32501C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="black"/>
        </svg>
      ),
    },
  ];
  