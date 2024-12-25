import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMousePosition } from '@/hooks/useMousePosition';

const ROTATION_LIMITS = {
  x: Math.PI / 3, // Increased to 60 degrees up/down for more noticeable movement
  y: Math.PI / 2, // 90 degrees left/right
};

const ROTATION_SPEED = 0.08;
const PULSE_SPEED = 0.03;

export function RobotHead() {
  const robotRef = useRef<THREE.Group>();
  const mousePosition = useMousePosition();
  const pulseRef = useRef(0);
  const currentRotation = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    if (!robotRef.current) return;

    // Create head base
    const headGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5, 1, 1, 1);
    const headMaterial = new THREE.MeshPhongMaterial({
      color: 0xA855F7,
      emissive: 0xA855F7,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.9,
      flatShading: true,
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    robotRef.current.add(head);

    // Create eyes with more detail
    const eyeGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const eyeMaterial = new THREE.MeshPhongMaterial({
      color: 0xFFFFFF,
      emissive: 0xA855F7,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.9,
    });

    // Add eye sockets
    const socketGeometry = new THREE.RingGeometry(0.22, 0.25, 32);
    const socketMaterial = new THREE.MeshPhongMaterial({
      color: 0xA855F7,
      emissive: 0xA855F7,
      emissiveIntensity: 0.3,
      side: THREE.DoubleSide,
    });

    // Left eye group
    const leftEyeGroup = new THREE.Group();
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    const leftSocket = new THREE.Mesh(socketGeometry, socketMaterial);
    leftSocket.position.z = 0.76;
    leftEye.position.z = 0.75;
    leftEyeGroup.position.set(-0.4, 0.2, 0);
    leftEyeGroup.add(leftEye, leftSocket);
    robotRef.current.add(leftEyeGroup);

    // Right eye group
    const rightEyeGroup = new THREE.Group();
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    const rightSocket = new THREE.Mesh(socketGeometry, socketMaterial);
    rightSocket.position.z = 0.76;
    rightEye.position.z = 0.75;
    rightEyeGroup.position.set(0.4, 0.2, 0);
    rightEyeGroup.add(rightEye, rightSocket);
    robotRef.current.add(rightEyeGroup);

    // Create detailed antenna
    const antennaGroup = new THREE.Group();
    
    // Main antenna shaft
    const shaftGeometry = new THREE.CylinderGeometry(0.05, 0.08, 0.6);
    const shaftMaterial = new THREE.MeshPhongMaterial({
      color: 0xA855F7,
      emissive: 0xA855F7,
      emissiveIntensity: 0.3,
    });
    const shaft = new THREE.Mesh(shaftGeometry, shaftMaterial);
    shaft.position.y = 0.9;
    antennaGroup.add(shaft);

    // Antenna tip (glowing orb)
    const tipGeometry = new THREE.SphereGeometry(0.12, 16, 16);
    const tipMaterial = new THREE.MeshPhongMaterial({
      color: 0xA855F7,
      emissive: 0xA855F7,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.9,
    });
    const tip = new THREE.Mesh(tipGeometry, tipMaterial);
    tip.position.y = 1.3;
    antennaGroup.add(tip);

    robotRef.current.add(antennaGroup);

    return () => {
      robotRef.current?.clear();
    };
  }, []);

  useFrame(() => {
    if (!robotRef.current) return;

    // Update pulse effect
    pulseRef.current += PULSE_SPEED;
    const pulse = Math.sin(pulseRef.current) * 0.2 + 0.8;

    // Update all materials' emissive intensity
    robotRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshPhongMaterial;
        material.emissiveIntensity = pulse;
      }
    });

    // Calculate normalized mouse position (-1 to 1)
    const x = (mousePosition.x / window.innerWidth) * 2 - 1;
    const y = -(mousePosition.y / window.innerHeight) * 2 + 1;

    // Enhanced vertical tracking
    // Invert the Y rotation when looking up to create more natural movement
    const targetRotationX = THREE.MathUtils.clamp(
      -y * ROTATION_LIMITS.x, // Inverted Y for more natural up/down movement
      -ROTATION_LIMITS.x,
      ROTATION_LIMITS.x
    );
    
    const targetRotationY = THREE.MathUtils.clamp(
      x * ROTATION_LIMITS.y,
      -ROTATION_LIMITS.y,
      ROTATION_LIMITS.y
    );

    // Smooth rotation with easing
    currentRotation.current.x += (targetRotationX - currentRotation.current.x) * ROTATION_SPEED;
    currentRotation.current.y += (targetRotationY - currentRotation.current.y) * ROTATION_SPEED;

    // Apply rotations with enhanced vertical movement
    robotRef.current.rotation.x = currentRotation.current.x;
    robotRef.current.rotation.y = currentRotation.current.y;

    // Update eye focus with enhanced vertical tracking
    robotRef.current.children.forEach((child) => {
      if (child instanceof THREE.Group && (child.position.x === -0.4 || child.position.x === 0.4)) {
        const eyeRotationY = x * 0.2;
        const eyeRotationX = -y * 0.2; // Inverted for natural eye movement
        child.rotation.y = eyeRotationY;
        child.rotation.x = eyeRotationX;
      }
    });
  });

  return (
    <group ref={robotRef} position={[0, 0, 0]}>
      <pointLight position={[0, 2, 2]} intensity={1} color={0xA855F7} />
      <pointLight position={[-2, -2, -2]} intensity={0.5} color={0xA855F7} />
    </group>
  );
}