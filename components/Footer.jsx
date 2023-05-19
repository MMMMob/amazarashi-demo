/*
 * @Author: MMMMob dengt9428@gmail.com
 * @Date: 2023-05-07 22:03:48
 * @LastEditors: MMMMob dengt9428@gmail.com
 * @LastEditTime: 2023-05-18 18:17:10
 * @FilePath: \portfolio-websitec:\Users\DT\Desktop\amazarashi-demo\components\Footer.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from "next/image";
import Link from "next/link";

import Icon1 from "../public/openai.svg";
import Icon2 from "../public/next-dot-js.svg";
import Icon3 from "../public/tailwindcss_.svg";

export default function Footer() {
  const icons = [
    { href: "https://openai.com/", src: Icon1, alt: "openai", width: 50, label: "Open AI" },
    { href: "https://nextjs.org/", src: Icon2, alt: "next-js", width: 50, label: "Next JS" },
    { href: "https://tailwindcss.com/", src: Icon3, alt: "tailwindcss", width: 80, label: "Tailwind" },
  ];

  return (
    <div className="w-full py-10 px-4 bg-black text-white text-center">
      <div>
        ©卒業デザイン作品の著作権は日本のバンドAmazarashiに帰属しますので、商品化しないでください、ありがとうございます。
      </div>
      <div className="my-4">以下のユニットの技術サポートに感謝します：</div>
      <div className="flex justify-center space-x-5">
        {icons.map((icon, index) => (
          <div className="cursor-pointer" key={index}>
            <Link href={icon.href}>
              <Image src={icon.src} alt={icon.alt} width={icon.width} className="mx-2" />
              <span className="my-2">{icon.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
