/* eslint-disable max-statements */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import HackOrthographicCameraBg from '@/common/HackOrthographicCameraBg';
import bridgeCube from '@/common/texture';

/**
 * renderObj
 *
 * @param {string} path path
 * @param {HTMLDivElement} container container
 * @param {*} [clientInfo] clientInfo
 * @param {*} [sceneIndex] sceneIndex
 */
function renderObj(path: string, container: HTMLDivElement, clientInfo?: number[], sceneIndex?: number) {
    const width = clientInfo?.[0] || window.innerWidth;
    const height = clientInfo?.[1] || window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    // const camera = new THREE.PerspectiveCamera(40, width / height, 1, 10000);
    const camera = new THREE.OrthographicCamera(
        window.innerWidth / -1,
        window.innerWidth / 1,
        window.innerHeight / 1,
        window.innerHeight / -1,
        -2000,
        10000
    );
    // camera.position.set(0, 0, 45);
    camera.position.set(2000, 2000, 500);

    const hackOrthographic = new HackOrthographicCameraBg({ renderer, scene, camera, width, height });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;
    // controls.minZoom = 1;
    // controls.maxZoom = 1000;

    // 聚光灯
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(60, 90, 65);
    spotLight.angle = Math.PI;
    spotLight.castShadow = true;
    spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    spotLight.shadow.camera.far = 130;
    spotLight.shadow.camera.near = 100;
    scene.add(spotLight);

    const ambientLight = new THREE.AmbientLight(0xf0f0f0, 0.2);
    scene.add(ambientLight);

    if (sceneIndex) {
        bridgeCube(scene, sceneIndex ? sceneIndex - 1 : 1);
    }

    const loader = new FBXLoader();

    loader.load(`${path}.fbx`, (object) => {
        const box = new THREE.Box3().setFromObject(object);
        const { max, min } = box;
        const standard = width / 4;
        const x = (max.x + min.x) / 2;
        const y = (max.y + min.y) / 2;
        const z = (max.z + min.z) / 2;
        object.position.set(-x, -y, -z + 200);

        const disX = max.x - min.x;
        const disY = max.y - min.y;
        const disZ = max.z - min.z;
        const maxNumber = Math.max(disX, disY, disZ);
        const size = (standard / maxNumber) * 2;

        object.scale.set(size, size, size);
        scene.add(object);
        animate();
    });

    window.onresize = function () {
        // camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    };

    /**
     * animate
     *
     */
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        render();
    }

    /**
     * render
     *
     */
    function render() {
        const vector = camera.position.clone();
        spotLight.position.set(vector.x, vector.y, vector.z);
        hackOrthographic.render();
        renderer.render(scene, camera);
    }
}

export default renderObj;
