/* eslint-disable lines-between-class-members */
/* eslint-disable react/sort-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable require-jsdoc */
import * as React from 'react';
import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

/**
 * SceneComponent
 *
 * @class SceneComponent
 * @extends {React.Component}
 */
class SceneComponent extends React.Component<{ clientInfos?: number[] }> {
    //  创建一个 ref 来存储 textInput 的 DOM 元素
    private container = React.createRef<HTMLDivElement>() as any;

    public scene!: THREE.Scene;

    private camera!: THREE.PerspectiveCamera;

    private renderer!: THREE.WebGL1Renderer;

    private stage!: THREE.Group;

    private control!: OrbitControls;

    public frameId: number = 0;

    private clothMesh!: THREE.Group;

    private room!: THREE.Mesh;

    private stats!: Stats;

    private axis!: THREE.AxesHelper;

    constructor(props: { clientInfos?: number[] }) {
        super(props);
    }

    componentDidMount() {
        this.initThree();
    }

    /**
     * 灯光
     *
     * @private
     * @memberof SceneComponent
     */
    private light() {
        const light = new THREE.HemisphereLight(0x9999ff, 0x888888, 2); // 半球光/环境光:(天空色，地面色，强度)
        light.position.set(0, 20, 0);
        this.scene.add(light);

        // const light2 = new THREE.DirectionalLight(0xffffff, 2);
        // light2.position.set(1, 1, 1)
        // this.scene.add(light2);

        // 上左
        const leftLight = new THREE.PointLight(0xffffff, 10.0, 28, 2); // 颜色，强度=1，距离=0，衰变=2
        leftLight.position.set(5, 3, 0);
        this.scene.add(leftLight);

        // 上前
        const frontLight = new THREE.PointLight(0xffffff, 10.0, 28, 2); // 颜色，强度=1，距离=0，衰变=2
        frontLight.position.set(0, 1, 5);
        this.scene.add(frontLight);
        // 下右
        const rightLight = new THREE.PointLight(0xffffff, 10.0, 28, 2); // 颜色，强度=1，距离=0，衰变=2
        rightLight.position.set(-5, -2, 0);
        this.scene.add(rightLight);
        // 下后
        const backLight = new THREE.PointLight(0xffffff, 10.0, 28, 2); // 颜色，强度=1，距离=0，衰变=2
        backLight.position.set(0, -2, -5);
        this.scene.add(backLight);
        // 顶部
        const topLight = new THREE.PointLight(0xffffff, 10.0, 28, 2); // 颜色，强度=1，距离=0，衰变=2
        topLight.position.set(0, 10, 0);
        this.scene.add(topLight);
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
        this.camera.position.set(0, 0, 45);
        this.scene.add(this.camera);

        // 灯光
        this.light();

        //  根容器
        this.stage = new THREE.Group();
        this.scene.add(this.stage);

        //  坐标轴
        // this.axis = new THREE.AxesHelper(200);
        // this.scene.add(this.axis);
        //  stats 帧数
        this.stats = new (Stats as any)();
        this.stats.dom.style.visibility = 'hidden';
        this.container.current.appendChild(this.stats.dom);

        // 环境 天空盒
        // this.createEnvronment()

        //  渲染器
        this.renderer = new THREE.WebGL1Renderer({
            antialias: true, // 是否开启反锯齿
            precision: 'highp', // precision:highp/mediump/lowp 着色精度
            alpha: true, //  背景色透明
            preserveDrawingBuffer: false //  是否保存绘图缓冲
        });
        // this.renderer.setClearColor('#E9EAEA', 0); // 设置背景颜色
        const { clientInfos = [0, 0] } = this.props;
        const [width = 0, height = 0] = clientInfos?.length ? clientInfos : [window.innerWidth, window.innerHeight];
        this.renderer.setSize(width, height);
        // this.renderer.setSize('100%', '100%');
        this.container.current.appendChild(this.renderer.domElement);

        //  轨道控制器
        this.control = new OrbitControls(this.camera, this.renderer.domElement);

        this.control.minZoom = 1;
        this.control.maxZoom = 1000;
        this.control.minDistance = 1;
        this.control.maxDistance = 1000;

        //  开始渲染循环
        const render: FrameRequestCallback = () => {
            this.stats.update();
            this.control.update();
            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
        window.addEventListener('resize', this.onWindowResize.bind(this), false);
    }

    public loadObjModel(baseUrl: string, fileName: string, quality: number = 0) {
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
            // const url = `${baseUrl + fileName}.obj`;
            // ModelLoader.instance.loader.setMaterials(materials);
            // await ModelLoader.instance.getModel(url).then((object) => {
            //     this.clothMesh = object;
            //     this.stage.add(this.clothMesh);
            //     console.log(object, ModelLoader.instance.loader);
            // });
            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load(`${baseUrl + fileName}.obj`, (object) => {
                this.clothMesh = object;
                this.stage.add(this.clothMesh);
            });
        });
    }

    public changeStats(value: any) {
        const str = value ? 'visible' : 'hidden';
        this.stats.dom.style.visibility = str;
    }

    public changeAxis(value: boolean) {
        this.axis.visible = value;
    }

    private onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    componentWillUnmount() {
        this.stop();
        this.container.current.removeChild(this.renderer.domElement);
    }

    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate);
        }
    };

    stop = () => {
        cancelAnimationFrame(this.frameId);
    };

    animate = () => {
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    };

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
