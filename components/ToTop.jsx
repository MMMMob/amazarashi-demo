/*
 * @Author: MMMMob dengt9428@gmail.com
 * @Date: 2023-05-07 14:51:18
 * @LastEditors: MMMMob dengt9428@gmail.com
 * @LastEditTime: 2023-05-08 09:22:29
 * @FilePath: \portfolio-websitec:\Users\DT\Desktop\amazarashi-demo\components\ToTop.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";

export default function ToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);
  return (
    <div className="fixed bottom-72 right-5">
      {visible && (
        <button
          className="p-2 border-4 border-black bg-white text-black cursor-pointer  shadow-lg focus:outline-none"
          onClick={scrollToTop}
        >
          <BiArrowToTop className="text-4xl" />
        </button>
      )}
    </div>
  );
}
