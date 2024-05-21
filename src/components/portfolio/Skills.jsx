import React, { useContext, useEffect, useState } from "react"
import IconLinkSkill from "../Fragments/IconLinkSkill"
import { ImagesModalContext } from "../../contexts"

import TopicSection from "../Fragments/TopicSection"
import { tech_stacks, works } from "../../constants/dummy_data"

const filter = [
  { title: "All", category: "ALL" },
  { title: "Mobile", category: "MOBILE" },
  { title: "React", category: "REACT" },
]

export default function Skills() {
  const { openModal } = useContext(ImagesModalContext)

  const [cate, setCate] = useState("ALL")
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    const fetchData = () => {
      const newList = works.filter(
        (item) => cate === "ALL" || item.category?.includes(cate)
      )

      setDataList(newList)
    }

    fetchData()
  }, [cate])

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto">
        <TopicSection id="skills" obsName="observe" iconName="FaTrophy">
          <span className="text-lime-200 font-extrabold">Skills</span>
          &nbsp;and other
        </TopicSection>

        {/* Filter Categories */}
        <div className="mt-5 flex gap-4">
          {filter?.map((item, idx) => {
            return (
              <button
                type="button"
                key={idx}
                onClick={() => setCate(item?.category)}
                className={`px-3 py-1 font-semibold rounded-lg 
                hover:${cate === item?.category ? "bg-n-6" : "bg-lime-300"}
                hover:${cate === item?.category ? "text-lime-300" : "text-n-6"}
                
                ${
                  cate === item?.category
                    ? "bg-n-6 text-lime-300 outline outline-lime-500 outline-2"
                    : "bg-n-1 text-n-7"
                }`}
              >
                {item?.title}
              </button>
            )
          })}
        </div>

        {/* Works */}
        <div className="mt-10">
          <div className="grid grid-cols-12 gap-5 mt-5">
            {dataList?.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
                >
                  <div
                    className="p-4 bg-n-6 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between
                    h-full
                    hover:ring-4
                    hover:ring-lime-300
                    hover:bg-n-7
                    hover:shadow-lg hover:shadow-lime-100
                    group"
                  >
                    <div>
                      {/* Thumbnail */}
                      <div className="h-48 rounded-md overflow-hidden">
                        <img
                          className="w-full h-full object-contain
                          transition-transform duration-100
                          group-hover:scale-110"
                          src={item?.thumbnail}
                          alt={item?.title}
                        />
                      </div>

                      {/* Title & Description */}
                      <div className="my-2 text-center md:text-left">
                        <blockquote>
                          <p
                            className="text-lg font-medium
                      
                          "
                          >
                            {item?.title}
                          </p>
                        </blockquote>
                        <p className="text-xs text-n-3 font-mono">
                          {item?.description}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="space-y-2 ">
                      <div className="flex space-x-2 justify-start">
                        {item?.images?.length > 0 ? (
                          <IconLinkSkill
                            iconName="FaPhotoVideo"
                            color="red"
                            open={() => openModal(item?.images)}
                          />
                        ) : (
                          ""
                        )}

                        {item?.link_github ? (
                          <IconLinkSkill
                            iconName="FaGithubAlt"
                            color="lime"
                            link={item?.link_github}
                          />
                        ) : (
                          ""
                        )}

                        {item?.link_web ? (
                          <IconLinkSkill
                            iconName="FaGlobeAsia"
                            color="sky"
                            link={item?.link_web}
                          />
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="flex gap-1 flex-wrap border-t-[1px] border-n-5 pt-2 border-dashed">
                        {item?.tags?.map((cate, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 bg-n-5 rounded-md"
                          >
                            {cate}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tech Stacks */}
        <div className="mt-10">
          <h2 className="sectionHeadText text-2xl">My stacks used</h2>
          <div className="flex flex-wrap gap-2 mt-5">
            {tech_stacks?.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-n-5 rounded-md 
                transition-transform duration-100
                hover:scale-110
                hover:ring-4 ring-lime-300
                hover:bg-n-7"
              >
                <img className="h-12 w-auto " src={item?.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
