import Image from "next/image";
import React from "react";

export default function page() {
    return (
        <div className="max-h-screen items-center w-[75%] md:w-[85%] mt-8 xl:w-[70%] md:pt-32 md:pb-32 xl:pt-16 pb-[200px] mx-auto flex flex-wrap md:flex">
            <div>
                <div className="gap-">
                    <p className="text-primary font-bold">About</p>
                    <h1 className="text-dark text-5xl font-bold mt-2">Parishway </h1>
                    <p className="text-gray-400 mt-1">Version 1.0.0</p>
                </div>

                <div className="w-full flex flex-wrap md:flex items-center gap-8 md:gap-0 ">
                    <div className="w-full mt-2 md:w-[65%] flex flex-col gap-6">
                        <p className="text-">
                            ParishWay is a helpful app designed specifically for Catholic
                            believers in Ghana. It enables you to interact with your church
                            community anytime and anywhere in the world, so whether you’re
                            close to the church or elsewhere, you miss nothing! With
                            ParishWay, you can easily stay updated on announcements, events,
                            and Mass schedules from your local parish, ensuring you never miss
                            out on important gatherings or spiritual moments.{" "}
                        </p>
                        <p className="text-">
                            ParishWay is a helpful app designed specifically for Catholic
                            believers in Ghana. It enables you to interact with your church
                            community anytime and anywhere in the world, so whether you’re
                            close to the church or elsewhere, you miss nothing! With
                            ParishWay, you can easily stay updated on announcements, events,
                            and Mass schedules from your local parish, ensuring you never miss
                            out on important gatherings or spiritual moments.
                        </p>
                    </div>

                    <div className="w-full hidden md:flex md:w-[35%] mx-auto ">
                        <Image
                            src={"/pwicongreen.png"}
                            width={130}
                            height={200}
                            className="mx-auto w-"
                        />
                    </div>
                </div>

                <p className="text-primary font-bold my-8 mb-2">Features</p>

                {/* A row */}
                <div className="w-full flex justify-between">
                    <div className="w-full md:w-3/5 bg-r300">
                        {/* feature one */}
                        <div className="w-full flex flex-wrap md:flex items-cente gap-2 mt- md:gap-0 ">
                            <h1 className="font-bold text-primar text-base w-full md:w-[50%]">
                                Announcements, Events, and Mass Schedules:{" "}
                            </h1>

                            <div className="w-full mt- md:w-[80%] flex flex-col gap-6">
                                <p className="text-">
                                    Stay updated on personalized announcements, event details, and
                                    Mass schedules for Catholic churches across Ghana.
                                </p>
                            </div>
                        </div>

                        {/* feature two */}
                        <div className="w-full flex flex-wrap md:flex items-cente gap-2 mt-12 md:gap-0 ">
                            <h1 className="font-bold text-primar text-base w-full md:w-[50%]">
                                Podcast of Teachings and Sermons:{" "}
                            </h1>

                            <div className="w-full mt- md:w-[80%] flex flex-col gap-6">
                                <p className="text-">
                                    Listen to insightful teachings, sermons, and reflections from
                                    renowned Catholic priests and speakers at your convenience.{" "}
                                </p>
                            </div>
                        </div>
                    </div>


                </div>

                {/* row 2 */}
                <div className="w-full flex justify-between mt-">
                    <div className="w-full md:w-3/5 bg-r300">
                        {/* feature one */}
                        <div className="w-full flex flex-wrap md:flex items-cente gap-2 mt-12 md:gap-0 ">
                            <h1 className="font-bold text-primar text-base w-full md:w-[50%]">
                                Daily Readings, Prayers, and Hymns:
                            </h1>

                            <div className="w-full mt- md:w-[80%] flex flex-col gap-6">
                                <p className="text-">
                                    {" "}
                                    Engage with daily Mass readings, common Catholic prayers, and
                                    a variety of hymns to enrich your spiritual journey.
                                </p>
                            </div>
                        </div>

                        {/* feature two */}
                        <div className="w-full flex flex-wrap md:flex items-cente gap-2 pb-24 mt-12 md:gap-0 ">
                            <h1 className="font-bold text-primar text-base w-full md:w-[50%]">
                                Leadership Information of Churches:{" "}
                            </h1>

                            <div className="w-full mt- md:w-[80%] flex flex-col gap-6">
                                <p className="text-">
                                    Explore detailed information about bishops, priests, and other
                                    clergy members to foster stronger connections with your local
                                    Catholic community.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
