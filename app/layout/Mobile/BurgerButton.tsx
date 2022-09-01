import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useMobileContext } from "~/context/MobileMenu";

export const BurgerButton = () => {
  const { setMobileMenu } = useMobileContext();

  return (
    <div className="block md:hidden">
      <button
        className="border-0 w-10 h-10 text-center text-sky-500 text-3xl"
        onClick={() => setMobileMenu(true)}
      >
        <HiOutlineMenuAlt2 className="mx-auto" />
      </button>
    </div>
  );
};
