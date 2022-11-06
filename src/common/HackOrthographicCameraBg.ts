import * as THREE from 'three';

interface IProps {
    renderer: THREE.WebGLRenderer
    camera: THREE.OrthographicCamera
    scene: THREE.Scene
    width: number
    height: number
}

/**
 * HackOrthographicCameraBg
 *
 * @class HackOrthographicCameraBg
 */
class HackOrthographicCameraBg {
    private renderer!: THREE.WebGLRenderer

    private scene!: THREE.Scene

    private camera!: THREE.OrthographicCamera

    private camera2!: THREE.PerspectiveCamera

    private width!: number

    private height!: number

    /**
     * Creates an instance of HackOrthographicCameraBg.
     * @param {IProps} props props
     */
    constructor(props: IProps) {
        Object.entries(props).forEach(([key, value]) => {
            this[key] = value;
        });

        this.init();
    }

    /**
     * init
     *
     * @private
     * @memberof HackOrthographicCameraBg
     */
    private init() {
        const { camera, width, height } = this;
        this.camera2 = new THREE.PerspectiveCamera(40, width / height, 1, 10000);
        this.camera2.position.copy(camera.position);
    }

    /**
     * render
     *
     * @memberof HackOrthographicCameraBg
     */
    public render() {
        const { renderer, scene, camera, camera2 } = this;
        renderer.autoClear = true;
        renderer.render(scene, camera2);
        renderer.autoClear = false;
        renderer.render(scene, camera);
    }
}

export default HackOrthographicCameraBg;
