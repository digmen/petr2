import React from 'react'

export default function page() {
  return (
    <main className='mx-[93px] mt-[8px] h-full'>
      <article
        className='bg-[url("/images/hero/hero.png")] bg-cover bg-no-repeat w-full h-screen'
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
    </main>
  )
}
