import { Inter } from "next/font/google";
import Link from 'next/link'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { auth, currentUser } from "@clerk/nextjs/server";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AIGC SaaS",
  description: "Generated by create next app",
};

function Nav() {
  const { userId } = auth();

  if (!userId) {
    return null;
  }
  return (
    <nav className="hidden md:flex align-middle justify-center mr-2">
      <Link href="/create" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
        Create</Link>
      <Link href="/gallery" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
      Gallery</Link>
      <Link href="/credits" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
      Credits</Link>
      <Link href="mailto:wj871287@gmail.com?subject=Support%20Request&body=Please%20describe%20your%20issue:" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
      Support</Link>
    </nav>
  )
}

export default function RootLayout({ children }) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <header className="flex z-20 sticky top-0 items-center px-4 justify-between h-16 backdrop-blur-xl">
            <Link href="/" className="text-2xl font-bold lg:ml-6">SaaS</Link>
            <div className="flex flex-row justify-center align-middle">
              <Nav></Nav>
              <div className="flex items-center space-x-4 lg:ml-auto mr-6">
                <div className="min-w-10">
                  <SignedOut>
                    <SignInButton className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2" />
                  </SignedOut>
                  <SignedIn>
                    <UserButton className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2" />
                  </SignedIn>
                </div>
              </div>
            </div>
          </header>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
