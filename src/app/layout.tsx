import "./styles/page.module.css";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    default: "Remedic",
    template: "%s | Remedic",
  },
  description: "Powered by Remedic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}