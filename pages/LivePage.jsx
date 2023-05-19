/*
 * @Author: MMMMob dengt9428@gmail.com
 * @Date: 2023-05-14 19:35:36
 * @LastEditors: MMMMob dengt9428@gmail.com
 * @LastEditTime: 2023-05-18 20:10:39
 * @FilePath: \portfolio-websitec:\Users\DT\Desktop\amazarashi-demo\pages\LivePage.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';
import Head from "next/head";
import Navber from "@/components/Navber";
import BackgroundPage from "@/components/BackgroundPage";
import Accordion from "@/components/Accordion";
import { Fade } from "react-awesome-reveal";

const ToTop = dynamic(() => import('@/components/ToTop'));
const Footer = dynamic(() => import('@/components/Footer'));
const banners = require("../public/data/PageImage.json");
const text = require("../public/data/LivePage.json");

const LivePage = () => {
  const [componentHeight, setComponentHeight] = useState(0);
  const textComponentRef = useRef(null);
  const [numToShow, setNumToShow] = useState(10);

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

  const calculateVisibleImages = () => {
    const imageHeight = 322;
    const visibleImages = Math.ceil(componentHeight / imageHeight);
    return Math.min(visibleImages, banners.length);
  };

  const accordions = text
    .slice(0, numToShow)
    .map((accordion, index) => (
      <Accordion
        key={index}
        title={accordion.title}
        content={accordion.contentLines}
      />
    ));

  const handleLoadMore = () => {
    setNumToShow(numToShow + 3);
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
                <div className="ml-2">Live</div>
              </div>
              <div ref={textComponentRef} id="text-component">
                <div className="mt-4">{accordions}</div>
                <div className="text-center my-4">
                  {numToShow < text.length && (
                    <button className="cursor-pointer border-2 border-white bg-black text-white hover:bg-white hover:border-black hover:text-black font-bold py-2 px-4 rounded" onClick={handleLoadMore}>Load More</button>
                  )}
                </div>
              </div>
            </div>

            <div className="col-span-1 hidden md:block">
              {banners
                .slice(0, calculateVisibleImages())
                .map((banner, index) => (
                  <Image
                    key={index}
                    src={banner.src}
                    alt={banner}
                    width={230}
                    height={322}
                    priority={true}
                    className="cursor-pointer hover:opacity-75 mb-2"
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
};

export default LivePage;
