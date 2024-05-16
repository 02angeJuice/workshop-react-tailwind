import React from "react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-n-8  text-white"
      style={{
        backgroundImage: "url(my-self/cover-1.jpg)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto">
        <div className="text-3xl font-semibold">
          Let's<span className="text-lime-300 font-extrabold"> contact</span> to
          me
        </div>

        {/* <h2 className="text-3xl font-semibold">Contact</h2>
        <p className=" text-lg mt-4">
          We'd love to hear from you. Contact us today.
        </p>

        <a
          href=""
          className="bg-blue-500 text-white px-6 py-2 rounded-full mt-8 inline-block hover:bg-blue-700"
        >
          Contact Us
        </a> */}
      </div>
    </section>
  )
}
