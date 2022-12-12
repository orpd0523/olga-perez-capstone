import "./Avatar.scss";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import spriteSheet from "../../assets/tamagotchi-sprite-sheet.png";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useRef } from "react";

function Avatar() {
  return (
    <div>
      <Canvas>
        <Sprite />
      </Canvas>
    </div>
  );
}
const avatarObj = {
  id: 1,
  frames: [
    {
      x: 0,
      y: 22,
    },
    {
      x: 1,
      y: 22,
    },
    {
      x: 4,
      y: 22,
    },
    {
      x: 8,
      y: 22,
    },
    {
      x: 11,
      y: 22,
    },
  ],
  idle: {
    frames: [5],
    repeat: null,
  },
  dancing: {
    frames: [1, 2],
    repeat: 3,
  },
  upset: {
    frames: [4],
    repeat: null,
  },
};

const FRAMES = 32;
const MAX_POSITION = 31;
const MIN_POSITION = 0;

function Sprite() {
  const xCoord = useRef(11);
  const yCoord = useRef(22);
  const spriteMap = useLoader(TextureLoader, spriteSheet);
  spriteMap.repeat.set(1 / FRAMES, 1 / FRAMES); //rows, columns
  spriteMap.offset.x = xCoord.current / FRAMES; //left to right
  spriteMap.offset.y = yCoord.current / FRAMES; //up and down
  // setInterval(() => {
  //   avatarObj.frames.forEach(({x, y}) => {
  //     spriteMap.offset.x = x / FRAMES
  //     spriteMap.offset.y = y / FRAMES
  //   });
  // }, 2000); 
  return (
    <mesh>
      <planeGeometry args={[4, 4]} />
      {/*scale of image*/}
      <meshBasicMaterial map={spriteMap} />
    </mesh>
  );
}

export default Avatar;
