/*
 * @Author: MMMMob dengt9428@gmail.com
 * @Date: 2023-05-18 19:37:06
 * @LastEditors: MMMMob dengt9428@gmail.com
 * @LastEditTime: 2023-05-18 19:37:24
 * @FilePath: \portfolio-websitec:\Users\DT\Desktop\amazarashi-demo\server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const compression = require('compression');
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // 启用gzip压缩
    compression()(req, res, () => {
      handle(req, res, parse(req.url, true));
    });
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
