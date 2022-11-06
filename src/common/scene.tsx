/* eslint-disable max-statements */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/sort-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable require-jsdoc */
import * as React from 'react';
import * as THREE from 'three';
// import { GUI } from 'dat.gui';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import ThreeScene from '@/common/three';
import flyingButterflyScene from '@/pages/flyingButterfly/scene';
import stlLoader from '@/common/stlLoader';
import fbxLoader from '@/common/fbxLoader';
import bridgeCube from '@/common/texture';
import envLight from '@/common/light/envLight';

interface IProps {
    clientInfos?: number[]
    sceneIndex?: number
    showStand?: boolean
}

/**
 * SceneComponent
 *
 * @class SceneComponent
 * @extends {React.Component}
 */
class SceneComponent extends ThreeScene<IProps> {
    //  创建一个 ref 来存储 textInput 的 DOM 元素
    private container = React.createRef<HTMLDivElement>() as any;

    public frameId: number = 0;

    private currentType: string = '';

    // private gui: GUI = new GUI();

    constructor(props: { clientInfos?: number[] }) {
        super(props);
    }

    componentDidMount() {
        // this.initThree();
    }

    /**
     * mesh
     *
     * @private
     * @memberof SceneComponent
     */
    private mesh() {
        // const geometry = new THREE.BoxGeometry(1, 1, 1);
        // const material = new THREE.MeshPhongMaterial({ color: 0xffff00 });
        // const mesh = new THREE.Mesh(geometry, material);
        // this.scene.add(mesh);
    }

    /**
     * addSpotLight
     *
     * @private
     * @memberof SceneComponent
     */
    private setLight() {
        const { x, y, z } = this.camera.position;

        if (!this.light) {
            this.light = new THREE.PointLight(0xffffff, 1.8);
            this.light.position.set(x, y, z + 500);
            this.add(this.light);
        } else {
            this.light.position.set(x, y, z + 500);
        }
        this.add(this.light);
    }

    /**
     * addSpotLight
     *
     * @private
     * @memberof SceneComponent
     */
    private setSpotLight() {
        const { x, y, z } = this.camera.position;

        if (!this.spotLight) {
            this.spotLight = new THREE.SpotLight(0xffffff, 0.5);
            this.spotLight.position.set(x + 1000, y + 1500, z + 500);
            this.add(this.spotLight);
        }
        this.add(this.spotLight);
    }

