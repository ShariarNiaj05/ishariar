import Navbar from "@/components/Navbar";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className=" mb-36">
        <Navbar />
      </div>
      {children}
      footer
      {/* <Footer /> */}
    </>
  );
}
