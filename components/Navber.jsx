/*
 * @Author: MMMMob dengt9428@gmail.com
 * @Date: 2023-04-25 14:57:09
 * @LastEditors: MMMMob dengt9428@gmail.com
 * @LastEditTime: 2023-05-18 18:44:42
 * @FilePath: \portfolio-websitec:\Users\DT\Desktop\amazarashi-demo\components\HomePags.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import LogoImg from "../public/img/root1.gif";

const links = [
  { label: "HOME", url: "/HomePage" },
  { label: "NEWS", url: "/NewsPage" },
  { label: "ALBUM", url: "/AlbumPage" },
  { label: "LIVE", url: "/LivePage" },
  { label: "LIFE", url: "https://apologies.jp/" },
  {
    label: "MOVIE",
    url: "https://music.163.com/#/artist/mv?id=18480&limit=12&offset=0",
  },
  { label: "LINK", url: "https://music.163.com/#/artist/album?id=18480" },
  { label: "BUY", url: "https://store.plusmember.jp/amazarashi/" },
];

const styles = {
  li: `px-1 text-center border-black border-t-2 border-b-2 transition duration-500 ease-in-out hover:bg-black hover:text-white `,
  mdLi: `px-1 text-center border-black md:border-t-2 border-b-2 transition duration-500 ease-in-out hover:bg-black hover:text-white `,
};

function LinkList() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 w-[75%] md:w-[85%] lg:w-[65%]  text-xl font-bold">
      {links.map((link, index) => (
        <Link href={link.url} key={index}>
          <div className={`${index >= 4 ? styles.mdLi : styles.li}`}>
            {link.label}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function HomePags() {
  return (
    <div className="z-50">
      <nav className="flex justify-center items-center flex-col">
        <div className="mb-auto">
          <Link href="/Start">
            <Image src={LogoImg} width="80" alt="start" />
          </Link>
        </div>
        <LinkList />
      </nav>
    </div>
  );
}
