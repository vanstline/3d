/* eslint-disable max-statements */
import * as THREE from 'three';

const loader = new THREE.CubeTextureLoader();

const paths = [
    'textures/cube/Bridge/',
    'textures/cube/Park/',
    'textures/cube/MilkyWay/',
    'textures/cube/SkyBox/'
];

export const pathMaps = ['桥梁', '公园', '银河', '天空'];

/**
 * bridgeCube
 *
 * @param {THREE.Scene} scene scene
 * @param {number} index index
 * @param {THREE.BufferGeometry} geometry geometry
 * @param {THREE.Material} material material
 */
const bridgeCube = (scene: THREE.Scene, index: number, geometry?: THREE.BufferGeometry, material?: THREE.Material) => {
    const texture = loader
        .setPath(paths[index])
        .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);

    texture.mapping = THREE.CubeRefractionMapping;
    scene.background = texture;

    const geo = geometry || new THREE.BoxGeometry(0, 0, 0);
    const curreMaterial = material || new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: texture, refractionRatio: 0.95 });

    const mesh = new THREE.Mesh(geo, curreMaterial);
    scene.add(mesh);
};

export default bridgeCube;
