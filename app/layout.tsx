import "./globals.css";
import Navbar from "@/components/Navbar";
import AOSWrapper from "@/components/AOSWrapper";

export const metadata = {
  title: "WebbyWolf Assignment",
  description: "Pixel perfect landing page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-24 w-full min-h-screen">
          <AOSWrapper>{children}</AOSWrapper>
        </main>
      </body>
    </html>
  );
}
