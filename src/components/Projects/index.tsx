import Card from "../Cards";

const Projects = () => {

  return (
    <div id="projects" className="w-full h-auto justify-center bg-dark mt-10 md:mt-20">
      <div className="max-w-[1800px]">
        <div className="flex justify-center">
          <span className="text-4xl md:text-5xl flex text-center mt-10 md:mt-20 text-white">Projetos </span>
        </div>
        <div className="mt-10 md:mt-28 flex justify-center">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Projects;
