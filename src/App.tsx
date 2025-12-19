import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      {/* Global scroll authority */}
      <ScrollToTop />

      {/* Root layout – must NOT create its own scroll context */}
      <div className="bg-[#070C18] flex flex-col min-h-screen">
        <Header />

        {/* IMPORTANT:
            - No overflow
            - No min-h-screen here
            - Let body handle scrolling */}
        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}
