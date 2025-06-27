import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

export default function Contact() {
  return (
    <>
  <div className="container-head mx-auto px-4 py-4 flex flex-col items-center justify-center">
  <h1 className="text-2xl font-bold mb-6 text-center">Get In Touch</h1>
  <p className="mb-6 text-center max-w-2xl">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel, aliquid optio cupiditate magni quos, qui numquam architecto rem eius autem temporibus. Ullam earum rerum quaerat odit placeat culpa corporis.
  </p>
</div>

<div className="container grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto px-4 py-8 justify-items-center">
  <div className="card bg-gray-100 p-6 rounded-xl text-center shadow-sm w-full max-w-xs flex flex-col items-center justify-center">
    <span className="text-green-400 text-3xl flex items-center justify-center h-12 w-12 mb-4">
      <MdLocationPin />
    </span>
    <h3 className="text-lg font-semibold">102 Street 2714 Donovan</h3>
    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
  </div>

  <div className="card bg-gray-100 p-6 rounded-xl text-center shadow-sm w-full max-w-xs flex flex-col items-center justify-center">
    <span className="text-green-400 text-3xl flex items-center justify-center h-12 w-12 mb-4">
      <FiPhoneCall />
    </span>
    <h3 className="text-lg font-semibold">+02123456788</h3>
    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
  </div>

  <div className="card bg-gray-100 p-6 rounded-xl text-center shadow-sm w-full max-w-xs flex flex-col items-center justify-center">
      <span className="text-green-400 text-3xl flex items-center justify-center h-12 w-12 mb-4">
        <MdOutlineMail />
      </span>
      <h3 className="text-lg font-semibold">info@example.com</h3>
      <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  </div>


  <section className='send-us min-h-screen bg-white m-10  px-4 py-8 shadow-2xl'>
      <div className="container text-2xl mb-6 text-center">
        <h2 className=' font-bold py-2'>Send Us</h2>
        <p >Contact us for all quesitions and opinions, or you can solve your problem in a shorter time with our contact<br/> offices. </p>
      </div>

      <div className="flex items-center justify-center p-4 w-full ">
      <form className="bg-white p-6  rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="mb-4 w-full md:w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="text"
              id="name"
              placeholder="Name"
            />
          </div>

          <div className="mb-4 w-full md:w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
    </div>


    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
        Phone number
      </label>
      <input
        className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
        type="tel"
        id="phone"
        placeholder="Phone number"
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
        Your message
      </label>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 h-24 resize-none"
        id="message"
        placeholder="Your message"
      ></textarea>
    </div>

    <button
      className="w-1/2 bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600 transition duration-200"
      type="submit"
    >
      Send Message
    </button>
  </form>
</div>
  </section>

    
    </>
  )
}
