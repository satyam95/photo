import Image from "next/image";

export default function Contact() {
  return (
    <>
      <section className="py-12 md:py-16 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex flex-col flex-col-reverse lg:flex-row gap-12 xl:gap-24">
            <div className="m-auto lg:max-w-[548px]">
              <Image
                src="/img/contact.png"
                alt="man using a computer"
                width={548}
                height={620}
              />
            </div>
            <div className="grow">
              <div className="flex items-center gap-4 pb-12">
              <span className="h-3.5 md:h-8 min-w-3.5 md:min-w-8 mt-1.5 md:mt-0 bg-black rounded-full" />
              <div className="font-bold font-black text-3xl md:text-[64px] leading-none">
                  CONTACT
                </div>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-12 border-b border-black p-2">
                  <input
                    type="text"
                    placeholder="FULL NAME*"
                    className="h-full w-full bg-transparent font-semibold text-black text-sm placeholder:text-black focus:outline-none"
                  />
                </div>
                <div className="h-12 border-b border-black p-2">
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS*"
                    className="h-full w-full bg-transparent font-semibold text-black text-sm placeholder:text-black focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full grid grid-cols-1 gap-6 pt-8">
                <div className="h-12 border-b border-black p-2">
                  <input
                    type="text"
                    placeholder="MESSAGE*"
                    className="h-full w-full bg-transparent font-semibold text-black text-sm placeholder:text-black focus:outline-none"
                  />
                </div>
              </div>
              <div className="pt-12">
                <button className="font-semibold text-black text-base leading-8 py-3.5 px-12 border border-black rounded-full">
                  SEND MESSAGE
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-3 xl:gap-16 pt-16 md:pt-12">
                <div className="flex flex-col md:gap-0.5">
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="h-2.5 w-2.5 bg-black rounded-full" />
                    <h3 className="text-lg font-semibold text-black leading-none">
                      STAY IN THE KNOW
                    </h3>
                  </div>
                  <h4 className="font-medium text-base text-black md:pt-2">
                    Photograpy@biz.com
                  </h4>
                  <h4 className="font-medium text-base text-black">
                    +36 (879) 79879
                  </h4>
                </div>
                <div className="flex flex-col md:gap-0.5">
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="h-2.5 w-2.5 bg-black rounded-full" />
                    <h3 className="text-lg font-semibold text-black leading-none">
                      STAY IN THE KNOW
                    </h3>
                  </div>
                  <h4 className="font-medium text-base text-black md:pt-2">
                    Photograpy@biz.com
                  </h4>
                  <h4 className="font-medium text-base text-black">
                    +36 (879) 79879
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
