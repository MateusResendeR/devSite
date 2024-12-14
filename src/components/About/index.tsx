import React, { useState } from "react";

const About = () => {

    const downloadPdf = () => {
        const pdfUrl = "src/assets/resume/ProfileMateus.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Curriculo-Mateus-Resende.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <div id="about" className="w-full h-auto flex-row md:flex max-w-[1800px]">
        <div className="w-full h-auto justify-items-center p-10 content-center">
            <div className="flex justify-items-start w-full flex-col gap-8">
                <span className="text-4xl">Conheça um pouco sobre mim</span>
                <span className="text-xl text-justify">Formado em Ciência da Computação pela UFRPE e com
                    especialização em Engenharia de Software pela UNICIV, possuo
                    uma trajetória de 6 anos de experiência em desenvolvimento Web,
                    com expertise em tecnologias como PHP, Laravel, React,
                    JavaScript/TypeScript, Node.js e Tailwind CSS e Docker.</span>
                <div className="flex gap-2">
                    <a href="https://github.com/MateusResendeR" target="_blank" rel="noopener noreferrer">
                        <img className="w-16 cursor-pointer" src="src/assets/icons/github.png"></img>
                    </a>

                    <a href="https://www.linkedin.com/in/mateus-resende-05b349172" target="_blank" rel="noopener noreferrer">
                        <img className="w-16 cursor-pointer" src="src/assets/icons/linkedin.png"></img>
                    </a>
                    <button onClick={downloadPdf} className='bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                        <span className='mr-[10px]'>
                            <img className="w-6 text-white" src="src/assets/icons/download.png"></img>
                        </span>
                        Baixar currículo
                    </button>
                </div>
            </div>
        </div>
        <div className="w-full h-auto justify-items-center">
            <img alt="Mateus" src="/img1.png"></img>
        </div>
    </div>
  );
};

export default About;
