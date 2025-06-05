import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import * as THREE from 'three'
import Lights from './Lights';
// import Loader from './Loader';
import IPhone from './IPhone';
import { Suspense } from "react";


const ModelView = ({ index, groupRef, gsapType,controlRef,setRotationSize, size, item}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={` w-full h-full ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <perspectiveCamera makeDefault  position={[0, 0, 0]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationSize(controlRef.current.getAzimuthalAngle())}
        // minPolarAngle={Math.PI / 2}
        // maxPolarAngle={Math.PI / 2}
      />

      <group ref={groupRef} name={`${index === 1 ? 'small' : 'large'}`} position={[0, 0, 0]}>
      <Suspense fallback={<Html><div>Loading</div></Html>}>
        <IPhone />
        scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
      </Suspense>
      </group>
    </View>
  )
}

export default ModelView