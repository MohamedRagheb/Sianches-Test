// Types
import type { ReactNode } from "react";

// Components
import Navbar from "@/componets/Layouts/PublicLayout/Navbar";
import Footer from "@/componets/Layouts/PublicLayout/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      {children}
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
