/*
 * @Author: MMMMob dengt9428@gmail.com
 * @Date: 2023-05-14 20:08:20
 * @LastEditors: MMMMob dengt9428@gmail.com
 * @LastEditTime: 2023-05-18 16:29:41
 * @FilePath: \portfolio-websitec:\Users\DT\Desktop\amazarashi-demo\components\AlbumImage.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from 'next/legacy/image';

function AlbumImage({ album }) {
  return (
    <div className="border border-solid border-gray-400 py-2 px-4 col-span-1 group transition-[0.8s] duration-[ease]">
      <Image
        className="px-2 w-30 h-30 border-4 border-gray-400"
        src={`/img/${album.src}`}
        alt={album.alt}
        width={200}
        height={205}
      />
      <div className="font-bold text-[0.85rem] overflow-hidden overflow-ellipsis text-overflow h-20 pt-4">
        {album.title}
      </div>
      <div className="py-2 text-[0.75rem] text-gray-600">
        <div>{album.date}</div>
        <div>{album.nature}</div>
        <div className="overflow-ellipsis text-overflow h-20">
          {album.text}
        </div>
      </div>
      <div className="font-bold">{album.money}</div>
      <div className="text-right mt-5 text-[0.85rem]">
        <span className="group-hover:bg-black group-hover:text-white transition-[0.8s] duration-[ease]">
          もっと見る &gt;
        </span>
      </div>
    </div>
  );
}

export default AlbumImage;
