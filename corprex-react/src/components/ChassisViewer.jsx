import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Text, Decal } from '@react-three/drei'
import * as THREE from 'three'

function SimpleChassisModel() {
  const groupRef = useRef()
  const [textures, setTextures] = useState({})
  const [logoTexture, setLogoTexture] = useState(null)
  
  // Auto-rotate the entire group
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15
    }
  })

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader()
    const loadedTextures = {}
    
    // Load all textures as PNG files
    const texturePaths = {
      front: '/textures/chassis/front.png',
      back: '/textures/chassis/back.png',
      left: '/textures/chassis/left.png',
      right: '/textures/chassis/right.png',
      top: '/textures/chassis/top.png'
    }
    
    // Load logo
    textureLoader.load(
      '/corprex-logo.png',
      (texture) => setLogoTexture(texture),
      undefined,
      () => console.log('Logo not found, using text instead')
    )
    
    const promises = Object.entries(texturePaths).map(([face, path]) => {
      return new Promise((resolve) => {
        textureLoader.load(
          path,
          (texture) => {
            loadedTextures[face] = texture
            resolve()
          },
          undefined,
          () => resolve() // Silently fail if texture not found
        )
      })
    })
    
    Promise.all(promises).then(() => {
      setTextures(loadedTextures)
    })
  }, [])

  // Create materials for each face
  const materials = [
    new THREE.MeshStandardMaterial({ 
      map: textures.right || null,
      color: textures.right ? 0xffffff : 0x1a1a1a,
      metalness: 0.3,
      roughness: 0.7
    }),
    new THREE.MeshStandardMaterial({ 
      map: textures.left || null,
      color: textures.left ? 0xffffff : 0x1a1a1a,
      metalness: 0.3,
      roughness: 0.7
    }),
    new THREE.MeshStandardMaterial({ 
      map: textures.top || null,
      color: textures.top ? 0xffffff : 0x2a2a2a,
      metalness: 0.3,
      roughness: 0.7
    }),
    new THREE.MeshStandardMaterial({ 
      color: 0x404040, // Grey bottom surface
      metalness: 0.2,
      roughness: 0.8
    }),
    new THREE.MeshStandardMaterial({ 
      map: textures.front || null,
      color: textures.front ? 0xffffff : 0x1a1a1a,
      metalness: 0.3,
      roughness: 0.7
    }),
    new THREE.MeshStandardMaterial({ 
      map: textures.back || null,
      color: textures.back ? 0xffffff : 0x1a1a1a,
      metalness: 0.3,
      roughness: 0.7
    })
  ]

  // Chassis dimensions based on actual measurements:
  // 458mm (Depth) x 440mm (Width) x 239mm (Height)
  // Using proportional scaling where 440mm (width) = 2.2 units for better fit within frame
  const scaleFactor = 2.2 / 440 // 0.005 units per mm
  const chassisWidth = 440 * scaleFactor  // 2.2 units (17.32")
  const chassisHeight = 239 * scaleFactor // 1.195 units (9.41")
  const chassisDepth = 458 * scaleFactor  // 2.29 units (18.03")

  return (
    <group ref={groupRef}>
      <mesh material={materials}>
        <boxGeometry args={[chassisWidth, chassisHeight, chassisDepth]} />
      </mesh>
      
      {/* Corprex Logo on front face */}
      {logoTexture ? (
        <mesh position={[-chassisWidth/3.2 + chassisWidth * 0.05, 0.08 - chassisHeight * 0.19, chassisDepth/2 + 0.01]}>
          <planeGeometry args={[1.2, 1.2]} />
          <meshBasicMaterial 
            map={logoTexture} 
            transparent={true}
            opacity={1}
            alphaTest={0.5}  // This removes the background
            side={2}
          />
        </mesh>
      ) : (
        <Text
          position={[-chassisWidth/3.2 + chassisWidth * 0.05, 0.08 - chassisHeight * 0.19, chassisDepth/2 + 0.02]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          CORPREX
        </Text>
      )}
      
      {/* OMEGA text on front face, bottom right */}
      <Text
        position={[chassisWidth/2.3, -chassisHeight/2.6, chassisDepth/2 + 0.02]}
        fontSize={0.08}
        color="#e5e7eb"
        anchorX="right"
        anchorY="bottom"
      >
        OMEGA
      </Text>
      
    </group>
  )
}

export default function ChassisViewer() {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="chassis-viewer-container" style={{ width: '100%', height: '100%', background: 'transparent' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100%',
          color: '#666'
        }}>
          3D Model Loading...
        </div>
      </div>
    )
  }

  return (
    <div className="chassis-viewer-container" style={{ 
      width: '100%', 
      height: '100%', 
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Canvas
        camera={{ position: [5.5, 2.5, 5.5], fov: 35 }}
        onError={() => setError(true)}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, 3, -5]} intensity={0.4} />
        
        <SimpleChassisModel />
        
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minPolarAngle={Math.PI * 0.3}   // Prevents looking from above
          maxPolarAngle={Math.PI * 0.45}  // Locks before horizontal, prevents looking from below
          autoRotate={false}
          zoomSpeed={0.5}
          minDistance={6}
          maxDistance={8}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  )
}