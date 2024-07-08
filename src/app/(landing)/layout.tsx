import Header from "@/components/ui/landing-header";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Header />
      <div className="pt-[3.75rem]">{children}</div>
    </main>
  );
};

export default Layout;
