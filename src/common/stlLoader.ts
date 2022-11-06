/* eslint-disable max-statements */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
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
    let mesh!: THREE.Mesh;

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

    camera.position.set(2000, 2000, 2000);

    const hackOrthographic = new HackOrthographicCameraBg({ renderer, camera, scene, width, height });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.minZoom = 1;
    controls.maxZoom = 1000;
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

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

    const loader = new STLLoader();

    loader.load(`${path}.stl`, (geometry: THREE.BufferGeometry) => {
        geometry.center();

        geometry.computeBoundingSphere();
        const maxDiameter = Number(geometry.boundingSphere?.radius) * 2;
        const widthZoom = window.innerWidth / maxDiameter;
        const heightZoom = window.innerHeight / maxDiameter;
        const minZoom = Math.min(widthZoom, heightZoom);
        camera.zoom = minZoom;
        camera.updateProjectionMatrix();

        geometry.rotateX(-1.5);
        geometry.rotateY(-3.2);
        geometry.rotateZ(0);

        const stlMaterial = new THREE.MeshLambertMaterial();
        mesh = new THREE.Mesh(geometry, stlMaterial);
        scene.add(mesh);

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
