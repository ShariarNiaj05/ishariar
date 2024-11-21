export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <NavBar /> */}
      navbar
      {children}
      footer
      {/* <Footer /> */}
    </>
  );
}
