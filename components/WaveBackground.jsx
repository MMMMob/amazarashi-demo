import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

export default function WaveBackground({ isBlack }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef(null);
  
  useEffect(() => {
    // 创建场景
    const scene = new THREE.Scene();

    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 400;

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    // 根据传入的 isBlack 判断是否需要设置黑色背景
    if (isBlack) {
      renderer.setClearColor(0x000000);
    } else {
      renderer.setClearColor(0xd3d3d3);
    }

    renderer.setSize(window.innerWidth, window.innerHeight);

    // 创建光线
    const light = new THREE.DirectionalLight("#ffffff", 1);
    light.position.set(0, 0, 1);
    scene.add(light);

    // 创建材质
    const material = new THREE.PointsMaterial({
      color: "#ffffff", // 将颜色设置为白色
      size: 10,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    // 创建几何体
    const geometry = new THREE.BufferGeometry();
    const range = Math.max(window.innerWidth, window.innerHeight);
    const positions = new Float32Array(3000 * 3); // 每个顶点三个坐标
    for (let i = 0; i < 3000; i++) {
      const i3 = i * 3;
      positions[i3] = Math.random() * range - range / 2;
      positions[i3 + 1] = Math.random() * range - range / 2;
      positions[i3 + 2] = Math.random() * range - range / 2;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // 创建粒子系统
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles; // 保存粒子系统的引用到 ref 中

    // 动画循环
    const animate = () => {
      requestAnimationFrame(animate);

      particles.rotation.x += 0.01;
      particles.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();

    // 当窗口大小改变时，重新设置渲染器的大小
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isBlack]);

  return <canvas ref={canvasRef} />;
}
