import { PropsWithChildren } from "react";

const Footer = () => {
  return (
    <>
      <footer className=" w-full  bg-white pb-5 pt-5">
        <div className="flex flex-col max-w-[1800px] items-center">
          <a href="/#header">
            <img src="/logo.svg" alt="logo" className="w-64"></img>
          </a>
          <div className="flex flex-row w-full justify-center gap-4 p-4 md:p-0">
            <div className="w-[220px]">
              <LinkGroup header="Menu">
                <NavLink link="/#about" label="Sobre" />
                <NavLink link="/#skills" label="Skills" />
                <NavLink link="/#services" label="Serviços" />
                <NavLink link="/#projects" label="Projetos" />
              </LinkGroup>
            </div>
            <div className="flex flex-row w-[220px]">
              <div className="w-full">
                <div className="w-full">
                  <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                    Contato
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="tel:+5587996240263"
                        className="inline-block text-base leading-loose text-dark-4 hover:text-dark"
                      >
                        +55 (87) 99624-0263
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:mateus.resende.r@gmail.com"
                        className="inline-block text-base leading-loose text-dark-4 hover:text-dark"
                      >
                        mateus.resende.r@gmail.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/MateusResendeR" target="_blank" rel="noopener noreferrer"
                        className="inline-block text-base leading-loose text-dark-4 hover:text-dark"
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/mateus-resende-05b349172" target="_blank" rel="noopener noreferrer"
                        className="inline-block text-base leading-loose text-dark-4 hover:text-dark"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li> &nbsp; </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;

interface LinkGroupProps extends PropsWithChildren {
  header: string;
}

const LinkGroup: React.FC<LinkGroupProps> = ({ children, header }) => {
  return (
    <>
      <div className="w-full">
        <div className="w-full">
          <h4 className=" mb-4 text-lg font-semibold text-dark">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

interface NavLinkProps {
  link: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-dark-4 hover:text-dark"
      >
        {label}
      </a>
    </li>
  );
};
