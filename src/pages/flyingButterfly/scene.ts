/* eslint-disable max-statements */
/* eslint-disable no-unused-vars */
import * as THREE from 'three';
// import { GUI } from 'dat.gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import bridgeCube from '@/common/texture';

// let isFlag = false;
/**
 * renderObj
 *
 * @param {string} path path
 * @param {HTMLDivElement} container container
 * @param {*} [clientInfo] clientInfo
 * @param {*} sceneIndex sceneIndex
 */
function renderObj(path: string, container: HTMLDivElement, clientInfo?: number[], sceneIndex?: number) {
    let mixer: THREE.AnimationMixer;

    let isAnimation = false;
    const clock = new THREE.Clock();
    const width = clientInfo?.[0] || window.innerWidth;
    const height = clientInfo?.[1] || window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    const scene = new THREE.Scene();
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(40, width / height, 1, 100);
    camera.position.set(5, 2, 8);

    const controls = new OrbitControls(camera, renderer.domElement);

    controls.target.set(0, 0.5, 0);
    controls.update();
    // controls.minZoom = 100;
    // controls.maxZoom = 1000;
    controls.minDistance = 1;
    controls.maxDistance = 50;
    controls.enablePan = false;
    controls.enableDamping = true;

    // const gui = new GUI();

    // const ctrlObj = {
    //     minDis: 0,
    //     maxDis: 0
    // };

    // gui.add(ctrlObj, 'minDis', 0, 500, 1).onChange((e) => {
    //     console.log(e, 'controls');
    //     controls.minDistance = e;
    // });
    // gui.add(ctrlObj, 'maxDis', 0, 10000, 1).onChange((e) => {
    //     controls.maxDistance = e;
    // });

    if (sceneIndex && sceneIndex > 0) {
        bridgeCube(scene, sceneIndex ? sceneIndex - 1 : 3);
    }

    const loader = new GLTFLoader();

    // loader.load('assets/model/hudie/hudie.glb', (gltf: GLTF) => {
    loader.load(`${path}.glb`, (gltf: GLTF) => {
        const model = gltf.scene;

        model.scale.set(10, 10, 10);
        scene.add(model);

        isAnimation = !!gltf.animations.length;
        if (isAnimation) {
            isAnimation = true;
            mixer = new THREE.AnimationMixer(model);
            mixer.clipAction(gltf.animations[0]).play();
        }

        // if (!isFlag) {
        // initGUI();
        //     isFlag = true;
        // }

        animate();
    });

    window.onresize = function () {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    };
    // /**
    //  * initGUI
    //  *
    //  */
    // function initGUI() {
    //     const gui = new GUI();

    //     const data = { background: 0 };
    //     console.log('----initGUI----');

    //     gui.add(data, 'background', pathMaps).onChange((e) => {
    //         bridgeCube(scene, e);
    //     });
    // }
    /**
     * animate
     *
     */
    function animate() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        requestAnimationFrame(animate);

        if (isAnimation) {
            const delta = clock.getDelta();
            mixer.update(delta);
        }

        controls.update();

        renderer.render(scene, camera);
    }
}

export default renderObj;
