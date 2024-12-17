import { jsx as _jsx } from "react/jsx-runtime";
import IconCarousel from "../IconCarousel";
const Skills = () => {
    return (_jsx("div", { id: "skills", className: "w-full h-auto flex-row md:flex bg-dark justify-center mt-12", children: _jsx("div", { className: "max-w-[1800px]", children: _jsx(IconCarousel, {}) }) }));
};
export default Skills;
