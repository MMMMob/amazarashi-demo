import React from "react";
import Image from "next/image";
import HomeImg from "../public/img/ia_100000001162.png";

export default function BackgroundPage() {
  return (
    <div className="-z-50">
      <div className="bg-cover bg-no-repeat bg-center fixed inset-0">
        <Image src={HomeImg} className="opacity-20" alt="start" />
      </div>
    </div>
  );
}
