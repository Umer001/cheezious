import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4 mt-5">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white dark:bg-gray-700 text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <i className="fa fa-shopping-cart fa-lg"></i>
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              Today's Money
            </p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              $53k
            </h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-green-500">+55%</strong>&nbsp;than last
              week
            </p>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white dark:bg-gray-700 text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-6 text-white"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              Today's Users
            </p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              2,300
            </h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-green-500">+3%</strong>&nbsp;than last
              month
            </p>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white dark:bg-gray-700 text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-6 text-white"
            >
              <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
            </svg>
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              New Clients
            </p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              3,462
            </h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-red-500">-2%</strong>&nbsp;than yesterday
            </p>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white dark:bg-gray-700 text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-6 text-white"
            >
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
            </svg>
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              Sales
            </p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              $103,430
            </h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-green-500">+5%</strong>&nbsp;than
              yesterday
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap sm:flex-row ">
        <div className="w-full sm:w-1/2 xl:w-1/3">
          <div className="mb-4">
            <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <span className="relative p-2 bg-blue-100 rounded-xl">
                    <svg
                      width={25}
                      height={25}
                      viewBox="0 0 256 262"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid"
                    >
                      <path
                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                        fill="#FBBC05"
                      ></path>
                      <path
                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                        fill="#EB4335"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="ml-2 font-bold text-black text-md dark:text-white">
                      Google
                    </span>
                    <span className="ml-2 text-sm text-gray-500 dark:text-white">
                      Google Inc.
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="p-1 border border-gray-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                    </svg>
                  </button>
                  <button className="text-gray-200">
                    <svg
                      width={25}
                      height={25}
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4 space-x-12">
                <span className="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
                  PROGRESS
                </span>
                <span className="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                  HIGH PRIORITY
                </span>
              </div>
              <div className="block m-auto">
                <div>
                  <span className="inline-block text-sm text-gray-500 dark:text-gray-100">
                    Task done :
                    <span className="font-bold text-gray-700 dark:text-white">
                      25
                    </span>
                    /50
                  </span>
                </div>
                <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                  <div className="w-1/2 h-full text-xs text-center text-white bg-purple-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-start my-4 space-x-4">
                <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
                  IOS APP
                </span>
                <span className="flex items-center px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
                  UI/UX
                </span>
              </div>
              <div className="flex -space-x-2">
                <a href="#" className>
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                    src="/images/person/1.jpg"
                    alt="Guy"
                  />
                </a>
                <a href="#" className>
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                    src="/images/person/2.jpeg"
                    alt="Max"
                  />
                </a>
                <a href="#" className>
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                    src="/images/person/3.jpg"
                    alt="Charles"
                  />
                </a>
                <a href="#" className>
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                    src="/images/person/4.jpg"
                    alt="Jade"
                  />
                </a>
              </div>
              <span className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                DUE DATE : 18 JUN
              </span>
            </div>
          </div>
          <div className="mb-4">
            <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <span className="relative p-2 bg-blue-100 rounded-xl">
                    <svg
                      width={25}
                      height={25}
                      viewBox="0 0 2447.6 2452.5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipRule="evenodd" fillRule="evenodd">
                        <path
                          d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
                          fill="#36c5f0"
                        ></path>
                        <path
                          d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
                          fill="#2eb67d"
                        ></path>
                        <path
                          d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
                          fill="#ecb22e"
                        ></path>
                        <path
                          d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
                          fill="#e01e5a"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="ml-2 font-bold text-black text-md dark:text-white">
                      Slack
                    </span>
                    <span className="ml-2 text-sm text-gray-500 dark:text-white">
                      Slack corporation
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="p-1 border border-gray-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                    </svg>
                  </button>
                  <button className="text-gray-200">
                    <svg
                      width={25}
                      height={25}
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4 space-x-12">
                <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-700 rounded-md bg-green-50">
                  COMPLETED
                </span>
                <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-600 bg-white border border-green-600 rounded-md">
                  MEDIUM PRIORITY
                </span>
              </div>
              <div className="block m-auto">
                <div>
                  <span className="inline-block text-sm text-gray-500 dark:text-gray-100">
                    Task done :
                    <span className="font-bold text-gray-700 dark:text-white">
                      50
                    </span>
                    /50
                  </span>
                </div>
                <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                  <div className="w-full h-full text-xs text-center text-white bg-pink-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-start my-4 space-x-4">
                <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
                  IOS APP
                </span>
                <span className="flex items-center px-2 py-1 text-xs font-semibold text-yellow-600 bg-yellow-200 rounded-md">
                  ANDROID
                </span>
              </div>
              <div className="flex -space-x-2">
                <a href="#" className>
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                    src="/images/person/1.jpg"
                    alt="Guy"
                  />
                </a>
                <a href="#" className>
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                    src="/images/person/2.jpeg"
                    alt="Max"
                  />
                </a>
                <a href="#" className>
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                    src="/images/person/3.jpg"
                    alt="Charles"
                  />
                </a>
                <a href="#" className>
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                    src="/images/person/4.jpg"
                    alt="Jade"
                  />
                </a>
              </div>
              <span className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                DUE DATE : 18 JUN
              </span>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 xl:w-1/3">
          <div className="mx-0 mb-4 sm:ml-4 xl:mr-4">
            <div className="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
              <p className="p-4 font-bold text-black text-md dark:text-white">
                My Tasks
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-300 dark:text-white">
                  (05)
                </span>
              </p>
              <ul>
                <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-start text-sm">
                    <span className="mx-4">01</span>
                    <span>Create wireframe</span>
                  </div>
                  <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="mx-4 text-gray-400 dark:text-gray-300"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </li>
                <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-start text-sm">
                    <span className="mx-4">02</span>
                    <span>Dashboard design</span>
                    <span className="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
                      3
                      <svg
                        width={15}
                        height={15}
                        fill="currentColor"
                        className="ml-1"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="flex items-center mx-4 text-gray-400 dark:text-gray-300">
                      3
                      <svg
                        width={15}
                        height={15}
                        className="ml-1"
                        fill="currentColor"
                        viewBox="0 0 384 512"
                      >
                        <path
                          d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="mx-4 text-gray-400 dark:text-gray-300"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </li>
                <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-start text-sm">
                    <span className="mx-4">03</span>
                    <span>Components card</span>
                    <span className="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
                      3
                      <svg
                        width={15}
                        height={15}
                        fill="currentColor"
                        className="ml-1"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="mx-4 text-gray-400 dark:text-gray-300"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </li>
                <li className="flex items-center justify-between py-3 text-gray-400 border-b-2 border-gray-100 dark:border-gray-800">
                  <div className="flex items-center justify-start text-sm">
                    <span className="mx-4">04</span>
                    <span className="line-through">Google logo design</span>
                  </div>
                  <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    viewBox="0 0 1024 1024"
                    className="mx-4 text-green-500"
                  >
                    <path
                      d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </li>
                <li className="flex items-center justify-between py-3 text-gray-400 border-b-2 border-gray-100 dark:border-gray-800">
                  <div className="flex items-center justify-start text-sm">
                    <span className="mx-4">05</span>
                    <span className="line-through">Header navigation</span>
                  </div>
                  <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    viewBox="0 0 1024 1024"
                    className="mx-4 text-green-500"
                  >
                    <path
                      d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </li>
                <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-start text-sm">
                    <span className="mx-4">06</span>
                    <span>International</span>
                    <span className="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
                      3
                      <svg
                        width={15}
                        height={15}
                        fill="currentColor"
                        className="ml-1"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="flex items-center mx-4 text-gray-400 dark:text-gray-300">
                      3
                      <svg
                        width={15}
                        height={15}
                        className="ml-1"
                        fill="currentColor"
                        viewBox="0 0 384 512"
                      >
                        <path
                          d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="mx-4 text-gray-400 dark:text-gray-300"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </li>
                <li className="flex items-center justify-between py-3 text-gray-600 dark:text-gray-200">
                  <div className="flex items-center justify-start text-sm">
                    <span className="mx-4">07</span>
                    <span>Production data</span>
                  </div>
                  <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="mx-4 text-gray-400 dark:text-gray-300"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-4 sm:ml-4 xl:mr-4">
            <div className="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
              <div className="flex items-center justify-between p-4">
                <p className="font-bold text-black text-md dark:text-white">
                  Google
                </p>
                <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                  <svg
                    width={15}
                    height={15}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <g fill="none">
                      <path
                        d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between px-4 py-2 text-gray-600 bg-blue-100 border-l-4 border-blue-500 dark:bg-gray-800">
                <p className="flex items-center text-xs dark:text-white">
                  <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="mr-2 text-blue-500"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  Create wireframe
                </p>
                <div className="flex items-center">
                  <span className="ml-2 mr-2 text-xs font-bold dark:text-gray-200 md:ml-4">
                    25 min 20s
                  </span>
                  <button className="p-1 mr-4 text-sm text-gray-400 bg-blue-500 border rounded">
                    <svg
                      width={17}
                      height={17}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="text-white"
                    >
                      <g fill="none">
                        <path
                          d="M9 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border-b-2 border-gray-100">
                <p className="font-bold text-black text-md dark:text-white">
                  Slack
                </p>
                <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                  <svg
                    width={15}
                    height={15}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <g fill="none">
                      <path
                        d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between px-4 py-2 text-gray-600 border-b-2 border-gray-100">
                <p className="flex items-center text-xs dark:text-white">
                  <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="mr-2"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  International
                </p>
                <div className="flex items-center">
                  <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">
                    30 min
                  </span>
                  <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                    <svg
                      width={15}
                      height={15}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none">
                        <path
                          d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-2 text-gray-600 border-b-2 border-gray-100">
                <p className="flex items-center text-xs dark:text-white">
                  <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="mr-2"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  Slack logo design
                </p>
                <div className="flex items-center">
                  <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">
                    30 min
                  </span>
                  <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                    <svg
                      width={15}
                      height={15}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none">
                        <path
                          d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-2 text-gray-600">
                <p className="flex items-center text-xs dark:text-white">
                  <svg
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="mr-2"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  Dahboard template
                </p>
                <div className="flex items-center">
                  <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">
                    30 min
                  </span>
                  <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                    <svg
                      width={15}
                      height={15}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <g fill="none">
                        <path
                          d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 xl:w-1/3">
          <div className="mb-4">
            <div className="p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
              <div className="flex flex-wrap overflow-hidden">
                <div className="w-full rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl font-bold text-left text-black dark:text-white">
                      Dec 2021
                    </div>
                    <div className="flex space-x-4">
                      <button className="p-2 text-white bg-blue-500 rounded-full">
                        <svg
                          width={15}
                          height={15}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                          ></path>
                        </svg>
                      </button>
                      <button className="p-2 text-white bg-blue-500 rounded-full">
                        <svg
                          width={15}
                          height={15}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="-mx-2">
                    <table className="w-full dark:text-white">
                      <tbody>
                        <tr>
                          <th className="px-2 py-3 md:px-3 ">S</th>
                          <th className="px-2 py-3 md:px-3 ">M</th>
                          <th className="px-2 py-3 md:px-3 ">T</th>
                          <th className="px-2 py-3 md:px-3 ">W</th>
                          <th className="px-2 py-3 md:px-3 ">T</th>
                          <th className="px-2 py-3 md:px-3 ">F</th>
                          <th className="px-2 py-3 md:px-3 ">S</th>
                        </tr>
                        <tr className="text-gray-400 dark:text-gray-500">
                          <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                            25
                          </td>
                          <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                            26
                          </td>
                          <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                            27
                          </td>
                          <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                            28
                          </td>
                          <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                            29
                          </td>
                          <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                            30
                          </td>
                          <td className="px-2 py-3 text-center text-gray-800 cursor-pointer md:px-3 hover:text-blue-500">
                            1
                          </td>
                        </tr>
                        <tr>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            2
                          </td>
                          <td className="relative px-1 py-3 text-center cursor-pointer hover:text-blue-500">
                            3
                            <span className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-blue-500 rounded-full left-1/2"></span>
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            4
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            5
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            6
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            7
                          </td>
                          <td className="relative px-2 py-3 text-center cursor-pointer md:px-3 lg:px-3 hover:text-blue-500">
                            8
                            <span className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-yellow-500 rounded-full left-1/2"></span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            9
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            10
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            11
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            12
                          </td>
                          <td className="px-2 py-3 text-center text-white cursor-pointer md:px-3">
                            <span className="p-2 bg-blue-500 rounded-full">
                              13
                            </span>
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            14
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            15
                          </td>
                        </tr>
                        <tr>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            16
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            17
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            18
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            19
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            20
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            21
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            22
                          </td>
                        </tr>
                        <tr>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            23
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            24
                          </td>
                          <td className="relative px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            25
                            <span className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-red-500 rounded-full left-1/2"></span>
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            26
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            27
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            28
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            29
                          </td>
                        </tr>
                        <tr>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            30
                          </td>
                          <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                            31
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
              <p className="font-bold text-black text-md dark:text-white">
                Messages
              </p>
              <ul>
                <li className="flex items-center my-6 space-x-2">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="/images/person/1.jpg"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <div className="flex flex-col">
                    <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                      Charlie Rabiller
                    </span>
                    <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                      Hey John ! Do you read the NextJS doc ?
                    </span>
                  </div>
                </li>
                <li className="flex items-center my-6 space-x-2">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="/images/person/5.jpg"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <div className="flex flex-col">
                    <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                      Marie Lou
                    </span>
                    <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                      No I think the dog is better...
                    </span>
                  </div>
                </li>
                <li className="flex items-center my-6 space-x-2">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="/images/person/6.jpg"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <div className="flex flex-col">
                    <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                      Ivan Buck
                    </span>
                    <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                      Seriously ? haha Bob is not a child !
                    </span>
                  </div>
                </li>
                <li className="flex items-center my-6 space-x-2">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="/images/person/7.jpg"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <div className="flex flex-col">
                    <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                      Marina Farga
                    </span>
                    <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                      Do you need that design ?
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
