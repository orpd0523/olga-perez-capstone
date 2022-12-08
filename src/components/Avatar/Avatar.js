import "./Avatar.scss";
import { Canvas, useLoader } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import spriteSheet from "../../assets/tamagotchi-sprite-sheet.png"
import { TextureLoader } from "three/src/loaders/TextureLoader";

function Avatar() {
    const spriteMap = useLoader(TextureLoader, spriteSheet)
  return (
    <div>
      <Canvas>
        <PerspectiveCamera makeDefault fov={75} position={[0, 2, 3]}/> 
        <mesh visible>
          <planeGeometry/>
          <meshStandardMaterial map={spriteMap}/>
        </mesh>
      </Canvas>
    </div>
  );
}

export default Avatar;
