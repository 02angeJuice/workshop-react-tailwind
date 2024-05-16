import React, { useRef, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, OrbitControls, Line } from "@react-three/drei"
import { AnimationMixer } from "three"

const Model = () => {
  const { scene, animations } = useGLTF("./models/lucky-cat/scene.gltf")
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
  return <primitive position={[0, -2, 0]} scale={0.1} object={scene} />
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
      //   ref={controlsRef}
      enableRotate
      enableZoom={false}
      autoRotate
      //   maxPolarAngle={Math.PI / 2} // Limit vertical rotation
      //   minPolarAngle={-Math.PI / 2} // Limit vertical rotation
      //   maxAzimuthAngle={Infinity} // Allow full horizontal rotation
      //   minAzimuthAngle={-Infinity} // Allow full horizontal rotation
    />
  )
}

export default function Element3D({ children }) {
  return (
    <span
      className="inline-block"
      //   id="index"
      //   style={{
      //     height: "100vh",
      //     width: "100%",
      //     backgroundColor: "#000",
      //     position: "relative",
      //   }}
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
    </span>
  )
}
