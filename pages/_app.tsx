import "@/styles/globals.css";

import localFont from "next/font/local";
import type { AppProps } from "next/app";

const neueRegrade = localFont({
  src: [
    {
      path: "./fonts/neue-regrade/Neue-Regrade-Bold.otf",
      weight: "700",
      style: "bold"
    }
  ],
  variable: "--font-neue-regrade"
});

const generalSans = localFont({
  src: [
    {
      path: "./fonts/general-sans/GeneralSans-Regular.woff2",
      weight: "400"
    },
    {
      path: "./fonts/general-sans/GeneralSans-Semibold.woff2",
      weight: "600"
    }
  ],
  variable: "--font-general-sans"
});

import { AppProvider } from "@/context/AppContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${neueRegrade.variable} ${generalSans.variable} font-general-sans text-sm text-humble-black`}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </main>
  );
}
