import React from "react";

const Card = () => {
  return (
    <>
      <section className="">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2">
            <SingleCard
                image="src/assets/projects/site1.png"
                CardTitle="Site de portifólio"
                titleHref="/#about"
                btnHref="https://github.com/MateusResendeR/devSite"
                CardDescription="Site para exposição de projetos pessoais e divulgação de trabalhos externos."
                Button="GitHub"
            />
            <SingleCard
                titleHref="https://onpowermidia.com.br/"
                image="src/assets/projects/site2.png"
                CardTitle="OnPower"
                CardDescription="Site para uma empresa de publicidade digital e serviços de carregamento de dispositivos móveis"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

interface SingleCardProps {
  image: string;
  Button?: string;
  CardDescription: string;
  CardTitle: string;
  titleHref?: string;
  btnHref?: string;
}

const SingleCard: React.FC<SingleCardProps> =({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      {/*  */}
      <div className="mb-10 overflow-hidden rounded-lg border-[1px] bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              target="_blank" rel="noopener noreferrer"
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"} target="_blank" rel="noopener noreferrer"
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};