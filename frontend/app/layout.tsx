import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-main font-main min-h-screen">
        {children}
      </body>
    </html>
  );
}
