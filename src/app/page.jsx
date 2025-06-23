import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <main>
      <article
        className='bg-[url("/images/hero/hero.png")] bg-cover bg-no-repeat h-screen mx-[90px] mt-[8px]'
      >
        <aside className='pt-[200px] flex justify-end pr-[32px]'>
          <section className='py-[28px] px-[37px] bg-white/6 backdrop-blur-[5px] w-[300px] flex flex-col gap-[16px] rounded-[20px]'>
            <h3 className='font-[EuropeextNormal] text-[white] text-[16px]'>
              Where others saw limits, we saw room to create differently — and better.
            </h3>
            <p className='font-[GeneralSansRegular] text-[white] text-[14px]'>
              We built a full-cycle agency that merges strategy, design, technology, and marketing into one seamless experience
            </p>
            <p className='font-[GeneralSansRegular] text-[white] text-[14px]'>
              Partner with us to unlock bold ideas, ignite innovation, and build brands that move people — and markets.
            </p>
          </section>
        </aside>
        <article className='pl-[35px] pr-[32px]'>
          <section className='flex flex-col items-end  w-fit'>
            <div className='flex w-fit'>
              <h1 className='font-[EuropeextBold] text-[64px] leading-[64px] text-white'>
                AVENTIA
              </h1>
              <span className='text-[64px] leading-[64px] font-extralight text-white -translate-y-8'>
                ®
              </span>
            </div>
            <div>
              <h2 className='font-[EuropeextNormal] text-[36px] leading-[36px] text-white translate-x-7'>
                STUDIO
              </h2>
            </div>
          </section>
          <section className='flex justify-between items-end'>
            <article>
              <p className='font-[GeneralSansRegular] text-[20px] leading-[20px] text-white mt-[10px]'>
                From strategy to code, we craft brands, build digital products, and bring ideas to <br />
                life — with a full-cycle approach that makes your business unforgettable.
              </p>
            </article>
            <article>
              <a
                href='#'
                className='font-[EuropeextNormal] text-[20px] leading-[20px] text-white flex items-center gap-[15px]'
              >
                scroll down

                <svg
                  width="35"
                  height="8"
                  viewBox="0 0 35 8"
                  fill="none"
                >
                  <path
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  >
                    <animate
                      attributeName="d"
                      dur="1s"
                      repeatCount="indefinite"
                      values="
        M0,4 Q5,0 8.75,4 Q12.5,8 17.5,4 Q22.5,0 26.25,4 Q30,8 35,4;
        M0,4 Q5,8 8.75,4 Q12.5,0 17.5,4 Q22.5,8 26.25,4 Q30,0 35,4;
        M0,4 Q5,0 8.75,4 Q12.5,8 17.5,4 Q22.5,0 26.25,4 Q30,8 35,4
      "
                    />
                  </path>
                </svg>
              </a>
            </article>
          </section>
        </article>
      </article>


      <article className='mt-[128px] px-[90px]'>
        <section className='flex items-center gap-[16px] mb-[44px]'>
          <div className='bg-[#008DBB] w-[8px] h-[8px] rounded-full'>
          </div>
          <p className='font-[EuropeextNormal] text-[16px] leading-[16px] text-[#191919]'>
            About us
          </p>
        </section>
        <section className='flex justify-between'>
          <div>
            <div>
              <h2 className='text-[#191919] text-[64px] leading-[64px] font-[EuropeextBold]'>
                WE ARE
              </h2>
            </div>
            <div className='flex items-center'>
              <Image
                src="/images/aboutus/bluelogo.svg"
                width={67}
                height={45}
                alt="Aventia Studio Logo"
                className="w-[67px] h-[45px]"
              />
              <h1 className='text-[#008DBB] text-[64px] leading-[64px] font-[EuropeextBold]'>
                VENTIA
              </h1>
            </div>
            <h1 className='text-[#008DBB] text-[64px] leading-[64px] font-[EuropeextBold] pl-60'>
              STUDIO
            </h1>
          </div>
          <div className='w-[700px] flex flex-col gap-[30px]'>
            <p className="font-[EuropeextNormal] text-[20px] leading-[24px] text-[#AFAFAF] text-left">
              We are
              <strong className="text-[#1A1A1A]"> Aventia </strong>
              — a
              <strong className="text-[#1A1A1A]"> multidisciplinary </strong>
              studio turning ideas into
              <strong className="text-[#1A1A1A]"> experiences </strong>,
              and experiences into
              <strong className="text-[#1A1A1A]"> results.</strong>
            </p>
            <p className='font-[EuropeextNormal] text-[20px] leading-[20px] text-[#AFAFAF]'>
              Our team blends branding, design, development, and motion into seamless digital <strong className="text-[#1A1A1A]">journeys.</strong>
            </p>
            <p className='font-[EuropeextNormal] text-[20px] leading-[20px] text-[#AFAFAF]'>
              With a <strong className="text-[#1A1A1A]">full—cycle process</strong> and a sharp eye for detail, we help future-focused <strong className="text-[#1A1A1A]">brands move faster, bolder, and smarter.</strong>
            </p>
          </div>
        </section>

        <section>

        </section>

        <section>

        </section>
      </article>
    </main>
  )
}
