"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../css/home-page.css";
import Picture1 from "../assets/CROSSOUT 32.jpg";
import Picture2 from "../assets/CROSSOUT 39.jpg";
import Picture3 from "../assets/4K-Programming-Wallpaper-3840x2160-1.png";
import Picture4 from "../assets/Free-Inspirational-Quotes-Wallpaper-Download.jpg";
import Picture5 from "../assets/keyboard_backlight_purple_212155_1600x1200.jpg";
import Picture7 from "../assets/peakpx.jpg";
import Picture8 from "../assets/phrase_motivation_inspiration_135121_1280x720.jpg";
import Picture10 from "../assets/wednesday-netflix-series-4k-wallpaper-uhdpaper.com-665@0@h.jpg";
import Picture11 from "../assets/Naruto/Jiraya.jpg";
import Picture12 from "../assets/Naruto/2b1c296aef28c4caa86c0d06375f7a6e.jpg";
import Picture13 from "../assets/Naruto/dace28adf1cc40de1fd125baf304e7e3.jpg";
import { FaStar } from "react-icons/fa6";
function HomePage() {
  return (
    <>
      <div className="py-5">
        <div className="w-11/12 mx-auto mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
            <div className="sm:col-span-5">
              <Link href="/blogs/code" className="route">
                <div className="image_zoom">
                  <Image
                    src={Picture3}
                    alt="code wallpaper"
                    className="cursor-pointer"
                  />
                  <div className="content">
                    <div className="words">welcome</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className=" sm:col-span-2">
              <div className="grid grid-cols-1 gap-2">
                <Link href="/blogs/games">
                  <div className="image_zoom">
                    <Image
                      src={Picture1}
                      alt="lockScreen"
                      className="sm:mt-5 cursor-pointer"
                    />
                  </div>
                </Link>
                <Link href="/blogs/gangster">
                  <div className="image_zoom">
                    <Image
                      src={Picture2}
                      alt="gangster"
                      className="sm:mt-5 cursor-pointer"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className=" sm:col-span-5">
              <Link href="/blogs/qoutes">
                <div className="image_zoom">
                  <Image
                    src={Picture4}
                    alt="qoutes"
                    className="cursor-pointer"
                  />
                  <div className="content">
                    <div className="words">welcome</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className=" sm:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="grid grid-cols-1    gap-2">
                  <Link href="/blogs/keyboard">
                    <div className="image_zoom">
                      <Image
                        src={Picture5}
                        alt="keyboard"
                        className="cursor-pointer"
                      />
                    </div>
                  </Link>
                  <Link href="/blogs/kurama">
                    <div className="image_zoom">
                      <Image
                        src={Picture13}
                        alt="kurama"
                        className="cursor-pointer"
                      />
                      <div className="content">
                        <div className="words">welcome</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <Link href="/blogs/moon">
                  <div className="image_zoom">
                    <Image
                      src={Picture7}
                      alt="moon"
                      className="cursor-pointer"
                    />
                  </div>
                </Link>
                <div className=" col-span1 sm:col-span-2">
                  <Link href="/blogs/wednesday">
                    <div className="image_zoom">
                      <Image
                        src={Picture10}
                        alt="wednesday with umbralla"
                        className="cursor-pointer"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" sm:col-span-4">
              <div className="grid col-span-1 gap-6 mt-5">
                <Link href="/blogs/come_on">
                  <div className="image_zoom">
                    <Image
                      src={Picture8}
                      alt="ComeOn qoutes"
                      className="cursor-pointer"
                    />
                  </div>
                </Link>
                <Link href="/blogs/pain">
                  <div className="image_zoom">
                    <Image
                      src={Picture12}
                      alt="pain"
                      className="cursor-pointer"
                    />
                  </div>
                </Link>
                <Link href="/blogs/jiraya" className="">
                  <div className="image_zoom ">
                    <Image
                      src={Picture11}
                      alt="jiraya"
                      className="cursor-pointer"
                    />
                  </div>
                </Link>
                <div>
                  <div className="text-center py-2 text-3xl font-bold texted ">
                    Demo Project For Practice
                  </div>
                  <div className="text-end text-lg font-bold texted ">
                    <button className="px-3 py-2 border-2 rounded-full text-gray-600 border-gray-300">
                      Reload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
