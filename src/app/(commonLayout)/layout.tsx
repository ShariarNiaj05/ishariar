import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shariar's Portfolio",
  description: "All the details of Portfolio.",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <NavBar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
}
