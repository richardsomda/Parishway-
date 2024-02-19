"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxDividerVertical } from "react-icons/rx";
import { MdContactSupport } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from 'next/router';



export default function Navbar({ currentPage }) {
    const [menu, setMenu] = useState(currentPage);

    return (
        <div className="w-[80%] mx-auto mt-8 mb-4">
            {/* nav content */}
            <div className=" hidden md:flex items-center justify-between ">
                {/* image */}
                <Link href={"/"}>
                    <button>
                        <Image
                            src={"/pwlogo.png"}
                            width={200}
                            height={200}
                            alt="parishway_logo"
                            className="lg:w-[200px] md:w-[150px]"
                        />
                    </button>
                </Link>

                <div className="flex items-center gap-4">
                    <Link href={"/"} onClick={() => setMenu("Home")}
                    >
                        <div>
                            <button
                                onClick={() => setMenu("Home")}
                                className={`text-[12px] lg:text-[16px] ${menu === "Home"
                                    ? " font-medium  px-4 py-1 rounded-full bg-primary text-white"
                                    : "font-medium  px-4 py-2 rounded-full text-primary"
                                    } `}
                            >
                                Home
                            </button>
                        </div>
                    </Link>

                    <Link href={"/features"} onClick={() => setMenu("Features")}
                    >
                        <div>
                            <button
                                onClick={() => setMenu("Features")}
                                className={`text-[12px] lg:text-[16px] ${menu === "Features"
                                    ? " font-medium  px-4 py-1 rounded-full bg-primary text-white"
                                    : "font-medium  px-4 py-2 rounded-full text-primary"
                                    } `}
                            >
                                Features
                            </button>
                        </div>
                    </Link>
                    <Link href={"/register"} onClick={() => setMenu("Register")}
                    >
                        <div>
                            <button
                                onClick={() => setMenu("Register")}
                                className={`text-[12px] lg:text-[16px] ${menu === "Register"
                                    ? " font-medium  px-4 py-1 rounded-full bg-primary text-white"
                                    : "font-medium  px-4 py-2 rounded-full text-primary"
                                    } `}
                            >
                                Register
                            </button>
                        </div>
                    </Link>
                    <Link href={"#"} onClick={() => setMenu("Contact")}
                    >
                        <div>
                            <button
                                onClick={() => setMenu("Contact")}
                                className={`text-[12px] lg:text-[16px] ${menu === "Contact"
                                    ? " font-medium  px-4 py-1 rounded-full bg-primary text-white"
                                    : "font-medium  px-4 py-2 rounded-full text-primary"
                                    } `}
                            >
                                Contact
                            </button>
                        </div>
                    </Link>
                </div>

                <div className="flex gap-3 items-center">
                    <button className="font-regular text-primary text-[12px] lg:text-[16px]">
                        Parish Login
                    </button>
                    <RxDividerVertical className="text-primary font-regular text-[12px] lg:text-[16px]" />
                    <button>
                        <MdContactSupport className="text-primary font-regular text-[12px] lg:text-[16px]" />
                    </button>
                </div>
            </div>

            {/* mobile Nav */}
            <div className=" md:hidden flex justify-between">
                <button>
                    <Image
                        src={"/pwicongreen.png"}
                        width={30}
                        height={200}
                        alt="parishway_logo"
                        className=""
                    />
                </button>

                <button className="text-primary text-2xl font-bold">
                    <RxHamburgerMenu />
                </button>
            </div>
        </div>
    );
}
