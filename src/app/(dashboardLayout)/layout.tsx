export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="mb-36 relative w-full flex items-center">Sidebar</div>
      {children}
    </>
  );
}
