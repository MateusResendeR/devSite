import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
const App = () => {
    return (_jsx("div", { className: 'w-full flex', children: _jsxs("div", { className: 'w-full justify-items-center', children: [_jsx(Header, {}), _jsx(About, {}), _jsx(Skills, {}), _jsx(Services, {}), _jsx(Projects, {}), _jsx(Footer, {})] }) }));
};
export default App;
