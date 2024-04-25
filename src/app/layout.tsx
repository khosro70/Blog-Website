"use client";
import "./globals.css";
import { vazirMatn } from "@/helpers/fonts";
import GraphQlLayout from "@/components/layouts/graphQlLayout";
import Header from "@/components/shared/Header";
import SiteLayout from "@/components/layouts/SiteLayout";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GraphQlLayout>
      <html lang="fa" dir="rtl" className="bg-neutral-50">
        <body className={vazirMatn.className}>
          <Header />
          <div>{children}</div>
          <Footer />
        </body>
      </html>
    </GraphQlLayout>
  );
}
