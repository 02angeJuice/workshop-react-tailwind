import React, { useRef, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, OrbitControls, Line } from "@react-three/drei"
import { AnimationMixer } from "three"

import { TypeAnimation } from "react-type-animation"
import { FaArrowDown } from "react-icons/fa"

const Model = () => {
  const { scene, animations } = useGLTF("./models/space-boi/scene.gltf")
  const mixer = useRef()

  useEffect(() => {
    if (animations && animations.length) {
      mixer.current = new AnimationMixer(scene)
      animations.forEach((clip) => {
        mixer.current.clipAction(clip).play()
      })
    }
  }, [scene, animations])

  useFrame((state, delta) => {
    mixer.current?.update(delta)
  })

  // return <primitive position={[5, 0, 0]} scale={1} object={scene} />
  return <primitive position={[0, -2, 0]} scale={1} object={scene} />
}

const Controls = () => {
  const controlsRef = useRef()
  const { camera } = useThree()

  useEffect(() => {
    // Set initial camera position
    camera.position.set(0, 5, 10) // Adjust as needed

    // Set initial rotation to 30 degrees around the X-axis
    controlsRef.current?.update()
  }, [camera])

  return (
    <OrbitControls
      ref={controlsRef}
      enableRotate
      enableZoom={false}
      autoRotate
      maxPolarAngle={Math.PI / 2} // Limit vertical rotation
      minPolarAngle={-Math.PI / 2} // Limit vertical rotation
      maxAzimuthAngle={Infinity} // Allow full horizontal rotation
      minAzimuthAngle={-Infinity} // Allow full horizontal rotation
    />
  )
}

export default function Content3D({ children }) {
  return (
    <section
      id="index"
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#000",
        position: "relative",
      }}
    >
      <Canvas>
        {/* Uncomment if you want to display lines */}
        {/* <Line
          points={[
            [-100, 0, 0],
            [100, 0, 0],
          ]}
          color={"red"}
        />
        <Line
          points={[
            [0, -100, 0],
            [0, 100, 0],
          ]}
          color="blue"
        />
        <Line
          points={[
            [0, 0, -100],
            [0, 0, 100],
          ]}
          color="magenta"
        /> */}
        <Controls />
        <ambientLight intensity={4} />
        <directionalLight intensity={1} position={[-1, 0, 0]} />
        <directionalLight intensity={1} position={[0, 0, -1]} />
        <Model />
      </Canvas>

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",

          whiteSpace: "pre-line",
          textAlign: "center",
        }}
      >
        {/* <h1 className="text-white text-7xl">Hello, Here I am. </h1> */}

        <TypeAnimation
          className="text-white text-5xl"
          preRenderFirstString={true}
          sequence={[
            2000,
            "hello.",
            5000,
            "welcome",
            2000,
            "glad to meet you",
            5000,
            `i am\n`,
            2000,
            `i am\nwatcharaphong`,
            2000,
            `you can call me`,
            2000,
            `you can call me\n"jumbo"`,
            2000,

            // "We produce food for Guinea Pigs",
            // 1000,
            // "We produce food for Chinchillas",
            // 1000,
          ]}
          wrapper="span"
          speed={{ type: "keyStrokeDelayInMs", value: 250 }}
          repeat={Infinity}
        />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <a
          href="#about"
          className="cursor-pointer bg-white text-black px-4 py-3 rounded-full border-b-[4px] border-gray-600 inline-flex
          transition-all duration-75
          hover:brightness-110
          hover:-translate-y-[1px]
          hover:border-b-[6px]
          hover:bg-lime-300
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          <FaArrowDown size={25} />
        </a>
      </div>
    </section>
  )
}
