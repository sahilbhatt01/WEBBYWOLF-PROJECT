import "./globals.css";
import Navbar from "@/components/section/Navbar";
import AOSWrapper from "@/components/AOSWrapper";

export const metadata = {
  title: "WebbyWolf Assignment",
  description: "Pixel perfect landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-screen overflow-x-hidden">
        <Navbar />
        <main className="w-full min-h-screen">
          <AOSWrapper>{children}</AOSWrapper>
        </main>
      </body>
    </html>
  );
}
