import { Link } from "@remix-run/react";

const MainMenu = [
  { url: `/services`, title: "Services" },
  { url: `/blog`, title: "Blog" },
  { url: `/contact`, title: "Contact" },
];

const NavItem = ({ url, children }: { url: string; children: string }) => {
  return (
    <Link
      to={url}
      className="block py-2 px-4 rounded-md bg-transparent hover:bg-sky-500 hover:text-white hover:no-underline transition-all duration-300 text-sm text-gray-600"
    >
      {children}
    </Link>
  );
};

export const Navbar = () => {
  return (
    <div className="hidden md:block">
      <div className="flex items-center space-x-4">
        {MainMenu &&
          MainMenu.map((menu, index) => {
            const { url, title } = menu;
            return (
              <div key={`main-menu-${index}`}>
                <NavItem url={url}>{title}</NavItem>
              </div>
            );
          })}
      </div>
    </div>
  );
};
