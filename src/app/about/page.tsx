import CounterCard from "@/components/CounterCard";
import ServiceCard from "@/components/ServiceCard";
import TeamCard from "@/components/TeamCard";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="pt-12 md:pt-16 lg:pt-32 pb-6 md:pb-8 lg:pb-16">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex justify-between">
            <div className="w-full max-w-2xl">
              <div className="flex gap-2 ">
                <span className="h-3.5 md:h-8 min-w-3.5 md:min-w-8 mt-1.5 md:mt-0 bg-black rounded-full" />
                <div className="font-bold font-black text-3xl md:text-[64px] md:leading-none">
                  CRAFTING DIGITAL EXPERIENCE
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 md:pt-16">
            <Image
              src="/img/men-with-camera.png"
              alt="A mem clicking picture with Black DSLR Camera"
              width={1356}
              height={522}
              className="h-[240px] md:h-[522px] object-cover object-center"
            />
          </div>
        </div>
      </section>
      <section className="py-6 md:py-8 lg:py-16">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="w-3.5 md:w-4 h-3.5 md:h-4 rounded-full bg-black"></div>
              <div className="text-black text-2xl md:text-3xl font-semibold">ABOUT</div>
            </div>
            <div className="text-black text-2xl md:text-3xl font-semibold">(1.1)</div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-4 md:gap-8 lg:gap-32 mt-8 md:mt-16">
            <div>
              <div className="flex items-center gap-4 md:gap-7">
                <div className="font-bold text-black text-2xl md:text-[82px] leading-none">
                  PHOTOBY
                </div>
                <Image
                  src="/img/sm-logo.png"
                  alt="Small rounded logo"
                  height={40}
                  width={40}
                  className="w-4 h-4 md:w-10 md:h-10"
                />
              </div>
              <div className="pt-4 md:pt-9">
                <Image
                  src="/img/camera.png"
                  alt="image of various camera equipment"
                  height={216}
                  width={666}
                />
              </div>
            </div>
            <div className="mt-2 lg:max-w-[553px]">
              <p className="text-black font-medium text-base md:text-lg leading-[24px] md:leading-[31px] mb-7">
                Lorem ipsum dolor sit amet consectetur. Nunc lacus imperdiet
                adipiscing urna. Amet aenean ac faucibus varius curabitur
                consequat pellentesque morbi. Tincidunt eleifend morbi mauris
                nascetur porta vulputate. At egestas mi senectus nam aliquam
                vivamus. Egestas non sit pulvinar faucibus tincidunt at quis
                morbi tortor. Ultrices egestas rhoncus in justo massa
                consectetur est ut magna. Eget vitae duis a aliquam condimentum
                id non scelerisque.
              </p>
              <button className="text-white bg-black leading-none md:leading-8 text-sm md:text-base font-medium rounded-full px-6 md:px-12 py-4 md:py-3.5">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 md:py-8 lg:py-16">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="grid items-center grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-y-12">
            <Image
              src="/img/foxhub.png"
              alt="Fox Hub logo"
              width={128}
              height={30}
              className="mx-auto"
            />
            <Image
              src="/img/goldline.png"
              alt="Goldline logo"
              width={128}
              height={30}
              className="mx-auto"
            />
            <Image
              src="/img/solaytic.png"
              alt="Solaytic logo"
              width={129}
              height={43}
              className="mx-auto"
            />
            <Image
              src="/img/Earth.png"
              alt="Earth logo"
              width={128}
              height={30}
              className="mx-auto"
            />
            <Image
              src="/img/Ztos.png"
              alt="Ztos logo"
              width={129}
              height={51}
              className="mx-auto md:col-start-2 lg:col-start-auto"
            />
            <Image
              src="/img/utosia.png"
              alt="Utosia logo"
              width={128}
              height={32}
              className="mx-auto md:col-start-3 lg:col-start-auto"
            />
          </div>
        </div>
      </section>
      <section className="py-6 md:py-8 lg:py-16">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="w-full h-px bg-black" />
        </div>
      </section>
      <section className="py-6 md:py-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <CounterCard varient="light" number={200} title="VISUALISATION" />
          <CounterCard varient="black" number={7} title="YEARS EXPERIENCE" />
          <CounterCard varient="light" number={32} title="AWWARDS" />
          <CounterCard varient="black" number={16} title="PHOTOGRAPHERS" />
        </div>
      </section>
      <section className="py-6 md:py-8 lg:py-16">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-3.5 md:w-4 h-3.5 md:h-4 rounded-full bg-black"></div>
              <div className="text-black text-2xl md:text-3xl font-semibold">SERVICES</div>
            </div>
            <div className="flex items-center gap-2 md:gap-6">
              <div className="flex items-center gap-1 md:gap-4">
                <div className="text-black text-xs md:text-sm font-semibold">
                  Explore services
                </div>
                <Image
                  src="/img/right_arrow.png"
                  alt="right arrow icon"
                  height={14}
                  width={14}
                  className="w-3 h-3 md:w-[14px] md:h-[14px]"
                />
              </div>
              <div className="text-black text-2xl md:text-3xl font-semibold">(1.2)</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-6 pt-8 md:pt-12">
            <ServiceCard
              img="/img/icon1.png"
              imgAlt="service icon 1"
              title="STRATEGY"
              desp="Lorem ipsum dolor sit amet consectetur. Nunc lacus imperdiet adipiscing
        urna. Amet aenean ac faucibus varius curabitur consequat pellentesque
        morbi."
            />
            <ServiceCard
              img="/img/icon2.png"
              imgAlt="service icon 2"
              title="STRATEGY"
              desp="Lorem ipsum dolor sit amet consectetur. Nunc lacus imperdiet adipiscing
        urna. Amet aenean ac faucibus varius curabitur consequat pellentesque
        morbi."
            />
            <ServiceCard
              img="/img/icon3.png"
              imgAlt="service icon 3"
              title="STRATEGY"
              desp="Lorem ipsum dolor sit amet consectetur. Nunc lacus imperdiet adipiscing
        urna. Amet aenean ac faucibus varius curabitur consequat pellentesque
        morbi."
            />
            <ServiceCard
              img="/img/icon4.png"
              imgAlt="service icon 4"
              title="STRATEGY"
              desp="Lorem ipsum dolor sit amet consectetur. Nunc lacus imperdiet adipiscing
        urna. Amet aenean ac faucibus varius curabitur consequat pellentesque
        morbi."
            />
          </div>
          <div className="pt-8 md:pt-16">
            <Image
              src="/img/camera-single.png"
              alt="camera image"
              width={1356}
              height={680}
            />
          </div>
        </div>
      </section>
      <section className="py-6 md:py-8 lg:py-16">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="bg-black h-px w-full" />
        </div>
      </section>
      <section className="pt-8 lg:pt-16 pb-16 lg:pb-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 md:gap-4">
              <div className="w-3.5 md:w-4 h-3.5 md:h-4 rounded-full bg-black"></div>
              <div className="text-black text-2xl md:text-3xl font-semibold">TEAM</div>
            </div>
            <div className="text-black text-2xl md:text-3xl font-semibold">(1.3)</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 md:gap-y-12 pt-8 md:pt-12">
            <TeamCard img="/img/team1.png" imgAlt="Team Member Image 1" name="John Doe" />
            <TeamCard img="/img/team2.png" imgAlt="Team Member Image 2" name="John Doe" />
            <TeamCard img="/img/team3.png" imgAlt="Team Member Image 3" name="John Doe" />
            <TeamCard img="/img/team4.png" imgAlt="Team Member Image 4" name="John Doe" />
            <TeamCard img="/img/team5.png" imgAlt="Team Member Image 5" name="John Doe" />
            <TeamCard img="/img/team6.png" imgAlt="Team Member Image 6" name="John Doe" />
          </div>
        </div>
      </section>
    </>
  );
}
