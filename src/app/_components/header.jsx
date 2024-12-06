"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Main() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Adjust based on when you want to highlight the section
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header activeSection={activeSection} />
      <Content />
    </div>
  );
}

export default Main;




function Header({ activeSection }) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">Malluri Raj Kumar</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Front End Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {['about', 'experience', 'projects'].map((section) => (
              <li key={section}>
                <Link
                  href={`#${section}`}
                  className={`group flex items-center py-3 ${activeSection === section ? 'active' : ''
                    }`}
                >
                  <span
                    className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 
                group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest ${activeSection === section
                      ? 'text-slate-200'
                      : 'text-slate-500'
                      } group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                  >
                    {section.toUpperCase()}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <SocialLinks />
    </header>
  );
}

function SocialLinks() {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      <li className="mr-5 shrink-0 text-xs"><Link className="block hover:text-slate-200" href="https://github.com/rkm10" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub"><span className="sr-only">GitHub</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></Link></li>
      <li className="mr-5 shrink-0 text-xs"><Link className="block hover:text-slate-200" href="https://in.linkedin.com/in/malluri-rajkumar-838b04338" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn"><span className="sr-only">LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg></Link></li>
      <li className="mr-5 shrink-0 text-xs"><Link className="block hover:text-slate-200" href="https://instagram.com/raj.malluri/" target="_blank" rel="noreferrer noopener" aria-label="Instagram (opens in a new tab)" title="Instagram"><span className="sr-only">Instagram</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path></svg></Link></li>
    </ul>
  );
}





