
import DropMenu from "./DropMenu";
import NavBar from "./NavBar";


const totalProducts = 50;

export default function HeaderSection2() {
  return (
    <header className="container lg:h-[88px] h-[70px] mt-0 flex justify-between items-center">
      <div>
        <DropMenu totalProducts={totalProducts}/>
      </div>
      <nav className="hidden lg:flex justify-center items-center gap-8 font-body text-[15px] font-semibold text-[var(--color-text)]">
        <NavBar /> 
      </nav>
    </header>
  )
}
