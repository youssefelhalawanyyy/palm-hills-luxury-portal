import React from 'react';

export const metadata = {
  title: 'Palm Hills Developments — Luxury Real Estate Portal',
  description: 'Official Resident & Buyer Escrow Portal for Palm Hills Developments (Sheikh Zayed, Badya, North Coast).',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#05070c] text-white font-sans antialiased">{children}</body>
    </html>
  );
}
