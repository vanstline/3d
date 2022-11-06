import * as THREE from 'three';

interface ILight {
    color?: THREE.ColorRepresentation | undefined,
    intensity?: number | undefined,
    distance?: number | undefined,
    decay?: number | undefined
}

interface ILightItem {
    light?: ILight
    position?: number[]
}

/**
 * 环境灯
 *
 * @param {THREE.Scene} scene scene
 * @param {ILightItem[]} lightList lightList
 */
function envLight (scene: THREE.Scene, lightList: ILightItem[]) {
    lightList?.forEach((item) => {
        const { color = 0xffffff, intensity = 10.0, distance = 28, decay = 2 } = item.light || { };
        const [x = 5, y = 3, z = 0] = item.position || [];
        const light = new THREE.PointLight(color, intensity, distance, decay);
        light.position.set(x, y, z);
        scene.add(light);
    });
}

export default envLight;
