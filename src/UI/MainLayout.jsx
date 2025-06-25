import Warning from "@/components/shared/HeaderComponents/Warning";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
    <section className="bg-accent">
      <Warning />
    </section>
    <main>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer/>
    </main>
    </>
  )
}