    /**
     * initThree
     *
     * @private
     * @memberof SceneComponent
     */
    private initThree() {
        this.scene = new THREE.Scene();

        //  camera
        this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.set(0, 300, 300);
        this.camera.lookAt(0, 0, 0);
        this.scene.add(this.camera);

        //  根容器
        this.stage = new THREE.Group();
        this.scene.add(this.stage);

        // mesh
        this.mesh();

        //  渲染器
        this.renderer = new THREE.WebGL1Renderer({
            antialias: true, // 是否开启反锯齿
            precision: 'highp', // precision:highp/mediump/lowp 着色精度
            alpha: true, //  背景色透明
            preserveDrawingBuffer: false //  是否保存绘图缓冲
        });
        // this.renderer.setClearColor('#E9EAEA', 0); // 设置背景颜色
        const { clientInfos = [0, 0], sceneIndex = 0 } = this.props;
        const [width = 0, height = 0] = clientInfos?.length ? clientInfos : [window.innerWidth, window.innerHeight];
        this.renderer.setSize(width, height);
        // this.renderer.setSize('100%', '100%');
        this.container.current.appendChild(this.renderer.domElement);

        //  轨道控制器
        this.control = new OrbitControls(this.camera, this.renderer.domElement);

        // 缩放范围
        // this.control.enableZoom = false;

        if (sceneIndex && sceneIndex > 0) {
            bridgeCube(this.scene, sceneIndex ? sceneIndex - 1 : 3);
        }
        this.control.minDistance = 1;
        this.control.maxDistance = 10000;

        // this.control.enableZoom = false;

        //  开始渲染循环
        const render: FrameRequestCallback = () => {
            this.control.update();
            this.setLight();
            // this.setSpotLight();
            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
        window.addEventListener('resize', this.onWindowResize.bind(this), false);
    }

    private loadMTL(model: { baseUrl: string; fileName: string }, quality: number = 0) {
        const { baseUrl, fileName } = model;
        const mtlLoader = new MTLLoader();
        if (this.clothMesh) {
            this.stage.clear();
            this.clothMesh = null as any;
        }
        const mtlQuality = quality == 0 ? '' : `_${quality}`;
        // 开启跨域
        mtlLoader.setCrossOrigin('Anonymous');
        mtlLoader.setMaterialOptions({ side: THREE.DoubleSide });
        mtlLoader.load(`${baseUrl + fileName + mtlQuality}.mtl`, async (materials) => {
            materials.preload();
            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load(`${baseUrl + fileName}.obj`, (object) => {
                this.clothMesh = object;
                this.stage.add(this.clothMesh);
                this.renderScene();
            });
        });
    }

    private loadOBJ(model: { baseUrl: string; fileName: string }) {
        const { baseUrl, fileName } = model;
        const objLoader = new OBJLoader();
        objLoader.load(`${baseUrl + fileName}.obj`, (object: THREE.Object3D) => {
            const box = new THREE.Box3().setFromObject(object);
            const childrenList = object.children as THREE.Mesh[];
            childrenList?.forEach((item: any) => {
                item.material.color.set('#333');
            });

            object.castShadow = true;

            const { max, min } = box;
            const x = (max.x + min.x) / 2;
            const y = (max.y + min.y) / 2;
            const z = (max.z + min.z) / 2;
            object.position.set(-x, -y, -z);
            this.scene.add(object);

            const disX = max.x - min.x;
            const disY = max.y - min.y;
            const disZ = max.z - min.z;

            if (this.props.showStand) {
                const ratioH2W = disY / (Math.min(disX, disZ));

                const minRatio = Math.max(ratioH2W, 0.8);

                const radius = Math.sqrt(disX ** 2 + disZ ** 2) * minRatio;

                const geometry = new THREE.CircleGeometry(radius * 1, 32000);
                const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide });
                const plane = new THREE.Mesh(geometry, material);
                plane.position.set(0, 0 - (disY / 2), 0);
                plane.rotateX((Math.PI / 180) * 90);

                this.scene.add(plane);
            }

            this.camera.position.set(disX, disY, disZ + 1200);

            this.setLight();
            this.setSpotLight();
        });
    }

    public loadObjModel(model: { baseUrl: string; fileName: string; type: string }, quality: number = 0) {
        if (this.currentType) {
            this.container.current.innerHTML = null;
        }

        this.currentType = model.type;

        if (model.type === 'mtl') {
            this.initThree();
            // 灯光
            this.setLight();
            envLight(this.scene, [
                { position: [5, 3, 0] },
                { position: [0, 1, 5] },
                { position: [-5, -2, 0] },
                { position: [0, -2, -5] },
                { position: [0, 10, 0] }
            ]);
            this.loadMTL(model, quality);
        }

        if (model.type === 'obj') {
            this.initThree();
            this.loadOBJ(model);
        }

        if (model.type === 'glb') {
            flyingButterflyScene(model.baseUrl + model.fileName, this.container.current, this.props.clientInfos, this.props.sceneIndex);
        }

        if (model.type === 'stl') {
            stlLoader(model.baseUrl + model.fileName, this.container.current, this.props.clientInfos, this.props.sceneIndex);
        }

        if (model.type === 'fbx') {
            fbxLoader(model.baseUrl + model.fileName, this.container.current, this.props.clientInfos, this.props.sceneIndex);
        }
    }

    private onWindowResize() {
        const { clientInfos = [0, 0] } = this.props;
        const [width = 0, height = 0] = clientInfos?.length ? clientInfos : [window.innerWidth, window.innerHeight];
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }

    componentWillUnmount() {
        this.container.current.removeChild(this.renderer.domElement);
    }

    renderScene = () => {
        if (this.control) {
            this.control.update();
        }
        if (this.renderer) {
            this.renderer.render(this.scene, this.camera);
        }
    };

    render() {
        return <div className="ipm-three-container" ref={this.container} />;
    }
}

export default SceneComponent;

// hYFtFghoNDo
// hYcANWWEB7G
