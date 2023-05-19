/*
 * @Author: MMMMob dengt9428@gmail.com
 * @Date: 2023-05-14 20:00:41
 * @LastEditors: MMMMob dengt9428@gmail.com
 * @LastEditTime: 2023-05-14 20:00:54
 * @FilePath: \portfolio-websitec:\Users\DT\Desktop\amazarashi-demo\components\PaginationButton.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function PaginationButton({ onClick, disabled, children }) {
    return (
      <button
        className="bg-black text-white border-2 border-white hover:border-black hover:bg-white hover:text-black transition-[0.8s] duration-[ease] px-4 py-2 rounded mr-2"
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
  
  export default PaginationButton;
  