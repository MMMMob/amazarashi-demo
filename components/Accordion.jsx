/*
 * @Author: MMMMob dengt9428@gmail.com
 * @Date: 2023-05-15 07:54:28
 * @LastEditors: MMMMob dengt9428@gmail.com
 * @LastEditTime: 2023-05-18 17:12:20
 * @FilePath: \portfolio-websitec:\Users\DT\Desktop\amazarashi-demo\components\Accordion.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div
        className="accordion-header flex items-center justify-between cursor-pointer py-2 border-t-2 border-black transition-all duration-300"
        onClick={toggleAccordion}
      >
        <h3 className="text-2xl py-2 hover:underline transition-[0.8s] duration-[ease]">{title}</h3>
        <span>
          {isOpen ? (
            <BiCaretUp className="text-3xl" />
          ) : (
            <BiCaretDown className="text-3xl" />
          )}
        </span>
      </div>
      <div
        className={`accordion-content overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[3000px]" : "max-h-0"
        }`}
      >
        <div className="mb-4">
          {content.map((line, index) => (
            <p key={index}>
              {line}
              <br />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
