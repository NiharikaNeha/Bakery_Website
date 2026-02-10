// 3D Cake Model Loader
import * as THREE from 'three';

export class CakeModel {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.clock = new THREE.Clock();
    this.animations = {};
    
    this.createCake();
    this.setupLights();
    this.scene.add(this.group);
  }

  createCake() {
    // Cake Base Layer
    const baseGeometry = new THREE.CylinderGeometry(1, 1, 0.3, 32);
    const baseMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x8B4513,
      roughness: 0.8,
      metalness: 0.1
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = 0;
    base.castShadow = true;
    base.receiveShadow = true;
    this.group.add(base);

    // Cake Middle Layer
    const middleGeometry = new THREE.CylinderGeometry(0.9, 0.9, 0.3, 32);
    const middleMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xD2691E,
      roughness: 0.7,
      metalness: 0.1
    });
    const middle = new THREE.Mesh(middleGeometry, middleMaterial);
    middle.position.y = 0.4;
    middle.castShadow = true;
    middle.receiveShadow = true;
    this.group.add(middle);

    // Cake Top Layer
    const topGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.3, 32);
    const topMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xDEB887,
      roughness: 0.6,
      metalness: 0.1
    });
    const top = new THREE.Mesh(topGeometry, topMaterial);
    top.position.y = 0.8;
    top.castShadow = true;
    top.receiveShadow = true;
    this.group.add(top);

    // Frosting
    const frostingGeometry = new THREE.SphereGeometry(0.9, 32, 16);
    const frostingMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xFFC0CB,
      roughness: 0.3,
      metalness: 0.2
    });
    const frosting = new THREE.Mesh(frostingGeometry, frostingMaterial);
    frosting.position.y = 1.1;
    frosting.scale.y = 0.5; // Flatten it
    frosting.castShadow = true;
    this.group.add(frosting);

    // Cherry
    const cherryGeometry = new THREE.SphereGeometry(0.15, 16, 8);
    const cherryMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xDC143C,
      roughness: 0.2,
      metalness: 0.3,
      emissive: 0x8B0000,
      emissiveIntensity: 0.1
    });
    const cherry = new THREE.Mesh(cherryGeometry, cherryMaterial);
    cherry.position.y = 1.5;
    cherry.castShadow = true;
    this.group.add(cherry);

    // Decorative Ring
    const decorationGeometry = new THREE.TorusGeometry(1.2, 0.05, 16, 100);
    const decorationMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xFFD700,
      roughness: 0.1,
      metalness: 0.8,
      emissive: 0xFFD700,
      emissiveIntensity: 0.2
    });
    const decoration = new THREE.Mesh(decorationGeometry, decorationMaterial);
    decoration.position.y = 0;
    decoration.rotation.x = Math.PI / 2;
    decoration.castShadow = true;
    this.group.add(decoration);

    // Store references for animation
    this.cakeParts = {
      base,
      middle,
      top,
      frosting,
      cherry,
      decoration
    };
  }

  setupLights() {
    // Add point lights to the group for better illumination
    const topLight = new THREE.PointLight(0xFFD700, 0.5, 10);
    topLight.position.set(0, 3, 2);
    this.group.add(topLight);

    const sideLight = new THREE.PointLight(0xFFC0CB, 0.3, 8);
    sideLight.position.set(-2, 1, 2);
    this.group.add(sideLight);
  }

  update(deltaTime) {
    const time = this.clock.getElapsedTime();

    // Rotation animation
    this.group.rotation.y = Math.sin(time * 0.5) * 0.1;

    // Float animation
    this.group.position.y = Math.sin(time * 2) * 0.2;

    // Cherry wobble
    if (this.cakeParts.cherry) {
      this.cakeParts.cherry.rotation.x = Math.sin(time * 3) * 0.1;
      this.cakeParts.cherry.rotation.z = Math.cos(time * 3) * 0.1;
    }

    // Decoration rotation
    if (this.cakeParts.decoration) {
      this.cakeParts.decoration.rotation.z = time * 0.5;
    }
  }

  setScale(scale) {
    this.group.scale.setScalar(scale);
  }

  setPosition(x, y, z) {
    this.group.position.set(x, y, z);
  }
}

// Export for use in React component
export default CakeModel;