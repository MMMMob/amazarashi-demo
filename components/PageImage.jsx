import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
const banners = require("../public/data/PageImage.json");

export default function Page() {
  // 使用 useState 来保存另一个组件的高度
  const [componentHeight, setComponentHeight] = useState(0);

  useEffect(() => {
    // 获取另一个组件的高度并更新 componentHeight 的值
    const otherComponent = document.getElementById("other-component");
    if (otherComponent) {
      setComponentHeight(otherComponent.offsetHeight);
    }
  }, []);

  // 计算要显示的图片数量
  const calculateVisibleImages = () => {
    // 假设每张图片的高度为 322，计算可见图片的数量
    const visibleImages = Math.floor(componentHeight / 322);
    // 返回可见图片的数量，最多不超过总图片数量
    return Math.min(visibleImages, banners.length);
  };

  return (
    <div>
      <Fade>
        <div className="flex-col hidden md:block">
          {banners.slice(0, calculateVisibleImages()).map((banner, index) => (
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
      </Fade>
    </div>
  );
}