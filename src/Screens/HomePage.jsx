import { Button } from "@nextui-org/react";
import React from "react";

function HomePage() {
  return (
    <>
      <div className="h-[100vh] text-white backdrop-blur-xl z-1 bg-black/30 flex flex-col md:flex-row flex-wrap justify-around items-center">
        <div className="flex flex-col gap-4">
          <div className="font-bold text-5xl">slogan</div>
          <div>
            <p>Empowering Your Financial Journey</p>
          </div>
          <Button
            variant="solid"
            color="primary"
            className="mt-10 inline-block mr-auto"
          >
            {" "}
            Get Started
          </Button>
        </div>
        <div className="flex flex-col gap-4 ">
          <img className="max-w-[500px]" src="/chart.png" />
        </div>
      </div>

      {/* CARDS */}
      <div classname="">
        <div classname="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div classname="flex items-center justify-between mb-4">
            <h5 classname="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Latest Customers
            </h5>
            <a
              href="#"
              classname="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </a>
          </div>
          <div classname="flow-root">
            <ul
              role="list"
              classname="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li classname="py-3 sm:py-4">
                <div classname="flex items-center">
                  <div classname="flex-shrink-0">
                    <img
                      classname="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div classname="flex-1 min-w-0 ms-4">
                    <p classname="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Neil Sims
                    </p>
                    <p classname="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div classname="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div>
                </div>
              </li>
              <li classname="py-3 sm:py-4">
                <div classname="flex items-center ">
                  <div classname="flex-shrink-0">
                    <img
                      classname="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-3.jpg"
                      alt="Bonnie image"
                    />
                  </div>
                  <div classname="flex-1 min-w-0 ms-4">
                    <p classname="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Bonnie Green
                    </p>
                    <p classname="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div classname="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $3467
                  </div>
                </div>
              </li>
              <li classname="py-3 sm:py-4">
                <div classname="flex items-center">
                  <div classname="flex-shrink-0">
                    <img
                      classname="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-2.jpg"
                      alt="Michael image"
                    />
                  </div>
                  <div classname="flex-1 min-w-0 ms-4">
                    <p classname="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Michael Gough
                    </p>
                    <p classname="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div classname="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div>
                </div>
              </li>
              <li classname="py-3 sm:py-4">
                <div classname="flex items-center ">
                  <div classname="flex-shrink-0">
                    <img
                      classname="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-4.jpg"
                      alt="Lana image"
                    />
                  </div>
                  <div classname="flex-1 min-w-0 ms-4">
                    <p classname="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Lana Byrd
                    </p>
                    <p classname="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div classname="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $367
                  </div>
                </div>
              </li>
              <li classname="pt-3 pb-0 sm:pt-4">
                <div classname="flex items-center ">
                  <div classname="flex-shrink-0">
                    <img
                      classname="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-5.jpg"
                      alt="Thomas image"
                    />
                  </div>
                  <div classname="flex-1 min-w-0 ms-4">
                    <p classname="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Thomes Lean
                    </p>
                    <p classname="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div classname="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $2367
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
