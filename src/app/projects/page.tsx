import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <>
      <section className="pt-12 pb-2 md:pt-20 lg:pt-32 md:pb-8 lg:pb-16">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="w-full max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="h-3.5 md:h-8 min-w-3.5 md:min-w-8 bg-black rounded-full md:mt-0" />
              <div className="font-bold font-black text-3xl md:text-[64px] md:leading-none">
                PROJECTS
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <ProjectCard
            varient="lr"
            img="/img/project1.jpg"
            imgAlt="project image 1"
            date="January 10 , 2021"
            cat="Decoration"
            title="SARA KINGSTON PHOTOSESSION"
          />
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <ProjectCard
            varient="rl"
            img="/img/project2.jpg"
            imgAlt="project image 2"
            date="January 10 , 2021"
            cat="Decoration"
            title="SARA KINGSTON PHOTOSESSION"
          />
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <ProjectCard
            varient="lr"
            img="/img/project3.jpg"
            imgAlt="project image 3"
            date="January 10 , 2021"
            cat="Decoration"
            title="SARA KINGSTON PHOTOSESSION"
          />
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <ProjectCard
            varient="rl"
            img="/img/project4.jpg"
            imgAlt="project image 4"
            date="January 10 , 2021"
            cat="Decoration"
            title="SARA KINGSTON PHOTOSESSION"
          />
        </div>
      </section>
      <section className="pt-12 pb-24 md:pt-16 md:pb-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <ProjectCard
            varient="lr"
            img="/img/project5.jpg"
            imgAlt="project image 5"
            date="January 10 , 2021"
            cat="Decoration"
            title="SARA KINGSTON PHOTOSESSION"
          />
        </div>
      </section>
    </>
  );
}
