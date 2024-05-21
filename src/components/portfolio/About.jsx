import React from "react"

import DynamicFAIcon from "../../utils/DynamicFAIcon"
import TopicSection from "../Fragments/TopicSection"

export default function About() {
  return (
    <section id="about" className="py-16 bg-n-7">
      <div className="container mx-auto">
        <TopicSection id="about" obsName="observe" iconName="FaSeedling">
          About&nbsp;
          <span className="text-lime-200 font-extrabold">my-self</span>
        </TopicSection>

        {/* Overview */}
        <div className="mt-10">
          <h2 className="sectionHeadText text-2xl">Overview</h2>

          <div className="grid space-y-5 md:space-x-5 md:grid-cols-12 mt-5">
            <div className="md:col-span-6 lg:col-span-8 col-span-12 text-xl">
              <div
                className="flex flex-col justify-between gap-6"
                style={{ height: "100%" }}
              >
                <p>
                  Passionate about coding and continuously seeking out
                  opportunities to learn and develop new skills. Dedicated and
                  committed to delivering high-quality work, always striving for
                  perfection in every task.
                </p>

                <p className="text-5xl leading-tight">
                  Watcharaphong <br />
                  Sayprang
                </p>

                <div className="flex space-x-5">
                  <a
                    href="files/watcharaphong_cv.pdf"
                    download
                    className="inline-flex space-x-2 items-center text-lg text-nowrap px-6 py-2 rounded-full mt-8
                    transition-all duration-75
                    bg-lime-300 text-black
                    border-b-4 border-lime-700
                    hover:bg-lime-600
                    hover:text-white
                    hover:border-lime-900"
                  >
                    <DynamicFAIcon name="FaDownload" />
                    <span>CV</span>
                  </a>

                  <a
                    href="files/watcharaphong_resume.pdf"
                    download
                    className="inline-flex space-x-2 items-center text-lg text-nowrap px-6 py-2 rounded-full mt-8
                    transition-all duration-75
                    bg-sky-300 text-black
                    border-b-4 border-sky-700
                    hover:bg-sky-600
                    hover:text-white
                    hover:border-sky-900"
                  >
                    <DynamicFAIcon name="FaDownload" />
                    <span>Resume</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-4 col-span-12">
              <img
                className="
                w-screen
                h-[480px]
                object-cover
                rounded-2xl ring-4 ring-n-2
                hover:-translate-y-2
                hover:ring-4 
                hover:ring-lime-300
                hover:shadow-custom-white
                 transition-all duration-100"
                src="my-self/profile.jpg"
              />
            </div>
          </div>
        </div>

        {/* end */}
      </div>
    </section>
  )
}
