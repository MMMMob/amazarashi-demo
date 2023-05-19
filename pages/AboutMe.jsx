import React, { useEffect, useState, useMemo } from "react";
import Head from "next/head";
import BackgroundPage from "@/components/BackgroundPage";

export default function AboutMe() {
  const [text, setText] = useState("");
  const [currentSentence, setCurrentSentence] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  const fullText = useMemo(
    () => [
      "这个Amazarashi乐队网站的项目终于完成了，之前用Bootsartp5来写代码有很多我不能解决的问题。首先Bootsartp5的客制化能力是不行的，它的框架是比较固定的，不能提供很好的个性化布局与内容。其次，当时我没有能力重复批量处理网站的大量文本，而导致代码冗余。当时这个项目就放弃了。",
      "为了解决这两个问题，首先我学习并使用Tailwind CSS来代替Bootsartp5来进行更灵活的个性化布局与内容。其次，我学习并使用Next.js来进行网站的批量处理，使用Components组件与JOSN文本格式动态导入文本，极大的帮助的项目减少了代码数量，并且代码与文本分离是代码更加简洁了。之后我使用Gzip与Lighthouse来优化网站的性能，最后感谢ChtaGPT的帮助，我使用它解决我在网站中出现的问题与报错，帮助我审计代码以做出更好的改进。",
      "原计划是制作十个子页面的，现在缩减到了五个。需要连接的外部连接也没有去做。要实现这些很容易，但以我目前的能力已经到达了本项目的上限了。在进行内容与功能的扩展已经毫无意义。为此我现在需要去学习Figma等设计软件及知识，以便我更好的提示网站的展示能力，目前来说我的表现力是不够的。"
    ],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (fullText[currentSentence].length <= currentChar) {
        clearInterval(timer);
        if (currentSentence < fullText.length - 1) {
          setCurrentChar(0);
          setCurrentSentence(currentSentence + 1);
        }
      } else {
        const nextChar = fullText[currentSentence][currentChar];
        setText((prevText) => prevText + nextChar);
        setCurrentChar(currentChar + 1);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentChar, currentSentence, fullText]);

  return (
    <div>
      <Head>
        <title>Amazarashi Site</title>
        <meta name="description" content="A Japanese band introduction site." />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <BackgroundPage className="-z-50" />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%]">
        <div className="text-3xl text-center">关于本站</div>
        <div className="text-xl py-2" style={{ textIndent: "3rem" }}>
          {text}
        </div>
      </div>
    </div>
  );
}
