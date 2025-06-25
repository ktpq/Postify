'use server'
import "./globals.css";

import Navbar from "./components/Navbar";


import { getProfile } from './getProfile'



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  
  const data = await getProfile()
  const isLogin = data?.isLogin
  const userData = data?.userData

  return (
    <html lang="en">
      <body className="bg-main font-main min-h-screen">
        <Navbar  isLogin={isLogin} userData={userData}/>
        {children}
      </body>
    </html>
  );
}
