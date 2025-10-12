import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Doctors Note',
  description: `My Doctors Note. Get An Online Doctor'sNote In 3 Easy Steps`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative" cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
