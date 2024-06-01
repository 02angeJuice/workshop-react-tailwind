import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ToastContainer, toast } from "react-toastify"

import TopicSection from "../Fragments/TopicSection"
import Element3D from "../Element3D"

import { emailjsSend } from "../../services/useSendMail"

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

export default function Contact() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  })

  const sendEmail = async (formData) => {
    try {
      const result = await toast.promise(
        emailjsSend({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: {
            from_name: formData?.name,
            from_email: formData?.email,
            to_name: "hello",
            message: formData?.message,
          },
        }),
        {
          pending: "Sending email",
          success: "Success",
          error: "Fail",
        },
        {
          autoClose: 2500,
          closeOnClick: true,
          pauseOnHover: true,
        }
      )

      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <ToastContainer />
      <section
        id="contact"
        className="py-16 bg-n-8 text-white"
        style={{
          backgroundImage: "url(my-self/cover-1.jpg)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <TopicSection id="contact" obsName="observe" iconName="FaPaperPlane">
            Let's&nbsp;
            <span className=" text-lime-200 font-extrabold">contact</span>
            &nbsp;to me
          </TopicSection>

          <form id="hook-form" onSubmit={handleSubmit(sendEmail)}>
            <div className="mt-10 rounded-xl">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
                  <div>
                    <input
                      className={`w-full h-10 rounded-md outline-none text-n-7 text-xl font-semibold px-4 py-6
                    ring-2 ring-n-4 bg-n-1 shadow-black shadow-lg
                    focus:ring-sky-500
                    ${errors?.name ? "ring-red-500" : ""}
                    `}
                      {...register("name")}
                      placeholder="Name"
                      type="text"
                    />
                    <div className="mt-1 text-red-300">
                      {errors?.name?.message || ""}
                    </div>
                  </div>

                  <div>
                    <input
                      className={`w-full h-10 rounded-md outline-none  text-n-7 text-xl font-semibold px-4 py-6
                    ring-2 ring-n-4 bg-n-1 shadow-black shadow-lg
                    focus:ring-sky-500
                    ${errors?.email ? "ring-red-500" : ""}
                    `}
                      {...register("email")}
                      placeholder="Email"
                      type="email"
                    />
                    <div className="mt-1 text-red-300">
                      {errors?.email?.message || ""}
                    </div>
                  </div>

                  <div>
                    <textarea
                      className={`w-full rounded-md outline-none  text-n-7 text-xl font-semibold px-4 py-6
                      ring-2 ring-n-4 bg-n-1 shadow-black shadow-lg
                      focus:ring-sky-500
                      ${errors?.message ? "ring-red-500" : ""}
                      `}
                      {...register("message")}
                      placeholder="Message"
                      rows="5"
                      cols="50"
                    />
                    <div className="mt-1 text-red-300">
                      {errors?.message?.message || ""}
                    </div>
                  </div>

                  <div className="text-right">
                    <button
                      type="submit"
                      className="w-full lg:w-auto bg-sky-500 text-white text-xl font-semibold px-6 py-2 rounded-lg inline-block
                  transition-all duration-75 ease-out
                  border-b-[4px] border-sky-700

                  hover:-translate-y-[1px]
                  hover:border-b-[6px]
                  hover:bg-sky-300
                  active:border-b-[2px] 
                  active:bg-sky-700
                  active:translate-y-[2px]
                "
                    >
                      Send Message
                    </button>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <Element3D />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

const formSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
})
