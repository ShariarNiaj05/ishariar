import Navbar from "@/components/Navbar";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="mb-36 relative w-full flex items-center">
        <Navbar />
      </div>
      {children}
      footer
      {/* <Footer /> */}
    </>
  );
}
