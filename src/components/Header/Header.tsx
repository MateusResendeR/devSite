import React from "react";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <header className="flex w-full max-w-[1800px] p-2 items-center bg-white">
      <div className="w-full">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img src="logo.svg" alt="logo" />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                id="button-menu"
                onClick={handleToggle}
                className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${
                  open ? 'navbarTogglerActive' : ''
                }`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
              </button>
            </div>
            <div className="justify-end pr-16 flex lg:pr-0">
              <nav
                id="menu"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                  open ? 'block' : 'hidden'
                }`}
              >
                <ul className="flex flex-col gap-4 lg:flex-row">
                  <ListItem NavLink="/#profile">Sobre</ListItem>
                  <ListItem NavLink="/#skills">Skills</ListItem>
                  <ListItem NavLink="/#services">Serviços</ListItem>
                  <ListItem NavLink="/#projects">Projetos</ListItem>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

interface ListItemProps {
  children: React.ReactNode;
  NavLink: string;
  className?: string;
}

const ListItem: React.FC<ListItemProps> = ({ children, NavLink, className }) => {
  return (
    <li>
      <a
        href={NavLink}
        className={`flex py-2 text-base font-medium hover:text-dark dark:text-dark-6 text-black dark:hover:text-white lg:ml-12 lg:inline-flex ${className}`}
      >
        {children}
      </a>
    </li>
  );
};