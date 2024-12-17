import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const About = () => {
    const downloadPdf = () => {
        const pdfUrl = "/resume/ProfileMateus.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Curriculo-Mateus-Resende.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (_jsxs("div", { id: "about", className: "w-full h-auto flex-row md:flex max-w-[1800px]", children: [_jsx("div", { className: "w-full h-auto justify-items-center p-10 content-center", children: _jsxs("div", { className: "flex justify-items-start w-full flex-col gap-8", children: [_jsx("span", { className: "text-4xl", children: "Conhe\u00E7a um pouco sobre mim" }), _jsx("span", { className: "text-xl text-justify", children: "Formado em Ci\u00EAncia da Computa\u00E7\u00E3o pela UFRPE e com especializa\u00E7\u00E3o em Engenharia de Software pela UNICIV, possuo uma trajet\u00F3ria de 6 anos de experi\u00EAncia em desenvolvimento Web, com expertise em tecnologias como PHP, Laravel, React, JavaScript/TypeScript, Node.js e Tailwind CSS e Docker." }), _jsxs("div", { className: "flex gap-2", children: [_jsx("a", { href: "https://github.com/MateusResendeR", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { className: "w-16 cursor-pointer", src: "/icons/github.png" }) }), _jsx("a", { href: "https://www.linkedin.com/in/mateus-resende-05b349172", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { className: "w-16 cursor-pointer", src: "/icons/linkedin.png" }) }), _jsxs("button", { onClick: downloadPdf, className: 'bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5', children: [_jsx("span", { className: 'mr-[10px]', children: _jsx("img", { className: "w-6 text-white", src: "/icons/download.png" }) }), "Baixar curr\u00EDculo"] })] })] }) }), _jsx("div", { className: "w-full h-auto justify-items-center", children: _jsx("img", { alt: "Mateus", src: "/img1.png" }) })] }));
};
export default About;
