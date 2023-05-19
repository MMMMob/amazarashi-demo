/*
 * @Author: MMMMob dengt9428@gmail.com
 * @Date: 2023-04-22 19:04:40
 * @LastEditors: MMMMob dengt9428@gmail.com
 * @LastEditTime: 2023-05-19 17:29:45
 * @FilePath: \portfolio-websitec:\Users\DT\Desktop\amazarashi-demo\pages\Start.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WaveBackground from "../components/WaveBackground.jsx";
import StartImg from "../public/img/root1.gif";

//使用 Tailwind CSS 设置背景样式的组件
function Background({ isBlack }) {
  return (
    <div
      className={`bg-cover bg-no-repeat bg-center fixed inset-0 transition-all duration-500 ease-in-out ${
        isBlack ? "bg-black" : "bg-gray-300"
      }`}
    >
      <WaveBackground isBlack={isBlack} />
    </div>
  );
}

function Button({ text, handleMouseOver, handleMouseOut }) {
  return (
    <button
      className="py-2 px-16 text-2xl mb-4 tracking-wider border-2 bg-black border-white text-white
        hover:bg-white hover:text-black hover:border-black duration-500 ease-in-out"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {text}
    </button>
  );
}

function Start() {
  const [textVisible, setTextVisible] = useState(false);
  const [isBlackBg, setIsBlackBg] = useState(false);

  const handleMouseOver = () => {
    setTextVisible(true);
  };

  const handleMouseOut = () => {
    setTextVisible(false);
  };

  const handleToggleChange = (e) => {
    setIsBlackBg(e.target.checked);
  };

  const textClassName = `text-lg absolute bottom-0 opacity-0 transition-opacity duration-300 ease-in-out ${
    textVisible ? "opacity-100 animate-pulse" : ""
  } ${isBlackBg ? "text-white" : ""}`;

  const textStyle = {
    animationIterationCount: "infinite",
  };

  return (
    <div>
      <Background isBlack={isBlackBg} />
      <div className="relative flex flex-col justify-center items-center h-screen -mt-10">
        <Image src={StartImg} width="100" alt="start" />
        <Link href="/HomePage">
          <Button
            text="进入官网"
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
        </Link>
        <Link href="/AboutMe">
        <Button text="关于网站" />
        </Link>
        {/* 切换背景颜色的 Toggle 开关 */}
        <div className="relative">
          <input
            type="checkbox"
            className="peer appearance-none cursor-pointer border border-gray-900 rounded-full checked:border-gray-300 w-12 h-6"
            onChange={handleToggleChange}
          />
          <span className="peer-checked:left-7 peer-checked:bg-gray-300 transition-all duration-200 pointer-events-none w-4 h-4 block absolute top-1 left-1 rounded-full bg-gray-900"></span>
        </div>
        <div className={textClassName}>
          打开站外链接，需科学上网
        </div>
      </div>
    </div>
  );
}

export default Start;
