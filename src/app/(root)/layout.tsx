import "../../styles/globals.css";
import Bottombar from '../../../components/shared/Bottombar'
import Topbar from '../../../components/shared/Topbar'
import LeftSidebar from '../../../components/shared/LeftSidebar'
import RightSidebar from '../../../components/shared/RightSidebar'
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: 'Threads',
  description: 'A Next.js 14 Meta Threads Application'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Topbar/>
        <main className="flex flex-row">
          <LeftSidebar/>
          <section className="main-container">
            <div className="w-full max-w-4xl">
              {children}
            </div>
          </section>
          <RightSidebar/>
        </main>
        <Bottombar/>
      </body>
    </html>
    </ClerkProvider>
  );
}
