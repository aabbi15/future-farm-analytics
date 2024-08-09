import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: "FARM FUTURE ANALYTICS",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#f0f4d4] text-[#124b3d] min-h-dvh w-dvw p-0 m-0 flex flex-col ${font.className}`}>{children}</body>
    </html>
  );
}
