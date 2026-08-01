"use client";

import { useEffect, useRef, useState } from "react";
import type * as ThreeTypes from "three";

type GoldenSculptureProps = {
  label: string;
  theme: "light" | "dark";
  activeSection?: string;
  onActivate?: () => void;
};

export default function GoldenSculpture({
  label,
  theme,
  activeSection = "home",
  onActivate,
}: GoldenSculptureProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const activeSectionRef = useRef(activeSection);
  const gestureRef = useRef({ x: 0, y: 0, moved: false });
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    let teardown: (() => void) | undefined;
    setFallback(false);

    const setup = async () => {
      const THREE = await import("three");
      if (disposed) return;
      const compact = window.matchMedia("(max-width: 620px)").matches;

      const canvas = document.createElement("canvas");
      const webgl =
        canvas.getContext("webgl2", { alpha: true }) ||
        canvas.getContext("webgl", { alpha: true });

      if (!webgl) {
        setFallback(true);
        return;
      }

      let renderer: ThreeTypes.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: !compact,
          powerPreference: "high-performance",
        });
      } catch {
        setFallback(true);
        return;
      }

      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = theme === "dark" ? 1.35 : 1.1;
      renderer.domElement.setAttribute("aria-hidden", "true");
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
      camera.position.set(0, 0, 7);

      const dataCore = new THREE.Group();
      dataCore.rotation.set(-0.14, -0.34, 0.04);
      scene.add(dataCore);

      const gold = theme === "dark" ? 0x2f7dff : 0x1268e8;
      const brightGold = theme === "dark" ? 0x6ee8ff : 0x22c8f6;
      const boardColor = theme === "dark" ? 0x061a32 : 0x0b2d56;

      const casingMaterial = new THREE.MeshPhysicalMaterial({
        color: gold,
        metalness: 0.9,
        roughness: 0.22,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        emissive: theme === "dark" ? 0x063e7a : 0x051d3f,
        emissiveIntensity: theme === "dark" ? 0.42 : 0.16,
      });
      const boardMaterial = new THREE.MeshPhysicalMaterial({
        color: boardColor,
        metalness: 0.58,
        roughness: 0.28,
        clearcoat: 0.85,
        clearcoatRoughness: 0.2,
      });
      const lineMaterial = new THREE.LineBasicMaterial({
        color: brightGold,
        transparent: true,
        opacity: theme === "dark" ? 0.82 : 0.6,
      });

      const chipBody = new THREE.Mesh(
        new THREE.BoxGeometry(1.92, 1.92, 0.32, 2, 2, 1),
        casingMaterial,
      );
      dataCore.add(chipBody);

      const chipBoard = new THREE.Mesh(
        new THREE.BoxGeometry(1.68, 1.68, 0.38),
        boardMaterial,
      );
      chipBoard.position.z = 0.04;
      dataCore.add(chipBoard);

      const frameEdges = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.BoxGeometry(1.7, 1.7, 0.4)),
        lineMaterial,
      );
      frameEdges.position.z = 0.045;
      dataCore.add(frameEdges);

      const processorShell = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.52, compact ? 1 : 2),
        new THREE.MeshPhysicalMaterial({
          color: gold,
          metalness: 0.88,
          roughness: 0.16,
          clearcoat: 1,
          emissive: theme === "dark" ? 0x0755a8 : 0x052a60,
          emissiveIntensity: theme === "dark" ? 0.7 : 0.22,
        }),
      );
      processorShell.position.z = 0.47;
      dataCore.add(processorShell);

      const processorGrid = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.69, 1),
        new THREE.MeshBasicMaterial({
          color: brightGold,
          wireframe: true,
          transparent: true,
          opacity: theme === "dark" ? 0.55 : 0.34,
        }),
      );
      processorGrid.position.z = 0.49;
      dataCore.add(processorGrid);

      const pinGeometry = new THREE.BoxGeometry(0.13, 0.42, 0.1);
      const sidePinGeometry = new THREE.BoxGeometry(0.42, 0.13, 0.1);
      const pins: ThreeTypes.Mesh[] = [];
      const traceNodes: ThreeTypes.Mesh[] = [];
      const tracePaths: ThreeTypes.Line[] = [];
      const pinSteps = [-0.68, -0.23, 0.23, 0.68];

      pinSteps.forEach((step, index) => {
        const definitions = [
          {
            pin: new THREE.Mesh(pinGeometry, casingMaterial),
            position: new THREE.Vector3(step, 1.15, 0),
            end: new THREE.Vector3(step * 1.22, 2.05 + index * 0.06, 0.1),
          },
          {
            pin: new THREE.Mesh(pinGeometry, casingMaterial),
            position: new THREE.Vector3(step, -1.15, 0),
            end: new THREE.Vector3(step * 1.18, -2.08 - index * 0.05, 0.1),
          },
          {
            pin: new THREE.Mesh(sidePinGeometry, casingMaterial),
            position: new THREE.Vector3(1.15, step, 0),
            end: new THREE.Vector3(2.08 + index * 0.05, step * 1.2, 0.1),
          },
          {
            pin: new THREE.Mesh(sidePinGeometry, casingMaterial),
            position: new THREE.Vector3(-1.15, step, 0),
            end: new THREE.Vector3(-2.08 - index * 0.05, step * 1.16, 0.1),
          },
        ];

        definitions.forEach(({ pin, position, end }) => {
          pin.position.copy(position);
          dataCore.add(pin);
          pins.push(pin);

          const bend =
            Math.abs(position.x) > Math.abs(position.y)
              ? new THREE.Vector3(end.x * 0.72, position.y, 0.12)
              : new THREE.Vector3(position.x, end.y * 0.72, 0.12);
          const traceGeometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(position.x, position.y, 0.12),
            bend,
            end,
          ]);
          const trace = new THREE.Line(traceGeometry, lineMaterial);
          dataCore.add(trace);
          tracePaths.push(trace);

          const node = new THREE.Mesh(
            new THREE.SphereGeometry(0.055, 12, 12),
            new THREE.MeshBasicMaterial({ color: brightGold }),
          );
          node.position.copy(end);
          dataCore.add(node);
          traceNodes.push(node);
        });
      });

      const orbitalMaterial = new THREE.MeshBasicMaterial({
        color: brightGold,
        transparent: true,
        opacity: theme === "dark" ? 0.42 : 0.25,
        side: THREE.DoubleSide,
      });
      const orbitalGeometry = new THREE.TorusGeometry(
        2.48,
        0.009,
        8,
        compact ? 90 : 180,
      );
      const rings = [
        new THREE.Mesh(orbitalGeometry, orbitalMaterial),
        new THREE.Mesh(orbitalGeometry, orbitalMaterial.clone()),
        new THREE.Mesh(orbitalGeometry, orbitalMaterial.clone()),
      ];
      rings[0].rotation.set(1.18, 0.08, 0.2);
      rings[1].rotation.set(0.58, 0.94, -0.28);
      rings[2].rotation.set(-0.32, 0.55, 0.9);
      rings.forEach((ring) => dataCore.add(ring));

      const particleCount = compact ? 84 : 180;
      const positions = new Float32Array(particleCount * 3);
      for (let index = 0; index < particleCount; index += 1) {
        const radius = 2.45 + Math.random() * 1.35;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[index * 3 + 2] = radius * Math.cos(phi);
      }
      const particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3),
      );
      const particles = new THREE.Points(
        particlesGeometry,
        new THREE.PointsMaterial({
          color: brightGold,
          size: 0.026,
          transparent: true,
          opacity: theme === "dark" ? 0.72 : 0.46,
          sizeAttenuation: true,
        }),
      );
      scene.add(particles);

      scene.add(
        new THREE.AmbientLight(theme === "dark" ? 0x9defff : 0xdaf8ff, 1.6),
      );
      const keyLight = new THREE.DirectionalLight(0x8cecff, 4.8);
      keyLight.position.set(3.5, 4.5, 5);
      scene.add(keyLight);
      const rimLight = new THREE.PointLight(
        theme === "dark" ? 0x1f8fff : 0x146ee8,
        theme === "dark" ? 10 : 7,
        13,
      );
      rimLight.position.set(-3.5, -1.5, 3.5);
      scene.add(rimLight);
      const softLight = new THREE.PointLight(0xffffff, 3, 10);
      softLight.position.set(1, -3, 4);
      scene.add(softLight);

      const pointer = { x: 0, y: 0 };
      const target = { x: 0, y: 0 };
      const handlePointer = (event: PointerEvent) => {
        const bounds = mount.getBoundingClientRect();
        target.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 1.55;
        target.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 1.1;
      };
      const resetPointer = () => {
        target.x = 0;
        target.y = 0;
      };
      mount.addEventListener("pointerdown", handlePointer, { passive: true });
      mount.addEventListener("pointermove", handlePointer, { passive: true });
      mount.addEventListener("pointerleave", resetPointer, { passive: true });

      const updateSize = () => {
        const { width, height } = mount.getBoundingClientRect();
        if (!width || !height) return;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setPixelRatio(
          Math.min(window.devicePixelRatio, compact ? 1.15 : width < 700 ? 1.4 : 1.8),
        );
        renderer.setSize(width, height, false);
      };
      const resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(mount);
      updateSize();

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const clock = new THREE.Clock();
      let frame = 0;
      let storyRotationY = -0.34;
      let storyRotationX = -0.14;
      let storyScale = 1;
      let sceneVisible = true;
      let lastRenderedAt = 0;
      const visibilityObserver = new IntersectionObserver(
        ([entry]) => {
          sceneVisible = entry?.isIntersecting ?? true;
        },
        { rootMargin: "160px" },
      );
      visibilityObserver.observe(mount);

      const render = (timestamp = 0) => {
        frame = requestAnimationFrame(render);
        if (!sceneVisible || document.hidden) return;
        if (compact && timestamp - lastRenderedAt < 22) return;
        lastRenderedAt = timestamp;
        const elapsed = clock.getElapsedTime();
        const storyTargets: Record<string, { x: number; y: number; scale: number }> = {
          home: { x: -0.14, y: -0.34, scale: 1 },
          about: { x: -0.04, y: 0.16, scale: 0.96 },
          education: { x: 0.12, y: -0.82, scale: 0.91 },
          experience: { x: -0.22, y: 0.72, scale: 0.94 },
          projects: { x: 0.06, y: -1.18, scale: 1.04 },
          skills: { x: -0.08, y: 1.12, scale: 1.02 },
          contact: { x: 0.16, y: 0.3, scale: 0.9 },
        };
        const storyTarget = storyTargets[activeSectionRef.current] ?? storyTargets.home;
        storyRotationY += (storyTarget.y - storyRotationY) * 0.035;
        storyRotationX += (storyTarget.x - storyRotationX) * 0.035;
        storyScale += (storyTarget.scale - storyScale) * 0.035;
        pointer.x += (target.x - pointer.x) * 0.055;
        pointer.y += (target.y - pointer.y) * 0.055;

        dataCore.rotation.y =
          storyRotationY +
          pointer.x * 0.46 +
          Math.sin(elapsed * (reducedMotion ? 0.04 : 0.18)) * 0.15;
        dataCore.rotation.x = storyRotationX + pointer.y * 0.34;
        dataCore.rotation.z = Math.sin(elapsed * 0.25) * 0.025;
        dataCore.position.y = Math.sin(elapsed * 0.72) * 0.07;
        dataCore.scale.setScalar(storyScale);
        processorShell.rotation.x = elapsed * (reducedMotion ? 0.015 : 0.22);
        processorShell.rotation.y = elapsed * (reducedMotion ? 0.02 : 0.3);
        processorGrid.rotation.x = -elapsed * (reducedMotion ? 0.012 : 0.16);
        processorGrid.rotation.y = elapsed * (reducedMotion ? 0.016 : 0.21);
        rings[0].rotation.z += reducedMotion ? 0.00012 : 0.0009;
        rings[1].rotation.x += reducedMotion ? 0.0001 : 0.0007;
        particles.rotation.y = elapsed * 0.02;
        particles.rotation.x = pointer.y * 0.05;
        traceNodes.forEach((node, index) => {
          const pulse = 0.75 + Math.sin(elapsed * 2.2 + index * 0.62) * 0.28;
          node.scale.setScalar(pulse);
        });

        renderer.render(scene, camera);
      };
      render();

      teardown = () => {
        cancelAnimationFrame(frame);
        resizeObserver.disconnect();
        visibilityObserver.disconnect();
        mount.removeEventListener("pointerdown", handlePointer);
        mount.removeEventListener("pointermove", handlePointer);
        mount.removeEventListener("pointerleave", resetPointer);
        const geometries = new Set<ThreeTypes.BufferGeometry>();
        const materials = new Set<ThreeTypes.Material>();
        scene.traverse((object) => {
          const renderable = object as ThreeTypes.Mesh;
          if (renderable.geometry) geometries.add(renderable.geometry);
          if (renderable.material) {
            const objectMaterials = Array.isArray(renderable.material)
              ? renderable.material
              : [renderable.material];
            objectMaterials.forEach((material) => materials.add(material));
          }
        });
        tracePaths.forEach((trace) => geometries.add(trace.geometry));
        geometries.forEach((geometry) => geometry.dispose());
        materials.forEach((material) => material.dispose());
        renderer.dispose();
        renderer.domElement.remove();
      };
    };

    void setup();

    return () => {
      disposed = true;
      teardown?.();
    };
  }, [theme]);

  return (
    <div
      ref={mountRef}
      className={`${fallback ? "golden-sculpture is-fallback" : "golden-sculpture"}${onActivate ? " is-actionable" : ""}`}
      role={onActivate ? "button" : "img"}
      tabIndex={onActivate ? 0 : undefined}
      aria-label={label}
      onPointerDown={(event) => {
        gestureRef.current = { x: event.clientX, y: event.clientY, moved: false };
      }}
      onPointerMove={(event) => {
        const distance = Math.hypot(
          event.clientX - gestureRef.current.x,
          event.clientY - gestureRef.current.y,
        );
        if (distance > 8) gestureRef.current.moved = true;
      }}
      onClick={() => {
        if (!gestureRef.current.moved) onActivate?.();
      }}
      onKeyDown={(event) => {
        if ((event.key === "Enter" || event.key === " ") && onActivate) {
          event.preventDefault();
          onActivate();
        }
      }}
    >
      {fallback && (
        <div className="sculpture-fallback tech-core-fallback" aria-hidden="true">
          <span className="fallback-chip">
            <i>AB</i>
            <b />
          </span>
          <span className="fallback-bus bus-top" />
          <span className="fallback-bus bus-right" />
          <span className="fallback-bus bus-bottom" />
          <span className="fallback-bus bus-left" />
          <span className="fallback-ring ring-a" />
          <span className="fallback-ring ring-b" />
          <span className="fallback-ring ring-c" />
          <i className="fallback-point point-a" />
          <i className="fallback-point point-b" />
          <i className="fallback-point point-c" />
        </div>
      )}
    </div>
  );
}
