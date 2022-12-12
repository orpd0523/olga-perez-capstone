import "./Avatar.scss";
import { Canvas, useLoader } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import spriteSheet from "../../assets/tamagotchi-sprite-sheet.png";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useState } from "react";

function Avatar() {
  return (
    <div>
      <Canvas>
        <Sprite />
      </Canvas>
    </div>
  );
}

const mametchiFrames = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

const FRAMES = 32;
const MAX_POSITION = 31;
const MIN_POSITION = 0;

function Sprite() {
  const [xPos, setXPos] = useState(0);
  const spriteMap = useLoader(TextureLoader, spriteSheet);
  spriteMap.repeat.set(1 / FRAMES, 1 / FRAMES); //rows, columns
  spriteMap.offset.x = xPos / FRAMES; //left to right
  spriteMap.offset.y = 22 / FRAMES; //up and down
  setInterval(() => {
    setXPos((current) => {
      let newX = current + 1;
      newX = newX > 4 ? 0 : newX;
      return newX;
    });
  }, 2000);
  return (
    <mesh>
      <planeGeometry args={[4, 4]} />
      {/*scale of image*/}
      <meshBasicMaterial map={spriteMap} />
    </mesh>
  );
}

export default Avatar;
