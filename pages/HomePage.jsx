/*
 * @Author: MMMMob dengt9428@gmail.com
 * @Date: 2023-05-04 21:00:19
 * @LastEditors: MMMMob dengt9428@gmail.com
 * @LastEditTime: 2023-05-18 18:50:39
 * @FilePath: \portfolio-websitec:\Users\DT\Desktop\amazarashi-demo\pages\HomePage.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from "next/image";
import dynamic from "next/dynamic";
import Head from "next/head";
import Navber from "@/components/Navber";
import Carousel from "@/components/Carousel";

const ToTop = dynamic(() => import("@/components/ToTop"));
const Footer = dynamic(() => import("@/components/Footer"));

import { Fade } from "react-awesome-reveal";

import banner1 from "../public/img/ia_100000301.gif";
import banner2 from "../public/img/ia_100000302.gif";
import banner3 from "../public/img/ia_100000303.gif";
import banner4 from "../public/img/ia_100000304.gif";
import HomeImg from "../public/img/bg3.png";
import LogoImg from "../public/img/logo_official.png";

const concerts = [
  {
    title:
      "Amazarashi Live Tour 2020「ボイコット」青森公演払い戻しの詳細について",
    date: "2021/09/15",
    id: "1",
  },
  {
    title:
      "Amazarashi Live Tour 2020 「ボイコット」ツアー 9月開催の３公演の払い戻しの詳細について",
    date: "2021/09/10",
    id: "2",
  },
  {
    title:
      "Amazarashi Live Tour 2020 「ボイコット」ツアーチケット対象地域 払い戻しのご案内",
    date: "2021/09/10",
    id: "3",
  },
];

const HomePage = () => (
  <div>
    <Head>
      <title>Amazarashi Site</title>
      <meta name="description" content="A Japanese band introduction site." />
      <link rel="icon" href="/logo.ico" />
    </Head>
    <div className="relative h-screen">
      <Image
        src={HomeImg}
        layout="fill"
        objectFit="cover"
        priority="true"
        className="-z-50"
        alt="start"
      />
      <Fade>
        <Navber className="z-50" />
        <Carousel />

        <div className="mx-auto text-center pt-20 pb-10 w-2/3 relative z-10">
          <Image
            src={LogoImg}
            alt="logo"
            className="absolute top-96 md:top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 -z-30"
          />
          <div className="text-center before:absolute before:content-[''] before:w-full before:border-b-2 before:border-b-[black] before:border-solid before:left-0">
            <span className="relative -top-6  text-2xl inline-block p-2.5 bg-white tracking-[3px]">
              TOPICS
            </span>
          </div>
          <div className="py-4">
            {concerts.map((concert) => (
              <div key={concert.id} className="py-5">
                <span className="text-2xl cursor-pointer hover:bg-black hover:text-white transition-[0.8s] duration-[ease]">
                  {concert.title}
                </span>
                <p className="text-base text-gray-700 py-2">{concert.date}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center py-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[banner1, banner2, banner3, banner4].map((banner) => (
                <div key={banner.src}>
                  <Image
                    src={banner}
                    alt={`banner_${banner.src}`}
                    className="cursor-pointer my-4 md:py-0 border-2 border-black hover:border-white hover:transition-[0.8s] hover:duration-[ease]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <ToTop />
        <Footer />
      </Fade>
    </div>
  </div>
);

export default HomePage;
