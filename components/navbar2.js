import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link"
const navigation = [
  { name: "Shopfiy", href: "#", current: true },
  { name: "Blog", href: "#", current: false },
  { name: "Careers", href: "#", current: false },
  { name: "Case Studies", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white main1">
      {({ open }) => (
        <>
          <div className="min-w-7xl mx-auto border-b border-gray-50 bg-white px-2 sm:px-6 lg:px-8">
            <div className="relative mx-0 flex h-16 items-center justify-between md:mx-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-orange-500 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <GrFormClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <GiHamburgerMenu
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center img1">
                  <Link href="/home">
                  <Image width={150} height={60} src="/logo2.svg"></Image>
                  </Link>
                </div>
                <div class="p-20">
                  <div class="group inline-block relative drop2">
                    <button
                      className="bg-white-300 text-gray-700 py-2 px-4 rounded inline-flex items-center hover:text-orange-400"
                    >
                      <span className="mr-1 text-xl text-gray-700 hover:text-orange-400">Services</span>
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </button>
                    <ul class="absolute hidden text-gray-700 pt-1 group-hover:block drop1">
                      <li class="">
                        <a
                          class="rounded-t text-xl text-gray-700 bg-white-200 hover:bg-white-400 hover:text-orange-500 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >Wordpress Development</a
                        >
                      </li>
                      <li class="">
                        <a
                          class="bg-white-200 text-xl hover:text-orange-500 text-gray-700 hover:bg-white-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >Blockchain Development</a
                        >
                      </li>
                      <li class="">
                        <a
                          class="rounded-b  text-xl hover:text-orange-500 text-gray-700bg-white-200 hover:bg-white-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >Design and Prototyping
                        </a>
                      </li>
                      <li className="li1">
                        <a
                          class="rounded-b  text-xl hover:text-orange-500 text-gray-700bg-white-200 hover:bg-white-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >Filmmaker Pro Development
                        </a>
                      </li>
                      <li className="li2">
                        <a
                          class="rounded-b  text-xl hover:text-orange-500 text-gray-700bg-white-200 hover:bg-white-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >UI Development
                        </a>
                      </li>
                      <li className="li3">
                        <a
                          class="rounded-b hover:text-orange-500 text-xl text-gray-700bg-white-200 hover:bg-white-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >DB & Backend Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block md:ml-60">
                  <div className="flex space-x-4 nav1">
                    {navigation.map((item) => (
                      <Link href="/">
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "no-underline text-gray-600  hover:text-orange-600"
                            : "no-underline text-gray-600  hover:text-orange-600",
                          "px-3 py-2"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                      </Link>
                    ))}
                    <button className="bg-white-500 text-orange-600 rounded-lg btn1">EN</button>
                    <button className="bg-orange-500 text-white rounded-lg btn2">LET'S SPEAK</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
         <div style={{marginLeft:"900px"}}> <Image src="/iso.svg" width={420} height={620}></Image> </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "no-underline text-gray-600 font-bold  hover:text-orange-600"
                      : "no-underline text-gray-600 hover:text-orange-600 font-bold ",
                    "block rounded-md px-3 py-2 text-base"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
