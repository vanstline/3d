/* eslint-disable no-useless-constructor */
/* eslint-disable require-jsdoc */
import { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * ThreeScene
 *
 * @class ThreeScene
 */
class ThreeScene<P> extends Component<P> {
    protected scene!: THREE.Scene;

    protected camera!: THREE.PerspectiveCamera;

    protected renderer!: THREE.WebGL1Renderer;

    protected control!: OrbitControls;

    protected stage!: THREE.Group;

    protected clothMesh!: THREE.Group;

    protected light!: THREE.PointLight

    protected spotLight!: THREE.SpotLight

    constructor(props: P) {
        super(props);
    }

    /**
     * 注册
     *
     * @param {string} key key
     * @param {*} [val] val
     * @memberof ThreeScene
     */
    register(key: string, val?: any) {
        this[key] = val;
    }

    /**
     * add
     *
     * @param {THREE.Object3D<THREE.Event>[]} object object
     * @return {*}  {THREE.Scene}
     * @memberof ThreeScene
     */
    add(...object: THREE.Object3D<THREE.Event>[]): THREE.Scene {
        this.scene.add(...object);
        return this.scene;
    }

    /**
     * remove
     *
     * @param {THREE.Object3D<THREE.Event>[]} object object
     * @return {*}  {THREE.Scene}
     * @memberof ThreeScene
     */
    remove(...object: THREE.Object3D<THREE.Event>[]): THREE.Scene {
        this.scene.remove(...object);
        return this.scene;
    }
}

export default ThreeScene;
