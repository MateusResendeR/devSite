import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Card from "../Cards";
const Projects = () => {
    return (_jsx("div", { id: "projects", className: "w-full h-auto bg-dark flex-row md:flex justify-center", children: _jsx("div", { className: "w-full h-auto justify-center mt-10 md:mt-20 justify-items-center", children: _jsxs("div", { className: "max-w-[1800px]", children: [_jsx("div", { className: "flex justify-center", children: _jsx("span", { className: "text-4xl md:text-5xl flex text-center mt-10 md:mt-20 text-white", children: "Projetos " }) }), _jsx("div", { className: "mt-10 md:mt-28 flex justify-center", children: _jsx(Card, {}) })] }) }) }));
};
export default Projects;
