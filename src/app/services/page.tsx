import ServiceCol from "@/components/ServiceCol";

export default function Services() {
  return (
    <>
      <section className="pt-16 lg:pt-32 lg:pb-12">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 xl:gap-32 justify-between">
            <div>
              <div className="w-full max-w-72">
                <div className="flex gap-2 ">
                  <span className="h-3.5 md:h-8 min-w-3.5 md:min-w-8 bg-black rounded-full mt-2.5 md:mt-0" />
                  <div className="font-bold font-black text-3xl md:text-[64px] md:leading-none">
                    OUR SERVICE
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 pt-4 md:pt-8">
                <div className="h-px w-16 bg-black mt-3" />
                <p className="text-base text-black font-medium max-w-[363px]">
                  Lorem ipsum dolor sit amet consectetur. Eget vitae leo dolor
                  sed massa. Lorem pulvinar ut amet dictumst id netus neque
                  consectetur semper. Nec et habitant mi amet penatibus purus
                  commodo.
                </p>
              </div>
            </div>
            <ServiceCol
              img="/img/services1.png"
              imgAlt="service image 1"
              imgWidth={614}
              imgHeight={448}
              title="DIGITAL PRODUCT SELLING ON INTERNET"
              btnText="Explore services"
              btmClass="left-0 -bottom-[109px]"
            />
          </div>
        </div>
      </section>
      <section className="pt-12 lg:py-12">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-32 justify-between">
            <ServiceCol
              img="/img/services2.png"
              imgAlt="service image 2"
              imgWidth={614}
              imgHeight={523}
              title="DIGITAL PRODUCT SELLING ON INTERNET"
              btnText="Explore services"
              btmClass="right-0 bottom-[59px]"
            />
            <div className="lg:mt-16">
              <ServiceCol
                img="/img/services3.png"
                imgAlt="service image 3"
                imgWidth={485}
                imgHeight={624}
                title="DIGITAL PRODUCT SELLING ON INTERNET"
                btnText="Explore services"
                btmClass="right-0 -bottom-[109px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-12 pb-12 lg:pt-12 lg:pb-44">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-32 justify-between">
            <ServiceCol
              img="/img/services4.png"
              imgAlt="service image 4"
              imgWidth={614}
              imgHeight={683}
              title="DIGITAL PRODUCT SELLING ON INTERNET"
              btnText="Explore services"
              btmClass="right-0 -bottom-[109px]"
            />
            <div className="lg:mt-16">
              <ServiceCol
                img="/img/services5.png"
                imgAlt="service image 5"
                imgWidth={614}
                imgHeight={408}
                title="DIGITAL PRODUCT SELLING ON INTERNET"
                btnText="Explore services"
                btmClass="right-0 -bottom-[109px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
