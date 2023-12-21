

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';
export default function BatteryModel(props) {
  const group = useRef();
  const { nodes, materials} = useGLTF("/battery.glb");


  // Function to change the color of a material based on temperature
  const changeMaterialColorByTemperature = (material, temperature) => {
    // Convert temperature to a color value based on specified ranges
    const colorValue = calculateColorFromTemperature(temperature);

    // Set the material color
    material.color.set(colorValue);
  };
  const changeMaterialColor = (material, color) => {
        material.color.set(color);
      };

  // Function to calculate color from temperature based on specified ranges
  const calculateColorFromTemperature = (temperature) => {
    if (temperature < 20) {
      // Dark blue for temperatures below 20
      return new THREE.Color(0, 0, 0.2);
    } else if (temperature < 35) {
      // Green for temperatures below 35
      return new THREE.Color(0, 0.2,0);
    } else if (temperature < 55) {
      // Dark red for temperatures below 55
      return new THREE.Color(0.37, 0, 0);
    } else {
      // Default color for temperatures outside specified ranges
      return new THREE.Color(1, 1, 1);
    }
  };

  // Example temperature value (replace this with your actual temperature value)
  const temperature =50;
  

  // Change the color of specific materials based on temperature
  if (materials["02_-_Default"]) {
    changeMaterialColorByTemperature(materials["02_-_Default"], temperature);
  }

  if (materials["01_-_Default"]) {
        changeMaterialColor(materials["01_-_Default"], 0x000000); // Change to black
      }

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} >
          <group
            name="c4d57a97cb5041e9b66edb297aee38fffbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.04}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Object001"
                  position={[-3.316, 5.218, 1.381]}
                  scale={0.103}
                >
                  <group
                    name="Object_5"
                    position={[-373.449, -75.894, -853.582]}
                  >
                    <mesh
                      name="Object001_02_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object001_02_-_Default_0"].geometry}
                      material={materials["02_-_Default"]}
                    />
                  </group>
                </group>
                <group
                  name="Object002"
                  position={[-3.316, 5.218, 1.381]}
                  scale={0.103}
                >
                  <group
                    name="Object_8"
                    position={[-373.449, -75.894, -853.582]}
                  >
                    <mesh
                      name="Object002_02_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object002_02_-_Default_0"].geometry}
                      material={materials["02_-_Default"]}
                    />
                    <mesh
                      name="Object002_02_-_Default_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object002_02_-_Default_0_1"].geometry}
                      material={materials["02_-_Default"]}
                    />
                  </group>
                </group>
                <group
                  name="Object003"
                  position={[-3.316, 5.218, 1.381]}
                  scale={0.103}
                >
                  <group
                    name="Object_12"
                    position={[-373.449, -75.894, -853.582]}
                  >
                    <mesh
                      name="Object003_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object003_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                    />
                    <mesh
                      name="Object003_01_-_Default_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes["Object003_01_-_Default_0_1"].geometry}
                      material={materials["01_-_Default"]}
                    />
                  </group>
                </group>
                <group
                  name="Torus011"
                  position={[-3.332, 13.973, 2.296]}
                  rotation={[-Math.PI / 2, 0, -1.811]}
                  scale={0.962}
                >
                  <group name="Object_16" position={[-2.649, 10.835, 0.184]}>
                    <mesh
                      name="Torus011_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Torus011_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                    />
                    <mesh
                      name="Torus011_01_-_Default_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes["Torus011_01_-_Default_0_1"].geometry}
                      material={materials["01_-_Default"]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/battery.glb");



