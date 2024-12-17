import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
const Header = () => {
    const [open, setOpen] = React.useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };
    return (_jsx("header", { className: "flex w-full max-w-[1800px] p-2 items-center bg-white", children: _jsx("div", { className: "w-full", children: _jsxs("div", { className: "relative -mx-4 flex items-center justify-between", children: [_jsx("div", { className: "w-60 max-w-full px-4", children: _jsx("a", { href: "/#", className: "block w-full py-5", children: _jsx("img", { src: "logo.svg", alt: "logo" }) }) }), _jsxs("div", { className: "flex w-full items-center justify-between px-4", children: [_jsx("div", { children: _jsxs("button", { id: "button-menu", onClick: handleToggle, className: `absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${open ? 'navbarTogglerActive' : ''}`, children: [_jsx("span", { className: "relative my-[6px] block h-[2px] w-[30px] bg-black" }), _jsx("span", { className: "relative my-[6px] block h-[2px] w-[30px] bg-black" }), _jsx("span", { className: "relative my-[6px] block h-[2px] w-[30px] bg-black" })] }) }), _jsx("div", { className: "justify-end pr-16 flex lg:pr-0", children: _jsx("nav", { id: "menu", className: `absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${open ? 'block' : 'hidden'}`, children: _jsxs("ul", { className: "flex flex-col gap-4 lg:flex-row", children: [_jsx(ListItem, { NavLink: "/#profile", children: "Sobre" }), _jsx(ListItem, { NavLink: "/#skills", children: "Skills" }), _jsx(ListItem, { NavLink: "/#services", children: "Servi\u00E7os" }), _jsx(ListItem, { NavLink: "/#projects", children: "Projetos" })] }) }) })] })] }) }) }));
};
export default Header;
const ListItem = ({ children, NavLink, className }) => {
    return (_jsx("li", { children: _jsx("a", { href: NavLink, className: `flex py-2 text-base font-medium hover:text-dark dark:text-dark-6 text-black dark:hover:text-white lg:ml-12 lg:inline-flex ${className}`, children: children }) }));
};
