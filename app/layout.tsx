import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/common/Navbar";
import TanstackProvider from "./components/providers/TanstackProvider";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { ToastContainer } from "react-toastify";
import Notification from "./components/notification/Notification";
import { Suspense } from "react";
import Load from "./loading";
import { StoreProvider } from "./store/StoreProvider";
import Inner from "./components/Inner";
import NextTopLoader from "nextjs-toploader";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abissinia Tickets",
  description: "Get your Cinema Tickets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en" data-theme="black">
        <TanstackProvider>
          <body className={inter.className}>
            <NextTopLoader
              color="#0325e9"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #0325e9,0 0 5px #0325e9"
            />
            <Header />
            <Navbar />
            <Notification />
            <ToastContainer />
            <Suspense fallback={<Load />}>
              <Inner>{children}</Inner>
              <Footer />
            </Suspense>
          </body>
        </TanstackProvider>
      </html>
    </StoreProvider>
  );
}
