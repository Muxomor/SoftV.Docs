import React from "react";
import Translate, {translate} from '@docusaurus/Translate';

const Cta = () => {
  return (
    <>
      <section className="py-5 lg:py-[20px] mx-auto max-w-7xl">
        <div className="container mx-auto">
          <div className="relative z-10 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500 to-blue-700 py-12 px-8 md:p-[25px] ">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full px-4 lg:w-1/2">
                <span className="block mb-4 text-base font-medium text-white">
                  robocadV
                </span>
                <h2 className="mb-6 text-1xl font-bold leading-tight text-white sm:mb-8 sm:text-[30px]/[38px] lg:mb-0">
                  <span className="xs:block">
                    <Translate
                      id="theme.callToAction.progRobots">
                      Program robots 
                    </Translate> 
                  </span>
                  <span>
                    <Translate
                      id="theme.callToAction.today"> today!
                    </Translate> 
                  </span>
                </h2>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="flex flex-wrap lg:justify-end">
                  <a
                    href="https://t.me/SoftVsupport_bot"
                    className="inline-flex py-3 my-1 mr-4 text-base font-medium transition bg-white rounded-md hover:bg-shadow-1 text-primary px-7"
                  >
                    <Translate
                      id="theme.callToAction.submit">
                      Submit Your application
                    </Translate>
                  </a>
                  
                </div>
              </div>
            </div>

            <div>
              <span className="absolute top-0 left-0 z-[-1]">
                <svg
                  width="189"
                  height="162"
                  viewBox="0 0 189 162"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="16"
                    cy="-16.5"
                    rx="173"
                    ry="178.5"
                    transform="rotate(180 16 -16.5)"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-157"
                      y1="-107.754"
                      x2="98.5011"
                      y2="-106.425"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.07" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 z-[-1]">
                <svg
                  width="191"
                  height="208"
                  viewBox="0 0 191 208"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="173"
                    cy="178.5"
                    rx="173"
                    ry="178.5"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-3.27832e-05"
                      y1="87.2457"
                      x2="255.501"
                      y2="88.5747"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" stop-opacity="0.07" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
