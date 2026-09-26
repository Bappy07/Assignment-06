import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";
import { ContextProvider } from "@/components/context/workoutContext";
export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout tracking app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
            <ContextProvider>
              <Navbar />
              {children}
              <Footer />
              <Toaster position="top-right" richColors />
            </ContextProvider>
      </body>
    </html>
  );
}

