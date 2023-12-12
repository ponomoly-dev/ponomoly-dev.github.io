import type { Metadata } from 'next';
import RootLayout from '@/components/layout/RootLayout';
import '../styles/tailwind.css';

export const metadata: Metadata = {
  title: {
    template: '%s - PONOMOLY',
    default: 'PONOMOLY',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