function Content() {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">

      {/* About */}
      <section id="about" className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label="About me">
        <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only 
        lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
        </div>
        <div>
          <p className="mb-4">I’m a versatile developer with a knack for building intuitive, performant, and visually engaging web applications. My approach to development is grounded in creating solutions that are not only technically sound but also user-centered and accessible.</p>
          <p className="mb-4">Currently, I'm a Front-End Engineer at <Link className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.noveloffice.in/" target="_blank" rel="noreferrer noopener" aria-label="Novel Office (opens in a new tab)">Novel Office</Link>,where I specialize in delivering seamless digital experiences. My work includes developing custom features, refining interfaces, and ensuring the highest level of accessibility for users across platforms.</p>
          <p className="mb-4">With a background that spans a wide range of technologies, including <Link className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://react.dev/" target="_blank" rel="noreferrer noopener" aria-label="React (opens in a new tab)">React</Link>, <Link className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://nextjs.org/" target="_blank" rel="noreferrer noopener" aria-label="start-up (opens in a new tab)">Next.js</Link> and
            <Link className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://wordpress.com/" target="_blank" rel="noreferrer noopener" aria-label="digital product studio (opens in a new tab)"> Wordpress</Link>.  and emerging DevOps practices,
            I’ve contributed to projects ranging from interactive dashboards to scalable web components. I take pride in merging modern design principles with functional code to deliver products that leave a lasting impact.</p>
          <p>When I’m not coding, you’ll often find me strategizing in chess, exploring immersive manga and manhwa worlds, spending quality time with my loved ones, or unlocking the <span className="group/raj lg:cursor-[url('/images/raj/luffy.png'),_pointer] inline-flex lg:font-medium lg:text-slate-200" ><span className="sr-only">Mysteries</span>
            <span className="group-hover/raj:text-red-400 transition duration-75 group-hover/raj:-translate-y-px delay-[50ms]" aria-hidden="true">M</span>
            <span className="group-hover/raj:text-red-500 transition duration-75 group-hover/raj:-translate-y-px delay-[75ms]" aria-hidden="true">y</span>
            <span className="group-hover/raj:text-red-600 transition duration-75 group-hover/raj:-translate-y-px delay-[100ms]" aria-hidden="true">s</span>
            <span className="group-hover/raj:text-red-700 transition duration-75 group-hover/raj:-translate-y-px delay-[125ms]" aria-hidden="true">t</span>
            <span className="group-hover/raj:text-red-800 transition duration-75 group-hover/raj:-translate-y-px delay-[150ms]" aria-hidden="true">e</span>
            <span className="group-hover/raj:text-cyan-400 transition duration-75 group-hover/raj:-translate-y-px delay-[175ms]" aria-hidden="true">r</span>
            <span className="group-hover/raj:text-cyan-400 transition duration-75 group-hover/raj:-translate-y-px delay-[200ms]" aria-hidden="true">i</span>
            <span className="group-hover/raj:text-sky-400 transition duration-75 group-hover/raj:-translate-y-px delay-[225ms]" aria-hidden="true">e</span>
            <span className="group-hover/raj:text-blue-400 transition duration-75 group-hover/raj:-translate-y-px delay-[250ms]" aria-hidden="true">s</span> &nbsp;</span>
            of Hyrule in my downtime.
          </p>
        </div>

      </section>


      {/* experience */}
      <section id="experience" className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label="Work experience">
        <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only 
        lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
        </div>
        <div>
          <ol className='group/list'>
            <li className='mb-12'>
              <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block
               lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">2023 — Present</header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://www.noveloffice.in"
                        target="_blank" rel="noreferrer noopener" aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Web Developer | <span className="inline-block">Novel Office
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 
                          group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd">
                            </path>
                          </svg>
                        </span>
                        </span>
                      </Link>
                    </div>
                  </h3>
                  <>
                    <p className="mt-2 text-sm leading-normal">Build and maintain critical components used to construct Novel Office frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Wrodpress</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Frappe</div>
                      </li>
                    </ul>
                  </>
                </div>

              </div>
            </li>

          </ol>
        </div>
        <div>
          <ol className='group/list'>
            <li className='mb-12'>
              <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block
               lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">2023 — Present</header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://www.noveloffice.in"
                        target="_blank" rel="noreferrer noopener" aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Web Developer | <span className="inline-block">Novel Office
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 
                          group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd">
                            </path>
                          </svg>
                        </span>
                        </span>
                      </Link>
                    </div>
                  </h3>
                  <>
                    <p className="mt-2 text-sm leading-normal">Build and maintain critical components used to construct Novel Office frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Wrodpress</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Frappe</div>
                      </li>
                    </ul>
                  </>
                </div>

              </div>
            </li>

          </ol>
        </div>
        <div>
          <ol className='group/list'>
            <li className='mb-12'>
              <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block
               lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">2023 — Present</header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://www.noveloffice.in"
                        target="_blank" rel="noreferrer noopener" aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Web Developer | <span className="inline-block">Novel Office
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 
                          group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd">
                            </path>
                          </svg>
                        </span>
                        </span>
                      </Link>
                    </div>
                  </h3>
                  <>
                    <p className="mt-2 text-sm leading-normal">Build and maintain critical components used to construct Novel Office frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Wrodpress</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Frappe</div>
                      </li>
                    </ul>
                  </>
                </div>

              </div>
            </li>

          </ol>
        </div>
        <div>
          <ol className='group/list'>
            <li className='mb-12'>
              <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block
               lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">2023 — Present</header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="https://www.noveloffice.in"
                        target="_blank" rel="noreferrer noopener" aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Web Developer | <span className="inline-block">Novel Office
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 
                          group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd">
                            </path>
                          </svg>
                        </span>
                        </span>
                      </Link>
                    </div>
                  </h3>
                  <>
                    <p className="mt-2 text-sm leading-normal">Build and maintain critical components used to construct Novel Office frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Wrodpress</div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Frappe</div>
                      </li>
                    </ul>
                  </>
                </div>

              </div>
            </li>

          </ol>
        </div>
      </section>


      {/* Projects */}

      <section id='projects' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label="Projects">
        <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto 
        lg:w-full lg:px-0 lg:py-0 lg:opacity-0 custom-cursor-default-hover'>
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
        </div>
        <div className='custom-cursor-default-hover'>
          <ul className='group/list custom-cursor-default-hover'>
            <li className='mb-12'>
              <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100
               lg:group-hover/list:opacity-50'>
                <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 
                lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                <div className='z-10 sm:order-2 sm:col-span-6'>
                  <h3>
                    <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://github.com/rkm10" target="_blank" rel="noreferrer noopener" aria-label="Build a Spotify Connected App (opens in a new tab)">
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block custom-cursor-on-hover"></span>
                      <span>Build a Spotify Connected
                        <span className="inline-block">App<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd">
                          </path></svg></span>
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.</p>
                </div>
                <Image
                  alt="Luffy in Gear 5 from One Piece"
                  loading="lazy"
                  width={200}
                  height={48}
                  decoding="async"
                  data-nimg="1"
                  className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  src="https://www.dexerto.com/cdn-image/wp-content/uploads/2023/08/16/one-piece-gear-5-luffy.jpeg"
                />
              </div>
            </li>
          </ul>

        </div>
        <div className='custom-cursor-default-hover'>
          <ul className='group/list custom-cursor-default-hover'>
            <li className='mb-12'>
              <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100
               lg:group-hover/list:opacity-50'>
                <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 
                lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                <div className='z-10 sm:order-2 sm:col-span-6'>
                  <h3>
                    <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://github.com/rkm10" target="_blank" rel="noreferrer noopener" aria-label="Build a Spotify Connected App (opens in a new tab)">
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block custom-cursor-on-hover"></span>
                      <span>Build a Spotify Connected
                        <span className="inline-block">App<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd">
                          </path></svg></span>
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.</p>
                </div>
                <Image
                  alt="Luffy in Gear 5 from One Piece"
                  loading="lazy"
                  width={200}
                  height={48}
                  decoding="async"
                  data-nimg="1"
                  className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  src="https://www.dexerto.com/cdn-image/wp-content/uploads/2023/08/16/one-piece-gear-5-luffy.jpeg"
                />
              </div>
            </li>
          </ul>

        </div>
        <div className='custom-cursor-default-hover'>
          <ul className='group/list custom-cursor-default-hover'>
            <li className='mb-12'>
              <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100
               lg:group-hover/list:opacity-50'>
                <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 
                lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                <div className='z-10 sm:order-2 sm:col-span-6'>
                  <h3>
                    <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://github.com/rkm10" target="_blank" rel="noreferrer noopener" aria-label="Build a Spotify Connected App (opens in a new tab)">
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block custom-cursor-on-hover"></span>
                      <span>Build a Spotify Connected
                        <span className="inline-block">App<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd">
                          </path></svg></span>
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.</p>
                </div>
                <Image
                  alt="Luffy in Gear 5 from One Piece"
                  loading="lazy"
                  width={200}
                  height={48}
                  decoding="async"
                  data-nimg="1"
                  className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  src="https://www.dexerto.com/cdn-image/wp-content/uploads/2023/08/16/one-piece-gear-5-luffy.jpeg"
                />
              </div>
            </li>
          </ul>

        </div>

      </section>
    </main>
  )
}