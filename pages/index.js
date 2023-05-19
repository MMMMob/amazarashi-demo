/*
 * @Author: MMMMob dengt9428@gmail.com
 * @Date: 2023-04-22 18:30:51
 * @LastEditors: MMMMob dengt9428@gmail.com
 * @LastEditTime: 2023-05-04 20:50:40
 * @FilePath: \portfolio-websitec:\Users\DT\Desktop\amazarashi-demo\pages\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Head from 'next/head'

import Start from './Start'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazarashi Site</title>
        <meta
          name="Amazarashi"
          content="A Japanese band introduction site."
        />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Start/>
    </div>
  )
}
