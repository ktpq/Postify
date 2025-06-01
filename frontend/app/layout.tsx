import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-main font-main overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
