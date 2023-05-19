/*
 * @Author: MMMMob dengt9428@gmail.com
 * @Date: 2023-05-10 19:04:18
 * @LastEditors: MMMMob dengt9428@gmail.com
 * @LastEditTime: 2023-05-18 20:07:19
 * @FilePath: \portfolio-websitec:\Users\DT\Desktop\amazarashi-demo\pages\AlbumPage.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';
import Head from "next/head";
import { Fade } from "react-awesome-reveal";
import ResizeObserver from "resize-observer-polyfill"; // Import ResizeObserver
import Navber from "@/components/Navber";
import BackgroundPage from "@/components/BackgroundPage";
import AlbumItem from "@/components/AlbumItem";
const ToTop = dynamic(() => import('@/components/ToTop'));
const Footer = dynamic(() => import('@/components/Footer'));

import albumData1 from "../public/data/AlbumPage.json";
import albumData2 from "../public/data/AlbumPage2.json";
import albumData3 from "../public/data/AlbumPage3.json";
import albumData4 from "../public/data/AlbumPage4.json";
const banners = require("../public/data/PageImage.json");

const TABS = [
  { label: "ALL", component: <AlbumItem albumData={albumData1} /> },
  { label: "SINGLE", component: <AlbumItem albumData={albumData2} /> },
  { label: "ALBUM", component: <AlbumItem albumData={albumData3} /> },
  { label: "DVD/BD", component: <AlbumItem albumData={albumData4} /> },
];

export default function AlbumPage() {
  const [currentTab, setCurrentTab] = useState(TABS[0].label);
  const [componentHeight, setComponentHeight] = useState(0);
  const textComponentRef = useRef(null);

  useEffect(() => {
    const textComponent = textComponentRef.current;
    if (textComponent) {
      const observer = new ResizeObserver((entries) => {
        const { height } = entries[0].contentRect;
        setComponentHeight(height);
      });
      observer.observe(textComponent);
      return () => observer.disconnect();
    }
  }, []);

  const calculateVisibleImages = React.useMemo(() => {
    const imageHeight = 322; // 假设每张图片的高度为 322
    const visibleImages = Math.floor(componentHeight / imageHeight);
    return Math.min(visibleImages, banners.length);
  }, [componentHeight]);

  const selectedTabComponent = React.useMemo(() => {
    const selectedTab = TABS.find((tab) => tab.label === currentTab);
    return selectedTab ? selectedTab.component : null;
  }, [currentTab]);

  const handleClick = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <div>
      <Head>
        <title>Amazarashi Site</title>
        <meta name="description" content="A Japanese band introduction site." />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <BackgroundPage className="-z-50" />
      <Fade>
        <Navber className="z-50" />
        <div className="w-[85%] lg:w-[65%] md:w-[90%] sm:w-[70%] mx-auto my-6 mb-20">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 md:col-span-3">
              <div className="mb-2 bg-black text-white">
                <div className="ml-2">Album</div>
              </div>
              <div className="flex justify-center text-center text-sm mb-2 cursor-pointer transition-[0.8s] duration-[ease]">
                {TABS.map((tab) => (
                  <div
                    key={tab.label}
                    className={`border-t-2 border-b-2 px-2 ${
                      currentTab === tab.label
                        ? "border-black bg-black text-white"
                        : "border-black hover:bg-black hover:text-white"
                    }`}
                    onClick={() => handleClick(tab.label)}
                  >
                    {tab.label}
                  </div>
                ))}
              </div>

              <div
                className="border-gray-500"
                ref={textComponentRef}
                id="text-component"
              >
                <Fade>{selectedTabComponent}</Fade>
              </div>
            </div>
            <div className="col-span-1 hidden md:block">
              {banners.slice(0, calculateVisibleImages).map((banner, index) => (
                <Image
                  key={index}
                  src={banner.src}
                  alt={banner.alt}
                  width={230}
                  height={322}
                  priority={true}
                  className="cursor-pointer hover:opacity-75 mb-2"
                  loading="eager" // Add loading="eager" for image preloading
                />
              ))}
            </div>
          </div>
        </div>
        <ToTop />
        <Footer />
      </Fade>
    </div>
  );
}
