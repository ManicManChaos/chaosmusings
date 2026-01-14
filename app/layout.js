import "./globals.css";

export const metadata = {
  title: "Manic Musings of Chaos",
  themeColor: "#0B0F0D",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}