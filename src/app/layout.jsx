import "./globals.css";
import Navbar from "./layouts/Navbar";

export const metadata = {
  title: "Aventi Studio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
