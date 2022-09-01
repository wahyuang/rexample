import { BurgerButton } from "../Mobile";
import Navbar from "../Navbar";
import Logo from "./Logo";

export function Header() {
  return (
    <div className="relative shadow-md py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <div>
            <Navbar />
            <BurgerButton />
          </div>
        </div>
      </div>
    </div>
  );
}
