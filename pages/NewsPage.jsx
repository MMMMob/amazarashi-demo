/*
 * @Author: MMMMob dengt9428@gmail.com
 * @Date: 2023-05-08 09:25:47
 * @LastEditors: MMMMob dengt9428@gmail.com
 * @LastEditTime: 2023-05-15 00:15:02
 * @FilePath: \portfolio-websitec:\Users\DT\Desktop\amazarashi-demo\pages\NewsPage.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Head from "next/head";
import Navber from "@/components/Navber";
import BackgroundPage from "@/components/BackgroundPage";

const ToTop = dynamic(() => import("@/components/ToTop"));
const Footer = dynamic(() => import("@/components/Footer"));

import { Fade } from "react-awesome-reveal";

import initialData from "../public/data/NewPage.json";
const banners = require("../public/data/PageImage.json");

function Text() {
  const [displayCount, setDisplayCount] = useState(5);
  const [data, setData] = useState(initialData);

  useEffect(() => {
    // 定义获取音乐会数据的函数
    async function getConcerts() {
      const newData = await fetch("/data/NewPage.json").then((res) =>
        res.json()
      );
      setData(newData);
    }

    getConcerts();
  }, []);

  const concertsToShow = data.slice(0, displayCount);

  return (
    <Fade>
      <div>
        {concertsToShow.map((concert) => (
          <article
            className="border-t-2 border-black group cursor-pointer"
            key={concert.id}
          >
            <Link href={concert.link}>
              <div className="ml-2">
                <b className="text-[1.2rem] my-1">
                  <span className="group-hover:bg-black group-hover:text-white transition-[0.8s] duration-[ease]">
                    {concert.title}
                  </span>
                </b>
                <div className="text-[0.9rem] py-2">{concert.date}</div>
                <div className="text-[0.95rem] mb-2">{concert.content}</div>
                <div className="text-[0.9rem] mb-2 text-right ">
                  <b className="group-hover:bg-black group-hover:text-white transition-[0.8s] duration-[ease]">
                    続きを読む &gt;
                  </b>
                </div>
              </div>
            </Link>
          </article>
        ))}
        {displayCount < data.length && (
          <div className="text-center my-4">
            <button
              className="cursor-pointer border-2 border-white bg-black text-white hover:bg-white hover:border-black hover:text-black font-bold py-2 px-4 rounded"
              onClick={() => setDisplayCount(displayCount + 5)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </Fade>
  );
}

export default function NewsPage() {
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

  const calculateVisibleImages = () => {
    const imageHeight = 322; // 假设每张图片的高度为 322
    const visibleImages = Math.floor(componentHeight / imageHeight);
    return Math.min(visibleImages, banners.length);
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
                <div className="ml-2">News</div>
              </div>
              <div className="text-black text-right text-sm mb-2">
                <span className="cursor-pointer hover:bg-black hover:text-white transition-[0.8s] duration-[ease]">
                  最新情報をメールでお届け &gt;
                </span>
              </div>
              <div ref={textComponentRef} id="text-component">
                <Text />
              </div>
            </div>

            <div className="col-span-1 hidden md:block">
              {banners
                .slice(0, calculateVisibleImages())
                .map((banner, index) => (
                  <Image
                    key={index}
                    src={banner.src}
                    alt={banner.alt}
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
}
