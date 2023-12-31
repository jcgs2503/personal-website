/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/avatar.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {/* highlight-line */
  actions['Armature|mixamo.com|Layer0'].play(); /* highlight-line */
  }); /* highlight-line */
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001">
          <skinnedMesh
            name="EyeLeft001"
            geometry={nodes.EyeLeft001.geometry}
            material={materials["Wolf3D_Eye.002"]}
            skeleton={nodes.EyeLeft001.skeleton}
            morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight001"
            geometry={nodes.EyeRight001.geometry}
            material={materials["Wolf3D_Eye.002"]}
            skeleton={nodes.EyeRight001.skeleton}
            morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Body001"
            geometry={nodes.Wolf3D_Body001.geometry}
            material={materials["Wolf3D_Body.002"]}
            skeleton={nodes.Wolf3D_Body001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Body001.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Body001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Glasses001"
            geometry={nodes.Wolf3D_Glasses001.geometry}
            material={materials["Wolf3D_Glasses.002"]}
            skeleton={nodes.Wolf3D_Glasses001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair001"
            geometry={nodes.Wolf3D_Hair001.geometry}
            material={materials["Wolf3D_Hair.002"]}
            skeleton={nodes.Wolf3D_Hair001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head001"
            geometry={nodes.Wolf3D_Head001.geometry}
            material={materials["Wolf3D_Skin.002"]}
            skeleton={nodes.Wolf3D_Head001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom001"
            geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
            material={materials["Wolf3D_Outfit_Bottom.002"]}
            skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton}
            morphTargetDictionary={
              nodes.Wolf3D_Outfit_Bottom001.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Wolf3D_Outfit_Bottom001.morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear001"
            geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
            material={materials["Wolf3D_Outfit_Footwear.002"]}
            skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton}
            morphTargetDictionary={
              nodes.Wolf3D_Outfit_Footwear001.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Wolf3D_Outfit_Footwear001.morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top001"
            geometry={nodes.Wolf3D_Outfit_Top001.geometry}
            material={materials["Wolf3D_Outfit_Top.002"]}
            skeleton={nodes.Wolf3D_Outfit_Top001.skeleton}
            morphTargetDictionary={
              nodes.Wolf3D_Outfit_Top001.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Wolf3D_Outfit_Top001.morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Wolf3D_Teeth001"
            geometry={nodes.Wolf3D_Teeth001.geometry}
            material={materials["Wolf3D_Teeth.002"]}
            skeleton={nodes.Wolf3D_Teeth001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences}
          />
          <primitive object={nodes.Hips} />
          <primitive object={nodes.Mouse} />
        </group>
        <group name="Desk" position={[0.06, 0.555, 0.6]} scale={0.171}>
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials.wood}
          />
          <mesh
            name="Cube_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials.metal}
          />
        </group>
        <group
          name="Keyboard"
          position={[-0.093, 0.769, 0.649]}
          rotation={[Math.PI / 2, 0, 3.006]}
          scale={0.139}
        >
          <mesh
            name="Small_Buttons001"
            castShadow
            receiveShadow
            geometry={nodes.Small_Buttons001.geometry}
            material={materials.Small_Buttons}
          />
          <mesh
            name="Small_Buttons001_1"
            castShadow
            receiveShadow
            geometry={nodes.Small_Buttons001_1.geometry}
            material={materials.Chassis}
          />
          <mesh
            name="Small_Buttons001_2"
            castShadow
            receiveShadow
            geometry={nodes.Small_Buttons001_2.geometry}
            material={materials.Big_Buttons}
          />
        </group>
        <mesh
          name="Pad"
          castShadow
          receiveShadow
          geometry={nodes.Pad.geometry}
          material={materials["Material.053"]}
          position={[-0.36, 0.748, 0.696]}
          rotation={[-Math.PI, 1.516, -Math.PI]}
          scale={[0.17, 0.164, 0.211]}
        />
        <mesh
          name="Monitor"
          castShadow
          receiveShadow
          geometry={nodes.Monitor.geometry}
          material={materials["Material.003"]}
          position={[0.005, 0.826, 1.217]}
          rotation={[0, 1.566, 0]}
          scale={[-0.459, -0.072, -0.459]}
        />
        <mesh
          name="Macbook"
          castShadow
          receiveShadow
          geometry={nodes.Macbook.geometry}
          material={materials.MacBookPro}
          position={[0.823, 0.754, 0.814]}
          rotation={[0, -0.645, 0]}
          scale={1.371}
        />
        <group name="Chair" position={[0.121, 0.007, 0]}>
          <mesh
            name="Plane005"
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={materials.MacBookPro}
          />
          <mesh
            name="Plane005_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane005_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Plane005_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane005_2.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Plane005_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane005_3.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            name="Plane005_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane005_4.geometry}
            material={materials["aseito logo"]}
          />
        </group>
        <group
          name="Resume"
          position={[-1.01, 0.758, 0.987]}
          rotation={[3.134, 0.17, 3.134]}
          scale={0.087}
        />
        <group
          name="HEADER7x2_J22"
          position={[-0.548, 0.76, 0.946]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.001}
        >
          <mesh
            name="HEADER7x2_J22_1"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_1.geometry}
            material={materials.Plastic_Polymer_Black}
          />
          <mesh
            name="HEADER7x2_J22_2"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_2.geometry}
            material={materials.Aluminium_Brushed}
          />
          <mesh
            name="HEADER7x2_J22_3"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_3.geometry}
            material={materials["Gold.Fake"]}
          />
          <mesh
            name="HEADER7x2_J22_4"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_4.geometry}
            material={materials.Plastic_Polymer_Orange}
          />
          <mesh
            name="HEADER7x2_J22_5"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_5.geometry}
            material={materials["Solder.PBR"]}
          />
          <mesh
            name="HEADER7x2_J22_6"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_6.geometry}
            material={materials.Plastic_Polymer_Brown}
          />
          <mesh
            name="HEADER7x2_J22_7"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_7.geometry}
            material={materials.Plastic_Polymer_White}
          />
          <mesh
            name="HEADER7x2_J22_8"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_8.geometry}
            material={materials.Plastic_Polymer_Grey}
          />
          <mesh
            name="HEADER7x2_J22_9"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_9.geometry}
            material={materials.Plastic_Polymer_Red}
          />
          <mesh
            name="HEADER7x2_J22_10"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_10.geometry}
            material={materials.STEEL_PITTED}
          />
          <mesh
            name="HEADER7x2_J22_11"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_11.geometry}
            material={materials.Del_green}
          />
          <mesh
            name="HEADER7x2_J22_12"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_12.geometry}
            material={materials.DEL_RED}
          />
          <mesh
            name="HEADER7x2_J22_13"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_13.geometry}
            material={materials["Texture SN"]}
          />
          <mesh
            name="HEADER7x2_J22_14"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_14.geometry}
            material={materials.Dark_Green}
          />
          <mesh
            name="HEADER7x2_J22_15"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_15.geometry}
            material={materials.DEL_Green}
          />
          <mesh
            name="HEADER7x2_J22_16"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_16.geometry}
            material={materials.Led_Glass_Green}
          />
          <mesh
            name="HEADER7x2_J22_17"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_17.geometry}
            material={materials.DEL_BLUE}
          />
          <mesh
            name="HEADER7x2_J22_18"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_18.geometry}
            material={materials.Led_Glass_Blue}
          />
          <mesh
            name="HEADER7x2_J22_19"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_19.geometry}
            material={materials.Copper}
          />
          <mesh
            name="HEADER7x2_J22_20"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_20.geometry}
            material={materials.Texture_Face_Top}
          />
          <mesh
            name="HEADER7x2_J22_21"
            castShadow
            receiveShadow
            geometry={nodes.HEADER7x2_J22_21.geometry}
            material={materials.Texture_Face_Bottom}
          />
        </group>
        <group
          name="Diary"
          position={[-0.731, 0.79, 0.685]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[-0.033, -0.16, -0.033]}
        >
          <mesh
            name="Cylinder002"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Cylinder002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            name="Cylinder002_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_2.geometry}
            material={materials["Material.012"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/avatar.glb");
