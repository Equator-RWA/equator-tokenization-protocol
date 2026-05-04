import "./globals.css";

export const metadata = {
  title: "Equator RWA | Admin",
  description: "SEP-8 Asset Issuer Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}