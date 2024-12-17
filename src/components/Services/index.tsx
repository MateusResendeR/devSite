const Services = () => {

  return (
    <div id="services" className="w-full h-auto justify-center max-w-[1800px] mt-10 md:mt-20">
      <div className="flex justify-center">
        <span className="text-4xl md:text-5xl flex text-center">O que posso fazer por você:</span>
      </div>
      <div className="grid grid-cols-2 p-2 md:p-0 gap-5 md:gap-32 mt-10 md:mt-28">
        <img src="public/services/1.svg" className="w-72 place-self-end" alt="Sites" />
        <img src="public/services/2.svg" className="w-72" alt="Sites" />
        <img src="public/services/3.svg" className="w-72 place-self-end" alt="Sites" />
        <img src="public/services/4.svg" className="w-72" alt="Sites" />
      </div>
    </div>
  );
};

export default Services;
