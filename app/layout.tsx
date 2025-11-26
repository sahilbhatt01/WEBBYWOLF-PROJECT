import "./globals.css";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
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
    <html lang="en" className="overflow-x-hidden w-full max-w-full">
      <body className="w-full max-w-full overflow-x-hidden relative">
        <div className="w-full">
          <Navbar />
        </div>
        <main className="w-full min-h-screen px-4 sm:px-6 md:px-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
