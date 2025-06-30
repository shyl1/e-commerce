import Warning from "@/components/HeaderComponents/Warning";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Outlet } from "react-router-dom";
import Bio from "@/components/HeaderComponents/Bio";

export default function MainLayout() {
  return (
    <>
    <section>
      <div className="bg-accent">
        <Warning />
      </div>
      <div className='border-b border-[var(--color-border-gray)] bg-white'>
              <Bio />
      </div>
    </section>
    <main>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      
      <section>
        <Outlet />
      </section>
      <Footer/>
    </main>
    </>
  )
}
